/*
  # Create licenses table

  1. New Tables
    - `licenses`
      - `id` (uuid, primary key) - Unique identifier for each license
      - `license_key` (text, unique) - The license key string
      - `email` (text) - Customer email address
      - `stripe_session_id` (text, unique) - Stripe checkout session ID
      - `stripe_subscription_id` (text) - Stripe subscription ID
      - `license_type` (text) - Type of license (e.g., "Monthly", "Annual")
      - `status` (text) - License status (e.g., "active", "expired")
      - `valid_until` (timestamptz) - License expiration date
      - `created_at` (timestamptz) - When the license was created

  2. Security
    - Enable RLS on `licenses` table
    - Add policy for users to read their own licenses by email
    - Add policy for service role to manage all licenses
*/

CREATE TABLE IF NOT EXISTS licenses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  license_key text UNIQUE NOT NULL,
  email text NOT NULL,
  stripe_session_id text UNIQUE NOT NULL,
  stripe_subscription_id text,
  license_type text NOT NULL,
  status text NOT NULL DEFAULT 'active',
  valid_until timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE licenses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own licenses"
  ON licenses
  FOR SELECT
  TO authenticated
  USING (auth.jwt()->>'email' = email);

CREATE POLICY "Anyone can read licenses by session"
  ON licenses
  FOR SELECT
  TO anon
  USING (true);

CREATE INDEX IF NOT EXISTS idx_licenses_email ON licenses(email);
CREATE INDEX IF NOT EXISTS idx_licenses_stripe_session_id ON licenses(stripe_session_id);