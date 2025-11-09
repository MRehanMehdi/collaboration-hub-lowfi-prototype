interface WireframeLoginProps {
  onLogin: () => void;
}

export function WireframeLogin({ onLogin }: WireframeLoginProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* App Title */}
        <div className="text-center mb-8">
          <div className="border-2 border-gray-800 bg-white px-8 py-6 inline-block">
            <h1 className="text-gray-800">Collaborative Group Project Hub</h1>
          </div>
        </div>

        {/* Login Form */}
        <div className="border-2 border-gray-400 bg-white p-8">
          <h2 className="text-gray-800 mb-6">Login</h2>
          
          {/* Username Field */}
          <div className="mb-4">
            <div className="text-gray-600 text-sm mb-2">Username</div>
            <div className="border-2 border-gray-400 bg-gray-50 px-4 py-3">
              <span className="text-gray-400">Enter your username</span>
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <div className="text-gray-600 text-sm mb-2">Password</div>
            <div className="border-2 border-gray-400 bg-gray-50 px-4 py-3">
              <span className="text-gray-400">Enter your password</span>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="mb-6 text-right">
            <span className="text-gray-600 text-sm cursor-pointer hover:text-gray-800">Forgot password?</span>
          </div>

          {/* Login Button */}
          <button 
            onClick={onLogin}
            className="w-full border-2 border-gray-800 bg-gray-800 text-white px-6 py-3 cursor-pointer hover:bg-gray-700"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
