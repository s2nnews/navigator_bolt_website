import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { VideoModal } from '../components/VideoModal';
import { SubstackPostCard } from '../components/SubstackPostCard';
import { fetchSubstackFeed, SubstackPost } from '../utils/substack';
import { BarChart3, Lock, Shield, Database, TrendingUp, Users, ArrowRight, Brain, BookOpen, Rss } from 'lucide-react';

export function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [latestPosts, setLatestPosts] = useState<SubstackPost[]>([]);

  useEffect(() => {
    fetchSubstackFeed()
      .then((feed) => setLatestPosts(feed.posts.slice(0, 3)))
      .catch(() => {});
  }, []);

  return (
    <div className="w-full">
      <div className="block bg-gradient-to-r from-[#FF9500] to-[#FF7A00] py-3 md:py-4 text-center text-white font-semibold text-sm md:text-base shadow-lg">
        <span className="text-base md:text-lg">S2N Navigator is currently in Beta as of (2026-01-21)</span>
      </div>

      <section className="relative bg-gradient-to-b from-[#1a1a1a] via-[#151515] to-[#0f0f0f] py-8 sm:py-12 md:py-16 lg:py-12 overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF9500]/5 via-transparent to-transparent opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content - Desktop: 7 cols, Mobile: full width with flex ordering */}
            <div className="lg:col-span-7 text-left flex flex-col lg:space-y-3 lg:block">
              {/* Small badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d2d2d] border border-[#3d3d3d] text-sm text-gray-300 mb-3 sm:mb-4 order-1">
                <Brain size={16} className="text-[#FF9500]" />
                <span>Bias-Aware Framework</span>
              </div>

              {/* Main headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-4 order-2">
                <span className="block text-white">Backtest to</span>
                <span className="block text-white">Live Trading</span>
                <span className="block bg-gradient-to-r from-[#FF9500] to-[#FF7A00] bg-clip-text text-transparent pb-2">With Confidence</span>
              </h1>

              {/* Subhead */}
              <p className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-medium mb-3 order-3">
                AI-powered research & automation framework for systematic traders.
              </p>

              {/* Tagline */}
              <p className="text-xl sm:text-2xl md:text-3xl text-[#FF9500] font-semibold mb-8 order-4">
                Don't be fooled by randomness.
              </p>

              {/* Image on mobile only - appears after tagline on mobile */}
              <div className="lg:hidden relative mb-6 order-5">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF9500] to-[#FF7A00] rounded-xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-300"></div>
                  <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/50 border border-[#3d3d3d]">
                    <img
                      src="/feature_images/backtest_score_key_image_updated.png"
                      alt="S2N Navigator Scoring System"
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-start order-6">
                <Button
                  variant="primary"
                  className="group w-full sm:w-auto text-lg px-8 py-4 shadow-lg shadow-[#FF9500]/20 hover:shadow-[#FF9500]/40 transition-all duration-300"
                  onClick={() => window.location.hash = 'trial'}
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto text-lg px-8 py-4"
                  onClick={() => setIsVideoOpen(true)}
                >
                  Watch Demo
                </Button>
              </div>

              {/* 3-bullet micro-strip - hidden on mobile, visible on desktop */}
              <div className="hidden lg:flex lg:gap-6 text-base text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-[#FF9500]">•</span>
                  <span>Backtest validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF9500]">•</span>
                  <span>Live trade monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF9500]">•</span>
                  <span>Portfolio robustness scoring</span>
                </div>
              </div>

              {/* Description paragraphs with better spacing */}
              <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl lg:mx-0 mb-6 order-7">
                <p className="text-gray-400">
                  You have data. You have backtesting tools. You have brokerage connections. What you don't have is a validation layer tying it all together.
                </p>
                <p className="font-medium">
                  Navigator connects your backtests, live trades, and portfolio performance into one research workflow — then stress-tests whether results are robust or curve-fit.
                </p>
                <p className="text-gray-400">
                  Navigator's Oracle AI tracks research behaviour, flags overfitting, and scores strategy durability — so you deploy what survives reality, not what looks good in simulation.
                </p>
                <p className="font-medium">
                  From backtesting to live deployment, Navigator evaluates whether your edge is real — or an illusion.
                </p>
              </div>

              {/* Key value proposition - styled differently */}
              <div className="relative mb-6 order-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF9500] to-transparent"></div>
                <p className="pl-6 text-base sm:text-lg md:text-xl text-white font-semibold leading-relaxed">
                  Navigator does not help you find the best strategy.<br className="hidden sm:block"/>
                  <span className="text-gray-300">It helps you avoid the fragile ones — and stay in the game.</span>
                </p>
              </div>

              {/* Trust badge */}
              <p className="text-gray-500 text-sm sm:text-base flex items-center gap-2 justify-start order-9">
                <Lock size={16} className="text-gray-600" />
                <span>14-day free trial. No credit card required.</span>
              </p>
            </div>

            {/* Right Images - Desktop: 5 cols, Hidden on mobile (shown inline above) */}
            <div className="hidden lg:block lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative space-y-6">
                {/* Main featured image with accent border */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF9500] to-[#FF7A00] rounded-xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-300"></div>
                  <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/50 border border-[#3d3d3d]">
                    <img
                      src="/feature_images/backtest_score_key_image_updated.png"
                      alt="S2N Navigator Scoring System"
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Secondary image - hidden on mobile, visible on desktop */}
                <div className="hidden md:block relative group lg:ml-8">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7A00] to-[#FF9500] rounded-xl opacity-10 group-hover:opacity-30 blur transition-opacity duration-300"></div>
                  <div className="relative rounded-lg overflow-hidden shadow-xl shadow-black/40 border border-[#2d2d2d]">
                    <img
                      src="/feature_images/cockpit_home.png"
                      alt="Cockpit Home"
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Decorative element - desktop only */}
                <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#FF9500]/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">Why Most Trading Fails</h2>
          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-8 md:mb-16 max-w-3xl mx-auto">
            Markets are noisy, deceptive, and regime-dependent. Most backtests fail out of sample because cognitive bias and poor organization hide mistakes and reinforce false confidence.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">🧠</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Cognitive Bias</h3>
              <p className="text-sm md:text-base text-gray-400">Confirmation bias, narrative fallacies, and wishful thinking lead traders to see patterns where none exist.</p>
            </div>
            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">📊</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Overfitting</h3>
              <p className="text-sm md:text-base text-gray-400">More choice increases bias, not edge. Test enough parameters and any backtest looks good by chance alone.</p>
            </div>
            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d] sm:col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">📁</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Fragmented Workflow</h3>
              <p className="text-sm md:text-base text-gray-400">Scattered scripts, disconnected notebooks, and forgotten assumptions create blind spots that compound over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">An Organizational Framework Under One Roof</h2>
          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-3 md:mb-4 max-w-3xl mx-auto">
            Navigator brings strategy development, data farming, research notes, journaling, workflow tracking, monitoring, and feedback into a single coherent framework designed to keep decisions observable, auditable, and connected over time.
          </p>
          <p className="text-center text-[#FF9500] text-base sm:text-lg md:text-xl font-semibold mb-8 md:mb-12">
            The purpose is not convenience. It is surveillance and self-awareness.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-16">
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded bg-[#FF9500]">
                    <BarChart3 size={18} className="md:hidden text-black" />
                    <BarChart3 size={20} className="hidden md:block text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Rear-View Mirrors</h3>
                  <p className="text-sm md:text-base text-gray-400">See when assumptions break, when behavior drifts, when strategies deviate from intent. Continuous feedback loops prevent blind spots.</p>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded bg-[#FF9500]">
                    <TrendingUp size={18} className="md:hidden text-black" />
                    <TrendingUp size={20} className="hidden md:block text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Institutional-Grade Structure</h3>
                  <p className="text-sm md:text-base text-gray-400">Workflows are structured. Research is tracked. Decisions are monitored. Nothing important lives in isolation.</p>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded bg-[#FF9500]">
                    <Shield size={18} className="md:hidden text-black" />
                    <Shield size={20} className="hidden md:block text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Scientific Bias Detection</h3>
                  <p className="text-sm md:text-base text-gray-400">Reveals hidden fragility, randomness, and overfitting. Protects you from false confidence when none is justified.</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <img src="/feature_images/backtest_report_equity.png" alt="Backtest Report" className="w-full max-w-md rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">Everything Under One Roof</h2>
          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-8 md:mb-16 max-w-3xl mx-auto">
            No more scattered scripts, disconnected notebooks, or forgotten strategies. Navigator brings your entire workflow into a single coherent framework.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] hover:border-[#FF9500] transition-colors overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src="/feature_images/DataFarm.png" alt="DataFarm" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">Data Farming</h3>
                <p className="text-sm md:text-base text-gray-400">Clean, structured, survivorship-bias-free data. No more hunting for datasets or questioning data quality.</p>
              </div>
            </div>

            <div className="bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] hover:border-[#FF9500] transition-colors overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src="/feature_images/strategy_builder_copy.png" alt="Strategy Builder" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">Strategy Development</h3>
                <p className="text-sm md:text-base text-gray-400">Python editor with AI integration. Ships with curated strategies designed to avoid common failure modes.</p>
              </div>
            </div>

            <div className="bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] hover:border-[#FF9500] transition-colors overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src="/feature_images/leaderboard_copy.png" alt="Leaderboard" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">Research Archive</h3>
                <p className="text-sm md:text-base text-gray-400">Every backtest saved, ranked, and archived. Your research becomes a living library that never forgets.</p>
              </div>
            </div>

            <div className="bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] hover:border-[#FF9500] transition-colors overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src="/getting_started/strategy_pipeline_kanban_dashboard.png" alt="Strategy Pipeline Kanban Dashboard" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">Workflow Tracking</h3>
                <p className="text-sm md:text-base text-gray-400">Kanban-style organization keeps research, testing, and deployment visible and accountable.</p>
              </div>
            </div>

            <div className="bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] hover:border-[#FF9500] transition-colors overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src="/feature_images/live_trading.png" alt="Live Trading" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">Monitoring & Feedback</h3>
                <p className="text-sm md:text-base text-gray-400">Real-time forward testing and monitoring. See when strategies drift before capital is lost.</p>
              </div>
            </div>

            <div className="bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] hover:border-[#FF9500] transition-colors overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src="/feature_images/journal.png" alt="Journal" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">Research Notes & Journal</h3>
                <p className="text-sm md:text-base text-gray-400">Document assumptions, decisions, and emotional states. Build institutional memory that compounds over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.08),transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
              <Brain size={16} className="text-cyan-400" />
              <span className="text-cyan-400 text-xs md:text-sm font-medium">AI-Powered Trading Intelligence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Meet the <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Oracle</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              An AI that doesn't just answer questions—it <span className="text-cyan-400 font-semibold">knows</span> your data, learns from every backtest, and gets smarter the more you trade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/30 rounded-xl p-6 md:p-8 hover:border-cyan-400 transition-all duration-300">
              <Database className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Knows Your Data</h3>
              <p className="text-sm md:text-base text-gray-400">
                The Oracle sees exactly what's in your DataFarm and builds strategies that work with YOUR data—not hypothetical datasets you don't have.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/30 rounded-xl p-6 md:p-8 hover:border-cyan-400 transition-all duration-300">
              <Brain className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Learns From Every Backtest</h3>
              <p className="text-sm md:text-base text-gray-400">
                Every backtest teaches the Oracle about your trading style, risk tolerance, and what works for YOU. After 50 backtests, it anticipates your needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/30 rounded-xl p-6 md:p-8 hover:border-cyan-400 transition-all duration-300">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Your Trading Co-Pilot</h3>
              <p className="text-sm md:text-base text-gray-400">
                The Oracle warns you when something doesn't look right—before you make a mistake. Because it remembers your history and knows what works for you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/30 rounded-xl p-6 md:p-8 hover:border-cyan-400 transition-all duration-300">
              <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">200+ Battle-Tested Strategies</h3>
              <p className="text-sm md:text-base text-gray-400">
                Deep knowledge of momentum, mean reversion, TAA, and more. Ask for any strategy type and get production-ready configs in seconds.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#ai-oracle"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30"
            >
              Discover the Oracle
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">Data & Broker Integrations</h2>
          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto">
            Connect with leading data providers and brokers. More than 100 crypto exchanges and 100s of broker options. Exclusive partner deals are available for Navigator users.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center mb-8">
            <div className="bg-[#2d2d2d] border border-[#3d3d3d] hover:border-[#FF9500] transition-colors rounded-lg p-4 md:p-6 w-full h-24 md:h-28 flex items-center justify-center">
              <img src="/logos/norgate-data-logo.svg" alt="Norgate Data" className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="bg-[#2d2d2d] border border-[#3d3d3d] hover:border-[#FF9500] transition-colors rounded-lg p-4 md:p-6 w-full h-24 md:h-28 flex items-center justify-center">
              <img src="/logos/financialdata.png" alt="Financial Data" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-[#2d2d2d] border border-[#3d3d3d] hover:border-[#FF9500] transition-colors rounded-lg p-4 md:p-6 w-full h-24 md:h-28 flex items-center justify-center">
              <img src="/logos/alpaca-logo.png" alt="Alpaca" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-white border border-[#3d3d3d] hover:border-[#FF9500] transition-colors rounded-lg p-4 md:p-6 w-full h-24 md:h-28 flex items-center justify-center">
              <img src="/logos/metatrader-5-logo.png" alt="MetaTrader 5" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-[#2d2d2d] border border-[#3d3d3d] hover:border-[#FF9500] transition-colors rounded-lg p-4 md:p-6 w-full h-24 md:h-28 flex items-center justify-center">
              <img src="/logos/tradestation.svg" alt="TradeStation" className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="text-center">
            <a href="#integrations" className="inline-flex items-center text-[#FF9500] hover:text-orange-400 font-semibold transition-colors">
              View All Integrations & Partner Deals
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">Built by Experience, Powered by AI</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">Michael Berman, PhD</h3>
              <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                Navigator is built by a 25-year trading veteran with real capital management experience and deep trading psychology expertise.
              </p>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Multiple successful FinTech exits in trading analytics</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Thousands of traders mentored and 100s seeded with capital</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Expert in quantitative design, risk management, and regime navigation</span>
                </li>
              </ul>
              <p className="text-sm md:text-base text-gray-300 mt-4 md:mt-6 font-semibold">
                Navigator fuses decades of real-world trading wisdom with the full strength of modern AI.
              </p>
            </div>
            <div className="bg-[#2d2d2d] border border-[#FF9500] p-6 md:p-8 rounded-lg">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 italic mb-3 md:mb-4">
                "I built Navigator to solve the problem that cost me years of frustration: distinguishing real strategies from lucky ones."
              </p>
              <p className="text-sm md:text-base text-gray-400">— Michael Berman, PhD, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rss size={24} className="text-[#FF9500]" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Latest from the Newsletter</h2>
            </div>
            <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
              Strategy breakdowns, live trading examples, and research insights published on Substack.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map((post, idx) => (
                <SubstackPostCard key={idx} post={post} variant="compact" />
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => { window.location.hash = 'blog'; window.scrollTo(0, 0); }}
                className="inline-flex items-center gap-2 text-[#FF9500] hover:text-orange-400 font-semibold transition-colors text-lg"
              >
                View All Posts
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">Who Navigator Is For</h2>
          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto">
            Navigator is opinionated and curated. It is designed for serious users who value organizational discipline and intellectual honesty over convenience and mass appeal.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4 text-[#FF9500]">Systematic Traders</h3>
              <p className="text-sm md:text-base text-gray-400">Those who recognize that markets are deceptive and value survival over peak performance.</p>
            </div>
            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4 text-[#FF9500]">Experienced Researchers</h3>
              <p className="text-sm md:text-base text-gray-400">Those who have learned that fragmented tools and scattered research lead to blind spots and compounding mistakes.</p>
            </div>
            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d] sm:col-span-2 md:col-span-1">
              <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4 text-[#FF9500]">Serious Professionals</h3>
              <p className="text-sm md:text-base text-gray-400">Those willing to confront uncomfortable truths about their strategies rather than chase comforting narratives.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#2d2d2d] to-[#3d3d3d] p-6 sm:p-8 md:p-12 rounded-lg border border-[#FF9500] text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">A Framework for Long-Term Survival</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Navigator maximizes the probability of long-term survival and slightly above-average outcomes. It does not maximize returns. It maximizes clarity.
            </p>
            <Button
              variant="primary"
              className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              onClick={() => window.location.hash = 'trial'}
            >
              Start Free Trial <ArrowRight className="inline ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="BuwIiza2qnE"
      />
    </div>
  );
}
