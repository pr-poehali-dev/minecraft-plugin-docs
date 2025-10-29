import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  title: string;
  icon?: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  { id: 'intro', title: 'Введение', icon: 'BookOpen' },
  {
    id: 'economy',
    title: 'EconomyPlugin',
    icon: 'DollarSign',
    children: [
      { id: 'economy-overview', title: 'Описание' },
      { id: 'economy-commands', title: 'Команды' },
      { id: 'economy-config', title: 'Конфигурация' },
    ],
  },
  {
    id: 'regions',
    title: 'RegionProtect',
    icon: 'Shield',
    children: [
      { id: 'regions-overview', title: 'Описание' },
      { id: 'regions-commands', title: 'Команды' },
      { id: 'regions-config', title: 'Конфигурация' },
    ],
  },
  {
    id: 'shop',
    title: 'AdminShop',
    icon: 'ShoppingCart',
    children: [
      { id: 'shop-overview', title: 'Описание' },
      { id: 'shop-commands', title: 'Команды' },
      { id: 'shop-config', title: 'Конфигурация' },
    ],
  },
  {
    id: 'teleport',
    title: 'TeleportManager',
    icon: 'MapPin',
    children: [
      { id: 'teleport-overview', title: 'Описание' },
      { id: 'teleport-commands', title: 'Команды' },
      { id: 'teleport-config', title: 'Конфигурация' },
    ],
  },
];

interface DocSidebarProps {
  onSelectPage: (id: string) => void;
  currentPage: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function DocSidebar({ onSelectPage, currentPage, isOpen, onClose }: DocSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<string[]>(['economy', 'regions', 'shop', 'teleport']);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filterItems = (items: NavItem[]): NavItem[] => {
    if (!searchQuery) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.children?.some((child) =>
          child.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  };

  const renderNavItem = (item: NavItem, level = 0) => {
    const isExpanded = expandedItems.includes(item.id);
    const isActive = currentPage === item.id;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (hasChildren) {
              toggleExpand(item.id);
            }
            onSelectPage(item.id);
          }}
          className={cn(
            'w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors',
            level === 0 && 'font-medium',
            level > 0 && 'pl-8',
            isActive
              ? 'bg-sidebar-accent text-sidebar-accent-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
          )}
        >
          {item.icon && <Icon name={item.icon as any} size={18} />}
          <span className="flex-1 text-left">{item.title}</span>
          {hasChildren && (
            <Icon
              name="ChevronRight"
              size={16}
              className={cn('transition-transform', isExpanded && 'rotate-90')}
            />
          )}
        </button>
        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children?.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-72 bg-sidebar border-r border-sidebar-border z-50 transition-transform lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-sidebar-border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-sidebar-primary-foreground" />
              </div>
              <h1 className="text-lg font-bold text-sidebar-foreground">
                Документация плагинов
              </h1>
            </div>
            <div className="relative">
              <Icon
                name="Search"
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-sidebar-foreground/50"
              />
              <Input
                type="text"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/50"
              />
            </div>
          </div>

          <ScrollArea className="flex-1">
            <nav className="p-4 space-y-1">
              {filterItems(navigationItems).map((item) => renderNavItem(item))}
            </nav>
          </ScrollArea>

          <div className="p-4 border-t border-sidebar-border">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-sidebar-foreground hover:text-sidebar-accent-foreground transition-colors"
            >
              <Icon name="Github" size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
