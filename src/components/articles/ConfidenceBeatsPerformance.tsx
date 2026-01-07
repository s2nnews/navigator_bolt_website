export function ConfidenceBeatsPerformanceContent() {
  return (
    <>
      <p className="text-lg">Most traders say they want performance.</p>
      <p className="text-lg">
        What they actually want is <strong>confidence</strong> — they just mistake one for the other.
      </p>
      <p className="text-lg">
        A beautiful equity curve feels convincing. A high Sharpe Ratio feels reassuring. A strong CAGR feels like proof.
        But none of those tell you how fragile the belief behind the strategy really is.
      </p>
      <p className="text-lg">
        And fragility, not performance, is what usually determines whether a strategy survives.
      </p>

      <h2 id="performance-vs-confidence" className="text-3xl font-bold text-white mt-16 mb-6">
        Performance Is an Output — Confidence Is a Claim
      </h2>
      <p>Performance answers a narrow question:</p>
      <blockquote className="border-l-4 border-[#FF9500] pl-6 my-8 text-gray-300 italic">
        <p>What happened in this backtest?</p>
      </blockquote>
      <p>Confidence answers a different one:</p>
      <blockquote className="border-l-4 border-[#FF9500] pl-6 my-8 text-gray-300 italic">
        <p>How much trust should I place in this result?</p>
      </blockquote>
      <p>
        The mistake most people make is treating performance as if it implicitly answers both.
        It doesn't.
      </p>
      <p>
        A strategy can perform well for reasons that have nothing to do with edge: luck, favourable regimes,
        parameter coincidence, data quirks, or sheer volume of testing.
      </p>
      <p>
        Performance is what you see. Confidence is what you <em>earn</em>.
      </p>

      <h2 id="best-strategy-problem" className="text-3xl font-bold text-white mt-16 mb-6">
        Why the "Best" Strategy Is Often the Worst Choice
      </h2>
      <p>
        When people compare strategies, they usually sort by: highest Sharpe, highest return, lowest drawdown.
        That ranking quietly selects for <strong>selection bias</strong>.
      </p>
      <p>
        Because the best-looking strategy is often the one that benefited most from overfitting,
        cherry-picking, or favourable randomness.
      </p>
      <p>
        In other words, the strategy that rises to the top is frequently the one that had the most help —
        not the most evidence.
      </p>
      <p>
        This is why "top-ranked" strategies so often disappoint.
        They weren't robust. They were lucky.
      </p>

      <h2 id="confidence-drives-behaviour" className="text-3xl font-bold text-white mt-16 mb-6">
        Confidence Determines Behaviour, Not Charts
      </h2>
      <p>Here's the part that rarely gets discussed:</p>
      <p>
        What you <em>believe</em> about a strategy determines how large you size it, how long you stick with it,
        whether you override it, and whether you abandon it at the worst possible time.
      </p>
      <p>If confidence is misplaced, behaviour deteriorates.</p>
      <p>
        You over-allocate to strategies that don't deserve trust. You under-allocate to strategies that do.
        And when things go wrong — as they inevitably do — you don't know whether to stay the course or pull the plug.
      </p>
      <p>That confusion is expensive.</p>

      <h2 id="why-humans-overweight-performance" className="text-3xl font-bold text-white mt-16 mb-6">
        Why Humans Overweight Performance
      </h2>
      <p>
        Humans are visual learners. We respond to smooth curves, upward slopes, clean metrics.
        Confidence, by contrast, is abstract. It doesn't have a shape.
      </p>
      <p>
        So most tools optimise what's easy to display rather than what's hard to measure.
        The result is a research culture that rewards optimisation over validation, cleverness over restraint,
        and beauty over durability.
      </p>

      <h2 id="where-confidence-comes-from" className="text-3xl font-bold text-white mt-16 mb-6">
        What Confidence Actually Comes From
      </h2>
      <p>
        Confidence is not a feeling. It's a property of the research process.
      </p>
      <p>It increases when:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>the hypothesis is clear</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>the degrees of freedom are limited</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>results survive parameter variation</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>performance isn't regime-dependent</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and the strategy remains plausible after accounting for multiple testing</span>
        </li>
      </ul>
      <p>
        None of these guarantee success. But they dramatically reduce the chance that you're lying to yourself.
      </p>

      <h2 id="cost-of-confusion" className="text-3xl font-bold text-white mt-16 mb-6">
        The Cost of Confusing Performance With Confidence
      </h2>
      <p>When confidence is implied rather than measured:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>strategies are oversized</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>leverage creeps in</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and drawdowns become existential events</span>
        </li>
      </ul>
      <p>
        This is why many traders don't just lose money — they lose faith in systematic trading altogether.
      </p>
      <p>
        They didn't fail because systems don't work.
        They failed because they trusted results they didn't earn.
      </p>

      <h2 id="the-point" className="text-3xl font-bold text-white mt-16 mb-6">
        The Point
      </h2>
      <p>Instead of asking:</p>
      <blockquote className="border-l-4 border-[#FF9500] pl-6 my-8 text-gray-300 italic">
        <p>Which strategy performs best?</p>
      </blockquote>
      <p>Ask:</p>
      <blockquote className="border-l-4 border-[#FF9500] pl-6 my-8 text-gray-300 italic">
        <p>Which strategy do I have the strongest reason to believe in?</p>
      </blockquote>
      <p>Performance still matters. It just shouldn't lead the conversation.</p>
      <p>
        In the next article, we'll examine the statistic that directly measures this idea:
        <strong> The Probability of Backtest Overfitting (PBO)</strong>.
      </p>
    </>
  );
}
