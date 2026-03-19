/*
  # Rename trials table to free_signups

  1. Table Rename
    - Rename `trials` -> `free_signups`
    - All existing columns and data are preserved automatically
    - Foreign key to `licenses(id)` via `converted_to_license_id` is preserved

  2. Index Renames
    - `trials_pkey` -> `free_signups_pkey`
    - `trials_license_key_key` (unique constraint index) -> `free_signups_license_key_key`

  3. RLS Policy Replacement
    - Drop all existing policies on the renamed table
    - Recreate with updated names:
      - "Anyone can create free signup records" (INSERT for anon, authenticated)
      - "Users can read free signup data by email" (SELECT for anon, authenticated)
      - "Service role can manage free signups" (ALL for service_role)
    - Policy logic is preserved exactly as before

  4. Important Notes
    - This is a non-destructive rename; no data is lost
    - All foreign key constraints are automatically carried over by ALTER TABLE RENAME
    - Historical migration files are NOT modified
*/

-- 1. Rename the table
ALTER TABLE IF EXISTS trials RENAME TO free_signups;

-- 2. Rename the primary key index
ALTER INDEX IF EXISTS trials_pkey RENAME TO free_signups_pkey;

-- 3. Rename the unique constraint index on license_key
ALTER INDEX IF EXISTS trials_license_key_key RENAME TO free_signups_license_key_key;

-- 4. Drop old RLS policies (they reference old naming)
DROP POLICY IF EXISTS "Anyone can create trial records" ON free_signups;
DROP POLICY IF EXISTS "Users can read trial data by email" ON free_signups;
DROP POLICY IF EXISTS "Service role can manage trials" ON free_signups;

-- 5. Recreate INSERT policy
CREATE POLICY "Anyone can create free signup records"
  ON free_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email IS NOT NULL AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

-- 6. Recreate SELECT policy
CREATE POLICY "Users can read free signup data by email"
  ON free_signups
  FOR SELECT
  TO anon, authenticated
  USING (
    (select auth.jwt()) ->> 'email' = email
  );

-- 7. Recreate service role policy
CREATE POLICY "Service role can manage free signups"
  ON free_signups
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
