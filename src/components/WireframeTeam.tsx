import { WireframeHeader } from './WireframeHeader';
import { WireframeSidebar } from './WireframeSidebar';

interface WireframeTeamProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
  onSelectMember: (memberId: number) => void;
}

export function WireframeTeam({ onNavigate, onLogout, onSelectMember }: WireframeTeamProps) {
  const teamMembers = [
    {
      id: 1,
      name: 'Ahmed Khan',
      role: 'Frontend Developer',
      status: 'Online',
      projects: ['Web Development Project', 'Mobile App Design'],
      tasks: 3
    },
    {
      id: 2,
      name: 'Hassan Ali',
      role: 'Backend Developer',
      status: 'Online',
      projects: ['Web Development Project'],
      tasks: 2
    },
    {
      id: 3,
      name: 'Bilal Ahmed',
      role: 'UI/UX Designer',
      status: 'Online',
      projects: ['Web Development Project', 'Marketing Campaign'],
      tasks: 4
    },
    {
      id: 4,
      name: 'Usman Malik',
      role: 'Project Manager',
      status: 'Online',
      projects: ['Mobile App Design', 'Data Analysis Project'],
      tasks: 5
    },
    {
      id: 5,
      name: 'Omar Farooq',
      role: 'QA Tester',
      status: 'Offline',
      projects: ['Web Development Project'],
      tasks: 2
    },
    {
      id: 6,
      name: 'Faisal Sheikh',
      role: 'Frontend Developer',
      status: 'Offline',
      projects: ['Mobile App Design'],
      tasks: 3
    },
    {
      id: 7,
      name: 'Hamza Ibrahim',
      role: 'Designer',
      status: 'Online',
      projects: ['Marketing Campaign'],
      tasks: 2
    },
    {
      id: 8,
      name: 'Zain Abbas',
      role: 'Full Stack Developer',
      status: 'Offline',
      projects: ['Data Analysis Project'],
      tasks: 4
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <WireframeHeader title="Team Members" onLogout={onLogout} />
      
      <div className="flex flex-1">
        <WireframeSidebar activePage="team" onNavigate={onNavigate} />
        
        <main className="flex-1 p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-gray-800">Active Members / Team Panel</h2>
            <button className="border-2 border-gray-800 bg-gray-800 text-white px-6 py-2 cursor-pointer hover:bg-gray-700">
              + Add Member
            </button>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => onSelectMember(member.id)}
                className="border-2 border-gray-400 bg-white p-6 cursor-pointer hover:bg-gray-50"
              >
                {/* Name and Status */}
                <div className="mb-4 pb-4 border-b-2 border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-800">{member.name}</div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 ${member.status === 'Online' ? 'bg-gray-800' : 'bg-gray-300'} rounded-full`}></div>
                      <span className="text-gray-600 text-xs">{member.status}</span>
                    </div>
                  </div>
                  <div className="text-gray-600 text-sm">{member.role}</div>
                </div>

                {/* Projects */}
                <div className="mb-4">
                  <div className="text-gray-600 text-sm mb-2">Assigned Projects</div>
                  <div className="border-2 border-gray-400 bg-gray-50 p-3">
                    {member.projects.map((project, index) => (
                      <div key={index} className="text-gray-700 text-sm mb-1">
                        • {project}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tasks Count */}
                <div>
                  <div className="text-gray-600 text-sm mb-1">Active Tasks</div>
                  <div className="text-gray-800">{member.tasks}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Statistics */}
          <div className="mt-8 grid grid-cols-4 gap-4">
            <div className="border-2 border-gray-400 bg-white p-4">
              <div className="text-gray-600 text-sm mb-1">Total Members</div>
              <div className="text-gray-800">8</div>
            </div>
            <div className="border-2 border-gray-400 bg-white p-4">
              <div className="text-gray-600 text-sm mb-1">Online Now</div>
              <div className="text-gray-800">5</div>
            </div>
            <div className="border-2 border-gray-400 bg-white p-4">
              <div className="text-gray-600 text-sm mb-1">Active Projects</div>
              <div className="text-gray-800">4</div>
            </div>
            <div className="border-2 border-gray-400 bg-white p-4">
              <div className="text-gray-600 text-sm mb-1">Total Tasks</div>
              <div className="text-gray-800">25</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
