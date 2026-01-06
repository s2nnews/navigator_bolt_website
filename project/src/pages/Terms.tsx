export function Terms() {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-gray-400 mb-8">Last updated: December 15, 2024</p>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p>
            These Terms and Conditions ("Terms") govern your access to and use of Signal2Noise / S2N Navigator ("the Service"),
            operated by S2N Navigator, the trade name for Michael Berman ABN 71802569760 ("we", "us", "our").
          </p>

          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">1. The Service</h2>
            <p>
              S2N Navigator is a software platform providing analytical tools, research workflows, backtesting capabilities,
              and educational insights related to financial markets.
            </p>
            <p className="font-semibold text-[#FF9500] mt-2">
              The Service does not provide financial advice. All content is for informational and educational purposes only.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">2. Eligibility</h2>
            <p>
              You must be at least 18 years old and legally capable of entering into binding contracts to use the Service.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">3. Account Access</h2>
            <p>
              You are responsible for maintaining the confidentiality of your login credentials and for all activities
              conducted through your account.
            </p>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">4. No Financial Advice Disclaimer</h2>
            <p className="font-semibold">
              The Service does not constitute financial, investment, legal, or tax advice.
            </p>
            <p>You acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Trading and investing involve risk</li>
              <li>Past performance is not indicative of future results</li>
              <li>You are solely responsible for your investment decisions</li>
              <li>You should seek independent professional advice before making any financial decisions</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">5. Intellectual Property</h2>
            <p>
              All content, software, trademarks, methodologies, analytics, and visualizations within the Service are the
              intellectual property of S2N Navigator or its licensors.
            </p>
            <p className="mt-2">You may not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Copy, resell, sublicense, or redistribute the Service</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Use the Service to build competing products</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">6. Subscriptions & Payments</h2>
            <p>
              Payments for subscriptions, licenses, or digital products are processed by Paddle.com, our authorised merchant of record.
            </p>
            <p>
              Prices, billing cycles, and access terms are disclosed at the point of purchase.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">7. Refunds & Cancellations</h2>
            <p>
              Refunds and cancellations are governed by our{' '}
              <a href="#refunds" className="text-[#FF9500] hover:underline">Refund Policy</a>.
            </p>
            <p>
              Where applicable, Paddle's consumer protection obligations will apply.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">8. Availability & Modifications</h2>
            <p>
              We strive to maintain availability but do not guarantee uninterrupted access.
            </p>
            <p>
              We may modify, suspend, or discontinue any part of the Service at any time without liability.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>We are not liable for any indirect, incidental, or consequential damages</li>
              <li>Our total liability shall not exceed the amount paid by you in the previous 12 months</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless S2N Navigator and Michael Berman from any claims arising from your misuse of
              the Service or breach of these Terms.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of New South Wales, Australia, without regard to conflict-of-law principles.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">12. Contact</h2>
            <p>
              For questions about these Terms, contact:<br />
              📧 <a href="mailto:support@s2n-navigator.com" className="text-[#FF9500] hover:underline">support@s2n-navigator.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
