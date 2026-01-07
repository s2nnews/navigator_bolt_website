import { Info, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';

type CalloutType = 'info' | 'warning' | 'success' | 'tip';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      icon: <Info size={20} className="text-blue-400" />,
      titleColor: 'text-blue-400',
    },
    warning: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30',
      icon: <AlertTriangle size={20} className="text-yellow-400" />,
      titleColor: 'text-yellow-400',
    },
    success: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      icon: <CheckCircle size={20} className="text-green-400" />,
      titleColor: 'text-green-400',
    },
    tip: {
      bg: 'bg-[#FF9500]/10',
      border: 'border-[#FF9500]/30',
      icon: <AlertCircle size={20} className="text-[#FF9500]" />,
      titleColor: 'text-[#FF9500]',
    },
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} ${style.border} border rounded-lg p-4 my-4`}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1">
          {title && <div className={`font-semibold mb-1 ${style.titleColor}`}>{title}</div>}
          <div className="text-gray-300 text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
