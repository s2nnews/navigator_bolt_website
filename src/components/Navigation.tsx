import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'pricing' | 'features' | 'about' | 'contact' | 'affiliate' | 'integrations' | 'learn' | 'docs' | 'strategies' | 'videos' | 'blog' | 'downloads';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Features', page: 'features' as Page },
    { label: 'Learn', page: 'learn' as Page },
    { label: 'Pricing', page: 'pricing' as Page },
    { label: 'Integrations', page: 'integrations' as Page },
    { label: 'About', page: 'about' as Page },
    { label: 'Affiliate', page: 'affiliate' as Page },
    { label: 'Contact', page: 'contact' as Page },
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
              className={`transition-colors ${
                currentPage === item.page
                  ? 'text-[#FF9500]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('pricing')}
            className="bg-[#FF9500] text-black px-6 py-2 rounded font-semibold hover:bg-orange-600 transition-colors"
          >
            Start Free Trial
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
                className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                  currentPage === item.page
                    ? 'bg-[#FF9500] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('pricing')}
              className="w-full bg-[#FF9500] text-black px-6 py-2 rounded font-semibold hover:bg-orange-600 transition-colors"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
