import { Brain, Database, Shield, BookOpen, FlaskConical, Network, BarChart3, TrendingUp, Sparkles, Zap, Check, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function AIOracle() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center mb-16">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent leading-tight">
              Meet Your Personal<br />Trading Oracle
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              The AI that doesn't just answer questions—it <span className="text-cyan-400 font-semibold">knows</span> you,
              learns from every backtest you run, and gets smarter the more you trade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#free"
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/50"
              >
                Start Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="border-2 border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-20">
            <div className="bg-gradient-to-br from-red-900/20 to-red-950/20 border border-red-500/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold">
                GENERIC AI
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex gap-3">
                  <span className="text-gray-500">You:</span>
                  <span className="text-gray-300">Build me a momentum strategy</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-400">AI:</span>
                  <span className="text-gray-400">Here's some generic code. You'll need to find data somewhere. Good luck!</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 animate-pulse" />
              <div className="absolute top-4 right-4 bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                ORACLE
              </div>
              <div className="relative space-y-4 font-mono text-sm">
                <div className="flex gap-3">
                  <span className="text-gray-500">You:</span>
                  <span className="text-gray-300">Build me a momentum strategy</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyan-400">Oracle:</span>
                  <span className="text-gray-300">I see you have SPY, QQQ, and IWM in your DataFarm with 10 years of daily data. Here's a dual momentum config ready to run—no setup required.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Generic AI Assistants Don't Understand Trading
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-300">
              <p>
                You've tried ChatGPT. You've tried Claude. They're brilliant at general knowledge, but ask them to build you a momentum strategy with risk parity allocation and quarterly rebalancing?
              </p>
              <p className="text-xl text-gray-400 italic">
                You get... generic advice.
              </p>
              <p className="text-gray-400">
                "Here's some code. You'll need to find data somewhere. Good luck figuring out the rest."
              </p>
              <p className="text-2xl font-semibold text-cyan-400 mt-8">
                That's not a trading assistant. That's a search engine with extra steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,217,255,0.15),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              An AI Built From the Ground Up<br />for Systematic Trading
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The S2N Oracle isn't a chatbot bolted onto a trading platform. It's an AI deeply integrated into every layer of Navigator—with access to your data, your strategies, your results, and your trading patterns.
            </p>
            <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mt-8">
              When you ask the Oracle a question, it doesn't guess. It knows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Database,
                title: '"What data do I have?"',
                subtitle: 'Knows Your Data',
                description: 'The Oracle knows exactly what\'s in your DataFarm. 812 daily symbols synced? Norgate connected with 15,000+ securities? It sees everything.',
                interaction: {
                  you: 'Build me a sector rotation strategy',
                  oracle: 'I see you have XLK, XLF, XLE, XLV, and XLI in your DataFarm. Here\'s a momentum rotation config that\'s ready to run—no setup required.'
                }
              },
              {
                icon: Brain,
                title: 'Gets Smarter Every Trade',
                subtitle: 'Learns From Every Backtest',
                description: 'Every backtest teaches the Oracle about your trading style, risk tolerance, and what works for YOU. After 50 backtests, it anticipates your needs.',
                interaction: {
                  you: 'What should I try next?',
                  oracle: 'You\'ve run 23 momentum strategies averaging Sharpe 0.9. I\'d suggest diversifying into mean reversion—here\'s an RSI strategy using SPY, QQQ, IWM.'
                }
              },
              {
                icon: Shield,
                title: 'Your Trading Co-Pilot',
                subtitle: 'Prevents Mistakes Before You Make Them',
                description: 'The Oracle warns you when something doesn\'t look right. Because it remembers your history and knows what works for you.',
                interaction: {
                  you: 'Test this RSI strategy with period=3',
                  oracle: 'Hold on. RSI(3) is very short-term and prone to whipsaws. Your best RSI results used period 10-14. Want to test that instead?'
                }
              },
              {
                icon: BookOpen,
                title: 'Standing on the Shoulders of Giants',
                subtitle: '200+ Battle-Tested Strategies',
                description: 'Deep knowledge of momentum, mean reversion, TAA, factor strategies, and more. Ask for any strategy type and get production-ready configs.',
                interaction: {
                  you: 'Show me a risk parity strategy',
                  oracle: 'Here\'s an All Weather portfolio config using your available assets (SPY, TLT, GLD, DBC). Rebalancing quarterly with volatility targeting.'
                }
              }
            ].map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border rounded-2xl p-6 transition-all duration-500 ${
                  hoveredFeature === index
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/20 scale-105'
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 transition-all duration-500 ${
                  hoveredFeature === index ? 'scale-110' : ''
                }`}>
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-cyan-400 mb-3 font-semibold">{feature.subtitle}</p>
                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>

                <div className={`transition-all duration-500 overflow-hidden ${
                  hoveredFeature === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4 mt-4 font-mono text-xs space-y-3">
                    <div className="flex gap-2">
                      <span className="text-gray-500">You:</span>
                      <span className="text-gray-300">{feature.interaction.you}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-cyan-400">Oracle:</span>
                      <span className="text-gray-300">{feature.interaction.oracle}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
              <Network className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Autonomous Agent Technology</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              The Agent That Works While You Sleep
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              This isn't just an assistant—it's an autonomous agent that <span className="text-blue-400 font-semibold">executes</span>.
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Powered by Anthropic's Model Context Protocol (MCP), the Navigator Oracle can:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: FlaskConical,
                title: 'Research Autonomously',
                description: '"Find the best RSI parameters for tech stocks" and wake up to a complete analysis'
              },
              {
                icon: Network,
                title: 'Run Optimization Loops',
                description: 'Test 100 parameter combinations overnight'
              },
              {
                icon: BarChart3,
                title: 'Build Portfolios',
                description: 'Create a diversified portfolio matching my risk profile'
              },
              {
                icon: TrendingUp,
                title: 'Monitor & Alert',
                description: 'Continuous strategy health checks with proactive recommendations'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/50 rounded-2xl p-8 text-center">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <p className="text-2xl text-gray-200 italic font-light">
              "Tell your AI: 'Build me three momentum strategies, backtest them, and show me the best one tomorrow.' Then go to bed. Wake up to results."
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16">
            Not Your Average AI Assistant
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-6 text-gray-400 font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 text-gray-400 font-semibold">ChatGPT / Claude</th>
                  <th className="text-center py-4 px-6 text-gray-400 font-semibold">Other Trading AI</th>
                  <th className="text-center py-4 px-6 text-cyan-400 font-semibold">S2N Oracle</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { feature: 'General trading knowledge', chatgpt: true, other: true, oracle: true },
                  { feature: 'Knows YOUR data sources', chatgpt: false, other: false, oracle: true },
                  { feature: 'Learns from YOUR backtests', chatgpt: false, other: false, oracle: true },
                  { feature: 'Builds ready-to-run configs', chatgpt: false, other: 'partial', oracle: true },
                  { feature: 'Remembers your trading style', chatgpt: false, other: false, oracle: true },
                  { feature: 'Prevents your specific mistakes', chatgpt: false, other: false, oracle: true },
                  { feature: 'Integrated with execution engine', chatgpt: false, other: false, oracle: true },
                  { feature: 'Autonomous agent (MCP)', chatgpt: false, other: false, oracle: true }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors">
                    <td className="py-4 px-6 text-gray-300">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {row.chatgpt ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.other === true ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : row.other === 'partial' ? (
                        <span className="text-yellow-500 font-semibold">Partial</span>
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-cyan-500/5">
                      <Check className="w-5 h-5 text-cyan-400 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="text-6xl text-cyan-400 mb-6">"</div>
              <p className="text-xl sm:text-2xl text-gray-200 italic mb-6 leading-relaxed">
                I've used every AI assistant out there for trading. The difference with S2N's Oracle is it actually understands my workflow. It knows I use Norgate data, it remembers my risk tolerance, and it catches mistakes I would have made. It's like having a senior quant looking over my shoulder.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500" />
                <div>
                  <p className="text-white font-semibold">Beta Tester</p>
                  <p className="text-gray-400 text-sm">Systematic Trader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16">
            From Question to Strategy in Seconds
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: '📝',
                title: 'Ask Anything',
                description: '"Build me a momentum strategy for tech ETFs with monthly rebalancing"'
              },
              {
                step: '02',
                icon: '🧠',
                title: 'Oracle Analyzes',
                description: 'Checks your data sources, reviews your history, applies best practices'
              },
              {
                step: '03',
                icon: '⚡',
                title: 'Get Ready-to-Run Config',
                description: 'Complete JSON config that works with YOUR data—drag, drop, backtest'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-cyan-500/30 rounded-2xl p-8 text-center hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <div className="text-sm text-cyan-400 font-bold mb-2">STEP {item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-cyan-500/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.2),transparent_70%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Stop Wrestling With Generic AI
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Join the traders who've discovered what a <span className="text-cyan-400">real</span> AI assistant feels like.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#free"
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-lg font-semibold text-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center gap-2 shadow-2xl shadow-cyan-500/50"
            >
              Start Free
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="border-2 border-cyan-500/50 text-cyan-400 px-10 py-5 rounded-lg font-semibold text-xl hover:bg-cyan-500/10 transition-all duration-300">
              See It In Action
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: 'Your data stays local' },
              { icon: Sparkles, text: '200+ ready-to-use strategies' },
              { icon: Brain, text: 'Gets smarter every day' },
              { icon: Network, text: 'MCP Agent coming soon' }
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-3 justify-center bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3">
                <badge.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300 text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
