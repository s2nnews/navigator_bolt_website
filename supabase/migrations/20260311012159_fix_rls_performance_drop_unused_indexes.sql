/*
  # Fix RLS performance and drop unused indexes

  1. RLS Performance Fixes
    - `licenses` table: Replace `auth.jwt()` with `(select auth.jwt())` in
      "Users can read own licenses" policy to avoid per-row re-evaluation
    - `trials` table: Replace `auth.jwt()` with `(select auth.jwt())` in
      "Users can read trial data by email" policy to avoid per-row re-evaluation

  2. Trials INSERT Policy Fix
    - Update "Anyone can create trial records" policy to allow null license_key
      and null valid_until, supporting the new email-only free signup flow

  3. Unused Indexes Dropped
    - `idx_page_views_created_at` on `page_views`
    - `idx_licenses_stripe_session_id` on `licenses`
    - `idx_trials_email` on `trials`
    - `idx_trials_promotekit_referral` on `trials`
    - `idx_downloads_platform` on `downloads`
    - `idx_downloads_created_at` on `downloads`
    - `idx_trials_converted_to_license_id` on `trials`

  4. Important Notes
    - RLS policies are dropped and recreated with optimized auth function calls
    - Indexes removed have had zero usage and only add write overhead
    - The trials INSERT policy now accepts records with null license_key and
      null valid_until to support the free email capture flow
*/

-- 1. Fix RLS on licenses: drop and recreate with (select ...) wrapper
DROP POLICY IF EXISTS "Users can read own licenses" ON licenses;
CREATE POLICY "Users can read own licenses"
  ON licenses
  FOR SELECT
  TO authenticated
  USING ((select auth.jwt() ->> 'email') = email);

-- 2. Fix RLS on trials: drop and recreate with (select ...) wrapper
DROP POLICY IF EXISTS "Users can read trial data by email" ON trials;
CREATE POLICY "Users can read trial data by email"
  ON trials
  FOR SELECT
  TO authenticated
  USING ((select auth.jwt() ->> 'email') = email);

-- 3. Fix trials INSERT policy to allow null license_key and valid_until
DROP POLICY IF EXISTS "Anyone can create trial records" ON trials;
CREATE POLICY "Anyone can create trial records"
  ON trials
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email IS NOT NULL
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

-- 4. Drop unused indexes
DROP INDEX IF EXISTS idx_page_views_created_at;
DROP INDEX IF EXISTS idx_licenses_stripe_session_id;
DROP INDEX IF EXISTS idx_trials_email;
DROP INDEX IF EXISTS idx_trials_promotekit_referral;
DROP INDEX IF EXISTS idx_downloads_platform;
DROP INDEX IF EXISTS idx_downloads_created_at;
DROP INDEX IF EXISTS idx_trials_converted_to_license_id;
