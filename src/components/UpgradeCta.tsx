import { ArrowRight, Zap } from 'lucide-react';
import { trackFunnelEvent } from '../utils/funnel';

interface UpgradeCtaProps {
  context: string;
  headline?: string;
  description?: string;
}

export function UpgradeCta({
  context,
  headline = 'Unlock the Full Framework',
  description = 'Get unlimited backtesting, 100+ strategies, advanced analytics, and unlimited virtual accounts.',
}: UpgradeCtaProps) {
  const handleClick = () => {
    trackFunnelEvent('upgrade_cta_click', context, { location: context });
    window.location.hash = 'pricing';
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#2d2d2d] via-[#333] to-[#2d2d2d] border border-[#FF9500]/30 rounded-xl p-6 md:p-8">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9500]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-[#FF9500]/10 rounded-lg flex items-center justify-center">
            <Zap size={24} className="text-[#FF9500]" />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-white mb-1">{headline}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <button
          onClick={handleClick}
          className="flex-shrink-0 bg-[#FF9500] text-black px-6 py-3 rounded-lg font-semibold text-sm hover:bg-orange-600 transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          View Plans
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
