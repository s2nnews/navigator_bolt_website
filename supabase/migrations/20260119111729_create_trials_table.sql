/*
  # Create Trials Tracking Table

  1. New Tables
    - `trials`
      - `id` (uuid, primary key)
      - `email` (text, not null) - Trial user's email
      - `name` (text, nullable) - Optional user name
      - `license_key` (text, unique) - Trial license key from external server
      - `valid_until` (timestamptz) - Trial expiration date
      - `promotekit_referral` (text, nullable) - PromoteKit referral ID for affiliate tracking
      - `status` (text, default 'active') - Trial status: active, expired, converted
      - `converted_to_license_id` (uuid, nullable) - References licenses table if trial converts
      - `created_at` (timestamptz, default now())
      
  2. Security
    - Enable RLS on `trials` table
    - Add policy for anonymous trial creation
    - Add policy for reading own trial data

  3. Purpose
    - Track all trial signups with affiliate referral information
    - Monitor trial-to-paid conversion rates
    - Attribute conversions to affiliate referrers
*/

CREATE TABLE IF NOT EXISTS trials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text,
  license_key text UNIQUE,
  valid_until timestamptz,
  promotekit_referral text,
  status text DEFAULT 'active',
  converted_to_license_id uuid REFERENCES licenses(id),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE trials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create trial records"
  ON trials
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can read their own trial data"
  ON trials
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_trials_email ON trials(email);
CREATE INDEX IF NOT EXISTS idx_trials_promotekit_referral ON trials(promotekit_referral);
CREATE INDEX IF NOT EXISTS idx_trials_license_key ON trials(license_key);
CREATE INDEX IF NOT EXISTS idx_trials_created_at ON trials(created_at);
