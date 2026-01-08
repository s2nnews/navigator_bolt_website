import { Button } from '../components/Button';
import { CheckCircle, Copy, Check, AlertCircle, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LicenseData {
  license_key: string;
  email: string;
  license_type: string;
  status: string;
  valid_until: string;
  download_url?: string;
}

export function Success() {
  const [sessionId, setSessionId] = useState<string>('');
  const [licenseData, setLicenseData] = useState<LicenseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const hashParts = window.location.hash.split('?');
    if (hashParts.length > 1) {
      const params = new URLSearchParams(hashParts[1]);
      const id = params.get('session_id');
      if (id) {
        setSessionId(id);
        fetchLicense(id);
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const fetchLicense = async (id: string) => {
    try {
      const response = await fetch(`https://payment.s2n-navigator.com/api/get_license?session_id=${id}`);

      if (!response.ok) {
        throw new Error('Failed to fetch license');
      }

      const data = await response.json();
      setLicenseData(data);
    } catch (err) {
      console.error('Error fetching license:', err);
      setError('Your license is being processed. Please check your email or contact support@s2n-navigator.com');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (licenseData?.license_key) {
      try {
        await navigator.clipboard.writeText(licenseData.license_key);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const handleManageSubscription = () => {
    window.open(import.meta.env.VITE_STRIPE_PORTAL_LOGIN_URL, '_blank');
  };

  return (
    <div className="w-full">
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] min-h-[80vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <CheckCircle size={80} className="text-[#00C853]" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Payment Successful!
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Thank you for subscribing to S2N Navigator. Your payment has been processed successfully.
          </p>

          {loading && (
            <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-8 mb-8">
              <div className="animate-pulse flex flex-col items-center gap-4">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
              </div>
              <p className="text-gray-400 mt-4">Loading your license...</p>
            </div>
          )}

          {error && !loading && (
            <div className="bg-[#2d2d2d] border border-[#FF9500] rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <AlertCircle size={24} className="text-[#FF9500]" />
                <h2 className="text-lg font-semibold text-[#FF9500]">Processing License</h2>
              </div>
              <p className="text-gray-300">{error}</p>
            </div>
          )}

          {licenseData && !loading && (
            <div className="bg-[#2d2d2d] border border-[#00C853] rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#00C853]">Your License Key</h2>

              <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg p-4 mb-4">
                <code className="text-xl md:text-2xl font-mono text-[#FF9500] break-all">
                  {licenseData.license_key}
                </code>
              </div>

              <button
                onClick={copyToClipboard}
                className="bg-[#FF9500] text-black px-6 py-3 rounded font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 mx-auto mb-6"
              >
                {copied ? (
                  <>
                    <Check size={20} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={20} />
                    Copy to Clipboard
                  </>
                )}
              </button>

              <div className="mb-8 -mt-2">
                <a
                  href="https://www.s2n-navigator.com/#downloads"
                  className="bg-gradient-to-r from-[#00C853] to-green-500 text-white px-12 py-6 rounded-xl font-bold text-xl hover:from-green-600 hover:to-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-3 mx-auto shadow-2xl shadow-green-900/60 border-2 border-green-400 max-w-md"
                >
                  <Download size={32} className="animate-bounce" />
                  <div className="flex flex-col items-start">
                    <span>Download S2N Navigator</span>
                  </div>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
                <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">License Type</p>
                  <p className="text-white font-semibold">{licenseData.license_type}</p>
                </div>
                <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Valid Until</p>
                  <p className="text-white font-semibold">{licenseData.valid_until}</p>
                </div>
              </div>

              <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg p-4 mb-6">
                <p className="text-gray-300 text-sm">
                  ✉️ Your license key has also been sent to <span className="text-[#FF9500] font-semibold">{licenseData.email}</span>
                </p>
              </div>

              <div className="bg-[#0f0f0f] border border-[#3d3d3d] rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#FF9500]">Next Steps</h3>
                <ol className="text-left space-y-2 text-gray-300 text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#FF9500] font-semibold">1.</span>
                    <span>Click the green download button above to get S2N Navigator</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF9500] font-semibold">2.</span>
                    <span>Launch the application</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF9500] font-semibold">3.</span>
                    <span>Enter your license key when prompted</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF9500] font-semibold">4.</span>
                    <span>Start building and testing your trading strategies!</span>
                  </li>
                </ol>
              </div>
            </div>
          )}

          {!licenseData && !loading && !error && (
            <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-3 text-[#FF9500]">What happens next?</h2>
              <ul className="text-left space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-[#FF9500]">1.</span>
                  <span>You'll receive a confirmation email with your receipt</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#FF9500]">2.</span>
                  <span>Check your email for download instructions and your license key</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#FF9500]">3.</span>
                  <span>Follow the setup guide to get started with Navigator</span>
                </li>
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              onClick={() => window.location.hash = 'home'}
            >
              Return to Home
            </Button>
            <Button
              variant="secondary"
              onClick={handleManageSubscription}
            >
              Manage Subscription
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
