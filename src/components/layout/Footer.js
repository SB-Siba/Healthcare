import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  const [email, setEmail] = useState('');
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const departments = [
    { to: "/cardiology", text: "Cardiac Care" },
    { to: "/neurology", text: "Neurology & Neurosurgery" },
    { to: "/orthopedics", text: "Orthopedics & Sports Medicine" },
    { to: "/pediatrics", text: "Pediatrics & Child Health" },
    { to: "/emergency", text: "Emergency Medicine" },
  ];

  const quickLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Us" },
    { to: "/services", text: "Medical Services" },
    { to: "/team", text: "Medical Team" },
    { to: "/contact", text: "Contact Center" },
  ];

  const patientResources = [
    { to: "/appointment", text: "Schedule Appointment" },
    { to: "/patient-portal", text: "Patient Portal Access" },
    { to: "/medical-records", text: "Health Records Management" },
    { to: "/billing", text: "Insurance & Billing Services" },
    { to: "/faq", text: "Healthcare FAQ" },
  ];

  const socialLinks = [
    { href: "#", icon: "fab fa-facebook-f", color: "#1877F2" },
    { href: "#", icon: "fab fa-twitter", color: "#1DA1F2" },
    { href: "#", icon: "fab fa-linkedin-in", color: "#0077B5" },
    { href: "#", icon: "fab fa-instagram", color: "#E4405F" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing to our health newsletter!');
      setEmail('');
    }
  };

  return (
    <>
      <footer className="footer-professional">
        <div className="footer-main-content">
          <div className="container">
            <div className="footer-grid-professional">
              <div className="footer-column-professional">
                <div className="footer-logo-section">
                  <div className="medical-logo">
                    <div className="logo-symbol">
                      <i className="fas fa-heartbeat"></i>
                    </div>
                    <div className="logo-text">
                      <h2>HEALTHCARE SOLUTIONS</h2>
                      <p>Medical Center</p>
                    </div>
                  </div>
                  <p className="hospital-description">
                    A leading healthcare institution dedicated to providing advanced 
                    medical treatments with state-of-the-art technology and compassionate 
                    patient care since 2005.
                  </p>
                </div>
                
                <div className="contact-info-professional">
                  <div className="contact-line-professional">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Medical Center Location</h4>
                      <p>Medical District, Downtown Area</p>
                      <p>Healthcare Complex, San Francisco, CA 94102</p>
                    </div>
                  </div>
                  
                  <div className="contact-line-professional">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Medical Inquiries</h4>
                      <p>contact@healthcaresolutions.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-line-professional">
                    <div className="contact-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="contact-text">
                      <h4>24/7 Emergency Line</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-column-professional">
                <h3 className="column-title-professional">
                  <span className="title-number">01</span>
                  <span className="title-text">Medical Specialties</span>
                </h3>
                <ul className="department-list">
                  {departments.map((dept, index) => (
                    <li key={index}>
                      <Link to={dept.to}>
                        <i className="fas fa-chevron-right"></i>
                        {dept.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column-professional">
                <h3 className="column-title-professional">
                  <span className="title-number">02</span>
                  <span className="title-text">Quick Navigation</span>
                </h3>
                <ul className="links-list-professional">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.to}>
                        <span className="link-number">0{index + 1}</span>
                        <span className="link-label">{link.text}</span>
                        <span className="link-arrow-professional">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column-professional">
                <h3 className="column-title-professional">
                  <span className="title-number">03</span>
                  <span className="title-text">Patient Resources</span>
                </h3>
                <ul className="resources-list">
                  {patientResources.map((resource, index) => (
                    <li key={index}>
                      <Link to={resource.to}>
                        <div className="resource-icon">
                          <i className="fas fa-file-medical"></i>
                        </div>
                        {resource.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="footer-middle-section">
              <div className="newsletter-professional">
                <div className="newsletter-header">
                  <h4>Subscribe for Health Updates</h4>
                  <p>Receive medical insights, health tips, and clinic updates directly to your inbox</p>
                </div>
                <form onSubmit={handleSubmit} className="newsletter-form-professional">
                  <div className="input-group-professional">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit">
                      <i className="fas fa-paper-plane"></i>
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-professional">
          <div className="container">
            <div className="bottom-grid">
              <div className="social-section-professional">
                <h4>Connect With Our Community</h4>
                <div className="social-icons-professional">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-professional"
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      style={{
                        background: hoveredSocial === index ? social.color : 'rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="copyright-section-professional">
                <p>
                  &copy; {year} <span className="copyright-highlight">Healthcare Solutions Medical Center</span>. 
                  All rights reserved.
                </p>
                <div className="legal-links-professional">
                  <Link to="/privacy">Patient Privacy Policy</Link>
                  <span className="divider">|</span>
                  <Link to="/terms">Terms of Service</Link>
                  <span className="divider">|</span>
                  <Link to="/cookies">Cookie Policy</Link>
                </div>
              </div>
              
              <div className="designer-section">
                <p>
                  Website Designed by{" "}
                  <a
                    href="https://siba-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="designer-link-professional"
                  >
                    SIBANANDA BEHERA
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer-professional {
          background: #0f172a;
          color: #fff;
          font-family: 'Segoe UI', system-ui, sans-serif;
        }
        
        .footer-main-content {
          padding: 40px 0 30px;
        }
        
        .footer-grid-professional {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 30px;
          margin-bottom: 30px;
        }
        
        .footer-logo-section {
          margin-bottom: 20px;
        }
        
        .medical-logo {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .logo-symbol {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #13c5dd, #0d8ba5);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          color: white;
          font-size: 1.3rem;
        }
        
        .logo-text h2 {
          color: #13c5dd;
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .logo-text p {
          color: rgba(255, 255, 255, 0.7);
          margin: 3px 0 0;
          font-size: 0.85rem;
        }
        
        .hospital-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
          font-size: 0.9rem;
          margin: 0;
        }
        
        .contact-info-professional {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .contact-line-professional {
          display: flex;
          gap: 12px;
        }
        
        .contact-icon {
          width: 35px;
          height: 35px;
          background: rgba(19, 197, 221, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #13c5dd;
          flex-shrink: 0;
        }
        
        .contact-text h4 {
          color: #13c5dd;
          margin: 0 0 3px;
          font-size: 0.95rem;
        }
        
        .contact-text p {
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          font-size: 0.85rem;
          line-height: 1.4;
        }
        
        .column-title-professional {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
          color: #13c5dd;
        }
        
        .title-number {
          font-size: 0.75rem;
          color: rgba(19, 197, 221, 0.5);
          font-weight: 600;
        }
        
        .title-text {
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .department-list, .links-list-professional, .resources-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .department-list li, .links-list-professional li, .resources-list li {
          margin-bottom: 10px;
        }
        
        .department-list a, .links-list-professional a, .resources-list a {
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        
        .department-list i {
          margin-right: 8px;
          font-size: 0.7rem;
          color: #13c5dd;
          transition: transform 0.3s ease;
        }
        
        .department-list a:hover i {
          transform: translateX(3px);
        }
        
        .links-list-professional a {
          padding: 6px 0;
        }
        
        .link-number {
          color: #13c5dd;
          font-weight: 600;
          margin-right: 8px;
          font-size: 0.85rem;
          min-width: 18px;
        }
        
        .link-label {
          flex: 1;
          font-size: 0.9rem;
        }
        
        .link-arrow-professional {
          color: rgba(255, 255, 255, 0.3);
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.3s ease;
          font-size: 0.85rem;
        }
        
        .links-list-professional a:hover {
          color: #13c5dd;
          padding-left: 5px;
        }
        
        .links-list-professional a:hover .link-arrow-professional {
          opacity: 1;
          transform: translateX(0);
          color: #13c5dd;
        }
        
        .resources-list a {
          gap: 10px;
        }
        
        .resource-icon {
          width: 28px;
          height: 28px;
          background: rgba(19, 197, 221, 0.1);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #13c5dd;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        
        .resources-list a:hover .resource-icon {
          background: #13c5dd;
          color: white;
          transform: scale(1.1);
        }
        
        .footer-middle-section {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .newsletter-professional {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: center;
        }
        
        .newsletter-header h4 {
          color: #13c5dd;
          margin: 0 0 8px;
          font-size: 1.2rem;
        }
        
        .newsletter-header p {
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          font-size: 0.9rem;
        }
        
        .input-group-professional {
          display: flex;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          overflow: hidden;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        
        .input-group-professional:focus-within {
          border-color: #13c5dd;
        }
        
        .input-group-professional input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 12px 18px;
          color: white;
          font-size: 0.9rem;
        }
        
        .input-group-professional button {
          background: linear-gradient(135deg, #13c5dd, #0d8ba5);
          color: white;
          border: none;
          padding: 12px 20px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }
        
        .input-group-professional button:hover {
          background: linear-gradient(135deg, #0d8ba5, #13c5dd);
          transform: translateX(-2px);
        }
        
        .footer-bottom-professional {
          padding: 25px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .bottom-grid {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          gap: 25px;
          align-items: center;
        }
        
        .social-section-professional h4 {
          color: #13c5dd;
          margin-bottom: 12px;
          font-size: 1rem;
        }
        
        .social-icons-professional {
          display: flex;
          gap: 10px;
        }
        
        .social-icon-professional {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-icon-professional:hover {
          transform: translateY(-3px);
        }
        
        .copyright-section-professional {
          text-align: center;
        }
        
        .copyright-section-professional p {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 8px;
          font-size: 0.9rem;
        }
        
        .copyright-highlight {
          color: #13c5dd;
          font-weight: 600;
        }
        
        .legal-links-professional {
          display: flex;
          justify-content: center;
          gap: 12px;
          font-size: 0.85rem;
        }
        
        .legal-links-professional a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .legal-links-professional a:hover {
          color: #13c5dd;
        }
        
        .divider {
          color: rgba(255, 255, 255, 0.3);
        }
        
        .designer-section {
          text-align: right;
        }
        
        .designer-section p {
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          font-size: 0.9rem;
        }
        
        .designer-link-professional {
          color: #13c5dd;
          text-decoration: none;
          font-weight: 600;
        }
        
        @media (max-width: 992px) {
          .footer-grid-professional {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .newsletter-professional {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .bottom-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            text-align: center;
          }
          
          .designer-section {
            text-align: center;
          }
        }
        
        @media (max-width: 768px) {
          .footer-main-content {
            padding: 30px 0 25px;
          }
          
          .footer-grid-professional {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .newsletter-professional {
            text-align: center;
          }
          
          .input-group-professional {
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;