import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/layout/Topbar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AppointmentPage from './pages/AppointmentPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import TestimonialPage from './pages/TestimonialPage';
import SearchPage from './pages/SearchPage';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize main.js functions
    import('./assets/js/main').then(module => {
      module.initializeBackToTop();
      module.initializeNavbarDropdown();
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Topbar />
        <Navbar />
        <main style={{ 
          paddingTop: '100px', // Adjust this value based on your navbar height
          minHeight: 'calc(100vh - 300px)' // Ensures footer stays at bottom
        }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/testimonials" element={<TestimonialPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/blog-detail" element={<BlogDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;