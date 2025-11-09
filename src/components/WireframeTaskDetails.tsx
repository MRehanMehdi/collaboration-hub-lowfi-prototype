import { WireframeHeader } from './WireframeHeader';
import { WireframeSidebar } from './WireframeSidebar';

interface WireframeTaskDetailsProps {
  taskId: number;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  onBack: () => void;
}

export function WireframeTaskDetails({ taskId, onNavigate, onLogout, onBack }: WireframeTaskDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <WireframeHeader title="Task Details" onLogout={onLogout} />
      
      <div className="flex flex-1">
        <WireframeSidebar activePage="projects" onNavigate={onNavigate} />
        
        <main className="flex-1 p-8">
          <div className="mb-6">
            <button
              onClick={onBack}
              className="border-2 border-gray-600 bg-gray-200 text-gray-800 px-6 py-2 cursor-pointer hover:bg-gray-300 mb-4"
            >
              ← Back to Task Board
            </button>
            <h2 className="text-gray-800">Task Details</h2>
          </div>

          <div className="max-w-3xl border-2 border-gray-400 bg-white p-8">
            {/* Task Name */}
            <div className="mb-6 pb-6 border-b-2 border-gray-300">
              <div className="text-gray-600 text-sm mb-1">Task Name</div>
              <div className="text-gray-800">Design Homepage Layout</div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <div className="text-gray-600 text-sm mb-2">Description</div>
              <div className="border-2 border-gray-400 bg-gray-50 p-4">
                <p className="text-gray-700">
                  Create a responsive homepage layout following the design guidelines. 
                  Include header, hero section, features section, and footer. 
                  Ensure mobile compatibility and accessibility standards.
                </p>
              </div>
            </div>

            {/* Assigned To */}
            <div className="mb-6">
              <div className="text-gray-600 text-sm mb-1">Assigned To</div>
              <div className="text-gray-800">Bilal Ahmed</div>
            </div>

            {/* Status and Due Date */}
            <div className="mb-6 grid grid-cols-2 gap-6">
              <div>
                <div className="text-gray-600 text-sm mb-1">Status</div>
                <div className="text-gray-800">In Progress</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm mb-1">Due Date</div>
                <div className="text-gray-800">Nov 15, 2025</div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mb-6">
              <div className="text-gray-600 text-sm mb-2">Comments</div>
              <div className="border-2 border-gray-400 bg-gray-50 p-4 space-y-3">
                <div className="border-b border-gray-300 pb-2">
                  <div className="text-gray-800 text-sm mb-1">Ahmed Khan</div>
                  <div className="text-gray-600 text-sm">Looking good! Please add dark mode support.</div>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <div className="text-gray-800 text-sm mb-1">Hassan Ali</div>
                  <div className="text-gray-600 text-sm">Approved the initial mockups</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 border-2 border-gray-800 bg-gray-800 text-white px-6 py-3 cursor-pointer hover:bg-gray-700">
                Mark as Complete
              </button>
              <button className="flex-1 border-2 border-gray-600 bg-white text-gray-800 px-6 py-3 cursor-pointer hover:bg-gray-100">
                Edit Task
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
