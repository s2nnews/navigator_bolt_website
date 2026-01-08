import { useEffect, useState } from 'react';
import { Monitor, Download } from 'lucide-react';
import { Button } from '../components/Button';

type OS = 'windows' | 'macos' | 'unknown';

export function Downloads() {
  const [detectedOS, setDetectedOS] = useState<OS>('unknown');
  const [showInstructions, setShowInstructions] = useState<OS | null>(null);

  useEffect(() => {
    const platform = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();

    if (platform.includes('win') || userAgent.includes('windows')) {
      setDetectedOS('windows');
    } else if (platform.includes('mac') || userAgent.includes('mac')) {
      setDetectedOS('macos');
    }
  }, []);

  return (
    <div className="w-full bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6">
            Download S2N Navigator
          </h1>
          <p className="text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto">
            Thank you for choosing S2N Navigator! Select your operating system below to download.
          </p>
        </div>
      </section>

      {/* Download Cards */}
      <section className="py-12 md:py-16 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Windows Card */}
            <div
              className={`relative bg-[#2d2d2d] rounded-xl p-8 md:p-10 border-2 transition-all hover:transform hover:-translate-y-1 ${
                detectedOS === 'windows'
                  ? 'border-[#FF9500] shadow-lg shadow-[#FF9500]/20'
                  : 'border-[#3d3d3d] hover:border-[#FF9500]/50'
              }`}
            >
              {detectedOS === 'windows' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#FF9500] text-black px-4 py-1 rounded-full text-sm font-bold">
                    Recommended
                  </span>
                </div>
              )}

              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FF9500]/10 rounded-full flex items-center justify-center">
                  <Monitor className="w-10 h-10 md:w-12 md:h-12 text-[#FF9500]" />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Windows</h2>
              <p className="text-gray-400 text-center mb-1">Windows 10/11 (64-bit)</p>
              <p className="text-gray-500 text-sm text-center mb-6">~380 MB</p>

              <a
                href="https://downloads.s2n-navigator.com/releases/S2N_Navigator_Windows.zip"
                className="block w-full"
              >
                <Button
                  variant="primary"
                  className="w-full text-lg py-4 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download for Windows
                </Button>
              </a>

              <button
                onClick={() => setShowInstructions(showInstructions === 'windows' ? null : 'windows')}
                className="w-full mt-4 text-[#FF9500] hover:text-orange-400 text-sm font-semibold transition-colors"
              >
                {showInstructions === 'windows' ? 'Hide' : 'Show'} Installation Instructions
              </button>
            </div>

            {/* macOS Card */}
            <div
              className={`relative bg-[#2d2d2d] rounded-xl p-8 md:p-10 border-2 transition-all hover:transform hover:-translate-y-1 ${
                detectedOS === 'macos'
                  ? 'border-[#FF9500] shadow-lg shadow-[#FF9500]/20'
                  : 'border-[#3d3d3d] hover:border-[#FF9500]/50'
              }`}
            >
              {detectedOS === 'macos' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#FF9500] text-black px-4 py-1 rounded-full text-sm font-bold">
                    Recommended
                  </span>
                </div>
              )}

              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FF9500]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 md:w-12 md:h-12 text-[#FF9500]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09l-.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">macOS</h2>
              <p className="text-gray-400 text-center mb-1">macOS 12+ (Intel & Apple Silicon)</p>
              <p className="text-gray-500 text-sm text-center mb-6">~350 MB</p>

              <a
                href="https://downloads.s2n-navigator.com/releases/S2N_Navigator_macOS.dmg"
                className="block w-full"
              >
                <Button
                  variant="primary"
                  className="w-full text-lg py-4 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download for macOS
                </Button>
              </a>

              <button
                onClick={() => setShowInstructions(showInstructions === 'macos' ? null : 'macos')}
                className="w-full mt-4 text-[#FF9500] hover:text-orange-400 text-sm font-semibold transition-colors"
              >
                {showInstructions === 'macos' ? 'Hide' : 'Show'} Installation Instructions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Instructions */}
      {showInstructions && (
        <section className="py-8 md:py-12 bg-[#0f0f0f]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#2d2d2d] rounded-xl p-6 md:p-8 border border-[#3d3d3d]">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#FF9500]">
                {showInstructions === 'windows' ? 'Windows' : 'macOS'} Installation Instructions
              </h3>

              {showInstructions === 'windows' ? (
                <ol className="space-y-4 text-gray-300">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#FF9500] text-black rounded-full flex items-center justify-center font-bold">
                      1
                    </span>
                    <div>
                      <p className="font-semibold mb-1">Download the ZIP file</p>
                      <p className="text-sm text-gray-400">Click the download button above to get the Windows installer</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#FF9500] text-black rounded-full flex items-center justify-center font-bold">
                      2
                    </span>
                    <div>
                      <p className="font-semibold mb-1">Extract to a folder</p>
                      <p className="text-sm text-gray-400">
                        Extract the ZIP file to your preferred location (e.g., <code className="bg-[#1a1a1a] px-2 py-1 rounded text-[#FF9500]">C:\S2N Navigator</code>)
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#FF9500] text-black rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                    <div>
                      <p className="font-semibold mb-1">Launch the application</p>
                      <p className="text-sm text-gray-400">
                        Double-click <code className="bg-[#1a1a1a] px-2 py-1 rounded text-[#FF9500]">S2N Navigator.exe</code> to start
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#FF9500] text-black rounded-full flex items-center justify-center font-bold">
                      4
                    </span>
                    <div>
                      <p className="font-semibold mb-1">Enter your license key</p>
                      <p className="text-sm text-gray-400">When prompted, enter the license key you received via email</p>
                    </div>
                  </li>
                </ol>
              ) : (
                <ol className="space-y-4 text-gray-300">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#FF9500] text-black rounded-full flex items-center justify-center font-bold">
                      1
                    </span>
                    <div>
                      <p className="font-semibold mb-1">Download the DMG file</p>
                      <p className="text-sm text-gray-400">Click the download button above to get the macOS installer</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#FF9500] text-black rounded-full flex items-center justify-center font-bold">
                      2
                    </span>
                    <div>
                      <p className="font-semibold mb-1">Install the application</p>
                      <p className="text-sm text-gray-400">Open the DMG file and drag S2N Navigator to your Applications folder</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#FF9500] text-black rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                    <div>
                      <p className="font-semibold mb-1">Bypass Gatekeeper (first time only)</p>
                      <p className="text-sm text-gray-400">
                        Right-click the app in Applications and select "Open" to bypass macOS security warnings
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#FF9500] text-black rounded-full flex items-center justify-center font-bold">
                      4
                    </span>
                    <div>
                      <p className="font-semibold mb-1">Enter your license key</p>
                      <p className="text-sm text-gray-400">When prompted, enter the license key you received via email</p>
                    </div>
                  </li>
                </ol>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-12 md:py-16 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-[#2d2d2d] rounded-xl p-8 border border-[#3d3d3d]">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-gray-400 mb-6">
              If you encounter any issues during installation or have questions about using S2N Navigator, our support team is here to help.
            </p>
            <a
              href="mailto:support@s2n-navigator.com"
              className="inline-flex items-center gap-2 text-[#FF9500] hover:text-orange-400 font-semibold text-lg transition-colors"
            >
              support@s2n-navigator.com
            </a>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 md:py-16 bg-[#0f0f0f] border-t border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">System Requirements</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#2d2d2d] rounded-lg p-6 border border-[#3d3d3d]">
              <h4 className="text-xl font-semibold mb-4 text-[#FF9500]">Windows</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#FF9500]">•</span>
                  <span>Windows 10 or Windows 11 (64-bit)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FF9500]">•</span>
                  <span>8 GB RAM minimum (16 GB recommended)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FF9500]">•</span>
                  <span>2 GB free disk space</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FF9500]">•</span>
                  <span>Internet connection required</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2d2d2d] rounded-lg p-6 border border-[#3d3d3d]">
              <h4 className="text-xl font-semibold mb-4 text-[#FF9500]">macOS</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#FF9500]">•</span>
                  <span>macOS 12 (Monterey) or later</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FF9500]">•</span>
                  <span>8 GB RAM minimum (16 GB recommended)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FF9500]">•</span>
                  <span>2 GB free disk space</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FF9500]">•</span>
                  <span>Internet connection required</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
