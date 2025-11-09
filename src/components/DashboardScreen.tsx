interface DashboardScreenProps {
  onLogout: () => void;
}

export function DashboardScreen({ onLogout }: DashboardScreenProps) {
  const projects = [
    {
      id: 1,
      groupName: 'Web Development Team',
      members: ['Alice', 'Bob', 'Charlie'],
      status: 'In Progress - 65%'
    },
    {
      id: 2,
      groupName: 'Mobile App Design',
      members: ['David', 'Emma', 'Frank', 'Grace'],
      status: 'In Progress - 40%'
    },
    {
      id: 3,
      groupName: 'Data Analysis Project',
      members: ['Helen', 'Ian'],
      status: 'In Progress - 80%'
    },
    {
      id: 4,
      groupName: 'Marketing Campaign',
      members: ['Jack', 'Kate', 'Liam'],
      status: 'In Progress - 25%'
    },
    {
      id: 5,
      groupName: 'Research Paper Writing',
      members: ['Maya', 'Noah', 'Olivia', 'Paul', 'Quinn'],
      status: 'In Progress - 55%'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="border-b-2 border-gray-400 bg-white px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-800">Collaborative Group Project Hub</h1>
          <button 
            onClick={onLogout}
            className="border-2 border-gray-600 bg-gray-200 text-gray-800 px-6 py-2 cursor-pointer hover:bg-gray-300"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        <div className="mb-6">
          <h2 className="text-gray-800">Dashboard</h2>
        </div>

        <div className="border-2 border-gray-400 bg-white p-6 mb-6">
          <h3 className="text-gray-800 mb-4">Ongoing Group Projects</h3>
          
          <div className="space-y-4">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="border-2 border-gray-400 bg-gray-50 p-4 cursor-pointer hover:bg-gray-100"
              >
                {/* Group Name */}
                <div className="mb-3">
                  <span className="text-gray-800">{project.groupName}</span>
                </div>

                {/* Members */}
                <div className="mb-3">
                  <span className="text-gray-600 text-sm">Members: </span>
                  <span className="text-gray-700 text-sm">{project.members.join(', ')}</span>
                </div>

                {/* Progress Status */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 text-sm">Progress:</span>
                  <div className="flex-1 border-2 border-gray-400 bg-white h-6 relative">
                    <div className="text-gray-700 text-xs absolute inset-0 flex items-center justify-center">
                      {project.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
