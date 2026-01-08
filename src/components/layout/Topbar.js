import React, { useState, useEffect } from 'react';

const Topbar2 = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Color variations for #20b2c6
  const colorPalette = {
    primary: '#20b2c6',
    dark: '#1a8da1',
    light: '#4cc5d6',
    accent: '#32d9f0',
    gradient: 'linear-gradient(135deg, #20b2c6 0%, #1a8da1 100%)'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const socialLinks = [
    { href: "#", icon: "fab fa-facebook-f", color: "#1877F2" },
    { href: "#", icon: "fab fa-twitter", color: "#1DA1F2" },
    { href: "#", icon: "fab fa-linkedin-in", color: "#0077B5" },
    { href: "#", icon: "fab fa-instagram", color: "#E4405F" },
    { href: "#", icon: "fab fa-youtube", color: "#FF0000" }
  ];

  return (
    <div className="container-fluid topbar-modern" style={{
      background: `linear-gradient(135deg, ${colorPalette.dark} 0%, ${colorPalette.primary} 100%)`,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <div className="row align-items-center py-1">
          {/* Left Side - Contact Info */}
          <div className="col-md-6">
            <div className="d-flex flex-wrap align-items-center gap-3">
              {/* Time Display */}
              <div className="time-display d-flex align-items-center">
                <div className="time-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="time-content ms-2">
                  <div className="current-time" style={{ color: '#fff' }}>
                    {formatTime(currentTime)}
                  </div>
                  <div className="current-date small text-white opacity-85">
                    {formatDate(currentTime)}
                  </div>
                </div>
              </div>
              
              {/* Emergency Line */}
              <div className="emergency-line d-flex align-items-center">
                <div className="emergency-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="emergency-content ms-2">
                  <div className="emergency-label small text-white opacity-85">
                    24/7 Emergency
                  </div>
                  <a 
                    className="emergency-number text-decoration-none fw-bold" 
                    href="tel:+15551234567"
                    style={{ color: colorPalette.accent }}
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="email-contact d-none d-lg-flex align-items-center">
                <div className="email-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="email-content ms-2">
                  <div className="email-label small text-white opacity-85">
                    Medical Inquiries
                  </div>
                  <a 
                    className="email-address text-decoration-none" 
                    href="mailto:contact@healthsolutions.com"
                    style={{ color: '#fff' }}
                  >
                    contact@healthsolutions.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Social Links */}
          <div className="col-md-6 text-lg-end mt-2 mt-md-0">
            <div className="d-flex align-items-center justify-content-end gap-3">
              <div className="social-label text-white opacity-85 small d-none d-sm-block">
                Follow Our Updates:
              </div>
              <div className="social-links-container">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-link-modern"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--social-color': social.color }}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
              
              {/* Quick Action Button */}
              <a 
                href="/appointment" 
                className="quick-appointment-btn d-none d-xl-inline-flex align-items-center"
              >
                <i className="fas fa-calendar-check me-2"></i>
                Quick Book
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .topbar-modern {
          font-family: 'Segoe UI', system-ui, sans-serif;
          position: relative;
          overflow: hidden;
        }
        
        .topbar-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .time-display, .emergency-line, .email-contact {
          position: relative;
          z-index: 2;
        }
        
        .time-icon, .emergency-icon, .email-icon {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .time-display:hover .time-icon,
        .emergency-line:hover .emergency-icon,
        .email-contact:hover .email-icon {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.05);
        }
        
        .current-time {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        
        .emergency-number {
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .emergency-number:hover {
          color: ${colorPalette.accent} !important;
          text-decoration: underline !important;
        }
        
        .email-address {
          font-size: 13px;
          transition: all 0.3s ease;
        }
        
        .email-address:hover {
          color: ${colorPalette.accent} !important;
          text-decoration: underline !important;
        }
        
        .social-links-container {
          display: flex;
          gap: 6px;
        }
        
        .social-link-modern {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: rgba(255, 255, 255, 0.15);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .social-link-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--social-color);
          transition: left 0.3s ease;
          z-index: 1;
        }
        
        .social-link-modern i {
          position: relative;
          z-index: 2;
        }
        
        .social-link-modern:hover::before {
          left: 0;
        }
        
        .social-link-modern:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .quick-appointment-btn {
          background: rgba(255, 255, 255, 0.15);
          color: white;
          padding: 6px 15px;
          border-radius: 20px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .quick-appointment-btn:hover {
          background: white;
          color: ${colorPalette.primary};
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }
        
        /* Animations */
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .emergency-number {
          animation: pulse 2s infinite;
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .email-contact .email-address {
            font-size: 12px;
          }
        }
        
        @media (max-width: 992px) {
          .col-md-6 {
            text-align: center !important;
          }
          
          .d-flex.flex-wrap {
            justify-content: center;
          }
          
          .social-links-container {
            justify-content: center;
            margin-top: 10px;
          }
          
          .quick-appointment-btn {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .topbar-modern {
            padding: 8px 0;
          }
          
          .row.align-items-center {
            flex-direction: column;
            gap: 10px;
          }
          
          .time-display, .emergency-line {
            flex: 1;
            justify-content: center;
          }
          
          .email-contact {
            display: none;
          }
          
          .social-label {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .current-time {
            font-size: 13px;
          }
          
          .emergency-number {
            font-size: 13px;
          }
          
          .social-link-modern {
            width: 28px;
            height: 28px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Topbar2;