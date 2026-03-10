import { Callout } from '../Callout';

export function S2NScoreContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 leading-relaxed">
        Most trading platforms score strategies by how good they look.
      </p>
      <p className="text-xl text-gray-300 leading-relaxed">
        Navigator's S2N Score is designed to answer a harder question:
      </p>
      <p className="text-xl text-gray-300 leading-relaxed font-semibold">
        How likely is this strategy to survive outside the backtest?
      </p>
      <p className="text-xl text-gray-300 leading-relaxed">
        The S2N Score is a composite, bias-aware evaluation framework that examines performance through multiple independent lenses — statistical, structural, behavioural, and practical — and combines them into a single confidence assessment.
      </p>
      <p className="text-xl text-gray-300 leading-relaxed">
        It is deliberately sceptical by design.
      </p>

      <h2 id="what-it-is" className="text-3xl font-bold mt-12 mb-6">What the S2N Score Is (and Is Not)</h2>

      <p className="text-gray-300 leading-relaxed">
        The S2N Score is:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>A filter, not a leaderboard</li>
        <li>A probability assessment, not a promise</li>
        <li>A skill evaluation, not a performance advertisement</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        It is built on the assumption that:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Most strategies fail</li>
        <li>Most apparent alpha is actually beta</li>
        <li>Most backtests overstate future performance</li>
        <li>Humans systematically overfit when given too much freedom</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        Navigator embraces these realities rather than ignoring them.
      </p>

      <h2 id="market-philosophy" className="text-3xl font-bold mt-12 mb-6">How the S2N Score Thinks About Markets</h2>

      <p className="text-gray-300 leading-relaxed">
        Navigator is built on three core beliefs:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Markets are mostly random, with only small pockets of persistence</li>
        <li>Alpha is scarce and fragile, even for experienced traders</li>
        <li>Over-engineering destroys robustness faster than it creates edge</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        The S2N Score therefore prioritises:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Longevity over brilliance</li>
        <li>Stability over optimisation</li>
        <li>Survival over spectacle</li>
      </ul>

      <h2 id="five-pillars" className="text-3xl font-bold mt-12 mb-6">The Five Pillars of the S2N Score</h2>

      <p className="text-gray-300 leading-relaxed">
        The S2N Score combines several distinct components. While the exact mathematical weightings are intentionally not disclosed, their relative importance is reflected in how strict each component is.
      </p>

      <h3 id="performance" className="text-2xl font-bold mt-8 mb-4">1. Performance (Dominant Component)</h3>

      <p className="text-gray-300 leading-relaxed">
        At its core, a strategy must actually make money on a risk-adjusted basis.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Navigator evaluates performance using a realistic Sharpe ratio — not a naïve one — after adjusting for:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Expected live degradation</li>
        <li>Regime instability</li>
        <li>Transaction cost impact</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        A strategy that loses money cannot score well, regardless of how elegant or statistically interesting it appears.
      </p>

      <h3 id="statistical-validation" className="text-2xl font-bold mt-8 mb-4">2. Academic & Statistical Validation</h3>

      <p className="text-gray-300 leading-relaxed">
        The S2N Score applies institutional-grade statistical tests to penalise false discovery and multiple testing, including:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Deflated Sharpe Ratio (DSR)</li>
        <li>Probabilistic Sharpe Ratio (PSR)</li>
        <li>Probability of Backtest Overfitting (PBO)</li>
        <li>Bootstrap-based reality checks against randomness</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        These tests are not used to prove alpha — but to disqualify weak evidence.
      </p>

      <Callout type="info" title="Structural Fingerprinting">
        <p>A key innovation is structural fingerprinting:</p>
        <ul className="space-y-1 mt-2">
          <li>Strategies are grouped by structure, not by name</li>
          <li>Testing the same idea repeatedly under different symbols is treated as the same experiment</li>
          <li>All related backtests are re-evaluated when new tests are added</li>
        </ul>
        <p className="mt-2">This prevents "lucky first backtest" bias and silent cherry-picking.</p>
      </Callout>

      <h3 id="robustness" className="text-2xl font-bold mt-8 mb-4">3. Robustness & Regime Awareness</h3>

      <p className="text-gray-300 leading-relaxed">
        Navigator asks whether a strategy survives change, not whether it excels in one environment.
      </p>

      <p className="text-gray-300 leading-relaxed">
        This includes:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>In-sample vs out-of-sample decay</li>
        <li>Stability across volatility and drawdown regimes</li>
        <li>Sensitivity to small parameter changes</li>
        <li>Fragility to transaction costs and execution assumptions</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        Strategies that collapse under small perturbations are penalised, even if peak performance looks strong.
      </p>

      <h3 id="research-integrity" className="text-2xl font-bold mt-8 mb-4">4. Research Integrity & Behavioural Signals</h3>

      <p className="text-gray-300 leading-relaxed">
        The S2N Score explicitly evaluates how a strategy was built.
      </p>

      <p className="text-gray-300 leading-relaxed">
        It penalises:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Excessive parameter tuning</li>
        <li>Optimisation ranges and grid-search behaviour</li>
        <li>Small or cherry-picked symbol universes</li>
        <li>Suspiciously smooth or uniformly positive return streams</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        Navigator also preserves failed experiments. You cannot erase your research history — because failure is data.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Patterns of continual tweaking are treated as evidence, not noise.
      </p>

      <h3 id="realism" className="text-2xl font-bold mt-8 mb-4">5. Realism & Live Translation</h3>

      <p className="text-gray-300 leading-relaxed">
        Backtests do not trade in the real world.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Navigator adjusts expectations by accounting for:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Trading frequency</li>
        <li>Cost drag</li>
        <li>Regime instability</li>
        <li>Path dependency</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        The result is a Realistic Performance Estimate — not a marketing number.
      </p>

      <p className="text-gray-300 leading-relaxed">
        This is the figure that ultimately feeds the performance contribution to the S2N Score.
      </p>

      <h2 id="no-optimisation" className="text-3xl font-bold mt-12 mb-6">Why Navigator Does Not Promote Parameter Optimisation</h2>

      <p className="text-gray-300 leading-relaxed">
        Navigator intentionally avoids traditional optimisation tables.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Not because optimisation is mathematically invalid — but because it creates a powerful cognitive trap.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Large optimisation grids:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Encourage post-hoc selection</li>
        <li>Amplify false confidence</li>
        <li>Reward coincidence over structure</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        Instead, Navigator uses parameter analysis to invalidate fragile strategies, not to discover "best" settings.
      </p>

      <Callout type="warning" title="Fragility indicator">
        <p>A strategy that only works at a narrow point in parameter space is not robust — it is lucky.</p>
      </Callout>

      <h2 id="ratings" className="text-3xl font-bold mt-12 mb-6">Understanding S2N Score Ratings</h2>

      <p className="text-gray-300 leading-relaxed">
        Strategies are grouped into broad confidence tiers:
      </p>

      <div className="space-y-3 my-6">
        <div className="bg-[#2d2d2d] border-l-4 border-yellow-500 p-4">
          <p className="font-semibold text-yellow-500">Gold</p>
          <p className="text-gray-300 text-sm">Strong evidence of robustness and survival potential</p>
        </div>
        <div className="bg-[#2d2d2d] border-l-4 border-gray-400 p-4">
          <p className="font-semibold text-gray-400">Silver</p>
          <p className="text-gray-300 text-sm">Acceptable evidence, with identifiable weaknesses</p>
        </div>
        <div className="bg-[#2d2d2d] border-l-4 border-orange-600 p-4">
          <p className="font-semibold text-orange-600">Bronze</p>
          <p className="text-gray-300 text-sm">Marginal; requires caution and diversification</p>
        </div>
        <div className="bg-[#2d2d2d] border-l-4 border-red-600 p-4">
          <p className="font-semibold text-red-600">Failed</p>
          <p className="text-gray-300 text-sm">Insufficient evidence to justify confidence</p>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed">
        Exact scores matter far less than which tier a strategy consistently belongs to.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Navigator is not optimising for perfection — it is filtering for survivability.
      </p>

      <h2 id="limitations" className="text-3xl font-bold mt-12 mb-6">What the S2N Score Cannot Do</h2>

      <p className="text-gray-300 leading-relaxed">
        The S2N Score does not:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Predict future returns</li>
        <li>Guarantee profitability</li>
        <li>Eliminate uncertainty</li>
        <li>Replace judgment</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        What it does do is dramatically reduce the probability that you are fooling yourself.
      </p>

      <h2 id="core-principle" className="text-3xl font-bold mt-12 mb-6">The Core Principle</h2>

      <p className="text-gray-300 leading-relaxed">
        The S2N Score is built around a single, uncompromising idea:
      </p>

      <Callout type="info" title="The core truth">
        <p className="font-semibold">Optimisation is not evidence of edge.<br />
        Survival under sceptical scrutiny is.</p>
      </Callout>

      <p className="text-gray-300 leading-relaxed">
        Navigator exists to help you trade less fiction and more reality.
      </p>
    </div>
  );
}
