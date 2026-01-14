import { useState } from 'react';
import { Mail, Twitter, Facebook, Youtube } from 'lucide-react';

type Page = 'home' | 'pricing' | 'features' | 'about' | 'contact' | 'affiliate' | 'integrations' | 'terms' | 'privacy' | 'refunds' | 'disclaimer' | 'downloads';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleNavClick = (page: Page) => {
    window.location.hash = page;
    window.scrollTo(0, 0);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/subscribe-newsletter`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage('Successfully subscribed!');
        setEmail('');
      } else {
        setMessage(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#0f0f0f] border-t border-[#2d2d2d] mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logos/S2N_Navigator_64.png" alt="S2N Navigator" className="w-16 h-16" />
              <span className="font-bold">S2N Navigator</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">Don't be fooled by randomness.</p>

            <div>
              <h3 className="font-semibold mb-4 text-white">Connect</h3>
              <div className="flex gap-4">
                <a href="https://x.com/s2n_navigator" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF9500] transition-colors"><Twitter size={20} /></a>
                <a href="https://www.facebook.com/profile.php?id=61583609206314" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF9500] transition-colors"><Facebook size={20} /></a>
                <a href="https://www.youtube.com/@S2N-Navigator" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF9500] transition-colors"><Youtube size={20} /></a>
                <a href="mailto:support@s2n-navigator.com" className="text-gray-400 hover:text-[#FF9500] transition-colors"><Mail size={20} /></a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => handleNavClick('features')} className="hover:text-[#FF9500] transition-colors">Features</button></li>
              <li><button onClick={() => handleNavClick('pricing')} className="hover:text-[#FF9500] transition-colors">Pricing</button></li>
              <li><button onClick={() => handleNavClick('integrations')} className="hover:text-[#FF9500] transition-colors">Integrations</button></li>
              <li><a href={import.meta.env.VITE_STRIPE_PORTAL_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9500] transition-colors">Manage Subscription</a></li>
              <li><button onClick={() => handleNavClick('downloads')} className="hover:text-[#FF9500] transition-colors">Download</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => handleNavClick('about')} className="hover:text-[#FF9500] transition-colors">About</button></li>
              <li><button onClick={() => handleNavClick('affiliate')} className="hover:text-[#FF9500] transition-colors">Affiliate</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-[#FF9500] transition-colors">Contact</button></li>
              <li><a href="#" className="hover:text-[#FF9500] transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => handleNavClick('disclaimer')} className="hover:text-[#FF9500] transition-colors font-semibold text-[#FF9500]">Trading Disclaimer</button></li>
              <li><button onClick={() => handleNavClick('terms')} className="hover:text-[#FF9500] transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => handleNavClick('privacy')} className="hover:text-[#FF9500] transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => handleNavClick('refunds')} className="hover:text-[#FF9500] transition-colors">Refund Policy</button></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 max-w-md mx-auto">
            <h3 className="font-semibold mb-2 text-white text-sm">Join 4,000+ subscribers to Michael Berman's free daily</h3>
            <p className="text-xs text-gray-400 mb-3">Signal2Noise (S2N) Global Macro Newsletter</p>
            <div id="footer-newsletter-embed" className="bg-[#1a1a1a] p-3 rounded-lg border border-[#FF9500]">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 bg-[#2d2d2d] border border-[#3d3d3d] rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9500] disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-[#FF9500] text-white rounded text-sm font-semibold hover:bg-[#ff8800] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
                {message && (
                  <p className={`text-xs ${message.includes('Successfully') ? 'text-green-400' : 'text-red-400'}`}>
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2d2d2d] pt-8 text-center text-sm text-gray-500">
          <div className="bg-[#2d2d2d] border-l-4 border-[#FF9500] p-4 rounded-r mb-6 text-left">
            <p className="text-white font-bold mb-2 text-xs md:text-sm">RISK DISCLOSURE</p>
            <p className="text-gray-300 text-xs leading-relaxed">
              Trading involves substantial risk of loss. S2N Navigator does not provide financial advice.
              Automated trading can amplify losses. Past performance is not indicative of future results.
              You are solely responsible for all trading decisions. {' '}
              <button
                onClick={() => handleNavClick('disclaimer')}
                className="text-[#FF9500] hover:underline font-semibold"
              >
                Read full disclaimer
              </button>
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mb-2">
            <p>&copy; 2025 S2N Navigator. All rights reserved.</p>
            <span className="hidden md:inline">•</span>
            <div className="flex gap-4">
              <button onClick={() => handleNavClick('disclaimer')} className="hover:text-[#FF9500] transition-colors font-semibold">Disclaimer</button>
              <button onClick={() => handleNavClick('terms')} className="hover:text-[#FF9500] transition-colors">Terms</button>
              <button onClick={() => handleNavClick('privacy')} className="hover:text-[#FF9500] transition-colors">Privacy</button>
              <button onClick={() => handleNavClick('refunds')} className="hover:text-[#FF9500] transition-colors">Refunds</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
