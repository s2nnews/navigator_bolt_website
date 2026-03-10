export function PositionSizingRiskManagementContent() {
  return (
    <>
      <p className="text-xl font-medium">One of the hardest truths for discretionary and macro-oriented traders to accept is this:</p>

      <p className="text-lg">
        Even good traders are right only about half the time.
      </p>

      <p className="text-lg">
        Across directional strategies, long-term win rates of 50–55% are not a failure—they are normal. If your observed win rate is materially higher, it's worth asking whether:
      </p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>The sample size is too small</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>The strategy implicitly sells optionality (e.g. short volatility, carry, or option premium)</span>
        </li>
      </ul>

      <p className="text-lg">
        Strategies that sell optionality often exhibit very high win rates (80–90%+), but they do so by accumulating tail risk. When they fail, they fail catastrophically. High win rates alone are not evidence of robustness.
      </p>

      <p className="text-lg">
        Accepting a ~50% win rate fundamentally changes how you should think about trading.
      </p>

      <p className="text-lg">
        If outcomes are roughly coin-flips, then long-term P&L is dominated not by how often you're right, but by:
      </p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>How much you lose when you're wrong</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>How much you make when you're right</span>
        </li>
      </ul>

      <p className="text-lg">
        This shifts the focus away from prediction and toward position sizing, risk control, and payoff asymmetry.
      </p>

      <h2 id="core-equation" className="text-3xl font-bold text-white mt-16 mb-6">The Core Equation Traders Ignore</h2>

      <p>Year-end performance can be reduced to a simple relationship:</p>

      <p className="text-xl text-[#FF9500] font-medium my-8">
        P&L = Win Rate × Average Win − Loss Rate × Average Loss
      </p>

      <p>If win rates cluster around 50%, then the only levers left are:</p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Controlling the size of losses</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Allowing winners to meaningfully outperform losers</span>
        </li>
      </ul>

      <p>Everything else is secondary.</p>

      <h2 id="structural-pillars" className="text-3xl font-bold text-white mt-16 mb-6">Two Structural Pillars of Robust Trading</h2>

      <p>There are two non-negotiable components to achieving this:</p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] font-semibold mt-1">1.</span>
          <span>Correct position sizing</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] font-semibold mt-1">2.</span>
          <span>A system that allows winners to run</span>
        </li>
      </ul>

      <p>Most trading failures stem from neglecting one—or both—of these.</p>

      <h2 id="pre-trade-checklist" className="text-3xl font-bold text-white mt-16 mb-6">A Practical Pre-Trade Checklist</h2>

      <p>Before implementing any trade, it's useful to separate decision quality from execution mechanics.</p>

      <p>A robust process typically covers:</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Thesis Validation (Decision Discipline)</h3>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Is the trade based on data, not narrative alone?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Is the time horizon clearly defined?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Does the trade rely on an identifiable catalyst or regime?</span>
        </li>
      </ul>

      <p>These steps reduce emotional decision-making and force rational framing.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Implementation Design (Execution Discipline)</h3>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Is the trade linear or convex, and does that fit the market regime?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Is the carry cost acceptable if nothing happens?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Does this trade duplicate exposure already present elsewhere in the portfolio?</span>
        </li>
      </ul>

      <p>A surprisingly common failure mode is running many trades that are all expressions of the same underlying risk.</p>

      <h2 id="volatility-adjusted-sizing" className="text-3xl font-bold text-white mt-16 mb-6">Volatility-Adjusted Position Sizing</h2>

      <p>Because outcomes are uncertain ex-ante, position sizes should be standardized, not driven by conviction or intuition.</p>

      <p>One effective method is volatility-adjusted sizing, which works as follows:</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Step 1: Define the Risk Window</h3>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Choose a time horizon (e.g. 1 month)</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Choose a stop distance expressed in volatility terms (e.g. 1.5 standard deviations)</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Step 2: Estimate the Expected Move</h3>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Using historical data (e.g. a 5-year lookback), estimate how large a 1.5σ adverse move typically is over that horizon</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Optionally adjust for regime changes or recency bias</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Step 3: Validate with Empirical Data</h3>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Compare theoretical probabilities (assuming normality) with actual historical outcomes</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Markets are rarely perfectly normal—empirical checks matter</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Step 4: Fix the Maximum Loss per Trade</h3>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Decide the maximum percentage of capital you are willing to lose on any single trade (e.g. 1–2% of capital)</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Position size is then chosen such that if the stop is hit, the loss equals that fixed percentage</span>
        </li>
      </ul>

      <p>This ensures that no single trade—regardless of asset volatility—can dominate long-term results.</p>

      <h2 id="why-it-works" className="text-3xl font-bold text-white mt-16 mb-6">Why Volatility-Adjusted Sizing Works</h2>

      <p>This approach has three major advantages:</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. It Removes "Volatility Luck"</h3>

      <p>Equal nominal sizing means volatile assets dominate outcomes by chance. Volatility-adjusted sizing neutralizes this effect.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. It Ignores False Conviction</h3>

      <p>Before a trade plays out, you don't know whether it will fall into the "right" or "wrong" half of outcomes. Oversizing based on confidence is statistically unjustified.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. It's Universally Applicable</h3>

      <p>This framework works across:</p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Timeframes (intraday to macro)</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Asset classes</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Linear and derivative instruments</span>
        </li>
      </ul>

      <p>Only the parameters change—not the logic.</p>

      <h2 id="making-money" className="text-3xl font-bold text-white mt-16 mb-6">Making Money with a 50% Win Rate</h2>

      <p>Risk control alone doesn't generate profits. To compound capital, payoff asymmetry is essential.</p>

      <p>There are two key components:</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Asymmetric Targets</h3>

      <p>If stops are set at −1σ, profit targets must be meaningfully larger than +1σ to generate positive expectancy at a 50% win rate.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Letting Winners Run</h3>

      <p>Most professional traders do not make money evenly across all trades.</p>

      <p>It's common for:</p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>2–3 exceptional trades per year</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>To account for the majority of annual profits</span>
        </li>
      </ul>

      <p>This requires a structure that does not cap upside prematurely.</p>

      <h2 id="trailing-framework" className="text-3xl font-bold text-white mt-16 mb-6">A Simple Trailing Framework</h2>

      <p>One practical approach is volatility-based trailing:</p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span><strong className="text-white">Initial stop:</strong> −1σ</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span><strong className="text-white">First target:</strong> +1.5σ</span>
        </li>
      </ul>

      <p>When the first target is reached:</p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Do not take profits</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Move the stop to breakeven</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Extend the target (e.g. +2.5σ)</span>
        </li>
      </ul>

      <p>If the trade continues:</p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Raise both stop and target in volatility increments</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Lock in gains while preserving convexity</span>
        </li>
      </ul>

      <p>This ensures losers remain small while winners are allowed to compound.</p>

      <h2 id="summary" className="text-3xl font-bold text-white mt-16 mb-6">A Sensible Trading Framework, Summarized</h2>

      <p>A robust, trader-agnostic approach looks like this:</p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Accept that you'll be right only about half the time</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Improve odds marginally through data, structure, and discipline</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Standardize risk via volatility-adjusted sizing</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Respect stops without exception</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Design exits that allow rare winners to dominate results</span>
        </li>
      </ul>

      <p className="text-lg pb-12">
        In the long run, position sizing and risk management—not prediction—define success.
      </p>
    </>
  );
}
