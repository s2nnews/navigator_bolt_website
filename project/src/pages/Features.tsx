import { BarChart3, TrendingUp, Database, Lock, Shield, Brain, FileText, Bookmark, Zap, LineChart, BookOpen } from 'lucide-react';
import { Button } from '../components/Button';

export function Features() {
  return (
    <div className="w-full">
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Professional Quantitative Trading Infrastructure</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            Everything you need to navigate from backtesting to live trading. Python engine, AI models, Trade Journal all integrated. 100+ robust strategies included.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <BarChart3 size={28} className="md:w-8 md:h-8 text-[#FF9500]" />
                <h2 className="text-2xl md:text-3xl font-bold">Built-In Bias Detection</h2>
              </div>
              <p className="text-lg md:text-2xl text-[#FF9500] font-semibold mb-3 md:mb-4">
                World's First Commercial Framework
              </p>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Navigator reveals the hidden fragility, randomness, and overfitting inside backtests.
              </p>
              <p className="text-sm md:text-base text-gray-300 font-semibold mb-4">
                Separates real strategies from lucky ones.
              </p>
              <div className="bg-[#2d2d2d] border border-[#3d3d3d] p-4 md:p-6 rounded-lg">
                <p className="text-xs md:text-sm text-gray-400 mb-2">Traditional Sharpe Ratio: 2.5</p>
                <div className="h-2 bg-red-500 rounded mb-4"></div>
                <p className="text-xs md:text-sm text-gray-400 mb-2">Deflated Sharpe Ratio: 1.2</p>
                <div className="h-2 bg-[#FF9500] rounded"></div>
                <p className="text-xs text-gray-500 mt-4">Real performance after bias correction</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/Backtest Score Key image.png" alt="Bias Detection" className="w-full max-w-md rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="flex justify-center md:order-2">
              <img src="/feature_images/backtest report equity.png" alt="Scoring System" className="w-full max-w-md rounded-lg shadow-xl" />
            </div>
            <div className="md:order-1">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <TrendingUp size={28} className="md:w-8 md:h-8 text-[#FF9500]" />
                <h2 className="text-2xl md:text-3xl font-bold">Quant Scoring System</h2>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Evaluates strategies on multiple dimensions to reveal true robustness.
              </p>
              <h3 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Evaluation Criteria:</h3>
              <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm text-gray-400">
                <div className="flex gap-2">
                  <span className="text-[#FF9500]">→</span>
                  <span>Robustness</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#FF9500]">→</span>
                  <span>Fragility</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#FF9500]">→</span>
                  <span>Stability</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#FF9500]">→</span>
                  <span>Regime consistency</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#FF9500]">→</span>
                  <span>Tail risk</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#FF9500]">→</span>
                  <span>Drawdown structure</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#FF9500]">→</span>
                  <span>Distribution shape</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#FF9500]">→</span>
                  <span>Walk-forward strength</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <img src="/feature_images/leaderboard.png" alt="Leaderboards" className="w-full rounded-lg shadow-xl mb-6 md:hidden" />
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Bookmark size={28} className="md:w-8 md:h-8 text-[#FF9500]" />
                <h2 className="text-2xl md:text-3xl font-bold">Leaderboards That Never Forget</h2>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Every backtest saved, ranked, scored, and archived. Your research becomes a living library.
              </p>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Automatic ranking and scoring</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Historical performance tracking</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Compare strategies side-by-side</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Never lose your research progress</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <img src="/feature_images/leaderboard.png" alt="Leaderboards" className="w-full rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="flex justify-center md:order-2">
              <img src="/feature_images/Live trading.png" alt="Trading Progression" className="w-full max-w-md rounded-lg shadow-xl" />
            </div>
            <div className="md:order-1">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Zap size={28} className="md:w-8 md:h-8 text-[#FF9500]" />
                <h2 className="text-2xl md:text-3xl font-bold">One-Click Trading Progression</h2>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Promote strategies instantly to paper-trading or run unlimited forward tests via S2N virtual accounts.
              </p>
              <p className="text-sm md:text-base text-gray-300 font-semibold mb-4 md:mb-6">
                Get real-time insight before risking capital.
              </p>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Instant promotion to paper trading</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Unlimited S2N virtual accounts</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Test before deploying capital</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Shield size={28} className="md:w-8 md:h-8 text-[#FF9500]" />
                <h2 className="text-2xl md:text-3xl font-bold">Blockchain-Locked Trades</h2>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Every trade in S2N Virtual forward tests are cryptographically locked. Preventing tampering and manipulation.
              </p>
              <p className="text-base md:text-lg text-[#FF9500] font-semibold mb-4 md:mb-6">
                A breakthrough credibility mechanism.
              </p>
              <div className="bg-[#2d2d2d] border border-[#3d3d3d] p-4 md:p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-sm md:text-base">Immutable Trade Records:</h4>
                <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                  <li>✓ Cryptographic proof of every trade</li>
                  <li>✓ Tamper-proof performance records</li>
                  <li>✓ Transparent verification for all users</li>
                  <li>✓ Build credible verified track records</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#FF9500] text-center">
                <Lock size={48} className="md:w-16 md:h-16 text-[#FF9500] mx-auto mb-4" />
                <p className="text-sm md:text-base text-gray-300 font-semibold mb-2">Cryptographically Secured</p>
                <p className="text-xs md:text-sm text-gray-400">Every trade is locked on the blockchain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="flex justify-center md:order-2">
              <img src="/feature_images/DataFarm.png" alt="Data" className="w-full max-w-md rounded-lg shadow-xl" />
            </div>
            <div className="md:order-1">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Database size={28} className="md:w-8 md:h-8 text-[#FF9500]" />
                <h2 className="text-2xl md:text-3xl font-bold">Institutional-Grade Data</h2>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Turnkey access to clean, properly structured data. Makes research instant.
              </p>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Survivorship-bias-free equities</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Properly rolled futures data</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Pre-loaded structured datasets</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Economic & free API data sources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <img src="/feature_images/Strategy Builder.png" alt="Strategy Library" className="w-full rounded-lg shadow-xl mb-6 md:hidden" />
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <BookOpen size={28} className="md:w-8 md:h-8 text-[#FF9500]" />
                <h2 className="text-2xl md:text-3xl font-bold">Ships with Proven Strategies</h2>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                100+ robust strategies and ready-to-run templates.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-[#2d2d2d] p-3 md:p-4 rounded border border-[#3d3d3d]">
                  <p className="text-xs md:text-sm font-semibold mb-1">Trend-Following</p>
                  <p className="text-[10px] md:text-xs text-gray-400">Multi-timeframe momentum</p>
                </div>
                <div className="bg-[#2d2d2d] p-3 md:p-4 rounded border border-[#3d3d3d]">
                  <p className="text-xs md:text-sm font-semibold mb-1">Mean Reversion</p>
                  <p className="text-[10px] md:text-xs text-gray-400">Statistical arbitrage</p>
                </div>
                <div className="bg-[#2d2d2d] p-3 md:p-4 rounded border border-[#3d3d3d]">
                  <p className="text-xs md:text-sm font-semibold mb-1">Cross-Sectional</p>
                  <p className="text-[10px] md:text-xs text-gray-400">Relative strength models</p>
                </div>
                <div className="bg-[#2d2d2d] p-3 md:p-4 rounded border border-[#3d3d3d]">
                  <p className="text-xs md:text-sm font-semibold mb-1">Tactical Allocation</p>
                  <p className="text-[10px] md:text-xs text-gray-400">Dynamic portfolio rotation</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <img src="/feature_images/Strategy Builder.png" alt="Strategy Library" className="w-full max-w-md rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="flex justify-center md:order-2">
              <img src="/feature_images/AI.png" alt="AI Integration" className="w-full max-w-md rounded-lg shadow-xl" />
            </div>
            <div className="md:order-1">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Brain size={28} className="md:w-8 md:h-8 text-[#FF9500]" />
                <h2 className="text-2xl md:text-3xl font-bold">Python Editor + AI Integration</h2>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Unified framework where AI and Python actually work together.
              </p>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Built-in Python editor</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Unified framework architecture</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>AI that understands Navigator</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Generate or import external signals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <img src="/feature_images/cockpit home.png" alt="Market Monitors" className="w-full rounded-lg shadow-xl mb-6 md:hidden" />
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <LineChart size={28} className="md:w-8 md:h-8 text-[#FF9500]" />
                <h2 className="text-2xl md:text-3xl font-bold">Market Monitors & Research</h2>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Professional-grade research made simple with real-time insights and AI explanations.
              </p>
              <div className="bg-[#2d2d2d] border border-[#3d3d3d] p-4 md:p-6 rounded-lg">
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
                  <li className="flex gap-2 md:gap-3">
                    <span className="text-[#FF9500]">→</span>
                    <span>Real-time market monitoring</span>
                  </li>
                  <li className="flex gap-2 md:gap-3">
                    <span className="text-[#FF9500]">→</span>
                    <span>Regime detection and analysis</span>
                  </li>
                  <li className="flex gap-2 md:gap-3">
                    <span className="text-[#FF9500]">→</span>
                    <span>Custom signal alerts</span>
                  </li>
                  <li className="flex gap-2 md:gap-3">
                    <span className="text-[#FF9500]">→</span>
                    <span>AI-powered explanations</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <img src="/feature_images/cockpit home.png" alt="Market Monitors" className="w-full max-w-md rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="flex justify-center md:order-2">
              <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
                <FileText size={40} className="md:w-12 md:h-12 text-[#FF9500] mb-4" />
                <h4 className="font-semibold mb-3 text-sm md:text-base">Your Trading Journal</h4>
                <p className="text-gray-400 text-xs md:text-sm mb-4">Capture the why behind every trade</p>
                <div className="space-y-2 text-[10px] md:text-xs text-gray-400">
                  <p>✓ Document decisions</p>
                  <p>✓ Track emotions</p>
                  <p>✓ Record reasoning</p>
                  <p>✓ Continuous improvement</p>
                </div>
              </div>
            </div>
            <div className="md:order-1">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <FileText size={28} className="md:w-8 md:h-8 text-[#FF9500]" />
                <h2 className="text-2xl md:text-3xl font-bold">Built-In Trade Journal</h2>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Capture the thoughts, decisions, emotions, and reasoning that drive trading results.
              </p>
              <p className="text-sm md:text-base text-gray-300 font-semibold mb-4 md:mb-6">
                Track not just what you did, but why you did it.
              </p>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Document trade rationale</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Track emotional states</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Review past decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#2d2d2d] to-[#3d3d3d] p-8 md:p-12 rounded-lg border border-[#FF9500] text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience Professional Quant Trading</h2>
            <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
              Start your 14-day free trial. Full access to all features. No credit card required.
            </p>
            <Button variant="primary" className="w-full sm:w-auto">Start Free Trial</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
