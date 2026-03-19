import { Button } from '../components/Button';
import { Check, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackCheckoutInitiated } from '../utils/analytics';
import { trackFunnelEvent } from '../utils/funnel';

export function Pricing() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    trackFunnelEvent('pricing_view', 'pricing');
  }, []);

  const handleCheckout = async (priceId: string, planName?: string, planPrice?: string) => {
    trackFunnelEvent('upgrade_cta_click', 'pricing', { plan: planName, price: planPrice });
    if (planName && planPrice) {
      trackCheckoutInitiated(planName, planPrice);
    }

    try {
      const promotekit_referral = (window as any).promotekit_referral || null;

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          priceId,
          origin: window.location.origin,
          referral: promotekit_referral,
        }),
      });

      const { url, error: serverError } = await response.json();

      if (serverError) {
        console.error('Server error:', serverError);
        alert(`Failed to create checkout session: ${serverError}`);
        return;
      }

      if (!url) {
        console.error('No checkout URL returned');
        alert('Failed to get checkout URL. Please try again.');
        return;
      }

      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout. Please try again.');
    }
  };

  const handleFreeSignup = () => {
    trackFunnelEvent('free_cta_click', 'pricing');
    window.location.hash = 'free';
  };

  const tiers = [
    {
      name: 'Free',
      monthlyPrice: '$0',
      yearlyPrice: '$0',
      period: '',
      description: 'Forever free access',
      badge: null,
      features: [
        { name: 'No credit card required', included: true },
        { name: '50+ GB FREE DATA', included: true },
        { name: 'Access to basic strategies', included: true },
        { name: 'Limited backtesting', included: true },
        { name: 'Strategy Builder', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Limited live trading virtual accounts', included: true },
        { name: 'Community support', included: true },
        { name: 'Use your own AI keys', included: true },
      ],
      cta: 'Start Free',
      ctaVariant: 'secondary' as const,
    },
    {
      name: 'Early Adopter Special',
      monthlyPrice: '$35',
      yearlyPrice: '$350',
      monthlyPriceId: 'price_1T9NnZRgf0gOK6k5SiT2DasX',
      yearlyPriceId: 'price_1SqoFERgf0gOK6k5rVYNJ0ez',
      description: 'Price locked forever',
      badge: 'Ends June 30, 2026',
      features: [
        { name: 'Everything in Free', included: true },
        { name: '100+ robust trading strategies', included: true },
        { name: 'Unlimited backtesting', included: true },
        { name: 'Strategy Builder', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Unlimited live trading virtual accounts', included: true },
        { name: 'Use your own AI keys (unlimited)', included: true },
        { name: 'Priority support', included: true },
        { name: 'All future features included', included: true },
        { name: 'Price locked in forever', included: true },
      ],
      cta: 'Get Started',
      ctaVariant: 'primary' as const,
    },
    {
      name: 'Pro',
      monthlyPrice: '$150',
      yearlyPrice: '$1,500',
      monthlyPriceId: 'price_1T9Np3Rgf0gOK6k5QvQNYqzr',
      yearlyPriceId: 'price_1SqoCfRgf0gOK6k56ubtiqf5',
      description: 'Standard pricing',
      badge: null,
      features: [
        { name: 'Everything in Free', included: true },
        { name: '100+ robust trading strategies', included: true },
        { name: 'Unlimited backtesting', included: true },
        { name: 'Strategy Builder', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Unlimited live trading virtual accounts', included: true },
        { name: 'Use your own AI keys (unlimited)', included: true },
        { name: 'Priority support', included: true },
        { name: 'All future features included', included: true },
      ],
      cta: 'Get Started',
      ctaVariant: 'secondary' as const,
    },
  ];

  const faqs = [
    {
      question: "What's included in the free plan?",
      answer: 'The free plan gives you forever access to basic strategies, limited backtesting, Strategy Builder, advanced analytics, 50+ GB of free data, and limited live trading virtual accounts. No credit card required, no time limit.',
    },
    {
      question: 'What are the three pricing tiers?',
      answer: 'Navigator offers three tiers: Free (forever free with basic features), Early Adopter Special ($35/month or $350/year with price locked forever - ends June 30, 2026), and Pro ($150/month or $1,500/year). Both paid tiers include unlimited features, but only Early Adopters get their price locked in forever.',
    },
    {
      question: 'Can I pay monthly or yearly?',
      answer: 'Yes, both paid tiers offer monthly and yearly billing. Annual plans save you 2 months (10 months for the price of 12). Early Adopter pricing ($35/month or $350/year) locks in forever for both billing cycles.',
    },
    {
      question: 'Do I need a credit card for the free plan?',
      answer: 'No, absolutely not. You can start using the free plan without providing any payment information. Upgrade to paid tiers anytime.',
    },
    {
      question: 'What happens when I renew?',
      answer: 'Monthly subscriptions renew automatically each month. Annual subscriptions renew yearly. Early adopters who purchase before June 30, 2026 keep their locked-in pricing ($35/month or $350/year) forever. Standard Pro pricing is $150/month or $1,500/year.',
    },
    {
      question: 'Do I need my own AI API keys?',
      answer: 'Yes, Navigator allows you to use your own AI API keys (OpenAI, Anthropic, etc.). This gives you unlimited AI queries without restrictions and keeps your costs transparent.',
    },
    {
      question: 'Can I export my strategies?',
      answer: 'Yes, you can export strategies and backtest results in multiple formats for use elsewhere or archival.',
    },
    {
      question: 'What are live trading virtual accounts?',
      answer: 'Virtual accounts let you test your strategies in live market conditions without risking real capital. Track performance in real-time and gain confidence before going live.',
    },
  ];

  return (
    <div className="w-full">
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6">Institutional-Grade Framework</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#FF9500] font-semibold text-center mb-3 md:mb-4">
            Don't be fooled by randomness.
          </p>
          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-6 max-w-3xl mx-auto">
            Navigator is opinionated and curated. The free plan is intentionally limited to prevent misuse and false confidence. These constraints exist for your protection.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8 md:mb-12">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#FF9500] text-black'
                  : 'bg-[#2d2d2d] text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-[#FF9500] text-black'
                  : 'bg-[#2d2d2d] text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded">Save 2 months</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8 max-w-5xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-lg border transition-all ${
                  tier.badge
                    ? 'border-[#FF9500] bg-[#2d2d2d] shadow-xl shadow-orange-500/20 relative'
                    : 'border-[#3d3d3d] bg-[#1a1a1a] hover:border-[#FF9500]'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF9500] text-black px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    {tier.badge}
                  </div>
                )}

                <div className="p-6 md:p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">{tier.description}</p>

                  <div className="mb-2">
                    <span className="text-3xl md:text-4xl font-bold">
                      {billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice}
                    </span>
                    <span className="text-gray-400">
                      {tier.name !== 'Free' && (billingCycle === 'monthly' ? '/month' : '/year')}
                    </span>
                  </div>
                  {tier.name !== 'Free' && billingCycle === 'yearly' && (
                    <p className="text-xs md:text-sm text-green-500 mb-3 md:mb-4">Save 2 months with annual billing</p>
                  )}

                  <Button
                    variant={tier.ctaVariant}
                    className="w-full mb-6 md:mb-8 py-3"
                    onClick={() => {
                      if (tier.name === 'Free') {
                        handleFreeSignup();
                      } else {
                        const priceId = billingCycle === 'monthly' ? tier.monthlyPriceId : tier.yearlyPriceId;
                        const displayPrice = billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice;
                        handleCheckout(priceId, tier.name, displayPrice);
                      }
                    }}
                  >
                    {tier.cta}
                  </Button>

                  <div className="space-y-3 md:space-y-4 text-left">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex gap-2 md:gap-3">
                        {feature.included ? (
                          <Check size={18} className="md:hidden text-[#00C853] flex-shrink-0" />
                        ) : (
                          <X size={18} className="md:hidden text-gray-600 flex-shrink-0" />
                        )}
                        {feature.included ? (
                          <Check size={20} className="hidden md:block text-[#00C853] flex-shrink-0" />
                        ) : (
                          <X size={20} className="hidden md:block text-gray-600 flex-shrink-0" />
                        )}
                        <span className={`text-sm md:text-base ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#2d2d2d] border border-[#3d3d3d] p-6 md:p-8 rounded-lg">
            <p className="text-center text-gray-300 text-sm md:text-base">
              <span className="text-[#FF9500] font-semibold">All plans include:</span> Scientific bias detection, Organizational framework under one roof, Rear-view mirrors for continuous monitoring, Institutional-grade structure, Curated strategies designed to avoid common failure modes
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-[#2d2d2d] transition-colors"
                >
                  <span className="font-semibold text-left text-sm md:text-base">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`md:hidden text-[#FF9500] flex-shrink-0 transition-transform ml-2 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                  <ChevronDown
                    size={20}
                    className={`hidden md:block text-[#FF9500] flex-shrink-0 transition-transform ml-2 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-4 md:px-6 py-3 md:py-4 bg-[#2d2d2d] border-t border-[#3d3d3d]">
                    <p className="text-gray-400 text-sm md:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Already a customer?{' '}
              <a
                href={import.meta.env.VITE_STRIPE_PORTAL_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF9500] hover:underline font-semibold"
              >
                Manage your subscription
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#2d2d2d] to-[#3d3d3d] p-6 sm:p-8 md:p-12 rounded-lg border border-[#FF9500] text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">A Framework for Survival</h2>
            <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto">
              Navigator does not maximize returns. It maximizes the probability of long-term survival and slightly above-average outcomes. Start free, then scale when needed.
            </p>
            <Button
              variant="primary"
              className="px-6 md:px-8 py-3 md:py-4"
              onClick={handleFreeSignup}
            >
              Start Free
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
