import { useState } from 'react';
import { Button } from '../components/Button';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { trackFormSubmission } from '../utils/analytics';

export function Testers() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full">
      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="inline-block bg-[#FF9500] text-black font-bold px-4 py-2 rounded-full text-sm">
                LIMITED TO 20 SEATS
              </div>
              <div className="inline-block bg-[#2d2d2d] text-white font-semibold px-4 py-2 rounded-full text-sm border border-[#3d3d3d]">
                HIGH COMMITMENT
              </div>
              <div className="inline-block bg-[#2d2d2d] text-white font-semibold px-4 py-2 rounded-full text-sm border border-[#3d3d3d]">
                IMMEDIATE START
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              S2N Navigator: Pre-Launch Tester Program
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              We're opening a very small pre-launch testing group for S2N Navigator — the world's first backtesting framework with built-in bias detection.
            </p>
            <p className="text-lg md:text-xl text-gray-400">
              If you're a systematic trader, quant, or portfolio builder and you want early access before our <strong className="text-[#FF9500]">23 December release</strong>, you can apply for one of 20 tester seats.
            </p>
          </div>

          <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What Testers Receive</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="text-[#FF9500] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">Early access to core Navigator features</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-[#FF9500] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">Direct communication with the founder (Michael Berman, PhD)</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-[#FF9500] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">Influence over product refinements</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-[#FF9500] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">Priority access at launch</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-[#FF9500] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">Private tester-only channel (Discord/WhatsApp/Slack — your choice)</p>
              </div>
            </div>
          </div>

          <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Require</h2>
            <p className="text-gray-400 mb-4">To keep quality high, testers must be:</p>
            <div className="space-y-3 text-gray-300">
              <p className="flex gap-2">
                <span className="text-[#FF9500]">→</span>
                <span>Active quant/systematic traders</span>
              </p>
              <p className="flex gap-2">
                <span className="text-[#FF9500]">→</span>
                <span>Able to provide feedback weekly</span>
              </p>
              <p className="flex gap-2">
                <span className="text-[#FF9500]">→</span>
                <span>Comfortable using early-stage software</span>
              </p>
              <p className="flex gap-2">
                <span className="text-[#FF9500]">→</span>
                <span>Willing to complete a short qualification form</span>
              </p>
            </div>
            <p className="text-gray-400 mt-6 italic">
              We reserve the right to approve, decline, or remove testers at our discretion.
            </p>
          </div>

          <div className="bg-[#2d2d2d] border border-[#FF9500] rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Important Expectations</h2>
            <div className="space-y-3 text-gray-300">
              <div className="flex gap-3">
                <AlertCircle className="text-[#FF9500] flex-shrink-0 mt-1" size={20} />
                <p>This is <strong>early-stage software</strong> — bugs and issues are expected</p>
              </div>
              <div className="flex gap-3">
                <AlertCircle className="text-[#FF9500] flex-shrink-0 mt-1" size={20} />
                <p>Your feedback directly influences the final product</p>
              </div>
              <div className="flex gap-3">
                <AlertCircle className="text-[#FF9500] flex-shrink-0 mt-1" size={20} />
                <p><strong>Inactivity may result in removal</strong> to keep the cohort engaged and productive</p>
              </div>
              <div className="flex gap-3">
                <AlertCircle className="text-[#FF9500] flex-shrink-0 mt-1" size={20} />
                <p>This program is <strong>confidential</strong> — please don't share features publicly yet</p>
              </div>
              <div className="flex gap-3">
                <AlertCircle className="text-[#FF9500] flex-shrink-0 mt-1" size={20} />
                <p>We reserve the right to approve, decline, or remove testers at our discretion</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="primary"
              className="text-lg px-12 py-4"
              onClick={() => setShowForm(true)}
            >
              Join the Tester Waitlist
            </Button>
            <p className="text-gray-400 text-sm mt-4">
              Applications are reviewed on a rolling basis
            </p>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-lg max-w-2xl w-full my-8">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Tester Program Application</h2>
              <TesterForm onClose={() => setShowForm(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TesterForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    user_type: '',
    markets_traded: [] as string[],
    backtesting_tools: '',
    biggest_problem: '',
    why_interested: '',
    feedback_commitment: '',
    python_experience: '',
    comfortable_early_stage: '',
    preferred_contact: '',
    whatsapp: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      const apiUrl = `${supabaseUrl}/functions/v1/submit-tester-application`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        trackFormSubmission('Tester Application');
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCheckboxChange = (market: string) => {
    setFormData(prev => ({
      ...prev,
      markets_traded: prev.markets_traded.includes(market)
        ? prev.markets_traded.filter(m => m !== market)
        : [...prev.markets_traded, market]
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold mb-2">Full Name *</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-[#2d2d2d] border border-[#3d3d3d] rounded px-4 py-3 focus:outline-none focus:border-[#FF9500]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Email Address *</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-[#2d2d2d] border border-[#3d3d3d] rounded px-4 py-3 focus:outline-none focus:border-[#FF9500]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">What best describes you? *</label>
        <select
          name="user_type"
          required
          value={formData.user_type}
          onChange={handleChange}
          className="w-full bg-[#2d2d2d] border border-[#3d3d3d] rounded px-4 py-3 focus:outline-none focus:border-[#FF9500]"
        >
          <option value="">Select...</option>
          <option value="retail_systematic">Retail systematic trader</option>
          <option value="professional_prop">Professional/prop trader</option>
          <option value="portfolio_quant">Portfolio/quant researcher</option>
          <option value="algo_developer">Algo developer</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">What markets do you trade? *</label>
        <div className="space-y-2">
          {['FX', 'Futures', 'Indices', 'Crypto', 'Equities'].map(market => (
            <label key={market} className="flex items-center gap-2 text-gray-300">
              <input
                type="checkbox"
                checked={formData.markets_traded.includes(market)}
                onChange={() => handleCheckboxChange(market)}
                className="w-4 h-4 bg-[#2d2d2d] border border-[#3d3d3d] rounded"
              />
              {market}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">What tools/backtesting frameworks have you used before? *</label>
        <textarea
          name="backtesting_tools"
          required
          rows={3}
          value={formData.backtesting_tools}
          onChange={handleChange}
          className="w-full bg-[#2d2d2d] border border-[#3d3d3d] rounded px-4 py-3 focus:outline-none focus:border-[#FF9500]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">What is your biggest problem with backtesting today? *</label>
        <textarea
          name="biggest_problem"
          required
          rows={4}
          value={formData.biggest_problem}
          onChange={handleChange}
          className="w-full bg-[#2d2d2d] border border-[#3d3d3d] rounded px-4 py-3 focus:outline-none focus:border-[#FF9500]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Why do you want early access to S2N Navigator? *</label>
        <textarea
          name="why_interested"
          required
          rows={4}
          value={formData.why_interested}
          onChange={handleChange}
          className="w-full bg-[#2d2d2d] border border-[#3d3d3d] rounded px-4 py-3 focus:outline-none focus:border-[#FF9500]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Can you commit to providing 1-2 pieces of feedback per week? *</label>
        <select
          name="feedback_commitment"
          required
          value={formData.feedback_commitment}
          onChange={handleChange}
          className="w-full bg-[#2d2d2d] border border-[#3d3d3d] rounded px-4 py-3 focus:outline-none focus:border-[#FF9500]"
        >
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">How experienced are you with Python? *</label>
        <select
          name="python_experience"
          required
          value={formData.python_experience}
          onChange={handleChange}
          className="w-full bg-[#2d2d2d] border border-[#3d3d3d] rounded px-4 py-3 focus:outline-none focus:border-[#FF9500]"
        >
          <option value="">Select...</option>
          <option value="none">None</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Are you comfortable using an early-stage version and reporting issues? *</label>
        <select
          name="comfortable_early_stage"
          required
          value={formData.comfortable_early_stage}
          onChange={handleChange}
          className="w-full bg-[#2d2d2d] border border-[#3d3d3d] rounded px-4 py-3 focus:outline-none focus:border-[#FF9500]"
        >
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">If selected, what's the best way to contact you? *</label>
        <select
          name="preferred_contact"
          required
          value={formData.preferred_contact}
          onChange={handleChange}
          className="w-full bg-[#2d2d2d] border border-[#3d3d3d] rounded px-4 py-3 focus:outline-none focus:border-[#FF9500]"
        >
          <option value="">Select...</option>
          <option value="email">Email</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
      </div>

      {formData.preferred_contact === 'whatsapp' && (
        <div>
          <label className="block text-sm font-semibold mb-2">WhatsApp Number (optional)</label>
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="+1234567890"
            className="w-full bg-[#2d2d2d] border border-[#3d3d3d] rounded px-4 py-3 focus:outline-none focus:border-[#FF9500]"
          />
        </div>
      )}

      <div className="text-xs text-gray-500 border-t border-[#3d3d3d] pt-4">
        <p className="mb-2"><strong>Note:</strong> Submitting this form does not guarantee acceptance.</p>
        <p className="mb-2">We approve testers based on suitability for the cohort.</p>
        <p>We may remove testers at any time due to inactivity, misuse, or breach of instructions.</p>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-900/20 border border-green-500 text-green-400 px-4 py-3 rounded">
          Application submitted successfully! We'll be in touch soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-900/20 border border-red-500 text-red-400 px-4 py-3 rounded">
          There was an error submitting your application. Please try again.
        </div>
      )}

      <div className="flex gap-4">
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="flex-1"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
          disabled={isSubmitting}
          className="flex-1"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
