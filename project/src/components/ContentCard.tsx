import { ArrowRight } from 'lucide-react';

interface ContentCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  duration?: string;
  onClick?: () => void;
}

export function ContentCard({ title, description, icon, difficulty, duration, onClick }: ContentCardProps) {
  const difficultyColors = {
    Beginner: 'text-green-400',
    Intermediate: 'text-yellow-400',
    Advanced: 'text-red-400',
  };

  return (
    <button
      onClick={onClick}
      className="group bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg p-6 text-left hover:border-[#FF9500] transition-all duration-300 w-full"
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 bg-[#FF9500]/10 rounded-lg flex items-center justify-center text-[#FF9500]">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#FF9500] transition-colors">
              {title}
            </h3>
            <ArrowRight className="flex-shrink-0 text-gray-400 group-hover:text-[#FF9500] group-hover:translate-x-1 transition-all" size={20} />
          </div>
          <p className="text-gray-400 mb-3">{description}</p>
          {(difficulty || duration) && (
            <div className="flex items-center gap-4 text-sm">
              {difficulty && (
                <span className={difficultyColors[difficulty]}>
                  {difficulty}
                </span>
              )}
              {duration && (
                <span className="text-gray-500">
                  {duration}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
