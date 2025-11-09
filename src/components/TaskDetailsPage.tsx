interface TaskDetailsPageProps {
  taskId: number;
  onBack: () => void;
  onMarkComplete: () => void;
}

export function TaskDetailsPage({ taskId, onBack, onMarkComplete }: TaskDetailsPageProps) {
  // Mock task data based on taskId
  const taskData = {
    1: {
      projectName: 'Web Development Project',
      taskName: 'Design Homepage Layout',
      description: 'Create a responsive homepage layout following the design guidelines. Include header, hero section, features section, and footer. Ensure mobile compatibility.',
      assignedMembers: ['Ahmed Khan', 'Hassan Ali', 'Bilal Ahmed'],
      status: 'In Progress',
      dueDate: 'Nov 15, 2025'
    },
    2: {
      projectName: 'Web Development Project',
      taskName: 'Implement User Authentication',
      description: 'Set up user authentication system with login, logout, and registration functionality. Use secure password hashing and session management.',
      assignedMembers: ['Usman Malik', 'Omar Farooq'],
      status: 'In Progress',
      dueDate: 'Nov 18, 2025'
    },
    3: {
      projectName: 'Mobile App Design',
      taskName: 'Create Wireframes',
      description: 'Design low-fidelity wireframes for all main app screens including login, dashboard, profile, and settings pages.',
      assignedMembers: ['Faisal Sheikh', 'Hamza Ibrahim', 'Zain Abbas'],
      status: 'Pending',
      dueDate: 'Nov 20, 2025'
    },
    4: {
      projectName: 'Data Analysis Project',
      taskName: 'Clean Dataset',
      description: 'Remove duplicate entries, handle missing values, and standardize data formats for the customer database analysis.',
      assignedMembers: ['Fahad Rashid', 'Saad Akhtar'],
      status: 'In Progress',
      dueDate: 'Nov 12, 2025'
    },
    5: {
      projectName: 'Marketing Campaign',
      taskName: 'Write Content Draft',
      description: 'Create initial content draft for social media campaign including post captions, hashtags, and call-to-action messaging.',
      assignedMembers: ['Arslan Hussain', 'Kamran Baig', 'Imran Shah'],
      status: 'Pending',
      dueDate: 'Nov 25, 2025'
    }
  };

  const task = taskData[taskId as keyof typeof taskData];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="border-b-2 border-gray-400 bg-white px-8 py-4">
        <h1 className="text-gray-800">Collaborative Group Project Hub</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="border-2 border-gray-600 bg-gray-200 text-gray-800 px-6 py-2 cursor-pointer hover:bg-gray-300"
          >
            ← Back to Dashboard
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-gray-800">Task Details</h2>
        </div>

        {/* Task Details Card */}
        <div className="border-2 border-gray-400 bg-white p-8">
          {/* Project Name */}
          <div className="mb-6 pb-6 border-b-2 border-gray-300">
            <div className="text-gray-600 text-sm mb-1">Project</div>
            <div className="text-gray-800">{task.projectName}</div>
          </div>

          {/* Task Name */}
          <div className="mb-6">
            <div className="text-gray-600 text-sm mb-1">Task Name</div>
            <div className="text-gray-800">{task.taskName}</div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <div className="text-gray-600 text-sm mb-2">Description</div>
            <div className="border-2 border-gray-400 bg-gray-50 p-4">
              <p className="text-gray-700">{task.description}</p>
            </div>
          </div>

          {/* Assigned Members */}
          <div className="mb-6">
            <div className="text-gray-600 text-sm mb-2">Assigned Members</div>
            <div className="border-2 border-gray-400 bg-gray-50 p-4">
              <div className="space-y-2">
                {task.assignedMembers.map((member, index) => (
                  <div key={index} className="text-gray-700">
                    • {member}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Status and Due Date */}
          <div className="mb-8 flex gap-6">
            <div className="flex-1">
              <div className="text-gray-600 text-sm mb-1">Status</div>
              <div className="text-gray-800">{task.status}</div>
            </div>
            <div className="flex-1">
              <div className="text-gray-600 text-sm mb-1">Due Date</div>
              <div className="text-gray-800">{task.dueDate}</div>
            </div>
          </div>

          {/* Mark as Completed Button */}
          <button
            onClick={onMarkComplete}
            className="w-full border-2 border-gray-800 bg-gray-800 text-white px-6 py-3 cursor-pointer hover:bg-gray-700"
          >
            Mark as Completed
          </button>
        </div>
      </main>
    </div>
  );
}
