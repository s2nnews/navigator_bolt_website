import { useState } from 'react';
import { DocSidebar } from '../components/DocSidebar';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Callout } from '../components/Callout';
import { VideoEmbed } from '../components/VideoEmbed';
import { WhyMostBacktestsLieContent } from '../components/articles/WhyMostBacktestsLie';
import { ResearchIntegrityInPracticeContent } from '../components/articles/ResearchIntegrityInPractice';
import { SurvivorshipBiasContent } from '../components/articles/SurvivorshipBias';
import { DeflatedSharpeRatioContent } from '../components/articles/DeflatedSharpeRatio';
import { ConfidenceBeatsPerformanceContent } from '../components/articles/ConfidenceBeatsPerformance';
import { ProbabilityOfBacktestOverfittingContent } from '../components/articles/ProbabilityOfBacktestOverfitting';
import { MonitoringStrategyContent } from '../components/articles/MonitoringStrategy';
import { SmoothEquityCurvesContent } from '../components/articles/SmoothEquityCurves';
import { BrokenVsUnluckyContent } from '../components/articles/BrokenVsUnlucky';

interface DocsProps {
  onNavigate: (page: string) => void;
  initialDoc?: string;
}

const docSections = [
  {
    title: 'Getting Started',
    items: [
      { id: 'installation', label: 'Installation' },
      { id: 'overview', label: 'Overview' },
      {
        id: 'data-farm',
        label: 'Data Farm',
        subitems: [
          { id: 'data-farm-introduction', label: 'Introduction' },
          { id: 'data-farm-tradestation', label: 'TradeStation Setup' },
          { id: 'data-farm-mt5', label: 'MT5 IC Markets Setup' },
          { id: 'data-farm-build-vs-connect', label: 'Data Farming' },
          { id: 'data-farm-live-streamer', label: 'Live Streamer' },
          { id: 'data-farm-database-location', label: 'Database Location' },
        ]
      },
      { id: 'license-upgrade', label: 'License Upgrade' },
    ],
  },
  {
    title: 'Guides',
    items: [
      {
        id: 'strategy-builder',
        label: 'Strategy Builder',
        subitems: [
          { id: 'strategy-builder-overview', label: 'Overview' },
          { id: 'first-backtest', label: 'Your First Backtest' },
          { id: 'understanding-results', label: 'Understanding Results' },
        ]
      },
      { id: 'data-sources', label: 'Data Sources' },
      { id: 'optimization', label: 'Optimization' },
      { id: 'live-trading', label: 'Live Trading' },
    ],
  },
  {
    title: 'Advanced',
    items: [
      { id: 'advanced', label: 'Overview' },
      { id: 'advanced/custom-indicators', label: 'Custom Indicators' },
      { id: 'advanced/optimization-techniques', label: 'Optimization Techniques' },
      { id: 'advanced/ai-features', label: 'AI Features' },
      { id: 'advanced/portfolio-analysis', label: 'Portfolio Analysis' },
    ],
  },
  {
    title: 'Concepts',
    items: [
      { id: 'glossary', label: 'Glossary' },
      { id: 'metrics', label: 'Performance Metrics' },
      { id: 'risk-management', label: 'Risk Management' },
    ],
  },
  {
    title: 'Knowledge Base',
    items: [
      { id: 'why-most-backtests-lie', label: 'Why Most Backtests Lie' },
      { id: 'research-integrity-in-practice', label: 'Research Integrity in Practice' },
      { id: 'survivorship-bias-the-invisible-killer', label: 'Survivorship Bias' },
      { id: 'deflated-sharpe-ratio', label: 'The Deflated Sharpe Ratio' },
      { id: 'confidence-beats-performance', label: 'Confidence Beats Performance' },
      { id: 'probability-of-backtest-overfitting', label: 'Probability of Backtest Overfitting' },
      { id: 'monitoring-strategy', label: 'What It Means to Monitor a Strategy' },
      { id: 'smooth-equity-curves', label: 'Why Smooth Equity Curves Are a Red Flag' },
      { id: 'broken-vs-unlucky', label: 'When a Strategy Is Broken vs Just Unlucky' },
    ],
  },
  {
    title: 'FAQs',
    items: [
      { id: 'faqs', label: 'Common Questions' },
      { id: 'troubleshooting', label: 'Troubleshooting' },
    ],
  },
];

const docContent: Record<string, { title: string; content: JSX.Element }> = {
  'getting-started': {
    title: 'Getting Started with S2N Navigator',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          This guide walks you through installing S2N Navigator for the first time and getting the application running successfully.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Choose Your Access Option</h2>
        <p className="text-gray-300 mb-4">
          The first step is to obtain S2N Navigator from the website.
        </p>
        <p className="text-gray-300 mb-4">
          Navigate to the <strong>Pricing</strong> page and choose one of the three available options:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>Free Trial</strong></li>
          <li><strong>Launch Special Price</strong></li>
          <li><strong>Pro License</strong></li>
        </ul>
        <p className="text-gray-300 mb-4">
          Most users will begin with the <strong>Free Trial</strong>.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_01.png"
            alt="Registering a License popup"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Get Your License Code and Download Link</h2>
        <p className="text-gray-300 mb-4">
          After completing your selection, you will see a confirmation popup showing:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
          <li>Your <strong>license code</strong></li>
          <li>A <strong>download link</strong> for S2N Navigator</li>
        </ul>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_02.jpg"
            alt="License and download popup"
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-gray-300 mb-4">
          You will also receive an email with the same details.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_03.png"
            alt="Confirmation email"
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-gray-300 mb-4">
          When clicking on download you will be faced with a choice of Windows or Mac.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/downloads_page.png"
            alt="Windows or Mac"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Manage Your Subscription (If Applicable)</h2>
        <p className="text-gray-300 mb-4">
          If you purchased a subscription, you can manage it at any time by clicking <strong>"Manage Subscription"</strong> in the website footer.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_05.png"
            alt="Manage Subscription location"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 4: Download the Installer ZIP</h2>
        <p className="text-gray-300 mb-4">
          Download the ZIP file from the link provided.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/zip_downloads.png"
            alt="Downloaded ZIP file"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 5: Extract the ZIP</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
          <li>Double-click the ZIP file — it will open like a folder</li>
          <li>Click <strong>"Extract All"</strong></li>
        </ol>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_10.png"
            alt="Extract All button"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 6: Choose the Installation Location</h2>
        <p className="text-gray-300 mb-4">
          A window will pop up asking where you want to extract/install S2N Navigator.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
          <li>Click <strong>"Browse"</strong></li>
        </ol>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_04.png"
            alt="Browse button"
            className="rounded-lg w-full"
          />
        </div>
        <ol start={2} className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
          <li>Select the <strong>C: drive</strong> (recommended)</li>
        </ol>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_03_B.png"
            alt="Choose C drive"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 7: Confirm the Folder Exists on C:\</h2>
        <p className="text-gray-300 mb-4">
          If everything worked as it should, you will see the <strong>S2N Navigator</strong> folder on the <strong>C:</strong> drive. Double-click the folder.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_07.png"
            alt="S2N Navigator folder on C drive"
            className="rounded-lg w-full"
          />
        </div>

        
        <h2 className="text-2xl font-bold mt-8 mb-4">Step 9: Launch the Application</h2>
        <p className="text-gray-300 mb-4">
          Inside the folder, locate the <strong>S2N Navigator</strong> application (the executable) and double-click it.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_06.png"
            alt="Launch the Executable File"
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-gray-300 mb-4">
          A blue screen is likely to appear you need to click on the More Info button.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/blue_screen.png"
            alt="Blue Screen"
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-gray-300 mb-4">
          Now click on Run Anyway it is 100% safe.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/run_anyway.png"
            alt="Run Anyway"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 10: Enter Your License and Activate</h2>
        <p className="text-gray-300 mb-4">
          You will be prompted to enter your license code. Enter it and activate.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_09.png"
            alt="License entry prompt"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 11: Success — Navigator Opens</h2>
        <p className="text-gray-300 mb-4">
          If you reach the main application screen, the install was successful.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_08.png"
            alt="Navigator running successfully"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">You're Ready</h2>
        <p className="text-gray-300 mb-4">
          At this point:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>S2N Navigator is installed</li>
          <li>Your license is active</li>
          <li>The application is running</li>
        </ul>
        <Callout type="tip" title="Your Journey Starts Here">
          You're all set! Explore the documentation to learn how to build strategies, run backtests, and deploy live.
        </Callout>
      </div>
    ),
  },
  'installation': {
    title: 'Installation',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          This guide walks you through installing S2N Navigator for the first time and getting the application running successfully.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Choose Your Access Option</h2>
        <p className="text-gray-300 mb-4">
          The first step is to obtain S2N Navigator from the website.
        </p>
        <p className="text-gray-300 mb-4">
          Navigate to the <strong>Pricing</strong> page and choose one of the three available options:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>Free Trial</strong></li>
          <li><strong>Launch Special Price</strong></li>
          <li><strong>Pro License</strong></li>
        </ul>
        <p className="text-gray-300 mb-4">
          Most users will begin with the <strong>Free Trial</strong>.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_01.png"
            alt="Registering a License popup"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Get Your License Code and Download Link</h2>
        <p className="text-gray-300 mb-4">
          After completing your selection, you will see a confirmation popup showing:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
          <li>Your <strong>license code</strong></li>
          <li>A <strong>download link</strong> for S2N Navigator</li>
        </ul>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_02.jpg"
            alt="License and download popup"
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-gray-300 mb-4">
          You will also receive an email with the same details.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_03.png"
            alt="Confirmation email"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Manage Your Subscription (If Applicable)</h2>
        <p className="text-gray-300 mb-4">
          If you purchased a subscription, you can manage it at any time by clicking <strong>"Manage Subscription"</strong> in the website footer.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_05.png"
            alt="Manage Subscription location"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 4: Download the Installer ZIP</h2>
        <p className="text-gray-300 mb-4">
          Download the ZIP file from the link provided.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_11.png"
            alt="Downloaded ZIP file"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 5: Extract the ZIP</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
          <li>Double-click the ZIP file — it will open like a folder</li>
          <li>Click <strong>"Extract All"</strong></li>
        </ol>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_10.png"
            alt="Extract All button"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 6: Choose the Installation Location</h2>
        <p className="text-gray-300 mb-4">
          A window will pop up asking where you want to extract/install S2N Navigator.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
          <li>Click <strong>"Browse"</strong></li>
        </ol>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_04.png"
            alt="Browse button"
            className="rounded-lg w-full"
          />
        </div>
        <ol start={2} className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
          <li>Select the <strong>C: drive</strong> (recommended)</li>
        </ol>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_03_B.png"
            alt="Choose C drive"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 7: Confirm the Folder Exists on C:\</h2>
        <p className="text-gray-300 mb-4">
          If everything worked as it should, you will see the <strong>S2N Navigator</strong> folder on the <strong>C:</strong> drive. Double-click the folder.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_07.png"
            alt="S2N Navigator folder on C drive"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 8: Launch the Application</h2>
        <p className="text-gray-300 mb-4">
          Inside the folder, locate the <strong>S2N Navigator</strong> application (the executable) and double-click it.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_06.png"
            alt="Launch the Executable File"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 9: Enter Your License and Activate</h2>
        <p className="text-gray-300 mb-4">
          You will be prompted to enter your license code. Enter it and activate.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_09.png"
            alt="License entry prompt"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 10: Success — Navigator Opens</h2>
        <p className="text-gray-300 mb-4">
          If you reach the main application screen, the install was successful.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/getting-started_08.png"
            alt="Navigator running successfully"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">You're Ready</h2>
        <p className="text-gray-300 mb-4">
          At this point:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>S2N Navigator is installed</li>
          <li>Your license is active</li>
          <li>The application is running</li>
        </ul>
        <Callout type="tip" title="Next: First-Time Orientation">
          Now head to the Overview section to learn about Navigator's key features before running your first backtest.
        </Callout>
      </div>
    ),
  },
  'overview': {
    title: 'First-Time Orientation',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Before you do anything else, we recommend opening the Settings panel in the Navigator cockpit.
        </p>

        <p className="text-gray-300 mb-4">
          This is where you configure your preferred:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>AI provider</li>
          <li>Broker</li>
          <li>Market data vendor</li>
        </ul>
        <p className="text-gray-300 mb-4">
          Entering your API credentials upfront ensures the rest of the system behaves exactly as you expect. You can always return to this later, but setting it once at the start avoids unnecessary friction.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/cockpit_settings.png"
            alt="Cockpit Settings"
            className="rounded-lg w-full"
          />
        </div>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/settings_credentials.png"
            alt="Settings Credentials"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Navigator Cockpit</h2>
        <p className="text-gray-300 mb-4">
          Your first stop is the Navigator cockpit.
        </p>
        <p className="text-gray-300 mb-4">
          Think of this as the control centre of the entire framework — a high-level dashboard that gives you visibility into your research, strategies, deployments, and live monitoring.
        </p>
        <p className="text-gray-300 mb-4">
          Nothing here is random. The cockpit is designed to keep you oriented as complexity increases, so you always know:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>what you're working on,</li>
          <li>where it sits in the pipeline,</li>
          <li>and what requires attention.</li>
        </ul>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/cockpit_dashboard.png"
            alt="Navigator Cockpit Dashboard"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Strategy Development as a Workflow (Kanban)</h2>
        <p className="text-gray-300 mb-4">
          In our experience building software and complex systems, organisation is not optional — it's a prerequisite for success.
        </p>
        <p className="text-gray-300 mb-4">
          Navigator applies a Kanban-style workflow to strategy development. This allows you to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>track ideas as they move from research → testing → deployment,</li>
          <li>see bottlenecks clearly,</li>
          <li>and avoid the common trap of half-finished strategies scattered across files and notebooks.</li>
        </ul>
        <p className="text-gray-300 mb-4">
          Strategy development is not a linear process. The framework reflects that reality.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/strategy_pipeline_kanban_dashboard.png"
            alt="Strategy Pipeline Kanban"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Integrated Journal</h2>
        <p className="text-gray-300 mb-4">
          Anyone serious about personal development understands the value of keeping a journal.
        </p>
        <p className="text-gray-300 mb-4">
          Trading and investing are no different.
        </p>
        <p className="text-gray-300 mb-4">
          Instead of forcing you to maintain a separate trading journal, Navigator includes an integrated journaling system that lives alongside your strategies, research, and live deployments.
        </p>
        <p className="text-gray-300 mb-4">
          This ensures that:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>decisions are documented in context,</li>
          <li>emotions and assumptions are captured in real time,</li>
          <li>and learning compounds rather than being lost.</li>
        </ul>
        <p className="text-gray-300 mb-4">
          The goal is not record-keeping for its own sake, but reflection with purpose.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/journal_dashboard.png"
            alt="Integrated Journal"
            className="rounded-lg w-full"
          />
        </div>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/strategy_pipeline_kanban_dashboard.png"
            alt="Strategy Pipeline Kanban Dashboard"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Research Notes: Capturing and Evolving Ideas</h2>
        <p className="text-gray-300 mb-4">
          In keeping with the focus on organisation and productivity, Navigator includes a Research Notes module.
        </p>
        <p className="text-gray-300 mb-4">
          This is where ideas begin — often messy, incomplete, and uncertain.
        </p>
        <p className="text-gray-300 mb-4">
          The purpose of Research Notes is to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>capture insights before they disappear,</li>
          <li>track how ideas evolve over time,</li>
          <li>and maintain continuity between thought, testing, and execution.</li>
        </ul>
        <p className="text-gray-300 mb-4">
          The broader objective is simple: to bring all core research tools under one coherent system, rather than scattered across apps and documents.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/research_notes_dashboard.png"
            alt="Research Notes"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">AI as a First-Class Citizen</h2>
        <p className="text-gray-300 mb-4">
          We are living through an AI revolution, and it would be irresponsible not to embrace it properly.
        </p>
        <p className="text-gray-300 mb-4">
          Navigator integrates AI throughout the framework, not as a novelty feature, but as a practical research assistant.
        </p>
        <p className="text-gray-300 mb-4">
          You can choose which large language model you prefer to work with, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>ChatGPT</li>
          <li>Claude</li>
          <li>Gemini</li>
        </ul>
        <p className="text-gray-300 mb-4">
          Each integration uses the best available models. If a model you rely on is not currently available, let us know — we actively expand this list.
        </p>
        <p className="text-gray-300 mb-4">
          AI is not here to replace judgment. It's here to augment it.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/ai_dashboard.png"
            alt="AI Dashboard"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Strategy Builder</h2>
        <p className="text-gray-300 mb-4">
          The Strategy Builder is where most of the real work happens.
        </p>
        <p className="text-gray-300 mb-4">
          This is the engine room of Navigator.
        </p>
        <p className="text-gray-300 mb-4">
          Here, you can:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>load from 100+ prebuilt strategies included with the platform, or</li>
          <li>construct your own strategies using structured dropdowns and configurable components.</li>
        </ul>
        <p className="text-gray-300 mb-4">
          The design goal is to make sophisticated quantitative techniques accessible without hiding their complexity or encouraging reckless optimisation.
        </p>
        <p className="text-gray-300 mb-4">
          Navigator includes some of the most widely used portfolio construction and allocation models in quantitative finance — exposed transparently, not as black boxes.
        </p>
        <p className="text-gray-300 mb-4">
          We will return to the Strategy Builder in much more detail later.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/strategy_builder_8_jan_26.png"
            alt="Strategy Builder"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Portfolio Mode</h2>
        <p className="text-gray-300 mb-4">
          Navigator also supports a dedicated Portfolio Mode.
        </p>
        <p className="text-gray-300 mb-4">
          This allows you to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>combine multiple independent strategies,</li>
          <li>mix asset classes and timeframes,</li>
          <li>and harness diversification across genuinely non-correlated sources of return.</li>
        </ul>
        <p className="text-gray-300 mb-4">
          Portfolio construction is where many otherwise sound strategies fail in practice. This mode exists to help you think at the system level, not just the strategy level.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/stategy_builder_portfolio_mode.png"
            alt="Portfolio Mode"
            className="rounded-lg w-full"
          />
        </div>

        <Callout type="tip" title="Next Steps">
          Now that you're familiar with the Navigator interface, head to the Data Farm section to set up your market data foundation!
        </Callout>
      </div>
    ),
  },
  'data-farm': {
    title: 'Data Farm Overview',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          The Data Farm is the foundation of the Navigator framework — a central, durable home for your market data.
        </p>

        <p className="text-gray-300 mb-4">
          Good research depends on good data. The Data Farm is designed to make that dependency explicit, manageable, and scalable.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What You'll Learn</h2>
        <p className="text-gray-300 mb-4">
          This section covers everything you need to set up and optimize your Data Farm:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>Introduction</strong> - Core concepts, database structure, and getting started with free data</li>
          <li><strong>TradeStation Setup</strong> - Connect your TradeStation account for professional-grade equities and futures data</li>
          <li><strong>MT5 IC Markets Setup</strong> - Connect MetaTrader 5 for forex and CFD data</li>
          <li><strong>Data Farming</strong> - Understanding Build History vs Connect workflows</li>
          <li><strong>Live Streamer</strong> - Real-time price updates for active monitoring</li>
          <li><strong>Database Location</strong> - Configure where your data is stored</li>
        </ul>

        <Callout type="info" title="Start with the Introduction">
          If this is your first time using Data Farm, begin with the Introduction subsection to understand the core concepts and complete your initial data sync.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Quick Start</h2>
        <p className="text-gray-300 mb-4">
          For experienced users who want to get started immediately:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
          <li>Launch Data Farm from the Cockpit</li>
          <li>Sync the free database (or skip to broker connection)</li>
          <li>Connect your preferred data provider (TradeStation or MT5)</li>
          <li>Create watchlists for your trading universe</li>
          <li>Download historical data</li>
        </ol>

      </div>
    ),
  },
  'data-farm-introduction': {
    title: 'Data Farm Introduction',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          The Data Farm is the foundation of the Navigator framework.
        </p>

        <p className="text-gray-300 mb-4">
          Its purpose is simple: to give you a central, durable home for your market data — one that Navigator can access efficiently and that you can maintain without gaps or fragmentation.
        </p>

        <p className="text-gray-300 mb-6">
          Good research depends on good data. The Data Farm is designed to make that dependency explicit, manageable, and scalable.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">A Single Source of Truth</h2>
        <p className="text-gray-300 mb-4">
          Navigator is built around the idea that your data should live in one place, under your control.
        </p>

        <p className="text-gray-300 mb-4">
          Instead of scattered files, partial downloads, or vendor-specific silos, the Data Farm allows you to:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>store all market data centrally,</li>
          <li>maintain it consistently over time,</li>
          <li>and reuse it across research, backtesting, and live monitoring.</li>
        </ul>

        <p className="text-gray-300 mb-6">
          Data you curate today should remain valuable years from now.
        </p>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/data_farm_launch_button.png"
            alt="Data Farm Launch Button"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Built for Scale and Flexibility</h2>
        <p className="text-gray-300 mb-4">
          At its core, the Data Farm is powered by a SQLite database.
        </p>

        <p className="text-gray-300 mb-4">
          Despite its simplicity, SQLite is capable of handling:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>hundreds of millions of rows,</li>
          <li>terabytes of data,</li>
          <li>multiple timeframes (from streaming and 1-minute data through to daily),</li>
          <li>and data sourced from multiple vendors.</li>
        </ul>

        <p className="text-gray-300 mb-4">
          This structure allows Navigator to remain fast and portable, without requiring external database infrastructure or ongoing maintenance.
        </p>

        <p className="text-gray-300 mb-6">
          Everything is managed under one roof.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Shipping with Data (So You Can Start Immediately)</h2>
        <p className="text-gray-300 mb-4">
          You cannot drive a car without fuel. You cannot use a phone without a charged battery.
        </p>

        <p className="text-gray-300 mb-4">
          For the same reason, S2N Navigator ships with access to a large free market data set.
        </p>

        <p className="text-gray-300 mb-4">
          This allows you to:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>sync data immediately,</li>
          <li>run backtests out of the box,</li>
          <li>and explore the platform without first committing to a paid data provider.</li>
        </ul>

        <p className="text-gray-300 mb-6">
          The free database is designed to get you started — not to be your long-term solution.
        </p>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/dashboard_datafarm.png"
            alt="Data Farm Dashboard"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">First Sync: What to Expect</h2>
        <p className="text-gray-300 mb-4">
          Your first full sync will take longer than subsequent updates.
        </p>

        <p className="text-gray-300 mb-4">
          Typically:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>the initial sync takes around one hour,</li>
          <li>data must first be downloaded,</li>
          <li>then inserted into the database.</li>
        </ul>

        <p className="text-gray-300 mb-4">
          This is a one-time cost. Once the database is populated, ongoing syncs are significantly faster.
        </p>
        <p className="text-gray-300 mb-4">
          Navigator includes access to a large 1-minute data set, covering:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>more than 20 years of history for most instruments.</li>
        </ul>

        <p className="text-gray-300 mb-4">
          Due to its size and technical considerations, this data is:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>kept separate from the standard sync process,</li>
          <li>and updated weekly.</li>
        </ul>

        <p className="text-gray-300 mb-6">
          This separation is intentional. It ensures performance and reliability while still giving you access to high-resolution history when you need it.
        </p>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/data_farm_sync_process.png"
            alt="Data Farm Sync Process"
            className="rounded-lg w-full"
          />
        </div>

        <p className="text-gray-300 mb-6">
          This is what the sync process looks like when it is running.
        </p>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/free_data_syncing.png"
            alt="Data Farm Syncing"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Free Data vs Professional Data</h2>
        <p className="text-gray-300 mb-4">
          The free database includes a limited symbol universe.
        </p>

        <p className="text-gray-300 mb-4">
          Its purpose is orientation, exploration, and early testing.
        </p>

        <p className="text-gray-300 mb-4">
          For serious research, we strongly recommend connecting one of the supported data providers or brokers. These offer:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>broader coverage,</li>
          <li>higher data quality,</li>
          <li>and better long-term continuity.</li>
        </ul>

        <p className="text-gray-300 mb-6">
          Navigator is designed to work with multiple providers, allowing you to choose the coverage that fits your needs.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Connecting Data Providers</h2>
        <p className="text-gray-300 mb-4">
          You can connect to supported brokers and data vendors using the provider buttons in the Data Farm interface.
        </p>

        <p className="text-gray-300 mb-4">
          Once connected, their data becomes part of the same unified database — not a separate silo.
        </p>

        <p className="text-gray-300 mb-6">
          Navigator handles the integration; you retain control.
        </p>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/data_vendors_data_farm.png"
            alt="Data Vendors in Data Farm"
            className="rounded-lg w-full"
          />
        </div>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/broker_config_data_farm.png"
            alt="Broker Configuration in Data Farm"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Exploring the Database</h2>
        <p className="text-gray-300 mb-4">
          If you want to inspect what's inside your Data Farm, click <strong>View DB</strong>.
        </p>

        <p className="text-gray-300 mb-4">
          This opens a tabular view of the entire database, with:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>filters,</li>
          <li>sorting,</li>
          <li>and search functionality.</li>
        </ul>

        <p className="text-gray-300 mb-6">
          It's designed for transparency, not mystery. You should always be able to see what data you are working with.
        </p>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/data_base_view_data_farm.png"
            alt="Database View in Data Farm"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Watchlists</h2>
        <p className="text-gray-300 mb-4">
          Watchlists are a key part of extracting value from your data.
        </p>

        <p className="text-gray-300 mb-4">
          Rather than working with an overwhelming universe, watchlists allow you to:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>define relevant subsets of instruments,</li>
          <li>focus research efforts,</li>
          <li>and reuse curated universes across strategies.</li>
        </ul>

        <p className="text-gray-300 mb-6">
          Navigator includes a Watchlist Manager to help you build and maintain these lists efficiently.
        </p>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/watchlist_manager_data_farm.png"
            alt="Watchlist Manager in Data Farm"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Importing Your Own Data</h2>
        <p className="text-gray-300 mb-4">
          The Data Farm is intentionally flexible.
        </p>

        <p className="text-gray-300 mb-4">
          In addition to integrated vendors, you can import your own CSV data files directly into the database.
        </p>

        <p className="text-gray-300 mb-4">
          This allows you to:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>bring in proprietary data,</li>
          <li>merge external research datasets,</li>
          <li>or maintain legacy data alongside vendor feeds.</li>
        </ul>

        <p className="text-gray-300 mb-6">
          The goal is not to restrict you, but to provide a structure that scales with you.
        </p>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/import_csv.png"
            alt="Import CSV files"
            className="rounded-lg w-full"
          />
        </div>

        <Callout type="tip" title="Next Steps">
          With these core concepts understood, you're ready to connect your preferred broker or data provider. Check out the TradeStation or MT5 setup guides to continue!
        </Callout>
      </div>
    ),
  },
  'data-farm-tradestation': {
    title: 'Data Farm Setup: TradeStation',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Follow these steps to connect TradeStation to Navigator and start building your market data library.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Configure Broker</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Open the Navigator</li>
          <li>Click the <strong>⚙️ Settings</strong> button on the right</li>
          <li>Click the <strong>⚙️ Broker</strong> button</li>
          <li>Add/Edit TradeStation credentials:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>API Key</li>
              <li>API Secret</li>
              <li>Account ID</li>
              <li>Environment (Simulation or Live)</li>
            </ul>
          </li>
          <li>Save and close</li>
        </ol>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/tradestation_credentials.png"
            alt="TradeStation Credentials Configuration"
            className="rounded-lg w-full"
          />
        </div>

        <Callout type="info" title="Getting Your TradeStation API Credentials">
          You'll need to register for API access through TradeStation's developer portal. Visit their website and navigate to the API section to generate your credentials.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Authorize Connection</h2>
        <p className="text-gray-300 mb-4">
          After entering your credentials, you'll need to authorize Navigator to access your TradeStation account.
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Click <strong>Connect to TradeStation</strong> in the Data Farm interface</li>
          <li>You'll be redirected to TradeStation's authorization page</li>
          <li>Log in with your TradeStation credentials</li>
          <li>Grant Navigator the requested permissions</li>
          <li>You'll be redirected back to Navigator once authorized</li>
        </ol>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/tradestation_connect.png"
            alt="TradeStation Connection Interface"
            className="rounded-lg w-full"
          />
        </div>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/tradestation_authorisation.png"
            alt="TradeStation Authorization Process"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Create a Watchlist</h2>
        <p className="text-gray-300 mb-4">
          Watchlists help you organize and manage the symbols you want to track.
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Click <strong>📋 Watchlists</strong> button in Data Farm</li>
          <li>Create a new watchlist (e.g., "TradeStation Equities" or "TradeStation Futures")</li>
          <li>Add symbols you want to download
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>For stocks: AAPL, MSFT, GOOGL, etc.</li>
              <li>For futures: ES, NQ, YM, etc.</li>
              <li>For forex: EUR/USD, GBP/USD, etc.</li>
            </ul>
          </li>
          <li>Save watchlist</li>
        </ol>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/tradestation_watchlist.png"
            alt="TradeStation Watchlist Configuration"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 4: Download Historical Data</h2>
        <p className="text-gray-300 mb-4">
          With your watchlist configured, you're ready to download historical market data.
        </p>
        <p className="text-gray-300 mb-4">
          In the <strong>BUILD HISTORY</strong> panel:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li><strong>Source:</strong> Select <code className="bg-[#2d2d2d] px-2 py-1 rounded">tradestation</code></li>
          <li><strong>Watchlist:</strong> Select your watchlist (or "All Symbols")</li>
          <li><strong>Timeframe:</strong> Choose Daily, 60-Min, 10-Min, or 1-Min</li>
          <li><strong>Start:</strong> Set how far back you want data (e.g., 10 years, 5 years)</li>
          <li>Click <strong>▶️ Download</strong> button</li>
          <li>Watch the console for progress updates</li>
        </ol>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/tradestation_build_popup.png"
            alt="TradeStation Build History Popup"
            className="rounded-lg w-full"
          />
        </div>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/tradestation_build_history.png"
            alt="TradeStation Build History Process"
            className="rounded-lg w-full"
          />
        </div>

        <Callout type="warning" title="Data Download Times">
          The first download may take some time depending on the number of symbols and the historical period requested. Subsequent updates will be much faster as Navigator only downloads new bars.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 5: Verify Data</h2>
        <p className="text-gray-300 mb-4">
          After the download completes, verify that your data has been imported correctly.
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Check the <strong>Database size indicator</strong> (top left) - it should have increased</li>
          <li>Click <strong>📊 View DB</strong> to browse downloaded bars</li>
          <li>Filter by source "tradestation" to see only TradeStation data</li>
          <li>Verify that the symbols and date ranges match your expectations</li>
        </ol>

        <Callout type="success" title="TradeStation Setup Complete">
          Your TradeStation connection is now configured and your initial data download is complete. You can now use this data for backtesting and strategy development!
        </Callout>
      </div>
    ),
  },
  'data-farm-mt5': {
    title: 'Data Farm Setup: MT5 IC Markets',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Follow these steps to connect MetaTrader 5 with IC Markets to Navigator and start building your market data library.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Configure Broker</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Open Data Farm Dashboard</li>
          <li>Click the <strong>⚙️ Brokers</strong> button</li>
          <li>Add/Edit MT5 IC Markets credentials:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Account number</li>
              <li>Password</li>
              <li>Server (e.g., <code className="bg-[#2d2d2d] px-2 py-1 rounded">ICMarketsSC-Demo</code> or <code className="bg-[#2d2d2d] px-2 py-1 rounded">ICMarketsSC-Live</code>)</li>
              <li>Symbol suffix: <code className="bg-[#2d2d2d] px-2 py-1 rounded">.a</code> (IC Markets uses this)</li>
            </ul>
          </li>
          <li>Save and close</li>
        </ol>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/mt5_config_setup.png"
            alt="MT5 Configuration Setup"
            className="rounded-lg w-full"
          />
        </div>

        <Callout type="info" title="IC Markets Symbol Suffix">
          IC Markets typically appends <code className="bg-[#2d2d2d] px-2 py-1 rounded">.a</code> to their symbol names (e.g., EURUSD.a). Make sure to configure this suffix correctly to ensure proper data mapping.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Import Symbols from MT5</h2>
        <p className="text-gray-300 mb-4">
          Before importing symbols, ensure your MT5 terminal is running and has the desired symbols visible in Market Watch.
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Ensure MT5 terminal is <strong>running</strong> with your desired symbols in Market Watch</li>
          <li>In Navigator's Data Farm, click the <strong>🔵 MT5</strong> button</li>
          <li>Select your IC Markets account if prompted</li>
          <li>Symbols from Market Watch are automatically imported to the database</li>
        </ol>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/mt5_symbols_import.png"
            alt="MT5 Symbols Import Process"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Create a Watchlist</h2>
        <p className="text-gray-300 mb-4">
          Watchlists are optional but highly recommended for organizing your symbols.
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Click <strong>📋 Watchlists</strong> button in Data Farm</li>
          <li>Create a new watchlist (e.g., "IC Markets Forex" or "IC Markets CFDs")</li>
          <li>Add symbols you want to download from the imported list</li>
          <li>Save watchlist</li>
        </ol>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/build_mt5_watchlist.png"
            alt="MT5 Watchlist Builder"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 4: Download Historical Data</h2>
        <p className="text-gray-300 mb-4">
          With your symbols imported and watchlist configured, you can now download historical data.
        </p>
        <p className="text-gray-300 mb-4">
          In the <strong>BUILD HISTORY</strong> panel:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li><strong>Source:</strong> Select <code className="bg-[#2d2d2d] px-2 py-1 rounded">mt5-ic</code></li>
          <li><strong>Watchlist:</strong> Select your watchlist (or "All Symbols")</li>
          <li><strong>Timeframe:</strong> Choose Daily, 60-Min, 10-Min, or 1-Min</li>
          <li><strong>Start:</strong> Set how far back you want data (e.g., 10 years, 5 years)</li>
          <li>Click <strong>▶️ Download</strong> button</li>
          <li>Watch console for progress updates</li>
        </ol>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/ic_markets_build_history.png"
            alt="IC Markets Build History Process"
            className="rounded-lg w-full"
          />
        </div>

        <Callout type="warning" title="MT5 Terminal Must Be Running">
          The MT5 terminal must remain running during the data download process. Navigator connects to MT5 to retrieve the historical data.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 5: Verify Data</h2>
        <p className="text-gray-300 mb-4">
          After the download completes, verify that your data has been imported correctly.
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Check the <strong>Database size indicator</strong> (top left) - it should have increased</li>
          <li>Click <strong>📊 View DB</strong> to browse downloaded bars</li>
          <li>Filter by source "mt5-ic" to see only IC Markets data</li>
          <li>Verify that the symbols and date ranges match your expectations</li>
        </ol>

        <Callout type="success" title="MT5 IC Markets Setup Complete">
          Your MT5 IC Markets connection is now configured and your initial data download is complete. You can now use this data for backtesting and strategy development!
        </Callout>
      </div>
    ),
  },
  'data-farm-build-vs-connect': {
    title: 'Data Farming',
    content: (
      <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-6">Build History vs Connect</h2>
        <p className="text-xl text-gray-300 mb-8">
          Two distinct workflows for managing your data:
        </p>

        <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">🔨</span>
            BUILD HISTORY — Create Your Database Dimensions
          </h3>
          <p className="text-gray-300 mb-4">
            Build History is how you deliberately construct your database. You choose:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>Select your broker (MT5 IC Markets, Alpaca, TradeStation, etc.)</li>
            <li>Select a watchlist or use "All Symbols"</li>
            <li>Choose the timeframe (Daily, 1min, 5min, 15min, 1hour)</li>
            <li>Set your start date (how far back to download)</li>
            <li>Click <strong>START BACKFILL</strong></li>
          </ul>

          <Callout type="info" title="Key Points">
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>If you only want daily data → build only daily</li>
              <li>If you want daily + 10min → build daily first, then build 10min</li>
              <li>You are in control — nothing downloads unless you choose it</li>
              <li>Just because you imported 128 MT5 symbols doesn't mean your watchlist needs all of them</li>
            </ul>
          </Callout>

          <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
            <img
              src="/getting_started/tradestation_build_popup.png"
              alt="Build History Interface"
              className="rounded-lg w-full"
            />
          </div>

          <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
            <img
              src="/getting_started/ic_markets_build_history.png"
              alt="IC Markets Build History Process"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">🔌</span>
            CONNECT — Update Existing Data
          </h3>
          <p className="text-gray-300 mb-4">
            Connect is for maintaining what you've already built:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
            <li>Select your broker</li>
            <li>Select your watchlist</li>
            <li>Click <strong>Connect</strong></li>
          </ol>

          <p className="text-gray-300 mb-2 font-semibold">What happens automatically:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>Queries database for symbols in your watchlist</li>
            <li>Finds ALL existing timeframes (daily, 10min, whatever you built)</li>
            <li>Queues updates for everything — no choosing required</li>
            <li>Updates last 7 days of data to fill gaps</li>
          </ul>

          <Callout type="tip" title="Example">
            If your "IC Markets Forex" watchlist has symbols with daily and 10min data, Connect updates BOTH automatically.
          </Callout>

          <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
            <img
              src="/getting_started/tradestation_connect.png"
              alt="Connect Interface for Updating Data"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Workflow Summary</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-[#1a1a1a] border border-[#3d3d3d]">
            <thead>
              <tr className="bg-[#2d2d2d]">
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#FF9500] border-b border-[#3d3d3d]">Action</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#FF9500] border-b border-[#3d3d3d]">Purpose</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#FF9500] border-b border-[#3d3d3d]">Timeframes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#3d3d3d]">
                <td className="px-6 py-4 text-gray-300">Build History</td>
                <td className="px-6 py-4 text-gray-300">Create/extend database</td>
                <td className="px-6 py-4 text-gray-300">You choose one at a time</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-300">Connect</td>
                <td className="px-6 py-4 text-gray-300">Update existing data</td>
                <td className="px-6 py-4 text-gray-300">All existing timeframes auto-updated</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
        <div className="space-y-3">
          <div className="flex gap-3">
            <span className="text-[#FF9500] flex-shrink-0">→</span>
            <p className="text-gray-300"><strong>Start small</strong> — Build daily first for a focused watchlist</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#FF9500] flex-shrink-0">→</span>
            <p className="text-gray-300"><strong>Add timeframes deliberately</strong> — Only build 1min/5min if you need them</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#FF9500] flex-shrink-0">→</span>
            <p className="text-gray-300"><strong>Use watchlists</strong> — Don't update everything, update what matters</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#FF9500] flex-shrink-0">→</span>
            <p className="text-gray-300"><strong>Connect regularly</strong> — Keep your data fresh with one click</p>
          </div>
        </div>

        <Callout type="success" title="Understanding Data Farming">
          You now understand the difference between building your database dimensions (Build History) and maintaining existing data (Connect). This deliberate approach prevents database bloat and keeps your workflow focused.
        </Callout>
      </div>
    ),
  },
  'data-farm-live-streamer': {
    title: 'Live Streamer',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          The Live Streamer provides real-time price updates for symbols you're actively monitoring. It connects to your broker and displays live bid/ask prices, spread, and price movement.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Streamer Watchlists</h2>
        <p className="text-gray-300 mb-4">
          Streamer watchlists are separate from regular watchlists by design. This prevents overloading your machine with too many live data streams.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Why separate watchlists?</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>Each streamed symbol requires a persistent connection to your broker</li>
          <li>Too many symbols (50+) can slow down your machine and increase latency</li>
          <li>Streamer watchlists let you focus on symbols you're actively trading</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Recommended limits:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>Casual monitoring:</strong> 10-20 symbols</li>
          <li><strong>Active trading:</strong> 20-30 symbols</li>
          <li><strong>Maximum recommended:</strong> 50 symbols</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Setting Up the Streamer</h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Create a Streamer Watchlist</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Go to Watchlists in the Data Farm</li>
          <li>Create a new watchlist with a name like "IC Markets Streamer"</li>
          <li>Add only the symbols you want to monitor in real-time</li>
        </ol>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/getting_started/build_streamer_watchlist.png"
            alt="Build Streamer Watchlist"
            className="rounded-lg w-full"
          />
        </div>

        <h3 className="text-xl font-bold mt-6 mb-3">Connect to Your Broker</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Click <strong>Connect & Start</strong> in the Data Farm</li>
          <li>Select your broker (e.g., IC Markets, AXI, Alpaca)</li>
          <li>Wait for connection confirmation</li>
        </ol>

        <h3 className="text-xl font-bold mt-6 mb-3">Start the Streamer</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Select your streamer watchlist from the dropdown</li>
          <li>Click <strong>Start Stream</strong></li>
          <li>Live prices will begin updating</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Streamer Status Indicators</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-700">
            <thead className="bg-[#2d2d2d]">
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left">Status</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 px-4 py-2">🟢 Connected</td>
                <td className="border border-gray-700 px-4 py-2">Receiving live data</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">🟡 Paused</td>
                <td className="border border-gray-700 px-4 py-2">Stream paused (click Resume to restart)</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">🔴 Disconnected</td>
                <td className="border border-gray-700 px-4 py-2">No connection to broker</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pausing and Resuming</h2>
        <p className="text-gray-300 mb-4">
          <strong>Live stream paused</strong> - The streamer is connected but not actively updating. This saves resources when you step away.
        </p>
        <p className="text-gray-300 mb-4">
          Click <strong>Resume</strong> to restart the live feed.
        </p>
      </div>
    ),
  },
  'data-farm-database-location': {
    title: 'Database Location',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          All your Data Farm data is stored in a local SQLite database on your machine.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">File Location</h2>
        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <code className="text-gray-300">C:\S2N Navigator\data\databases\data_farm.db</code>
        </div>

        <p className="text-gray-300 mb-4">
          This single file contains:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>All downloaded historical price data (daily, 1-min, etc.)</li>
          <li>Symbol metadata (names, asset classes, sectors)</li>
          <li>Your watchlists and watchlist assignments</li>
          <li>Download queue state</li>
        </ul>

        <Callout type="warning" title="Important Warnings">
          Handle with care! Deleting or corrupting this file will erase ALL your downloaded data.
        </Callout>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 mt-4">
          <li>Do not delete <code className="bg-[#2d2d2d] px-2 py-1 rounded">data_farm.db</code> unless you want to start fresh</li>
          <li>Back up regularly - Copy the file to a safe location</li>
          <li>Close the app first before copying or moving the database</li>
          <li>File size grows as you download more data - this is normal</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Backup Recommendations</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Close S2N Navigator completely</li>
          <li>Navigate to <code className="bg-[#2d2d2d] px-2 py-1 rounded">C:\S2N Navigator\data\databases\</code></li>
          <li>Copy <code className="bg-[#2d2d2d] px-2 py-1 rounded">data_farm.db</code> to your backup location</li>
          <li>Consider weekly backups if you're building a large dataset</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Starting Fresh</h2>
        <p className="text-gray-300 mb-4">
          If you want to reset your Data Farm completely:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Close S2N Navigator</li>
          <li>Delete <code className="bg-[#2d2d2d] px-2 py-1 rounded">data_farm.db</code></li>
          <li>Restart the app - a new empty database will be created</li>
        </ol>
      </div>
    ),
  },
  'license-upgrade': {
    title: 'License Upgrade',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Manage and upgrade your S2N Navigator license at any time through the Settings panel.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Accessing the License Tab</h2>
        <p className="text-gray-300 mb-4">
          The License tab is located in the Settings menu, accessible from the Cockpit Home dashboard:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Open <strong>Cockpit Home</strong></li>
          <li>Click the <strong>Settings</strong> button (gear icon)</li>
          <li>Navigate to the <strong>License</strong> tab (key icon)</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Current License Status</h2>
        <p className="text-gray-300 mb-4">
          The License tab displays your current license information:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>License Type</strong> - Shows whether you have a Trial or Full license</li>
          <li><strong>Expiry Date</strong> - The date your current license expires</li>
          <li><strong>Days Remaining</strong> - Color-coded indicator showing time left on your license
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li className="text-green-400">Green - Plenty of time remaining</li>
              <li className="text-orange-400">Orange - License expiring soon</li>
              <li className="text-red-400">Red - License expiring very soon or expired</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Activating a New License Key</h2>
        <p className="text-gray-300 mb-4">
          You can upgrade or renew your license at any time without waiting for expiration:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>In the License tab, locate the <strong>Enter New License Key</strong> section</li>
          <li>Paste or type your new license key into the text input field</li>
          <li>Click the <strong>Activate License</strong> button</li>
          <li>The system will validate and save your new license</li>
          <li>Your license status will update immediately upon successful activation</li>
        </ol>

        <Callout type="success" title="Seamless Upgrades">
          You can upgrade your license at any time. There's no need to wait until your current license expires - the new license will take effect immediately.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Getting a License</h2>
        <p className="text-gray-300 mb-4">
          If you don't have a license key yet, or want to upgrade to a different tier, use these options:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>View Pricing</strong> - Opens the pricing page where you can purchase a Full or Pro license</li>
          <li><strong>Start Free Trial</strong> - Opens the trial page to begin a free evaluation of S2N Navigator</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">License Key Format</h2>
        <p className="text-gray-300 mb-4">
          License keys are provided via email after purchase or trial registration. Make sure to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>Copy the entire license key exactly as provided</li>
          <li>Avoid adding spaces or line breaks</li>
          <li>Keep your license key in a safe place for future reference</li>
        </ul>

        <Callout type="tip" title="Quick Access">
          From the Cockpit Home dashboard, click the Settings gear icon, then select the License tab to manage your subscription anytime.
        </Callout>
      </div>
    ),
  },
  'first-backtest': {
    title: 'Your First Backtest',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Let's walk through running your first backtest step-by-step. This guide assumes
          you have already installed S2N Navigator.
        </p>

        <Callout type="tip" title="Estimated Time">
          This tutorial takes approximately 10 minutes to complete.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Launch Navigator</h2>
        <p className="text-gray-300 mb-4">
          Open S2N Navigator from your applications folder or start menu. You'll see the
          main Cockpit interface.
        </p>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/feature_images/cockpit home.png"
            alt="Navigator Cockpit"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Create a New Strategy</h2>
        <p className="text-gray-300 mb-4">
          Click on "Strategy Builder" in the left sidebar. For your first backtest, we'll
          use a simple 60/40 portfolio strategy (60% stocks, 40% bonds).
        </p>

        <ol className="list-decimal list-inside space-y-3 text-gray-300 my-6">
          <li>Click "New Strategy" button</li>
          <li>Select "Portfolio Strategy" template</li>
          <li>Name it "My First 60/40"</li>
          <li>Configure allocations: 60% SPY, 40% AGG</li>
        </ol>

        <Callout type="info">
          SPY tracks the S&P 500 stock index, while AGG tracks the aggregate bond market.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Set Backtest Parameters</h2>
        <p className="text-gray-300 mb-4">
          Before running the backtest, configure these essential parameters:
        </p>

        <div className="bg-[#2d2d2d] rounded-lg p-6 my-6">
          <div className="space-y-4">
            <div>
              <div className="font-semibold text-[#FF9500] mb-1">Start Date</div>
              <div className="text-gray-400 text-sm">January 1, 2010</div>
            </div>
            <div>
              <div className="font-semibold text-[#FF9500] mb-1">End Date</div>
              <div className="text-gray-400 text-sm">Today's date</div>
            </div>
            <div>
              <div className="font-semibold text-[#FF9500] mb-1">Initial Capital</div>
              <div className="text-gray-400 text-sm">$100,000</div>
            </div>
            <div>
              <div className="font-semibold text-[#FF9500] mb-1">Rebalancing</div>
              <div className="text-gray-400 text-sm">Monthly</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 4: Run the Backtest</h2>
        <p className="text-gray-300 mb-4">
          Click the "Run Backtest" button. Navigator will process historical data and
          simulate your strategy. This typically takes 10-30 seconds.
        </p>

        <Callout type="warning">
          Make sure you have an active internet connection to download historical data
          if it's your first time running this strategy.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 5: Review Results</h2>
        <p className="text-gray-300 mb-4">
          Once complete, you'll see the backtest report with key metrics:
        </p>

        <div className="bg-[#2d2d2d] rounded-lg p-4 my-6">
          <img
            src="/feature_images/backtest report equity.png"
            alt="Backtest Report"
            className="rounded-lg w-full"
          />
        </div>

        <ul className="list-disc list-inside space-y-2 text-gray-300 my-6">
          <li><strong>Total Return:</strong> Overall gain or loss</li>
          <li><strong>CAGR:</strong> Compound annual growth rate</li>
          <li><strong>Max Drawdown:</strong> Largest peak-to-trough decline</li>
          <li><strong>Sharpe Ratio:</strong> Risk-adjusted return measure</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">What's Next?</h2>
        <p className="text-gray-300 mb-4">
          Congratulations on running your first backtest! Here's what to explore next:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Learn how to interpret these metrics in detail</li>
          <li>Try modifying the allocations (e.g., 80/20 or 40/60)</li>
          <li>Explore different rebalancing frequencies</li>
          <li>Compare your strategy against benchmarks</li>
        </ul>
      </div>
    ),
  },
  'understanding-results': {
    title: 'Understanding Backtest Results',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Learn how to interpret the metrics and visualizations in your backtest reports.
          Understanding these results is crucial for evaluating strategy quality.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Performance Metrics</h2>

        <div className="space-y-6 my-8">
          <div className="bg-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FF9500] mb-3">Total Return</h3>
            <p className="text-gray-300 mb-2">
              The overall percentage gain or loss from start to end of the backtest period.
            </p>
            <Callout type="info">
              A strategy with 150% total return over 10 years means $100,000 grew to $250,000.
            </Callout>
          </div>

          <div className="bg-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FF9500] mb-3">CAGR (Compound Annual Growth Rate)</h3>
            <p className="text-gray-300 mb-2">
              The annualized rate of return, accounting for compounding. More useful than
              total return for comparing strategies over different time periods.
            </p>
            <div className="text-sm text-gray-400 mt-3">
              <strong>Good:</strong> 10-15% for stock strategies<br />
              <strong>Excellent:</strong> 15%+ consistently
            </div>
          </div>

          <div className="bg-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FF9500] mb-3">Maximum Drawdown</h3>
            <p className="text-gray-300 mb-2">
              The largest peak-to-trough decline during the backtest. This tells you the
              worst-case loss scenario you would have experienced.
            </p>
            <Callout type="warning" title="Critical Metric">
              Can you emotionally handle a 30% drawdown? If your strategy has had 40%
              drawdowns historically, be prepared for similar or worse in the future.
            </Callout>
          </div>

          <div className="bg-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FF9500] mb-3">Sharpe Ratio</h3>
            <p className="text-gray-300 mb-2">
              Measures risk-adjusted return. Higher is better. Calculated as:
              (Return - Risk-Free Rate) / Standard Deviation
            </p>
            <div className="text-sm text-gray-400 mt-3">
              <strong>&lt; 1.0:</strong> Poor risk-adjusted returns<br />
              <strong>1.0 - 2.0:</strong> Good<br />
              <strong>&gt; 2.0:</strong> Excellent
            </div>
          </div>

          <div className="bg-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FF9500] mb-3">Win Rate</h3>
            <p className="text-gray-300 mb-2">
              Percentage of profitable trades. However, a 40% win rate can still be
              profitable if winners are much larger than losers.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Equity Curve</h2>
        <p className="text-gray-300 mb-4">
          The equity curve shows your portfolio value over time. Look for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>Steady upward slope:</strong> Consistent growth</li>
          <li><strong>Smooth vs. volatile:</strong> Indicates risk profile</li>
          <li><strong>Recovery speed:</strong> How quickly drawdowns recover</li>
          <li><strong>Recent performance:</strong> Is the strategy still working?</li>
        </ul>

        <Callout type="tip" title="Visual Analysis">
          A beautiful equity curve doesn't guarantee future success, but a terrible one
          suggests fundamental strategy problems.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Common Interpretation Mistakes</h2>

        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-red-400 mb-3">Overfitting</h3>
          <p className="text-gray-300">
            A strategy with perfect backtest results is usually overfitted to historical
            data and will fail in live trading. Look for robust, consistent performance
            rather than perfection.
          </p>
        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-red-400 mb-3">Survivorship Bias</h3>
          <p className="text-gray-300">
            Make sure your data includes delisted stocks and failed companies. Testing
            only on survivors artificially inflates results.
          </p>
        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-red-400 mb-3">Ignoring Transaction Costs</h3>
          <p className="text-gray-300">
            Always include realistic commission and slippage assumptions. A strategy that
            trades frequently can be profitable before costs but lose money after.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">What Makes a Good Strategy?</h2>
        <p className="text-gray-300 mb-4">
          Look for strategies that demonstrate:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
          <li>Consistent performance across different market environments</li>
          <li>Reasonable maximum drawdown you can tolerate</li>
          <li>Sharpe ratio above 1.0</li>
          <li>Clear economic rationale for why it works</li>
          <li>Simple, logical rules that make intuitive sense</li>
        </ol>
      </div>
    ),
  },
  'strategy-builder': {
    title: 'Strategy Builder',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          The Strategy Builder is the core workspace for designing, configuring, and backtesting trading strategies in S2N Navigator.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">In This Section</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>Overview</strong> - Configuration parameters, running backtests, and troubleshooting</li>
          <li><strong>Your First Backtest</strong> - Step-by-step walkthrough of creating your first strategy</li>
          <li><strong>Understanding Results</strong> - How to interpret backtest metrics and equity curves</li>
        </ul>

        <p className="text-gray-300 mb-4">
          Select a topic from the sidebar to get started, or continue reading for an overview of the Strategy Builder's capabilities.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What is the Strategy Builder?</h2>
        <p className="text-gray-300 mb-4">
          The Strategy Builder allows you to test trading ideas against historical data to understand how they would have performed in real market conditions. This process, called backtesting, is essential for developing confidence in a strategy before risking real capital.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Capabilities</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>Configure and test custom trading strategies</li>
          <li>Support for multiple data sources (Norgate, MT5, Alpaca, Yahoo)</li>
          <li>Multiple timeframes from 1-minute to daily bars</li>
          <li>Advanced risk management controls</li>
          <li>Comprehensive performance metrics and visualizations</li>
          <li>Portfolio-level backtesting across multiple symbols</li>
        </ul>
      </div>
    ),
  },
  'strategy-builder-overview': {
    title: 'Strategy Builder Overview',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          The Strategy Builder is where you design, configure, and backtest trading strategies.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Open S2N Navigator</li>
          <li>Click Strategy Builder in the sidebar</li>
          <li>Configure your strategy parameters</li>
          <li>Click Run Backtest</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Configuration Parameters</h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Data Settings</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-700">
            <thead className="bg-[#2d2d2d]">
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left">Parameter</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Data Source</td>
                <td className="border border-gray-700 px-4 py-2">Where to load price data from: Norgate, S2N Free (Yahoo), Alpaca, MT5 brokers</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Frequency</td>
                <td className="border border-gray-700 px-4 py-2">Bar timeframe: daily, weekly, 1min, 5min, 15min, 1hour</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Start Date</td>
                <td className="border border-gray-700 px-4 py-2">First date of the backtest period</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">End Date</td>
                <td className="border border-gray-700 px-4 py-2">Last date of the backtest period</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-3">Symbol Selection</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-700">
            <thead className="bg-[#2d2d2d]">
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left">Parameter</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Symbols</td>
                <td className="border border-gray-700 px-4 py-2">Trading symbols to include (comma-separated or from watchlist)</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Benchmark</td>
                <td className="border border-gray-700 px-4 py-2">Symbol to compare strategy performance against (e.g., SPY, $SPX)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-3">Strategy Parameters</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-700">
            <thead className="bg-[#2d2d2d]">
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left">Parameter</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Strategy Type</td>
                <td className="border border-gray-700 px-4 py-2">The trading logic to use (Momentum, Mean Reversion, etc.)</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Lookback Period</td>
                <td className="border border-gray-700 px-4 py-2">Number of bars to look back for signal calculation</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Entry Threshold</td>
                <td className="border border-gray-700 px-4 py-2">Signal strength required to enter a position</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Exit Threshold</td>
                <td className="border border-gray-700 px-4 py-2">Signal strength required to exit a position</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-3">Risk Management</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-700">
            <thead className="bg-[#2d2d2d]">
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left">Parameter</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Initial Capital</td>
                <td className="border border-gray-700 px-4 py-2">Starting portfolio value</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Position Size</td>
                <td className="border border-gray-700 px-4 py-2">How much to allocate per trade (fixed $ or % of portfolio)</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Max Positions</td>
                <td className="border border-gray-700 px-4 py-2">Maximum number of concurrent positions</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Stop Loss</td>
                <td className="border border-gray-700 px-4 py-2">Exit if position loses this % (optional)</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Take Profit</td>
                <td className="border border-gray-700 px-4 py-2">Exit if position gains this % (optional)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Running a Backtest</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li><strong>Configure all parameters</strong> - Ensure data source matches your symbols</li>
          <li><strong>Click Run Backtest</strong> - The engine loads data and simulates trades</li>
          <li><strong>Review Results</strong> - Performance metrics, equity curve, trade log</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Results</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-700">
            <thead className="bg-[#2d2d2d]">
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left">Metric</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Total Return</td>
                <td className="border border-gray-700 px-4 py-2">Overall % gain/loss</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">CAGR</td>
                <td className="border border-gray-700 px-4 py-2">Compound Annual Growth Rate</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Sharpe Ratio</td>
                <td className="border border-gray-700 px-4 py-2">Risk-adjusted return (higher is better)</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Max Drawdown</td>
                <td className="border border-gray-700 px-4 py-2">Largest peak-to-trough decline</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Win Rate</td>
                <td className="border border-gray-700 px-4 py-2">% of trades that were profitable</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Profit Factor</td>
                <td className="border border-gray-700 px-4 py-2">Gross profits / Gross losses</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Troubleshooting</h2>

        <div className="bg-[#2d2d2d] rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold mb-3">"No data available for symbols"</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Check your Data Source matches where your symbols exist</li>
            <li>Norgate symbols won't work with MT5 data source and vice versa</li>
            <li>Verify the symbol names are correct (MT5 uses suffixes like .a)</li>
          </ul>
        </div>

        <div className="bg-[#2d2d2d] rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold mb-3">"Insufficient overlapping data"</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Your symbols don't have enough common date range</li>
            <li>Try a shorter backtest period or remove newer symbols</li>
          </ul>
        </div>
      </div>
    ),
  },
  'glossary': {
    title: 'Common Terms Glossary',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Essential backtesting and trading terminology explained in plain English.
        </p>

        <div className="space-y-6">
          {[
            {
              term: 'Alpha',
              definition: 'Excess return above a benchmark. If the S&P 500 returns 10% and your strategy returns 15%, your alpha is 5%.',
            },
            {
              term: 'Beta',
              definition: 'Measure of volatility relative to the overall market. Beta of 1.0 means you move with the market. Higher means more volatile.',
            },
            {
              term: 'CAGR (Compound Annual Growth Rate)',
              definition: 'The average annual return assuming returns are reinvested. More accurate than simple average for multi-year periods.',
            },
            {
              term: 'Drawdown',
              definition: 'The decline from a peak to a trough. A portfolio that goes from $100k to $70k has a 30% drawdown.',
            },
            {
              term: 'Maximum Drawdown',
              definition: 'The worst peak-to-trough decline experienced. Critical for understanding worst-case risk.',
            },
            {
              term: 'Equity Curve',
              definition: 'A line chart showing portfolio value over time. The visual representation of your strategy performance.',
            },
            {
              term: 'Overfitting',
              definition: 'Creating a strategy so tailored to historical data that it fails on new data. Like memorizing test answers instead of learning concepts.',
            },
            {
              term: 'Sharpe Ratio',
              definition: 'Risk-adjusted return metric. Answers: "Am I being compensated enough for the risk I\'m taking?" Higher is better.',
            },
            {
              term: 'Slippage',
              definition: 'The difference between expected and actual execution price. More common in fast-moving or illiquid markets.',
            },
            {
              term: 'Sortino Ratio',
              definition: 'Like Sharpe ratio, but only penalizes downside volatility. More relevant for most investors.',
            },
            {
              term: 'Standard Deviation',
              definition: 'Measure of volatility. Higher standard deviation means more unpredictable returns.',
            },
            {
              term: 'Survivorship Bias',
              definition: 'Testing only on companies that survived, ignoring failures. Makes strategies look better than they are.',
            },
            {
              term: 'Walk-Forward Analysis',
              definition: 'Testing strategy on out-of-sample data to verify it wasn\'t overfitted. Essential validation technique.',
            },
            {
              term: 'Win Rate',
              definition: 'Percentage of profitable trades. Can be misleading - a 30% win rate with large winners can still be very profitable.',
            },
          ].map((item) => (
            <div key={item.term} className="bg-[#2d2d2d] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#FF9500] mb-2">{item.term}</h3>
              <p className="text-gray-300">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  'faqs': {
    title: 'Frequently Asked Questions',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Answers to common questions about S2N Navigator and backtesting.
        </p>

        <div className="space-y-6">
          <div className="bg-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FF9500] mb-3">
              Does past performance guarantee future results?
            </h3>
            <p className="text-gray-300">
              No. Backtesting shows how a strategy would have performed historically, but
              markets change. Use backtesting to understand behavior and risk, not as a
              crystal ball.
            </p>
          </div>

          <div className="bg-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FF9500] mb-3">
              How much historical data do I need?
            </h3>
            <p className="text-gray-300">
              Ideally test across multiple market cycles—at least 10-15 years. This includes
              both bull and bear markets, giving you confidence the strategy works in different
              environments.
            </p>
          </div>

          <div className="bg-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FF9500] mb-3">
              What's a realistic Sharpe ratio to expect?
            </h3>
            <p className="text-gray-300">
              For stock strategies, 0.5-1.0 is typical, 1.0-1.5 is good, and above 1.5 is
              excellent. Be suspicious of Sharpe ratios above 2.0—they may indicate overfitting
              or data errors.
            </p>
          </div>

          <div className="bg-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FF9500] mb-3">
              Should I optimize my strategy parameters?
            </h3>
            <p className="text-gray-300">
              Light optimization is fine, but excessive optimization leads to overfitting.
              If you test 100 variations and pick the best, it probably won't work live.
              Always validate with out-of-sample testing.
            </p>
          </div>

          <div className="bg-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FF9500] mb-3">
              Can I backtest with options or futures?
            </h3>
            <p className="text-gray-300">
              Yes, Navigator supports options and futures backtesting with appropriate
              data subscriptions. These instruments require more careful modeling due to
              expiration and rollover considerations.
            </p>
          </div>

          <div className="bg-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FF9500] mb-3">
              How do I avoid overfitting?
            </h3>
            <p className="text-gray-300">
              Keep strategies simple, use out-of-sample testing, avoid excessive optimization,
              and ensure your strategy has a logical economic rationale. If you can't explain
              why it should work, it probably won't.
            </p>
          </div>

          <div className="bg-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FF9500] mb-3">
              What data quality should I use?
            </h3>
            <p className="text-gray-300">
              Always use adjusted data that accounts for splits and dividends. Navigator
              integrates with premium data providers to ensure accuracy. Poor data leads to
              misleading results.
            </p>
          </div>

          <Callout type="info" title="Still Have Questions?">
            Contact our support team or check our community forums for additional help.
          </Callout>
        </div>
      </div>
    ),
  },
  'why-most-backtests-lie': {
    title: 'Why Most Backtests Lie (And Why That\'s Not an Accident)',
    content: <WhyMostBacktestsLieContent />,
  },
  'research-integrity-in-practice': {
    title: 'Research Integrity in Practice (A Robustness Checklist)',
    content: <ResearchIntegrityInPracticeContent />,
  },
  'survivorship-bias-the-invisible-killer': {
    title: 'Survivorship Bias: The Invisible Backtest Killer',
    content: <SurvivorshipBiasContent />,
  },
  'deflated-sharpe-ratio': {
    title: 'The Deflated Sharpe Ratio: Why Most "Good" Sharpe Ratios Are Meaningless',
    content: <DeflatedSharpeRatioContent />,
  },
  'confidence-beats-performance': {
    title: 'Confidence Beats Performance (And Why That\'s Uncomfortable)',
    content: <ConfidenceBeatsPerformanceContent />,
  },
  'probability-of-backtest-overfitting': {
    title: 'The Probability of Backtest Overfitting (PBO)',
    content: <ProbabilityOfBacktestOverfittingContent />,
  },
  'monitoring-strategy': {
    title: 'What It Means to Monitor a Strategy (Beyond P&L)',
    content: <MonitoringStrategyContent />,
  },
  'smooth-equity-curves': {
    title: 'Why Smooth Equity Curves Are a Red Flag',
    content: <SmoothEquityCurvesContent />,
  },
  'broken-vs-unlucky': {
    title: 'When a Strategy Is Broken (and When It\'s Just Unlucky)',
    content: <BrokenVsUnluckyContent />,
  },
  'advanced': {
    title: 'Advanced Features Overview',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Navigator's advanced features give experienced traders powerful tools for sophisticated
          strategy development, optimization, and analysis.
        </p>

        <Callout type="info" title="Prerequisites">
          These guides assume you're comfortable with basic backtesting concepts and Navigator's
          core features. If you're new to Navigator, start with the Getting Started section.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">What You'll Learn</h2>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Custom Indicators</h3>
            <p className="text-gray-400 text-sm">
              Build your own technical indicators using Python or C# to capture unique market patterns.
            </p>
          </div>
          <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Optimization</h3>
            <p className="text-gray-400 text-sm">
              Advanced parameter optimization techniques that avoid overfitting and false discoveries.
            </p>
          </div>
          <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">AI Features</h3>
            <p className="text-gray-400 text-sm">
              Leverage AI-assisted strategy generation, pattern recognition, and market regime detection.
            </p>
          </div>
          <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Portfolio Analysis</h3>
            <p className="text-gray-400 text-sm">
              Multi-strategy portfolio construction, correlation analysis, and advanced risk metrics.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Advanced Workflows</h2>
        <p className="text-gray-300 mb-4">
          These features enable sophisticated research workflows:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="text-gray-300">Systematic parameter optimization with multiple testing corrections</li>
          <li className="text-gray-300">Walk-forward analysis for robust out-of-sample validation</li>
          <li className="text-gray-300">Monte Carlo simulation for risk assessment</li>
          <li className="text-gray-300">Multi-asset portfolio optimization with rebalancing</li>
          <li className="text-gray-300">Machine learning integration for feature engineering</li>
        </ul>

        <Callout type="warning" title="Research Integrity">
          With powerful tools comes the risk of overfitting. Navigator's advanced features include
          built-in safeguards like Deflated Sharpe Ratio and multiple testing corrections to help
          you maintain research integrity.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Next Steps</h2>
        <p className="text-gray-300 mb-4">
          Choose a topic from the sidebar to dive deeper into specific advanced features. Each
          guide includes practical examples and best practices.
        </p>
      </div>
    ),
  },
  'advanced/custom-indicators': {
    title: 'Custom Indicators',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Create your own technical indicators to capture unique market patterns and implement
          sophisticated trading logic.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Custom Indicators?</h2>
        <p className="text-gray-300 mb-4">
          While Navigator includes hundreds of built-in indicators, custom indicators let you:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="text-gray-300">Implement proprietary technical analysis methods</li>
          <li className="text-gray-300">Combine multiple indicators into composite signals</li>
          <li className="text-gray-300">Process alternative data sources</li>
          <li className="text-gray-300">Create domain-specific analytics for your market</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Supported Languages</h2>
        <p className="text-gray-300 mb-4">
          Navigator supports custom indicators in both Python and C#:
        </p>

        <div className="bg-[#2d2d2d] p-6 rounded-lg mb-6 border border-[#3d3d3d]">
          <h3 className="text-lg font-semibold text-[#FF9500] mb-3">Python</h3>
          <p className="text-gray-400 text-sm mb-3">
            Ideal for rapid prototyping and leveraging the scientific Python ecosystem (NumPy, Pandas, SciPy).
          </p>
          <pre className="bg-[#1a1a1a] p-4 rounded text-sm overflow-x-auto">
            <code>{`def my_indicator(close_prices, period=20):
    """Calculate custom momentum indicator"""
    import numpy as np

    returns = np.diff(close_prices) / close_prices[:-1]
    momentum = np.zeros(len(close_prices))

    for i in range(period, len(returns)):
        momentum[i] = np.mean(returns[i-period:i])

    return momentum`}</code>
          </pre>
        </div>

        <div className="bg-[#2d2d2d] p-6 rounded-lg mb-6 border border-[#3d3d3d]">
          <h3 className="text-lg font-semibold text-[#FF9500] mb-3">C#</h3>
          <p className="text-gray-400 text-sm mb-3">
            Best for production strategies requiring maximum performance and type safety.
          </p>
          <pre className="bg-[#1a1a1a] p-4 rounded text-sm overflow-x-auto">
            <code>{`public class MyIndicator : Indicator
{
    private int _period;
    private RollingWindow<double> _window;

    public MyIndicator(int period = 20)
    {
        _period = period;
        _window = new RollingWindow<double>(period);
    }

    protected override decimal Calculate(TradeBar bar)
    {
        _window.Add((double)bar.Close);

        if (!_window.IsReady)
            return 0;

        return CalculateMomentum();
    }
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
        <Callout type="tip" title="Performance Tips">
          <ul className="space-y-2 mt-2">
            <li>Vectorize calculations when possible (use NumPy in Python)</li>
            <li>Cache expensive computations</li>
            <li>Use appropriate data structures (rolling windows, deques)</li>
            <li>Profile your code to identify bottlenecks</li>
          </ul>
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Testing Your Indicators</h2>
        <p className="text-gray-300 mb-4">
          Before using custom indicators in backtests, validate them:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="text-gray-300">Test with known data and verify expected outputs</li>
          <li className="text-gray-300">Check edge cases (zero values, NaN, market gaps)</li>
          <li className="text-gray-300">Compare against reference implementations where available</li>
          <li className="text-gray-300">Visualize indicator values to spot anomalies</li>
        </ul>

        <Callout type="warning" title="Look-Ahead Bias">
          Be extremely careful not to introduce look-ahead bias. Your indicator should only use
          data that would have been available at each historical point in time.
        </Callout>
      </div>
    ),
  },
  'advanced/optimization-techniques': {
    title: 'Optimization Techniques',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Learn how to optimize strategy parameters while maintaining research integrity and
          avoiding the overfitting trap.
        </p>

        <Callout type="warning" title="The Optimization Paradox">
          Optimization is both essential and dangerous. It helps you find better parameters, but
          it also increases the risk of finding parameters that only worked by chance.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Types of Optimization</h2>

        <div className="space-y-6 my-6">
          <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Grid Search</h3>
            <p className="text-gray-400 text-sm mb-2">
              Test all combinations of parameters within specified ranges.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Use when:</strong> You have few parameters to optimize (2-3 max) and want
              comprehensive coverage.
            </p>
          </div>

          <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Genetic Algorithm</h3>
            <p className="text-gray-400 text-sm mb-2">
              Evolutionary approach that breeds successful parameter combinations.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Use when:</strong> You have many parameters (4+) and want to explore the
              space efficiently without testing every combination.
            </p>
          </div>

          <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Walk-Forward Analysis</h3>
            <p className="text-gray-400 text-sm mb-2">
              Rolling window optimization that simulates real-world parameter adaptation.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Use when:</strong> You want the most robust validation of optimized parameters
              and realistic performance expectations.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Avoiding Overfitting</h2>
        <p className="text-gray-300 mb-4">
          Navigator includes several tools to protect against overfitting:
        </p>

        <div className="bg-[#2d2d2d] p-6 rounded-lg mb-6 border border-[#3d3d3d]">
          <h3 className="text-lg font-semibold mb-3">Deflated Sharpe Ratio (DSR)</h3>
          <p className="text-gray-400 text-sm mb-3">
            Adjusts Sharpe Ratio based on how many trials were conducted. The more parameter
            combinations you test, the more the DSR penalizes the results.
          </p>
          <p className="text-sm text-[#FF9500]">
            If your best DSR is below 0.95, there's a good chance the results are due to chance.
          </p>
        </div>

        <div className="bg-[#2d2d2d] p-6 rounded-lg mb-6 border border-[#3d3d3d]">
          <h3 className="text-lg font-semibold mb-3">Combinatorially Symmetric Cross Validation</h3>
          <p className="text-gray-400 text-sm">
            Splits historical data into multiple training/testing periods and validates that
            optimized parameters work across different time periods.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
        <ul className="space-y-2 mb-6">
          <li className="text-gray-300">
            <strong>Use realistic parameter ranges:</strong> Don't test 1000 different values for a moving average period
          </li>
          <li className="text-gray-300">
            <strong>Reserve out-of-sample data:</strong> Never optimize on your entire dataset
          </li>
          <li className="text-gray-300">
            <strong>Look for stable regions:</strong> Good parameters should work across a range, not just at one exact value
          </li>
          <li className="text-gray-300">
            <strong>Check parameter sensitivity:</strong> Small parameter changes shouldn't drastically change results
          </li>
          <li className="text-gray-300">
            <strong>Use walk-forward for production:</strong> Most realistic assessment of how optimization performs
          </li>
        </ul>

        <Callout type="tip" title="The Plateau Test">
          Good optimization results show a "plateau" where many similar parameter combinations
          produce similar results. A single spike with poor results everywhere else is a red flag.
        </Callout>
      </div>
    ),
  },
  'advanced/ai-features': {
    title: 'AI Features',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Leverage artificial intelligence to assist with strategy generation, pattern recognition,
          and market regime detection.
        </p>

        <Callout type="info" title="AI as Assistant, Not Oracle">
          Navigator's AI features are designed to augment your research process, not replace it.
          AI can surface interesting patterns and suggest strategies, but human judgment and
          rigorous testing remain essential.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Strategy Generation</h2>
        <p className="text-gray-300 mb-4">
          AI can analyze historical data and suggest trading strategies based on patterns it discovers.
        </p>

        <div className="bg-[#2d2d2d] p-6 rounded-lg mb-6 border border-[#3d3d3d]">
          <h3 className="text-lg font-semibold text-[#FF9500] mb-3">How It Works</h3>
          <ol className="space-y-3 text-gray-400 text-sm">
            <li>1. AI analyzes price data, volume, and other features across your selected universe</li>
            <li>2. Identifies patterns that historically preceded significant moves</li>
            <li>3. Generates candidate strategies that exploit these patterns</li>
            <li>4. Automatically backtests each candidate with proper validation</li>
            <li>5. Ranks strategies by Deflated Sharpe Ratio (accounting for multiple testing)</li>
          </ol>
        </div>

        <Callout type="warning" title="Remember">
          AI-generated strategies still require careful validation. The AI doesn't know about market
          structure changes, regime shifts, or whether a pattern is spurious. Your judgment is crucial.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pattern Recognition</h2>
        <p className="text-gray-300 mb-4">
          AI can identify complex chart patterns and technical setups that are difficult to codify manually.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Chart Patterns</h3>
            <p className="text-gray-400 text-sm">
              Head & shoulders, triangles, flags, and other classical formations with statistical validation.
            </p>
          </div>
          <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Candlestick Patterns</h3>
            <p className="text-gray-400 text-sm">
              Recognition of multi-candle formations with context-aware interpretation.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Market Regime Detection</h2>
        <p className="text-gray-300 mb-4">
          Automatically classify market conditions and adapt strategy behavior accordingly.
        </p>

        <div className="bg-[#2d2d2d] p-6 rounded-lg mb-6 border border-[#3d3d3d]">
          <h3 className="text-lg font-semibold mb-3">Detected Regimes</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#FF9500]">•</span>
              <span><strong>Trending:</strong> Strong directional movement with momentum</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9500]">•</span>
              <span><strong>Mean Reverting:</strong> Range-bound with tendency to return to average</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9500]">•</span>
              <span><strong>High Volatility:</strong> Large price swings with increased uncertainty</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9500]">•</span>
              <span><strong>Low Volatility:</strong> Quiet periods with compressed ranges</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Practical Applications</h2>
        <p className="text-gray-300 mb-4">
          Common ways to use AI features in your workflow:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="text-gray-300">Generate initial strategy ideas for further refinement</li>
          <li className="text-gray-300">Validate that your manual patterns actually have predictive power</li>
          <li className="text-gray-300">Switch between different strategies based on detected regime</li>
          <li className="text-gray-300">Adjust position sizing or stops based on volatility regime</li>
          <li className="text-gray-300">Filter trades to only take setups in favorable regimes</li>
        </ul>

        <Callout type="tip" title="Start Simple">
          Don't try to use all AI features at once. Start with regime detection to improve an
          existing strategy, then gradually experiment with pattern recognition and generation.
        </Callout>
      </div>
    ),
  },
  'advanced/portfolio-analysis': {
    title: 'Portfolio Analysis',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Combine multiple strategies into portfolios, analyze correlations, and optimize
          multi-strategy allocation.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Portfolio-Level Analysis?</h2>
        <p className="text-gray-300 mb-4">
          Individual strategies may perform well in isolation but behave differently when combined:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="text-gray-300">Strategies may be correlated, offering less diversification than expected</li>
          <li className="text-gray-300">Drawdowns may overlap, creating worse combined drawdowns</li>
          <li className="text-gray-300">Or strategies may complement each other, smoothing overall returns</li>
        </ul>

        <Callout type="tip" title="Diversification Benefit">
          A portfolio of moderately performing uncorrelated strategies often outperforms a single
          high-performing strategy on a risk-adjusted basis.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Correlation Analysis</h2>
        <p className="text-gray-300 mb-4">
          Understanding strategy correlation is crucial for portfolio construction.
        </p>

        <div className="bg-[#2d2d2d] p-6 rounded-lg mb-6 border border-[#3d3d3d]">
          <h3 className="text-lg font-semibold text-[#FF9500] mb-3">Return Correlation</h3>
          <p className="text-gray-400 text-sm mb-3">
            Measures how strategies' daily/weekly returns move together.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><strong>Low correlation (&lt;0.3):</strong> Good diversification potential</li>
            <li><strong>Medium correlation (0.3-0.7):</strong> Some diversification benefit</li>
            <li><strong>High correlation (&gt;0.7):</strong> Limited diversification, strategies behave similarly</li>
          </ul>
        </div>

        <div className="bg-[#2d2d2d] p-6 rounded-lg mb-6 border border-[#3d3d3d]">
          <h3 className="text-lg font-semibold text-[#FF9500] mb-3">Drawdown Overlap</h3>
          <p className="text-gray-400 text-sm">
            More important than return correlation. Shows whether strategies lose money at the same time,
            which is what actually matters for portfolio risk.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Portfolio Optimization</h2>
        <p className="text-gray-300 mb-4">
          Determine optimal allocation weights across strategies.
        </p>

        <div className="space-y-6 my-6">
          <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Mean-Variance Optimization</h3>
            <p className="text-gray-400 text-sm">
              Classic Markowitz approach: maximize returns for given risk level (or minimize risk
              for given return target).
            </p>
          </div>

          <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Risk Parity</h3>
            <p className="text-gray-400 text-sm">
              Allocate based on risk contribution. Each strategy contributes equally to portfolio risk.
            </p>
          </div>

          <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Kelly Criterion</h3>
            <p className="text-gray-400 text-sm">
              Size positions based on edge and win rate. Maximizes long-term growth rate but can be aggressive.
            </p>
          </div>
        </div>

        <Callout type="warning" title="Optimization Instability">
          Portfolio optimization is notoriously unstable—small changes in inputs can lead to
          wildly different allocations. Use robust methods and constraints to prevent extreme weights.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">Rebalancing</h2>
        <p className="text-gray-300 mb-4">
          How and when to adjust portfolio allocations over time.
        </p>

        <div className="bg-[#2d2d2d] p-6 rounded-lg mb-6 border border-[#3d3d3d]">
          <h3 className="text-lg font-semibold mb-3">Rebalancing Methods</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><strong>Fixed Period:</strong> Rebalance monthly, quarterly, etc. Simple but may rebalance unnecessarily</li>
            <li><strong>Threshold-Based:</strong> Rebalance when allocations drift beyond tolerance. Reduces turnover</li>
            <li><strong>Adaptive:</strong> Rebalance based on market conditions or strategy performance. Most sophisticated</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Advanced Metrics</h2>
        <p className="text-gray-300 mb-4">
          Portfolio-level metrics go beyond simple strategy metrics:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="text-gray-300">
            <strong>Diversification Ratio:</strong> Measures how much diversification benefit the portfolio achieves
          </li>
          <li className="text-gray-300">
            <strong>Tail Risk:</strong> Value at Risk (VaR) and Conditional VaR for worst-case scenarios
          </li>
          <li className="text-gray-300">
            <strong>Risk Contribution:</strong> How much each strategy contributes to total portfolio risk
          </li>
          <li className="text-gray-300">
            <strong>Marginal Risk:</strong> How portfolio risk changes when adjusting a strategy's allocation
          </li>
        </ul>
      </div>
    ),
  },
};

export function Docs({ onNavigate, initialDoc = 'installation' }: DocsProps) {
  const [activeDoc, setActiveDoc] = useState(initialDoc);

  const handleDocChange = (docId: string) => {
    setActiveDoc(docId);
    window.scrollTo(0, 0);
  };

  const currentDoc = docContent[activeDoc] || docContent['installation'];

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <DocSidebar
            sections={docSections}
            activeId={activeDoc}
            onItemClick={handleDocChange}
          />

          <main className="flex-1 min-w-0 lg:max-w-none">
            <Breadcrumbs
              items={[
                { label: 'Learn', href: 'learn' },
                { label: 'Documentation', href: 'docs' },
                { label: currentDoc.title },
              ]}
              onNavigate={onNavigate}
            />

            <article className="pb-20 lg:pb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{currentDoc.title}</h1>
              {currentDoc.content}
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
