import { useState, useEffect } from 'react';
import { Loader, CheckCircle, ArrowRight, Shield, Database, Zap } from 'lucide-react';
import { trackFreeStarted, trackFreeCompleted } from '../utils/analytics';
import { trackFunnelEvent, getLeadAttribution } from '../utils/funnel';
import { assignVariant } from '../utils/experiments';
import { ActivationChecklist } from '../components/ActivationChecklist';
import { supabase } from '../lib/supabase';

const EXPERIMENT = 'free_page_headline';
const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const DEFAULT_COPY = {
  headline: 'Start Free in 30 Seconds',
  subheadline: 'No credit card. Instant access.',
};

export function Free() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [copy, setCopy] = useState(DEFAULT_COPY);
  const [focusTracked, setFocusTracked] = useState(false);

  useEffect(() => {
    trackFreeStarted();
    trackFunnelEvent('landing_view', 'free');

    assignVariant(EXPERIMENT).then((v) => {
      if (v) {
        setCopy({ headline: v.headline, subheadline: v.subheadline });
      }
    });
  }, []);

  const handleFocus = () => {
    if (!focusTracked) {
      trackFunnelEvent('free_form_submit_start', 'free');
      setFocusTracked(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const trimmed = email.trim().toLowerCase();

    if (!EMAIL_RE.test(trimmed)) {
      setError('Invalid email address format.');
      setLoading(false);
      return;
    }

    try {
      const licenseServerUrl = import.meta.env.VITE_LICENSE_SERVER_URL;
      const endpoint = `${licenseServerUrl}/free/start`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, name: name || undefined }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || data.message || 'Something went wrong. Please try again.');
      }

      const attribution = getLeadAttribution();

      await supabase.from('free_signups').insert({
        email: trimmed,
        name: name || null,
        license_key: null,
        valid_until: null,
        status: 'pending',
        utm_source: attribution.utm_source,
        utm_medium: attribution.utm_medium,
        utm_campaign: attribution.utm_campaign,
        session_id: attribution.session_id,
        variant: attribution.variant,
      });

      trackFreeCompleted(trimmed);
      trackFunnelEvent('free_form_submit_success', 'free', { email: trimmed });

      if ((window as any).promotekit?.refer) {
        try {
          (window as any).promotekit.refer(trimmed);
        } catch (err) {
          console.error('Failed to track PromoteKit referral:', err);
        }
      }

      setSuccess(true);
    } catch (err: any) {
      const message = err?.message || 'Something went wrong. Please try again.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="w-full">
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
          <div className="max-w-xl mx-auto px-4">
            <div className="text-center mb-8">
              <CheckCircle className="text-[#00C853] mx-auto mb-4" size={56} />
              <h1 className="text-3xl md:text-4xl font-bold mb-2">You're In!</h1>
              <p className="text-gray-400 text-lg">Check your email for your download link and setup instructions.</p>
              <p className="text-gray-500 text-sm mt-2">
                Don't see it? Check your spam or junk folder.
              </p>
            </div>

            <ActivationChecklist
              onDownloadClick={() => {
                trackFunnelEvent('download_click', 'free_success');
                window.location.href = 'https://www.s2n-navigator.com/#downloads';
              }}
            />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#1a1a1a] via-[#151515] to-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF9500]/5 via-transparent to-transparent opacity-40" />

        <div className="max-w-lg mx-auto px-4 relative">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{copy.headline}</h1>
            <p className="text-gray-400 text-lg">{copy.subheadline}</p>
          </div>

          <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={handleFocus}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-[#FF9500] focus:outline-none focus:ring-1 focus:ring-[#FF9500]/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Name <span className="text-gray-600">(optional)</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-[#FF9500] focus:outline-none focus:ring-1 focus:ring-[#FF9500]/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {error && (
                <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FF9500] text-black py-3.5 rounded-lg font-semibold text-base hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader size={18} className="animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Get Free Access
                    <ArrowRight size={18} />
                  </span>
                )}
              </button>
            </form>

            <p className="mt-4 text-xs text-gray-500 text-center">
              By signing up, you agree to our{' '}
              <a href="#terms" className="text-[#FF9500] hover:underline">Terms</a>{' '}
              and{' '}
              <a href="#privacy" className="text-[#FF9500] hover:underline">Privacy Policy</a>
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Database size={16} className="text-[#00C853] flex-shrink-0" />
              <span>50+ GB of clean, survivorship-bias-free data included</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Zap size={16} className="text-[#00C853] flex-shrink-0" />
              <span>Strategy Builder with Python editor and AI integration</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Shield size={16} className="text-[#00C853] flex-shrink-0" />
              <span>Scientific bias detection and robustness scoring</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
