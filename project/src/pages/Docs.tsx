import { useState } from 'react';
import { DocSidebar } from '../components/DocSidebar';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Callout } from '../components/Callout';
import { VideoEmbed } from '../components/VideoEmbed';

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
    title: 'Concepts',
    items: [
      { id: 'glossary', label: 'Glossary' },
      { id: 'metrics', label: 'Performance Metrics' },
      { id: 'risk-management', label: 'Risk Management' },
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

          <main className="flex-1 min-w-0">
            <Breadcrumbs
              items={[
                { label: 'Learn', href: 'learn' },
                { label: 'Documentation', href: 'docs' },
                { label: currentDoc.title },
              ]}
              onNavigate={onNavigate}
            />

            <article>
              <h1 className="text-4xl font-bold mb-6">{currentDoc.title}</h1>
              {currentDoc.content}
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
