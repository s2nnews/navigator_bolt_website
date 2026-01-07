export function MonitoringStrategyContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <p className="text-gray-400 text-sm mb-6">
        Reading time: 7–9 min | Level: Foundations
      </p>

      <p className="text-lg text-gray-300 mb-6">
        Most traders think monitoring a strategy means watching the P&L.
      </p>

      <p className="text-gray-300 mb-4">
        That's understandable.
      </p>

      <p className="text-gray-300 mb-4">
        P&L is visible. It updates frequently. It triggers emotion.
      </p>

      <p className="text-gray-300 mb-8">
        It's also the least informative signal you have about whether a strategy is behaving as expected.
      </p>

      <p className="text-gray-300 mb-4">
        Monitoring is not about watching money move.
      </p>

      <p className="text-lg font-semibold text-[#FF9500] mb-8">
        It's about watching assumptions fail.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">P&L Is an Outcome, Not a Diagnosis</h2>

      <p className="text-gray-300 mb-4">
        P&L tells you what happened.
      </p>

      <p className="text-gray-300 mb-4">
        It does not tell you:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
        <li>why it happened,</li>
        <li>whether it was expected,</li>
        <li>or whether it should change your behaviour.</li>
      </ul>

      <div className="bg-[#2d2d2d] border-l-4 border-[#FF9500] p-6 rounded-r my-6">
        <p className="text-gray-300 mb-2">A strategy can lose money and still be healthy.</p>
        <p className="text-gray-300">A strategy can make money and already be broken.</p>
      </div>

      <p className="text-gray-300 mb-8">
        If P&L is your primary monitoring signal, you are always reacting late.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">What You Are Actually Monitoring</h2>

      <p className="text-gray-300 mb-4">
        A live strategy is a bundle of assumptions:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
        <li>about market structure,</li>
        <li>about regime persistence,</li>
        <li>about execution quality,</li>
        <li>about volatility,</li>
        <li>about correlation,</li>
        <li>about behaviour under stress.</li>
      </ul>

      <p className="text-gray-300 mb-4">
        Monitoring means checking whether those assumptions are still holding.
      </p>

      <p className="text-gray-300 mb-8">
        That requires looking behind the equity curve.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Drift: The Quiet Failure Mode</h2>

      <p className="text-gray-300 mb-4">
        Most strategies don't fail abruptly.
      </p>

      <p className="text-gray-300 mb-4">
        They drift.
      </p>

      <p className="text-gray-300 mb-4">
        Drift shows up as:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
        <li>declining hit rates,</li>
        <li>longer recovery times,</li>
        <li>changes in trade frequency,</li>
        <li>altered return distributions,</li>
        <li>performance that is "off" but not catastrophic.</li>
      </ul>

      <p className="text-gray-300 mb-4">
        Drift is dangerous because it's easy to rationalise.
      </p>

      <div className="bg-[#2d2d2d] p-6 rounded my-6">
        <p className="text-gray-400 italic mb-2">"It's just variance."</p>
        <p className="text-gray-400 italic mb-2">"It'll come back."</p>
        <p className="text-gray-400 italic">"It always does."</p>
      </div>

      <p className="text-gray-300 mb-4">
        Sometimes that's true.
      </p>

      <p className="text-gray-300 mb-4">
        Sometimes it's the market quietly telling you that the edge has eroded.
      </p>

      <p className="text-lg font-semibold text-[#FF9500] mb-8">
        Monitoring exists to tell the difference.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Monitoring Expectations, Not Just Results</h2>

      <p className="text-gray-300 mb-4">
        A robust backtest implies expectations:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
        <li>expected drawdown ranges,</li>
        <li>expected trade clustering,</li>
        <li>expected volatility,</li>
        <li>expected recovery times.</li>
      </ul>

      <p className="text-gray-300 mb-4">
        Monitoring asks:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
        <li>Are we still inside those expectations?</li>
        <li>If not, how far outside?</li>
        <li>For how long?</li>
      </ul>

      <div className="bg-[#2d2d2d] border-l-4 border-[#FF9500] p-6 rounded-r my-6">
        <p className="text-gray-300 mb-2">A loss within expectation is noise.</p>
        <p className="text-gray-300">A deviation from expectation is information.</p>
      </div>

      <p className="text-gray-300 mb-8">
        Without expectations, every outcome feels ambiguous — and ambiguity leads to poor decisions.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Regime Awareness Without Regime Worship</h2>

      <p className="text-gray-300 mb-4">
        Markets change. Everyone knows that.
      </p>

      <p className="text-gray-300 mb-4">
        The mistake is thinking you can label regimes cleanly and react mechanically.
      </p>

      <p className="text-gray-300 mb-4">
        Monitoring does not require perfect regime detection.
      </p>

      <p className="text-gray-300 mb-4">
        It requires noticing when:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
        <li>volatility behaviour changes,</li>
        <li>correlations compress or explode,</li>
        <li>trends shorten or fragment,</li>
        <li>mean reversion loses depth.</li>
      </ul>

      <p className="text-gray-300 mb-4">
        These are signals, not switches.
      </p>

      <p className="text-gray-300 mb-8">
        Monitoring is about awareness, not prediction.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">When Monitoring Fails</h2>

      <p className="text-gray-300 mb-4">
        Monitoring fails when:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
        <li>everything is reduced to P&L,</li>
        <li>drawdowns are treated as verdicts,</li>
        <li>and intervention decisions are emotional rather than structural.</li>
      </ul>

      <p className="text-gray-300 mb-4">
        That's how traders:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
        <li>turn temporary drawdowns into permanent mistakes,</li>
        <li>abandon strategies at the worst time,</li>
        <li>and double down when they shouldn't.</li>
      </ul>

      <p className="text-gray-300 mb-4">
        Good monitoring doesn't prevent losses.
      </p>

      <p className="text-lg font-semibold text-[#FF9500] mb-8">
        It prevents confusion.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Point</h2>

      <p className="text-gray-300 mb-4">
        You don't monitor strategies to feel in control.
      </p>

      <p className="text-gray-300 mb-4">
        You monitor them to stay oriented.
      </p>

      <p className="text-lg text-gray-300">
        Because the real danger in live trading is not loss.
      </p>

      <p className="text-xl font-semibold text-[#FF9500] mt-4">
        It's losing your ability to tell whether the system — or you — is the problem.
      </p>
    </div>
  );
}
