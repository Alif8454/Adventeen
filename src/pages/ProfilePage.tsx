
import React from 'react';
import { Link } from 'react-router-dom';
import { mockUser, allCourses } from '../../data/mockData';

// Get only the courses the user is enrolled in
const enrolledCourses = allCourses.filter(course => mockUser.enrolledCourseIds.includes(course.id));

const ProfilePage: React.FC = () => {
    return (
        <div className="container mx-auto">
            {/* Profile Header */}
            <section className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 mb-16">
                <img src={mockUser.avatarUrl} alt={mockUser.name} className="w-32 h-32 rounded-full object-cover ring-4 ring-indigo-300" />
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">{mockUser.name}</h1>
                    <p className="text-lg text-gray-500 mt-1">{mockUser.email}</p>
                </div>
            </section>
            
            {/* Enrolled Courses */}
            <section>
                <h2 className="text-3xl font-bold text-[#333C6D] mb-8">My Courses</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {enrolledCourses.map(course => (
                        <Link to={`/course/${course.id}`} key={course.id} className="block group">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col transform group-hover:-translate-y-2 transition-transform duration-300">
                                <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover"/>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h4 className="text-xl font-bold text-gray-800 flex-grow">{course.title}</h4>
                                    <p className="text-gray-500 mt-1">{course.publisher}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                    {enrolledCourses.length === 0 && (
                        <p className="text-gray-600 col-span-full text-center">You haven't enrolled in any courses yet.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ProfilePage;
