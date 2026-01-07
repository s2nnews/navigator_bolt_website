import { Book, FileText, HelpCircle, Lightbulb } from 'lucide-react';

interface DocSection {
  title: string;
  items: Array<{ id: string; label: string; }>;
}

interface DocSidebarProps {
  sections: DocSection[];
  activeId: string;
  onItemClick: (id: string) => void;
}

export function DocSidebar({ sections, activeId, onItemClick }: DocSidebarProps) {
  const iconMap: Record<string, React.ReactNode> = {
    'Getting Started': <Book size={16} />,
    'Guides': <FileText size={16} />,
    'Concepts': <Lightbulb size={16} />,
    'FAQs': <HelpCircle size={16} />,
  };

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <nav className="space-y-6">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                {iconMap[section.title]}
                {section.title}
              </div>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => onItemClick(item.id)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        activeId === item.id
                          ? 'bg-[#FF9500]/10 text-[#FF9500] font-medium'
                          : 'text-gray-400 hover:text-white hover:bg-[#2d2d2d]'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
