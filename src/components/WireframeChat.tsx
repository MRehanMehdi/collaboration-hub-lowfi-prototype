import { WireframeHeader } from './WireframeHeader';
import { WireframeSidebar } from './WireframeSidebar';

interface WireframeChatProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function WireframeChat({ onNavigate, onLogout }: WireframeChatProps) {
  const messages = [
    { id: 1, sender: 'Ahmed Khan', message: 'Good morning team! Status update on homepage design?', time: '9:30 AM', isCurrentUser: false },
    { id: 2, sender: 'You', message: 'Making good progress, will share mockups by end of day', time: '9:35 AM', isCurrentUser: true },
    { id: 3, sender: 'Hassan Ali', message: 'Backend authentication module is ready for testing', time: '10:15 AM', isCurrentUser: false },
    { id: 4, sender: 'Bilal Ahmed', message: 'Can someone review the database schema?', time: '10:30 AM', isCurrentUser: false },
    { id: 5, sender: 'Usman Malik', message: 'I will review it this afternoon', time: '10:45 AM', isCurrentUser: false },
    { id: 6, sender: 'You', message: 'Great work everyone! Keep it up', time: '11:00 AM', isCurrentUser: true },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <WireframeHeader title="Chat / Messaging" onLogout={onLogout} />
      
      <div className="flex flex-1">
        <WireframeSidebar activePage="chat" onNavigate={onNavigate} />
        
        <main className="flex-1 p-8 flex flex-col">
          <div className="mb-6">
            <h2 className="text-gray-800">Team Chat - Web Development Project</h2>
          </div>

          {/* Chat Container */}
          <div className="flex-1 flex gap-6">
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Messages Area */}
              <div className="flex-1 border-2 border-gray-400 bg-white p-6 mb-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`${
                        msg.isCurrentUser ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div
                        className={`inline-block border-2 border-gray-400 p-3 max-w-md ${
                          msg.isCurrentUser ? 'bg-gray-200' : 'bg-gray-50'
                        }`}
                      >
                        <div className="text-gray-800 text-sm mb-1">{msg.sender}</div>
                        <div className="text-gray-700 text-sm mb-2">{msg.message}</div>
                        <div className="text-gray-500 text-xs">{msg.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input Area */}
              <div className="border-2 border-gray-400 bg-white p-4">
                <div className="flex gap-4">
                  <div className="flex-1 border-2 border-gray-400 bg-gray-50 px-4 py-3">
                    <span className="text-gray-400">Type your message...</span>
                  </div>
                  <button className="border-2 border-gray-800 bg-gray-800 text-white px-8 py-3 cursor-pointer hover:bg-gray-700">
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Online Members Sidebar */}
            <div className="w-64 border-2 border-gray-400 bg-white p-4">
              <div className="text-gray-800 mb-4 pb-3 border-b-2 border-gray-300">Online Members</div>
              <div className="space-y-2">
                {['Ahmed Khan', 'Hassan Ali', 'Bilal Ahmed', 'Usman Malik', 'Omar Farooq'].map((member, index) => (
                  <div key={index} className="flex items-center gap-2 border-2 border-gray-400 bg-gray-50 p-2">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{member}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
