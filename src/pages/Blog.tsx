import { useState, useEffect } from 'react';
import { Rss, MessageSquare, ArrowUpRight, Mail, Loader2 } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SubstackPostCard } from '../components/SubstackPostCard';
import { fetchSubstackFeed, SubstackPost } from '../utils/substack';

interface BlogProps {
  onNavigate: (page: string) => void;
  selectedPost?: string;
}

type Tab = 'posts' | 'notes';

export function Blog({ onNavigate }: BlogProps) {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('posts');

  useEffect(() => {
    fetchSubstackFeed()
      .then((feed) => {
        setPosts(feed.posts);
        setLoading(false);
      })
      .catch(() => {
        setError('Unable to load posts right now. Visit our Substack directly.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Breadcrumbs
          items={[
            { label: 'Home', href: 'home' },
            { label: 'Blog & Newsletter' },
          ]}
          onNavigate={onNavigate}
        />

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d2d2d] border border-[#3d3d3d] text-sm text-gray-300 mb-6">
            <Rss size={16} className="text-[#FF9500]" />
            <span>Powered by Substack</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog & Newsletter
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Live trading examples, strategy breakdowns, and research notes from Michael Berman.
            Real insights from an active systematic trader.
          </p>
          <a
            href="https://s2nnavigator.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF9500] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8800] transition-colors"
          >
            <Mail size={18} />
            Subscribe on Substack
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="flex gap-1 mb-10 bg-[#0f0f0f] p-1 rounded-lg w-fit mx-auto">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all ${
              activeTab === 'posts'
                ? 'bg-[#FF9500] text-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Rss size={16} />
            Posts
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all ${
              activeTab === 'notes'
                ? 'bg-[#FF9500] text-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <MessageSquare size={16} />
            Notes
          </button>
        </div>

        {activeTab === 'posts' && (
          <div>
            {loading && (
              <div className="flex items-center justify-center py-20">
                <Loader2 size={32} className="text-[#FF9500] animate-spin" />
              </div>
            )}

            {error && (
              <div className="text-center py-16">
                <p className="text-gray-400 mb-6">{error}</p>
                <a
                  href="https://s2nnavigator.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#FF9500] font-semibold hover:text-orange-400 transition-colors"
                >
                  Visit S2N Navigator on Substack
                  <ArrowUpRight size={16} />
                </a>
              </div>
            )}

            {!loading && !error && posts.length > 0 && (
              <div className="space-y-6">
                {posts.map((post, idx) => (
                  <SubstackPostCard key={idx} post={post} variant="full" />
                ))}
              </div>
            )}

            {!loading && !error && posts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400">No posts available yet. Check back soon.</p>
              </div>
            )}

            <div className="text-center mt-10">
              <a
                href="https://s2nnavigator.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#FF9500] font-semibold hover:text-orange-400 transition-colors text-lg"
              >
                View all posts on Substack
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        )}

        {activeTab === 'notes' && (
          <div>
            <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-8 md:p-12 text-center">
              <MessageSquare size={48} className="text-[#FF9500] mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Quick Thoughts & Research Notes</h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                Short-form observations, market commentary, and research snippets shared in real-time.
                Notes are published directly on Substack.
              </p>
              <a
                href="https://s2nnavigator.substack.com/notes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF9500] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#ff8800] transition-colors text-lg"
              >
                <MessageSquare size={20} />
                Read Notes on Substack
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-6">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="font-semibold mb-2">Market Commentary</h3>
                <p className="text-sm text-gray-400">Quick takes on current market conditions and regime changes.</p>
              </div>
              <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-6">
                <div className="text-3xl mb-3">🔬</div>
                <h3 className="font-semibold mb-2">Research Snippets</h3>
                <p className="text-sm text-gray-400">Bite-sized insights from ongoing backtesting and strategy research.</p>
              </div>
              <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-6">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-semibold mb-2">Trading Observations</h3>
                <p className="text-sm text-gray-400">Real-time observations from live systematic trading operations.</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-[#2d2d2d] to-[#3d3d3d] border border-[#FF9500]/30 rounded-xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-3">Never Miss a Post</h2>
              <p className="text-gray-400 leading-relaxed">
                Subscribe to the S2N Navigator newsletter for strategy breakdowns,
                live trading examples, and research insights delivered to your inbox.
              </p>
            </div>
            <div className="rounded-lg border border-[#3d3d3d] overflow-hidden bg-[#1a1a1a]">
              <iframe
                src="https://s2nnavigator.substack.com/embed"
                width="100%"
                height="150"
                style={{ border: 'none', background: '#1a1a1a' }}
                frameBorder="0"
                scrolling="no"
                title="Subscribe to S2N Navigator Newsletter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
