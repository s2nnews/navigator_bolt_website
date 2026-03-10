/*
  # Create page views tracking table

  1. New Tables
    - `page_views`
      - `id` (uuid, primary key)
      - `page_name` (text) - name of the page visited
      - `referrer` (text, nullable) - where the visitor came from
      - `user_agent` (text, nullable) - browser/device information
      - `created_at` (timestamptz) - when the page was viewed

  2. Security
    - Enable RLS on `page_views` table
    - Add policy allowing anyone to insert page views (public tracking)
    - No read access needed for public users

  3. Performance
    - Add index on created_at for efficient cleanup queries
*/

CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_name text NOT NULL,
  referrer text,
  user_agent text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert page views"
  ON page_views
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at DESC);
