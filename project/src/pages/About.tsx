import { Button } from '../components/Button';
import { Award, TrendingUp, Users, Shield, Target, Brain } from 'lucide-react';

export function About() {
  return (
    <div className="w-full">
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Built by Experience, Powered by AI</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#FF9500] font-semibold mb-3 md:mb-4">
            Don't be fooled by randomness.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            The fusion of 25 years of real-world trading wisdom with the full strength of modern AI.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">Michael Berman, PhD</h2>
            <p className="text-base sm:text-lg md:text-xl text-[#FF9500] font-semibold mb-6 md:mb-8 text-center md:text-left">
              Founder & Chief Architect
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-6 md:mb-8">
              <img
                src="/profile_pics/Mike Portrait thinner.png"
                alt="Michael Berman, PhD"
                className="w-48 md:w-64 h-auto rounded-lg shadow-xl border-2 border-[#FF9500] mx-auto md:mx-0 md:flex-shrink-0"
              />
              <div className="flex-1 space-y-4 md:space-y-6">
                <div>
                  <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                    Navigator is built by a 25-year trading veteran with real capital management experience & deep psychology expertise.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    Michael has spent decades solving the problem that costs traders the most: distinguishing real signals from random luck. His expertise spans quantitative design, risk management, global macro regime navigation, and the psychological patterns that separate winning traders from the rest.
                  </p>
                </div>
                <div className="bg-[#2d2d2d] border border-[#FF9500] p-4 md:p-6 rounded-lg">
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 italic mb-3 md:mb-4">
                    "I built Navigator to solve the problem that cost me years of frustration and lots of money: distinguishing real strategies from lucky ones. Having a trusted platform to tell you uncomfortable truths is gold."
                  </p>
                  <p className="text-sm md:text-base text-gray-400">— Michael Berman, PhD</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-4 md:space-y-6">
              <div className="bg-[#2d2d2d] p-4 md:p-6 rounded-lg border border-[#3d3d3d]">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <Award className="text-[#FF9500]" size={24} />
                  <h3 className="text-base md:text-lg font-semibold">25 Years Trading Experience</h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm">Real capital management across multiple market regimes and asset classes</p>
              </div>

              <div className="bg-[#2d2d2d] p-4 md:p-6 rounded-lg border border-[#3d3d3d]">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <TrendingUp className="text-[#FF9500]" size={24} />
                  <h3 className="text-base md:text-lg font-semibold">Multiple FinTech Exits</h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm">Successful trading analytics ventures serving professional traders</p>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-[#2d2d2d] p-4 md:p-6 rounded-lg border border-[#3d3d3d]">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <Users className="text-[#FF9500]" size={24} />
                  <h3 className="text-base md:text-lg font-semibold">1000's Mentored & 100's seeded</h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm">Deep understanding of trading psychology and common trading pitfalls</p>
              </div>

              <div className="bg-[#2d2d2d] p-4 md:p-6 rounded-lg border border-[#3d3d3d]">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <Brain className="text-[#FF9500]" size={24} />
                  <h3 className="text-base md:text-lg font-semibold">PhD-Level Expertise</h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm">Quantitative design, risk & portfolio management, and regime navigation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">The Dual Foundation</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#FF9500]">Real-World Wisdom</h3>
              <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                25 years managing real capital. Thousands of traders mentored, hundreds seeded. Deep expertise in trading analytics, psychology and the behavioural patterns that destroy accounts.
              </p>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Real capital management experience</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Trading psychology expertise</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Multi-regime navigation</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Risk & Portfolio management discipline</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#FF9500]">Modern AI Power</h3>
              <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                Cutting-edge AI integration that understands quant frameworks. Scientific bias detection based on academic research. Institutional-grade infrastructure.
              </p>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>AI strategy generation</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Scientific bias detection</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Institutional data infrastructure</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Blockchain trade verification</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#2d2d2d] to-[#3d3d3d] p-6 md:p-8 rounded-lg border border-[#FF9500] text-center">
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 font-semibold">
              This dual foundation is a core differentiator. Navigator isn't just another backtesting tool—it's the culmination of decades of hard-won experience combined with breakthrough technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Mission</h2>
          <div className="bg-[#2d2d2d] border border-[#FF9500] p-6 md:p-12 rounded-lg text-center">
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-3 md:mb-4">
              Empower traders to navigate from backtesting to live trading with clarity, robustness, discipline. To provide all the essential requirements for successful trading in one wholistic framework.
            </p>
            <p className="text-sm sm:text-base md:text-xl text-gray-400">
              Stop being fooled by randomness. See the truth behind your strategies, not the illusion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Principles</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Target className="text-[#FF9500]" size={24} />
                <h3 className="text-lg md:text-xl font-semibold">Clarity Over Confusion</h3>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Cut through the noise. See real performance, not inflated metrics. Distinguish luck from randomness.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Shield className="text-[#FF9500]" size={24} />
                <h3 className="text-lg md:text-xl font-semibold">Signal2Noise (S2N)</h3>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Build strategies that survive multiple market regimes. Avoid the trap of overfitted lucky backtests.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Brain className="text-[#FF9500]" size={24} />
                <h3 className="text-lg md:text-xl font-semibold">Discipline Over Emotion</h3>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Use scientific methods to evaluate strategies. Remove emotional bias from trading decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Navigator Exists</h2>
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-gray-400">
            <p className="text-sm md:text-base lg:text-lg">
              Most traders lose money not because their ideas are bad, but because they can't distinguish real alpha from random luck. Traditional backtesting tools show you what you want to see—stellar returns, impressive Sharpe ratios, beautiful equity curves.
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              But these metrics lie. They hide overfitting, multiple testing bias, and regime sensitivity. When you go live, the strategies collapse.
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              Michael Berman experienced this frustration for years. He watched countless traders—smart, disciplined people—fall into the same trap. He knew there had to be a better way.
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              Navigator is the solution. It combines Michael's 25 years of trading wisdom with cutting-edge AI and scientific bias detection. For the first time, retail traders can access institutional-grade tools that reveal the truth behind their backtests. They can now work in a framework that is designed to take all levels of traders from an ideas all the way to live trading providing, unbiased expert feedback along the way, in a never ending feedback loop.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#FF9500] font-semibold text-center">
              Don't be fooled by randomness. Navigate with clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FF9500] mb-2">25</div>
              <p className="text-xs md:text-sm text-gray-400">Years trading experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FF9500] mb-2">1,000s</div>
              <p className="text-xs md:text-sm text-gray-400">Traders mentored</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FF9500] mb-2">100s</div>
              <p className="text-xs md:text-sm text-gray-400">Seeded</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FF9500] mb-2">1st</div>
              <p className="text-xs md:text-sm text-gray-400">Platform with bias detection</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-[#FF9500] mb-2">Multiple</div>
              <p className="text-xs md:text-sm text-gray-400">Successful FinTech exits</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#2d2d2d] to-[#3d3d3d] p-8 md:p-12 rounded-lg border border-[#FF9500] text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Revolution in Quantitative Trading</h2>
            <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the difference that real expertise and modern AI make. Start your 14-day free trial.
            </p>
            <Button
              variant="primary"
              className="w-full sm:w-auto"
              onClick={() => window.location.hash = 'trial'}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
