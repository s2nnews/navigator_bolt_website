import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { trackFunnelEvent } from '../utils/funnel';

type Page = 'home' | 'pricing' | 'features' | 'ai-oracle' | 'about' | 'contact' | 'affiliate' | 'integrations' | 'learn' | 'docs' | 'strategies' | 'videos' | 'blog' | 'downloads' | 'free';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Features', page: 'features' as Page },
    { label: 'AI Oracle', page: 'ai-oracle' as Page, special: true },
    { label: 'Learn', page: 'learn' as Page },
    { label: 'Newsletter', page: 'blog' as Page },
    { label: 'Pricing', page: 'pricing' as Page },
    { label: 'Integrations', page: 'integrations' as Page },
    { label: 'About', page: 'about' as Page },
    { label: 'Affiliate', page: 'affiliate' as Page },
  ];

  const handleNavClick = (page: Page) => {
    window.location.hash = page;
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a1a] border-b border-[#2d2d2d]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between md:justify-start md:gap-8">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
          <img src="/logos/S2N_Navigator_slogan_128.png" alt="S2N Navigator" className="w-16 h-16 md:w-32 md:h-32" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`transition-colors flex items-center gap-1.5 ${
                item.special
                  ? currentPage === item.page
                    ? 'text-cyan-400'
                    : 'text-cyan-400/80 hover:text-cyan-300'
                  : currentPage === item.page
                  ? 'text-[#FF9500]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.special && <Sparkles className="w-4 h-4" />}
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { trackFunnelEvent('free_cta_click', 'nav'); handleNavClick('free'); }}
            className="bg-[#FF9500] text-black px-6 py-2 rounded font-semibold hover:bg-orange-600 transition-colors"
          >
            Start Free
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2d2d2d] border-t border-[#3d3d3d]">
          <div className="px-4 py-2 space-y-1">
            {navItems.map(item => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-4 py-2 rounded transition-colors flex items-center gap-2 ${
                  item.special
                    ? currentPage === item.page
                      ? 'bg-cyan-500 text-white'
                      : 'text-cyan-400 hover:text-cyan-300'
                    : currentPage === item.page
                    ? 'bg-[#FF9500] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.special && <Sparkles className="w-4 h-4" />}
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { trackFunnelEvent('free_cta_click', 'nav_mobile'); handleNavClick('free'); }}
              className="w-full bg-[#FF9500] text-black px-6 py-2 rounded font-semibold hover:bg-orange-600 transition-colors"
            >
              Start Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
