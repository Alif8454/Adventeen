
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import CoursePurchasePage from './pages/CoursePurchasePage';
import MainLayout from './components/MainLayout';

// Layout for authentication pages to keep their specific header and background
const AuthLayout = () => (
  <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-indigo-50 via-white to-white">
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);


const App: React.FC = () => {
  return (
    <Routes>
      {/* Main application routes with shared header and footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/course/:courseId" element={<CoursePurchasePage />} />
      </Route>

      {/* Auth routes with a simpler layout */}
      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
