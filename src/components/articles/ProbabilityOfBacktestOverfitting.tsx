export function ProbabilityOfBacktestOverfittingContent() {
  return (
    <>
      <p className="text-lg">Most traders worry about whether a strategy will work.</p>
      <p className="text-lg">
        Very few worry about <strong>why they chose it in the first place</strong>.
      </p>
      <p className="text-lg">
        That omission is costly. Because the most dangerous risk in backtesting is not volatility.
        It's <strong>selection</strong>.
      </p>

      <h2 id="the-problem" className="text-3xl font-bold text-white mt-16 mb-6">
        The Problem No One Wants to Quantify
      </h2>
      <p>Backtesting workflows almost always follow the same pattern:</p>
      <ol className="space-y-3 my-8 list-decimal list-inside">
        <li>Generate ideas</li>
        <li>Test variations</li>
        <li>Keep the best</li>
        <li>Discard the rest</li>
      </ol>
      <p>
        By the time a strategy is "chosen", it has already survived multiple rounds of rejection.
        That survival is not evidence of skill. It's evidence of <strong>selection pressure</strong>.
      </p>
      <p>
        The Probability of Backtest Overfitting (PBO) exists to quantify exactly how dangerous that selection process was.
      </p>

      <h2 id="what-pbo-measures" className="text-3xl font-bold text-white mt-16 mb-6">
        What PBO Is Actually Measuring
      </h2>
      <p>PBO asks a blunt question:</p>
      <blockquote className="border-l-4 border-[#FF9500] pl-6 my-8 text-gray-300 italic">
        <p>Given how I searched, how likely is it that I selected a strategy that won by chance?</p>
      </blockquote>
      <p>
        Conceptually, it works by repeatedly splitting data into in-sample and out-of-sample segments,
        selecting the "best" strategy in-sample, and observing how often that winner fails out-of-sample.
      </p>
      <p>
        If in-sample winners frequently become out-of-sample losers, selection — not edge — is driving the result.
        PBO turns that observation into a probability.
      </p>

      <h2 id="how-it-works" className="text-3xl font-bold text-white mt-16 mb-6">
        Why This Is More Honest Than Most Metrics
      </h2>
      <p>
        Sharpe Ratio tells you how good something looks <em>after</em> selection.
      </p>
      <p>
        PBO tells you how dangerous the selection process itself was.
      </p>
      <p>
        A high-performing strategy with a high PBO is not impressive.
        It's suspicious.
      </p>

      <h2 id="why-its-honest" className="text-3xl font-bold text-white mt-16 mb-6">
        What High PBO Actually Means
      </h2>
      <p>
        A high Probability of Backtest Overfitting doesn't mean the strategy is useless or that it will definitely fail.
      </p>
      <p>It means:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>you had many chances to fool yourself</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and you probably did</span>
        </li>
      </ul>
      <p>It's a warning label, not a verdict.</p>

      <h2 id="interpreting-high-pbo" className="text-3xl font-bold text-white mt-16 mb-6">
        Why PBO Is Rarely Used in Practice
      </h2>
      <p>Because it's inconvenient.</p>
      <p>
        PBO reduces the number of "good" strategies, undermines optimisation-driven workflows,
        and forces researchers to confront how much searching they did.
      </p>
      <p>
        Most tools are designed to help users <em>find</em> strategies.
        Very few are designed to tell users:
      </p>
      <blockquote className="border-l-4 border-[#FF9500] pl-6 my-8 text-gray-300 italic">
        <p>You shouldn't trust this one.</p>
      </blockquote>
      <p>That's not an accident.</p>

      <h2 id="why-rare" className="text-3xl font-bold text-white mt-16 mb-6">
        How PBO Changes Research Behaviour
      </h2>
      <p>Once you measure PBO:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>you stop endlessly tuning parameters</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>you simplify strategy logic</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>you value robustness over sharp peaks</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and you become more selective about what you deploy</span>
        </li>
      </ul>
      <p>It doesn't make research slower. It makes it more honest.</p>

      <h2 id="how-it-changes-research" className="text-3xl font-bold text-white mt-16 mb-6">
        PBO and Confidence
      </h2>
      <p>
        PBO doesn't tell you whether a strategy will make money.
      </p>
      <p>
        It tells you whether your confidence is justified.
      </p>
      <p>
        A strategy with modest performance and low PBO is often a better candidate for capital
        than a dazzling strategy with a high probability of being an artefact.
      </p>

      <h2 id="pbo-and-confidence" className="text-3xl font-bold text-white mt-16 mb-6">
        The Point
      </h2>
      <p>Most strategies fail not because markets change.</p>
      <p>
        They fail because the strategy was chosen <strong>after too much searching</strong>,
        under conditions that made failure inevitable.
      </p>
      <p>
        The Probability of Backtest Overfitting doesn't eliminate that risk.
        It simply makes it visible.
      </p>
      <p>And visibility is the first step toward survival.</p>
    </>
  );
}
