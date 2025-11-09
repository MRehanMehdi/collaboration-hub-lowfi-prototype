import { WireframeHeader } from './WireframeHeader';
import { WireframeSidebar } from './WireframeSidebar';

interface WireframeDashboardProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function WireframeDashboard({ onNavigate, onLogout }: WireframeDashboardProps) {
  const summaryCards = [
    { id: 'projects', label: 'Total Projects', value: '12', page: 'projects' },
    { id: 'tasks', label: 'Ongoing Tasks', value: '24', page: 'projects' },
    { id: 'deadlines', label: 'Upcoming Deadlines', value: '5', page: 'notifications' },
    { id: 'members', label: 'Active Members', value: '8', page: 'team' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <WireframeHeader title="Dashboard" onLogout={onLogout} />
      
      <div className="flex flex-1">
        <WireframeSidebar activePage="home" onNavigate={onNavigate} />
        
        <main className="flex-1 p-8">
          <div className="mb-6">
            <h2 className="text-gray-800">Dashboard Overview</h2>
          </div>

          {/* Summary Cards */}
          <section className="mb-8">
            <div className="text-gray-600 text-sm mb-4">Quick Summary</div>
            <div className="grid grid-cols-4 gap-4">
              {summaryCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => onNavigate(card.page)}
                  className="border-2 border-gray-400 bg-white p-6 cursor-pointer hover:bg-gray-50"
                >
                  <div className="text-gray-600 text-sm mb-2">{card.label}</div>
                  <div className="text-gray-800">{card.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Activity */}
          <section className="mb-8">
            <div className="text-gray-800 mb-4">Recent Activity</div>
            <div className="border-2 border-gray-400 bg-white p-6">
              <div className="space-y-3">
                <div className="border-b-2 border-gray-300 pb-3">
                  <div className="text-gray-800 text-sm mb-1">Task "Design Homepage Layout" marked complete</div>
                  <div className="text-gray-500 text-xs">2 hours ago</div>
                </div>
                <div className="border-b-2 border-gray-300 pb-3">
                  <div className="text-gray-800 text-sm mb-1">New member Ahmed Khan joined Web Development Project</div>
                  <div className="text-gray-500 text-xs">4 hours ago</div>
                </div>
                <div className="border-b-2 border-gray-300 pb-3">
                  <div className="text-gray-800 text-sm mb-1">Deadline approaching: "Implement User Authentication" due in 2 days</div>
                  <div className="text-gray-500 text-xs">5 hours ago</div>
                </div>
              </div>
              <button 
                onClick={() => onNavigate('notifications')}
                className="w-full border-2 border-gray-600 bg-gray-200 text-gray-800 px-4 py-2 cursor-pointer hover:bg-gray-300 mt-4"
              >
                View All Activity
              </button>
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <div className="text-gray-800 mb-4">Quick Actions</div>
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate('projects')}
                className="border-2 border-gray-800 bg-white text-gray-800 px-6 py-3 cursor-pointer hover:bg-gray-800 hover:text-white"
              >
                View All Projects
              </button>
              <button 
                onClick={() => onNavigate('chat')}
                className="border-2 border-gray-800 bg-white text-gray-800 px-6 py-3 cursor-pointer hover:bg-gray-800 hover:text-white"
              >
                Open Chat
              </button>
              <button 
                onClick={() => onNavigate('team')}
                className="border-2 border-gray-800 bg-white text-gray-800 px-6 py-3 cursor-pointer hover:bg-gray-800 hover:text-white"
              >
                View Team
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
