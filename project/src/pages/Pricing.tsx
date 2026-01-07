import { Button } from '../components/Button';
import { Check, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { trackCheckoutInitiated } from '../utils/analytics';

export function Pricing() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleCheckout = async (priceId: string, planName?: string, planPrice?: string) => {
    if (planName && planPrice) {
      trackCheckoutInitiated(planName, planPrice);
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          priceId,
          origin: window.location.origin
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

  const tiers = [
    {
      name: 'Free Trial',
      price: '$0',
      period: '',
      description: '14-day trial access',
      badge: 'No Credit Card Required',
      stripePriceId: 'price_1ShJnZDX08AkqjRWmT6NhmgA',
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
      cta: 'Start Free Trial',
      ctaVariant: 'secondary' as const,
    },
    {
      name: 'Pro Launch Special',
      price: '$990',
      period: '/year',
      description: 'Annual license',
      badge: 'Ends Feb 28, 2026',
      stripePriceId: 'price_1Sh0MlDX08AkqjRWlSP6pYsF',
      features: [
        { name: 'Everything in Free Trial', included: true },
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
      ctaVariant: 'primary' as const,
      subtext: '$82.50/month billed annually',
    },
    {
      name: 'Pro',
      price: '$1,500',
      period: '/year',
      description: 'Annual license',
      badge: null,
      stripePriceId: 'price_1Sh0OzDX08AkqjRWC40HylOE',
      features: [
        { name: 'Everything in Free Trial', included: true },
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
      subtext: '$125/month billed annually',
    },
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: 'The 14-day free trial gives you access to basic strategies, limited backtesting, Strategy Builder, advanced analytics, and limited live trading virtual accounts. Experience the platform with no credit card required.',
    },
    {
      question: 'Are these annual licenses?',
      answer: 'Yes, all Pro licenses are annual licenses billed upfront. You get full access to Navigator for 12 months. The launch special at $990/year ends February 28, 2026, after which the standard price is $1,500/year.',
    },
    {
      question: 'Do I need a credit card for the trial?',
      answer: 'No, absolutely not. You can start your 14-day free trial without providing any payment information.',
    },
    {
      question: 'What happens after my annual license expires?',
      answer: 'Your license will need to be renewed annually to maintain access. You\'ll receive reminders before expiration. Licenses renew at the current pricing (standard rate of $1,500/year).',
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6">Professional Tools, Retail Pricing</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#FF9500] font-semibold text-center mb-3 md:mb-4">
            Don't be fooled by randomness.
          </p>
          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-2 max-w-2xl mx-auto">
            Start free, upgrade when ready. Get institutional-grade infrastructure at a retail price.
          </p>
          <p className="text-center text-white font-semibold text-base md:text-lg mb-8 md:mb-12">
            All Pro licenses are annual licenses, billed upfront
          </p>

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
                    <span className="text-3xl md:text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  {'subtext' in tier && tier.subtext && (
                    <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">{tier.subtext}</p>
                  )}

                  <Button
                    variant={tier.ctaVariant}
                    className="w-full mb-6 md:mb-8 py-3"
                    onClick={() => {
                      if (tier.name === 'Free Trial') {
                        window.location.hash = 'trial';
                      } else {
                        handleCheckout(tier.stripePriceId, tier.name, tier.price);
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
              <span className="text-[#FF9500] font-semibold">All plans include:</span> Built-in bias detection, Quant scoring system inspired by the best minds in finance, Leaderboards that never forget, Real-time data streaming, 24/7 platform access
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
                href="https://billing.stripe.com/p/login/test_YOUR_PORTAL_ID"
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Navigate from Backtest to Live Trading?</h2>
            <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto">
              Stop being fooled by randomness. Start with our free trial and experience all features with zero risk and no credit card required.
            </p>
            <Button
              variant="primary"
              className="px-6 md:px-8 py-3 md:py-4"
              onClick={() => window.location.hash = 'trial'}
            >
              Start Your Free Trial Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
