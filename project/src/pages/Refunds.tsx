export function Refunds() {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Refund & Cancellation Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: December 17, 2025</p>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <section className="mt-8 bg-[#2d1a0f] border-l-4 border-[#FF9500] p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-white mb-3">14-Day Refund Policy</h2>
            <p className="mb-4">
              We offer a <span className="text-[#FF9500] font-semibold">14-day money-back guarantee</span> on all S2N Navigator subscriptions and purchases. If you are not satisfied with your purchase for any reason, you may request a full refund within 14 days of your initial purchase date.
            </p>
            <p className="text-sm text-gray-400">
              This policy is in accordance with Paddle's Buyer Terms and applicable consumer protection laws.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">Eligibility for Refunds</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Within 14 Days of Purchase</h3>
                <p>You are eligible for a full refund if:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Your refund request is submitted within 14 days of your initial purchase</li>
                  <li>You purchased directly through our website via Paddle</li>
                  <li>You provide a valid reason for your refund request</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">After 14 Days</h3>
                <p>After the 14-day window:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Refunds are generally not available</li>
                  <li>Exceptional circumstances may be considered at our sole discretion</li>
                  <li>Pro-rated refunds are not offered</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">Subscription Cancellation</h2>
            <p>
              You may cancel your subscription at any time through your account settings or by contacting support.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Cancellation takes effect at the end of your current billing period</li>
              <li>You will retain access to S2N Navigator until the end of the paid period</li>
              <li>No refunds are provided for unused time in the current billing period if cancelled after 14 days</li>
              <li>You will not be charged for subsequent billing periods after cancellation</li>
            </ul>
          </section>

          <section className="mt-8 bg-[#0f0f0f] border border-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">How to Request a Refund</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Contact Support:</strong> Email us at{' '}
                <a href="mailto:support@s2n-navigator.com" className="text-[#FF9500] hover:underline">
                  support@s2n-navigator.com
                </a>
              </li>
              <li>
                <strong>Provide Details:</strong> Include your order number, purchase date, and reason for the refund request
              </li>
              <li>
                <strong>Review Process:</strong> Our team will review your request within 1-2 business days
              </li>
              <li>
                <strong>Refund Processing:</strong> If approved, Paddle will process the refund to your original payment method within 5-10 business days
              </li>
            </ol>
            <p className="mt-4 text-sm text-gray-400">
              Note: All refunds are processed through Paddle, our payment processor, in accordance with their refund policies and procedures.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">Refund Processing</h2>
            <p>Once your refund is approved:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Refunds are issued to the original payment method used for purchase</li>
              <li>Processing time varies by payment method (typically 5-10 business days)</li>
              <li>You will receive a confirmation email from Paddle once the refund is processed</li>
              <li>Your access to S2N Navigator will be terminated upon refund approval</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">Exceptions and Special Cases</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Consumer Protection Laws</h3>
                <p>
                  Where required by applicable consumer protection laws, refunds will be provided in accordance with local regulations, which may override this policy in your jurisdiction.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Technical Issues</h3>
                <p>
                  If you experience technical issues that prevent you from using the software as intended, please contact support immediately. We will work to resolve the issue, and refunds may be considered on a case-by-case basis regardless of the 14-day window.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8 bg-[#2d1a0f] border border-[#FF9500]/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FF9500] mb-3">Important Notes</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#FF9500] mr-2">•</span>
                <span>The 14-day refund period begins on the date of your initial purchase</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9500] mr-2">•</span>
                <span>Refunds are only available for purchases made directly through our website via Paddle</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9500] mr-2">•</span>
                <span>Promotional pricing and discounts are refunded at the amount actually paid</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9500] mr-2">•</span>
                <span>Account access will be immediately revoked upon refund approval</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9500] mr-2">•</span>
                <span>Multiple refund requests or abuse of the refund policy may result in permanent account suspension</span>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">Questions?</h2>
            <p>
              If you have questions about our refund policy or need assistance with a refund request, please contact our support team:
            </p>
            <p className="mt-3">
              <a href="mailto:support@s2n-navigator.com" className="text-[#FF9500] hover:underline font-semibold">
                support@s2n-navigator.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
