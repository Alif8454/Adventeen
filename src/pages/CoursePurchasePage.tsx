
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allCourses } from '../../data/mockData';

const CoursePurchasePage: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const course = allCourses.find(c => c.id === Number(courseId));

    if (!course) {
        return (
            <div className="container mx-auto text-center py-20">
                <h1 className="text-4xl font-bold text-red-600">Course not found!</h1>
                <p className="mt-4 text-lg text-gray-600">The course you are looking for does not exist or has been moved.</p>
                <Link to="/" className="mt-8 inline-block px-8 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition-colors">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-5">
                    {/* Left: Image */}
                    <div className="md:col-span-2">
                        <img src={course.imageUrl} alt={course.title} className="w-full h-64 md:h-full object-cover" />
                    </div>

                    {/* Right: Details */}
                    <div className="md:col-span-3 p-8 md:p-12 flex flex-col">
                        <div className="flex-grow">
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#333C6D] leading-tight">{course.title}</h1>
                            <p className="mt-2 text-lg text-gray-500 font-medium">by {course.publisher}</p>
                            
                            <p className="mt-6 text-gray-700 leading-relaxed">
                                {course.description}
                            </p>
                            
                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">What you'll get</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center"><CheckIcon /> 20 hours on-demand video</li>
                                    <li className="flex items-center"><CheckIcon /> 15 downloadable resources</li>
                                    <li className="flex items-center"><CheckIcon /> Full lifetime access</li>
                                    <li className="flex items-center"><CheckIcon /> Certificate of completion</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 text-right space-y-6">
                             <p className="text-4xl font-bold text-indigo-600">{course.price}</p>
                            <div className="flex flex-col sm:flex-row sm:justify-end gap-4">
                                <button className="w-full sm:w-auto px-8 py-3 font-semibold text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                                    Add to Cart
                                </button>
                                <button className="w-full sm:w-auto px-8 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md hover:scale-105 transform transition-transform">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);


export default CoursePurchasePage;
