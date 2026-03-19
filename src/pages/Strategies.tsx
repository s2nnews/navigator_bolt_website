import { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContentCard } from '../components/ContentCard';
import { Callout } from '../components/Callout';
import { TrendingUp, Target, BarChart3, Brain, LineChart, PieChart } from 'lucide-react';

interface StrategiesProps {
  onNavigate: (page: string) => void;
  initialStrategy?: string;
}

const strategyData: Record<string, {
  title: string;
  overview: string;
  intuition: string;
  pros: string[];
  cons: string[];
  risks: string[];
  example: string;
  relatedStrategies: string[];
}> = {
  '60-40-portfolio': {
    title: '60/40 Portfolio',
    overview: 'The classic balanced portfolio: 60% stocks (typically S&P 500) and 40% bonds (typically aggregate bonds). This is one of the most widely used allocation strategies for long-term investors.',
    intuition: 'Stocks provide growth potential, while bonds provide stability and income. When stocks fall, bonds often rise or remain stable, providing a cushion. The 60/40 split offers a balance between growth and safety suitable for moderate risk tolerance.',
    pros: [
      'Simple to understand and implement',
      'Historically strong risk-adjusted returns',
      'Lower volatility than 100% stocks',
      'Bonds provide income stream',
      'Works well for long-term investors',
    ],
    cons: [
      'Lower returns than 100% stocks in bull markets',
      'Bond portion may underperform in rising rate environments',
      'May not provide enough growth for young investors',
      'Recent years have shown correlation risk (stocks and bonds falling together)',
    ],
    risks: 'Significant drawdowns can still occur (20-30% in severe bear markets). Rising interest rates can hurt bond values. Inflation can erode real returns if interest rates are low.',
    example: 'A $100,000 portfolio would hold $60,000 in SPY (S&P 500 ETF) and $40,000 in AGG (Aggregate Bond ETF), rebalanced quarterly or annually to maintain the target allocation.',
    relatedStrategies: ['80-20-aggressive', 'risk-parity', 'all-weather'],
  },
  '80-20-aggressive': {
    title: '80/20 Aggressive Portfolio',
    overview: 'A growth-focused allocation with 80% stocks and 20% bonds. Designed for investors with higher risk tolerance and longer time horizons.',
    intuition: 'Prioritizes growth over stability by allocating more to equities. The small bond allocation provides some cushion during market crashes but doesn\'t significantly dampen returns during bull markets.',
    pros: [
      'Higher expected returns than 60/40',
      'Still maintains some downside protection',
      'Good for younger investors with time to recover from drawdowns',
      'Simple two-asset approach',
    ],
    cons: [
      'Larger drawdowns than 60/40 (30-40%+)',
      'More emotional stress during bear markets',
      'Requires discipline to not panic sell',
      'Bond portion may not provide meaningful protection in severe crashes',
    ],
    risks: 'Maximum drawdowns of 35-45% are possible. Requires strong conviction and ability to hold through major declines. Not suitable for near-retirees or conservative investors.',
    example: 'A $100,000 portfolio would hold $80,000 in equities (could be split between US and international) and $20,000 in bonds, rebalanced annually.',
    relatedStrategies: ['60-40-portfolio', '100-equities', 'momentum-rotation'],
  },
  'trend-following': {
    title: 'Trend Following',
    overview: 'A systematic approach that goes long when assets are in uptrends and moves to cash or short when in downtrends. Uses technical indicators like moving averages to identify trends.',
    intuition: 'Markets tend to trend for extended periods. By riding trends and cutting losses quickly, you can capture the bulk of bull markets while avoiding the worst of bear markets. "The trend is your friend."',
    pros: [
      'Can avoid major bear market losses',
      'Works across multiple asset classes',
      'Systematic and emotion-free',
      'Historically strong crisis performance',
      'Can be applied to any timeframe',
    ],
    cons: [
      'Whipsaw losses in choppy, sideways markets',
      'Underperforms in steadily rising markets with no pullbacks',
      'Requires discipline to follow signals',
      'Transaction costs from more frequent trading',
      'Lag time means you miss the very tops and bottoms',
    ],
    risks: 'Multiple false signals can create a string of small losses. Works best in trending markets but struggles in range-bound conditions. Requires consistent execution.',
    example: 'Simple moving average crossover: Buy when 50-day MA crosses above 200-day MA, sell when it crosses below. Or use absolute momentum: hold if above 10-month moving average, otherwise cash.',
    relatedStrategies: ['momentum-rotation', 'moving-average', 'breakout-trading'],
  },
  'factor-etfs': {
    title: 'Factor-Based ETF Strategy',
    overview: 'Investing in ETFs that target specific return factors like value, momentum, quality, size, or low volatility. Combines multiple factors for diversified exposure to proven return drivers.',
    intuition: 'Academic research shows certain factors historically outperform the broad market over long periods. By systematically targeting these factors, you can potentially enhance returns or reduce risk.',
    pros: [
      'Evidence-based approach backed by decades of research',
      'ETF implementation is simple and low-cost',
      'Diversification across multiple return drivers',
      'Can tilt portfolio toward specific characteristics',
      'More sophisticated than market-cap weighting',
    ],
    cons: [
      'Factors can underperform for years at a time',
      'Factor premiums may have declined as they became popular',
      'More complex than simple index investing',
      'Requires patience during underperformance periods',
      'Factor crowding risk',
    ],
    risks: 'Long periods of factor underperformance test investor patience. Some factors may be arbitraged away. Requires understanding of why factors work to maintain conviction.',
    example: 'A portfolio might combine: 30% value ETF (VLUE), 30% momentum ETF (MTUM), 20% quality ETF (QUAL), 20% small-cap ETF (IJR). Rebalance quarterly.',
    relatedStrategies: ['smart-beta', 'value-investing', 'momentum-rotation'],
  },
};

export function Strategies({ onNavigate, initialStrategy }: StrategiesProps) {
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(initialStrategy || null);

  const strategyCards = [
    {
      id: '60-40-portfolio',
      title: '60/40 Portfolio',
      description: 'Classic balanced allocation between stocks and bonds',
      icon: <PieChart size={24} />,
      difficulty: 'Beginner' as const,
    },
    {
      id: '80-20-aggressive',
      title: '80/20 Aggressive Portfolio',
      description: 'Growth-focused allocation with higher equity exposure',
      icon: <TrendingUp size={24} />,
      difficulty: 'Beginner' as const,
    },
    {
      id: 'trend-following',
      title: 'Trend Following',
      description: 'Systematic approach riding market trends',
      icon: <LineChart size={24} />,
      difficulty: 'Intermediate' as const,
    },
    {
      id: 'factor-etfs',
      title: 'Factor-Based ETFs',
      description: 'Target proven return factors like value and momentum',
      icon: <Target size={24} />,
      difficulty: 'Intermediate' as const,
    },
  ];

  if (selectedStrategy && strategyData[selectedStrategy]) {
    const strategy = strategyData[selectedStrategy];

    return (
      <div className="bg-[#1a1a1a] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Learn', href: 'learn' },
              { label: 'Strategies', href: 'strategies' },
              { label: strategy.title },
            ]}
            onNavigate={(href) => {
              if (href === 'strategies') {
                setSelectedStrategy(null);
              } else {
                onNavigate(href);
              }
            }}
          />

          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-6">{strategy.title}</h1>

            <div className="bg-gradient-to-r from-[#FF9500]/10 to-[#FF9500]/5 border border-[#FF9500]/20 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-3">Overview</h2>
              <p className="text-gray-300">{strategy.overview}</p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Intuition</h2>
            <p className="text-gray-300 mb-6">{strategy.intuition}</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Strengths</h3>
                <ul className="space-y-2">
                  {strategy.pros.map((pro, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Limitations</h3>
                <ul className="space-y-2">
                  {strategy.cons.map((con, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">⚠</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Callout type="warning" title="Key Risks">
              {strategy.risks}
            </Callout>

            <h2 className="text-2xl font-bold mt-8 mb-4">Example Implementation</h2>
            <div className="bg-[#2d2d2d] rounded-lg p-6 mb-8">
              <p className="text-gray-300">{strategy.example}</p>
            </div>

            <div className="bg-gradient-to-br from-[#FF9500]/20 to-[#FF9500]/5 border border-[#FF9500]/30 rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Try This Strategy in Navigator</h3>
              <p className="text-gray-300 mb-6">
                Ready to backtest this strategy with real historical data? Get started
                with S2N Navigator's free access.
              </p>
              <button
                onClick={() => onNavigate('pricing')}
                className="bg-[#FF9500] text-black px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Start Free
              </button>
            </div>

            {strategy.relatedStrategies.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Related Strategies</h3>
                <div className="flex flex-wrap gap-3">
                  {strategy.relatedStrategies.map((id) => {
                    const related = strategyCards.find(s => s.id === id);
                    return related ? (
                      <button
                        key={id}
                        onClick={() => setSelectedStrategy(id)}
                        className="bg-[#2d2d2d] border border-[#3d3d3d] px-4 py-2 rounded-lg hover:border-[#FF9500] transition-colors text-gray-300"
                      >
                        {related.title} →
                      </button>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Breadcrumbs
          items={[
            { label: 'Learn', href: 'learn' },
            { label: 'Strategies' },
          ]}
          onNavigate={onNavigate}
        />

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Trading Strategies</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore proven trading strategies, understand when they work, and learn how
            to implement them in S2N Navigator.
          </p>
        </div>

        <Callout type="info" title="Strategy Education">
          These guides explain the concepts, pros/cons, and implementation details for
          each strategy. Use Navigator to backtest them with real historical data.
        </Callout>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {strategyCards.map((strategy) => (
            <ContentCard
              key={strategy.id}
              icon={strategy.icon}
              title={strategy.title}
              description={strategy.description}
              difficulty={strategy.difficulty}
              onClick={() => setSelectedStrategy(strategy.id)}
            />
          ))}
        </div>

        <div className="mt-16 bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Strategy Best Practices</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-[#FF9500]">Understand the "Why":</strong> Every
              strategy should have a logical reason for why it works. If you can't explain
              it, you won't have confidence to stick with it during losses.
            </p>
            <p>
              <strong className="text-[#FF9500]">Test Multiple Periods:</strong> A strategy
              that only worked in one market environment probably won't work going forward.
              Test across bull and bear markets.
            </p>
            <p>
              <strong className="text-[#FF9500]">Keep It Simple:</strong> Complex strategies
              with many rules are often overfit to historical data. Simple, robust strategies
              tend to work better in live trading.
            </p>
            <p>
              <strong className="text-[#FF9500]">Consider Your Psychology:</strong> The
              best strategy is one you can actually follow. If 40% drawdowns will make you
              panic sell, choose a lower-risk approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
