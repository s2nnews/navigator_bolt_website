import { Button } from '../components/Button';
import { Award, TrendingUp, Users, Shield, Target, Brain } from 'lucide-react';

export function About() {
  return (
    <div className="w-full">
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Why Navigator Exists</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#FF9500] font-semibold mb-3 md:mb-4">
            Don't be fooled by randomness.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
            Built on 25 years of hard-won experience and deep expertise in behavioral finance. Navigator exists to solve the problem that destroys most traders: the inability to distinguish real edge from cognitive bias and narrative self-deception.
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
                    25 years managing real capital. PhD in Behavioral Finance. Thousands of traders mentored. Navigator is built by someone who understands how bias and poor organization compound into catastrophic failure.
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    Michael watched countless smart, disciplined traders fall into the same trap: they couldn't distinguish real alpha from narrative self-deception. Traditional tools amplified the problem by hiding overfitting and making lucky backtests look like skill. Navigator exists to confront this problem directly.
                  </p>
                </div>
                <div className="bg-[#2d2d2d] border border-[#FF9500] p-4 md:p-6 rounded-lg">
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 italic mb-3 md:mb-4">
                    "Over decades, I accumulated scattered Python scripts, disconnected notebooks, forgotten assumptions. This fragmentation created blind spots that compounded over time. Navigator solves the problem I wish I'd had 25 years ago."
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Built on Two Foundational Beliefs</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#FF9500]">Cognitive Failure</h3>
              <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                Most trading failure comes from cognitive bias, overfitting, and narrative self-deception. Markets are noisy and regime-dependent. More choice increases bias, not edge.
              </p>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Confirmation bias and wishful thinking</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Test enough parameters, any backtest looks good</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Most backtests fail out of sample</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Narrative self-deception compounds over time</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#FF9500]">Organizational Failure</h3>
              <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                These failures are amplified by poor organization, fragmented tooling, and lack of feedback loops. Scattered workflows hide mistakes and reinforce false confidence.
              </p>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Disconnected scripts and notebooks</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Forgotten assumptions and orphaned strategies</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>No accountability, no rear-view mirrors</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Blind spots compound unnoticed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#2d2d2d] to-[#3d3d3d] p-6 md:p-8 rounded-lg border border-[#FF9500] text-center">
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 font-semibold">
              Navigator exists to act as a bias-aware, organization-first decision framework. Not a strategy marketplace. Not a signal service. Not a leaderboard-driven performance tool.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">The Goal</h2>
          <div className="bg-[#2d2d2d] border border-[#FF9500] p-6 md:p-12 rounded-lg text-center">
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-3 md:mb-4">
              Navigator does not help you find the best strategy. It helps you avoid the bad ones.
            </p>
            <p className="text-sm sm:text-base md:text-xl text-gray-400">
              The goal is not to maximize returns. It is to maximize the probability of long-term survival and slightly above-average outcomes. Robustness, monitoring, and survival matter more than peak performance.
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
                <h3 className="text-lg md:text-xl font-semibold">Surveillance, Not Convenience</h3>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Organized workflows exist to keep decisions observable, auditable, and connected. The purpose is self-awareness, not ease.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Shield className="text-[#FF9500]" size={24} />
                <h3 className="text-lg md:text-xl font-semibold">Robustness Over Performance</h3>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Robustness, monitoring, and survival matter more than peak returns. Avoid fragile strategies that collapse under real conditions.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Brain className="text-[#FF9500]" size={24} />
                <h3 className="text-lg md:text-xl font-semibold">Bias Protection First</h3>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Navigator is a filter against self-deception. It reveals uncomfortable truths when confidence is not justified.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">The Problem Navigator Solves</h2>
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-gray-400">
            <p className="text-sm md:text-base lg:text-lg">
              Over decades, traders accumulate scattered Python scripts, disconnected Jupyter notebooks, abandoned datasets, forgotten assumptions, and orphaned strategies with no accountability. This fragmentation creates blind spots where strategies drift, data goes stale, mistakes are forgotten, and biases compound unnoticed.
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              Traditional tools amplify the problem. They show you what you want to see: beautiful equity curves, impressive Sharpe ratios, stellar backtests. But these metrics hide overfitting and regime sensitivity. Without scientific bias correction and organizational discipline, confidence becomes dangerous.
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              Navigator provides rear-view mirrors so you can see when assumptions break, when behavior drifts, when strategies deviate from intent, and when confidence is no longer justified. It reflects how elite institutions operate: workflows are structured, research is tracked, decisions are monitored, and feedback loops are continuous.
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              Navigator brings this institutional-grade framework to individual traders and small teams. Not to guarantee success, but to maximize the probability of survival. Not to find the best strategy, but to avoid the bad ones.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#FF9500] font-semibold text-center">
              A filter against self-deception.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">For Those Who Value Survival</h2>
            <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
              Navigator is not for everyone. It is for serious traders who recognize that markets are deceptive and value organizational discipline over convenience.
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
