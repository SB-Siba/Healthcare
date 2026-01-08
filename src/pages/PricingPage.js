/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AppointmentForm from '../components/ui/AppointmentForm';
import Team from '../components/sections/Team';
import 'owl.carousel/dist/assets/owl.carousel.css';

const PricingPage = () => {
  const carouselRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [headingAnimation, setHeadingAnimation] = useState(false);

  // Color palette using #13c5dd
  const colorPalette = {
    primary: '#13c5dd',
    dark: '#0ba8c7',
    light: '#4bd5e8',
    accent: '#2ae1f5',
    gradient: 'linear-gradient(135deg, #13c5dd 0%, #0ba8c7 100%)'
  };

  const pricingPlans = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1516549655669-df6654e435de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Executive Wellness Plan',
      subtitle: 'Comprehensive Health Screening',
      price: 249,
      period: 'per year',
      features: [
        { text: 'Advanced Diagnostic Testing', included: true },
        { text: 'Executive Health Assessment', included: true },
        { text: 'Personal Health Coach', included: true },
        { text: '24/7 Telemedicine Access', included: true },
        { text: 'Nutrition Counseling', included: true },
        { text: 'Mental Wellness Program', included: false }
      ],
      tag: 'Most Popular'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Family Health Package',
      subtitle: 'Complete Family Coverage',
      price: 449,
      period: 'per year',
      features: [
        { text: 'Family Health Assessments', included: true },
        { text: 'Pediatric & Adult Care', included: true },
        { text: 'Annual Vaccinations', included: true },
        { text: 'Dental & Vision Checks', included: true },
        { text: 'Emergency Care Priority', included: true },
        { text: 'Home Health Services', included: false }
      ],
      tag: 'Family Choice'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Senior Care Program',
      subtitle: 'Aging-in-Place Support',
      price: 599,
      period: 'per year',
      features: [
        { text: 'Geriatric Assessment', included: true },
        { text: 'Chronic Disease Management', included: true },
        { text: 'Medication Management', included: true },
        { text: 'Home Safety Evaluation', included: true },
        { text: 'Caregiver Support', included: true },
        { text: 'Transportation Services', included: false }
      ],
      tag: 'Senior Focus'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1584467735871-8db9ac8dcc6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Corporate Wellness',
      subtitle: 'Employee Health Solutions',
      price: 899,
      period: 'per year',
      features: [
        { text: 'Employee Health Screenings', included: true },
        { text: 'Workplace Wellness Programs', included: true },
        { text: 'Occupational Health Services', included: true },
        { text: 'Mental Health Resources', included: true },
        { text: 'Health Risk Assessments', included: true },
        { text: 'Custom Wellness Plans', included: true }
      ],
      tag: 'Business Solution'
    }
  ];

  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      $(carouselRef.current).owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 700,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
          1200: { items: 3 }
        }
      });
    }

    // Heading animation
    const timer = setTimeout(() => {
      setHeadingAnimation(true);
    }, 300);
    
    return () => {
      clearTimeout(timer);
      if (window.$ && carouselRef.current) {
        $(carouselRef.current).trigger('destroy.owl.carousel');
      }
    };
  }, []);

  return (
    <>
      <div className="container-fluid py-5 pricing-page-section" style={{ background: 'linear-gradient(135deg, #f8fdff 0%, #f0faff 100%)' }}>
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
            {/* Animated Badge */}
            <div className={`pricing-badge ${headingAnimation ? 'animated' : ''} mb-3`}>
              <h5 className="d-inline-block text-uppercase border-bottom border-5" style={{ color: colorPalette.primary }}>
                <i className="fas fa-tags me-2"></i>
                Healthcare Solutions
              </h5>
            </div>
            
            {/* Animated Title */}
            <div className={`title-wrapper ${headingAnimation ? 'animated' : ''}`}>
              <h1 className="display-4 fw-bold mb-4">
                <span className="title-part-1">Comprehensive Health</span>
                <span className="title-part-2" style={{ color: colorPalette.primary }}> Packages</span>
              </h1>
            </div>
            
            {/* Animated Description */}
            <div className={`description-wrapper ${headingAnimation ? 'animated' : ''}`}>
              <p className="lead text-muted">
                Tailored healthcare programs designed for individuals, families, and businesses 
                with a focus on preventive care and comprehensive medical support.
              </p>
            </div>
          </div>
          
          <div 
            ref={carouselRef}
            className="owl-carousel price-carousel-enhanced position-relative" 
            style={{ padding: '0 50px 50px 50px' }}
          >
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className="pricing-card-modern"
                onMouseEnter={() => setActiveCard(plan.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`modern-card-inner ${activeCard === plan.id ? 'active' : ''}`}>
                  {/* Plan Tag */}
                  {plan.tag && (
                    <div className="plan-tag-modern" style={{ background: colorPalette.gradient }}>
                      <i className="fas fa-star me-1"></i>
                      {plan.tag}
                    </div>
                  )}

                  <div className="card-header-modern">
                    <img 
                      className="card-image-modern" 
                      src={plan.image} 
                      alt={plan.title} 
                    />
                    <div className="image-overlay-modern"></div>
                    <div className="price-overlay-modern">
                      <div className="price-container-modern">
                        <div className="price-wrapper-modern">
                          <span className="price-symbol-modern">$</span>
                          <span className="price-value-modern">{plan.price}</span>
                        </div>
                        <span className="price-period-modern">{plan.period}</span>
                      </div>
                    </div>
                    <div className="shine-effect-modern"></div>
                  </div>
                  
                  <div className="card-body-modern">
                    <h3 className="plan-title-modern">{plan.title}</h3>
                    <p className="plan-subtitle-modern">{plan.subtitle}</p>
                    
                    <div className="features-container-modern">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="feature-item-modern">
                          <span className="feature-check-modern">
                            {feature.included ? (
                              <i className="fas fa-check-circle" style={{ color: colorPalette.primary }}></i>
                            ) : (
                              <i className="fas fa-times-circle text-muted"></i>
                            )}
                          </span>
                          <span className={`feature-text-modern ${!feature.included ? 'text-muted' : ''}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="plan-summary-modern">
                      <div className="summary-item-modern">
                        <i className="fas fa-calendar-check" style={{ color: colorPalette.primary }}></i>
                        <span>Flexible Scheduling</span>
                      </div>
                      <div className="summary-item-modern">
                        <i className="fas fa-user-md" style={{ color: colorPalette.primary }}></i>
                        <span>Expert Consultation</span>
                      </div>
                    </div>
                    
                    <Link to="/appointment" className="select-plan-btn" style={{ background: colorPalette.gradient }}>
                      <span className="btn-text-modern">Select Plan</span>
                      <div className="btn-icon-modern">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                      <div className="btn-hover-modern"></div>
                    </Link>
                    
                    <div className="plan-notes-modern">
                      <i className="fas fa-info-circle me-2" style={{ color: colorPalette.light }}></i>
                      <span>Annual billing • Cancel anytime</span>
                    </div>
                  </div>
                  
                  <div className="card-wave-modern"></div>
                  <div className="corner-decoration-modern"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Appointment Section with Modern Design */}
      <div className="container-fluid py-5 appointment-section-modern" style={{ background: colorPalette.gradient }}>
        <div className="container py-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className={`appointment-content-modern ${headingAnimation ? 'animated' : ''}`}>
                <div className="appointment-badge mb-4">
                  <i className="fas fa-calendar-check me-2"></i>
                  Easy Scheduling
                </div>
                
                <h1 className="display-5 fw-bold text-white mb-4">
                  Schedule Your <br />
                  <span className="text-accent">Medical Consultation</span>
                </h1>
                
                <p className="text-white opacity-85 mb-5 fs-5">
                  Book appointments with our expert medical team for personalized healthcare 
                  consultations and comprehensive medical evaluations.
                </p>
                
                <div className="features-grid-modern">
                  <div className="feature-item-appointment">
                    <div className="feature-icon-appointment">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="feature-text-appointment">
                      <h5>Flexible Hours</h5>
                      <p className="mb-0">Extended clinic hours</p>
                    </div>
                  </div>
                  
                  <div className="feature-item-appointment">
                    <div className="feature-icon-appointment">
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <div className="feature-text-appointment">
                      <h5>Same-Day Appointments</h5>
                      <p className="mb-0">Available for urgent care</p>
                    </div>
                  </div>
                </div>
                
                <div className="d-flex gap-3 mt-5">
                  <Link to="/team" className="btn btn-light btn-lg rounded-pill px-4 py-3 fw-bold">
                    <i className="fas fa-user-md me-2"></i>
                    Find Specialist
                  </Link>
                  <Link to="/blog" className="btn btn-outline-light btn-lg rounded-pill px-4 py-3 fw-bold">
                    <i className="fas fa-book me-2"></i>
                    Health Articles
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className={`appointment-form-wrapper ${headingAnimation ? 'animated' : ''}`}>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Team />

      <style jsx>{`
        .pricing-badge {
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.8s ease;
        }

        .pricing-badge.animated {
          opacity: 1;
          transform: translateY(0);
        }

        .title-wrapper {
          overflow: hidden;
          margin-bottom: 10px;
        }

        .title-part-1, .title-part-2 {
          display: inline-block;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .title-wrapper.animated .title-part-1 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.2s;
        }

        .title-wrapper.animated .title-part-2 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.4s;
        }

        .description-wrapper {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.6s;
        }

        .description-wrapper.animated {
          opacity: 1;
          transform: translateY(0);
        }

        .pricing-card-modern {
          height: 620px;
          border-radius: 16px;
        }

        .modern-card-inner {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          height: 100%;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #f0f0f0;
          display: flex;
          flex-direction: column;
        }

        .modern-card-inner.active {
          transform: translateY(-10px);
          box-shadow: 
            0 20px 50px rgba(19, 197, 221, 0.15),
            0 0 0 1px rgba(19, 197, 221, 0.1);
        }

        .plan-tag-modern {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 20;
          color: white;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          box-shadow: 0 5px 15px rgba(19, 197, 221, 0.3);
          animation: tagPulse 2s infinite;
        }

        @keyframes tagPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .card-header-modern {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-image-modern {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .modern-card-inner.active .card-image-modern {
          transform: scale(1.1);
        }

        .image-overlay-modern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, 
            rgba(19, 197, 221, 0.8) 0%,
            rgba(19, 197, 221, 0.6) 100%);
        }

        .price-overlay-modern {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 10;
        }

        .price-container-modern {
          background: rgba(255, 255, 255, 0.15);
          padding: 15px 30px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .price-wrapper-modern {
          display: flex;
          align-items: baseline;
          justify-content: center;
          margin-bottom: 5px;
        }

        .price-symbol-modern {
          font-size: 24px;
          font-weight: 600;
          color: white;
          margin-right: 2px;
        }

        .price-value-modern {
          font-size: 48px;
          font-weight: 800;
          color: white;
          line-height: 1;
        }

        .price-period-modern {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.9);
          display: block;
        }

        .shine-effect-modern {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          transform: rotate(30deg);
          transition: all 0.8s ease;
          opacity: 0;
        }

        .modern-card-inner.active .shine-effect-modern {
          opacity: 1;
          left: 100%;
        }

        .card-body-modern {
          padding: 30px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .plan-title-modern {
          font-size: 22px;
          font-weight: 700;
          color: #333;
          margin-bottom: 5px;
        }

        .plan-subtitle-modern {
          color: ${colorPalette.primary};
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 25px;
        }

        .features-container-modern {
          margin-bottom: 25px;
          flex: 1;
        }

        .feature-item-modern {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          color: #495057;
          border-bottom: 1px solid #f1f3f4;
          transition: all 0.3s ease;
        }

        .feature-item-modern:hover {
          background: rgba(19, 197, 221, 0.05);
          border-radius: 8px;
          padding-left: 8px;
          padding-right: 8px;
          margin: 0 -8px;
        }

        .feature-item-modern:last-child {
          border-bottom: none;
        }

        .feature-check-modern {
          font-size: 16px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-text-modern {
          flex: 1;
          font-size: 14px;
          font-weight: 500;
        }

        .plan-summary-modern {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin: 20px 0;
          padding: 15px;
          background: rgba(19, 197, 221, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(19, 197, 221, 0.1);
        }

        .summary-item-modern {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: ${colorPalette.dark};
          font-weight: 500;
        }

        .summary-item-modern i {
          font-size: 14px;
        }

        .select-plan-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 16px 24px;
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          border: none;
          position: relative;
          overflow: hidden;
          margin-bottom: 15px;
        }

        .select-plan-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(19, 197, 221, 0.3);
        }

        .btn-text-modern {
          position: relative;
          z-index: 2;
        }

        .btn-icon-modern {
          width: 24px;
          height: 24px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .select-plan-btn:hover .btn-icon-modern {
          background: rgba(255, 255, 255, 0.3);
          transform: translateX(5px) rotate(-45deg);
        }

        .btn-hover-modern {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: 0.6s;
        }

        .select-plan-btn:hover .btn-hover-modern {
          left: 100%;
        }

        .plan-notes-modern {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #6c757d;
          text-align: center;
          padding-top: 15px;
          border-top: 1px solid #f1f3f4;
        }

        .card-wave-modern {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, 
            ${colorPalette.primary}, 
            ${colorPalette.light}, 
            ${colorPalette.primary});
          background-size: 200% 100%;
          animation: waveMove 3s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .modern-card-inner.active .card-wave-modern {
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

        .corner-decoration-modern {
          position: absolute;
          top: 0;
          right: 0;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, transparent 50%, rgba(19, 197, 221, 0.1) 50%);
          border-top-right-radius: 16px;
        }

        /* Appointment Section Modern */
        .appointment-section-modern {
          position: relative;
          overflow: hidden;
        }

        .appointment-section-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
        }

        .appointment-content-modern {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease;
        }

        .appointment-content-modern.animated {
          opacity: 1;
          transform: translateX(0);
        }

        .appointment-badge {
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
          animation: badgeFloat 3s ease-in-out infinite;
        }

        @keyframes badgeFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .text-accent {
          color: #2ae1f5;
          font-weight: 800;
        }

        .features-grid-modern {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-top: 30px;
        }

        .feature-item-appointment {
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .feature-icon-appointment {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${colorPalette.primary};
          font-size: 20px;
        }

        .feature-text-appointment h5 {
          color: white;
          margin-bottom: 5px;
          font-weight: 600;
        }

        .feature-text-appointment p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          font-size: 14px;
        }

        .appointment-form-wrapper {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease 0.2s;
        }

        .appointment-form-wrapper.animated {
          opacity: 1;
          transform: translateX(0);
        }

        /* Owl Carousel Customization */
        .owl-carousel .owl-nav {
          position: absolute;
          top: -70px;
          right: 0;
          display: flex;
          gap: 12px;
        }

        .owl-carousel .owl-nav button {
          width: 48px;
          height: 48px;
          background: white !important;
          border-radius: 12px !important;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(19, 197, 221, 0.2) !important;
          color: ${colorPalette.dark} !important;
          font-size: 16px !important;
          transition: all 0.3s ease;
        }

        .owl-carousel .owl-nav button:hover {
          background: ${colorPalette.gradient} !important;
          color: white !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(19, 197, 221, 0.25);
          border-color: transparent !important;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .pricing-card-modern {
            height: 640px;
          }
          
          .card-header-modern {
            height: 180px;
          }
          
          .price-value-modern {
            font-size: 42px;
          }
        }

        @media (max-width: 992px) {
          .pricing-card-modern {
            height: 620px;
          }
          
          .card-header-modern {
            height: 170px;
          }
          
          .card-body-modern {
            padding: 25px;
          }
          
          .features-grid-modern {
            grid-template-columns: 1fr;
          }
          
          .owl-carousel .owl-nav {
            position: static;
            justify-content: center;
            margin-top: 30px;
            margin-bottom: 20px;
          }
        }

        @media (max-width: 768px) {
          .pricing-card-modern {
            height: 650px;
            max-width: 400px;
            margin: 0 auto;
          }
          
          .appointment-content-modern,
          .appointment-form-wrapper {
            transform: translateY(0);
          }
          
          .appointment-content-modern.animated,
          .appointment-form-wrapper.animated {
            transform: translateY(0);
          }
          
          .display-5 {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 576px) {
          .pricing-card-modern {
            height: 680px;
          }
          
          .card-header-modern {
            height: 160px;
          }
          
          .price-value-modern {
            font-size: 36px;
          }
          
          .plan-title-modern {
            font-size: 20px;
          }
          
          .plan-summary-modern {
            grid-template-columns: 1fr;
          }
          
          .display-5 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default PricingPage;