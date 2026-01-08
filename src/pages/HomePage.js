import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import Services from '../components/sections/Services';
import AppointmentSection from '../components/sections/AppointmentSection';
import Pricing from '../components/sections/Pricing';
import SearchDoctor from '../components/sections/SearchDoctor';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import Blog from '../components/sections/Blog';

const HomePage = () => {
  useEffect(() => {
    // Initialize any carousels or animations here
    if (window.$) {
      // Initialize Owl Carousel if needed
    }
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <AppointmentSection />
      <Pricing />
      <SearchDoctor />
      <Team />
      <Testimonials />
      <Blog />
    </>
  );
};

export default HomePage;