interface WireframeSidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export function WireframeSidebar({ activePage, onNavigate }: WireframeSidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'team', label: 'Team' },
    { id: 'chat', label: 'Chat' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <aside className="w-64 border-r-2 border-gray-400 bg-gray-50 p-6">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`border-2 border-gray-400 px-4 py-3 cursor-pointer ${
              item.id === activePage ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </aside>
  );
}
