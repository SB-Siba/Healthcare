import React, { useState, useEffect, useRef } from 'react';

// Import all images from assets
import Aboutdoctor from '../../assets/img/Aboutdoctor.jpg';
import Diagnostics from '../../assets/img/Diagnostics.jpg';
import Surgeries from '../../assets/img/Surgeries.jpg';
import Patients from '../../assets/img/Patients.jpg';
import Hospital247Service from '../../assets/img/Hospital247Service.jpg';
import HospitalFacility from '../../assets/img/hospital-facility.jpg';

const AboutSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    main: false,
    doctor: false,
    services: Array(4).fill(false)
  });

  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Fallback images in case imports fail
  const fallbackMain = "https://images.unsplash.com/photo-1516549655669-df6654e435de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80";
  const fallbackDoctor = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80";
  const serviceFallbacks = [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1584467735871-8db9ac8dcc6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
  ];

  // Function to get image source with fallback
  const getImageSrc = (type, index = null) => {
    try {
      if (type === 'main') {
        return HospitalFacility || fallbackMain;
      } else if (type === 'doctor') {
        return Aboutdoctor || fallbackDoctor;
      } else if (type === 'service' && index !== null) {
        const serviceImages = [Diagnostics, Surgeries, Patients, Hospital247Service];
        return serviceImages[index] || serviceFallbacks[index];
      }
    } catch (error) {
      console.log(`Error loading ${type} image:`, error);
      if (type === 'main') return fallbackMain;
      if (type === 'doctor') return fallbackDoctor;
      if (type === 'service' && index !== null) return serviceFallbacks[index];
    }
    return fallbackMain;
  };

  const services = [
    { 
      icon: "fa fa-stethoscope", 
      title: "Advanced Diagnostics", 
      count: "12,500+", 
      imageIndex: 0
    },
    { 
      icon: "fa fa-procedures", 
      title: "Surgical Procedures", 
      count: "5,800+", 
      imageIndex: 1
    },
    { 
      icon: "fa fa-user-friends", 
      title: "Patients Served", 
      count: "85K+", 
      imageIndex: 2
    },
    { 
      icon: "fa fa-clock", 
      title: "Round-the-Clock", 
      count: "Always Open", 
      imageIndex: 3
    }
  ];

  const achievements = [
    { icon: "fa fa-check-circle", text: "AI-Powered Diagnostics" },
    { icon: "fa fa-check-circle", text: "Board-Certified Specialists" },
    { icon: "fa fa-check-circle", text: "Minimally Invasive Surgery" },
    { icon: "fa fa-check-circle", text: "JCI Accredited Facility" },
    { icon: "fa fa-check-circle", text: "Smart Hospital Technology" },
    { icon: "fa fa-check-circle", text: "Personalized Care Plans" }
  ];

  // Intersection Observer to detect when section is in view
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

  const handleImageLoad = (type, index = null) => {
    console.log(`${type} image loaded successfully`);
    if (type === 'main') {
      setImagesLoaded(prev => ({ ...prev, main: true }));
    } else if (type === 'doctor') {
      setImagesLoaded(prev => ({ ...prev, doctor: true }));
    } else if (type === 'service' && index !== null) {
      const newServices = [...imagesLoaded.services];
      newServices[index] = true;
      setImagesLoaded(prev => ({ ...prev, services: newServices }));
    }
  };

  const handleImageError = (type, index = null) => {
    console.log(`${type} image failed to load`);
    // Images will fallback to Unsplash URLs in getImageSrc function
    handleImageLoad(type, index); // Mark as loaded anyway to hide spinner
  };

  return (
    <div 
      ref={sectionRef}
      className="container-fluid py-5 position-relative overflow-hidden"
    >
      <div className="container">
        <div className="row g-5">
          {/* Left Content Section */}
          <div className="col-lg-6">
            <div className="mb-5">
              {/* Subtitle with fade-in animation */}
              <div className={`fade-in-item ${inView ? 'fade-in-active' : ''}`}>
                <h6 className="text-primary text-uppercase mb-3 letter-spacing-1">
                  About MediCare Solutions
                </h6>
              </div>
              
              {/* Title with slide-in animation */}
              <div className={`slide-in-left ${inView ? 'slide-in-active' : ''}`}>
                <h2 className="fw-bold mb-4 display-5">
                  Pioneering Healthcare Innovation Since 2005
                </h2>
              </div>
              
              {/* Description with fade-in animation */}
              <div className={`fade-in-item fade-delay-1 ${inView ? 'fade-in-active' : ''}`}>
                <p className="mb-4 fs-5">
                  MediCare Solutions represents the next generation of healthcare delivery, 
                  combining cutting-edge technology with compassionate patient care. 
                  Our state-of-the-art facility houses the latest medical advancements 
                  while maintaining the human touch that defines exceptional healthcare.
                </p>
              </div>
              
              {/* Quote Section with slide-up animation */}
              <div className={`slide-up-item slide-delay-1 ${inView ? 'slide-up-active' : ''}`}>
                <div className="border-start border-3 border-primary ps-4 py-3 bg-light rounded-end mb-5">
                  <p className="fst-italic mb-2">
                    "At MediCare, we don't just treat conditions—we transform lives 
                    through innovative medical solutions and genuine human connection."
                  </p>
                  <p className="text-muted mb-0 small">— Dr. Michael Chen, Chief Medical Officer</p>
                </div>
              </div>
            </div>
            
            {/* Achievements List with staggered animations */}
            <div className="row g-3 mb-5">
              <div className="col-sm-6">
                {achievements.slice(0, 3).map((item, index) => (
                  <div 
                    key={index} 
                    className={`fade-in-item fade-stagger-${index} ${inView ? 'fade-in-active' : ''} d-flex align-items-center mb-3`}
                  >
                    <i className={`${item.icon} text-primary me-3 fa-lg`}></i>
                    <span className="fw-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="col-sm-6">
                {achievements.slice(3).map((item, index) => (
                  <div 
                    key={index + 3} 
                    className={`fade-in-item fade-stagger-${index + 3} ${inView ? 'fade-in-active' : ''} d-flex align-items-center mb-3`}
                  >
                    <i className={`${item.icon} text-primary me-3 fa-lg`}></i>
                    <span className="fw-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Emergency Info with scale animation */}
            <div className={`scale-in-item scale-delay-2 ${inView ? 'scale-in-active' : ''}`}>
              <div className="bg-primary text-white p-4 rounded-3">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h5 className="fw-bold mb-2">Immediate Emergency Response</h5>
                    <p className="mb-0 opacity-75">
                      Trauma center ready 24/7 with rapid response teams and advanced life support
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end mt-3 mt-md-0">
                    <button className="btn btn-light btn-lg pulse-animation">
                      <i className="fas fa-phone-alt me-2"></i>
                      Emergency Line
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="col-lg-6">
            <div className="position-relative">
              {/* Main Hospital Image with zoom-in animation */}
              <div className={`zoom-in-item ${inView ? 'zoom-in-active' : ''} overflow-hidden rounded-3 shadow-lg mb-4 position-relative`} 
                   style={{ backgroundColor: '#f8f9fa', minHeight: '350px' }}>
                <img 
                  src={getImageSrc('main')}
                  alt="MediCare Solutions Advanced Medical Facility" 
                  className="img-fluid w-100 border-4"
                  style={{ 
                    height: '350px', 
                    objectFit: 'cover',
                    opacity: imagesLoaded.main ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    border: '4px solid white'
                  }}
                  onError={() => handleImageError('main')}
                  onLoad={() => handleImageLoad('main')}
                />
                {!imagesLoaded.main && (
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Experience Badge with bounce animation */}
              <div className={`bounce-in-item ${inView ? 'bounce-in-active' : ''} position-absolute top-0 end-0 bg-primary text-white p-4 m-3 rounded-3 shadow`}>
                <div className="text-center">
                  <h4 className="fw-bold mb-0 display-6">18+</h4>
                  <p className="mb-0 small">Years Excellence</p>
                </div>
              </div>
              
              {/* Doctor Image with slide-in animation */}
              <div className={`slide-in-right slide-delay-1 ${inView ? 'slide-in-active' : ''} position-absolute bottom-0 start-0 bg-white p-2 m-3 rounded-3 shadow`}>
                <div className="position-relative">
                  <img 
                    src={getImageSrc('doctor')}
                    alt="MediCare Specialist Medical Team" 
                    className="rounded-2 border-4"
                    style={{ 
                      width: '120px', 
                      height: '120px', 
                      objectFit: 'cover',
                      opacity: imagesLoaded.doctor ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      border: '4px solid white'
                    }}
                    onError={() => handleImageError('doctor')}
                    onLoad={() => handleImageLoad('doctor')}
                  />
                  {!imagesLoaded.doctor && (
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <div className="spinner-border spinner-border-sm text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-center mt-2">
                  <p className="mb-0 small fw-bold">Specialist Team</p>
                  <p className="mb-0 text-muted x-small">85+ Experts</p>
                </div>
              </div>
            </div>
            
            {/* Services Grid with Images - staggered animations */}
            <div className="row g-3 mt-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`flip-in-item flip-delay-${index} ${inView ? 'flip-in-active' : ''} col-6`}
                >
                  <div className="bg-white border rounded-3 overflow-hidden shadow-sm h-100">
                    {/* Service Image */}
                    <div className="position-relative" style={{ minHeight: '100px' }}>
                      <img 
                        src={getImageSrc('service', service.imageIndex)}
                        alt={service.title}
                        className="w-100 border-4"
                        style={{ 
                          height: '100px', 
                          objectFit: 'cover',
                          opacity: imagesLoaded.services[service.imageIndex] ? 1 : 0,
                          transition: 'opacity 0.3s ease',
                          border: '4px solid white'
                        }}
                        onError={() => handleImageError('service', service.imageIndex)}
                        onLoad={() => handleImageLoad('service', service.imageIndex)}
                      />
                      {!imagesLoaded.services[service.imageIndex] && (
                        <div className="position-absolute top-50 start-50 translate-middle">
                          <div className="spinner-border spinner-border-sm text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      )}
                      <div className="position-absolute top-50 start-50 translate-middle bg-primary text-white rounded-circle p-2 border-4">
                        <i className={`${service.icon} fa-lg`}></i>
                      </div>
                    </div>
                    
                    {/* Service Content */}
                    <div className="p-3 text-center">
                      <h6 className="fw-bold mb-1">{service.title}</h6>
                      <p className="text-primary fw-bold mb-0">{service.count}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .letter-spacing-1 {
          letter-spacing: 1px;
        }
        
        .x-small {
          font-size: 0.75rem;
        }
        
        /* Fade In Animation */
        .fade-in-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in-active {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Slide In From Left */
        .slide-in-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 1s ease, transform 1s ease;
        }
        
        .slide-in-active {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Slide In From Right */
        .slide-in-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 1s ease, transform 1s ease;
        }
        
        /* Slide Up Animation */
        .slide-up-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .slide-up-active {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Zoom In Animation */
        .zoom-in-item {
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 1s ease, transform 1s ease;
        }
        
        .zoom-in-active {
          opacity: 1;
          transform: scale(1);
        }
        
        /* Bounce In Animation */
        .bounce-in-item {
          opacity: 0;
          transform: scale(0.5) translateY(-20px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .bounce-in-active {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        
        /* Flip In Animation */
        .flip-in-item {
          opacity: 0;
          transform: perspective(400px) rotateY(90deg);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .flip-in-active {
          opacity: 1;
          transform: perspective(400px) rotateY(0deg);
        }
        
        /* Scale In Animation */
        .scale-in-item {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .scale-in-active {
          opacity: 1;
          transform: scale(1);
        }
        
        /* Pulse Animation for Button */
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        /* Delay Classes */
        .fade-delay-1 {
          transition-delay: 0.2s;
        }
        
        .slide-delay-1 {
          transition-delay: 0.4s;
        }
        
        .scale-delay-2 {
          transition-delay: 0.8s;
        }
        
        /* Staggered delays for achievements */
        .fade-stagger-0 { transition-delay: 0.1s; }
        .fade-stagger-1 { transition-delay: 0.2s; }
        .fade-stagger-2 { transition-delay: 0.3s; }
        .fade-stagger-3 { transition-delay: 0.4s; }
        .fade-stagger-4 { transition-delay: 0.5s; }
        .fade-stagger-5 { transition-delay: 0.6s; }
        
        /* Staggered delays for service cards */
        .flip-delay-0 { transition-delay: 0.1s; }
        .flip-delay-1 { transition-delay: 0.2s; }
        .flip-delay-2 { transition-delay: 0.3s; }
        .flip-delay-3 { transition-delay: 0.4s; }
        
        /* Keyframes for pulse animation */
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        /* Custom border for all images */
        .border-4 {
          border: 4px solid white !important;
          box-sizing: border-box;
        }
        
        @media (max-width: 768px) {
          .display-5 {
            font-size: 2rem;
          }
          
          .fs-5 {
            font-size: 1rem;
          }
          
          /* Adjust image sizes for mobile */
          .doctor-img-container img {
            width: 100px !important;
            height: 100px !important;
          }
          
          .service-image-container img {
            height: 80px !important;
          }
          
          /* Adjust animations for mobile */
          .slide-in-left,
          .slide-in-right {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutSection;