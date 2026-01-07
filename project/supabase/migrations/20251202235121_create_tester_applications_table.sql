/*
  # Create Tester Applications Table

  1. New Tables
    - `tester_applications`
      - `id` (uuid, primary key) - Unique identifier for each application
      - `name` (text) - Full name of the applicant
      - `email` (text) - Email address of the applicant
      - `trading_experience` (text) - Level of trading experience
      - `why_interested` (text) - Reason for interest in testing
      - `testing_commitment` (text) - Commitment level for testing
      - `technical_background` (text) - Technical skills and background
      - `availability` (text) - Time zone and availability information
      - `status` (text) - Application status (pending, approved, declined)
      - `created_at` (timestamptz) - Timestamp of application submission

  2. Security
    - Enable RLS on `tester_applications` table
    - No public read access (admin only)
    - Public insert access for application submission

  3. Important Notes
    - Applications are tagged with 'tester_waitlist' status by default
    - Admin can export applications as CSV through Supabase dashboard
    - Includes indexes for efficient querying by email and status
*/

CREATE TABLE IF NOT EXISTS tester_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  trading_experience text NOT NULL,
  why_interested text NOT NULL,
  testing_commitment text NOT NULL,
  technical_background text,
  availability text,
  status text DEFAULT 'tester_waitlist' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE tester_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (submit application)
CREATE POLICY "Anyone can submit tester application"
  ON tester_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can view applications (for admin access)
CREATE POLICY "Authenticated users can view applications"
  ON tester_applications
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Only authenticated users can update applications (for admin management)
CREATE POLICY "Authenticated users can update applications"
  ON tester_applications
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_tester_applications_email ON tester_applications(email);
CREATE INDEX IF NOT EXISTS idx_tester_applications_status ON tester_applications(status);
CREATE INDEX IF NOT EXISTS idx_tester_applications_created_at ON tester_applications(created_at DESC);
