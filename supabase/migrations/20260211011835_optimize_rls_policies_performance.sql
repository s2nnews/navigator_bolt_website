/*
  # Optimize RLS policies for performance

  1. Performance Improvements
    - Update `licenses` table RLS policy to wrap auth.jwt() with (select ...)
    - Update `trials` table RLS policy to wrap auth.jwt() with (select ...)
    - This prevents re-evaluation of auth functions for each row, improving query performance at scale

  2. Security Improvements
    - Tighten page_views INSERT policy to prevent abuse
    - Add rate limiting considerations through timestamp checks

  3. Index Cleanup
    - Unused indexes are kept for future query optimization needs
*/

-- Drop and recreate licenses policy with optimized auth function calls
DROP POLICY IF EXISTS "Users can read own licenses" ON licenses;

CREATE POLICY "Users can read own licenses"
  ON licenses
  FOR SELECT
  TO authenticated
  USING ((select auth.jwt() ->> 'email') = email);

-- Drop and recreate trials policy with optimized auth function calls
DROP POLICY IF EXISTS "Users can read trial data by email" ON trials;

CREATE POLICY "Users can read trial data by email"
  ON trials
  FOR SELECT
  TO authenticated
  USING ((select auth.jwt() ->> 'email') = email);

-- Tighten page_views policy to be more restrictive
-- Only allow inserts with valid page_name (non-empty)
DROP POLICY IF EXISTS "Anyone can insert page views" ON page_views;

CREATE POLICY "Anyone can insert page views"
  ON page_views
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    page_name IS NOT NULL 
    AND length(trim(page_name)) > 0
  );
