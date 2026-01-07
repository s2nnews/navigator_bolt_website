import { BookOpen, Target, TrendingUp, Brain, FileText } from 'lucide-react';
import { Button } from '../components/Button';
import { ContentCard } from '../components/ContentCard';

interface LearnProps {
  onNavigate: (page: string) => void;
  initialPath?: string;
}

type ArticleMeta = {
  slug: string;
  title: string;
  subtitle: string;
  readingTime: string;
  level?: 'Foundations' | 'Research' | 'Strategies';
};

const LATEST_ARTICLES: ArticleMeta[] = [
  {
    slug: 'learn/why-most-backtests-lie',
    title: "Why Most Backtests Lie",
    subtitle: "Cherry-picking, multiple testing, and why most research workflows fail quietly.",
    readingTime: '8–10 min',
    level: 'Foundations',
  },
];

export function Learn({ onNavigate, initialPath = '' }: LearnProps) {
  if (initialPath === 'why-most-backtests-lie') {
    return <WhyMostBacktestsLie onNavigate={onNavigate} />;
  }

  if (initialPath.startsWith('articles/')) {
    const articleSlug = initialPath.replace('articles/', '');
    if (articleSlug === 'why-most-backtests-lie') {
      return <WhyMostBacktestsLie onNavigate={onNavigate} />;
    }
    return <ArticleNotFound onNavigate={onNavigate} />;
  }

  if (initialPath === 'articles') {
    return <ArticlesIndex onNavigate={onNavigate} />;
  }

  if (initialPath === 'research') {
    return <Research onNavigate={onNavigate} />;
  }

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Learn S2N Navigator
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Master backtesting and strategy development with structured learning paths
            designed for every skill level.
          </p>
        </div>

        <div className="mb-16 bg-gradient-to-r from-[#FF9500]/10 to-[#FF9500]/5 border border-[#FF9500]/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">What is S2N Navigator?</h2>
          <p className="text-gray-300 mb-4">
            S2N Navigator is a comprehensive backtesting and strategy development platform
            that helps traders test, validate, and deploy trading strategies with confidence.
            Whether you're analyzing simple buy-and-hold portfolios or complex algorithmic
            strategies, Navigator provides the tools you need.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#2d2d2d] p-4 rounded-lg">
              <div className="text-[#FF9500] font-semibold mb-2">1. Build</div>
              <p className="text-sm text-gray-400">Create strategies using visual builders or code</p>
            </div>
            <div className="bg-[#2d2d2d] p-4 rounded-lg">
              <div className="text-[#FF9500] font-semibold mb-2">2. Test</div>
              <p className="text-sm text-gray-400">Run historical backtests with accurate data</p>
            </div>
            <div className="bg-[#2d2d2d] p-4 rounded-lg">
              <div className="text-[#FF9500] font-semibold mb-2">3. Deploy</div>
              <p className="text-sm text-gray-400">Connect to brokers for live trading</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Learning Path</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ContentCard
              icon={<BookOpen size={24} />}
              title="Complete Beginner"
              description="New to backtesting? Start here to learn the fundamentals."
              difficulty="Beginner"
              duration="~2 hours"
              onClick={() => onNavigate('docs/getting-started')}
            />
            <ContentCard
              icon={<Brain size={24} />}
              title="Advanced User"
              description="Deep dive into custom indicators, optimization, and AI features."
              difficulty="Advanced"
              duration="~5 hours"
              onClick={() => onNavigate('docs/advanced')}
            />
            <ContentCard
              icon={<FileText size={24} />}
              title="Knowledge Base"
              description="In-depth articles on backtesting, research integrity, and strategy validation."
              difficulty="All Levels"
              duration="8-10 min per article"
              onClick={() => onNavigate('docs/knowledge-base/why-most-backtests-lie')}
            />
            <ContentCard
              icon={<Target size={24} />}
              title="Strategy Explorer"
              description="Understand different trading strategies and when to use them."
              difficulty="Intermediate"
              duration="~3 hours"
              onClick={() => onNavigate('strategies')}
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Start</h2>
          <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FF9500] rounded-full flex items-center justify-center text-black font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Install Navigator</h3>
                  <p className="text-gray-400">Download and install S2N Navigator on your system</p>
                  <Button
                    variant="primary"
                    className="mt-3"
                    onClick={() => onNavigate('pricing')}
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FF9500] rounded-full flex items-center justify-center text-black font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Run Your First Backtest</h3>
                  <p className="text-gray-400">Follow our step-by-step guide to test a simple strategy</p>
                  <Button
                    variant="secondary"
                    className="mt-3"
                    onClick={() => onNavigate('docs/first-backtest')}
                  >
                    View Guide
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FF9500] rounded-full flex items-center justify-center text-black font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Watch Tutorial Videos</h3>
                  <p className="text-gray-400">Quick 2-3 minute videos covering key concepts</p>
                  <Button
                    variant="secondary"
                    className="mt-3"
                    onClick={() => onNavigate('videos')}
                  >
                    Browse Videos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-8">
            <TrendingUp className="text-[#FF9500] mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-3">Popular Resources</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('docs/understanding-results')}
                  className="text-gray-400 hover:text-[#FF9500] transition-colors"
                >
                  Understanding Backtest Results →
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('docs/glossary')}
                  className="text-gray-400 hover:text-[#FF9500] transition-colors"
                >
                  Common Terms Glossary →
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('strategies/60-40-portfolio')}
                  className="text-gray-400 hover:text-[#FF9500] transition-colors"
                >
                  60/40 Portfolio Strategy →
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('docs/faqs')}
                  className="text-gray-400 hover:text-[#FF9500] transition-colors"
                >
                  Frequently Asked Questions →
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('learn/articles')}
                  className="text-gray-400 hover:text-[#FF9500] transition-colors"
                >
                  Articles: Backtesting & Research Integrity →
                </button>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#FF9500]/20 to-[#FF9500]/5 border border-[#FF9500]/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-3">Need Help?</h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help you succeed. Get personalized support and guidance.
            </p>
            <Button
              variant="primary"
              onClick={() => onNavigate('contact')}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticlesIndex({ onNavigate }: LearnProps) {
  const articles = [
    {
      slug: 'why-most-backtests-lie',
      title: 'Why Most Backtests Lie (And Why That\'s Not an Accident)',
      subtitle: 'Cherry-picking, multiple testing, and why most research workflows fail quietly',
      readingTime: '8–10 min'
    }
  ];

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <button
            onClick={() => onNavigate('learn')}
            className="text-gray-400 hover:text-[#FF9500] mb-4 transition-colors"
          >
            ← Back to Learn
          </button>
          <h1 className="text-5xl font-bold mb-4">Articles</h1>
          <p className="text-xl text-gray-400">
            Long-form essays on backtesting, research integrity, and strategy validation.
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-6 cursor-pointer hover:border-[#FF9500]/50 transition-colors"
              onClick={() => onNavigate(`learn/${article.slug}`)}
            >
              <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-400 mb-3">{article.subtitle}</p>
              <div className="text-sm text-gray-500">{article.readingTime} read</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhyMostBacktestsLie({ onNavigate }: LearnProps) {
  const sections = [
    { id: 'intro', title: 'The Seduction of the Backtest' },
    { id: 'dont-lie', title: 'Backtests Don\'t Lie' },
    { id: 'cherry-picking', title: 'Cherry-Picking' },
    { id: 'multiple-testing', title: 'Multiple Testing' },
    { id: 'sharpe-ratio', title: 'Why Sharpe Ratio Is Easy to Game' },
    { id: 'incentive', title: 'The Industry Incentive Problem' },
    { id: 'integrity', title: 'What Research Integrity Requires' },
    { id: 'design', title: 'Design Problem, Not Discipline' },
    { id: 'cost', title: 'The Cost of Getting This Wrong' },
    { id: 'transition', title: 'A Quiet Transition' },
    { id: 'better-question', title: 'A Better Question to Ask' },
  ];

  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="mb-10">
          <button
            onClick={() => onNavigate('learn')}
            className="inline-flex items-center text-gray-400 hover:text-[#FF9500] transition-colors text-sm font-medium"
          >
            <span className="mr-2">←</span> Back to Learn
          </button>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Index */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Knowledge Base
                </h3>
                <nav className="space-y-1">
                  <button
                    onClick={() => onNavigate('learn/why-most-backtests-lie')}
                    className="block w-full text-left px-3 py-2 text-sm rounded-lg bg-[#FF9500]/10 text-[#FF9500] font-medium"
                  >
                    Why Most Backtests Lie
                  </button>
                </nav>

                <div className="mt-6 pt-6 border-t border-[#3d3d3d]">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    On This Page
                  </h4>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-gray-400 hover:text-[#FF9500] transition-colors leading-snug"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <header className="mb-12 pb-8 border-b border-[#3d3d3d]">
              <div className="inline-block px-3 py-1 bg-[#FF9500]/10 text-[#FF9500] text-xs font-semibold rounded-full mb-4">
                FOUNDATIONS
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-white">
                Why Most Backtests Lie (And Why That's Not an Accident)
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Why cherry-picking, multiple testing, and incentive design quietly undermine most trading research.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>8–10 min read</span>
                <span>•</span>
                <span>Updated Jan 2026</span>
              </div>
            </header>

        <article className="prose prose-invert prose-lg max-w-none text-gray-300 leading-[1.8]">
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
              <span>How much trial-and-error preceded this result?</span>
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
        </article>
          </div>
        </div>
      </div>
    </div>
  );
}

function Research({ onNavigate }: LearnProps) {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <button
            onClick={() => onNavigate('learn')}
            className="text-gray-400 hover:text-[#FF9500] mb-4 transition-colors"
          >
            ← Back to Learn
          </button>
          <h1 className="text-5xl font-bold mb-4">Research</h1>
          <p className="text-xl text-gray-400">
            Statistical methods and research integrity concepts for robust backtesting.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">Bias & Overfitting</h2>
            <p className="text-gray-400 leading-relaxed">
              Understanding how bias enters backtests and how to detect overfitting.
            </p>
          </div>

          <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">Metrics</h2>
            <p className="text-gray-400 leading-relaxed">
              Deep dive into Sharpe Ratio, Deflated Sharpe Ratio (DSR), Probabilistic Sharpe Ratio (PSR), and other key metrics.
            </p>
          </div>

          <div className="bg-[#2d2d2d] border border-[#3d3d3d] rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">Robustness & Confidence</h2>
            <p className="text-gray-400 leading-relaxed">
              Methods for building confidence in backtest results through robustness testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleNotFound({ onNavigate }: LearnProps) {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <button
          onClick={() => onNavigate('learn/articles')}
          className="text-gray-400 hover:text-[#FF9500] mb-8 transition-colors"
        >
          ← Back to Articles
        </button>
        <h1 className="text-4xl font-bold mb-3">Article Not Found</h1>
        <p className="text-gray-400">This article does not exist yet.</p>
      </div>
    </div>
  );
}

