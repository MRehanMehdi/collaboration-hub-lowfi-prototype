import { WireframeHeader } from './WireframeHeader';
import { WireframeSidebar } from './WireframeSidebar';

interface WireframeProjectsProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
  onSelectProject: (projectId: number) => void;
}

export function WireframeProjects({ onNavigate, onLogout, onSelectProject }: WireframeProjectsProps) {
  const projects = [
    {
      id: 1,
      name: 'Web Development Project',
      progress: '65%',
      dueDate: 'Nov 15, 2025',
      members: ['Ahmed Khan', 'Hassan Ali', 'Bilal Ahmed'],
      status: 'In Progress'
    },
    {
      id: 2,
      name: 'Mobile App Design',
      progress: '40%',
      dueDate: 'Nov 22, 2025',
      members: ['Usman Malik', 'Omar Farooq', 'Faisal Sheikh'],
      status: 'In Progress'
    },
    {
      id: 3,
      name: 'Data Analysis Project',
      progress: '80%',
      dueDate: 'Nov 12, 2025',
      members: ['Hamza Ibrahim', 'Zain Abbas'],
      status: 'In Progress'
    },
    {
      id: 4,
      name: 'Marketing Campaign',
      progress: '25%',
      dueDate: 'Nov 30, 2025',
      members: ['Fahad Rashid', 'Saad Akhtar', 'Arslan Hussain'],
      status: 'In Progress'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <WireframeHeader title="Projects" onLogout={onLogout} />
      
      <div className="flex flex-1">
        <WireframeSidebar activePage="projects" onNavigate={onNavigate} />
        
        <main className="flex-1 p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-gray-800">Project Overview - Ongoing Projects</h2>
            <button className="border-2 border-gray-800 bg-gray-800 text-white px-6 py-2 cursor-pointer hover:bg-gray-700">
              + New Project
            </button>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                className="border-2 border-gray-400 bg-white p-6 cursor-pointer hover:bg-gray-50"
              >
                {/* Project Name */}
                <div className="mb-4 pb-4 border-b-2 border-gray-300">
                  <div className="text-gray-600 text-sm mb-1">Project Name</div>
                  <div className="text-gray-800">{project.name}</div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="text-gray-600 text-sm mb-2">Progress</div>
                  <div className="border-2 border-gray-400 bg-gray-200 h-8 relative">
                    <div className="text-gray-700 text-xs absolute inset-0 flex items-center justify-center">
                      Progress Bar - {project.progress}
                    </div>
                  </div>
                </div>

                {/* Due Date */}
                <div className="mb-4">
                  <div className="text-gray-600 text-sm mb-1">Due Date</div>
                  <div className="text-gray-800">{project.dueDate}</div>
                </div>

                {/* Assigned Members */}
                <div className="mb-4">
                  <div className="text-gray-600 text-sm mb-2">Assigned Members</div>
                  <div className="border-2 border-gray-400 bg-gray-50 p-3">
                    {project.members.map((member, index) => (
                      <div key={index} className="text-gray-700 text-sm">
                        • {member}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div>
                  <div className="text-gray-600 text-sm mb-1">Status</div>
                  <div className="text-gray-800">{project.status}</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
