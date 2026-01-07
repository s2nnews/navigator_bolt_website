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
      { id: 'getting-started', label: 'Introduction' },
      { id: 'installation', label: 'Installation' },
      { id: 'first-backtest', label: 'Your First Backtest' },
      { id: 'understanding-results', label: 'Understanding Results' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { id: 'strategy-builder', label: 'Strategy Builder' },
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
    title: 'Introduction to S2N Navigator',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          Welcome to S2N Navigator. This guide will help you understand what Navigator is,
          what it can do, and how to get started.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What is Backtesting?</h2>
        <p className="text-gray-300 mb-4">
          Backtesting is the process of testing a trading strategy using historical data to
          see how it would have performed in the past. While past performance doesn't guarantee
          future results, backtesting helps you understand a strategy's behavior under different
          market conditions.
        </p>

        <Callout type="tip" title="Key Insight">
          Backtesting reveals not just profitability, but also risk characteristics, drawdowns,
          and consistency—critical factors for real-world trading.
        </Callout>

        <h2 className="text-2xl font-bold mt-8 mb-4">What Can You Do With Navigator?</h2>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-[#2d2d2d] p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Build Strategies</h3>
            <p className="text-gray-400 text-sm">
              Use visual builders or write custom code to create any trading strategy imaginable.
            </p>
          </div>
          <div className="bg-[#2d2d2d] p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Test Thoroughly</h3>
            <p className="text-gray-400 text-sm">
              Run comprehensive backtests with accurate historical data and realistic execution modeling.
            </p>
          </div>
          <div className="bg-[#2d2d2d] p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Analyze Results</h3>
            <p className="text-gray-400 text-sm">
              Get detailed performance metrics, equity curves, and risk analytics.
            </p>
          </div>
          <div className="bg-[#2d2d2d] p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#FF9500] mb-2">Deploy Live</h3>
            <p className="text-gray-400 text-sm">
              Connect to supported brokers and deploy strategies with confidence.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Next Steps</h2>
        <p className="text-gray-300 mb-4">
          Ready to get started? Follow these next steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
          <li>Install S2N Navigator on your system</li>
          <li>Run your first backtest using a pre-built strategy</li>
          <li>Learn to interpret backtest results</li>
          <li>Explore strategy customization options</li>
        </ol>

        <Callout type="info" title="Learning Resources">
          Check out our video tutorials for visual walkthroughs of key concepts.
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

export function Docs({ onNavigate, initialDoc = 'getting-started' }: DocsProps) {
  const [activeDoc, setActiveDoc] = useState(initialDoc);

  const handleDocChange = (docId: string) => {
    setActiveDoc(docId);
    window.scrollTo(0, 0);
  };

  const currentDoc = docContent[activeDoc] || docContent['getting-started'];

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
