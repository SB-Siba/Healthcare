import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import SearchDoctor from '../components/sections/SearchDoctor';
import Team from '../components/sections/Team';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section with Background */}
      <div className="about-hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="hero-content">
                <div className="tagline-wrapper mb-3">
                  <span className="tagline">
                    <i className="fas fa-heartbeat me-2"></i>
                    About Us
                  </span>
                </div>
                <h1 className="hero-title mb-4">
                  Welcome to <span className="highlight">MEDINOVA</span>
                </h1>
                <p className="hero-subtitle mb-0">
                  Your trusted partner in healthcare excellence. We provide world-class 
                  medical services with compassion, innovation, and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Medical Icons - Removed or made visible */}
        <div className="floating-icons">
          <i className="icon-1 fas fa-heartbeat"></i>
          <i className="icon-2 fas fa-stethoscope"></i>
          <i className="icon-3 fas fa-user-md"></i>
        </div>
      </div>

      {/* Main Content Sections */}
      <div id="about-details">
        <AboutSection />
        <SearchDoctor />
        <Team />
      </div>

      <style jsx>{`
        .about-hero-section {
          background: linear-gradient(135deg, 
            rgba(19, 197, 221, 0.08) 0%, 
            rgba(13, 139, 165, 0.12) 100%);
          position: relative;
          overflow: hidden;
          padding: 80px 0 60px;
          margin-top: -80px;
        }
        
        .tagline-wrapper {
          margin-bottom: 15px;
        }
        
        .tagline {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 30px;
          color: #13c5dd;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 1px;
          border: 1px solid rgba(19, 197, 221, 0.3);
        }
        
        .hero-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
        }
        
        .highlight {
          color: #13c5dd;
          position: relative;
          display: inline-block;
        }
        
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(19, 197, 221, 0.2);
          z-index: -1;
          border-radius: 4px;
        }
        
        .hero-subtitle {
          font-size: 1.1rem;
          color: #4a5568;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .floating-icons {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        
        .floating-icons i {
          position: absolute;
          color: rgba(19, 197, 221, 0.2); /* More visible color */
          font-size: 1.8rem;
          animation: float 6s ease-in-out infinite;
        }
        
        .icon-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .icon-2 {
          top: 15%;
          right: 10%;
          animation-delay: 2s;
        }
        
        .icon-3 {
          bottom: 20%;
          left: 15%;
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
          }
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.2rem;
          }
        }
        
        @media (max-width: 768px) {
          .about-hero-section {
            padding: 70px 0 50px;
          }
          
          .hero-title {
            font-size: 1.8rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
            padding: 0 15px;
          }
          
          .floating-icons i {
            font-size: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.6rem;
          }
          
          .about-hero-section {
            padding: 60px 0 40px;
          }
          
          .floating-icons i {
            display: none; /* Hide icons on very small screens */
          }
        }
      `}</style>
    </>
  );
};

export default AboutPage;