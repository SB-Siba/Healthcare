import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage1 = () => {
  const services = [
    {
      icon: 'fas fa-user-md',
      title: 'Emergency Care',
      description: '24/7 emergency medical services with immediate response team',
      features: ['ICU Available', 'Trauma Center', 'Ambulance Service']
    },
    {
      icon: 'fas fa-procedures',
      title: 'Operation & Surgery',
      description: 'Advanced surgical procedures with robotic assistance',
      features: ['Minimal Invasive', 'Day Care', 'Post-Op Care']
    },
    {
      icon: 'fas fa-stethoscope',
      title: 'Outdoor Checkup',
      description: 'Comprehensive health checkups and preventive care',
      features: ['Full Body Check', 'Lab Tests', 'Doctor Consultation']
    },
    {
      icon: 'fas fa-ambulance',
      title: 'Ambulance Service',
      description: 'Fully equipped ambulances with paramedic support',
      features: ['GPS Tracking', 'ICU Ambulance', 'Air Ambulance']
    },
    {
      icon: 'fas fa-pills',
      title: 'Medicine & Pharmacy',
      description: 'In-house pharmacy with all essential medicines',
      features: ['24/7 Pharmacy', 'Generic Drugs', 'Home Delivery']
    },
    {
      icon: 'fas fa-microscope',
      title: 'Blood Testing',
      description: 'Advanced diagnostic laboratory services',
      features: ['Rapid Tests', 'Pathology', 'Digital Reports']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="services-hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="hero-content">
                <div className="tagline-wrapper mb-3">
                  <span className="tagline">
                    <i className="fas fa-stethoscope me-2"></i>
                    Our Services
                  </span>
                </div>
                <h1 className="hero-title mb-4">
                  Exceptional <span className="highlight">Medical Services</span>
                </h1>
                <p className="hero-subtitle mb-0">
                  We offer comprehensive healthcare services with cutting-edge technology 
                  and compassionate care to ensure your well-being at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid - Design 1 */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="glass-card">
                  <div className="card-header">
                    <div className="icon-wrapper">
                      <i className={`${service.icon} fa-2x`}></i>
                    </div>
                    <h4 className="card-title">{service.title}</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-description">{service.description}</p>
                    <div className="features-list">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <i className="fas fa-check-circle"></i>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-footer">
                    <Link to="/appointment" className="glass-btn">
                      <span>Book Now</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                    <Link to="/service-detail" className="glass-btn-outline">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Updated Modern Appointment Section */}
      <ModernAppointmentSection />

      <style jsx>{`
        .services-hero-section {
          background: linear-gradient(135deg, 
            rgba(19, 197, 221, 0.05) 0%, 
            rgba(13, 139, 165, 0.08) 100%);
          position: relative;
          overflow: hidden;
          padding: 80px 0 60px;
          margin-top: -80px;
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
        
        /* Glass Card Design */
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 15px 35px rgba(19, 197, 221, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #13c5dd, #6BDBED);
          border-radius: 20px 20px 0 0;
        }
        
        .glass-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(19, 197, 221, 0.15);
          background: rgba(255, 255, 255, 0.95);
        }
        
        .card-header {
          text-align: center;
          margin-bottom: 25px;
        }
        
        .icon-wrapper {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #13c5dd, #0d8ba5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: white;
          font-size: 2rem;
          transition: all 0.3s ease;
        }
        
        .glass-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(10deg);
        }
        
        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
        }
        
        .card-description {
          color: #4a5568;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .features-list {
          margin-bottom: 25px;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #4a5568;
          font-size: 0.9rem;
        }
        
        .feature-item i {
          color: #13c5dd;
          font-size: 0.9rem;
        }
        
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid rgba(19, 197, 221, 0.1);
        }
        
        .glass-btn, .glass-btn-outline {
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }
        
        .glass-btn {
          background: linear-gradient(135deg, #13c5dd, #0d8ba5);
          color: white;
          box-shadow: 0 5px 15px rgba(19, 197, 221, 0.3);
        }
        
        .glass-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(19, 197, 221, 0.4);
          color: white;
        }
        
        .glass-btn-outline {
          color: #13c5dd;
          border: 2px solid #13c5dd;
          background: transparent;
        }
        
        .glass-btn-outline:hover {
          background: rgba(19, 197, 221, 0.1);
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .services-hero-section {
            padding: 70px 0 50px;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .glass-card {
            padding: 25px;
          }
          
          .card-footer {
            flex-direction: column;
            gap: 10px;
          }
          
          .glass-btn, .glass-btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

// Modern Appointment Section Component
const ModernAppointmentSection = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  const colorPalette = {
    primary: '#13C5DD',
    light: '#6BDBED',
    dark: '#0A8FA3',
    bright: '#2DF0FF',
    gradient: 'linear-gradient(135deg, #13C5DD 0%, #2DF0FF 100%)'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
    setFormData({
      name: '', email: '', phone: '', service: '', date: '', time: '', notes: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'General Checkup',
    'Emergency Care',
    'Operation & Surgery',
    'Outdoor Checkup',
    'Ambulance Service',
    'Medicine & Pharmacy',
    'Blood Testing'
  ];

  const timeSlots = [
    'Morning (8AM - 12PM)',
    'Afternoon (1PM - 5PM)',
    'Evening (6PM - 8PM)'
  ];

  return (
    <div className="container-fluid modern-appointment-section">
      {/* Animated Background */}
      <div className="animated-background">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="floating-shape"></div>
        ))}
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className={`content-wrapper ${visible ? 'visible' : ''}`}>
              <div className="badge-container">
                <span className="appointment-badge">
                  <i className="fas fa-calendar-alt me-2"></i>
                  Quick Booking
                </span>
              </div>
              
              <h1 className="section-title">
                Book Your <span className="highlight">Appointment</span> in Minutes
              </h1>
              
              <p className="section-description">
                Experience seamless booking with our modern appointment system. 
                Choose your preferred time and service, and we'll handle the rest.
              </p>

              {/* Features List */}
              <div className="features-grid">
                {[
                  { icon: 'fas fa-clock', title: '24/7 Booking', desc: 'Book anytime' },
                  { icon: 'fas fa-check-circle', title: 'Instant Confirmation', desc: 'Immediate response' },
                  { icon: 'fas fa-user-md', title: 'Expert Doctors', desc: 'Top specialists' },
                  { icon: 'fas fa-shield-alt', title: 'Safe & Secure', desc: 'Privacy protected' }
                ].map((feature, index) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="feature-content">
                      <h6>{feature.title}</h6>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">10k+</div>
                  <div className="stat-label">Happy Patients</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">15min</div>
                  <div className="stat-label">Avg. Wait Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6">
            <div className={`form-container ${visible ? 'visible' : ''}`}>
              <div className="form-header">
                <div className="form-badge">
                  <i className="fas fa-stethoscope me-2"></i>
                  Schedule Now
                </div>
                <h3>Book Your Visit</h3>
                <p>Fill in your details and we'll contact you shortly</p>
              </div>

              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>
                      <i className="fas fa-user"></i>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <i className="fas fa-envelope"></i>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <i className="fas fa-phone"></i>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <i className="fas fa-briefcase-medical"></i>
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>
                      <i className="fas fa-calendar-day"></i>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <i className="fas fa-clock"></i>
                      Preferred Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label>
                      <i className="fas fa-notes-medical"></i>
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any specific requirements or concerns..."
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Confirm Appointment</span>
                  <i className="fas fa-arrow-right"></i>
                </button>

                <div className="form-footer">
                  <div className="privacy-note">
                    <i className="fas fa-lock"></i>
                    Your information is secure and confidential
                  </div>
                  <div className="contact-info">
                    <i className="fas fa-headset"></i>
                    Need help? Call us at 1-800-HEALTH
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modern-appointment-section {
          padding: 80px 0;
          background: linear-gradient(135deg, 
            rgba(19, 197, 221, 0.05) 0%, 
            rgba(19, 197, 221, 0.02) 100%);
          position: relative;
          overflow: hidden;
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, 
            rgba(19, 197, 221, 0.1) 0%, 
            rgba(19, 197, 221, 0.05) 100%);
          animation: floatShapes 20s linear infinite;
        }

        .floating-shape:nth-child(odd) {
          width: 60px;
          height: 60px;
        }

        .floating-shape:nth-child(even) {
          width: 40px;
          height: 40px;
        }

        @keyframes floatShapes {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .content-wrapper {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease 0.2s;
        }

        .content-wrapper.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .badge-container {
          margin-bottom: 20px;
        }

        .appointment-badge {
          display: inline-flex;
          align-items: center;
          background: ${colorPalette.gradient};
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(19, 197, 221, 0.3);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .section-title .highlight {
          color: ${colorPalette.primary};
          position: relative;
          display: inline-block;
        }

        .section-title .highlight::after {
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

        .section-description {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 500px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .feature-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: ${colorPalette.primary};
          box-shadow: 0 10px 25px rgba(19, 197, 221, 0.1);
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: ${colorPalette.gradient};
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .feature-content h6 {
          font-size: 1rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .feature-content p {
          font-size: 0.85rem;
          color: #94a3b8;
          margin: 0;
        }

        .stats-container {
          display: flex;
          align-items: center;
          background: white;
          padding: 25px;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
        }

        .stat-item {
          flex: 1;
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: ${colorPalette.primary};
          margin-bottom: 5px;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: #e2e8f0;
        }

        .form-container {
          background: white;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease 0.4s;
        }

        .form-container.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .form-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .form-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(19, 197, 221, 0.1);
          color: ${colorPalette.primary};
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 15px;
          border: 1px solid rgba(19, 197, 221, 0.2);
        }

        .form-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .form-header p {
          color: #94a3b8;
          font-size: 0.95rem;
          margin: 0;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .form-group {
          margin-bottom: 0;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #475569;
          margin-bottom: 8px;
        }

        .form-group label i {
          color: ${colorPalette.primary};
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          background: #f8fafc;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: ${colorPalette.primary};
          background: white;
          box-shadow: 0 0 0 4px rgba(19, 197, 221, 0.1);
        }

        .form-group input:hover,
        .form-group select:hover,
        .form-group textarea:hover {
          border-color: ${colorPalette.light};
        }

        .submit-btn {
          width: 100%;
          background: ${colorPalette.gradient};
          color: white;
          border: none;
          padding: 16px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(19, 197, 221, 0.3);
        }

        .submit-btn i {
          transition: transform 0.3s ease;
        }

        .submit-btn:hover i {
          transform: translateX(5px);
        }

        .form-footer {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.85rem;
          color: #94a3b8;
        }

        .privacy-note,
        .contact-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .privacy-note i {
          color: #10b981;
        }

        .contact-info i {
          color: ${colorPalette.primary};
        }

        @media (max-width: 992px) {
          .section-title {
            font-size: 2rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .form-container {
            padding: 30px;
          }
          
          .form-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .modern-appointment-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .section-description {
            font-size: 1rem;
          }
          
          .stats-container {
            flex-direction: column;
            gap: 20px;
          }
          
          .stat-divider {
            width: 100%;
            height: 1px;
          }
          
          .form-container {
            padding: 25px;
          }
          
          .form-header h3 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.6rem;
          }
          
          .modern-appointment-section {
            padding: 40px 0;
          }
          
          .form-container {
            padding: 20px;
          }
          
          .feature-card {
            padding: 15px;
          }
          
          .feature-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage1;