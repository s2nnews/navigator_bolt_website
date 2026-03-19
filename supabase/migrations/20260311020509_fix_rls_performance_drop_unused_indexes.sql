/*
  # Fix security and performance issues

  1. Unindexed Foreign Key
    - Add index on `trials.converted_to_license_id` to support the
      `trials_converted_to_license_id_fkey` foreign key constraint

  2. RLS Auth Function Initialization
    - Replace `auth.jwt()` with `(select auth.jwt())` in:
      - `licenses` policy "Users can read own licenses"
      - `trials` policy "Users can read trial data by email"
    - This prevents re-evaluation of the auth function per row

  3. Unused Indexes
    - Drop `idx_funnel_events_session`, `idx_funnel_events_event_name`,
      and `idx_funnel_events_created_event` on `funnel_events`
    - These were created preemptively but are currently unused;
      they can be re-added when query patterns warrant them

  4. Security Definer Views
    - Recreate `funnel_conversion_rates`, `campaign_performance`,
      `variant_performance`, and `weekly_cohort_trend` with
      `security_invoker = true` so they run with the invoking
      user's permissions rather than the view owner's
*/

-- 1. Index the foreign key on trials.converted_to_license_id
CREATE INDEX IF NOT EXISTS idx_trials_converted_to_license_id
  ON trials(converted_to_license_id);

-- 2. Fix RLS policies to use subquery-wrapped auth functions

DROP POLICY IF EXISTS "Users can read own licenses" ON licenses;
CREATE POLICY "Users can read own licenses"
  ON licenses
  FOR SELECT
  TO authenticated
  USING ((select (auth.jwt() ->> 'email'::text)) = email);

DROP POLICY IF EXISTS "Users can read trial data by email" ON trials;
CREATE POLICY "Users can read trial data by email"
  ON trials
  FOR SELECT
  TO authenticated
  USING ((select (auth.jwt() ->> 'email'::text)) = email);

-- 3. Drop unused indexes on funnel_events
DROP INDEX IF EXISTS idx_funnel_events_session;
DROP INDEX IF EXISTS idx_funnel_events_event_name;
DROP INDEX IF EXISTS idx_funnel_events_created_event;

-- 4. Recreate views with security_invoker = true

CREATE OR REPLACE VIEW funnel_conversion_rates
  WITH (security_invoker = true) AS
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

CREATE OR REPLACE VIEW campaign_performance
  WITH (security_invoker = true) AS
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

CREATE OR REPLACE VIEW variant_performance
  WITH (security_invoker = true) AS
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

CREATE OR REPLACE VIEW weekly_cohort_trend
  WITH (security_invoker = true) AS
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
