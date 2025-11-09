interface WireframeHeaderProps {
  title: string;
  onLogout: () => void;
}

export function WireframeHeader({ title, onLogout }: WireframeHeaderProps) {
  return (
    <header className="border-b-2 border-gray-400 bg-white px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="text-gray-800">{title}</div>
        
        <div className="flex items-center gap-4 flex-1 justify-center">
          <div className="flex-1 max-w-md">
            <div className="border-2 border-gray-400 bg-gray-50 px-4 py-2">
              <span className="text-gray-500">Search projects, tasks, members...</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border-2 border-gray-400 bg-white flex items-center justify-center">
            <span className="text-gray-600 text-xs">Profile</span>
          </div>
          <button
            onClick={onLogout}
            className="border-2 border-gray-600 bg-gray-200 text-gray-800 px-6 py-2 cursor-pointer hover:bg-gray-300"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
