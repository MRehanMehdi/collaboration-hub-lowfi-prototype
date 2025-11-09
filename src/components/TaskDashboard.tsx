import { ChatBox } from './ChatBox';
import { TeamMembersBox } from './TeamMembersBox';
import { NotificationBox } from './NotificationBox';

interface Task {
  id: number;
  projectName: string;
  taskName: string;
  status: string;
}

interface TaskDashboardProps {
  onViewTask: (taskId: number) => void;
  onLogout: () => void;
}

export function TaskDashboard({ onViewTask, onLogout }: TaskDashboardProps) {
  const tasks: Task[] = [
    {
      id: 1,
      projectName: 'Web Development Project',
      taskName: 'Design Homepage Layout',
      status: 'In Progress'
    },
    {
      id: 2,
      projectName: 'Web Development Project',
      taskName: 'Implement User Authentication',
      status: 'In Progress'
    },
    {
      id: 3,
      projectName: 'Mobile App Design',
      taskName: 'Create Wireframes',
      status: 'Pending'
    },
    {
      id: 4,
      projectName: 'Data Analysis Project',
      taskName: 'Clean Dataset',
      status: 'In Progress'
    },
    {
      id: 5,
      projectName: 'Marketing Campaign',
      taskName: 'Write Content Draft',
      status: 'Pending'
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
      <main className="max-w-7xl mx-auto p-8">
        <div className="mb-6">
          <h2 className="text-gray-800">Dashboard</h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Tasks and Team */}
          <div className="col-span-2 space-y-6">
            {/* Active Projects and Tasks */}
            <div className="border-2 border-gray-400 bg-white p-6">
              <h3 className="text-gray-800 mb-6">Active Projects and Tasks</h3>
              
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div 
                    key={task.id}
                    className="border-2 border-gray-400 bg-gray-50 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        {/* Project Name */}
                        <div className="mb-2">
                          <span className="text-gray-600 text-sm">Project: </span>
                          <span className="text-gray-800">{task.projectName}</span>
                        </div>

                        {/* Task Name */}
                        <div className="mb-2">
                          <span className="text-gray-600 text-sm">Task: </span>
                          <span className="text-gray-800">{task.taskName}</span>
                        </div>

                        {/* Status */}
                        <div>
                          <span className="text-gray-600 text-sm">Status: </span>
                          <span className="text-gray-700 text-sm">{task.status}</span>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <button
                        onClick={() => onViewTask(task.id)}
                        className="border-2 border-gray-800 bg-white text-gray-800 px-6 py-2 cursor-pointer hover:bg-gray-800 hover:text-white ml-4"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Members Box */}
            <TeamMembersBox />
          </div>

          {/* Right Column - Chat and Notifications */}
          <div className="col-span-1 space-y-6">
            {/* Notifications Box */}
            <NotificationBox />
            
            {/* Chat Box */}
            <ChatBox />
          </div>
        </div>
      </main>
    </div>
  );
}
