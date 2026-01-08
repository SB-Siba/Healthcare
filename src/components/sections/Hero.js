import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import doctorbanner1 from '../../assets/img/Doctorbanner1.jpg';
import doctorbanner2 from '../../assets/img/Doctorbanner2.jpg';
import doctorbanner3 from '../../assets/img/Doctorbanner3.jpg';
import doctorbanner4 from '../../assets/img/Doctorbanner4.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef(null);

  const slides = [
    {
      id: 1,
      bgImage: doctorbanner1,
    },
    {
      id: 2,
      bgImage: doctorbanner2,
    },
    {
      id: 3,
      bgImage: doctorbanner3,
    },
    {
      id: 4,
      bgImage: doctorbanner4,
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  return (
    <div className="hero-slider" ref={slideRef}>
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${slide.bgImage})`,
              zIndex: index === currentSlide ? 3 : index < currentSlide ? 1 : 2
            }}
          >
            {/* No overlay, no text content */}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="slider-nav prev-nav" 
        onClick={prevSlide}
        disabled={isAnimating}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button 
        className="slider-nav next-nav" 
        onClick={nextSlide}
        disabled={isAnimating}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Navigation Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .hero-slider {
          height: 85vh; /* Reduced height */
          min-height: 550px; /* Reduced min-height */
          max-height: 800px; /* Added max-height */
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        
        .slider-container {
          position: relative;
          height: 100%;
          width: 100%;
        }
        
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: 100% 100%; /* This will stretch the image to fill container */
          background-position: center center;
          background-repeat: no-repeat;
          background-color: #000; /* Black background for any gaps */
          opacity: 0;
          transform: translateX(100%);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .slide.active {
          opacity: 1;
          transform: translateX(0);
          animation: slideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .slide:not(.active) {
          transform: translateX(-100%);
        }
        
        .slider-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.7);
          color: #333;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          opacity: 0.8;
        }
        
        .slider-nav:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          opacity: 1;
        }
        
        .slider-nav:disabled {
          opacity: 0.3;
          cursor: not-allowed;
          transform: translateY(-50%);
        }
        
        .slider-nav:disabled:hover {
          background: rgba(255, 255, 255, 0.7);
          transform: translateY(-50%);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .prev-nav {
          left: 20px;
        }
        
        .next-nav {
          right: 20px;
        }
        
        .slider-nav i {
          font-size: 1.2rem;
        }
        
        .slider-dots {
          position: absolute;
          bottom: 30px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 12px;
          z-index: 10;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.4s ease;
          padding: 0;
          position: relative;
        }
        
        .dot.active {
          background: white;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
        
        .dot:hover:not(.active) {
          background: rgba(255, 255, 255, 0.9);
          transform: scale(1.1);
        }
        
        .dot:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Responsive Styles */
        @media (max-width: 1200px) {
          .hero-slider {
            height: 80vh;
            min-height: 500px;
          }
        }
        
        @media (max-width: 992px) {
          .hero-slider {
            height: 75vh;
            min-height: 450px;
          }
          
          .slider-nav {
            width: 45px;
            height: 45px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-slider {
            height: 70vh;
            min-height: 400px;
          }
          
          .slider-nav {
            width: 40px;
            height: 40px;
          }
          
          .prev-nav {
            left: 15px;
          }
          
          .next-nav {
            right: 15px;
          }
        }
        
        @media (max-width: 576px) {
          .hero-slider {
            height: 65vh;
            min-height: 350px;
          }
          
          .slider-nav {
            width: 35px;
            height: 35px;
          }
          
          .slider-nav i {
            font-size: 1rem;
          }
          
          .dot {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;