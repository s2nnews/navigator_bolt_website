import { useState, useEffect } from 'react';
import { Button } from './Button';
import { X, Cookie, Shield, BarChart } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const updateConsent = (
    analyticsStorage: 'granted' | 'denied',
    adStorage: 'granted' | 'denied'
  ) => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: analyticsStorage,
        ad_storage: adStorage,
        ad_user_data: adStorage,
        ad_personalization: adStorage,
      });
      console.log('Consent updated:', { analytics_storage: analyticsStorage, ad_storage: adStorage });
    } else {
      console.error('gtag not loaded');
    }
  };

  const handleAcceptAll = () => {
    localStorage.setItem('cookie_consent', 'all');
    updateConsent('granted', 'granted');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie_consent', 'necessary');
    updateConsent('denied', 'denied');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    updateConsent('denied', 'denied');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="w-full max-w-2xl bg-[#1a1a1a] border-2 border-[#3d3d3d] rounded-lg shadow-2xl pointer-events-auto animate-slide-up">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Cookie className="text-[#FF9500]" size={32} />
              <h2 className="text-xl font-bold">Cookie Preferences</h2>
            </div>
            <button
              onClick={handleReject}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-gray-300 mb-4">
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
            Your privacy matters to us.
          </p>

          {!showDetails ? (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  onClick={handleAcceptAll}
                  className="flex-1 min-w-[140px]"
                >
                  Accept All
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleAcceptNecessary}
                  className="flex-1 min-w-[140px]"
                >
                  Necessary Only
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleReject}
                  className="flex-1 min-w-[140px]"
                >
                  Reject All
                </Button>
              </div>
              <button
                onClick={() => setShowDetails(true)}
                className="text-[#FF9500] hover:text-[#FF9500]/80 text-sm underline"
              >
                Customize Preferences
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-[#2d2d2d] rounded-lg p-4 border border-[#3d3d3d]">
                <div className="flex items-start gap-3 mb-2">
                  <Shield className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Necessary Cookies</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Required for the website to function properly. These cannot be disabled.
                    </p>
                  </div>
                </div>
                <div className="ml-8">
                  <span className="inline-block bg-green-500/20 text-green-500 text-xs px-2 py-1 rounded">
                    Always Active
                  </span>
                </div>
              </div>

              <div className="bg-[#2d2d2d] rounded-lg p-4 border border-[#3d3d3d]">
                <div className="flex items-start gap-3 mb-2">
                  <BarChart className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <div className="flex-1">
                    <h3 className="font-semibold">Analytics Cookies</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#2d2d2d] rounded-lg p-4 border border-[#3d3d3d]">
                <div className="flex items-start gap-3 mb-2">
                  <Cookie className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                  <div className="flex-1">
                    <h3 className="font-semibold">Marketing Cookies</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Used to track visitors across websites to display relevant and engaging advertisements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  variant="primary"
                  onClick={handleAcceptAll}
                  className="flex-1 min-w-[140px]"
                >
                  Accept All
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleAcceptNecessary}
                  className="flex-1 min-w-[140px]"
                >
                  Necessary Only
                </Button>
              </div>

              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-white text-sm"
              >
                Back to simple view
              </button>
            </div>
          )}

          <p className="text-xs text-gray-500 mt-4">
            By continuing to use our site, you agree to our use of cookies as described in our{' '}
            <a href="#privacy" className="text-[#FF9500] hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
