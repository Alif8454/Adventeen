import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  const navLinks = (
    <div className="flex items-center space-x-4">
      <span className="text-gray-600 hidden sm:inline">
        {isLoginPage ? 'New to Advanteens?' : 'Already have an account?'}
      </span>
      <Link
        to={isLoginPage ? '/signup' : '/login'}
        className="px-6 py-2 text-indigo-600 font-semibold bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
      >
        {isLoginPage ? 'Sign Up' : 'Log In'}
      </Link>
    </div>
  );

  return (
    <header className="py-4 px-6 sm:px-10 lg:px-20">
      <nav className="flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-indigo-800 flex items-center">
            <div className="relative w-8 h-8 mr-2">
                <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400">
                    <polygon points="50,5 61,35 95,35 68,57 79,87 50,70 21,87 32,57 5,35 39,35" fill="currentColor"/>
                </svg>
                <svg viewBox="0 0 100 100" className="absolute w-full h-full text-blue-600 top-0 left-0 transform scale-75 origin-center">
                    <polygon points="50,5 61,35 95,35 68,57 79,87 50,70 21,87 32,57 5,35 39,35" fill="currentColor"/>
                </svg>
            </div>
            <span className="-ml-1">dvanteens</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
             {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white p-4 rounded-lg shadow-lg">
           <div className="flex flex-col items-center space-y-4">
                <span className="text-gray-600">
                    {isLoginPage ? 'New to Advanteens?' : 'Already have an account?'}
                </span>
                <Link
                    to={isLoginPage ? '/signup' : '/login'}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center px-6 py-2 text-indigo-600 font-semibold bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                >
                    {isLoginPage ? 'Sign Up' : 'Log In'}
                </Link>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;