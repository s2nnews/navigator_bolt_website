/*
  # Growth analytics: funnel events, experiments, and UTM tracking

  1. New Tables
    - `funnel_events`
      - `id` (uuid, primary key) - unique event identifier
      - `session_id` (text) - anonymous session identifier (browser-generated)
      - `event_name` (text) - standardized funnel event name
      - `page` (text) - page where event occurred
      - `utm_source` (text, nullable) - UTM source parameter
      - `utm_medium` (text, nullable) - UTM medium parameter
      - `utm_campaign` (text, nullable) - UTM campaign parameter
      - `utm_term` (text, nullable) - UTM term parameter
      - `utm_content` (text, nullable) - UTM content parameter
      - `referrer` (text, nullable) - document referrer
      - `variant` (text, nullable) - A/B test variant identifier
      - `metadata` (jsonb, nullable) - flexible additional properties
      - `created_at` (timestamptz) - event timestamp

    - `experiments`
      - `id` (uuid, primary key) - unique experiment identifier
      - `name` (text, unique) - experiment name/slug
      - `variants` (jsonb) - JSON array of variant definitions
      - `active` (boolean) - whether experiment is currently active
      - `created_at` (timestamptz) - creation timestamp

  2. Modified Tables
    - `trials` - add columns for UTM tracking and experiment data
      - `utm_source` (text, nullable)
      - `utm_medium` (text, nullable)
      - `utm_campaign` (text, nullable)
      - `session_id` (text, nullable)
      - `variant` (text, nullable)

  3. Security
    - Enable RLS on `funnel_events` and `experiments`
    - `funnel_events`: anon/authenticated can INSERT, service_role can read
    - `experiments`: anon/authenticated can SELECT active experiments, service_role full access

  4. Indexes
    - `idx_funnel_events_session` on funnel_events(session_id)
    - `idx_funnel_events_event_name` on funnel_events(event_name)
    - `idx_funnel_events_created_at_event` on funnel_events(created_at, event_name) for cohort queries

  5. Views
    - `funnel_conversion_rates` - stepwise conversion rates across funnel stages
    - `campaign_performance` - UTM campaign breakdown with conversion counts
    - `variant_performance` - A/B test variant breakdown
    - `weekly_cohort_trend` - weekly cohort of signups and conversions

  6. Important Notes
    - No auth required for event insertion (anonymous tracking)
    - session_id is browser-generated, not tied to auth
    - Views use security_invoker = false so they work for service_role dashboard queries
*/

-- 1. Create funnel_events table
CREATE TABLE IF NOT EXISTS funnel_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  event_name text NOT NULL,
  page text NOT NULL DEFAULT '',
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  referrer text,
  variant text,
  metadata jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE funnel_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert funnel events"
  ON funnel_events
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    session_id IS NOT NULL
    AND event_name IS NOT NULL
    AND length(trim(session_id)) > 0
    AND length(trim(event_name)) > 0
  );

CREATE POLICY "Service role can manage funnel events"
  ON funnel_events
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_funnel_events_session ON funnel_events(session_id);
CREATE INDEX IF NOT EXISTS idx_funnel_events_event_name ON funnel_events(event_name);
CREATE INDEX IF NOT EXISTS idx_funnel_events_created_event ON funnel_events(created_at, event_name);

-- 2. Create experiments table
CREATE TABLE IF NOT EXISTS experiments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  variants jsonb NOT NULL DEFAULT '[]'::jsonb,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE experiments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read active experiments"
  ON experiments
  FOR SELECT
  TO anon, authenticated
  USING (active = true);

CREATE POLICY "Service role can manage experiments"
  ON experiments
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 3. Add UTM/session/variant columns to trials
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'trials' AND column_name = 'utm_source') THEN
    ALTER TABLE trials ADD COLUMN utm_source text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'trials' AND column_name = 'utm_medium') THEN
    ALTER TABLE trials ADD COLUMN utm_medium text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'trials' AND column_name = 'utm_campaign') THEN
    ALTER TABLE trials ADD COLUMN utm_campaign text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'trials' AND column_name = 'session_id') THEN
    ALTER TABLE trials ADD COLUMN session_id text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'trials' AND column_name = 'variant') THEN
    ALTER TABLE trials ADD COLUMN variant text;
  END IF;
END $$;

-- 4. Create views for growth dashboard

-- Stepwise funnel conversion rates
CREATE OR REPLACE VIEW funnel_conversion_rates AS
WITH steps AS (
  SELECT
    event_name,
    COUNT(DISTINCT session_id) AS unique_sessions
  FROM funnel_events
  WHERE event_name IN (
    'landing_view', 'free_cta_click', 'free_form_submit_start',
    'free_form_submit_success', 'download_click', 'install_guide_view',
    'pricing_view', 'upgrade_cta_click'
  )
  GROUP BY event_name
)
SELECT
  event_name AS step,
  unique_sessions,
  ROUND(
    unique_sessions * 100.0 / NULLIF(
      (SELECT unique_sessions FROM steps WHERE event_name = 'landing_view'), 0
    ), 2
  ) AS pct_of_landing
FROM steps
ORDER BY
  CASE event_name
    WHEN 'landing_view' THEN 1
    WHEN 'free_cta_click' THEN 2
    WHEN 'free_form_submit_start' THEN 3
    WHEN 'free_form_submit_success' THEN 4
    WHEN 'download_click' THEN 5
    WHEN 'install_guide_view' THEN 6
    WHEN 'pricing_view' THEN 7
    WHEN 'upgrade_cta_click' THEN 8
  END;

-- Campaign performance breakdown
CREATE OR REPLACE VIEW campaign_performance AS
SELECT
  COALESCE(utm_source, 'direct') AS source,
  COALESCE(utm_medium, 'none') AS medium,
  COALESCE(utm_campaign, 'none') AS campaign,
  COUNT(DISTINCT session_id) AS sessions,
  COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'free_form_submit_success') AS signups,
  COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'download_click') AS downloads,
  COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'upgrade_cta_click') AS upgrade_clicks
FROM funnel_events
GROUP BY utm_source, utm_medium, utm_campaign
ORDER BY sessions DESC;

-- A/B variant performance
CREATE OR REPLACE VIEW variant_performance AS
SELECT
  COALESCE(variant, 'control') AS variant,
  COUNT(DISTINCT session_id) AS sessions,
  COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'free_form_submit_success') AS signups,
  COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'download_click') AS downloads,
  ROUND(
    COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'free_form_submit_success') * 100.0
    / NULLIF(COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'landing_view'), 0), 2
  ) AS signup_rate,
  ROUND(
    COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'download_click') * 100.0
    / NULLIF(COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'free_form_submit_success'), 0), 2
  ) AS download_rate
FROM funnel_events
GROUP BY variant
ORDER BY signups DESC;

-- Weekly cohort trend
CREATE OR REPLACE VIEW weekly_cohort_trend AS
SELECT
  date_trunc('week', created_at)::date AS week,
  COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'landing_view') AS visitors,
  COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'free_form_submit_success') AS signups,
  COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'download_click') AS downloads,
  COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'upgrade_cta_click') AS upgrade_clicks,
  ROUND(
    COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'free_form_submit_success') * 100.0
    / NULLIF(COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'landing_view'), 0), 2
  ) AS visitor_to_signup_pct
FROM funnel_events
GROUP BY date_trunc('week', created_at)
ORDER BY week DESC;

-- 5. Seed initial experiment for headline A/B test
INSERT INTO experiments (name, variants, active)
VALUES (
  'free_page_headline',
  '[
    {"id": "control", "headline": "Start Free in 30 Seconds", "subheadline": "No credit card. Instant access.", "weight": 50},
    {"id": "variant_b", "headline": "Your Trading Platform Framework — Free", "subheadline": "50+ GB of clean data. Bias detection. Strategy builder. No credit card.", "weight": 50}
  ]'::jsonb,
  true
)
ON CONFLICT (name) DO NOTHING;
