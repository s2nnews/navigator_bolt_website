import { Button } from '../components/Button';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { trackCheckoutInitiated } from '../utils/analytics';

type BillingCycle = 'monthly' | 'annual';

const PREMIUM_MONTHLY_PRICE = 150;
const PREMIUM_ANNUAL_PRICE = PREMIUM_MONTHLY_PRICE * 10;
const PREMIUM_MONTHLY_STRIPE_PRICE_ID = import.meta.env.VITE_STRIPE_PRICE_PREMIUM_MONTHLY;
const PREMIUM_ANNUAL_STRIPE_PRICE_ID =
  import.meta.env.VITE_STRIPE_PRICE_PREMIUM_ANNUAL || 'price_1SqoCfRgf0gOK6k56ubtiqf5';

export function Pricing() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const handleCheckout = async (priceId: string, planName?: string, planPrice?: string) => {
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
          referral: promotekit_referral
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

  const premiumPrice = billingCycle === 'monthly' ? PREMIUM_MONTHLY_PRICE : PREMIUM_ANNUAL_PRICE;
  const premiumPeriod = billingCycle === 'monthly' ? '/month' : '/year';
  const premiumStripePriceId = billingCycle === 'monthly'
    ? PREMIUM_MONTHLY_STRIPE_PRICE_ID
    : PREMIUM_ANNUAL_STRIPE_PRICE_ID;

  const tiers = [
    {
      name: 'Navigator Free',
      price: '$0',
      period: '/month',
      description: 'Powerful core platform with practical limits',
      badge: 'No credit card required',
      features: [
        { name: '50+ GB free market data', included: true },
        { name: 'Curated core strategy library', included: true },
        { name: 'Limited backtesting allocation', included: true },
        { name: 'Strategy Builder with guardrails', included: true },
        { name: 'Advanced analytics dashboard', included: true },
        { name: 'Limited live paper trading accounts', included: true },
        { name: 'Community support', included: true },
      ],
      cta: 'Create Free Account',
      ctaVariant: 'secondary' as const,
      action: 'free' as const,
    },
    {
      name: 'Navigator Premium',
      price: `$${premiumPrice}`,
      period: premiumPeriod,
      description: billingCycle === 'monthly'
        ? 'Full platform access billed monthly'
        : 'Full platform access billed annually',
      badge: 'Most Popular',
      stripePriceId: premiumStripePriceId,
      features: [
        { name: 'Everything in Navigator Free', included: true },
        { name: '100+ robust trading strategies', included: true },
        { name: 'Unlimited backtesting', included: true },
        { name: 'Unlimited live paper trading accounts', included: true },
        { name: 'AI key usage with no platform caps', included: true },
        { name: 'Priority support', included: true },
        { name: 'All future premium features included', included: true },
      ],
      cta: billingCycle === 'monthly' ? 'Start Premium Monthly' : 'Start Premium Annual',
      ctaVariant: 'primary' as const,
      subtext: billingCycle === 'monthly'
        ? `Annual is $${PREMIUM_ANNUAL_PRICE}/year (2 months free)`
        : `Annual = 10x monthly ($${PREMIUM_MONTHLY_PRICE}/month equivalent)`,
      action: 'checkout' as const,
    },
  ];

  const faqs = [
    {
      question: "What's included in the free plan?",
      answer: 'Navigator Free includes a serious working environment: 50+ GB market data, curated strategies, strategy builder, analytics, and limited backtesting/live paper accounts. You can run meaningful research without paying.',
    },
    {
      question: 'How does monthly vs annual billing work?',
      answer: `Premium can be billed monthly or annually. Monthly is $${PREMIUM_MONTHLY_PRICE}/month. Annual is $${PREMIUM_ANNUAL_PRICE}/year, which is exactly 10x the monthly rate.`,
    },
    {
      question: 'Do I need a credit card for the free plan?',
      answer: 'No. You can create your free account with no payment details.',
    },
    {
      question: 'Can I upgrade from Free to Premium later?',
      answer: 'Yes. You can start free, validate fit, then upgrade to Premium whenever you need unlimited capacity.',
    },
    {
      question: 'Do I need my own AI API keys?',
      answer: 'Yes. Navigator supports your own AI keys (OpenAI, Anthropic, and others) so usage and spend remain transparent and under your control.',
    },
    {
      question: 'Can I cancel Premium?',
      answer: 'Yes. You can manage or cancel your subscription from the customer portal at any time.',
    },
  ];

  return (
    <div className="w-full">
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6">
            Start Free. Upgrade When You Need More.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#FF9500] font-semibold text-center mb-3 md:mb-4">
            A powerful free plan, then Premium when your workflow scales.
          </p>
          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-3xl mx-auto">
            Navigator gives you a serious free starting point, not a throwaway demo. Premium is available monthly or annually, and annual pricing is set to exactly 10x monthly.
          </p>

          <div className="flex justify-center mb-8 md:mb-12">
            <div className="inline-flex bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 md:px-6 py-2 rounded text-sm md:text-base font-semibold transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-[#FF9500] text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 md:px-6 py-2 rounded text-sm md:text-base font-semibold transition-colors ${
                  billingCycle === 'annual'
                    ? 'bg-[#FF9500] text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Annual (2 months free)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 max-w-5xl mx-auto">
            {tiers.map((tier, index) => {
              const isPremium = tier.action === 'checkout';
              const isCheckoutDisabled = isPremium && !tier.stripePriceId;

              return (
                <div
                  key={index}
                  className={`rounded-lg border transition-all ${
                    isPremium
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
                      <span className="text-3xl md:text-4xl font-bold">{tier.price}</span>
                      <span className="text-gray-400">{tier.period}</span>
                    </div>
                    {'subtext' in tier && tier.subtext && (
                      <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">{tier.subtext}</p>
                    )}

                    <Button
                      variant={tier.ctaVariant}
                      className="w-full mb-3 md:mb-4 py-3"
                      disabled={isCheckoutDisabled}
                      onClick={() => {
                        if (tier.action === 'free') {
                          window.location.hash = 'free';
                          return;
                        }
                        if (tier.stripePriceId) {
                          handleCheckout(tier.stripePriceId, tier.name, tier.price);
                        }
                      }}
                    >
                      {tier.cta}
                    </Button>

                    {isCheckoutDisabled && (
                      <p className="text-xs text-amber-400 mb-3 md:mb-4">
                        Monthly checkout is being finalized. Select annual to subscribe now.
                      </p>
                    )}

                    <div className="space-y-3 md:space-y-4 text-left">
                      {tier.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex gap-2 md:gap-3">
                          <Check size={18} className="md:hidden text-[#00C853] flex-shrink-0" />
                          <Check size={20} className="hidden md:block text-[#00C853] flex-shrink-0" />
                          <span className="text-sm md:text-base text-gray-300">
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-[#2d2d2d] border border-[#3d3d3d] p-6 md:p-8 rounded-lg">
            <p className="text-center text-gray-300 text-sm md:text-base">
              <span className="text-[#FF9500] font-semibold">All plans include:</span> scientific bias detection, an end-to-end organizational framework, continuous monitoring, and curated strategy design guardrails.
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
              Navigator does not maximize returns. It maximizes the probability of long-term survival and slightly above-average outcomes. Start with the free plan, then scale when ready.
            </p>
            <Button
              variant="primary"
              className="px-6 md:px-8 py-3 md:py-4"
              onClick={() => window.location.hash = 'free'}
            >
              Create Free Account
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
