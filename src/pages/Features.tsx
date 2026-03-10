import { BarChart3, TrendingUp, Database, Lock, Shield, Brain, FileText, Bookmark, Zap, LineChart, BookOpen, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export function Features() {
  return (
    <div className="w-full">
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">An Organizational Framework</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl">
            Everything under one roof: strategy development, data farming, research notes, journaling, workflow tracking, monitoring, and feedback. Designed to keep decisions observable, auditable, and connected over time.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.08),transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-cyan-400 text-xs md:text-sm font-medium">AI-Powered Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Oracle</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-2">
              An AI that knows your data, learns from every backtest, and gets smarter the more you trade.
            </p>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Not a generic chatbot—a true trading co-pilot deeply integrated into Navigator.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/30 rounded-lg p-4 md:p-6 hover:border-cyan-400 transition-all duration-300">
              <Database className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mb-3" />
              <h3 className="text-base md:text-lg font-bold mb-2">Knows Your Data</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Sees exactly what's in your DataFarm and builds configs that work with YOUR data.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/30 rounded-lg p-4 md:p-6 hover:border-cyan-400 transition-all duration-300">
              <Brain className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mb-3" />
              <h3 className="text-base md:text-lg font-bold mb-2">Learns Your Style</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Builds a profile of your trading preferences and anticipates your needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/30 rounded-lg p-4 md:p-6 hover:border-cyan-400 transition-all duration-300">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mb-3" />
              <h3 className="text-base md:text-lg font-bold mb-2">Prevents Mistakes</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Warns you when something doesn't look right before you make a mistake.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/30 rounded-lg p-4 md:p-6 hover:border-cyan-400 transition-all duration-300">
              <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mb-3" />
              <h3 className="text-base md:text-lg font-bold mb-2">200+ Strategies</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Deep knowledge of momentum, mean reversion, TAA, and factor strategies.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#ai-oracle"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30"
            >
              Learn More About the Oracle
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <BarChart3 size={28} className="md:w-8 md:h-8 text-[#FF9500]" />
                <h2 className="text-2xl md:text-3xl font-bold">Scientific Bias Detection</h2>
              </div>
              <p className="text-lg md:text-2xl text-[#FF9500] font-semibold mb-3 md:mb-4">
                A Filter Against Self-Deception
              </p>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Navigator reveals hidden fragility, randomness, and overfitting inside backtests. It protects you from false confidence when none is justified.
              </p>
              <p className="text-sm md:text-base text-gray-300 font-semibold mb-4">
                Helps you avoid bad strategies, not find the best ones.
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
              <img src="/feature_images/backtest_score_key_image_updated.png" alt="Bias Detection" className="w-full max-w-md rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="flex justify-center md:order-2">
              <img src="/feature_images/pure_score.png" alt="Scoring System" className="w-full max-w-md rounded-lg shadow-xl" />
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
              <img src="/feature_images/leaderboard_copy.png" alt="Leaderboards" className="w-full rounded-lg shadow-xl" />
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
              <img src="/feature_images/strategy_library.png" alt="Strategy Library" className="w-full rounded-lg shadow-xl mb-6 md:hidden" />
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
              <img src="/feature_images/strategy_library.png" alt="Strategy Library" className="w-full max-w-md rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="flex justify-center md:order-2">
              <img src="/feature_images/ai_python.png" alt="AI Integration" className="w-full max-w-md rounded-lg shadow-xl" />
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
              <img src="/feature_images/cockpit_home.png" alt="Market Monitors" className="w-full rounded-lg shadow-xl mb-6 md:hidden" />
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
              <img src="/feature_images/market_monitor.png" alt="Market Monitors" className="w-full max-w-md rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="flex justify-center md:order-2">
              <img src="/feature_images/journal.png" alt="Trading Journal" className="w-full max-w-md rounded-lg shadow-xl" />
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
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <img src="/feature_images/multi_accounts.png" alt="Multi-Account Orchestration" className="w-full rounded-lg shadow-xl mb-6 md:hidden" />
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Layers size={28} className="md:w-8 md:h-8 text-[#FF9500]" />
                <h2 className="text-2xl md:text-3xl font-bold">Multi-Account Strategy Orchestration</h2>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Navigator is designed as a central control framework — not a single-account trading tool.
              </p>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                It can run multiple strategies across unlimited virtual accounts simultaneously, allowing you to separate capital, risk, instruments, or mandates without duplicating infrastructure or losing oversight.
              </p>
              <p className="text-base md:text-lg text-[#FF9500] font-semibold">
                This is how professional trading desks operate: one framework, many accounts, complete visibility.
              </p>
            </div>
            <div className="hidden md:flex justify-center">
              <img src="/feature_images/multi_accounts.png" alt="Multi-Account Orchestration" className="w-full max-w-md rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#2d2d2d] to-[#3d3d3d] p-8 md:p-12 rounded-lg border border-[#FF9500] text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Surveillance and Self-Awareness</h2>
            <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
              Navigator provides rear-view mirrors so you can see when assumptions break, when behavior drifts, and when confidence is no longer justified. Start your intentionally limited trial.
            </p>
            <Button variant="primary" className="w-full sm:w-auto" onClick={() => window.location.hash = 'trial'}>Start Free Trial</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
