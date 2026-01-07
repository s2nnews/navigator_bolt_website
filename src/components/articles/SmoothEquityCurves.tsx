export function SmoothEquityCurvesContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <p className="text-gray-400 text-sm mb-6">
        Reading time: 6–8 min | Level: Foundations
      </p>

      <p className="text-lg text-gray-300 mb-6">
        Everyone loves a smooth equity curve.
      </p>

      <p className="text-gray-300 mb-2">
        It feels professional.
      </p>
      <p className="text-gray-300 mb-2">
        It feels controlled.
      </p>
      <p className="text-gray-300 mb-8">
        It feels safe.
      </p>

      <p className="text-lg font-semibold text-[#FF9500] mb-8">
        And very often, it's lying to you.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Smoothness Is Not a Free Lunch</h2>

      <p className="text-gray-300 mb-4">
        Markets are noisy.
      </p>

      <p className="text-gray-300 mb-4">
        Any strategy interacting honestly with markets should reflect some of that noise:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
        <li>clustered losses,</li>
        <li>uneven gains,</li>
        <li>uncomfortable drawdowns,</li>
        <li>periods of stagnation.</li>
      </ul>

      <p className="text-gray-300 mb-4">
        When an equity curve is too smooth, something else is usually happening.
      </p>

      <p className="text-gray-300 mb-8">
        And it's rarely benign.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">How Smoothness Is Manufactured</h2>

      <p className="text-gray-300 mb-4">
        Excessive smoothness often comes from:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
        <li>overfitting parameters to history,</li>
        <li>excessive filtering,</li>
        <li>aggressive position sizing dampeners,</li>
        <li>survivorship bias,</li>
        <li>or implicit lookahead through data choices.</li>
      </ul>

      <p className="text-gray-300 mb-4">
        Each of these removes variability.
      </p>

      <p className="text-lg font-semibold text-[#FF9500] mb-4">
        They also remove truth.
      </p>

      <p className="text-gray-300 mb-8">
        The strategy stops reflecting the market and starts reflecting the research process.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Illusion of Control</h2>

      <p className="text-gray-300 mb-4">
        Smooth curves create a dangerous psychological effect: they make you feel in control.
      </p>

      <p className="text-gray-300 mb-4">
        That feeling encourages:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
        <li>larger position sizes,</li>
        <li>higher leverage,</li>
        <li>tighter emotional attachment,</li>
        <li>and lower tolerance for inevitable deviation.</li>
      </ul>

      <div className="bg-[#2d2d2d] border-l-4 border-[#FF9500] p-6 rounded-r my-6">
        <p className="text-gray-300">
          When reality finally breaks the illusion, the response is often panic rather than adjustment.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Roughness Is Often a Feature</h2>

      <p className="text-gray-300 mb-4">
        Roughness tells you the strategy is actually interacting with uncertainty.
      </p>

      <p className="text-gray-300 mb-4">
        It tells you:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
        <li>trades cluster,</li>
        <li>outcomes are uneven,</li>
        <li>and timing matters.</li>
      </ul>

      <p className="text-gray-300 mb-4">
        These are not bugs.
      </p>

      <p className="text-gray-300 mb-4">
        They are reminders that edge is probabilistic, not mechanical.
      </p>

      <p className="text-lg font-semibold text-[#FF9500] mb-8">
        A strategy that survives roughness is usually more honest than one that avoids it entirely.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Smoothness and Fragility</h2>

      <p className="text-gray-300 mb-4">
        Smooth equity curves tend to be fragile.
      </p>

      <p className="text-gray-300 mb-4">
        They depend on:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
        <li>specific parameter values,</li>
        <li>stable regimes,</li>
        <li>and uninterrupted conditions.</li>
      </ul>

      <p className="text-gray-300 mb-4">
        When those conditions change, the failure is often abrupt.
      </p>

      <div className="bg-[#2d2d2d] border-l-4 border-[#FF9500] p-6 rounded-r my-6">
        <p className="text-gray-300">
          Jagged strategies, by contrast, tend to fail more gradually — giving you time to react.
        </p>
      </div>

      <p className="text-gray-300 mb-8">
        Monitoring prefers survivability over aesthetics.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Point</h2>

      <p className="text-gray-300 mb-4">
        A smooth equity curve is not evidence of safety.
      </p>

      <p className="text-lg font-semibold text-[#FF9500] mb-4">
        It is evidence that something has been suppressed.
      </p>

      <p className="text-gray-300 mb-4">
        Sometimes that suppression is justified.
      </p>

      <p className="text-gray-300 mb-4">
        Often, it isn't.
      </p>

      <p className="text-xl text-gray-300 mt-6">
        If a strategy feels too comfortable, the discomfort is probably coming later.
      </p>
    </div>
  );
}
