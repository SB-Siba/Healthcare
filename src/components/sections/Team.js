/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';

const Team = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [headingAnimation, setHeadingAnimation] = useState(false);

  const doctors = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      name: 'Dr. Michael Reynolds',
      specialization: 'Cardiovascular Specialist',
      description: 'Board-certified cardiologist with expertise in complex cardiac interventions, preventive cardiology, and heart rhythm disorders.',
      experience: '18+ Years',
      expertise: ['Cardiac Interventions', 'Arrhythmia Management', 'Preventive Cardiology'],
      education: 'MD, Cardiology (Harvard Medical School)',
      social: {
        twitter: '#',
        facebook: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      name: 'Dr. Sophia Martinez',
      specialization: 'Neurology & Neurosurgery',
      description: 'Specializes in minimally invasive neurosurgical procedures, neurological disorders, and advanced brain mapping techniques.',
      experience: '12+ Years',
      expertise: ['Minimally Invasive Surgery', 'Brain Mapping', 'Neurological Disorders'],
      education: 'MD, Neurosurgery (Johns Hopkins University)',
      social: {
        twitter: '#',
        facebook: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      name: 'Dr. James Wilson',
      specialization: 'Pediatric Medicine',
      description: 'Dedicated pediatrician focusing on comprehensive child healthcare, developmental assessments, and childhood immunizations.',
      experience: '15+ Years',
      expertise: ['Developmental Pediatrics', 'Childhood Vaccinations', 'Growth Monitoring'],
      education: 'MD, Pediatrics (Stanford University)',
      social: {
        twitter: '#',
        facebook: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      name: 'Dr. Olivia Chen',
      specialization: 'Orthopedic Surgery',
      description: 'Expert in joint replacement, sports injuries, and orthopedic trauma with focus on advanced rehabilitation techniques.',
      experience: '10+ Years',
      expertise: ['Joint Replacement', 'Sports Medicine', 'Orthopedic Trauma'],
      education: 'MD, Orthopedic Surgery (Mayo Clinic)',
      social: {
        twitter: '#',
        facebook: '#',
        linkedin: '#'
      }
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
          '<i class="fas fa-chevron-circle-left"></i>',
          '<i class="fas fa-chevron-circle-right"></i>'
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
    <div className="container-fluid py-5" id="doctor" style={{ background: 'linear-gradient(135deg, #f8fdff 0%, #f0faff 100%)' }}>
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          {/* Animated Badge */}
          <div className={`team-badge ${headingAnimation ? 'animated' : ''} mb-3`}>
            <h5 className="d-inline-block text-uppercase border-bottom border-5" style={{ color: '#13c5dd' }}>
              <i className="fas fa-user-md me-2"></i>
              Medical Specialists
            </h5>
          </div>
          
          {/* Animated Title */}
          <div className={`title-wrapper ${headingAnimation ? 'animated' : ''}`}>
            <h1 className="display-4 fw-bold mb-3">
              <span className="title-part-1">Meet Our Expert</span>
              <span className="title-part-2" style={{ color: '#13c5dd' }}> Medical Team</span>
            </h1>
          </div>
          
          {/* Animated Description */}
          <div className={`description-wrapper ${headingAnimation ? 'animated' : ''}`}>
            <p className="lead text-muted">
              Board-certified physicians committed to excellence in healthcare, 
              combining clinical expertise with compassionate patient care.
            </p>
          </div>
        </div>
        
        <div 
          ref={carouselRef}
          className="owl-carousel team-carousel position-relative"
          style={{ padding: '0 40px 40px 40px' }}
        >
          {doctors.map((doctor, index) => (
            <div 
              key={doctor.id} 
              className="team-card-professional"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={`card-professional-inner ${activeIndex === index ? 'active' : ''}`}>
                <div className="doctor-profile-header">
                  <div className="profile-image-container">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="profile-image"
                    />
                    <div className="profile-badge">
                      <i className="fas fa-heartbeat"></i>
                    </div>
                  </div>
                  
                  <div className="profile-info">
                    <h3 className="doctor-name-professional">{doctor.name}</h3>
                    <div className="specialization-professional">
                      {doctor.specialization}
                    </div>
                    <div className="experience-chip">
                      <i className="fas fa-clock"></i>
                      {doctor.experience} Experience
                    </div>
                    <div className="education-chip">
                      <i className="fas fa-graduation-cap"></i>
                      {doctor.education.split('(')[0]}
                    </div>
                  </div>
                </div>
                
                <div className="doctor-description-professional">
                  <p>{doctor.description}</p>
                </div>
                
                <div className="expertise-section">
                  <h4 className="expertise-title">
                    <i className="fas fa-star"></i> Clinical Expertise
                  </h4>
                  <div className="expertise-tags">
                    {doctor.expertise.map((item, idx) => (
                      <span key={idx} className="expertise-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="doctor-footer-professional">
                  <div className="footer-content">
                    <div className="social-professional">
                      <a href={doctor.social.twitter} className="social-professional-btn">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href={doctor.social.facebook} className="social-professional-btn">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href={doctor.social.linkedin} className="social-professional-btn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <div className="action-buttons">
                      <button className="profile-btn">
                        <i className="fas fa-user-md"></i>
                        View Profile
                      </button>
                      <button className="consult-now-btn">
                        <i className="fas fa-comments"></i>
                        Schedule Visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-badge {
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.8s ease;
        }

        .team-badge.animated {
          opacity: 1;
          transform: translateY(0);
        }

        .title-wrapper {
          overflow: hidden;
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

        .team-card-professional {
          height: 600px;
          border-radius: 15px;
        }

        .card-professional-inner {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          height: 100%;
          position: relative;
          transition: all 0.4s ease;
          border: 1px solid #f0f0f0;
          display: flex;
          flex-direction: column;
        }

        .card-professional-inner.active {
          transform: translateY(-10px);
          box-shadow: 
            0 20px 40px rgba(19, 197, 221, 0.12),
            0 0 0 2px rgba(19, 197, 221, 0.1);
          border-radius: 15px;
        }

        .doctor-profile-header {
          padding: 30px 30px 20px;
          background: linear-gradient(135deg, #f8fdff 0%, #e6f7ff 100%);
          position: relative;
          overflow: hidden;
          border-radius: 15px 15px 0 0;
        }

        .card-professional-inner.active .doctor-profile-header {
          border-radius: 15px 15px 0 0;
        }

        .profile-image-container {
          position: relative;
          width: 100px;
          height: 100px;
          margin: 0 auto 20px;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.5s ease;
        }

        .card-professional-inner.active .profile-image {
          transform: scale(1.05);
          border-color: #13c5dd;
        }

        .profile-badge {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 35px;
          height: 35px;
          background: #13c5dd;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          border: 3px solid white;
          box-shadow: 0 4px 15px rgba(19, 197, 221, 0.3);
          animation: badgeRotate 10s linear infinite;
        }

        @keyframes badgeRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .profile-info {
          text-align: center;
        }

        .doctor-name-professional {
          font-size: 22px;
          font-weight: 700;
          color: #333;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .card-professional-inner.active .doctor-name-professional {
          color: #13c5dd;
        }

        .specialization-professional {
          color: #13c5dd;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .experience-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(19, 197, 221, 0.1);
          color: #13c5dd;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .education-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(108, 117, 125, 0.1);
          color: #6c757d;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          font-style: italic;
        }

        .doctor-description-professional {
          padding: 20px 30px;
          border-bottom: 1px solid #f0f0f0;
          flex-shrink: 0;
        }

        .doctor-description-professional p {
          color: #555;
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
          text-align: center;
        }

        .expertise-section {
          padding: 20px 30px;
          flex-shrink: 0;
        }

        .expertise-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .expertise-title i {
          color: #13c5dd;
        }

        .expertise-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }

        .expertise-tag {
          background: rgba(19, 197, 221, 0.08);
          color: #13c5dd;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .card-professional-inner.active .expertise-tag {
          background: rgba(19, 197, 221, 0.15);
          transform: translateY(-2px);
        }

        .doctor-footer-professional {
          padding: 20px 30px;
          background: #fafafa;
          margin-top: auto;
          border-radius: 0 0 15px 15px;
          border-top: 1px solid #f0f0f0;
          min-height: 120px;
          display: flex;
          align-items: center;
        }

        .card-professional-inner.active .doctor-footer-professional {
          border-radius: 0 0 15px 15px;
        }

        .footer-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .social-professional {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .social-professional-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: white;
          color: #666;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
          border: 1px solid #e9ecef;
        }

        .social-professional-btn:hover {
          background: #13c5dd;
          color: white;
          transform: translateY(-3px);
          border-color: #13c5dd;
        }

        .action-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .profile-btn, .consult-now-btn {
          padding: 10px 18px;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          min-width: 140px;
          justify-content: center;
        }

        .profile-btn {
          background: white;
          color: #13c5dd;
          border: 2px solid #13c5dd;
        }

        .consult-now-btn {
          background: #13c5dd;
          color: white;
          border: 2px solid #13c5dd;
        }

        .profile-btn:hover {
          background: #f0f9ff;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(19, 197, 221, 0.15);
        }

        .consult-now-btn:hover {
          background: #0ba8c7;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(19, 197, 221, 0.3);
        }

        /* Owl Carousel Customization */
        .owl-carousel .owl-nav {
          position: absolute;
          top: -60px;
          right: 0;
          display: flex;
          gap: 10px;
        }

        .owl-carousel .owl-nav button {
          width: 40px;
          height: 40px;
          background: white !important;
          border-radius: 10px !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid #e9ecef !important;
          color: #495057 !important;
          font-size: 16px !important;
          transition: all 0.3s ease;
        }

        .owl-carousel .owl-nav button:hover {
          background: #13c5dd !important;
          color: white !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(19, 197, 221, 0.25);
          border-color: transparent !important;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .team-card-professional {
            height: 620px;
          }
          
          .doctor-profile-header {
            padding: 25px 25px 15px;
          }
          
          .profile-image-container {
            width: 90px;
            height: 90px;
          }
          
          .action-buttons {
            gap: 10px;
          }
          
          .profile-btn, .consult-now-btn {
            min-width: 130px;
            padding: 9px 16px;
          }
        }

        @media (max-width: 768px) {
          .team-card-professional {
            height: 640px;
          }
          
          .owl-carousel .owl-nav {
            position: static;
            justify-content: center;
            margin-top: 30px;
            margin-bottom: 20px;
          }
          
          .doctor-profile-header {
            padding: 20px;
          }
          
          .profile-image-container {
            width: 80px;
            height: 80px;
          }
          
          .doctor-name-professional {
            font-size: 20px;
          }
          
          .doctor-footer-professional {
            padding: 15px 20px;
          }
          
          .footer-content {
            gap: 12px;
          }
          
          .social-professional {
            gap: 10px;
          }
          
          .social-professional-btn {
            width: 36px;
            height: 36px;
          }
          
          .action-buttons {
            gap: 8px;
          }
          
          .profile-btn, .consult-now-btn {
            min-width: 120px;
            padding: 8px 14px;
            font-size: 12px;
          }
        }

        @media (max-width: 576px) {
          .team-card-professional {
            height: 680px;
          }
          
          .display-4 {
            font-size: 2rem;
          }
          
          .doctor-description-professional,
          .expertise-section {
            padding: 20px;
          }
          
          .expertise-tags {
            justify-content: center;
          }
          
          .action-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .profile-btn,
          .consult-now-btn {
            width: 100%;
            min-width: 100%;
            padding: 10px;
          }
          
          .doctor-footer-professional {
            min-height: 140px;
          }
        }

        @media (max-width: 400px) {
          .team-card-professional {
            height: 700px;
          }
          
          .profile-image-container {
            width: 70px;
            height: 70px;
          }
          
          .doctor-footer-professional {
            min-height: 150px;
          }
          
          .social-professional-btn {
            width: 34px;
            height: 34px;
          }
        }
      `}</style>
    </div>
  );
};

export default Team;