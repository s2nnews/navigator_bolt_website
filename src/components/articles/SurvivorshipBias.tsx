export function SurvivorshipBiasContent() {
  return (
    <>
      <p className="text-xl font-medium">If you only read one thing about backtesting, read this:</p>
      <p className="text-lg">Most historical datasets are missing the companies that died.</p>
      <p className="text-lg">And if your dataset is missing the dead, your backtest is living in a fantasy.</p>

      <h2 id="what-it-is" className="text-3xl font-bold text-white mt-16 mb-6">1) What survivorship bias is</h2>
      <p>Survivorship bias happens when your dataset contains only the assets that survived long enough to be included.</p>
      <p>In equities, that usually means:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>the bankruptcies disappeared,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>the delistings vanished,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>the acquired companies got merged away,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and the dataset quietly rewrote history.</span>
        </li>
      </ul>
      <p>So you end up backtesting on a universe of winners.</p>
      <p>Not winners because your strategy picked them.</p>
      <p>Winners because your dataset filtered out the losers.</p>

      <h2 id="why-it-matters" className="text-3xl font-bold text-white mt-16 mb-6">2) Why it matters</h2>
      <p>Survivorship bias is not a rounding error.</p>
      <p>It can:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>inflate returns,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>reduce drawdowns,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>improve Sharpe ratios,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and make weak strategies look robust.</span>
        </li>
      </ul>
      <p>The dangerous part is that it doesn't look like cheating.</p>
      <p>It looks like "just using the S&P 500".</p>
      <p>But unless your S&P 500 membership is point-in-time accurate, you're not using the S&P 500.</p>
      <p>You're using today's survivors and pretending they were always there.</p>

      <h2 id="how-it-shows-up" className="text-3xl font-bold text-white mt-16 mb-6">3) How it shows up in real backtests</h2>
      <p>It usually appears in three ways:</p>
      <p className="font-semibold text-white mt-8">A) Unrealistic winners</p>
      <p>Your strategy seems unusually good at avoiding disasters.</p>
      <p>Because the disasters aren't in the data.</p>
      <p className="font-semibold text-white mt-8">B) Too-smooth drawdowns</p>
      <p>The worst names often contribute the ugliest drawdowns.</p>
      <p>If they're missing, your equity curve looks "professional".</p>
      <p className="font-semibold text-white mt-8">C) Fake "quality factors"</p>
      <p>
        Strategies that tilt toward large caps, winners, or "quality" can look incredible when the dataset already removed the failed firms.
      </p>

      <h2 id="common-mistakes" className="text-3xl font-bold text-white mt-16 mb-6">4) The common mistakes people don't realise they're making</h2>
      <p>Here are the classics:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Backtesting on today's index constituents over 20 years</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Downloading "S&P 500 historical prices" from a free source</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Running a cross-sectional ranking strategy without point-in-time membership</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Using survivorship-filtered ETFs as a stand-in for true constituent histories</span>
        </li>
      </ul>
      <p>None of those are automatically wrong.</p>
      <p>They're wrong when you claim the results represent investable reality.</p>

      <h2 id="index-constituents-problem" className="text-3xl font-bold text-white mt-16 mb-6">5) The index constituents problem (the one that fools smart people)</h2>
      <p>If you build strategies like:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>"top 50 momentum stocks in the S&P 500"</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>"value rank within the index"</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>"rebalance monthly into the top decile"</span>
        </li>
      </ul>
      <p>…then point-in-time membership is non-negotiable.</p>
      <p>Because the whole strategy is about selection within a universe.</p>
      <p>If the universe is rewritten, the strategy is rewritten.</p>
      <p>And the backtest becomes a story about survivors.</p>

      <h2 id="how-to-defend" className="text-3xl font-bold text-white mt-16 mb-6">6) How to defend against survivorship bias</h2>
      <p>There are only a few real solutions:</p>
      <p className="font-semibold text-white mt-8">A) Use survivorship-free data</p>
      <p>This means data that includes delisted names and maintains correct corporate actions.</p>
      <p className="font-semibold text-white mt-8">B) Use point-in-time constituent membership</p>
      <p>If you backtest an index universe, you need the historical membership by date, not "the current list".</p>
      <p className="font-semibold text-white mt-8">C) Explicitly test "death bias"</p>
      <p>Ask: what happens when you include the firms that disappeared?</p>
      <p>If your strategy relies on excluding the dead, it's not robust — it's curated.</p>

      <h2 id="sanity-checks" className="text-3xl font-bold text-white mt-16 mb-6">7) Sanity checks you can run today</h2>
      <p>Even without perfect data, you can detect warning signs:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Does performance collapse when you extend the test further back?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Does the strategy look oddly good in older periods?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Does it have suspiciously low tail risk?</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>Does it outperform in a way that feels too "clean"?</span>
        </li>
      </ul>
      <p>When something looks magically stable, it's often because the dataset is doing invisible work.</p>

      <h2 id="the-point" className="text-3xl font-bold text-white mt-16 mb-6">8) The point</h2>
      <p>Survivorship bias doesn't just distort performance.</p>
      <p>It distorts your confidence.</p>
      <p>And confidence is what drives:</p>
      <ul className="space-y-3 my-8">
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>position sizing,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>leverage decisions,</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#FF9500] mt-1">•</span>
          <span>and emotional attachment.</span>
        </li>
      </ul>
      <p>So survivorship bias is not a technical nit.</p>
      <p>It's a capital allocation risk.</p>
      <p className="text-lg pb-12">
        Next we'll go deeper into the stats side: why "confidence" should be measured explicitly (not implied), and how multiple testing quietly corrupts almost every retail research workflow.
      </p>
    </>
  );
}
