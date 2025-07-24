import React from 'react';
import { Link } from 'react-router-dom';

// SVG Icon Components
const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const LandingPage: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative container mx-auto bg-gradient-to-br from-[#EAEAFE] to-white rounded-3xl shadow-lg p-8 md:p-12 lg:p-16">
                <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-sm rounded-full p-2 text-indigo-500 hover:bg-white transition hidden md:block" aria-label="Previous">
                    <ChevronLeftIcon />
                </button>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#333C6D] leading-tight">
                            Empowering youths<br/>beyond learning.
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
                            First Indonesian super-app about all things youth empowerment, built for youth, students, and achievers. Access social projects, courses, communities, and tools to discover your purpose towards making an impact.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                            <Link to="/signup" className="px-8 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md hover:scale-105 transform transition-transform">Join Now</Link>
                            <a href="#" className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
                                <PlayIcon /> Behind Edvanteen
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="/img/mascot.png" alt="Student learning" className="" />
                    </div>
                </div>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/70 backdrop-blur-sm rounded-full p-2 text-indigo-500 hover:bg-white transition hidden md:block" aria-label="Next">
                    <ChevronRightIcon />
                </button>
            </section>

            {/* Features Section */}
            <section className="container mx-auto text-center py-20">
                <h3 className="text-4xl font-bold text-[#333C6D] mb-8">Discover aws<span className="text-indigo-600">O</span>ME features!</h3>
                <div className="p-8 bg-white/50 rounded-2xl shadow-md">
                    <div className="flex justify-center items-center space-x-4 md:space-x-8 lg:space-x-12">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="bg-white rounded-full h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-110"></div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Courses Section */}
             <section className="container mx-auto py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Programming" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-800">Guide to beginner programming</h4>
                            <p className="text-gray-500 mt-1">Universitas Multimedia Nusantara</p>
                        </div>
                    </div>
                     <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        <img src="https://images.unsplash.com/photo-1522881193457-31ae824a80a3?q=80&w=2070&auto=format&fit=crop" alt="Creative" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-800">Paint your creative career</h4>
                            <p className="text-gray-500 mt-1">Universitas Multimedia Nusantara</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Public speaking" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-800">Upcoming Multimedia Nusantara</h4>
                            <p className="text-gray-500 mt-1">Universitas Multimedia Nusantara</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Text Info Section */}
            <section className="container mx-auto py-16 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                   <h3 className="text-4xl font-bold text-[#333C6D] mb-8">Section heading</h3>
                    <div className="space-y-6">
                       <div>
                            <h4 className="text-xl font-semibold mb-2">Subheading</h4>
                            <p className="text-gray-600">Body text for whatever you'd like to expand on the main point.</p>
                       </div>
                       <div>
                            <h4 className="text-xl font-semibold mb-2">Subheading</h4>
                            <p className="text-gray-600">Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes.</p>
                       </div>
                       <div>
                            <h4 className="text-xl font-semibold mb-2">Subheading</h4>
                            <p className="text-gray-600">Body text for whatever you'd like to add more to the main point. It provides details, explanations, and context.</p>
                       </div>
                    </div>
                    <div className="mt-8 flex gap-4">
                       <button className="px-6 py-3 bg-[#1E204B] text-white font-semibold rounded-lg shadow-md hover:bg-black transition-colors">Button</button>
                       <button className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors">Secondary button</button>
                    </div>
                </div>
                {/* Placeholder for a potential image or graphic on the right */}
                <div></div>
            </section>

            {/* Image Section */}
            <section className="container mx-auto py-16">
                 <h3 className="text-4xl font-bold text-[#333C6D] mb-12 text-center">Section heading</h3>
                <div className="grid md:grid-cols-2 gap-8">
                   <div>
                        <img src="https://images.unsplash.com/photo-1623194095594-b2653b3b9b4a?q=80&w=1964&auto=format&fit=crop" alt="Picnic with food" className="w-full h-80 object-cover rounded-2xl shadow-lg"/>
                        <div className="mt-4">
                            <h4 className="text-xl font-semibold mb-2">Subheading</h4>
                            <p className="text-gray-600">Body text for whatever you'd like to add more to the subheading.</p>
                        </div>
                   </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1542344807-16d567384976?q=80&w=2070&auto=format&fit=crop" alt="Croissants" className="w-full h-80 object-cover rounded-2xl shadow-lg"/>
                         <div className="mt-4">
                            <h4 className="text-xl font-semibold mb-2">Subheading</h4>
                            <p className="text-gray-600">Body text for whatever you'd like to expand on the main point.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonials Section */}
            <section className="container mx-auto py-16">
                 <h3 className="text-4xl font-bold text-[#333C6D] mb-12 text-center">Section heading</h3>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                       <p className="text-lg italic text-gray-700">"A terrific piece of praise"</p>
                       <div className="flex items-center mt-6">
                            <img src="https://i.pravatar.cc/50?img=1" alt="User 1" className="w-12 h-12 rounded-full object-cover"/>
                            <div className="ml-4">
                                <p className="font-bold">Name</p>
                                <p className="text-sm text-gray-500">Description</p>
                            </div>
                       </div>
                    </div>
                     <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                       <p className="text-lg italic text-gray-700">"A fantastic bit of feedback"</p>
                       <div className="flex items-center mt-6">
                            <img src="https://i.pravatar.cc/50?img=2" alt="User 2" className="w-12 h-12 rounded-full object-cover"/>
                            <div className="ml-4">
                                <p className="font-bold">Name</p>
                                <p className="text-sm text-gray-500">Description</p>
                            </div>
                       </div>
                    </div>
                     <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                       <p className="text-lg italic text-gray-700">"A genuinely glowing review"</p>
                       <div className="flex items-center mt-6">
                            <img src="https://i.pravatar.cc/50?img=3" alt="User 3" className="w-12 h-12 rounded-full object-cover"/>
                            <div className="ml-4">
                                <p className="font-bold">Name</p>
                                <p className="text-sm text-gray-500">Description</p>
                            </div>
                       </div>
                    </div>
                 </div>
            </section>
            
             {/* Final CTA Section */}
            <section className="container mx-auto py-16 text-center">
                <h3 className="text-4xl font-bold text-[#333C6D] mb-8">Section heading</h3>
                 <div className="mt-8 flex justify-center gap-4">
                    <button className="px-6 py-3 bg-[#1E204B] text-white font-semibold rounded-lg shadow-md hover:bg-black transition-colors">Button</button>
                    <button className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors">Secondary button</button>
                 </div>
            </section>
        </>
    );
};

export default LandingPage;