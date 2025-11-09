interface Notification {
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export function NotificationBox() {
  const notifications: Notification[] = [
    {
      title: 'New Task Assigned',
      message: 'You have been assigned to "Design Homepage Layout"',
      time: '5 minutes ago',
      read: false
    },
    {
      title: 'Deadline Reminder',
      message: 'Task "Implement User Authentication" due in 2 days',
      time: '1 hour ago',
      read: false
    },
    {
      title: 'Team Update',
      message: 'Hassan Ali joined the Web Development Project',
      time: '2 hours ago',
      read: true
    },
    {
      title: 'Comment Added',
      message: 'New comment on "Clean Dataset" task',
      time: '3 hours ago',
      read: true
    },
    {
      title: 'Task Completed',
      message: 'Usman Malik marked "Create Wireframes" as complete',
      time: '5 hours ago',
      read: true
    },
  ];

  return (
    <div className="border-2 border-gray-400 bg-white p-6">
      <h3 className="text-gray-800 mb-4">Notifications</h3>
      
      <div className="space-y-2">
        {notifications.map((notification, index) => (
          <div 
            key={index}
            className={`border-2 border-gray-400 p-3 ${
              notification.read ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-gray-800 text-sm">{notification.title}</span>
              {!notification.read && (
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-1"></div>
              )}
            </div>
            <div className="text-gray-600 text-xs mb-2">{notification.message}</div>
            <div className="text-gray-500 text-xs">{notification.time}</div>
          </div>
        ))}
      </div>
      
      <button className="w-full border-2 border-gray-600 bg-gray-200 text-gray-800 px-4 py-2 cursor-pointer hover:bg-gray-300 mt-4">
        View All Notifications
      </button>
    </div>
  );
}
