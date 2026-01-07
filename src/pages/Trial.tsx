import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { Loader, CheckCircle, Copy, Mail } from 'lucide-react';
import { trackTrialStarted, trackTrialCompleted, trackTrialCreatedGTM } from '../utils/analytics';

export function Trial() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    license_key: string;
    valid_until: string;
    email: string;
  } | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    trackTrialStarted();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const licenseServerUrl = import.meta.env.VITE_LICENSE_SERVER_URL;
      const response = await fetch(`${licenseServerUrl}/trial/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || data.error || 'Failed to start trial. Please try again.');
        return;
      }

      setResult(data);
      trackTrialCompleted(formData.email);
      trackTrialCreatedGTM(formData.email);
    } catch (err) {
      console.error('Error starting trial:', err);
      setError('Unable to connect to the server. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (result?.license_key) {
      try {
        await navigator.clipboard.writeText(result.license_key);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  if (result) {
    return (
      <div className="w-full">
        <section className="py-12 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="text-green-500" size={64} />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Your Free Trial is Active!
              </h1>

              <p className="text-lg text-gray-400 mb-8">
                Your 14-day trial has started. Here's your license key:
              </p>

              <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-400 mb-2">Your License Key</p>
                <div className="font-mono text-lg md:text-xl text-[#FF9500] break-all mb-4">
                  {result.license_key}
                </div>

                <Button
                  variant="secondary"
                  onClick={copyToClipboard}
                  className="w-full md:w-auto flex items-center justify-center gap-2"
                >
                  <Copy size={18} />
                  {copied ? 'Copied!' : 'Copy License Key'}
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">Valid Until</p>
                  <p className="text-lg font-semibold">{new Date(result.valid_until).toLocaleDateString()}</p>
                </div>

                <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="text-lg font-semibold break-all">{result.email}</p>
                </div>
              </div>

              <div className="bg-blue-900/30 border border-blue-700 p-4 rounded-lg mb-8">
                <div className="flex items-start gap-3">
                  <Mail className="text-blue-400 mt-1" size={20} />
                  <div className="text-left">
                    <p className="font-semibold text-blue-400 mb-1">Check Your Email</p>
                    <p className="text-sm text-gray-300">
                      We've sent a copy of your license key to <strong>{result.email}</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">Next Steps</h2>

                <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg p-6 text-left">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF9500] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="w-full">
                      <h3 className="font-semibold text-lg mb-2">Download S2N Navigator</h3>
                      <p className="text-gray-400 text-sm mb-4">
                        Download and install S2N Navigator to get started.
                      </p>
                      <a
                        href="https://downloads.s2n-navigator.com/S2N_Navigator.zip"
                        download
                        className="inline-flex items-center gap-2 bg-[#00C853] hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download S2N Navigator (496 MB)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg p-6 text-left">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF9500] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Activate Your License</h3>
                      <p className="text-gray-400 text-sm">
                        Enter your license key when prompted during installation or in the application settings.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg p-6 text-left">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF9500] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Start Trading</h3>
                      <p className="text-gray-400 text-sm">
                        Explore all features and start building your trading strategies!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-400">
                  Need help? Contact us at{' '}
                  <a href="mailto:support@s2n-navigator.com" className="text-[#FF9500] hover:underline">
                    support@s2n-navigator.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your Free 14-Day Trial
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              Get instant access to all Pro features
            </p>
            <div className="flex items-center justify-center gap-2 text-green-400">
              <CheckCircle size={20} />
              <p className="text-lg font-semibold">No credit card required</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Get Started Now
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-[#FF9500] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  1
                </div>
                <p className="text-sm text-gray-400">Enter your email</p>
              </div>
              <div className="text-center">
                <div className="bg-[#FF9500] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  2
                </div>
                <p className="text-sm text-gray-400">Get your license key</p>
              </div>
              <div className="text-center">
                <div className="bg-[#FF9500] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  3
                </div>
                <p className="text-sm text-gray-400">Start trading</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-base font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#3d3d3d] rounded px-4 py-3 text-base text-white placeholder-gray-600 focus:border-[#FF9500] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-base font-medium mb-2">
                  Name <span className="text-gray-500 text-sm">(optional)</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#3d3d3d] rounded px-4 py-3 text-base text-white placeholder-gray-600 focus:border-[#FF9500] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {error && (
                <div className="bg-red-900/30 border border-red-700 p-4 rounded text-base text-red-400">
                  {error}
                </div>
              )}

              <Button
                variant="primary"
                className="w-full flex items-center justify-center gap-2 py-4 text-lg"
                onClick={handleSubmit}
              >
                {loading ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    <span>Starting Trial...</span>
                  </>
                ) : (
                  <span>Start Free Trial</span>
                )}
              </Button>

              <p className="text-sm text-gray-400 text-center">
                By starting your trial, you agree to our{' '}
                <a href="#terms" className="text-[#FF9500] hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#privacy" className="text-[#FF9500] hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What's Included in Your Trial
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-6">
              <div className="bg-[#FF9500] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Full Feature Access</h3>
              <p className="text-gray-400">
                Access all Pro features including advanced backtesting, AI optimization, and live trading.
              </p>
            </div>

            <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-6">
              <div className="bg-[#FF9500] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">No Limitations</h3>
              <p className="text-gray-400">
                No feature restrictions, no data limits. Experience the full power of S2N Navigator.
              </p>
            </div>

            <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-6">
              <div className="bg-[#FF9500] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Priority Support</h3>
              <p className="text-gray-400">
                Get help when you need it with priority email support throughout your trial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
