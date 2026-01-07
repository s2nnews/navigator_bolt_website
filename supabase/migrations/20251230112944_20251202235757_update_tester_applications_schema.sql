/*
  # Update Tester Applications Table Schema

  1. Schema Changes
    - Drop old columns that are no longer needed
    - Add new comprehensive qualification fields:
      - `user_type` (text) - Type of user (retail trader, professional, etc.)
      - `markets_traded` (text[]) - Array of markets the user trades
      - `backtesting_tools` (text) - Previous backtesting tools used
      - `biggest_problem` (text) - Biggest problem with current backtesting
      - `feedback_commitment` (text) - Can commit to weekly feedback
      - `python_experience` (text) - Level of Python experience
      - `comfortable_early_stage` (text) - Comfortable with early-stage software
      - `preferred_contact` (text) - Preferred contact method
      - `whatsapp` (text) - WhatsApp number if applicable
    - Remove old fields: trading_experience, testing_commitment, technical_background, availability

  2. Important Notes
    - Adds comprehensive qualification data for better tester selection
    - Markets traded stored as array for easier filtering
    - All new fields align with qualification questions
*/

-- Add new columns
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tester_applications' AND column_name = 'user_type'
  ) THEN
    ALTER TABLE tester_applications ADD COLUMN user_type text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tester_applications' AND column_name = 'markets_traded'
  ) THEN
    ALTER TABLE tester_applications ADD COLUMN markets_traded text[];
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tester_applications' AND column_name = 'backtesting_tools'
  ) THEN
    ALTER TABLE tester_applications ADD COLUMN backtesting_tools text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tester_applications' AND column_name = 'biggest_problem'
  ) THEN
    ALTER TABLE tester_applications ADD COLUMN biggest_problem text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tester_applications' AND column_name = 'feedback_commitment'
  ) THEN
    ALTER TABLE tester_applications ADD COLUMN feedback_commitment text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tester_applications' AND column_name = 'python_experience'
  ) THEN
    ALTER TABLE tester_applications ADD COLUMN python_experience text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tester_applications' AND column_name = 'comfortable_early_stage'
  ) THEN
    ALTER TABLE tester_applications ADD COLUMN comfortable_early_stage text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tester_applications' AND column_name = 'preferred_contact'
  ) THEN
    ALTER TABLE tester_applications ADD COLUMN preferred_contact text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tester_applications' AND column_name = 'whatsapp'
  ) THEN
    ALTER TABLE tester_applications ADD COLUMN whatsapp text;
  END IF;
END $$;

-- Drop old columns (only if they exist and table has no critical data)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tester_applications' AND column_name = 'trading_experience'
  ) THEN
    ALTER TABLE tester_applications DROP COLUMN trading_experience;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tester_applications' AND column_name = 'testing_commitment'
  ) THEN
    ALTER TABLE tester_applications DROP COLUMN testing_commitment;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tester_applications' AND column_name = 'technical_background'
  ) THEN
    ALTER TABLE tester_applications DROP COLUMN technical_background;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tester_applications' AND column_name = 'availability'
  ) THEN
    ALTER TABLE tester_applications DROP COLUMN availability;
  END IF;
END $$;