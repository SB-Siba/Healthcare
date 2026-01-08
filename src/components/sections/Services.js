import React, { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMobile || !inView) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, inView]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const services = [
    {
      icon: 'fa fa-user-md',
      title: 'Critical Response Unit',
      description: 'Specialized emergency response teams with mobile ICU capabilities and rapid intervention protocols.',
      stats: ['Immediate Dispatch', 'Mobile ICU', 'Trauma Experts'],
      color: '#FF6B6B'
    },
    {
      icon: 'fa fa-procedures',
      title: 'Precision Surgery Center',
      description: 'Advanced surgical suites with robotic assistance for minimally invasive procedures and faster recovery.',
      stats: ['Robotic Systems', 'Minimally Invasive', 'Expert Teams'],
      color: '#4ECDC4'
    },
    {
      icon: 'fa fa-stethoscope',
      title: 'Comprehensive Health Screening',
      description: 'Complete wellness assessments with personalized health optimization plans and preventive care.',
      stats: ['Full Diagnostics', 'Preventive Plans', 'Health Coaching'],
      color: '#45B7D1'
    },
    {
      icon: 'fa fa-ambulance',
      title: 'Advanced Medical Transport',
      description: 'State-of-the-art ambulance fleet with telemedicine capabilities and critical care specialists onboard.',
      stats: ['Telemedicine Enabled', 'Critical Care', 'Rapid Transit'],
      color: '#96CEB4'
    },
    {
      icon: 'fa fa-pills',
      title: 'Integrated Pharmacy Services',
      description: 'Complete medication management with compounding services, counseling, and digital prescription tracking.',
      stats: ['Compounding Lab', 'Digital Tracking', 'Medication Review'],
      color: '#FFA502'
    },
    {
      icon: 'fa fa-microscope',
      title: 'Advanced Diagnostic Laboratory',
      description: 'Cutting-edge pathology and molecular diagnostics with rapid results and comprehensive reporting.',
      stats: ['Molecular Testing', 'Rapid Results', 'Expert Analysis'],
      color: '#9C88FF'
    }
  ];

  return (
    <div ref={sectionRef} className="container-fluid py-3 services-section">
      <div className="container">
        <div className="text-center mb-3">
          <div className={`animated-badge ${inView ? 'animated-badge-active' : ''} mb-2`}>
            <h5 className="text-primary mb-0">
              <i className="fas fa-heartbeat me-2 pulse-icon"></i>
              Our Specialized Services
            </h5>
          </div>
          
          <div className={`title-wrapper ${inView ? 'title-wrapper-active' : ''}`}>
            <h2 className="display-4 fw-bold mb-2">
              <span className="title-part-1">Advanced Medical</span>
              <span className="title-part-2 text-primary"> Solutions</span>
            </h2>
          </div>
          
          <div className={`description-wrapper ${inView ? 'description-wrapper-active' : ''}`}>
            <p className="lead text-muted mb-0">
              Delivering exceptional healthcare through innovative technology, 
              specialized expertise, and patient-centered approaches.
            </p>
          </div>
        </div>
        
        {/* Desktop Grid View */}
        <div className="d-none d-md-block">
          <div className="row g-3">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div 
                  className={`service-card ${inView ? 'card-visible' : ''}`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    '--tile-color': service.color 
                  }}
                >
                  <div className="card-glow"></div>
                  
                  <div className="card-content">
                    <div className="tile-header">
                      <div className="tile-icon-wrapper">
                        <div className="tile-icon">
                          <i className={`${service.icon} fa-2x`}></i>
                        </div>
                        <div className="icon-glow"></div>
                      </div>
                      <div className="tile-badge pulse-badge">Specialized</div>
                    </div>
                    
                    <h3 className="tile-title mt-3">{service.title}</h3>
                    <p className="tile-description">{service.description}</p>
                    
                    <div className="tile-stats">
                      {service.stats.map((stat, idx) => (
                        <span key={idx} className="stat-chip">{stat}</span>
                      ))}
                    </div>
                    
                    <div className="tile-features">
                      <div className="feature">
                        <i className="fas fa-check-circle text-primary"></i>
                        <span>Board Certified</span>
                      </div>
                      <div className="feature">
                        <i className="fas fa-check-circle text-primary"></i>
                        <span>Latest Technology</span>
                      </div>
                      <div className="feature">
                        <i className="fas fa-check-circle text-primary"></i>
                        <span>Patient Focused</span>
                      </div>
                    </div>
                    
                    <div className="tile-footer">
                      <button className="tile-btn" style={{ backgroundColor: service.color }}>
                        <span>Learn More</span>
                        <i className="fas fa-arrow-right"></i>
                      </button>
                      <div className="tile-availability">
                        <span className="available-dot"></span>
                        <span className="available-text">Advanced Care</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tile-wave"></div>
                  <div className="tile-corner-decoration"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Slider View */}
        <div className="d-md-none mobile-slider-container">
          <div 
            ref={sliderRef}
            className="mobile-slider-wrapper"
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s ease'
            }}
          >
            {services.map((service, index) => (
              <div key={index} className="mobile-slide">
                <div 
                  className={`service-card ${inView ? 'card-visible' : ''}`}
                  style={{ 
                    '--tile-color': service.color 
                  }}
                >
                  <div className="card-glow"></div>
                  
                  <div className="card-content">
                    <div className="tile-header">
                      <div className="tile-icon-wrapper">
                        <div className="tile-icon">
                          <i className={`${service.icon} fa-2x`}></i>
                        </div>
                        <div className="icon-glow"></div>
                      </div>
                      <div className="tile-badge pulse-badge">Specialized</div>
                    </div>
                    
                    <h3 className="tile-title mt-3">{service.title}</h3>
                    <p className="tile-description">{service.description}</p>
                    
                    <div className="tile-stats">
                      {service.stats.map((stat, idx) => (
                        <span key={idx} className="stat-chip">{stat}</span>
                      ))}
                    </div>
                    
                    <div className="tile-features">
                      <div className="feature">
                        <i className="fas fa-check-circle text-primary"></i>
                        <span>Board Certified</span>
                      </div>
                      <div className="feature">
                        <i className="fas fa-check-circle text-primary"></i>
                        <span>Latest Technology</span>
                      </div>
                      <div className="feature">
                        <i className="fas fa-check-circle text-primary"></i>
                        <span>Patient Focused</span>
                      </div>
                    </div>
                    
                    <div className="tile-footer">
                      <button className="tile-btn" style={{ backgroundColor: service.color }}>
                        <span>Learn More</span>
                        <i className="fas fa-arrow-right"></i>
                      </button>
                      <div className="tile-availability">
                        <span className="available-dot"></span>
                        <span className="available-text">Advanced Care</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tile-wave"></div>
                  <div className="tile-corner-decoration"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Simple Slider Buttons */}
          <div className="slider-buttons">
            <button 
              className="slider-btn prev"
              onClick={() => setCurrentSlide(prev => prev === 0 ? services.length - 1 : prev - 1)}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              className="slider-btn next"
              onClick={() => setCurrentSlide(prev => (prev + 1) % services.length)}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        
        <div className={`text-center mt-3 ${inView ? 'button-visible' : ''}`}>
          <button className="btn-primary-animated">
            <i className="fas fa-clipboard-list me-2"></i>
            Explore All Services
          </button>
        </div>
      </div>

      <style jsx>{`
        .services-section {
          background: #ffffff;
          position: relative;
          overflow: hidden;
          padding-top: 0 !important;
        }
        
        .services-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #20b2c6, transparent);
        }
        
        /* Header Animations - Tight spacing */
        .animated-badge {
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.5s ease 0.1s;
          margin-bottom: 0.5rem !important;
        }
        
        .animated-badge-active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .pulse-icon {
          animation: heartbeat 2s infinite;
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .title-wrapper {
          overflow: hidden;
        }
        
        .title-part-1, .title-part-2 {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }
        
        .title-wrapper-active .title-part-1 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.2s;
        }
        
        .title-wrapper-active .title-part-2 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.3s;
        }
        
        .description-wrapper {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.6s ease 0.4s;
          margin-top: 0.5rem;
        }
        
        .description-wrapper-active {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Card Animations - Compact */
        .service-card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          position: relative;
          height: 100%;
          min-height: 350px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.03);
          transform: scale(0.95);
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          margin: 0 auto;
          max-width: 100%;
          width: 100%;
        }
        
        @media (min-width: 768px) {
          .service-card {
            transform: scale(0.8) translateY(30px);
            opacity: 0;
            min-height: auto;
            height: 380px;
          }
          
          .service-card.card-visible {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
        
        .service-card:hover {
          transform: translateY(-5px) scale(1.01);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border-color: var(--tile-color);
        }
        
        @media (max-width: 768px) {
          .service-card:hover {
            transform: translateY(-3px) scale(1.005);
          }
        }
        
        .card-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, var(--tile-color) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }
        
        .service-card:hover .card-glow {
          opacity: 0.1;
        }
        
        .card-content {
          position: relative;
          z-index: 1;
        }
        
        .tile-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .tile-icon-wrapper {
          position: relative;
          width: 50px;
          height: 50px;
        }
        
        .tile-icon {
          width: 100%;
          height: 100%;
          background: var(--tile-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
          z-index: 2;
          transition: all 0.4s ease;
        }
        
        .service-card:hover .tile-icon {
          transform: rotateY(360deg) scale(1.1);
        }
        
        .icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 65px;
          height: 65px;
          background: var(--tile-color);
          border-radius: 50%;
          filter: blur(8px);
          opacity: 0.15;
          animation: gentlePulse 3s infinite;
        }
        
        @keyframes gentlePulse {
          0%, 100% {
            opacity: 0.15;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.25;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
        
        .tile-badge {
          background: rgba(32, 178, 198, 0.1);
          color: #20b2c6;
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 11px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .pulse-badge {
          animation: badgePulse 2s infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(32, 178, 198, 0.4);
          }
          70% {
            box-shadow: 0 0 0 8px rgba(32, 178, 198, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(32, 178, 198, 0);
          }
        }
        
        .tile-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 12px 0 8px;
          color: #2d3748;
          line-height: 1.3;
        }
        
        .tile-description {
          color: #718096;
          line-height: 1.5;
          margin-bottom: 12px;
          font-size: 0.85rem;
          min-height: 60px;
        }
        
        .tile-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin: 12px 0;
        }
        
        .stat-chip {
          background: rgba(0, 0, 0, 0.04);
          color: #4a5568;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 10px;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        
        .service-card:hover .stat-chip {
          background: var(--tile-color);
          color: white;
          transform: translateY(-1px);
        }
        
        .tile-features {
          margin: 15px 0;
          padding: 10px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .feature {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
          color: #4a5568;
          font-size: 12px;
        }
        
        .feature i {
          font-size: 12px;
        }
        
        .tile-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 12px;
        }
        
        .tile-btn {
          background: #20b2c6;
          color: white;
          border: none;
          padding: 6px 14px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
          font-size: 13px;
        }
        
        .tile-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: 0.4s;
        }
        
        .tile-btn:hover::before {
          left: 100%;
        }
        
        .tile-btn:hover {
          transform: translateX(3px);
          box-shadow: 0 4px 10px rgba(32, 178, 198, 0.3);
        }
        
        .tile-availability {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .available-dot {
          width: 5px;
          height: 5px;
          background: #48BB78;
          border-radius: 50%;
          animation: blink 2s infinite;
        }
        
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .available-text {
          font-size: 10px;
          color: #718096;
        }
        
        .tile-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--tile-color), color-mix(in srgb, var(--tile-color) 70%, white), var(--tile-color));
          background-size: 200% 100%;
          animation: waveMove 3s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .service-card:hover .tile-wave {
          opacity: 1;
        }
        
        @keyframes waveMove {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        .tile-corner-decoration {
          position: absolute;
          top: 0;
          right: 0;
          width: 25px;
          height: 25px;
          background: linear-gradient(135deg, transparent 50%, var(--tile-color) 50%);
          border-top-right-radius: 10px;
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }
        
        .service-card:hover .tile-corner-decoration {
          opacity: 0.3;
        }
        
        /* Mobile Slider Styles - Compact */
        .mobile-slider-container {
          position: relative;
          overflow: hidden;
          margin: 0 -5px;
        }
        
        .mobile-slider-wrapper {
          display: flex;
          transition: transform 0.4s ease;
          width: 100%;
        }
        
        .mobile-slide {
          flex: 0 0 100%;
          min-width: 100%;
          padding: 0 5px;
        }
        
        /* Simple Slider Buttons */
        .slider-buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          margin-top: 15px;
        }
        
        .slider-btn {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          border: 2px solid #20b2c6;
          background: white;
          color: #20b2c6;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
          font-size: 14px;
        }
        
        .slider-btn:hover {
          background: #20b2c6;
          color: white;
          transform: scale(1.05);
        }
        
        /* View All Button Animation */
        .button-visible {
          animation: buttonReveal 0.5s ease forwards;
        }
        
        .btn-primary-animated {
          background: linear-gradient(135deg, #20b2c6 0%, #1a9cb0 100%);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          transform: translateY(10px);
          opacity: 0;
          animation: buttonPop 0.6s ease 0.8s forwards;
        }
        
        @keyframes buttonReveal {
          to {
            opacity: 1;
          }
        }
        
        @keyframes buttonPop {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .btn-primary-animated::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: 0.4s;
        }
        
        .btn-primary-animated:hover::before {
          left: 100%;
        }
        
        .btn-primary-animated:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 10px 20px rgba(32, 178, 198, 0.3);
        }
        
        @media (max-width: 768px) {
          .service-card {
            padding: 18px;
            min-height: 340px;
          }
          
          .tile-footer {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }
          
          .tile-stats {
            gap: 4px;
          }
          
          .stat-chip {
            font-size: 9px;
            padding: 3px 6px;
          }
          
          .tile-features {
            margin: 12px 0;
            padding: 8px 0;
          }
          
          .feature {
            font-size: 11px;
          }
          
          .btn-primary-animated {
            padding: 10px 25px;
            font-size: 0.95rem;
          }
        }
        
        @media (min-width: 768px) and (max-width: 992px) {
          .service-card {
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;