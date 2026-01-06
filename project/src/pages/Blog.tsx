import { Calendar, User, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContentCard } from '../components/ContentCard';

interface BlogProps {
  onNavigate: (page: string) => void;
  selectedPost?: string;
}

const blogPosts = [
  {
    id: 'why-backtesting-matters',
    title: 'Why Backtesting Matters More Than You Think',
    excerpt: 'Understanding the critical role backtesting plays in developing profitable trading strategies and avoiding costly mistakes.',
    author: 'S2N Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Education',
  },
  {
    id: 'common-backtesting-mistakes',
    title: 'The 7 Most Common Backtesting Mistakes',
    excerpt: 'Learn to avoid these pitfalls that lead traders to develop strategies that work in backtests but fail in live trading.',
    author: 'S2N Team',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Best Practices',
  },
  {
    id: 'portfolio-allocation-strategies',
    title: 'Modern Portfolio Allocation Strategies Compared',
    excerpt: 'A comprehensive comparison of classic 60/40, risk parity, all-weather, and other allocation approaches.',
    author: 'S2N Team',
    date: '2024-01-05',
    readTime: '15 min read',
    category: 'Strategy Analysis',
  },
];

export function Blog({ onNavigate, selectedPost }: BlogProps) {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Breadcrumbs
          items={[
            { label: 'Learn', href: 'learn' },
            { label: 'Blog' },
          ]}
          onNavigate={onNavigate}
        />

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            In-depth articles about backtesting, strategy development, and market analysis.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-8 hover:border-[#FF9500] transition-all duration-300 cursor-pointer"
              onClick={() => onNavigate(`blog/${post.id}`)}
            >
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="bg-[#FF9500]/10 text-[#FF9500] px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-3xl font-bold mb-3 group-hover:text-[#FF9500] transition-colors">
                {post.title}
              </h2>

              <p className="text-gray-400 mb-6 text-lg">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2 text-[#FF9500] font-semibold">
                  Read More
                  <ArrowRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">More Content Coming Soon</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're constantly adding new educational content. Check back regularly for
            new articles, case studies, and strategy breakdowns.
          </p>
        </div>
      </div>
    </div>
  );
}
