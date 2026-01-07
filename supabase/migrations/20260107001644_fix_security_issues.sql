/*
  # Fix Security Issues

  ## Changes

  1. **RLS Performance Optimization**
     - Update licenses table policy to use subquery for auth.jwt()
     - This prevents re-evaluation for each row, improving query performance

  2. **Remove Unused Indexes**
     - Drop idx_licenses_email (not being used)
     - Drop idx_tester_applications_email (not being used)
     - Drop idx_tester_applications_status (not being used)
     - Drop idx_tester_applications_created_at (not being used)

  3. **Fix Overly Permissive RLS Policies**
     - Remove overly broad "Anyone can read licenses by session" policy
     - Restrict tester_applications UPDATE/SELECT to service role only
     - Add data validation for public INSERT policies

  4. **Security Improvements**
     - Contact submissions remain public INSERT (intended for contact form)
     - Tester applications INSERT remains public (intended for application form)
     - Tester applications UPDATE/SELECT restricted to admin only
     - License reads now properly scoped to authenticated users only
     - Added basic input validation to prevent empty/invalid submissions
*/

-- 1. Fix RLS Performance: Update licenses policy to use subquery
DROP POLICY IF EXISTS "Users can read own licenses" ON licenses;

CREATE POLICY "Users can read own licenses"
  ON licenses
  FOR SELECT
  TO authenticated
  USING ((select auth.jwt()->>'email') = email);

-- 2. Remove overly permissive anon policy on licenses
DROP POLICY IF EXISTS "Anyone can read licenses by session" ON licenses;

-- 3. Add restrictive policy for service role to manage licenses
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'licenses' 
    AND policyname = 'Service role can manage licenses'
  ) THEN
    CREATE POLICY "Service role can manage licenses"
      ON licenses
      FOR ALL
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- 4. Drop unused indexes
DROP INDEX IF EXISTS idx_licenses_email;
DROP INDEX IF EXISTS idx_tester_applications_email;
DROP INDEX IF EXISTS idx_tester_applications_status;
DROP INDEX IF EXISTS idx_tester_applications_created_at;

-- 5. Fix tester_applications policies - restrict to service role
DROP POLICY IF EXISTS "Authenticated users can view applications" ON tester_applications;
DROP POLICY IF EXISTS "Authenticated users can update applications" ON tester_applications;

CREATE POLICY "Service role can view applications"
  ON tester_applications
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update applications"
  ON tester_applications
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 6. Add basic validation to contact_submissions
-- While INSERT is public (intended for contact form), ensure basic data quality
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON contact_submissions;

CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL AND 
    length(trim(name)) > 0 AND
    email IS NOT NULL AND 
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    subject IS NOT NULL AND 
    length(trim(subject)) > 0 AND
    message IS NOT NULL AND 
    length(trim(message)) > 0
  );

-- 7. Add basic validation to tester_applications
-- While INSERT is public (intended for application form), ensure basic data quality
DROP POLICY IF EXISTS "Anyone can submit tester application" ON tester_applications;

CREATE POLICY "Anyone can submit tester application"
  ON tester_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL AND 
    length(trim(name)) > 0 AND
    email IS NOT NULL AND 
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    why_interested IS NOT NULL AND 
    length(trim(why_interested)) > 0 AND
    user_type IS NOT NULL AND 
    length(trim(user_type)) > 0
  );
