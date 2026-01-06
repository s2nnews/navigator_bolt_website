export function Privacy() {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: December 15, 2024</p>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-lg">
            S2N Navigator, the trade name for Michael Berman ABN 71802569760, respects your privacy.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p>We may collect:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Name, email address, and account details</li>
              <li>Payment information (processed securely by Paddle)</li>
              <li>Usage data and analytics</li>
              <li>Support communications</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">2. How We Use Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide and improve the Service</li>
              <li>Process payments and subscriptions</li>
              <li>Communicate product updates</li>
              <li>Ensure platform security and compliance</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">3. Payments</h2>
            <p>
              All payments are handled by Paddle.com, who acts as the merchant of record. We do not store your full payment details.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">4. Data Sharing</h2>
            <p className="font-semibold text-[#FF9500]">We do not sell your data.</p>
            <p className="mt-2">We may share data with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Paddle (payments & compliance)</li>
              <li>Infrastructure providers (hosting, analytics)</li>
              <li>Legal authorities where required by law</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">5. Data Security</h2>
            <p>
              We implement reasonable technical and organisational safeguards, but no system is 100% secure.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access or correct your data</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="mt-3">
              Requests can be sent to:<br />
              📧 <a href="mailto:privacy@s2n-navigator.com" className="text-[#FF9500] hover:underline">privacy@s2n-navigator.com</a>
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">7. Cookies</h2>
            <p>
              We may use cookies or similar technologies to improve user experience and analytics.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">8. Contact</h2>
            <p>
              📧 <a href="mailto:privacy@s2n-navigator.com" className="text-[#FF9500] hover:underline">privacy@s2n-navigator.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
