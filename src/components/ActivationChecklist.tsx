import { CheckCircle, Circle, Mail, Download, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const DOWNLOAD_URL = 'https://www.s2n-navigator.com/#downloads';

interface Step {
  label: string;
  description: string;
  icon: React.ReactNode;
  action?: () => void;
  actionLabel?: string;
}

interface ActivationChecklistProps {
  onDownloadClick: () => void;
  onGuideClick?: () => void;
}

export function ActivationChecklist({ onDownloadClick }: ActivationChecklistProps) {
  const [completed, setCompleted] = useState<Set<number>>(new Set([0]));

  const toggle = (idx: number) => {
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const steps: Step[] = [
    {
      label: 'Check your email',
      description: 'Your license key and setup instructions are on the way.',
      icon: <Mail size={18} />,
    },
    {
      label: 'Download S2N Navigator',
      description: 'Grab the latest version and start building strategies.',
      icon: <Download size={18} />,
      action: onDownloadClick,
      actionLabel: 'Go to Downloads',
    },
  ];

  const allDone = completed.size === steps.length;
  const progress = (completed.size / steps.length) * 100;

  return (
    <div className="bg-[#1a1a1a] border border-[#3d3d3d] rounded-xl p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-white">Next Steps</h3>
        <span className="text-xs text-gray-500">{completed.size}/{steps.length}</span>
      </div>

      <div className="w-full bg-[#2d2d2d] rounded-full h-1.5 mb-5">
        <div
          className="bg-[#00C853] h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-3">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
              completed.has(idx)
                ? 'bg-[#00C853]/5 border border-[#00C853]/20'
                : 'bg-[#2d2d2d]/50 border border-transparent hover:border-[#3d3d3d]'
            }`}
            onClick={() => toggle(idx)}
          >
            <div className="flex-shrink-0 mt-0.5">
              {completed.has(idx) ? (
                <CheckCircle size={20} className="text-[#00C853]" />
              ) : (
                <Circle size={20} className="text-gray-600" />
              )}
            </div>
            <div className="flex-grow min-w-0">
              <p className={`text-sm font-medium ${completed.has(idx) ? 'text-gray-400 line-through' : 'text-gray-200'}`}>
                {step.label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{step.description}</p>
              {step.action && !completed.has(idx) && (
                <button
                  onClick={(e) => { e.stopPropagation(); step.action!(); }}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#FF9500] hover:text-orange-400 font-medium transition-colors"
                >
                  {step.actionLabel}
                  <ArrowRight size={12} />
                </button>
              )}
            </div>
            <div className={`flex-shrink-0 ${completed.has(idx) ? 'text-[#00C853]' : 'text-gray-600'}`}>
              {step.icon}
            </div>
          </div>
        ))}
      </div>

      {allDone && (
        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-2 w-full bg-[#FF9500] text-black py-3 rounded-lg font-semibold text-sm hover:bg-orange-600 transition-colors"
        >
          Download Now
          <ArrowRight size={16} />
        </a>
      )}

      {!allDone && (
        <p className="mt-4 text-xs text-gray-600 text-center">
          Don't see the email? Check your spam or junk folder.
        </p>
      )}
    </div>
  );
}
