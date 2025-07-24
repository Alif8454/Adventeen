import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogInIllustration from '../../components/LogInIllustration';
import GoogleIcon from '../../components/GoogleIcon';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd have authentication logic here.
    // For now, we'll just navigate to the landing page.
    navigate('/');
  };

  return (
    <div className="container mx-auto px-6 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column: Welcome Text & Illustration */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Already have an account?
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Welcome back! Time to reboot your progress and get back on track.
          </p>
          <div className="mt-8">
            <LogInIllustration />
          </div>
        </div>

        {/* Right Column: Log In Form */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white p-8 lg:p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-center text-gray-800">Account Log In</h2>
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email-login" className="sr-only">Email</label>
                <input id="email-login" name="email" type="email" autoComplete="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="password-login" className="sr-only">Password</label>
                <input id="password-login" name="password" type="password" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Password" />
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-105">
                  Log In
                </button>
              </div>
            </form>
            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>
            <div className="mt-6">
              <button type="button" className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-md font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
                <GoogleIcon />
                <span className="ml-3">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;