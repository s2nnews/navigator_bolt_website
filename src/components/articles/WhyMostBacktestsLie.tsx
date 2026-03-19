export function WhyMostBacktestsLieContent() {
  return (
    <>
      <p className="text-xl font-medium">Backtests are seductive.</p>

      <p className="text-lg">
        They look scientific. They come with charts, tables, ratios, and decimal points that feel precise. They give us equity curves that slope upward and numbers that suggest competence. To the human brain, a backtest feels like evidence.
      </p>

      <p className="text-xl font-medium">Most of the time, it isn't.</p>

      <p className="text-lg">
        That doesn't mean backtesting is useless. It means it is far easier to misuse than most people realise — and the way the industry has evolved almost guarantees that misuse.
      </p>

      <h2 id="intro" className="text-3xl font-bold text-white mt-16 mb-6">The Seduction of the Backtest</h2>

      <p className="text-lg">
        A backtest tells a story.<br />
        A clean one tells a very comforting story.
      </p>

      <p className="text-lg">
        It says: <em className="text-[#FF9500] not-italic font-medium">this worked</em>, <em className="text-[#FF9500] not-italic font-medium">this is robust</em>, <em className="text-[#FF9500] not-italic font-medium">this deserves capital</em>.
      </p>

      <p className="text-lg">
        The problem is that the story is usually written <strong className="text-white">after</strong> the ending is known.
      </p>

      <p className="text-lg">
        Humans are pattern-seeking. We want coherence, causality, and closure. A backtest provides all three — even when none of them are deserved.
      </p>

      <p className="text-lg">
        This is why intelligent, well-intentioned people routinely fool themselves with backtests without ever lying or cutting corners.
      </p>

      <h2 id="dont-lie" className="text-3xl font-bold text-white mt-16 mb-6">Backtests Don't Lie — We Lie With Backtests</h2>

      <p>The backtesting engine itself is usually innocent.</p>

      <p>The deception happens in the workflow around it:</p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>What gets tested</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>What gets kept</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>What gets discarded</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>What gets remembered</span>
        </li>
      </ul>

      <p>
        Most platforms make it trivially easy to run hundreds of variations and dangerously easy to forget the failures that came before the "winner".
      </p>

      <p>
        The result is not fraud.<br />
        It's <strong className="text-[#FF9500]">selection bias disguised as research</strong>.
      </p>

      <h2 id="cherry-picking" className="text-3xl font-bold text-white mt-16 mb-6">Cherry-Picking: The Quietest and Most Common Failure Mode</h2>

      <p>Cherry-picking doesn't usually look like cheating.</p>

      <p>It looks like curiosity.</p>

      <p>
        You test a strategy with a 50-day lookback.<br />
        Then a 100-day.<br />
        Then 200.<br />
        Then you adjust the exit.<br />
        Then you tweak the universe.<br />
        Then you shorten the date range "just to see".
      </p>

      <p>Eventually, something looks good.</p>

      <p>You keep that result and mentally discard the rest.</p>

      <p>That's cherry-picking.</p>

      <p>
        It doesn't require dishonesty.<br />
        It only requires <strong className="text-[#FF9500]">memory loss</strong>.
      </p>

      <p>Common examples:</p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Testing the same strategy across assets until one shines</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Trying many parameter combinations and keeping the best</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Adjusting start and end dates until drawdowns disappear</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Ignoring strategies that "almost worked"</span>
        </li>
      </ul>

      <p>
        None of this feels wrong in the moment.<br />
        That's precisely the problem.
      </p>

      <h2 id="multiple-testing" className="text-3xl font-bold text-white mt-16 mb-6">Multiple Testing: Why "Trying a Few Variations" Is Statistically Dangerous</h2>

      <p>Every variation you test is a new hypothesis.</p>

      <p>
        The more hypotheses you test, the higher the probability that one of them looks good <strong>by chance alone</strong>.
      </p>

      <p>This isn't controversial. It's basic statistics.</p>

      <p>
        If you flip a fair coin often enough, you will eventually see long streaks of heads. That doesn't make the coin special — it just means you flipped it many times.
      </p>

      <p>Backtests behave the same way.</p>

      <p>
        The catch is that performance metrics like Sharpe Ratio, CAGR, or win rate do not know how many attempts came before them. They treat the surviving strategy as if it appeared fully formed, not selected from a graveyard of failures.
      </p>

      <h2 id="sharpe-ratio" className="text-3xl font-bold text-white mt-16 mb-6">Why Sharpe Ratio Is Easy to Game (And Widely Abused)</h2>

      <p>
        Sharpe Ratio is not evil.<br />
        It's just fragile.
      </p>

      <p>It assumes:</p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Independent returns</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Stable distributions</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>No selection bias</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>No multiple testing</span>
        </li>
      </ul>

      <p>Real backtests violate all of these.</p>

      <p>
        After cherry-picking, Sharpe Ratios are almost guaranteed to be inflated. Smooth equity curves are rewarded, even if that smoothness is an artefact of overfitting.
      </p>

      <p>
        This is why you routinely see implausibly high Sharpe Ratios in marketing material — and why they collapse in live trading.
      </p>

      <p>
        The metric isn't lying.<br />
        It's answering the wrong question.
      </p>

      <h2 id="incentive" className="text-3xl font-bold text-white mt-16 mb-6">The Industry Incentive Problem</h2>

      <p>This persists for a reason.</p>

      <p>
        Clean backtests sell better than honest ones.<br />
        Certainty converts better than nuance.<br />
        Impressive charts attract more attention than fragile truths.
      </p>

      <p>
        Most platforms don't actively deceive users. They simply fail to protect them from behaviours that feel productive but are statistically dangerous.
      </p>

      <p>Few tools ask:</p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>How many similar strategies were tested?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>How much experimentation preceded this result?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>How sensitive is this to small changes?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>How confident should we actually be?</span>
        </li>
      </ul>

      <p>And almost none penalise the answers.</p>

      <h2 id="integrity" className="text-3xl font-bold text-white mt-16 mb-6">What Research Integrity Actually Requires</h2>

      <p>Research integrity is not about discipline or good intentions.</p>

      <p>It requires systems that:</p>

      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Account for how many strategies were tested</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Penalise similarity between strategies</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Measure confidence, not just outcomes</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Treat uncertainty as information, not weakness</span>
        </li>
      </ul>

      <p>
        The right question is not:<br />
        <em>Did this backtest work?</em>
      </p>

      <p>
        It's:<br />
        <em className="text-[#FF9500]">How likely is this result to survive contact with reality?</em>
      </p>

      <h2 id="design" className="text-3xl font-bold text-white mt-16 mb-6">This Is a Design Problem, Not a Discipline Problem</h2>

      <p>
        Humans are bad at policing their own bias — especially when positive feedback is involved.
      </p>

      <p>
        Expecting researchers or traders to simply "be careful" is unrealistic. Good intentions do not scale. Guardrails do.
      </p>

      <p>
        If research integrity matters, it has to be designed into the system, not left to willpower.
      </p>

      <h2 id="cost" className="text-3xl font-bold text-white mt-16 mb-6">The Cost of Getting This Wrong</h2>

      <p>The cost isn't just poor performance.</p>

      <p>
        It's overconfidence.<br />
        It's oversizing.<br />
        It's capital destruction.<br />
        It's abandoning systematic thinking altogether after disappointment.
      </p>

      <p>Most traders don't fail because markets are hard.</p>

      <p>They fail because they trusted results they didn't earn.</p>

      <h2 id="transition" className="text-3xl font-bold text-white mt-16 mb-6">A Quiet Transition</h2>

      <p>
        S2N Navigator was built around a simple assumption:<br />
        <strong className="text-[#FF9500]">most backtests are misleading by default</strong>.
      </p>

      <p>
        Instead of assuming research integrity, it treats it as a constraint. Cherry-picking and multiple testing are explicitly addressed. Confidence is measured, not implied. Robustness matters more than aesthetics.
      </p>

      <h2 id="better-question" className="text-3xl font-bold text-white mt-16 mb-6">A Better Question to Ask</h2>

      <p>Instead of asking whether a strategy worked in the past, ask:</p>

      <p className="text-xl italic text-[#FF9500] my-8 font-medium">How hard did this backtest try to fool me?</p>

      <p className="text-lg pb-12">
        In the next article, we'll unpack what research integrity actually means in practice — without requiring a statistics degree, and without pretending uncertainty can be eliminated.
      </p>
    </>
  );
}
