import React, { useState } from 'react';

const ContactPage1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Healthcare Center Location',
      details: 'Nayapalli, Bhubaneswar, Odisha',
      color: '#13C5DD'
    },
    {
      icon: 'fas fa-phone-alt',
      title: '24/7 Support Line',
      details: '+91 987-654-3210',
      color: '#8B5CF6'
    },
    {
      icon: 'fas fa-envelope',
      title: 'General Inquiries',
      details: 'contact@healthcarecenter.com',
      color: '#10B981'
    },
    {
      icon: 'fas fa-clock',
      title: 'Service Hours',
      details: 'Mon-Sun: 8:00 AM - 10:00 PM',
      color: '#F59E0B'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Contact Form Data:', formData);
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSubmitStatus(null);
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="contact-hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="hero-content">
                <div className="tagline-wrapper mb-3">
                  <span className="tagline">
                    <i className="fas fa-comments me-2"></i>
                    Connect With Our Team
                  </span>
                </div>
                <h1 className="hero-title mb-4">
                  Contact Our <span className="highlight">Healthcare</span> Experts
                </h1>
                <p className="hero-subtitle mb-0">
                  Reach out for medical consultations, appointment scheduling, 
                  or general inquiries. Our dedicated team is ready to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        <div className="animated-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        
        <div className="container">
          <div className="row g-5">
            {/* Contact Info Cards */}
            <div className="col-lg-4">
              <div className="contact-info-section">
                <h3 className="section-title mb-4">How to Reach Us</h3>
                <p className="section-description mb-5">
                  Multiple contact channels available for your convenience. 
                  Choose the method that works best for your healthcare needs.
                </p>
                
                <div className="contact-cards">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-card" data-aos="fade-up" data-aos-delay={index * 100}>
                      <div className="card-icon" style={{ background: info.color }}>
                        <i className={info.icon}></i>
                      </div>
                      <div className="card-content">
                        <h5>{info.title}</h5>
                        <p>{info.details}</p>
                      </div>
                      <div className="card-wave"></div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="social-section mt-5">
                  <h5>Connect On Social Media</h5>
                  <div className="social-links">
                    {[
                      { icon: 'fab fa-facebook-f', color: '#1877F2' },
                      { icon: 'fab fa-twitter', color: '#1DA1F2' },
                      { icon: 'fab fa-instagram', color: '#E4405F' },
                      { icon: 'fab fa-linkedin-in', color: '#0A66C2' },
                      { icon: 'fab fa-youtube', color: '#FF0000' }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="social-link"
                        style={{ '--social-color': social.color }}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="contact-form-section" data-aos="fade-left">
                <div className="form-header">
                  <div className="form-badge">
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Your Inquiry
                  </div>
                  <h3>Request Information</h3>
                  <p>Complete the form below and our healthcare team will respond promptly</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  {submitStatus === 'success' && (
                    <div className="alert alert-success alert-animated">
                      <i className="fas fa-check-circle me-2"></i>
                      Thank you! Your message has been received. We'll contact you within 24 hours.
                    </div>
                  )}

                  <div className="form-grid">
                    <div className="form-group">
                      <label>
                        <i className="fas fa-user"></i>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your complete name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        <i className="fas fa-envelope"></i>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email for correspondence"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        <i className="fas fa-phone"></i>
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Preferred contact number"
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        <i className="fas fa-tag"></i>
                        Inquiry Type *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g., Appointment, Consultation, General"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label>
                      <i className="fas fa-comment-dots"></i>
                      Detailed Message *
                    </label>
                    <div className="textarea-wrapper">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide details about your medical inquiry or requirements..."
                        rows="5"
                        required
                      ></textarea>
                      <div className="textarea-counter">
                        <span>{formData.message.length}/500</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Processing Request...</span>
                        <i className="fas fa-spinner fa-spin ms-2"></i>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <i className="fas fa-paper-plane ms-2"></i>
                      </>
                    )}
                  </button>

                  <div className="form-footer">
                    <div className="privacy-note">
                      <i className="fas fa-shield-alt"></i>
                      Your health information is confidential and securely protected
                    </div>
                    <div className="response-time">
                      <i className="fas fa-clock"></i>
                      Average response: Within 2 business hours
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="map-section" data-aos="fade-up">
                <div className="map-header">
                  <h4>Visit Our Medical Center</h4>
                  <p>Located in the heart of Bhubaneswar for convenient access</p>
                </div>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.5398614078365!2d85.82244831533414!3d20.378937986359345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093d8c2e3b3b%3A0x9b2e6a4e1e7f8e1f!2sNayapalli%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1647851234567!5m2!1sen!2sin"
                    className="map-iframe"
                    title="Healthcare Center Location Map"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                  <div className="map-overlay">
                    <div className="overlay-content">
                      <i className="fas fa-map-marker-alt"></i>
                      <h6>Medical Center Location</h6>
                      <p>Nayapalli, Bhubaneswar</p>
                      <small className="text-muted">Free parking available</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Hero Section */
        .contact-hero-section {
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

        /* Contact Container */
        .contact-container {
          position: relative;
          padding: 80px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          overflow: hidden;
        }

        /* Animated Background */
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

        .shape-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 80px;
          height: 80px;
          top: 60%;
          right: 10%;
          animation-delay: 5s;
        }

        .shape-3 {
          width: 60px;
          height: 60px;
          bottom: 20%;
          left: 20%;
          animation-delay: 10s;
        }

        @keyframes floatShapes {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
          }
        }

        /* Section Titles */
        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 15px;
        }

        .section-description {
          color: #64748b;
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Contact Cards */
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(31, 38, 135, 0.15);
        }

        .card-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .contact-card:hover .card-icon {
          transform: scale(1.1) rotate(10deg);
        }

        .card-content h5 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 5px;
        }

        .card-content p {
          font-size: 0.95rem;
          color: #64748b;
          margin: 0;
        }

        .card-wave {
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
          transform: skewX(-20deg);
          transition: all 0.3s ease;
        }

        .contact-card:hover .card-wave {
          animation: waveMove 1s ease-in-out;
        }

        @keyframes waveMove {
          0%, 100% {
            transform: translateX(-100%) skewX(-20deg);
          }
          50% {
            transform: translateX(100%) skewX(-20deg);
          }
        }

        /* Social Links */
        .social-section {
          text-align: center;
        }

        .social-section h5 {
          color: #0f172a;
          margin-bottom: 20px;
          font-size: 1.2rem;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .social-link {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          background: var(--social-color);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        /* Contact Form */
        .contact-form-section {
          background: white;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .form-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .form-badge {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #13C5DD, #2DF0FF);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 15px;
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

        /* Alert */
        .alert-animated {
          animation: slideInDown 0.5s ease;
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Form Styles */
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 20px;
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
          color: #13C5DD;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          background: #f8fafc;
          color: #0f172a;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #13C5DD;
          background: white;
          box-shadow: 0 0 0 4px rgba(19, 197, 221, 0.1);
        }

        .form-group input:hover,
        .form-group textarea:hover {
          border-color: #6BDBED;
        }

        .textarea-wrapper {
          position: relative;
        }

        .textarea-counter {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-size: 0.8rem;
          color: #94a3b8;
          background: white;
          padding: 2px 6px;
          border-radius: 4px;
          pointer-events: none;
        }

        /* Submit Button */
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #13C5DD, #2DF0FF);
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
          margin: 20px 0;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(19, 197, 221, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Form Footer */
        .form-footer {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.85rem;
          color: #94a3b8;
          text-align: center;
        }

        .privacy-note,
        .response-time {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        /* Map Section */
        .map-section {
          margin-top: 60px;
        }

        .map-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .map-header h4 {
          font-size: 1.5rem;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .map-header p {
          color: #64748b;
          font-size: 1rem;
        }

        .map-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          height: 400px;
        }

        .map-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .map-overlay {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(19, 197, 221, 0.2);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(19, 197, 221, 0);
          }
        }

        .overlay-content {
          text-align: center;
        }

        .overlay-content i {
          font-size: 2rem;
          color: #13C5DD;
          margin-bottom: 10px;
        }

        .overlay-content h6 {
          color: #0f172a;
          margin-bottom: 5px;
          font-size: 1rem;
        }

        .overlay-content p {
          color: #64748b;
          font-size: 0.9rem;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .contact-form-section {
            padding: 30px;
          }
          
          .hero-title {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 60px 0;
          }
          
          .hero-title {
            font-size: 1.8rem;
          }
          
          .contact-form-section {
            padding: 25px;
          }
          
          .map-container {
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .contact-hero-section {
            padding: 70px 0 50px;
          }
          
          .hero-title {
            font-size: 1.6rem;
          }
          
          .contact-form-section {
            padding: 20px;
          }
          
          .contact-card {
            padding: 15px;
          }
          
          .card-icon {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage1;