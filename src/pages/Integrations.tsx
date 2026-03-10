import { ExternalLink, Database, TrendingUp } from 'lucide-react';
import { Button } from '../components/Button';

export function Integrations() {
  const integrations = [
    {
      name: 'Norgate Data',
      logo: '/logos/norgate-data-logo.svg',
      category: 'Data Provider',
      description: 'Premium quality, survivorship-bias-free stock market data for US, Australian, Canadian, and international markets.',
      features: [
        'Survivorship-bias-free data',
        'Continuous futures contracts',
        'Comprehensive corporate actions',
        'Daily updates'
      ],
      deal: 'Special Navigator users deal coming soon',
      url: 'https://norgatedata.com',
      logoClass: 'filter brightness-0 invert opacity-90'
    },
    {
      name: 'TradeStation',
      logo: '/logos/tradestation.svg',
      category: 'Broker',
      description: 'Award-winning platform for active traders with powerful analysis tools and competitive pricing.',
      features: [
        'Advanced trading tools',
        'Low commissions',
        'Strategy automation',
        'Educational resources'
      ],
      deal: 'Partner integration available',
      url: 'https://www.tradestation.com',
      logoClass: 'filter brightness-0 invert opacity-90'
    },
    {
      name: 'Alpaca',
      logo: '/logos/alpaca.png',
      category: 'Broker',
      description: 'Commission-free trading API for stocks and crypto. Perfect for algorithmic trading and automation.',
      features: [
        'Commission-free trading',
        'Paper trading sandbox',
        'Real-time market data',
        'Easy API integration'
      ],
      deal: 'Direct integration with Navigator platform',
      url: 'https://alpaca.markets',
      logoClass: ''
    },
    {
      name: 'MetaTrader 5',
      logo: '/logos/metatrader-5-logo.png',
      category: 'Trading Platform',
      description: 'Multi-asset platform for trading Forex, stocks, and futures with advanced charting and analysis tools.',
      features: [
        'Multi-asset trading',
        'Advanced charting',
        'Algorithmic trading',
        'Copy trading'
      ],
      deal: 'Seamless strategy export to MT5',
      url: 'https://www.metatrader5.com',
      logoClass: '',
      useWhiteBackground: true
    },
    {
      name: 'Financial Data',
      logo: '/logos/financialdata.png',
      category: 'Data Provider',
      description: 'Institutional-grade financial data covering global equities, futures, forex, and economic indicators.',
      features: [
        'Global market coverage',
        'Real-time and historical data',
        'Economic indicators',
        'Alternative data sets'
      ],
      deal: 'Exclusive discount for Navigator members',
      url: '#',
      logoClass: ''
    },
    {
      name: 'Binance',
      logo: '/logos/binance.png',
      category: 'Crypto Exchange',
      description: 'The world\'s largest cryptocurrency exchange by trading volume, supporting spot and futures trading.',
      features: [
        'Spot & futures trading',
        'Deep liquidity',
        'Advanced order types',
        'Real-time market data'
      ],
      deal: 'Direct integration via CCXT wrapper',
      url: 'https://www.binance.com',
      logoClass: ''
    },
    {
      name: 'Coinbase',
      logo: '/logos/coinbase.png',
      category: 'Crypto Exchange',
      description: 'Leading US-based cryptocurrency exchange with institutional-grade security and compliance.',
      features: [
        'US regulated exchange',
        'Institutional custody',
        'Fiat on/off ramps',
        'API integration'
      ],
      deal: 'Direct integration via CCXT wrapper',
      url: 'https://www.coinbase.com',
      logoClass: ''
    },
    {
      name: 'Kraken',
      logo: '/logos/kraken.png',
      category: 'Crypto Exchange',
      description: 'Established crypto exchange with robust security, low fees, and advanced trading features.',
      features: [
        'Low trading fees',
        'Margin trading',
        'Staking rewards',
        'Advanced charting'
      ],
      deal: 'Direct integration via CCXT wrapper',
      url: 'https://www.kraken.com',
      logoClass: ''
    },
    {
      name: 'Bybit',
      logo: '/logos/bybit.png',
      category: 'Crypto Exchange',
      description: 'Derivatives exchange specializing in perpetual contracts and options with high leverage.',
      features: [
        'Derivatives trading',
        'High leverage options',
        'Copy trading',
        'Dual price mechanism'
      ],
      deal: 'Direct integration via CCXT wrapper',
      url: 'https://www.bybit.com',
      logoClass: ''
    },
    {
      name: 'Hyperliquid',
      logo: '/logos/hyperliquid.png',
      category: 'Crypto Exchange',
      description: 'High-performance decentralized perpetual exchange with on-chain order book and deep liquidity.',
      features: [
        'Decentralized exchange',
        'On-chain order book',
        'Perpetual contracts',
        'Low latency trading'
      ],
      deal: 'Direct integration via CCXT wrapper',
      url: 'https://hyperliquid.xyz',
      logoClass: ''
    }
  ];

  return (
    <div className="w-full">
      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Data & Broker Integrations
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Connect Navigator with leading data providers and brokers
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Access institutional-grade data and execute trades seamlessly. We partner with industry leaders to bring you exclusive deals and deep integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-[#2d2d2d] border border-[#3d3d3d] hover:border-[#FF9500] transition-colors rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className={`${integration.useWhiteBackground ? 'bg-white' : 'bg-[#1a1a1a]'} border border-[#3d3d3d] rounded-lg p-4 mb-4 inline-flex items-center justify-center h-20 min-w-[200px]`}>
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className={`max-w-full max-h-full object-contain ${integration.logoClass}`}
                      />
                    </div>
                    <div className="inline-block bg-[#FF9500] text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {integration.category}
                    </div>
                  </div>
                  <a
                    href={integration.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF9500] transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3">{integration.name}</h3>
                <p className="text-gray-400 mb-4">{integration.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#FF9500] mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {integration.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-[#FF9500] mt-1">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] border border-[#FF9500] rounded-lg p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <TrendingUp size={18} className="text-[#FF9500] flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-white">Navigator Partner Deal</p>
                  </div>
                  <p className="text-sm text-gray-400">{integration.deal}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#2d2d2d] to-[#3d3d3d] p-8 md:p-12 rounded-lg border border-[#FF9500]">
            <Database className="mx-auto mb-4 text-[#FF9500]" size={48} />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Extensive Exchange Network</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6 max-w-4xl mx-auto">
              <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#FF9500] mb-3">100+ Crypto Exchanges</h3>
                <p className="text-gray-300">
                  Access over 100 cryptocurrency exchanges through our CCXT wrapper integration, including all major and regional platforms.
                </p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#FF9500] mb-3">500+ MT5 CFD Brokers</h3>
                <p className="text-gray-300">
                  Connect to more than 500 MetaTrader 5 CFD brokers worldwide through our MT5 wrapper for comprehensive market access.
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">
              We're constantly expanding our partner network. Have a specific integration request? Let us know and we'll prioritize it.
            </p>
            <div className="text-center">
              <Button variant="primary" className="text-base md:text-lg px-8 py-3">
                Request an Integration
              </Button>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#FF9500]">Seamless Connection</h3>
              <p className="text-sm text-gray-400">
                One-click integration with your existing data feeds and broker accounts. No complex setup required.
              </p>
            </div>
            <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#FF9500]">Exclusive Deals</h3>
              <p className="text-sm text-gray-400">
                Navigator users get special pricing, extended trials, and premium features from our partners.
              </p>
            </div>
            <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-6 sm:col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-3 text-[#FF9500]">Enterprise Support</h3>
              <p className="text-sm text-gray-400">
                Need custom integrations or white-label solutions? Our enterprise team can help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
