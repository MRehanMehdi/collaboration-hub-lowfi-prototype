interface ChatMessage {
  sender: string;
  message: string;
  time: string;
}

export function ChatBox() {
  const activeMembers = [
    'Ahmed Khan',
    'Hassan Ali',
    'Usman Malik',
    'Faisal Sheikh',
    'Fahad Rashid'
  ];

  const messages: ChatMessage[] = [
    { sender: 'Ahmed Khan', message: 'Task update completed', time: '10:30 AM' },
    { sender: 'Hassan Ali', message: 'Review needed on homepage design', time: '10:45 AM' },
    { sender: 'Usman Malik', message: 'Meeting at 2 PM today', time: '11:00 AM' },
  ];

  return (
    <div className="border-2 border-gray-400 bg-white p-6">
      <h3 className="text-gray-800 mb-4">Chat Box</h3>
      
      {/* Active Members Section */}
      <div className="mb-6">
        <div className="text-gray-600 text-sm mb-3">Active Members</div>
        <div className="border-2 border-gray-400 bg-gray-50 p-3">
          <div className="space-y-2">
            {activeMembers.map((member, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-800"></div>
                <span className="text-gray-700 text-sm">{member}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="mb-4">
        <div className="text-gray-600 text-sm mb-3">Recent Messages</div>
        <div className="border-2 border-gray-400 bg-gray-50 p-3 h-64 overflow-y-auto">
          <div className="space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className="border-b border-gray-300 pb-2 last:border-b-0">
                <div className="text-gray-800 text-sm mb-1">{msg.sender}</div>
                <div className="text-gray-600 text-sm mb-1">{msg.message}</div>
                <div className="text-gray-500 text-xs">{msg.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="border-2 border-gray-400 bg-gray-50 px-4 py-3 mb-2">
        <span className="text-gray-400 text-sm">Type a message...</span>
      </div>
      <button className="w-full border-2 border-gray-800 bg-gray-800 text-white px-4 py-2 cursor-pointer hover:bg-gray-700">
        Send
      </button>
    </div>
  );
}
