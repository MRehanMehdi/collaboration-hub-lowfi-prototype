export function Sidebar() {
  const menuItems = [
    { label: 'Home', active: false },
    { label: 'Projects', active: false },
    { label: 'Team', active: false },
    { label: 'Chat', active: false },
    { label: 'Settings', active: false },
  ];

  return (
    <aside className="w-64 border-r-2 border-gray-400 bg-gray-50 p-6">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`border-2 border-gray-400 px-4 py-3 cursor-pointer ${
              item.active ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </aside>
  );
}
