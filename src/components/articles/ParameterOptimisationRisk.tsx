import { Callout } from '../Callout';

export function ParameterOptimisationRiskContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 leading-relaxed">
        Most modern backtesting platforms place parameter optimisation at the centre of system development. They generate large grids of parameter combinations, display extensive tables of performance statistics, and implicitly encourage users to select the "best" result.
      </p>
      <p className="text-xl text-gray-300 leading-relaxed">
        Navigator takes a deliberately different view.
      </p>
      <p className="text-xl text-gray-300 leading-relaxed">
        This is not because optimisation is mathematically invalid — but because the way optimisation is commonly used is structurally incompatible with how real markets behave and how humans make decisions.
      </p>
      <p className="text-xl text-gray-300 leading-relaxed">
        This article explains why.
      </p>

      <h2 id="illusion-of-precision" className="text-3xl font-bold mt-12 mb-6">The Illusion of Scientific Precision</h2>

      <p className="text-gray-300 leading-relaxed">
        At first glance, parameter optimisation looks rigorous:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Exhaustive searches</li>
        <li>Large datasets</li>
        <li>Detailed performance metrics</li>
        <li>Apparent objectivity</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        But in practice, optimisation tables introduce a powerful and often invisible bias:
        the human tendency to select outcomes after the fact.
      </p>

      <p className="text-gray-300 leading-relaxed">
        When presented with hundreds or thousands of results, most users — consciously or unconsciously — do the same thing:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>They focus on the highest Sharpe, return, or MAR ratio</li>
        <li>They rationalise drawdowns once a result looks attractive</li>
        <li>They ignore how fragile the solution is to regime change</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        This is not misuse.<br />
        It is how humans interact with information.
      </p>

      <p className="text-gray-300 leading-relaxed">
        The more degrees of freedom a system exposes, the easier it becomes to mistake luck for structure.
      </p>

      <h2 id="best-parameters-red-flag" className="text-3xl font-bold mt-12 mb-6">Why "Best Parameters" Are a Red Flag</h2>

      <p className="text-gray-300 leading-relaxed">
        Markets are not static systems with stable optima.
      </p>

      <p className="text-gray-300 leading-relaxed">
        They are:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Regime-dependent</li>
        <li>Path-dependent</li>
        <li>Mostly random, with only small pockets of persistence</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        If a strategy requires precise parameter tuning to perform well, that is not evidence of robustness — it is evidence of coincidence.
      </p>

      <p className="text-gray-300 leading-relaxed">
        In live trading:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Parameters drift out of alignment</li>
        <li>Market regimes change</li>
        <li>Distributions shift</li>
        <li>Execution realities intervene</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        A strategy that only works at a narrow point in parameter space is unlikely to survive these forces.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Navigator therefore treats sharp performance peaks as a warning signal, not an achievement.
      </p>

      <h2 id="optimisation-inversion" className="text-3xl font-bold mt-12 mb-6">Optimisation in Navigator: Inversion, Not Elimination</h2>

      <p className="text-gray-300 leading-relaxed">
        Navigator does not reject parameter analysis outright.<br />
        It inverts its purpose.
      </p>

      <Callout type="warning" title="Conventional question">
        <p>"Which parameters work best?"</p>
      </Callout>

      <Callout type="info" title="Navigator's question">
        <p>"Does this strategy survive being nudged?"</p>
      </Callout>

      <p className="text-gray-300 leading-relaxed">
        Instead of using optimisation to discover good parameters, Navigator uses it to invalidate fragile strategies.
      </p>

      <p className="text-gray-300 leading-relaxed">
        This distinction is critical.
      </p>

      <h2 id="robustness-over-precision" className="text-3xl font-bold mt-12 mb-6">Robustness Over Precision</h2>

      <p className="text-gray-300 leading-relaxed">
        Navigator evaluates parameter behaviour through the lens of structural stability, not maximisation.
      </p>

      <p className="text-gray-300 leading-relaxed">
        What matters is not whether one parameter set performs exceptionally — but whether many nearby parameter sets perform acceptably.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Navigator looks for:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Broad plateaus of reasonable performance</li>
        <li>Gradual degradation under perturbation</li>
        <li>Stability across long time horizons</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        And actively penalises:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Sharp cliffs</li>
        <li>Narrow peaks</li>
        <li>Performance that collapses under small changes</li>
      </ul>

      <Callout type="success" title="Key principle">
        <p>A wide, mediocre plateau is more valuable than a narrow, spectacular result.</p>
      </Callout>

      <h2 id="avoiding-tables" className="text-3xl font-bold mt-12 mb-6">Why Navigator Avoids Optimisation Tables</h2>

      <p className="text-gray-300 leading-relaxed">
        Large optimisation tables invite post-hoc selection.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Once shown:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>They cannot be "unseen"</li>
        <li>They cannot be interacted with neutrally</li>
        <li>They inevitably encourage cherry-picking</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        Navigator therefore avoids presenting ranked optimisation outputs that encourage goal-seeking behaviour.
      </p>

      <p className="text-gray-300 leading-relaxed">
        This is a design choice rooted in behavioural finance, not ideology.
      </p>

      <h2 id="time-first" className="text-3xl font-bold mt-12 mb-6">Time First, Parameters Second</h2>

      <p className="text-gray-300 leading-relaxed">
        No amount of parameter stability can compensate for insufficient time.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Short backtests dramatically increase the probability of false discovery — especially when combined with parameter search.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Navigator enforces a simple hierarchy:
      </p>

      <ol className="space-y-2 text-gray-300 list-decimal list-inside">
        <li>Time horizon adequacy</li>
        <li>Regime coverage</li>
        <li>Structural robustness</li>
        <li>Only then: parameter sensitivity</li>
      </ol>

      <p className="text-gray-300 leading-relaxed">
        Optimisation cannot rescue a strategy that lacks temporal credibility.
      </p>

      <h2 id="failure-is-data" className="text-3xl font-bold mt-12 mb-6">Failure Is Data — and Navigator Preserves It</h2>

      <p className="text-gray-300 leading-relaxed">
        Unlike many platforms, Navigator does not allow users to erase failed experiments.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Repeated cycles of:
      </p>

      <p className="text-gray-300 leading-relaxed font-mono bg-[#2d2d2d] p-4 rounded">
        Optimise → fail → tweak → retry
      </p>

      <p className="text-gray-300 leading-relaxed">
        Leave a detectable behavioural footprint.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Navigator treats this history as essential information, not noise.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Patterns of continual tweaking are often more informative than any single successful run.
      </p>

      <h2 id="monte-carlo-limits" className="text-3xl font-bold mt-12 mb-6">Monte Carlo and the Limits of Randomisation</h2>

      <p className="text-gray-300 leading-relaxed">
        Navigator deliberately separates:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Signal validation</li>
        <li>Risk and path-dependency analysis</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        Because Navigator assumes that markets may exhibit small, exploitable pockets of price memory, it does not rely on price-order randomisation to validate signals.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Randomising price order destroys the very persistence the strategy is attempting to exploit.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Monte Carlo methods are therefore used where they make sense:
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>Stress-testing drawdowns</li>
        <li>Understanding path risk</li>
        <li>Assessing capital survivability</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        Not for proving the existence of alpha.
      </p>

      <h2 id="core-principle" className="text-3xl font-bold mt-12 mb-6">The Core Principle</h2>

      <p className="text-gray-300 leading-relaxed">
        Navigator is built around a simple but unpopular truth:
      </p>

      <Callout type="info" title="The core truth">
        <p className="font-semibold">Optimisation is not evidence of edge.<br />
        Survival under perturbation is.</p>
      </Callout>

      <p className="text-gray-300 leading-relaxed">
        The goal is not to engineer perfection — but to identify strategies that can endure uncertainty, regime change, and human fallibility.
      </p>

      <p className="text-gray-300 leading-relaxed">
        That is the path to long-term survival and compounding.
      </p>
    </div>
  );
}
