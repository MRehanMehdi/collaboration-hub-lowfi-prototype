export function Header() {
  return (
    <header className="border-b-2 border-gray-400 bg-gray-100 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-gray-800">
          Dashboard
        </div>
        
        <div className="flex-1 max-w-md mx-8">
          <div className="border-2 border-gray-400 bg-white px-4 py-2">
            <span className="text-gray-500">Search Projects</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border-2 border-gray-400 bg-white flex items-center justify-center">
            <span className="text-gray-600 text-xs">Bell</span>
          </div>
          <div className="w-10 h-10 border-2 border-gray-400 bg-white flex items-center justify-center">
            <span className="text-gray-600 text-xs">User</span>
          </div>
        </div>
      </div>
    </header>
  );
}
