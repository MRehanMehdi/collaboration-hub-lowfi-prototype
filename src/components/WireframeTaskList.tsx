import { WireframeHeader } from './WireframeHeader';
import { WireframeSidebar } from './WireframeSidebar';

interface WireframeTaskListProps {
  projectId: number;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  onBack: () => void;
  onSelectTask: (taskId: number) => void;
}

export function WireframeTaskList({ projectId, onNavigate, onLogout, onBack, onSelectTask }: WireframeTaskListProps) {
  const projectName = 'Web Development Project';

  const tasks = {
    todo: [
      { id: 1, name: 'Write Documentation', assignedTo: 'Ahmed Khan', dueDate: 'Nov 20, 2025' },
      { id: 2, name: 'Setup Testing Environment', assignedTo: 'Hassan Ali', dueDate: 'Nov 18, 2025' },
    ],
    inProgress: [
      { id: 3, name: 'Design Homepage Layout', assignedTo: 'Bilal Ahmed', dueDate: 'Nov 15, 2025' },
      { id: 4, name: 'Implement User Authentication', assignedTo: 'Usman Malik', dueDate: 'Nov 17, 2025' },
      { id: 5, name: 'Database Schema Design', assignedTo: 'Omar Farooq', dueDate: 'Nov 16, 2025' },
    ],
    completed: [
      { id: 6, name: 'Project Planning', assignedTo: 'Faisal Sheikh', dueDate: 'Nov 10, 2025' },
      { id: 7, name: 'Requirements Gathering', assignedTo: 'Hamza Ibrahim', dueDate: 'Nov 8, 2025' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <WireframeHeader title="Task List" onLogout={onLogout} />
      
      <div className="flex flex-1">
        <WireframeSidebar activePage="projects" onNavigate={onNavigate} />
        
        <main className="flex-1 p-8">
          <div className="mb-6">
            <button
              onClick={onBack}
              className="border-2 border-gray-600 bg-gray-200 text-gray-800 px-6 py-2 cursor-pointer hover:bg-gray-300 mb-4"
            >
              ← Back to Projects
            </button>
            <h2 className="text-gray-800">{projectName} - Task Board</h2>
          </div>

          {/* Task Columns */}
          <div className="grid grid-cols-3 gap-6">
            {/* To-Do Column */}
            <div className="border-2 border-gray-400 bg-white p-4">
              <div className="text-gray-800 mb-4 pb-3 border-b-2 border-gray-300">To-Do</div>
              <div className="space-y-3">
                {tasks.todo.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => onSelectTask(task.id)}
                    className="border-2 border-gray-400 bg-gray-50 p-4 cursor-pointer hover:bg-gray-100"
                  >
                    <div className="text-gray-800 mb-2">{task.name}</div>
                    <div className="text-gray-600 text-sm mb-1">
                      <span className="text-gray-700">Assigned To:</span> {task.assignedTo}
                    </div>
                    <div className="text-gray-600 text-sm">
                      <span className="text-gray-700">Due Date:</span> {task.dueDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* In Progress Column */}
            <div className="border-2 border-gray-400 bg-white p-4">
              <div className="text-gray-800 mb-4 pb-3 border-b-2 border-gray-300">In Progress</div>
              <div className="space-y-3">
                {tasks.inProgress.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => onSelectTask(task.id)}
                    className="border-2 border-gray-400 bg-gray-50 p-4 cursor-pointer hover:bg-gray-100"
                  >
                    <div className="text-gray-800 mb-2">{task.name}</div>
                    <div className="text-gray-600 text-sm mb-1">
                      <span className="text-gray-700">Assigned To:</span> {task.assignedTo}
                    </div>
                    <div className="text-gray-600 text-sm">
                      <span className="text-gray-700">Due Date:</span> {task.dueDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed Column */}
            <div className="border-2 border-gray-400 bg-white p-4">
              <div className="text-gray-800 mb-4 pb-3 border-b-2 border-gray-300">Completed</div>
              <div className="space-y-3">
                {tasks.completed.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => onSelectTask(task.id)}
                    className="border-2 border-gray-400 bg-gray-50 p-4 cursor-pointer hover:bg-gray-100"
                  >
                    <div className="text-gray-800 mb-2">{task.name}</div>
                    <div className="text-gray-600 text-sm mb-1">
                      <span className="text-gray-700">Assigned To:</span> {task.assignedTo}
                    </div>
                    <div className="text-gray-600 text-sm">
                      <span className="text-gray-700">Due Date:</span> {task.dueDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add Task Button */}
          <div className="mt-6">
            <button className="border-2 border-gray-800 bg-gray-800 text-white px-6 py-3 cursor-pointer hover:bg-gray-700">
              + Add New Task
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
