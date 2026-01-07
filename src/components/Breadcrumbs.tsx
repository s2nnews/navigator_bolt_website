import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (href: string) => void;
}

export function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight size={16} />}
          {item.href && index < items.length - 1 ? (
            <button
              onClick={() => onNavigate?.(item.href!)}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <span className={index === items.length - 1 ? 'text-white' : ''}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
