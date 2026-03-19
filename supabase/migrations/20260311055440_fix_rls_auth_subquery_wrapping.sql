/*
  # Fix RLS auth function subquery wrapping and drop unused index

  1. RLS Policy Fixes
    - `licenses` "Users can read own licenses": Change from
      `(SELECT (auth.jwt() ->> 'email'))` to `((SELECT auth.jwt()) ->> 'email')`
      so that `auth.jwt()` itself is inside the subquery and evaluated once
    - `trials` "Users can read trial data by email": Same fix

  2. Unused Index
    - Drop `idx_trials_converted_to_license_id` which has not been used

  These changes ensure the auth function is only called once per query
  rather than re-evaluated for each row.
*/

-- Fix licenses policy
DROP POLICY IF EXISTS "Users can read own licenses" ON licenses;
CREATE POLICY "Users can read own licenses"
  ON licenses
  FOR SELECT
  TO authenticated
  USING (((select auth.jwt()) ->> 'email') = email);

-- Fix trials policy
DROP POLICY IF EXISTS "Users can read trial data by email" ON trials;
CREATE POLICY "Users can read trial data by email"
  ON trials
  FOR SELECT
  TO authenticated
  USING (((select auth.jwt()) ->> 'email') = email);

-- Drop unused index
DROP INDEX IF EXISTS idx_trials_converted_to_license_id;
