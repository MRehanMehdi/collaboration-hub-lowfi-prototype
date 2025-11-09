import { WireframeHeader } from './WireframeHeader';
import { WireframeSidebar } from './WireframeSidebar';

interface WireframeNotificationsProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
  onSelectNotification: (type: string, id: number) => void;
}

export function WireframeNotifications({ onNavigate, onLogout, onSelectNotification }: WireframeNotificationsProps) {
  const notifications = [
    {
      id: 1,
      type: 'task',
      title: 'Task Completed',
      message: 'Task "Design Homepage Layout" marked complete by Bilal Ahmed',
      time: '10 minutes ago',
      read: false,
      relatedId: 3
    },
    {
      id: 2,
      type: 'project',
      title: 'New File Uploaded',
      message: 'Ahmed Khan uploaded "design-mockups.pdf" to Web Development Project',
      time: '1 hour ago',
      read: false,
      relatedId: 1
    },
    {
      id: 3,
      type: 'chat',
      title: 'New Chat Message',
      message: 'Hassan Ali sent a message in project chat',
      time: '2 hours ago',
      read: false,
      relatedId: 0
    },
    {
      id: 4,
      type: 'task',
      title: 'Deadline Reminder',
      message: 'Task "Implement User Authentication" due in 2 days',
      time: '3 hours ago',
      read: true,
      relatedId: 4
    },
    {
      id: 5,
      type: 'team',
      title: 'Team Member Added',
      message: 'Usman Malik joined Mobile App Design project',
      time: '5 hours ago',
      read: true,
      relatedId: 2
    },
    {
      id: 6,
      type: 'task',
      title: 'Task Assigned',
      message: 'You have been assigned to "Database Schema Design"',
      time: '1 day ago',
      read: true,
      relatedId: 5
    },
    {
      id: 7,
      type: 'project',
      title: 'Project Update',
      message: 'Marketing Campaign project progress updated to 25%',
      time: '1 day ago',
      read: true,
      relatedId: 4
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <WireframeHeader title="Notifications" onLogout={onLogout} />
      
      <div className="flex flex-1">
        <WireframeSidebar activePage="home" onNavigate={onNavigate} />
        
        <main className="flex-1 p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-gray-800">Notifications / Activity Panel</h2>
            <button className="border-2 border-gray-600 bg-gray-200 text-gray-800 px-6 py-2 cursor-pointer hover:bg-gray-300">
              Mark All as Read
            </button>
          </div>

          {/* Notifications List */}
          <div className="max-w-4xl">
            <div className="border-2 border-gray-400 bg-white p-6">
              <div className="space-y-2">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => onSelectNotification(notification.type, notification.relatedId)}
                    className={`border-2 border-gray-400 p-4 cursor-pointer ${
                      notification.read ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-gray-100`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-gray-800">{notification.title}</div>
                      {!notification.read && (
                        <div className="w-3 h-3 bg-gray-800 rounded-full mt-1"></div>
                      )}
                    </div>
                    <div className="text-gray-600 text-sm mb-2">{notification.message}</div>
                    <div className="text-gray-500 text-xs">{notification.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Filter Options */}
          <div className="mt-6 max-w-4xl">
            <div className="text-gray-600 text-sm mb-3">Filter Notifications</div>
            <div className="flex gap-2">
              <button className="border-2 border-gray-800 bg-gray-800 text-white px-4 py-2 cursor-pointer hover:bg-gray-700">
                All
              </button>
              <button className="border-2 border-gray-600 bg-white text-gray-800 px-4 py-2 cursor-pointer hover:bg-gray-100">
                Tasks
              </button>
              <button className="border-2 border-gray-600 bg-white text-gray-800 px-4 py-2 cursor-pointer hover:bg-gray-100">
                Projects
              </button>
              <button className="border-2 border-gray-600 bg-white text-gray-800 px-4 py-2 cursor-pointer hover:bg-gray-100">
                Messages
              </button>
              <button className="border-2 border-gray-600 bg-white text-gray-800 px-4 py-2 cursor-pointer hover:bg-gray-100">
                Team
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
