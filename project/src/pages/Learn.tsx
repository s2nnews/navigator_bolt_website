import { BookOpen, Target, TrendingUp, Brain } from 'lucide-react';
import { Button } from '../components/Button';
import { ContentCard } from '../components/ContentCard';

interface LearnProps {
  onNavigate: (page: string) => void;
}

export function Learn({ onNavigate }: LearnProps) {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Learn S2N Navigator
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Master backtesting and strategy development with structured learning paths
            designed for every skill level.
          </p>
        </div>

        <div className="mb-16 bg-gradient-to-r from-[#FF9500]/10 to-[#FF9500]/5 border border-[#FF9500]/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">What is S2N Navigator?</h2>
          <p className="text-gray-300 mb-4">
            S2N Navigator is a comprehensive backtesting and strategy development platform
            that helps traders test, validate, and deploy trading strategies with confidence.
            Whether you're analyzing simple buy-and-hold portfolios or complex algorithmic
            strategies, Navigator provides the tools you need.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#2d2d2d] p-4 rounded-lg">
              <div className="text-[#FF9500] font-semibold mb-2">1. Build</div>
              <p className="text-sm text-gray-400">Create strategies using visual builders or code</p>
            </div>
            <div className="bg-[#2d2d2d] p-4 rounded-lg">
              <div className="text-[#FF9500] font-semibold mb-2">2. Test</div>
              <p className="text-sm text-gray-400">Run historical backtests with accurate data</p>
            </div>
            <div className="bg-[#2d2d2d] p-4 rounded-lg">
              <div className="text-[#FF9500] font-semibold mb-2">3. Deploy</div>
              <p className="text-sm text-gray-400">Connect to brokers for live trading</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Learning Path</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContentCard
              icon={<BookOpen size={24} />}
              title="Complete Beginner"
              description="New to backtesting? Start here to learn the fundamentals."
              difficulty="Beginner"
              duration="~2 hours"
              onClick={() => onNavigate('docs/getting-started')}
            />
            <ContentCard
              icon={<Target size={24} />}
              title="Strategy Explorer"
              description="Understand different trading strategies and when to use them."
              difficulty="Intermediate"
              duration="~3 hours"
              onClick={() => onNavigate('strategies')}
            />
            <ContentCard
              icon={<Brain size={24} />}
              title="Advanced User"
              description="Deep dive into custom indicators, optimization, and AI features."
              difficulty="Advanced"
              duration="~5 hours"
              onClick={() => onNavigate('docs/advanced')}
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Start</h2>
          <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FF9500] rounded-full flex items-center justify-center text-black font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Install Navigator</h3>
                  <p className="text-gray-400">Download and install S2N Navigator on your system</p>
                  <Button
                    variant="primary"
                    className="mt-3"
                    onClick={() => onNavigate('pricing')}
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FF9500] rounded-full flex items-center justify-center text-black font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Run Your First Backtest</h3>
                  <p className="text-gray-400">Follow our step-by-step guide to test a simple strategy</p>
                  <Button
                    variant="secondary"
                    className="mt-3"
                    onClick={() => onNavigate('docs/first-backtest')}
                  >
                    View Guide
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FF9500] rounded-full flex items-center justify-center text-black font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Watch Tutorial Videos</h3>
                  <p className="text-gray-400">Quick 2-3 minute videos covering key concepts</p>
                  <Button
                    variant="secondary"
                    className="mt-3"
                    onClick={() => onNavigate('videos')}
                  >
                    Browse Videos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-8">
            <TrendingUp className="text-[#FF9500] mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-3">Popular Resources</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('docs/understanding-results')}
                  className="text-gray-400 hover:text-[#FF9500] transition-colors"
                >
                  Understanding Backtest Results →
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('docs/glossary')}
                  className="text-gray-400 hover:text-[#FF9500] transition-colors"
                >
                  Common Terms Glossary →
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('strategies/60-40-portfolio')}
                  className="text-gray-400 hover:text-[#FF9500] transition-colors"
                >
                  60/40 Portfolio Strategy →
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('docs/faqs')}
                  className="text-gray-400 hover:text-[#FF9500] transition-colors"
                >
                  Frequently Asked Questions →
                </button>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#FF9500]/20 to-[#FF9500]/5 border border-[#FF9500]/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-3">Need Help?</h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help you succeed. Get personalized support and guidance.
            </p>
            <Button
              variant="primary"
              onClick={() => onNavigate('contact')}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
