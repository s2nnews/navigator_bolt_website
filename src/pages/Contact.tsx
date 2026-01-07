import { useState } from 'react';
import { Button } from '../components/Button';
import { Mail, MapPin, Loader } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { trackFormSubmission } from '../utils/analytics';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) {
        setSubmitStatus('error');
        console.error('Error:', error);
      } else {
        setSubmitStatus('success');
        trackFormSubmission('Contact Form');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (err) {
      setSubmitStatus('error');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Get in Touch</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Mail className="text-[#FF9500]" size={20} />
                <h3 className="font-semibold text-base md:text-lg">Email</h3>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                <a href="mailto:support@s2n-navigator.com" className="hover:text-[#FF9500] transition-colors break-all">
                  support@s2n-navigator.com
                </a>
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-2">We'll respond within 24 hours</p>
            </div>

            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d]">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <MapPin className="text-[#FF9500]" size={20} />
                <h3 className="font-semibold text-base md:text-lg">Beta Program</h3>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Interested in our beta? Join our waitlist for early access.
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-2">Limited spots available</p>
            </div>

            <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-lg border border-[#3d3d3d] sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Mail className="text-[#FF9500]" size={20} />
                <h3 className="font-semibold text-base md:text-lg">Sales</h3>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                <a href="mailto:sales@s2n-navigator.com" className="hover:text-[#FF9500] transition-colors break-all">
                  sales@s2n-navigator.com
                </a>
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-2">For enterprise inquiries</p>
            </div>
          </div>

          <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm md:text-base font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#3d3d3d] rounded px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-gray-600 focus:border-[#FF9500] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm md:text-base font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#3d3d3d] rounded px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-gray-600 focus:border-[#FF9500] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm md:text-base font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#3d3d3d] rounded px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-gray-600 focus:border-[#FF9500] focus:outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm md:text-base font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#1a1a1a] border border-[#3d3d3d] rounded px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-gray-600 focus:border-[#FF9500] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-900/30 border border-green-700 p-3 md:p-4 rounded text-sm md:text-base text-green-400">
                  Thank you! We've received your message and will get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-900/30 border border-red-700 p-3 md:p-4 rounded text-sm md:text-base text-red-400">
                  Sorry, there was an error submitting your message. Please try again.
                </div>
              )}

              <Button
                variant="primary"
                className="w-full flex items-center justify-center gap-2 py-3 md:py-4"
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <>
                    <Loader size={18} className="md:hidden animate-spin" />
                    <Loader size={20} className="hidden md:block animate-spin" />
                    <span className="text-sm md:text-base">Sending...</span>
                  </>
                ) : (
                  <span className="text-sm md:text-base">Send Message</span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] border-y border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            <div>
              <h3 className="font-semibold text-base md:text-lg mb-2">How quickly do you respond?</h3>
              <p className="text-sm md:text-base text-gray-400">
                We typically respond to support inquiries within 24 hours during business days.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I schedule a demo?</h3>
              <p className="text-gray-400">
                Absolutely! Mention it in your message and we'll set up a time that works for you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Do you have a community forum?</h3>
              <p className="text-gray-400">
                Yes, our community forum is available to all subscribers. Share strategies and learn from other traders.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Is there technical support?</h3>
              <p className="text-gray-400">
                All plans include email support. Pro and Premium plans include priority support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
