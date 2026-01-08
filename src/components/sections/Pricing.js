/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Pricing = () => {
  const carouselRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Color variations
  const colorPalette = {
    primary: '#20b2c6',
    dark: '#168a9a',
    light: '#4bc7d9',
    accent: '#2dd4e0',
    gradient: 'linear-gradient(135deg, #20b2c6 0%, #168a9a 100%)',
    gradientLight: 'linear-gradient(135deg, #4bc7d9 0%, #20b2c6 100%)'
  };

  const pricingPlans = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Wellness Essentials',
      subtitle: 'Basic Health Package',
      price: 89,
      period: 'per month',
      features: [
        { text: 'Annual Physical Exam', included: true },
        { text: 'Basic Lab Tests', included: true },
        { text: 'General Consultation', included: true },
        { text: 'Health Risk Assessment', included: true },
        { text: 'Vaccination Review', included: false },
        { text: 'Specialist Referral', included: false }
      ],
      tag: 'Most Popular'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Comprehensive Care',
      subtitle: 'Advanced Health Package',
      price: 159,
      period: 'per month',
      features: [
        { text: 'Advanced Diagnostics', included: true },
        { text: 'Specialist Consultations', included: true },
        { text: 'Imaging Studies', included: true },
        { text: 'Chronic Disease Management', included: true },
        { text: 'Preventive Screenings', included: true },
        { text: 'Nutrition Counseling', included: false }
      ],
      tag: 'Recommended'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1516549655669-df6654e435de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Executive Health',
      subtitle: 'Premium Health Package',
      price: 299,
      period: 'per month',
      features: [
        { text: 'Executive Health Assessment', included: true },
        { text: 'Advanced Cardiac Screening', included: true },
        { text: 'Genetic Testing Panel', included: true },
        { text: '24/7 Concierge Service', included: true },
        { text: 'Mental Wellness Program', included: true },
        { text: 'Fitness & Nutrition Plan', included: true }
      ],
      tag: 'Premium'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Family Wellness',
      subtitle: 'Family Health Package',
      price: 399,
      period: 'per month',
      features: [
        { text: 'Family Health Assessments', included: true },
        { text: 'Pediatric & Adult Care', included: true },
        { text: 'Preventive Vaccinations', included: true },
        { text: 'Dental & Vision Checks', included: true },
        { text: 'Emergency Care Access', included: true },
        { text: 'Health Education Sessions', included: true }
      ],
      tag: 'Family Plan'
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
        smartSpeed: 800,
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

    return () => {
      if (window.$ && carouselRef.current) {
        $(carouselRef.current).trigger('destroy.owl.carousel');
      }
    };
  }, []);

  return (
    <div className="container-fluid py-5 pricing-section">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <div className="pricing-badge mb-3">
            <i className="fas fa-tags me-2"></i>
            Affordable Healthcare Plans
          </div>
          <h1 className="display-4 fw-bold mb-3">
            <span className="text-dark">Tailored Health</span>
            <span style={{ color: colorPalette.primary }}> Solutions</span>
          </h1>
          <p className="lead text-muted">
            Choose from our comprehensive health packages designed for your specific needs
          </p>
        </div>
        <div 
          ref={carouselRef}
          className="owl-carousel price-carousel position-relative" 
          style={{ padding: '0 45px 45px 45px' }}
        >
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className="pricing-card-enhanced"
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Tag */}
              {plan.tag && (
                <div className="plan-tag" style={{ backgroundColor: colorPalette.primary }}>
                  <i className="fas fa-star me-1"></i>
                  {plan.tag}
                </div>
              )}

              <div className="card-header-enhanced">
                <img 
                  className="card-img-enhanced" 
                  src={plan.image} 
                  alt={plan.title} 
                />
                <div className="header-overlay-enhanced">
                  <h3 className="text-white mb-1">{plan.title}</h3>
                  <p className="text-white opacity-85 mb-2 small">{plan.subtitle}</p>
                  <div className="price-display-enhanced">
                    <div className="price-wrapper">
                      <span className="price-symbol">$</span>
                      <span className="price-value">{plan.price}</span>
                    </div>
                    <span className="price-period">{plan.period}</span>
                  </div>
                </div>
                <div className="shine-effect"></div>
              </div>
              
              <div className="card-body-enhanced">
                <div className="features-container-enhanced">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="feature-item-enhanced">
                      <span className="feature-check">
                        {feature.included ? (
                          <i className="fas fa-check-circle" style={{ color: colorPalette.primary }}></i>
                        ) : (
                          <i className="fas fa-times-circle text-muted"></i>
                        )}
                      </span>
                      <span className={`feature-text ${!feature.included ? 'text-muted' : ''}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="plan-summary">
                  <div className="summary-item">
                    <i className="fas fa-calendar-alt" style={{ color: colorPalette.primary }}></i>
                    <span>Flexible Scheduling</span>
                  </div>
                  <div className="summary-item">
                    <i className="fas fa-user-md" style={{ color: colorPalette.primary }}></i>
                    <span>Expert Doctors</span>
                  </div>
                </div>
                
                <a href="/appointment" className="btn-enhanced" style={{ background: colorPalette.gradient }}>
                  <span className="btn-text">Select Plan</span>
                  <div className="btn-icon-wrapper">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                  <div className="btn-hover-effect"></div>
                </a>
                
                <div className="plan-notes">
                  <i className="fas fa-info-circle me-2" style={{ color: colorPalette.light }}></i>
                  <span>Cancel anytime • No hidden fees</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          background: linear-gradient(135deg, #f8fdff 0%, #f0faff 100%);
        }

        .pricing-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(32, 178, 198, 0.1);
          color: ${colorPalette.dark};
          padding: 8px 20px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 14px;
          border: 1px solid rgba(32, 178, 198, 0.2);
        }

        .pricing-card-enhanced {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          height: 100%;
          border: 1px solid rgba(32, 178, 198, 0.1);
        }

        .pricing-card-enhanced:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(32, 178, 198, 0.15);
          border-color: ${colorPalette.light};
        }

        .plan-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 10;
          color: white;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 12px rgba(32, 178, 198, 0.3);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .card-header-enhanced {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-img-enhanced {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .pricing-card-enhanced:hover .card-img-enhanced {
          transform: scale(1.1);
        }

        .header-overlay-enhanced {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, 
            rgba(22, 138, 154, 0.85) 0%,
            rgba(32, 178, 198, 0.9) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
        }

        .header-overlay-enhanced h3 {
          font-size: 24px;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .shine-effect {
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

        .pricing-card-enhanced:hover .shine-effect {
          opacity: 1;
          left: 100%;
        }

        .price-display-enhanced {
          background: rgba(255, 255, 255, 0.2);
          padding: 12px 25px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          margin-top: 10px;
          transition: all 0.3s ease;
        }

        .pricing-card-enhanced:hover .price-display-enhanced {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-5px);
        }

        .price-wrapper {
          display: flex;
          align-items: baseline;
          justify-content: center;
          margin-bottom: 4px;
        }

        .price-symbol {
          font-size: 20px;
          font-weight: 600;
          color: white;
          margin-right: 2px;
        }

        .price-value {
          font-size: 42px;
          font-weight: 800;
          color: white;
          line-height: 1;
        }

        .price-period {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          display: block;
          text-align: center;
        }

        .card-body-enhanced {
          padding: 30px;
          background: white;
        }

        .features-container-enhanced {
          margin-bottom: 25px;
        }

        .feature-item-enhanced {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          color: #495057;
          border-bottom: 1px solid #f1f3f4;
          transition: all 0.3s ease;
        }

        .feature-item-enhanced:hover {
          background: rgba(32, 178, 198, 0.05);
          border-radius: 8px;
          padding-left: 8px;
          padding-right: 8px;
          margin: 0 -8px;
        }

        .feature-item-enhanced:last-child {
          border-bottom: none;
        }

        .feature-check {
          font-size: 16px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-text {
          flex: 1;
          font-size: 14px;
          font-weight: 500;
        }

        .plan-summary {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin: 25px 0;
          padding: 15px;
          background: rgba(32, 178, 198, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(32, 178, 198, 0.1);
        }

        .summary-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: ${colorPalette.dark};
          font-weight: 500;
        }

        .summary-item i {
          font-size: 14px;
        }

        .btn-enhanced {
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

        .btn-enhanced:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(32, 178, 198, 0.3);
        }

        .btn-text {
          position: relative;
          z-index: 2;
        }

        .btn-icon-wrapper {
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

        .btn-enhanced:hover .btn-icon-wrapper {
          background: rgba(255, 255, 255, 0.3);
          transform: translateX(5px) rotate(-45deg);
        }

        .btn-hover-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: 0.6s;
        }

        .btn-enhanced:hover .btn-hover-effect {
          left: 100%;
        }

        .plan-notes {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #6c757d;
          text-align: center;
          padding-top: 15px;
          border-top: 1px solid #f1f3f4;
        }

        /* Owl Carousel Navigation */
        .owl-carousel {
          position: relative;
        }

        .owl-carousel .owl-nav {
          position: absolute;
          top: -70px;
          right: 0;
          display: flex;
          gap: 10px;
        }

        .owl-carousel .owl-nav button {
          width: 44px;
          height: 44px;
          background: white !important;
          border-radius: 12px !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(32, 178, 198, 0.2) !important;
          color: ${colorPalette.dark} !important;
          font-size: 14px !important;
          transition: all 0.3s ease;
        }

        .owl-carousel .owl-nav button:hover {
          background: ${colorPalette.gradient} !important;
          color: white !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(32, 178, 198, 0.25);
          border-color: transparent !important;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .card-header-enhanced {
            height: 180px;
          }
          
          .price-value {
            font-size: 36px;
          }
          
          .header-overlay-enhanced h3 {
            font-size: 22px;
          }
          
          .card-body-enhanced {
            padding: 25px;
          }
        }

        @media (max-width: 768px) {
          .owl-carousel .owl-nav {
            position: static;
            justify-content: center;
            margin-top: 25px;
            margin-bottom: 25px;
          }
          
          .card-header-enhanced {
            height: 170px;
          }
          
          .price-value {
            font-size: 32px;
          }
          
          .features-container-enhanced {
            margin-bottom: 20px;
          }
          
          .pricing-badge {
            font-size: 13px;
            padding: 6px 16px;
          }
          
          .display-4 {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 576px) {
          .display-4 {
            font-size: 1.8rem;
          }
          
          .pricing-card-enhanced:hover {
            transform: translateY(-5px) scale(1.01);
          }
          
          .btn-enhanced {
            padding: 14px 20px;
            font-size: 14px;
          }
          
          .plan-summary {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          
          .price-value {
            font-size: 28px;
          }
          
          .header-overlay-enhanced h3 {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Pricing;