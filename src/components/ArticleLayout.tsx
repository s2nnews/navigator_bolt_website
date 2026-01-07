import { ReactNode, useState } from 'react';
import { articles, ArticleMetadata } from '../data/articles';
import { Menu, X } from 'lucide-react';

interface ArticleLayoutProps {
  article: ArticleMetadata;
  children: ReactNode;
  onNavigate: (page: string) => void;
}

export function ArticleLayout({ article, children, onNavigate }: ArticleLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleArticleClick = (slug: string) => {
    onNavigate(`learn/articles/${slug}`);
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-[#FF9500] text-black p-3 rounded-full shadow-lg"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="mb-10">
          <button
            onClick={() => onNavigate('learn')}
            className="inline-flex items-center text-gray-400 hover:text-[#FF9500] transition-colors text-sm font-medium"
          >
            <span className="mr-2">←</span> Back to Knowledge Base
          </button>
        </div>

        <div className="flex gap-8">
          <aside className={`
            fixed lg:static inset-0 z-40 bg-[#1a1a1a] lg:bg-transparent
            lg:w-64 lg:flex-shrink-0
            transition-transform duration-300
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            overflow-y-auto
          `}>
            <div className="lg:sticky lg:top-8 p-4 lg:p-0">
              <div className="lg:hidden mb-4 pb-4 border-b border-[#2d2d2d]">
                <h3 className="text-lg font-semibold">Article Menu</h3>
                <p className="text-sm text-gray-400 mt-1">Current: {article.title.substring(0, 40)}{article.title.length > 40 ? '...' : ''}</p>
              </div>

              <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Knowledge Base
                </h3>
                <nav className="space-y-1">
                  {articles.map((a) => (
                    <button
                      key={a.slug}
                      onClick={() => handleArticleClick(a.slug)}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        a.slug === article.slug
                          ? 'bg-[#FF9500]/10 text-[#FF9500] font-medium'
                          : 'hover:bg-[#3d3d3d] text-gray-300'
                      }`}
                    >
                      {a.title.length > 35 ? a.title.substring(0, 32) + '...' : a.title}
                    </button>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-[#3d3d3d]">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    On This Page
                  </h4>
                  <nav className="space-y-2">
                    {article.sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-gray-400 hover:text-[#FF9500] transition-colors leading-snug"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </aside>

          {mobileMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/50 z-30"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}

          <div className="flex-1 min-w-0">
            <header className="mb-12 pb-8 border-b border-[#3d3d3d]">
              <div className="inline-block px-3 py-1 bg-[#FF9500]/10 text-[#FF9500] text-xs font-semibold rounded-full mb-4 uppercase">
                {article.level}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-white">
                {article.title}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">{article.subtitle}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{article.readingTime} read</span>
                <span>•</span>
                <span>Updated Jan 2026</span>
              </div>
            </header>

            <article className="prose prose-invert prose-lg max-w-none text-gray-300 leading-[1.8]">
              {children}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
