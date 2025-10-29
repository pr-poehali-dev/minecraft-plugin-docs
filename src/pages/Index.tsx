import { useState } from 'react';
import DocSidebar from '@/components/DocSidebar';
import DocContent from '@/components/DocContent';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentPage, setCurrentPage] = useState('intro');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <DocSidebar
        onSelectPage={(id) => {
          setCurrentPage(id);
          setIsSidebarOpen(false);
        }}
        currentPage={currentPage}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 lg:ml-72 flex flex-col h-full">
        <header className="sticky top-0 z-30 flex items-center gap-4 px-6 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Icon name="Menu" size={24} />
          </Button>
          
          <div className="flex-1" />
          
          <Button variant="ghost" size="icon">
            <Icon name="Github" size={20} />
          </Button>
        </header>

        <DocContent pageId={currentPage} />
      </main>
    </div>
  );
}