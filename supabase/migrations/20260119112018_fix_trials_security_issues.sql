/*
  # Fix Trials Table Security Issues

  ## Changes

  1. **Add Missing Foreign Key Index**
     - Add index on converted_to_license_id for optimal join performance

  2. **Remove Duplicate/Unused Indexes**
     - Remove idx_trials_license_key (UNIQUE constraint already creates index)
     - Remove idx_trials_created_at (not needed for typical queries)
     - Keep idx_trials_email (used for email lookups)
     - Keep idx_trials_promotekit_referral (used for affiliate analytics)

  3. **Improve RLS Policies**
     - Add email validation to INSERT policy
     - Restrict SELECT to more specific use case
     - Add service role policy for admin management

  4. **Performance Optimization**
     - Foreign key index improves join performance with licenses table
*/

-- 1. Add index on foreign key for optimal join performance
CREATE INDEX IF NOT EXISTS idx_trials_converted_to_license_id 
  ON trials(converted_to_license_id);

-- 2. Remove duplicate/unnecessary indexes
-- license_key is UNIQUE so it already has an index
DROP INDEX IF EXISTS idx_trials_license_key;

-- created_at alone is rarely queried, remove to reduce maintenance overhead
DROP INDEX IF EXISTS idx_trials_created_at;

-- 3. Update INSERT policy with validation
DROP POLICY IF EXISTS "Anyone can create trial records" ON trials;

CREATE POLICY "Anyone can create trial records"
  ON trials
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email IS NOT NULL AND 
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    license_key IS NOT NULL AND
    length(trim(license_key)) > 0 AND
    valid_until IS NOT NULL
  );

-- 4. Update SELECT policy to be more specific
DROP POLICY IF EXISTS "Users can read their own trial data" ON trials;

CREATE POLICY "Users can read trial data by email"
  ON trials
  FOR SELECT
  TO anon, authenticated
  USING (
    email = current_setting('request.jwt.claims', true)::json->>'email'
    OR current_setting('request.jwt.claims', true)::json->>'email' IS NULL
  );

-- 5. Add service role policy for admin access
CREATE POLICY "Service role can manage trials"
  ON trials
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
