import { Play, Clock, Award } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContentCard } from '../components/ContentCard';
import { VideoEmbed } from '../components/VideoEmbed';
import { Button } from '../components/Button';

interface VideosProps {
  onNavigate: (page: string) => void;
  selectedVideo?: string;
}

const videoData: Record<string, {
  title: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  embedUrl: string;
  keyPoints: string[];
  relatedDocs: Array<{ label: string; href: string; }>;
}> = {
  'quickstart': {
    title: 'Quickstart: Your First 5 Minutes',
    duration: '3:24',
    difficulty: 'Beginner',
    description: 'Get up and running with S2N Navigator in under 5 minutes. This video covers installation, interface overview, and running your first backtest.',
    embedUrl: 'https://www.youtube.com/embed/placeholder',
    keyPoints: [
      'Installing and launching Navigator',
      'Understanding the main interface',
      'Running a simple backtest',
      'Interpreting basic results',
    ],
    relatedDocs: [
      { label: 'Installation Guide', href: 'docs/installation' },
      { label: 'Your First Backtest', href: 'docs/first-backtest' },
    ],
  },
  'strategy-builder': {
    title: 'Strategy Builder Overview',
    duration: '5:12',
    difficulty: 'Beginner',
    description: 'Learn how to use the Strategy Builder to create custom trading strategies without writing code.',
    embedUrl: 'https://www.youtube.com/embed/placeholder',
    keyPoints: [
      'Visual strategy creation',
      'Adding entry and exit rules',
      'Position sizing options',
      'Saving and organizing strategies',
    ],
    relatedDocs: [
      { label: 'Strategy Builder Guide', href: 'docs/strategy-builder' },
    ],
  },
  'understanding-metrics': {
    title: 'Understanding Backtest Metrics',
    duration: '7:45',
    difficulty: 'Intermediate',
    description: 'Deep dive into performance metrics: what they mean, what\'s good vs bad, and which ones matter most.',
    embedUrl: 'https://www.youtube.com/embed/placeholder',
    keyPoints: [
      'CAGR and total return',
      'Maximum drawdown and recovery',
      'Sharpe and Sortino ratios',
      'Win rate vs profit factor',
    ],
    relatedDocs: [
      { label: 'Understanding Results', href: 'docs/understanding-results' },
      { label: 'Glossary', href: 'docs/glossary' },
    ],
  },
  'avoiding-overfitting': {
    title: 'Avoiding Overfitting',
    duration: '6:30',
    difficulty: 'Advanced',
    description: 'Learn how to create robust strategies that work in live trading, not just backtests. Critical viewing for serious traders.',
    embedUrl: 'https://www.youtube.com/embed/placeholder',
    keyPoints: [
      'What is overfitting and why it happens',
      'Out-of-sample testing techniques',
      'Walk-forward analysis',
      'Keeping strategies simple and robust',
    ],
    relatedDocs: [
      { label: 'Optimization Guide', href: 'docs/optimization' },
    ],
  },
};

export function Videos({ onNavigate, selectedVideo }: VideosProps) {
  const videoCards = [
    {
      id: 'quickstart',
      title: 'Quickstart: Your First 5 Minutes',
      description: 'Get up and running fast with this essential introduction',
      duration: '3:24',
      difficulty: 'Beginner' as const,
    },
    {
      id: 'strategy-builder',
      title: 'Strategy Builder Overview',
      description: 'Create strategies visually without writing code',
      duration: '5:12',
      difficulty: 'Beginner' as const,
    },
    {
      id: 'understanding-metrics',
      title: 'Understanding Backtest Metrics',
      description: 'Master the numbers that matter for strategy evaluation',
      duration: '7:45',
      difficulty: 'Intermediate' as const,
    },
    {
      id: 'avoiding-overfitting',
      title: 'Avoiding Overfitting',
      description: 'Build robust strategies that work in live trading',
      duration: '6:30',
      difficulty: 'Advanced' as const,
    },
  ];

  if (selectedVideo && videoData[selectedVideo]) {
    const video = videoData[selectedVideo];

    return (
      <div className="bg-[#1a1a1a] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Learn', href: 'learn' },
              { label: 'Videos', href: 'videos' },
              { label: video.title },
            ]}
            onNavigate={onNavigate}
          />

          <article>
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-4">{video.title}</h1>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{video.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} />
                  <span>{video.difficulty}</span>
                </div>
              </div>
            </div>

            <VideoEmbed src={video.embedUrl} title={video.title} />

            <div className="my-8">
              <p className="text-lg text-gray-300">{video.description}</p>
            </div>

            <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
              <ul className="space-y-2">
                {video.keyPoints.map((point, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-3">
                    <span className="text-[#FF9500] mt-1">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {video.relatedDocs.length > 0 && (
              <div className="bg-gradient-to-r from-[#FF9500]/10 to-[#FF9500]/5 border border-[#FF9500]/20 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold mb-4">Related Documentation</h3>
                <div className="space-y-2">
                  {video.relatedDocs.map((doc, index) => (
                    <button
                      key={index}
                      onClick={() => onNavigate(doc.href)}
                      className="block text-gray-300 hover:text-[#FF9500] transition-colors"
                    >
                      {doc.label} →
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">More Videos</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {videoCards
                  .filter(v => v.id !== selectedVideo)
                  .slice(0, 2)
                  .map((card) => (
                    <button
                      key={card.id}
                      onClick={() => onNavigate(`videos/${card.id}`)}
                      className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-4 text-left hover:border-[#FF9500] transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Play size={16} className="text-[#FF9500]" />
                        <span className="text-sm text-gray-400">{card.duration}</span>
                      </div>
                      <h4 className="font-semibold mb-1">{card.title}</h4>
                      <p className="text-sm text-gray-400">{card.description}</p>
                    </button>
                  ))}
              </div>
            </div>
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
            { label: 'Videos' },
          ]}
          onNavigate={onNavigate}
        />

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Video Tutorials</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Short, focused walkthroughs covering essential Navigator features and backtesting
            concepts. Learn at your own pace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {videoCards.map((video) => (
            <ContentCard
              key={video.id}
              icon={<Play size={24} />}
              title={video.title}
              description={video.description}
              difficulty={video.difficulty}
              duration={video.duration}
              onClick={() => onNavigate(`videos/${video.id}`)}
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#FF9500]/20 to-[#FF9500]/5 border border-[#FF9500]/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Backtesting?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            These videos will help you hit the ground running, but the best way to learn
            is by doing. Start your free access today.
          </p>
          <Button
            variant="primary"
            onClick={() => onNavigate('pricing')}
          >
            Start Free
          </Button>
        </div>
      </div>
    </div>
  );
}
