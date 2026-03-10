/*
  # Create Downloads Tracking Table

  1. New Tables
    - `downloads`
      - `id` (uuid, primary key)
      - `platform` (text, not null) - 'windows' or 'macos'
      - `ip_address` (text, nullable) - User IP for analytics
      - `user_agent` (text, nullable) - Browser/OS info
      - `referrer` (text, nullable) - Where the user came from
      - `created_at` (timestamptz, default now())
      
  2. Security
    - Enable RLS on `downloads` table
    - Add policy for anonymous download tracking
    - Add policy for reading download stats

  3. Purpose
    - Track every download click to keep database active
    - Monitor download patterns and platform preferences
    - Provide analytics on user behavior
*/

CREATE TABLE IF NOT EXISTS downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL,
  ip_address text,
  user_agent text,
  referrer text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create download records"
  ON downloads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read download stats"
  ON downloads
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_downloads_platform ON downloads(platform);
CREATE INDEX IF NOT EXISTS idx_downloads_created_at ON downloads(created_at);