import { WireframeHeader } from './WireframeHeader';
import { WireframeSidebar } from './WireframeSidebar';

interface WireframeSettingsProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function WireframeSettings({ onNavigate, onLogout }: WireframeSettingsProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <WireframeHeader title="Settings" onLogout={onLogout} />
      
      <div className="flex flex-1">
        <WireframeSidebar activePage="settings" onNavigate={onNavigate} />
        
        <main className="flex-1 p-8">
          <div className="mb-6">
            <h2 className="text-gray-800">Account Settings</h2>
          </div>

          <div className="max-w-3xl space-y-6">
            {/* Profile Settings */}
            <div className="border-2 border-gray-400 bg-white p-6">
              <h3 className="text-gray-800 mb-4">Profile Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-gray-600 text-sm mb-2">Full Name</div>
                  <div className="border-2 border-gray-400 bg-gray-50 px-4 py-3">
                    <span className="text-gray-700">Ahmed Khan</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-gray-600 text-sm mb-2">Email</div>
                  <div className="border-2 border-gray-400 bg-gray-50 px-4 py-3">
                    <span className="text-gray-700">ahmed.khan@example.com</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-gray-600 text-sm mb-2">Role</div>
                  <div className="border-2 border-gray-400 bg-gray-50 px-4 py-3">
                    <span className="text-gray-700">Frontend Developer</span>
                  </div>
                </div>
              </div>

              <button className="mt-4 border-2 border-gray-800 bg-gray-800 text-white px-6 py-2 cursor-pointer hover:bg-gray-700">
                Update Profile
              </button>
            </div>

            {/* Notification Preferences */}
            <div className="border-2 border-gray-400 bg-white p-6">
              <h3 className="text-gray-800 mb-4">Notification Preferences</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between border-2 border-gray-400 bg-gray-50 p-3">
                  <span className="text-gray-700 text-sm">Email Notifications</span>
                  <div className="w-12 h-6 border-2 border-gray-400 bg-white"></div>
                </div>
                
                <div className="flex items-center justify-between border-2 border-gray-400 bg-gray-50 p-3">
                  <span className="text-gray-700 text-sm">Task Updates</span>
                  <div className="w-12 h-6 border-2 border-gray-400 bg-white"></div>
                </div>
                
                <div className="flex items-center justify-between border-2 border-gray-400 bg-gray-50 p-3">
                  <span className="text-gray-700 text-sm">Chat Messages</span>
                  <div className="w-12 h-6 border-2 border-gray-400 bg-white"></div>
                </div>
              </div>

              <button className="mt-4 border-2 border-gray-800 bg-gray-800 text-white px-6 py-2 cursor-pointer hover:bg-gray-700">
                Save Preferences
              </button>
            </div>

            {/* Password Change */}
            <div className="border-2 border-gray-400 bg-white p-6">
              <h3 className="text-gray-800 mb-4">Change Password</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-gray-600 text-sm mb-2">Current Password</div>
                  <div className="border-2 border-gray-400 bg-gray-50 px-4 py-3">
                    <span className="text-gray-400">Enter current password</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-gray-600 text-sm mb-2">New Password</div>
                  <div className="border-2 border-gray-400 bg-gray-50 px-4 py-3">
                    <span className="text-gray-400">Enter new password</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-gray-600 text-sm mb-2">Confirm Password</div>
                  <div className="border-2 border-gray-400 bg-gray-50 px-4 py-3">
                    <span className="text-gray-400">Confirm new password</span>
                  </div>
                </div>
              </div>

              <button className="mt-4 border-2 border-gray-800 bg-gray-800 text-white px-6 py-2 cursor-pointer hover:bg-gray-700">
                Change Password
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
