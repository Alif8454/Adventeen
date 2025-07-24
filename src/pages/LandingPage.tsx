import React from "react";
import { Link } from "react-router-dom";
import { allCourses } from "../../data/mockData";
import { Img } from 'react-image'

const PlayIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
  </svg>
);

const MascotCharacter = () => (
  <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center">
    <div className="absolute w-full h-full">
      <Img
        src="/img/mascot.png"
        width={500}
        height={500}
        alt="mascot"
      />
    </div>
    <div className="absolute top-16 right-0 md:top-24 md:right-5 bg-blue-500 text-white px-4 py-2 rounded-xl shadow-lg">
      <p className="font-bold text-lg">10 K+</p>
      <p className="text-xs max-w-[100px]">
        Active Learners &<br />
        Changemakers
      </p>
    </div>
  </div>
);

const ChevronIcon = ({
  direction = "left",
}: {
  direction: "left" | "right";
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
    />
  </svg>
);

const features = [
  { name: "Social Project Society" },
  { name: "Courses and Tutoring" },
  { name: "Accountability Partner" },
  { name: "Quizzes and Missions" },
  { name: "AI Assistant" },
];
const testimonials = [
  {
    quote: "A terrific piece of praise",
    name: "Name",
    description: "Description",
    img: "https://i.pravatar.cc/50?img=1",
  },
  {
    quote: "A fantastic bit of feedback",
    name: "Name",
    description: "Description",
    img: "https://i.pravatar.cc/50?img=2",
  },
  {
    quote: "A genuinely glowing review",
    name: "Name",
    description: "Description",
    img: "https://i.pravatar.cc/50?img=3",
  },
];
const landingPageCourses = [allCourses[0], allCourses[1], allCourses[2]];

const LandingPage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative container mx-auto">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12">
          <button
            className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition"
            aria-label="Previous Slide"
          >
            <ChevronIcon direction="left" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12">
          <button
            className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition"
            aria-label="Next Slide"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center pt-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E1F4B] leading-tight">
              Empowering youths
              <br />
              beyond learning.
            </h1>
            <p className="mt-4 text-gray-600 max-w-lg mx-auto md:mx-0">
              First Indonesian super-app about all things youth empowerment,
              built for youth, students, and achievers. Discover your purpose
              and make grounbreaking impact.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link
                to="/signup"
                className="px-8 py-3 font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-md hover:scale-105 transform transition-transform"
              >
                Join Now
              </Link>
              <a
                href="#"
                className="flex items-center gap-2 text-indigo-700 font-semibold hover:text-indigo-900 transition-colors"
              >
                <PlayIcon className="w-8 h-8 text-blue-500" /> Behind Advanteens
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <MascotCharacter />
          </div>
        </div>

        <div className="mt-12 flex items-center space-x-4 p-2 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto">
          <div
            className="flex-grow bg-gray-100 h-16 rounded-xl"
            aria-hidden="true"
          ></div>
          <div
            className="bg-indigo-600 w-32 h-16 rounded-xl"
            aria-hidden="true"
          ></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1E1F4B] mb-12">
          Discover awesome features!
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center space-y-3">
              <div className="bg-white rounded-full h-24 w-24 md:h-28 md:w-28 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-110 border-4 border-gray-200"></div>
              <p className="font-semibold text-gray-700 w-32">{feature.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landingPageCourses.map((course) => (
            <Link
              to={`/course/${course.id}`}
              key={course.id}
              className="block group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col transform group-hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 flex-grow">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 mt-1">{course.publisher}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Text Info Section */}
      <section className="container mx-auto py-16">
        <div className="text-left max-w-3xl">
          <h2 className="text-4xl font-bold text-[#1E1F4B] mb-8">
            Section heading
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Subheading</h3>
              <p className="text-gray-600">
                Body text for whatever you'd like to expand on the main point.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Subheading</h3>
              <p className="text-gray-600">
                Body text for whatever you'd like to say. Add main takeaway
                points, quotes, anecdotes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Subheading</h3>
              <p className="text-gray-600">
                Body text for whatever you'd like to add more to the main point.
                It provides details, explanations, and context.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <button className="px-8 py-3 bg-[#1E204B] text-white font-semibold rounded-lg shadow-md hover:bg-black transition-colors">
              Button
            </button>
            <button className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors">
              Secondary button
            </button>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#1E1F4B] mb-12 text-center">
          Section heading
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1623194095594-b2653b3b9b4a?q=80&w=1964&auto=format&fit=crop"
              alt="Picnic with food"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Subheading</h3>
              <p className="text-gray-600">
                Body text for whatever you'd like to add more to the subheading.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1542344807-16d567384976?q=80&w=2070&auto=format&fit=crop"
              alt="Croissants"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Subheading</h3>
              <p className="text-gray-600">
                Body text for whatever you'd like to expand on the main point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#1E1F4B] mb-12 text-center">
          Section heading
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg italic text-gray-700">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-6">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1E1F4B] mb-8">
          Section heading
        </h2>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-3 bg-[#1E204B] text-white font-semibold rounded-lg shadow-md hover:bg-black transition-colors">
            Button
          </button>
          <button className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors">
            Secondary button
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
