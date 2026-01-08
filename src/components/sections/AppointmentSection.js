import React, { useState, useEffect } from 'react';

const AppointmentSection = () => {
  const [visible, setVisible] = useState(false);
  const [headingAnimation, setHeadingAnimation] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setHeadingAnimation(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Color variations of #13C5DD
  const colorPalette = {
    primary: '#13C5DD',    // Original color
    light: '#6BDBED',      // Light variation
    dark: '#0A8FA3',       // Dark variation
    bright: '#2DF0FF'      // Bright variation
  };

  return (
    <div className="container-fluid appointment-section">
      {/* Unique Animated Heading */}
      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8 text-center">
            <div className={`appointment-heading ${headingAnimation ? 'animated' : ''}`}>
              <div className="heading-badge">
                <i className="fas fa-calendar-check me-2"></i>
                Easy Scheduling
              </div>
              <h1 className="display-5 fw-bold text-white mt-3 mb-3">
                <span className="heading-part-1">Book Your</span>
                <span className="heading-part-2"> Medical Consultation</span>
              </h1>
              <p className="lead text-white opacity-85 mb-0">
                Connect with healthcare professionals in a comfortable, modern environment
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bubble-decoration">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
              backgroundColor: colorPalette.light
            }}
          ></div>
        ))}
      </div>
      
      <div className="container">
        <div className={`appointment-card ${visible ? 'visible' : ''}`}>
          <div className="row g-0">
            <div className="col-lg-6 appointment-content">
              <div className="content-wrapper">
                <div className="section-header">
                  <div className="welcome-badge">
                    <i className="fas fa-hands-helping me-2"></i>
                    Patient Experience
                  </div>
                  <h3 className="fw-bold text-white mt-2 mb-2">
                    Your Wellbeing <span className="text-bright">Our Priority</span>
                  </h3>
                  <p className="text-light mb-3 opacity-85 small">
                    We focus on creating a healing environment where comfort meets exceptional medical care.
                  </p>
                </div>
                
                <div className="comfort-features">
                  {[
                    { icon: 'fas fa-couch', title: 'Relaxing Lounge' },
                    { icon: 'fas fa-coffee', title: 'Beverage Station' },
                    { icon: 'fas fa-wifi', title: 'High-Speed WiFi' },
                    { icon: 'fas fa-parking', title: 'Valet Parking' }
                  ].map((feature, index) => (
                    <div 
                      key={index} 
                      className="comfort-feature"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="comfort-icon">
                        <i className={feature.icon}></i>
                      </div>
                      <span className="comfort-text">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <div className="hospitality-stats">
                  <div className="stat-item">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Patient Rating</div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <div className="stat-number">12min</div>
                    <div className="stat-label">Average Wait</div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <div className="stat-number">Virtual</div>
                    <div className="stat-label">Visits</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 appointment-form">
              <div className="form-wrapper">
                <div className="form-header-coral">
                  <h3 className="mb-1">
                    <i className="fas fa-calendar-alt me-2"></i>
                    Schedule Appointment
                  </h3>
                  <p className="text-muted small">We'll coordinate all details for you</p>
                </div>
                
                <form className="appointment-form-coral">
                  <div className="form-row-coral">
                    <div className="form-group-coral">
                      <input type="text" placeholder="Your Full Name" />
                    </div>
                    
                    <div className="form-group-coral">
                      <input type="email" placeholder="Email Address" />
                    </div>
                    
                    <div className="form-group-coral">
                      <input type="tel" placeholder="Contact Number" />
                    </div>
                    
                    <div className="form-group-coral">
                      <select>
                        <option>Select Service</option>
                        <option>General Consultation</option>
                        <option>Specialist Evaluation</option>
                        <option>Diagnostic Imaging</option>
                        <option>Treatment Planning</option>
                      </select>
                    </div>
                    
                    <div className="form-group-coral">
                      <input type="date" placeholder="Preferred Date" />
                    </div>
                    
                    <div className="form-group-coral">
                      <select>
                        <option>Time Slot</option>
                        <option>9:00 AM - 11:00 AM</option>
                        <option>11:00 AM - 1:00 PM</option>
                        <option>2:00 PM - 4:00 PM</option>
                        <option>4:00 PM - 6:00 PM</option>
                      </select>
                    </div>
                    
                    <div className="form-group-coral full-width">
                      <textarea placeholder="Special requests or concerns..." rows="2"></textarea>
                    </div>
                  </div>
                  
                  <button type="submit" className="coral-submit-btn">
                    <div className="btn-content">
                      <span>Schedule Consultation</span>
                      <div className="btn-arrow">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                  </button>
                  
                  <div className="form-reassurance">
                    <div className="reassurance-item">
                      <i className="fas fa-check-circle text-primary"></i>
                      <span>Flexible scheduling</span>
                    </div>
                    <div className="reassurance-item">
                      <i className="fas fa-check-circle text-primary"></i>
                      <span>Insurance coordination</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .appointment-section {
          padding: 30px 0;
          background: linear-gradient(135deg, ${colorPalette.dark} 0%, ${colorPalette.primary} 100%);
          position: relative;
          overflow: hidden;
        }
        
        /* Unique Heading Styles */
        .appointment-heading {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .appointment-heading.animated {
          opacity: 1;
          transform: translateY(0);
        }
        
        .heading-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          animation: badgePulse 2s infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
          }
        }
        
        .heading-part-1 {
          display: inline-block;
          animation: fadeInLeft 0.8s ease 0.2s forwards;
          opacity: 0;
          transform: translateX(-20px);
        }
        
        .heading-part-2 {
          display: inline-block;
          color: ${colorPalette.bright};
          animation: fadeInRight 0.8s ease 0.4s forwards;
          opacity: 0;
          transform: translateX(20px);
        }
        
        @keyframes fadeInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .bubble-decoration {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .bubble {
          position: absolute;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: bubbleFloat linear infinite;
        }
        
        .bubble:nth-child(odd) {
          width: 20px;
          height: 20px;
        }
        
        .bubble:nth-child(even) {
          width: 35px;
          height: 35px;
        }
        
        @keyframes bubbleFloat {
          0% {
            transform: translateY(100vh) scale(0.3);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-50px) scale(0.8);
            opacity: 0;
          }
        }
        
        .appointment-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
          transform: scale(0.95);
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          max-height: 500px;
        }
        
        .appointment-card.visible {
          transform: scale(1);
          opacity: 1;
        }
        
        .appointment-content {
          background: linear-gradient(135deg, ${colorPalette.dark} 0%, ${colorPalette.primary} 100%);
          padding: 30px;
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
        }
        
        .appointment-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
        }
        
        .content-wrapper {
          width: 100%;
        }
        
        .welcome-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          animation: welcomePulse 2s infinite;
        }
        
        @keyframes welcomePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        
        .text-bright {
          color: ${colorPalette.bright};
          font-weight: 700;
        }
        
        .text-primary {
          color: ${colorPalette.primary};
        }
        
        .comfort-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin: 20px 0;
        }
        
        .comfort-feature {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 0;
          transform: scale(0.8);
          animation: popIn 0.5s ease forwards;
        }
        
        @keyframes popIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .comfort-icon {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
          margin-bottom: 6px;
          transition: transform 0.3s ease;
        }
        
        .comfort-feature:hover .comfort-icon {
          transform: rotateY(180deg);
        }
        
        .comfort-text {
          color: white;
          font-weight: 600;
          font-size: 11px;
          line-height: 1.3;
        }
        
        .hospitality-stats {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-top: 20px;
        }
        
        .stat-item {
          flex: 1;
          text-align: center;
        }
        
        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .stat-divider {
          width: 1px;
          height: 25px;
          background: rgba(255, 255, 255, 0.3);
        }
        
        .appointment-form {
          padding: 30px;
          height: 500px;
          display: flex;
          align-items: center;
        }
        
        .form-wrapper {
          width: 100%;
        }
        
        .form-header-coral {
          margin-bottom: 20px;
        }
        
        .form-header-coral h3 {
          font-size: 20px;
          font-weight: 700;
          color: ${colorPalette.dark};
          margin-bottom: 4px;
        }
        
        .form-row-coral {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .full-width {
          grid-column: 1 / -1;
        }
        
        .form-group-coral input,
        .form-group-coral select,
        .form-group-coral textarea {
          width: 100%;
          padding: 10px 12px;
          border: 2px solid ${colorPalette.light};
          border-radius: 8px;
          font-size: 13px;
          transition: all 0.3s ease;
          background: #f8fdff;
        }
        
        .form-group-coral input:focus,
        .form-group-coral select:focus,
        .form-group-coral textarea:focus {
          outline: none;
          border-color: ${colorPalette.primary};
          background: white;
          box-shadow: 0 0 0 3px rgba(19, 197, 221, 0.1);
        }
        
        .form-group-coral input:hover,
        .form-group-coral select:hover {
          border-color: ${colorPalette.bright};
        }
        
        .coral-submit-btn {
          background: linear-gradient(135deg, ${colorPalette.primary} 0%, ${colorPalette.dark} 100%);
          color: white;
          border: none;
          width: 100%;
          padding: 14px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .btn-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          z-index: 2;
        }
        
        .coral-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(19, 197, 221, 0.3);
        }
        
        .btn-arrow {
          transition: transform 0.3s ease;
        }
        
        .coral-submit-btn:hover .btn-arrow {
          transform: translateX(5px);
        }
        
        .form-reassurance {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid #f3f4f6;
        }
        
        .reassurance-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6b7280;
          font-size: 12px;
        }
        
        @media (max-width: 992px) {
          .appointment-heading {
            margin-bottom: 20px;
          }
          
          .appointment-card {
            max-height: none;
          }
          
          .appointment-content, .appointment-form {
            height: auto;
            padding: 25px;
          }
          
          .form-row-coral {
            grid-template-columns: 1fr;
          }
          
          .hospitality-stats {
            flex-direction: column;
            gap: 12px;
          }
          
          .stat-divider {
            width: 100%;
            height: 1px;
          }
          
          .display-5 {
            font-size: 2.2rem;
          }
        }
        
        @media (max-width: 768px) {
          .appointment-section {
            padding: 20px 0;
          }
          
          .appointment-heading {
            margin-bottom: 15px;
          }
          
          .display-5 {
            font-size: 1.8rem;
          }
          
          .appointment-content, .appointment-form {
            padding: 20px;
          }
          
          .comfort-features {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          
          .form-header-coral h3 {
            font-size: 18px;
          }
        }
        
        @media (max-width: 480px) {
          .appointment-heading {
            margin-bottom: 10px;
          }
          
          .display-5 {
            font-size: 1.6rem;
          }
          
          .appointment-content, .appointment-form {
            padding: 15px;
          }
          
          .comfort-features {
            grid-template-columns: 1fr;
          }
          
          .hospitality-stats {
            padding: 12px;
          }
          
          .stat-number {
            font-size: 1.3rem;
          }
          
          .comfort-feature {
            padding: 10px;
          }
          
          .form-header-coral h3 {
            font-size: 16px;
          }
          
          .heading-decoration {
            gap: 10px;
          }
          
          .decoration-line {
            width: 40px;
          }
          
          .decoration-icon {
            width: 30px;
            height: 30px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default AppointmentSection;