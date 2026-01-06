import { Button } from '../components/Button';
import { TrendingUp, Users, DollarSign, CheckCircle, FileText, Target, Download } from 'lucide-react';

export function Affiliate() {
  return (
    <div className="w-full">
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Earn 20%–50% Recurring Commissions Promoting S2N Navigator
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Built by Michael Berman, Ph.D., with 25+ years of real trading experience and multiple fintech exits — S2N Navigator is the world's first commercial backtesting & analytics engine with built-in bias detection and personal leaderboards.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-[#FF9500] font-semibold mt-4">
            Traders want it. Educators convert with it. Affiliates love it.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Why Promote S2N Navigator?</h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-[#2d2d2d] border border-[#3d3d3d] p-6 md:p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-[#FF9500]" size={28} />
                <h3 className="text-xl md:text-2xl font-semibold">Premium Product</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Hedge-fund-grade analytics, built for everyday traders</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>First platform with integrated bias detection</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>AI-assisted insights and benchmark comparisons</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2d2d2d] border border-[#3d3d3d] p-6 md:p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-[#FF9500]" size={28} />
                <h3 className="text-xl md:text-2xl font-semibold">High Converting</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Massive educator + influencer demand</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>High conversion, low churn, real value</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#FF9500]">→</span>
                  <span>Serious product, serious credibility</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#2d2d2d] to-[#3d3d3d] p-6 md:p-8 rounded-lg border border-[#FF9500] text-center">
            <p className="text-lg md:text-xl text-gray-300 font-semibold">
              Affiliates earn recurring revenue — month after month — for as long as their referrals stay subscribed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Affiliate Commission Tiers</h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 md:p-8 rounded-lg hover:border-[#FF9500] transition-all">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Tier 1 — Starter Partner</h3>
                <div className="text-3xl md:text-4xl font-bold text-[#FF9500] my-4">20%</div>
                <p className="text-sm text-gray-400">recurring commission</p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-1">Requirement:</p>
                  <p className="text-gray-300">2-4 paid signups</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-1">Perfect for:</p>
                  <p className="text-gray-300">Individual traders & small creators who want to earn passively, or simply get a discounted price for their purchase.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 md:p-8 rounded-lg hover:border-[#FF9500] transition-all">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Tier 2 — Growth Partner</h3>
                <div className="text-3xl md:text-4xl font-bold text-[#FF9500] my-4">35%</div>
                <p className="text-sm text-gray-400">recurring commission</p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-1">Requirement:</p>
                  <p className="text-gray-300">5-9 paid signups (rolling 180 days)</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-1">Perfect for:</p>
                  <p className="text-gray-300">Trading educators, small Discord communities, newsletters, micro-influencers.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] border-2 border-[#FF9500] p-6 md:p-8 rounded-lg shadow-xl shadow-orange-500/20 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF9500] text-black px-4 py-1 rounded-full text-sm font-bold">
                HIGHEST TIER
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Tier 3 — VIP Partner</h3>
                <div className="text-4xl md:text-5xl font-bold text-[#FF9500] my-4">50%</div>
                <p className="text-sm text-gray-400">recurring commission</p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-1">Requirement:</p>
                  <p className="text-gray-300">10 paid signups (rolling 180 days)</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-300 mb-2">This is the highest-earning tier.</p>
                  <p className="text-gray-300 mb-3">Designed for creators, educators, trading influencers, and syndicates who want to work as a team.</p>
                  <p className="text-[#FF9500] font-semibold">Many groups form together to hit the 10-signup threshold and unlock the 50% lifetime commission share.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#2d2d2d] to-[#3d3d3d] p-8 md:p-12 rounded-lg border-2 border-[#FF9500] mb-12">
            <div className="text-center mb-8">
              <Users className="text-[#FF9500] mx-auto mb-4" size={48} />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Syndicate Option — Earn 50% as a Group</h2>
              <p className="text-xl text-[#FF9500] font-semibold mb-4">Yes — your community can apply as a team.</p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                If 10 people sign up through your link, the entire group qualifies for the VIP 50% commission.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
                <CheckCircle className="text-[#FF9500] mx-auto mb-2" size={24} />
                <p className="text-gray-300">Trading Discords</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
                <CheckCircle className="text-[#FF9500] mx-auto mb-2" size={24} />
                <p className="text-gray-300">Telegram groups</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
                <CheckCircle className="text-[#FF9500] mx-auto mb-2" size={24} />
                <p className="text-gray-300">Educator communities</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
                <CheckCircle className="text-[#FF9500] mx-auto mb-2" size={24} />
                <p className="text-gray-300">YouTube audiences</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
                <CheckCircle className="text-[#FF9500] mx-auto mb-2" size={24} />
                <p className="text-gray-300">Group subscriptions</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
                <CheckCircle className="text-[#FF9500] mx-auto mb-2" size={24} />
                <p className="text-gray-300">Live-trading classrooms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">How It Works (Simple)</h2>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-[#FF9500] text-black font-bold rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-3">Apply for the Program</h3>
              <p className="text-sm text-gray-400">Submit a quick application and get approved.</p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-[#FF9500] text-black font-bold rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-3">Receive Your Affiliate Link</h3>
              <p className="text-sm text-gray-400">You'll get a dashboard, tracking, and payout system.</p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-[#FF9500] text-black font-bold rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-3">Promote S2N Navigator</h3>
              <p className="text-sm text-gray-400">Post videos, threads, emails, Discord announcements — whatever fits your style.</p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-[#FF9500] text-black font-bold rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-3">Earn Recurring Commissions</h3>
              <p className="text-sm text-gray-400">You get paid automatically every month your referrals stay active.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Ready to Begin?</h2>

          <div className="bg-gradient-to-r from-[#2d2d2d] to-[#3d3d3d] p-8 md:p-12 rounded-lg border border-[#FF9500] text-center">
            <DollarSign className="text-[#FF9500] mx-auto mb-6" size={64} />
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the S2N Navigator Affiliate Program and start earning recurring commissions today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="text-base md:text-lg px-8 py-4">
                Apply to Become an Affiliate
              </Button>
              <Button variant="secondary" className="text-base md:text-lg px-8 py-4 flex items-center gap-2 justify-center">
                <Download size={20} />
                Download Affiliate Overview PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 md:p-8 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-[#FF9500]">Do I need to be an influencer?</h3>
              <p className="text-gray-300">No — anyone can join. You can promote to your friends, community, or professional network.</p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 md:p-8 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-[#FF9500]">How long do referral cookies last?</h3>
              <p className="text-gray-300">Lifetime. Once someone clicks your affiliate link, you receive credit for their subscription forever — even if they sign up months later.</p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 md:p-8 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-[#FF9500]">When do commissions pay out?</h3>
              <p className="text-gray-300">Payouts occur monthly via the affiliate platform.</p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 md:p-8 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-[#FF9500]">Is there a minimum payout?</h3>
              <p className="text-gray-300">Depending on the platform, usually $25–$50 but won't apply as the commissions are far greater.</p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#3d3d3d] p-6 md:p-8 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-[#FF9500]">Can I build a syndicate/group?</h3>
              <p className="text-gray-300">Absolutely. Anyone can team up to reach the 10-signup requirement for the 50% tier.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
