export function Disclaimer() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-300">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Software & Automated Trading Disclaimer
        </h1>

        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <div className="bg-[#ff9500] border-l-4 border-[#ff6600] p-6 rounded-r-lg">
            <p className="text-black font-semibold">
              IMPORTANT: Trading involves substantial risk. You may lose some or all of your capital.
              Automated trading can amplify losses. Read this disclaimer carefully before using S2N Navigator.
            </p>
          </div>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Not Financial Advice</h2>
            <p>
              S2N Navigator is provided for research, analysis, and trading automation. It does not provide financial,
              legal, or tax advice, and it does not consider your personal objectives, financial situation, or needs.
              Nothing in the software or its outputs constitutes personalised advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Your Responsibility</h2>
            <p>
              Depending on your configuration and connected integrations, S2N Navigator may generate signals and/or
              transmit orders for execution. Any trading activity occurs only as a result of strategies, rules,
              parameters, and risk controls you configure (or import). You are solely responsible for deciding whether
              to trade, whether to enable automation, and for all outcomes resulting from use of the software.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Hypothetical Performance</h2>
            <p>
              All backtests, simulations, and model outputs are hypothetical and have material limitations. Results
              can change significantly based on data sources, assumptions, parameter choices, survivorship handling,
              transaction cost modelling, slippage, liquidity, latency, market impact, and execution constraints.
              Hypothetical performance does not represent actual trading results and is not indicative of future performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Substantial Risk</h2>
            <p>
              Trading involves substantial risk. You may lose some or all of your capital, and in some instruments
              losses may exceed your initial investment. Automated trading can amplify losses due to rapid order
              placement, compounding errors, connectivity issues, incorrect settings, software bugs, model flaws,
              unexpected market conditions, or third-party outages.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">No Guarantees</h2>
            <p>
              The software, its calculations, AI-generated outputs (if enabled), data feeds, broker/exchange connections,
              and third-party services may contain errors, omissions, delays, inaccuracies, or failures. Accuracy,
              completeness, timeliness, and fitness for purpose are not guaranteed. You must independently validate
              strategies and outputs before relying on them, and you should use appropriate safeguards (e.g., max
              position limits, kill switches, order caps, and monitoring).
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p>
              S2N Navigator is not a broker or exchange. Orders are routed through third-party providers and are
              subject to their rules, availability, and acceptance. Execution is not guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, S2N Navigator and its providers disclaim liability for losses
              or damages arising from use of the software, including (without limitation) trading losses, lost profits,
              data loss, outages, order execution errors, or third-party failures. By using S2N Navigator, you
              acknowledge these risks and accept full responsibility for any actions taken and results obtained.
            </p>
          </section>

          <div className="bg-[#2d2d2d] border border-[#3d3d3d] p-6 rounded-lg mt-8">
            <p className="text-white font-semibold mb-2">By using S2N Navigator, you acknowledge that:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You have read and understood this disclaimer</li>
              <li>You accept all risks associated with trading and automated trading</li>
              <li>You are solely responsible for all trading decisions and outcomes</li>
              <li>You will implement appropriate risk controls and safeguards</li>
              <li>You will independently verify all strategies and outputs</li>
            </ul>
          </div>

          <p className="text-xs text-gray-500 mt-8">
            Last updated: December 16, 2025
          </p>
        </div>
      </div>
    </div>
  );
}
