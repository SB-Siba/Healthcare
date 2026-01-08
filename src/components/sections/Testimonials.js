/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';

const Testimonials = () => {
  const carouselRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [headingAnimation, setHeadingAnimation] = useState(false);

  const testimonials = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1494790108755-2616c113a1de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      name: 'Robert Johnson',
      role: 'Business Executive',
      rating: 5,
      treatment: 'Cardiac Surgery',
      duration: '4 months ago',
      quote: 'The cardiac care I received was exceptional. The medical team provided thorough explanations and compassionate support throughout my treatment journey. Their expertise and attention to detail gave me confidence in my recovery process.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w-400&q=80',
      name: 'Sarah Williams',
      role: 'Software Developer',
      rating: 5,
      treatment: 'Orthopedic Surgery',
      duration: '2 months ago',
      quote: 'After my knee surgery, the rehabilitation support was outstanding. The physical therapy team worked closely with me, creating a personalized recovery plan that exceeded my expectations. I\'m now back to my active lifestyle.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      name: 'Maria Garcia',
      role: 'University Professor',
      rating: 5,
      treatment: 'Neurological Care',
      duration: '3 weeks ago',
      quote: 'The neurological department provided comprehensive care for my condition. The specialists took time to explain complex medical information in understandable terms. Their patient-centered approach made a significant difference in my treatment experience.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      name: 'James Wilson',
      role: 'Architect',
      rating: 5,
      treatment: 'Preventive Health',
      duration: '1 month ago',
      quote: 'My preventive health screening was thorough and professional. The medical team identified potential health risks early and provided clear guidance for maintaining optimal health. The personalized wellness plan they developed has been incredibly valuable.'
    }
  ];

  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      $(carouselRef.current).owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        onChanged: (event) => {
          setActiveSlideIndex(event.item.index);
        },
        navText: [
          '<i class="fas fa-arrow-left"></i>',
          '<i class="fas fa-arrow-right"></i>'
        ]
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
    <div className="container-fluid py-5" id="reviews" style={{ background: 'linear-gradient(135deg, #f9fcff 0%, #f0f7ff 100%)' }}>
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          {/* Animated Badge */}
          <div className={`testimonial-badge ${headingAnimation ? 'animated' : ''} mb-3`}>
            <h5 className="d-inline-block text-uppercase border-bottom border-5" style={{ color: '#13c5dd' }}>
              <i className="fas fa-comment-medical me-2"></i>
              Patient Experiences
            </h5>
          </div>
          
          {/* Animated Title */}
          <div className={`title-wrapper ${headingAnimation ? 'animated' : ''}`}>
            <h1 className="display-4 fw-bold mb-4">
              <span className="title-part-1">What Our Patients</span>
              <span className="title-part-2" style={{ color: '#13c5dd' }}> Share About Us</span>
            </h1>
          </div>
          
          {/* Animated Description */}
          <div className={`description-wrapper ${headingAnimation ? 'animated' : ''}`}>
            <p className="lead text-muted">
              Real stories from patients who have experienced our commitment to 
              exceptional healthcare and personalized medical attention.
            </p>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="minimal-testimonial-wrapper">
              <div ref={carouselRef} className="owl-carousel testimonial-carousel-minimal">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="testimonial-minimal-item">
                    <div className={`minimal-card ${activeSlideIndex === index ? 'active' : ''}`}>
                      <div className="card-top-section">
                        <div className="patient-avatar-container">
                          <div className="avatar-wrapper">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="patient-avatar"
                            />
                            <div className="avatar-ring"></div>
                            <div className="avatar-status"></div>
                          </div>
                        </div>
                        
                        <div className="patient-quick-info">
                          <h3 className="patient-name-minimal">{testimonial.name}</h3>
                          <p className="patient-role-minimal">{testimonial.role}</p>
                          <div className="patient-meta-minimal">
                            <span className="meta-item">
                              <i className="fas fa-procedures"></i>
                              {testimonial.treatment}
                            </span>
                            <span className="meta-item">
                              <i className="fas fa-calendar"></i>
                              {testimonial.duration}
                            </span>
                            <span className="meta-item">
                              <i className="fas fa-map-marker-alt"></i>
                              San Francisco, CA
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card-middle-section">
                        <div className="rating-minimal">
                          <div className="stars-container">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fas fa-star"></i>
                            ))}
                          </div>
                          <span className="rating-text-minimal">
                            <i className="fas fa-award"></i>
                            Outstanding Experience
                          </span>
                        </div>
                        
                        <div className="quote-minimal-container">
                          <div className="quote-icon-left">
                            <i className="fas fa-quote-left"></i>
                          </div>
                          <p className="quote-minimal">
                            {testimonial.quote}
                          </p>
                          <div className="quote-icon-right">
                            <i className="fas fa-quote-right"></i>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card-bottom-section">
                        <div className="testimonial-verified">
                          <i className="fas fa-shield-alt"></i>
                          <span>Verified Medical Review • Patient ID: #{Math.floor(100000 + Math.random() * 900000)}</span>
                        </div>
                        <div className="testimonial-actions">
                          <button className="action-btn like">
                            <i className="fas fa-heart"></i>
                            <span>Helpful Review</span>
                          </button>
                          <button className="action-btn share">
                            <i className="fas fa-share-alt"></i>
                          </button>
                        </div>
                      </div>
                      
                      <div className="minimal-card-hover"></div>
                      <div className="corner-decoration"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="minimal-slider-controls">
                <div className="slider-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${((activeSlideIndex + 1) / testimonials.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                  <div className="slider-counter">
                    <span className="current-slide">{activeSlideIndex + 1}</span>
                    <span className="total-slides">/{testimonials.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-badge {
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.8s ease;
        }

        .testimonial-badge.animated {
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

        .minimal-testimonial-wrapper {
          position: relative;
        }

        .testimonial-minimal-item {
          padding: 15px;
        }

        .minimal-card {
          background: white;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          border: 1px solid #f0f0f0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .minimal-card.active {
          transform: translateY(-10px);
          box-shadow: 
            0 20px 50px rgba(19, 197, 221, 0.15),
            0 0 0 1px rgba(19, 197, 221, 0.1);
          animation: cardFloat 3s ease-in-out infinite;
        }

        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .corner-decoration {
          position: absolute;
          top: 0;
          right: 0;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, transparent 50%, rgba(19, 197, 221, 0.1) 50%);
          border-top-right-radius: 16px;
        }

        .card-top-section {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-bottom: 35px;
          padding-bottom: 30px;
          border-bottom: 1px solid #f0f0f0;
        }

        .patient-avatar-container {
          flex-shrink: 0;
        }

        .avatar-wrapper {
          position: relative;
          width: 90px;
          height: 90px;
        }

        .patient-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          position: relative;
          z-index: 2;
          transition: all 0.5s ease;
        }

        .minimal-card.active .patient-avatar {
          transform: scale(1.08);
          border-color: #13c5dd;
        }

        .avatar-ring {
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          border: 2px solid rgba(19, 197, 221, 0.5);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .minimal-card.active .avatar-ring {
          opacity: 1;
          animation: ringPulse 3s infinite;
        }

        @keyframes ringPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        .avatar-status {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 20px;
          height: 20px;
          background: #4CAF50;
          border-radius: 50%;
          border: 3px solid white;
          z-index: 3;
          animation: statusPulse 2s infinite;
        }

        @keyframes statusPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
          }
          70% {
            box-shadow: 0 0 0 6px rgba(76, 175, 80, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
          }
        }

        .patient-quick-info {
          flex: 1;
        }

        .patient-name-minimal {
          font-size: 24px;
          font-weight: 700;
          color: #333;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .minimal-card.active .patient-name-minimal {
          color: #13c5dd;
        }

        .patient-role-minimal {
          color: #13c5dd;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .patient-meta-minimal {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 14px;
          font-weight: 500;
          background: rgba(19, 197, 221, 0.05);
          padding: 6px 12px;
          border-radius: 8px;
        }

        .meta-item i {
          color: #13c5dd;
          font-size: 13px;
        }

        .card-middle-section {
          margin-bottom: 35px;
        }

        .rating-minimal {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
          padding: 15px;
          background: rgba(19, 197, 221, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(19, 197, 221, 0.1);
        }

        .stars-container {
          display: flex;
          gap: 4px;
          color: #FFB300;
          font-size: 20px;
        }

        .rating-text-minimal {
          color: #13c5dd;
          font-size: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .quote-minimal-container {
          position: relative;
          padding: 0 40px;
        }

        .quote-icon-left, .quote-icon-right {
          position: absolute;
          color: rgba(19, 197, 221, 0.2);
          font-size: 40px;
        }

        .quote-icon-left {
          top: -10px;
          left: 0;
        }

        .quote-icon-right {
          bottom: -10px;
          right: 0;
        }

        .quote-minimal {
          color: #555;
          font-size: 18px;
          line-height: 1.8;
          font-style: italic;
          position: relative;
          text-align: center;
        }

        .card-bottom-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid #f0f0f0;
          flex-wrap: wrap;
          gap: 20px;
        }

        .testimonial-verified {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #13c5dd;
          font-size: 15px;
          font-weight: 500;
        }

        .testimonial-verified i {
          font-size: 18px;
        }

        .testimonial-actions {
          display: flex;
          gap: 12px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 22px;
          border: none;
          border-radius: 25px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn.like {
          background: linear-gradient(135deg, rgba(19, 197, 221, 0.1), rgba(19, 197, 221, 0.2));
          color: #13c5dd;
        }

        .action-btn.share {
          background: #f5f5f5;
          color: #666;
        }

        .action-btn.like:hover {
          background: linear-gradient(135deg, #13c5dd, #0ba8c7);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(19, 197, 221, 0.2);
        }

        .action-btn.share:hover {
          background: #e9ecef;
          transform: translateY(-3px);
        }

        .minimal-card-hover {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 80%, rgba(19, 197, 221, 0.03) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .minimal-card.active .minimal-card-hover {
          opacity: 1;
        }

        .minimal-slider-controls {
          margin-top: 40px;
        }

        .slider-progress {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .progress-bar {
          flex: 1;
          height: 6px;
          background: #e9ecef;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #13c5dd, #0ba8c7);
          border-radius: 3px;
          transition: width 0.6s ease;
        }

        .slider-counter {
          display: flex;
          align-items: baseline;
          gap: 5px;
          font-size: 20px;
          font-weight: 600;
        }

        .current-slide {
          color: #13c5dd;
          font-size: 36px;
        }

        .total-slides {
          color: #666;
          font-size: 18px;
        }

        /* Owl Carousel Customization */
        .owl-carousel .owl-nav {
          position: absolute;
          top: 50%;
          left: -80px;
          right: -80px;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          pointer-events: none;
        }

        .owl-carousel .owl-nav button {
          width: 50px;
          height: 50px;
          background: white !important;
          border-radius: 50% !important;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          border: 1px solid #e9ecef !important;
          color: #495057 !important;
          font-size: 16px !important;
          transition: all 0.3s ease;
          pointer-events: all;
        }

        .owl-carousel .owl-nav button:hover {
          background: #13c5dd !important;
          color: white !important;
          transform: scale(1.1);
          box-shadow: 0 12px 30px rgba(19, 197, 221, 0.25);
        }

        .owl-carousel .owl-dots {
          display: none;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .owl-carousel .owl-nav {
            left: -50px;
            right: -50px;
          }
          
          .card-top-section {
            gap: 25px;
          }
          
          .avatar-wrapper {
            width: 80px;
            height: 80px;
          }
        }

        @media (max-width: 992px) {
          .minimal-card {
            padding: 35px;
          }
          
          .avatar-wrapper {
            width: 75px;
            height: 75px;
          }
          
          .patient-name-minimal {
            font-size: 22px;
          }
          
          .quote-minimal {
            font-size: 17px;
          }
          
          .owl-carousel .owl-nav {
            position: static;
            transform: none;
            justify-content: center;
            gap: 25px;
            margin-top: 35px;
          }
          
          .slider-progress {
            gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .card-top-section {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          
          .patient-quick-info {
            text-align: center;
          }
          
          .patient-meta-minimal {
            justify-content: center;
          }
          
          .card-bottom-section {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
          
          .testimonial-actions {
            justify-content: center;
          }
          
          .quote-minimal-container {
            padding: 0 30px;
          }
        }

        @media (max-width: 576px) {
          .minimal-card {
            padding: 25px;
          }
          
          .display-4 {
            font-size: 2.2rem;
          }
          
          .avatar-wrapper {
            width: 70px;
            height: 70px;
          }
          
          .patient-name-minimal {
            font-size: 20px;
          }
          
          .quote-minimal {
            font-size: 16px;
          }
          
          .current-slide {
            font-size: 32px;
          }
          
          .action-btn {
            padding: 8px 18px;
            font-size: 14px;
          }
          
          .rating-minimal {
            flex-direction: column;
            gap: 10px;
          }
          
          .slider-progress {
            flex-direction: column;
            gap: 15px;
          }
        }

        @media (max-width: 400px) {
          .minimal-card {
            padding: 20px;
          }
          
          .avatar-wrapper {
            width: 65px;
            height: 65px;
          }
          
          .quote-minimal {
            font-size: 15px;
          }
          
          .quote-minimal-container {
            padding: 0 20px;
          }
          
          .testimonial-verified {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;