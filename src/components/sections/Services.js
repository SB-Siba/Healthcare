import React, { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <div ref={sectionRef} className="container-fluid py-5 services-section">
      <div className="container">
        <div className="text-center mb-5">
          {/* Animated Badge */}
          <div className={`animated-badge ${inView ? 'animated-badge-active' : ''} mb-4`}>
            <h5 className="text-primary mb-0">
              <i className="fas fa-heartbeat me-2 pulse-icon"></i>
              Our Specialized Services
            </h5>
          </div>
          
          {/* Main Title with Split Text Animation */}
          <div className={`title-wrapper ${inView ? 'title-wrapper-active' : ''}`}>
            <h2 className="display-4 fw-bold mb-4">
              <span className="title-part-1">Advanced Medical</span>
              <span className="title-part-2 text-primary"> Solutions</span>
            </h2>
          </div>
          
          {/* Description with Fade Up Animation */}
          <div className={`description-wrapper ${inView ? 'description-wrapper-active' : ''}`}>
            <div className="w-75 mx-auto">
              <p className="lead text-muted">
                Delivering exceptional healthcare through innovative technology, 
                specialized expertise, and patient-centered approaches for optimal outcomes.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div 
                className={`service-card ${inView ? 'card-visible' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  '--tile-color': service.color 
                }}
              >
                {/* Card Background Glow */}
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
                  
                  <h3 className="tile-title mt-4">{service.title}</h3>
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
        
        {/* Animated Button */}
        <div className={`text-center mt-5 ${inView ? 'button-visible' : ''}`}>
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
        }
        
        .services-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #007bff, transparent);
        }
        
        /* Header Animations */
        .animated-badge {
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.8s ease 0.2s;
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
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .title-wrapper-active .title-part-1 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.3s;
        }
        
        .title-wrapper-active .title-part-2 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.5s;
        }
        
        .description-wrapper {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.7s;
        }
        
        .description-wrapper-active {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Card Animations */
        .service-card {
          background: white;
          border-radius: 12px;
          padding: 30px;
          position: relative;
          height: 100%;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.04);
          transform: scale(0.8) translateY(50px);
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        
        .service-card.card-visible {
          transform: scale(1) translateY(0);
          opacity: 1;
        }
        
        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: var(--tile-color);
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
          transition: opacity 0.6s ease;
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
          width: 70px;
          height: 70px;
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
          transition: all 0.5s ease;
        }
        
        .service-card:hover .tile-icon {
          transform: rotateY(360deg) scale(1.1);
        }
        
        .icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 85px;
          height: 85px;
          background: var(--tile-color);
          border-radius: 50%;
          filter: blur(10px);
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
          background: rgba(0, 123, 255, 0.1);
          color: #007bff;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .pulse-badge {
          animation: badgePulse 2s infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
          }
        }
        
        .tile-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 20px 0 15px;
          color: #2d3748;
          transform: translateY(10px);
          opacity: 0;
          animation: titleReveal 0.8s ease forwards;
          animation-delay: 0.2s;
        }
        
        .service-card.card-visible .tile-title {
          animation: titleReveal 0.8s ease forwards;
          animation-delay: 0.2s;
        }
        
        @keyframes titleReveal {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .tile-description {
          color: #718096;
          line-height: 1.6;
          margin-bottom: 20px;
          min-height: 80px;
          font-size: 0.95rem;
          transform: translateY(10px);
          opacity: 0;
          animation: descriptionReveal 0.8s ease forwards;
          animation-delay: 0.3s;
        }
        
        .service-card.card-visible .tile-description {
          animation: descriptionReveal 0.8s ease forwards;
          animation-delay: 0.3s;
        }
        
        @keyframes descriptionReveal {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .tile-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 20px 0;
        }
        
        .stat-chip {
          background: rgba(0, 0, 0, 0.04);
          color: #4a5568;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          transition: all 0.3s ease;
          transform: scale(0.9);
          opacity: 0;
          animation: chipPop 0.5s ease forwards;
        }
        
        .service-card.card-visible .stat-chip {
          animation: chipPop 0.5s ease forwards;
          animation-delay: calc(0.4s + (var(--index) * 0.1s));
        }
        
        @keyframes chipPop {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .service-card:hover .stat-chip {
          background: var(--tile-color);
          color: white;
          transform: translateY(-2px) scale(1.05);
        }
        
        .tile-features {
          margin: 25px 0;
          padding: 15px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .feature {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #4a5568;
          font-size: 14px;
          transform: translateX(-10px);
          opacity: 0;
          animation: featureSlide 0.6s ease forwards;
        }
        
        .service-card.card-visible .feature {
          animation: featureSlide 0.6s ease forwards;
          animation-delay: calc(0.6s + (var(--feature-index) * 0.1s));
        }
        
        @keyframes featureSlide {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .feature:last-child {
          margin-bottom: 0;
        }
        
        .feature i {
          font-size: 14px;
        }
        
        .tile-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          opacity: 0;
          transform: translateY(10px);
          animation: footerReveal 0.8s ease forwards;
          animation-delay: 0.8s;
        }
        
        .service-card.card-visible .tile-footer {
          animation: footerReveal 0.8s ease forwards;
          animation-delay: 0.8s;
        }
        
        @keyframes footerReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .tile-btn {
          background: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .tile-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: 0.5s;
        }
        
        .tile-btn:hover::before {
          left: 100%;
        }
        
        .tile-btn:hover {
          transform: translateX(5px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        .tile-availability {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .available-dot {
          width: 8px;
          height: 8px;
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
          font-size: 12px;
          color: #718096;
        }
        
        .tile-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
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
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, transparent 50%, var(--tile-color) 50%);
          border-top-right-radius: 12px;
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }
        
        .service-card:hover .tile-corner-decoration {
          opacity: 0.3;
        }
        
        /* View All Button Animation */
        .button-visible {
          animation: buttonReveal 1s ease forwards;
        }
        
        .btn-primary-animated {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          color: white;
          border: none;
          padding: 15px 40px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          transform: translateY(20px);
          opacity: 0;
          animation: buttonPop 0.8s ease 1s forwards;
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
          transition: 0.5s;
        }
        
        .btn-primary-animated:hover::before {
          left: 100%;
        }
        
        .btn-primary-animated:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 30px rgba(0, 123, 255, 0.3);
        }
        
        @media (max-width: 768px) {
          .service-card {
            padding: 20px;
          }
          
          .tile-footer {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }
          
          .tile-stats {
            gap: 6px;
          }
          
          .stat-chip {
            font-size: 11px;
            padding: 5px 10px;
          }
          
          .tile-features {
            margin: 15px 0;
            padding: 10px 0;
          }
          
          .feature {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;