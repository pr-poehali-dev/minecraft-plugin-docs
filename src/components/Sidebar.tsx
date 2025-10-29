import { useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface NavItem {
  id: string;
  title: string;
  icon?: string;
  children?: NavItem[];
}

interface SidebarProps {
  onSelectPage: (id: string) => void;
  currentPage: string;
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems: NavItem[] = [
  {
    id: 'intro',
    title: 'Введение',
    icon: 'Home',
  },
  {
    id: 'economy',
    title: 'EconomyPlugin',
    icon: 'DollarSign',
    children: [
      { id: 'economy-intro', title: 'Описание' },
      { id: 'economy-commands', title: 'Команды' },
      { id: 'economy-config', title: 'Конфигурация' },
    ],
  },
  {
    id: 'regions',
    title: 'RegionProtect',
    icon: 'Shield',
    children: [
      { id: 'regions-intro', title: 'Описание' },
      { id: 'regions-commands', title: 'Команды' },
      { id: 'regions-permissions', title: 'Права доступа' },
    ],
  },
  {
    id: 'shops',
    title: 'AdminShop',
    icon: 'ShoppingCart',
    children: [
      { id: 'shops-intro', title: 'Описание' },
      { id: 'shops-setup', title: 'Настройка' },
      { id: 'shops-items', title: 'Управление товарами' },
    ],
  },
  {
    id: 'teleport',
    title: 'TeleportManager',
    icon: 'MapPin',
    children: [
      { id: 'teleport-intro', title: 'Описание' },
      { id: 'teleport-warps', title: 'Варпы' },
      { id: 'teleport-homes', title: 'Дома игроков' },
    ],
  },
];

export default function Sidebar({ onSelectPage, currentPage, isOpen, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['economy', 'regions', 'shops', 'teleport']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderNavItem = (item: NavItem, depth = 0) => {
    const isExpanded = expandedItems.includes(item.id);
    const isActive = currentPage === item.id;
    const hasChildren = item.children && item.children.length > 0;

    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null;
    }

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.id);
            }
            onSelectPage(item.id);
          }}
          className={cn(
            'w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors',
            'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
            isActive && 'bg-sidebar-accent text-sidebar-accent-foreground font-medium',
            depth > 0 && 'pl-8'
          )}
        >
          {item.icon && <Icon name={item.icon as any} size={18} className="shrink-0" />}
          <span className="flex-1 text-left">{item.title}</span>
          {hasChildren && (
            <Icon
              name={isExpanded ? 'ChevronDown' : 'ChevronRight'}
              size={16}
              className="shrink-0"
            />
          )}
        </button>
        {hasChildren && isExpanded && (
          <div className="ml-2 border-l border-sidebar-border pl-2 mt-1">
            {item.children?.map((child) => renderNavItem(child, depth + 1))}
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
          'fixed top-0 left-0 h-full w-72 bg-sidebar text-sidebar-foreground z-50 transition-transform duration-300',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-sidebar-border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Icon name="BookOpen" size={20} className="text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">Minecraft Plugins</h1>
            </div>
            <div className="relative">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-sidebar-foreground/50" />
              <Input
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/50"
              />
            </div>
          </div>
          <ScrollArea className="flex-1 px-4 py-4">
            <nav className="space-y-1">
              {navigationItems.map((item) => renderNavItem(item))}
            </nav>
          </ScrollArea>
          <div className="p-4 border-t border-sidebar-border text-xs text-sidebar-foreground/60">
            <p>Документация v1.0</p>
          </div>
        </div>
      </aside>
    </>
  );
}
