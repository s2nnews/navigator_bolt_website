export function DeflatedSharpeRatioContent() {
  return (
    <>
      <p className="text-lg">Sharpe Ratio is one of the most abused numbers in finance.</p>
      <p className="text-lg">Not because it's wrong. But because it is almost never used in the conditions it assumes.</p>
      <p className="text-lg">
        When traders say, "This strategy has a Sharpe of 1.4", what they usually mean is:
      </p>
      <p className="text-lg italic text-gray-400">"This looks good, and I would like it to be true."</p>
      <p className="text-lg">The Sharpe Ratio doesn't protect you from that impulse. In fact, it quietly rewards it.</p>

      <h2 id="what-sharpe-measures" className="text-3xl font-bold text-white mt-16 mb-6">
        What Sharpe Ratio Actually Measures (and What It Doesn't)
      </h2>
      <p>At its core, Sharpe Ratio is simple:</p>
      <p className="text-center text-lg font-medium text-[#FF9500] my-6">Excess return divided by volatility</p>
      <p>It tells you how much return you earned per unit of risk, assuming:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>returns are independent,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>returns are roughly normally distributed,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and the strategy was not selected from many alternatives.</span>
        </li>
      </ul>
      <p>That last assumption is the one that quietly breaks everything.</p>
      <p>Because in real research workflows, strategies are almost never born in isolation.</p>
      <p>They are selected.</p>

      <h2 id="selection-problem" className="text-3xl font-bold text-white mt-16 mb-6">
        The Selection Problem Sharpe Pretends Doesn't Exist
      </h2>
      <p>Sharpe treats the strategy as if:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>you tested it once,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>it either worked or didn't,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and the result you see is the result you got.</span>
        </li>
      </ul>
      <p>That's not how real research works.</p>
      <p>Real research looks like this:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Try an idea</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Adjust parameters</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Change filters</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Swap universes</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Test variants</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Discard failures</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Keep the best</span>
        </li>
      </ul>
      <p>By the time you're staring at a Sharpe Ratio, the strategy has already survived a gauntlet of rejection.</p>
      <p>Sharpe does not know this. Sharpe does not care.</p>
      <p>It evaluates the winner as if the graveyard didn't exist.</p>

      <h2 id="why-this-matters" className="text-3xl font-bold text-white mt-16 mb-6">
        Why This Matters More Than People Realise
      </h2>
      <p>If you test enough variations, something will eventually look good.</p>
      <p>That doesn't mean you found an edge.</p>
      <p>It means you sampled randomness until it smiled back at you.</p>
      <p>This is why:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>high Sharpe ratios are common in backtests,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>but rare in live trading,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and almost never persistent.</span>
        </li>
      </ul>
      <p>The problem isn't that Sharpe is misleading.</p>
      <p>The problem is that it is incomplete.</p>

      <h2 id="confidence-not-implied" className="text-3xl font-bold text-white mt-16 mb-6">
        Confidence Is Not Implied by Performance
      </h2>
      <p>Here's the critical mistake:</p>
      <p>People treat Sharpe Ratio as a confidence statement.</p>
      <p>They shouldn't.</p>
      <p>A Sharpe of 1.2 after:</p>
      <p className="text-center font-medium my-4">one hypothesis test</p>
      <p>is not the same as a Sharpe of 1.2 after:</p>
      <p className="text-center font-medium my-4">200 hypothesis tests.</p>
      <p>But Sharpe reports them as identical.</p>
      <p>This is where the Deflated Sharpe Ratio enters — not as a replacement, but as a correction.</p>

      <h2 id="what-dsr-does" className="text-3xl font-bold text-white mt-16 mb-6">
        What the Deflated Sharpe Ratio Actually Does
      </h2>
      <p>The Deflated Sharpe Ratio (DSR) asks a better question:</p>
      <p className="italic text-gray-400 my-6">
        Given how much searching you did, how likely is this Sharpe to be real?
      </p>
      <p>It adjusts the observed Sharpe for:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>the number of trials,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>the distribution of Sharpe ratios you could have obtained by chance,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and the probability that the observed result is a false positive.</span>
        </li>
      </ul>
      <p>In plain English:</p>
      <p className="text-xl font-medium text-[#FF9500] my-6">DSR converts performance into confidence.</p>
      <p>Not "how good does this look?" But "how surprised should I be if this were random?"</p>

      <h2 id="why-uncomfortable" className="text-3xl font-bold text-white mt-16 mb-6">
        Why This Is Uncomfortable (and Rarely Used)
      </h2>
      <p>DSR tends to do something people don't like.</p>
      <p>It lowers Sharpe Ratios.</p>
      <p>Sometimes dramatically.</p>
      <p>
        A strategy that looks excellent under naive Sharpe can look merely interesting — or even statistically weak — once
        you account for:
      </p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>multiple testing,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>data snooping,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and selection bias.</span>
        </li>
      </ul>
      <p>This isn't because DSR is pessimistic.</p>
      <p>It's because Sharpe is optimistic by default.</p>

      <h2 id="real-value" className="text-3xl font-bold text-white mt-16 mb-6">The Real Value of Deflation</h2>
      <p>The point of DSR is not to punish creativity.</p>
      <p>It's to prevent false confidence.</p>
      <p>False confidence leads to:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>oversizing,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>leverage,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>emotional attachment,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and refusal to abandon broken ideas.</span>
        </li>
      </ul>
      <p>DSR doesn't tell you whether a strategy will make money.</p>
      <p>Nothing can.</p>
      <p>What it tells you is whether the evidence you've gathered is commensurate with the belief you're forming.</p>
      <p>That's a different — and much more important — question.</p>

      <h2 id="changes-behavior" className="text-3xl font-bold text-white mt-16 mb-6">
        Why This Changes Research Behaviour
      </h2>
      <p>Once you account for deflation:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>fewer strategies "pass",</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>fewer ideas look special,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and optimization becomes more restrained.</span>
        </li>
      </ul>
      <p>That's not a loss.</p>
      <p>It's clarity.</p>
      <p>You stop asking:</p>
      <p className="italic text-gray-400 my-4">"How do I increase Sharpe?"</p>
      <p>And start asking:</p>
      <p className="italic text-[#FF9500] my-4 font-medium">"How do I increase confidence?"</p>
      <p>Those lead to very different research decisions.</p>

      <h2 id="quiet-shift" className="text-3xl font-bold text-white mt-16 mb-6">A Quiet but Crucial Shift</h2>
      <p>Most backtesting tools optimise performance.</p>
      <p>Very few attempt to measure belief quality.</p>
      <p>The Deflated Sharpe Ratio sits in that gap.</p>
      <p>It doesn't make promises. It doesn't sell certainty. It simply refuses to confuse luck with evidence.</p>
      <p>And that refusal, more than any clever metric, is what protects capital.</p>

      <h2 id="the-point" className="text-3xl font-bold text-white mt-16 mb-6">The Point</h2>
      <p>Sharpe Ratio answers a narrow question:</p>
      <p className="italic text-gray-400 my-4">How good does this look?</p>
      <p>The Deflated Sharpe Ratio answers a harder one:</p>
      <p className="italic text-[#FF9500] my-4 font-medium">How likely is it that I'm fooling myself?</p>
      <p>If you care about long-term survival, the second question matters more.</p>
      <p className="text-lg pb-12">
        In the next article, we'll take this one step further and address the statistic that quietly underpins everything
        discussed so far: The Probability of Backtest Overfitting (PBO) — and why it's the most honest number you can ask
        for when deciding whether a strategy deserves capital.
      </p>
    </>
  );
}
