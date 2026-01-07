import { useState } from 'react';
import { Button } from '../components/Button';
import { VideoModal } from '../components/VideoModal';
import { BarChart3, Lock, Shield, Database, TrendingUp, Users, ArrowRight, Brain } from 'lucide-react';

export function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="block bg-gradient-to-r from-[#FF9500] to-[#FF7A00] py-3 md:py-4 text-center text-white font-semibold text-sm md:text-base shadow-lg">
        <span className="text-base md:text-lg">S2N Navigator is currently in Alpha Testing</span>
      </div>

      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight max-w-xl mx-auto md:mx-0">
                Backtesting to<br/> Live Trading<br/>with Edge
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#FF9500] font-semibold mb-3 md:mb-4">
                Don't be fooled by randomness.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8">
                The world's first commercial backtesting framework with built-in bias detection and a modular workflow to production. See the truth, not the illusion.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 justify-center md:justify-start">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                  onClick={() => window.location.hash = 'trial'}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                  onClick={() => setIsVideoOpen(true)}
                >
                  Watch Demo
                </Button>
              </div>
              <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-0">14-day free trial. No credit card required.</p>
            </div>
            <div className="flex flex-col gap-4 pt-0 md:pt-[22px]">
              <img src="/Backtest Score Key image.png" alt="S2N Navigator Scoring System" className="w-full max-w-md rounded-lg shadow-2xl" />
              <img src="/feature_images/control center.png" alt="Control Center" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">The Problem with Traditional Backtesting</h2>
          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-8 md:mb-16 max-w-3xl mx-auto">
            Most traders lose money because they can't distinguish real signal from random noise.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">📊</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Inflated Metrics Mask the Truth</h3>
              <p className="text-sm md:text-base text-gray-400">Traditional performance metrics hide overfitting and multiple testing bias, making lucky trades look like skill.</p>
            </div>
            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">⚠️</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Testing leads to False Positives</h3>
              <p className="text-sm md:text-base text-gray-400">The more strategies you test, the higher the chance of finding one that worked by pure chance alone.</p>
            </div>
            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d] sm:col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">📉</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Backtests Die in Live Trading</h3>
              <p className="text-sm md:text-base text-gray-400">Without scientific bias correction, stellar backtest results often collapse when facing real market conditions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">The S2N Navigator Difference</h2>
          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-3 md:mb-4 max-w-3xl mx-auto">
            The world's first commercial backtesting framework with built-in bias detection. The world's most advanced AI models fully integrated and trained to build strategies using the Navigator framework with performance visualisations along with tailored report explanations.
          </p>
          <p className="text-center text-[#FF9500] text-base sm:text-lg md:text-xl font-semibold mb-8 md:mb-12">
            Clarity over confusion. Robustness over randomness. Discipline over emotion.
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
                  <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Built-In Bias Detection</h3>
                  <p className="text-sm md:text-base text-gray-400">Reveals hidden fragility, randomness, and overfitting. Protects you from false confidence and misleading curves.</p>
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
                  <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Quant Scoring System</h3>
                  <p className="text-sm md:text-base text-gray-400">Inspired by the best minds in quant finance. Evaluates robustness, fragility, stability, and tail risk.</p>
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
                  <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Blockchain-Locked Trades</h3>
                  <p className="text-sm md:text-base text-gray-400">Every trade cryptographically locked. Prevents tampering, hindsight edits, and manipulation.</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <img src="/feature_images/backtest report equity.png" alt="Backtest Report" className="w-full max-w-md rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">Professional Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] hover:border-[#FF9500] transition-colors overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src="/feature_images/DataFarm.png" alt="DataFarm" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">Institutional-Grade Data</h3>
                <p className="text-sm md:text-base text-gray-400">Survivorship-bias-free equities, properly rolled futures, FX, indices, and macro datasets. Instant access.</p>
              </div>
            </div>

            <div className="bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] hover:border-[#FF9500] transition-colors overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src="/feature_images/AI.png" alt="AI Integration" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">Python Editor + AI Integration</h3>
                <p className="text-sm md:text-base text-gray-400">Built-in editor with AI that understands Navigator architecture. Generate signals internally or pass external signals.</p>
              </div>
            </div>

            <div className="bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] hover:border-[#FF9500] transition-colors overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src="/feature_images/leaderboard.png" alt="Leaderboard" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">Leaderboards That Never Forget</h3>
                <p className="text-sm md:text-base text-gray-400">Every backtest saved, ranked, scored, and archived. Your research becomes a living library.</p>
              </div>
            </div>

            <div className="bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] hover:border-[#FF9500] transition-colors overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src="/feature_images/Live trading.png" alt="Live Trading" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">One-Click Promotion to Paper Trading</h3>
                <p className="text-sm md:text-base text-gray-400">Promote strategies to broker paper accounts or unlimited S2N virtual forward tests. True real-time insight.</p>
              </div>
            </div>

            <div className="bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] hover:border-[#FF9500] transition-colors overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src="/feature_images/Strategy Builder.png" alt="Strategy Builder" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">Multi-Asset Strategy Library</h3>
                <p className="text-sm md:text-base text-gray-400">Ships with proven strategies: trend-following, mean reversion, tactical allocation, FX rotation. Ready to run.</p>
              </div>
            </div>

            <div className="bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] hover:border-[#FF9500] transition-colors overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src="/feature_images/cockpit home.png" alt="Cockpit Home" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">Community Leaderboard</h3>
                <p className="text-sm md:text-base text-gray-400">A bias free transparent social quant community. Publish results, follow performers, discuss strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">Data & Broker Integrations</h2>
          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto">
            Connect with leading data providers and brokers. Exclusive partner deals available for Navigator users.
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

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">Who It's For</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4 text-[#FF9500]">Systematic Traders & Investors</h3>
              <p className="text-sm md:text-base text-gray-400">Execute disciplined, rules-based strategies with professional-grade infrastructure at retail pricing.</p>
            </div>
            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4 text-[#FF9500]">Quant Developers</h3>
              <p className="text-sm md:text-base text-gray-400">Focus on finding alpha. Let Navigator handle infrastructure, data, and bias detection.</p>
            </div>
            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d] sm:col-span-2 md:col-span-1">
              <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4 text-[#FF9500]">Professional Researchers</h3>
              <p className="text-sm md:text-base text-gray-400">Leverage institutional-grade analytics and data to discover robust trading signals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#2d2d2d] to-[#3d3d3d] p-6 sm:p-8 md:p-12 rounded-lg border border-[#FF9500] text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Navigate from Backtest to Live Trading?</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Stop being fooled by randomness. Start with a 14-day free trial. No credit card required.
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
        videoId="O4yB5NJUyuY"
      />
    </div>
  );
}
