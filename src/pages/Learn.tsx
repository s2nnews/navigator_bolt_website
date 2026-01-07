import { BookOpen, Target, TrendingUp, Brain, FileText } from 'lucide-react';
import { Button } from '../components/Button';
import { ContentCard } from '../components/ContentCard';
import { ArticleLayout } from '../components/ArticleLayout';
import { WhyMostBacktestsLieContent } from '../components/articles/WhyMostBacktestsLie';
import { ResearchIntegrityInPracticeContent } from '../components/articles/ResearchIntegrityInPractice';
import { SurvivorshipBiasContent } from '../components/articles/SurvivorshipBias';
import { DeflatedSharpeRatioContent } from '../components/articles/DeflatedSharpeRatio';
import { ConfidenceBeatsPerformanceContent } from '../components/articles/ConfidenceBeatsPerformance';
import { ProbabilityOfBacktestOverfittingContent } from '../components/articles/ProbabilityOfBacktestOverfitting';
import { MonitoringStrategyContent } from '../components/articles/MonitoringStrategy';
import { SmoothEquityCurvesContent } from '../components/articles/SmoothEquityCurves';
import { BrokenVsUnluckyContent } from '../components/articles/BrokenVsUnlucky';
import { articles } from '../data/articles';

interface LearnProps {
  onNavigate: (page: string) => void;
  initialPath?: string;
}


export function Learn({ onNavigate, initialPath = '' }: LearnProps) {
  const articleContentMap: Record<string, () => JSX.Element> = {
    'why-most-backtests-lie': WhyMostBacktestsLieContent,
    'research-integrity-in-practice': ResearchIntegrityInPracticeContent,
    'survivorship-bias-the-invisible-killer': SurvivorshipBiasContent,
    'deflated-sharpe-ratio': DeflatedSharpeRatioContent,
    'confidence-beats-performance': ConfidenceBeatsPerformanceContent,
    'probability-of-backtest-overfitting': ProbabilityOfBacktestOverfittingContent,
    'monitoring-strategy': MonitoringStrategyContent,
    'smooth-equity-curves': SmoothEquityCurvesContent,
    'broken-vs-unlucky': BrokenVsUnluckyContent,
  };

  let cleanPath = initialPath;
  if (initialPath.startsWith('articles/')) {
    cleanPath = initialPath.replace('articles/', '');
  }

  console.log('Learn component - initialPath:', initialPath, 'cleanPath:', cleanPath, 'has article:', cleanPath in articleContentMap);

  if (cleanPath && cleanPath in articleContentMap) {
    const articleMeta = articles.find(a => a.slug === cleanPath);
    if (!articleMeta) {
      return (
        <div className="bg-[#1a1a1a] min-h-screen">
          <div className="max-w-3xl mx-auto px-6 py-10">
            <button
              onClick={() => onNavigate('learn')}
              className="text-gray-400 hover:text-[#FF9500] mb-8 transition-colors"
            >
              ← Back to Knowledge Base
            </button>
            <h1 className="text-4xl font-bold mb-3">Article Not Found</h1>
            <p className="text-gray-400">This article does not exist yet.</p>
          </div>
        </div>
      );
    }
    const ContentComponent = articleContentMap[cleanPath];
    return (
      <ArticleLayout article={articleMeta} onNavigate={onNavigate}>
        <ContentComponent />
      </ArticleLayout>
    );
  }

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
            S2N Navigator is a backtesting, strategy development, and execution platform built to help traders design strategies, validate them honestly, and run them with discipline. Whether you're analysing simple portfolios or systematic rules-based strategies, Navigator gives you the workflow to go from idea → evidence → deployment → oversight.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-[#2d2d2d] p-4 rounded-lg">
              <div className="text-[#FF9500] font-semibold mb-2">1. Build</div>
              <p className="text-sm text-gray-400">Create strategies using visual builders, code or AI.</p>
            </div>
            <div className="bg-[#2d2d2d] p-4 rounded-lg">
              <div className="text-[#FF9500] font-semibold mb-2">2. Test</div>
              <p className="text-sm text-gray-400">Run historical backtests with accurate bias-free data and research guardrails.</p>
            </div>
            <div className="bg-[#2d2d2d] p-4 rounded-lg">
              <div className="text-[#FF9500] font-semibold mb-2">3. Deploy</div>
              <p className="text-sm text-gray-400">Connect unlimited accounts to brokers for live trading.</p>
            </div>
            <div className="bg-[#2d2d2d] p-4 rounded-lg">
              <div className="text-[#FF9500] font-semibold mb-2">4. Monitor</div>
              <p className="text-sm text-gray-400">Track performance, drift and take action when reality diverges from backtests.</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Learning Path</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ContentCard
              icon={<BookOpen size={24} />}
              title="Complete Beginner"
              description="New to backtesting? Start here to learn the fundamentals."
              difficulty="Beginner"
              duration="~2 hours"
              onClick={() => onNavigate('docs/getting-started')}
            />
            <ContentCard
              icon={<Brain size={24} />}
              title="Advanced User"
              description="Deep dive into the institutional grade tools available."
              difficulty="Advanced"
              duration="~5 hours"
              onClick={() => onNavigate('docs/advanced')}
            />
            <ContentCard
              icon={<FileText size={24} />}
              title="Knowledge Base"
              description="In-depth articles on backtesting, research integrity, and strategy validation."
              difficulty="All Levels"
              duration="8-10 min per article"
              onClick={() => window.scrollTo({ top: document.getElementById('articles-section')?.offsetTop || 0, behavior: 'smooth' })}
            />
            <ContentCard
              icon={<Target size={24} />}
              title="Strategy Explorer"
              description="Understand different trading strategies and when to use them."
              difficulty="Intermediate"
              duration="~3 hours"
              onClick={() => onNavigate('strategies')}
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
              <li>
                <button
                  onClick={() => window.scrollTo({ top: document.getElementById('articles-section')?.offsetTop || 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#FF9500] transition-colors"
                >
                  Knowledge Base: Backtesting & Research Integrity →
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

        <div id="articles-section" className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Knowledge Base</h2>
          <div className="space-y-6">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-6 cursor-pointer hover:border-[#FF9500]/50 transition-colors"
                onClick={() => {
                  console.log('Article clicked:', article.slug);
                  onNavigate(`learn/articles/${article.slug}`);
                }}
              >
                <div className="inline-block px-3 py-1 bg-[#FF9500]/10 text-[#FF9500] text-xs font-semibold rounded-full mb-3 uppercase">
                  {article.level}
                </div>
                <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-400 mb-3">{article.subtitle}</p>
                <div className="text-sm text-gray-500">{article.readingTime} read</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


