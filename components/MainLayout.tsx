import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

// SVG Icon Components
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round                                 " strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
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

const MainLayout: React.FC = () => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        setIsUserMenuOpen(false);
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

    return (
        <div className="bg-violet-50 font-sans text-gray-800 min-h-screen flex flex-col">
            {/* Header */}
            <header className="py-4 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <button className="md:hidden text-gray-700">
                            <MenuIcon />
                        </button>
                        <Link to="/" className="text-3xl font-bold text-indigo-800 flex items-center">
                            <div className="relative w-8 h-8 mr-2">
                                <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400">
                                    <polygon points="50,5 61,35 95,35 68,57 79,87 50,70 21,87 32,57 5,35 39,35" fill="currentColor"/>
                                </svg>
                                <svg viewBox="0 0 100 100" className="absolute w-full h-full text-blue-600 top-0 left-0 transform scale-75 origin-center">
                                    <polygon points="50,5 61,35 95,35 68,57 79,87 50,70 21,87 32,57 5,35 39,35" fill="currentColor"/>
                                </svg>
                            </div>
                            <span className="-ml-1">advanteens</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative">
                            <input type="text" placeholder="Search" className="pl-4 pr-10 py-2 w-64 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
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
                                        onClick={() => setIsUserMenuOpen(false)}
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
                </div>
            </header>

            <main className="px-6 md:px-12 lg:px-24 py-8 flex-grow">
                <Outlet />
            </main>
            
            {/* Footer */}
            <footer className="bg-white py-12 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-2xl font-bold mb-4">Advanteens</h4>
                        <div className="flex space-x-4 text-gray-500">
                           {/* Social Icons here - using placeholders */}
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
        </div>
    );
};

export default MainLayout;