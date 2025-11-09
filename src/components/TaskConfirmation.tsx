interface TaskConfirmationProps {
  onReturnToDashboard: () => void;
}

export function TaskConfirmation({ onReturnToDashboard }: TaskConfirmationProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="border-b-2 border-gray-400 bg-white px-8 py-4">
        <h1 className="text-gray-800">Collaborative Group Project Hub</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto p-8 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="w-full">
          {/* Confirmation Card */}
          <div className="border-2 border-gray-400 bg-white p-12 text-center">
            {/* Success Icon Placeholder */}
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 border-2 border-gray-800 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-800">✓</span>
              </div>
            </div>

            {/* Confirmation Message */}
            <h2 className="text-gray-800 mb-4">Task Update Confirmation</h2>
            
            <div className="mb-8">
              <p className="text-gray-700 mb-2">Task status changed successfully</p>
              <p className="text-gray-600 text-sm">The task has been marked as completed</p>
            </div>

            {/* Return to Dashboard Button */}
            <button
              onClick={onReturnToDashboard}
              className="border-2 border-gray-800 bg-gray-800 text-white px-8 py-3 cursor-pointer hover:bg-gray-700"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
