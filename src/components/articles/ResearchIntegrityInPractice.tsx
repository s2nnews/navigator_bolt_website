export function ResearchIntegrityInPracticeContent() {
  return (
    <>
      <p className="text-lg">Most people think research integrity is about being honest.</p>
      <p className="text-lg">It isn't.</p>
      <p className="text-lg">
        Research integrity is about building a workflow that stays honest even when you're excited, even when results look good, and even when you want the strategy to work.
      </p>
      <p className="text-lg">Because when you backtest, you're not battling the market.</p>
      <p className="text-lg">You're battling your own ability to rationalise.</p>
      <p className="text-lg">
        This article is a practical checklist. It's not exhaustive, but it's enough to dramatically reduce self-deception.
      </p>

      <h2 id="why-this-matters" className="text-3xl font-bold text-white mt-16 mb-6">1) Why this matters</h2>
      <p>A strategy doesn't fail in live trading because the backtest was "wrong".</p>
      <p>It fails because the backtest was too easy to win.</p>
      <p>Most backtests reward:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>over-specific rules,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>fragile parameter choices,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>convenient date ranges,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and "improvements" that are actually just noise-fitting.</span>
        </li>
      </ul>
      <p>Your job is to make winning harder.</p>
      <p>If the strategy still wins, it's worth taking seriously.</p>

      <h2 id="workflow-not-morals" className="text-3xl font-bold text-white mt-16 mb-6">2) This is a workflow problem, not a morals problem</h2>
      <p>You can be intelligent, diligent, and sincere — and still produce a backtest that's basically a hallucination.</p>
      <p>Because the standard research loop is biased:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Try something</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>It doesn't work</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Adjust</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Repeat</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Keep the best</span>
        </li>
      </ul>
      <p>That loop is not "science". It's survival bias.</p>
      <p>So the fix isn't more discipline.</p>
      <p>The fix is structure.</p>

      <h2 id="define-the-hypothesis" className="text-3xl font-bold text-white mt-16 mb-6">3) Start by defining the hypothesis (in plain English)</h2>
      <p>Before you touch parameters, write the thesis in one sentence:</p>
      <p className="italic text-gray-400">"This strategy works because ______."</p>
      <p>Examples:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>"Momentum persists because trends are slow to reverse."</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>"Mean reversion works because short-term moves overshoot."</span>
        </li>
      </ul>
      <p>If you can't articulate the thesis, you're probably fitting shapes.</p>
      <p>
        Then write what would invalidate it. If you never define a falsification condition, you're not testing — you're browsing.
      </p>

      <h2 id="reduce-degrees-of-freedom" className="text-3xl font-bold text-white mt-16 mb-6">4) Reduce degrees of freedom (the hidden killer)</h2>
      <p>Most overfitting is just excessive freedom.</p>
      <p>Each freedom is a lever:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>entry rule variants</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>exit rule variants</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>filters</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>universe selection</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>timeframe selection</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>execution assumptions</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>rebalancing schedules</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>risk sizing rules</span>
        </li>
      </ul>
      <p>Every lever you add multiplies the chance you'll "discover" performance by accident.</p>
      <p>A strong workflow forces you to earn complexity:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Start with the simplest viable rule-set.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Add one lever at a time.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Document what changed and why.</span>
        </li>
      </ul>
      <p>If you can't explain the necessity of a rule, it's probably a patch.</p>

      <h2 id="separate-in-sample-and-out-of-sample" className="text-3xl font-bold text-white mt-16 mb-6">5) Separate in-sample vs out-of-sample (properly)</h2>
      <p>Most people do this badly.</p>
      <p>They "hold out" a tiny period at the end, then keep peeking at it.</p>
      <p>Once you peek, it's contaminated.</p>
      <p>A cleaner approach:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Pick an in-sample period where you do development.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Lock the strategy logic.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Test on out-of-sample without changing rules.</span>
        </li>
      </ul>
      <p>If you revise after OOS, you're back in selection bias territory. That doesn't mean revisions are forbidden — it means you need a new OOS.</p>

      <h2 id="parameter-sensitivity" className="text-3xl font-bold text-white mt-16 mb-6">6) Parameter sensitivity (fragility check)</h2>
      <p>A strategy that only works at one parameter is not a strategy.</p>
      <p>It's a coincidence.</p>
      <p>A basic robustness test:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Sweep the key parameters.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Look for a plateau, not a spike.</span>
        </li>
      </ul>
      <p>If performance collapses when you move a lookback from 60 to 65 days, you're not measuring edge — you're measuring sensitivity.</p>
      <p>A robust strategy tolerates small mistakes.</p>
      <p>If it can't survive your own imprecision, it won't survive the market.</p>

      <h2 id="regime-fragility" className="text-3xl font-bold text-white mt-16 mb-6">7) Regime fragility (the "it worked… until it didn't" problem)</h2>
      <p>Backtests often hide that a strategy is basically one regime trade.</p>
      <p>So ask:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Does it rely on one crisis period?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Does it rely on one bull market?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Does it rely on one volatility regime?</span>
        </li>
      </ul>
      <p>The goal isn't "works in all regimes".</p>
      <p>The goal is knowing which regimes it needs, and whether you can identify those regimes in real time.</p>

      <h2 id="monte-carlo-and-path-dependence" className="text-3xl font-bold text-white mt-16 mb-6">8) Monte Carlo & path dependence (sequence matters)</h2>
      <p>Two strategies can have the same CAGR and Sharpe — and completely different fragility.</p>
      <p>If you reshuffle trades or returns:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>does the strategy still look survivable?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>do drawdowns explode?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>does it depend on lucky sequencing?</span>
        </li>
      </ul>
      <p>If the strategy only works with the historical order of events, you're closer to storytelling than research.</p>

      <h2 id="multiple-testing-and-deflation" className="text-3xl font-bold text-white mt-16 mb-6">9) Multiple testing requires deflation (otherwise you're lying to yourself)</h2>
      <p>Every time you test another variation, you inflate the odds of finding a winner by chance.</p>
      <p>This is why naive Sharpe ratios are so dangerous: they ignore the graveyard.</p>
      <p>A serious workflow needs some mechanism to account for:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>how many attempts were made,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>how similar those attempts were,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>how easy it was to "find" the result.</span>
        </li>
      </ul>
      <p>This is exactly why "deflation" exists (i.e., adjusting confidence for data snooping / multiple testing).</p>

      <h2 id="cherry-picking-and-fingerprinting" className="text-3xl font-bold text-white mt-16 mb-6">10) Cherry-picking is mostly invisible — unless you make it visible</h2>
      <p>The sneakiest version of cherry-picking is cross-asset shopping:</p>
      <p>You test the same idea across markets until one looks great.</p>
      <p>That's not diversification. That's selection.</p>
      <p>
        A robust process treats "same structure, different asset class" as one research attempt, not ten different "strategies".
      </p>
      <p>
        This is the only way to prevent "try until it works" behaviour from masquerading as evidence.
      </p>
      <p>
        (And it's why structural fingerprinting matters: grouping similar strategies so you can't game the research loop by making superficial changes.)
      </p>

      <h2 id="minimum-viable-evidence" className="text-3xl font-bold text-white mt-16 mb-6">11) Minimum viable evidence (what "good enough" looks like)</h2>
      <p>You're not trying to prove certainty.</p>
      <p>You're trying to build enough evidence that you're not just chasing noise.</p>
      <p>A sane threshold looks like:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>The thesis makes sense.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>The strategy works across a range of parameters (plateau).</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>The results survive basic regime segmentation.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>The confidence doesn't collapse when you account for multiple testing.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>The strategy doesn't depend on one lucky period.</span>
        </li>
      </ul>
      <p>If it passes those, you have something worth paper trading, forward testing, and slowly scaling.</p>
      <p>If it fails those, you have something interesting — but not investable.</p>

      <h2 id="the-point" className="text-3xl font-bold text-white mt-16 mb-6">12) The point</h2>
      <p>The goal of research integrity is not to make backtesting harder for fun.</p>
      <p>It's to stop you from confusing:</p>
      <p className="text-center text-lg my-6">a beautiful curve</p>
      <p className="text-center text-lg my-6">with</p>
      <p className="text-center text-lg my-6">a robust process.</p>
      <p>Most people don't lose money because they're stupid.</p>
      <p>They lose money because they trusted results they didn't earn.</p>
      <p className="text-lg pb-12">
        In the next article, we'll cover the most common silent killer of all: survivorship bias — why it makes mediocre strategies look brilliant, and how to detect it before it blows up your confidence.
      </p>
    </>
  );
}
