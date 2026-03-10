/*
  # Optimize RLS Policies for Performance

  1. **RLS Performance Optimization**
     - Fix trials table policy to use SELECT subquery for auth functions
     - Fix stripe_customers table policy to use SELECT subquery for auth.uid()
     - Fix stripe_subscriptions table policy to use SELECT subquery for auth.uid()
     - Fix stripe_orders table policy to use SELECT subquery for auth.uid()
     - This prevents re-evaluation for each row, improving query performance at scale

  2. **Security Improvements**
     - Add validation to downloads table INSERT policy
     - Validate platform is either 'windows' or 'macos'
     - Prevent arbitrary data insertion

  3. **Purpose**
     - Improve database query performance at scale
     - Follow Supabase best practices for RLS policies
     - Maintain security while optimizing performance
*/

-- 1. Optimize trials table RLS policy
DROP POLICY IF EXISTS "Users can read trial data by email" ON trials;

CREATE POLICY "Users can read trial data by email"
  ON trials
  FOR SELECT
  TO anon, authenticated
  USING (
    email = (select auth.jwt()->>'email') OR 
    (select auth.jwt()->>'email') IS NULL
  );

-- 2. Optimize stripe_customers table RLS policy
DROP POLICY IF EXISTS "Users can view their own customer data" ON stripe_customers;

CREATE POLICY "Users can view their own customer data"
  ON stripe_customers
  FOR SELECT
  TO authenticated
  USING (
    user_id = (select auth.uid()) AND 
    deleted_at IS NULL
  );

-- 3. Optimize stripe_subscriptions table RLS policy
DROP POLICY IF EXISTS "Users can view their own subscription data" ON stripe_subscriptions;

CREATE POLICY "Users can view their own subscription data"
  ON stripe_subscriptions
  FOR SELECT
  TO authenticated
  USING (
    customer_id IN (
      SELECT customer_id 
      FROM stripe_customers 
      WHERE user_id = (select auth.uid()) AND 
            deleted_at IS NULL
    ) AND 
    deleted_at IS NULL
  );

-- 4. Optimize stripe_orders table RLS policy
DROP POLICY IF EXISTS "Users can view their own order data" ON stripe_orders;

CREATE POLICY "Users can view their own order data"
  ON stripe_orders
  FOR SELECT
  TO authenticated
  USING (
    customer_id IN (
      SELECT customer_id 
      FROM stripe_customers 
      WHERE user_id = (select auth.uid()) AND 
            deleted_at IS NULL
    ) AND 
    deleted_at IS NULL
  );

-- 5. Add validation to downloads table INSERT policy
DROP POLICY IF EXISTS "Anyone can create download records" ON downloads;

CREATE POLICY "Anyone can create download records"
  ON downloads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    platform IS NOT NULL AND 
    platform IN ('windows', 'macos')
  );