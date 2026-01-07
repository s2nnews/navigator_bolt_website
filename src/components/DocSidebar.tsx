import { useEffect, useRef, useState } from 'react';
import { Book, FileText, HelpCircle, Lightbulb, BookOpen, Menu, X } from 'lucide-react';

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
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const iconMap: Record<string, React.ReactNode> = {
    'Getting Started': <Book size={16} />,
    'Guides': <FileText size={16} />,
    'Advanced': <Lightbulb size={16} />,
    'Concepts': <Lightbulb size={16} />,
    'Knowledge Base': <BookOpen size={16} />,
    'FAQs': <HelpCircle size={16} />,
  };

  useEffect(() => {
    const activeSection = sections.find(section =>
      section.items.some(item => item.id === activeId)
    );

    if (activeSection && sectionRefs.current[activeSection.title] && scrollContainerRef.current) {
      const sectionElement = sectionRefs.current[activeSection.title];
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [activeId, sections]);

  const handleItemClick = (id: string) => {
    onItemClick(id);
    setMobileMenuOpen(false);
  };

  const activeItem = sections
    .flatMap(section => section.items)
    .find(item => item.id === activeId);

  return (
    <>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-[#FF9500] text-black p-3 rounded-full shadow-lg"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`
        fixed lg:static inset-0 z-40 bg-[#1a1a1a] lg:bg-transparent
        lg:w-64 lg:flex-shrink-0
        transition-transform duration-300
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full overflow-y-auto px-4 py-6 lg:px-0 lg:py-0">
          <div className="lg:hidden mb-4 pb-4 border-b border-[#2d2d2d]">
            <h3 className="text-lg font-semibold">Documentation Menu</h3>
            {activeItem && (
              <p className="text-sm text-gray-400 mt-1">Current: {activeItem.label}</p>
            )}
          </div>

          <div ref={scrollContainerRef} className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)]">
            <nav className="space-y-6">
              {sections.map((section) => (
                <div
                  key={section.title}
                  ref={el => sectionRefs.current[section.title] = el}
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                    {iconMap[section.title]}
                    {section.title}
                  </div>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleItemClick(item.id)}
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
        </div>
      </aside>

      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
