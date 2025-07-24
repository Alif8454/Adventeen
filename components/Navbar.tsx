
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';

// SVG Icon Components
const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);


const Navbar: React.FC = () => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const menuRef = useRef<HTMLDivElement>(null);

    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
    const isLoginPage = location.pathname === '/login';

    const handleLogout = () => {
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
        navigate('/login');
    };
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    useEffect(() => {
        // Close menus on route change
        setIsMobileMenuOpen(false);
        setIsUserMenuOpen(false);
    }, [location.pathname]);

    // Desktop nav links for auth pages
    const authNavLinks = (
        <div className="flex items-center space-x-4">
            <span className="text-gray-600 hidden sm:inline">
                {isLoginPage ? 'New to Edvanteen?' : 'Already have an account?'}
            </span>
            <Link
                to={isLoginPage ? '/signup' : '/login'}
                className="px-6 py-2 text-indigo-600 font-semibold bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
                {isLoginPage ? 'Sign Up' : 'Log In'}
            </Link>
        </div>
    );
    
    // Desktop nav links for main app
    const mainNavLinks = (
        <div className="flex items-center space-x-4">
            <div className="relative">
                <input type="text" placeholder="Search" className="pl-4 pr-10 py-2 w-64 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <SearchIcon />
                </div>
            </div>
            <div className="relative" ref={menuRef}>
                <button 
                    onClick={() => setIsUserMenuOpen(prev => !prev)}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-violet-50 focus:ring-indigo-500"
                    aria-haspopup="true"
                    aria-expanded={isUserMenuOpen}
                >
                    <UserIcon/>
                    <span className="text-sm font-medium">username@gmail.com</span>
                </button>
                {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-10">
                        <Link
                            to="/profile"
                            className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            Profile
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );

    // Mobile nav links for auth pages
    const mobileAuthNavLinks = (
        <div className="flex flex-col items-center space-y-4">
            <span className="text-gray-600">
                {isLoginPage ? 'New to Edvanteen?' : 'Already have an account?'}
            </span>
            <Link
                to={isLoginPage ? '/signup' : '/login'}
                className="w-full text-center px-6 py-2 text-indigo-600 font-semibold bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
                {isLoginPage ? 'Sign Up' : 'Log In'}
            </Link>
        </div>
    );

    // Mobile nav links for main app
    const mobileMainNavLinks = (
        <div className="space-y-4">
             <div className="relative w-full">
                <input type="text" placeholder="Search" className="pl-4 pr-10 py-2 w-full rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <SearchIcon />
                </div>
            </div>
             <Link
                to="/profile"
                className="w-full text-center block px-6 py-2 text-gray-700 font-semibold bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                role="menuitem"
            >
                Profile
            </Link>
            <button
                onClick={handleLogout}
                className="w-full text-center block px-6 py-2 text-gray-700 font-semibold bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                role="menuitem"
            >
                Logout
            </button>
        </div>
    );

    return (
        <div className={`min-h-screen font-sans text-gray-800 flex flex-col ${isAuthPage ? 'bg-gradient-to-br from-indigo-50 via-white to-white' : 'bg-violet-50'}`}>
            <header className="py-4 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/">
                        <img src="/img/advanteen-logo.png" alt="Edvanteen Logo" className="h-8 w-auto" />
                    </Link>
                    <div className="hidden md:flex items-center space-x-6">
                        {isAuthPage ? authNavLinks : mainNavLinks}
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
                           {isMobileMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 bg-white p-4 rounded-lg shadow-lg container mx-auto">
                       {isAuthPage ? mobileAuthNavLinks : mobileMainNavLinks}
                    </div>
                )}
            </header>

            <main className={`flex-grow ${isAuthPage ? '' : 'py-8'}`}>
                <Outlet />
            </main>
            
            {!isAuthPage && (
                <footer className="bg-white py-12 px-6 md:px-12 lg:px-24 mt-auto">
                    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-2xl font-bold mb-4">Edvanteen</h4>
                            <div className="flex space-x-4 text-gray-500">
                                <a href="#" aria-label="Facebook" className="hover:text-indigo-600">FB</a>
                                <a href="#" aria-label="LinkedIn" className="hover:text-indigo-600">IN</a>
                                <a href="#" aria-label="Youtube" className="hover:text-indigo-600">YT</a>
                                <a href="#" aria-label="Instagram" className="hover:text-indigo-600">IG</a>
                            </div>
                        </div>
                        <div>
                            <h5 className="font-bold mb-4">Topic</h5>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-indigo-600">Page</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Page</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Page</a></li>
                            </ul>
                        </div>
                         <div>
                            <h5 className="font-bold mb-4">Topic</h5>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-indigo-600">Page</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Page</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Page</a></li>
                            </ul>
                        </div>
                         <div>
                            <h5 className="font-bold mb-4">Topic</h5>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-indigo-600">Page</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Page</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Page</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
};

export default Navbar;
