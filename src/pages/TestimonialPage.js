import React, { useState, useEffect } from 'react';
import useCarousel from '../hooks/useCarousel';

const TestimonialPage5 = () => {
  useCarousel();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      image: '/img/testimonial-1.jpg',
      name: 'Jennifer Lawrence',
      role: 'Actress',
      quote: 'My experience at MEDINOVA was exceptional. Dr. David Patel and his team displayed incredible skill and compassion during my brain surgery.',
      rating: 5,
      department: 'Neurosurgery'
    },
    {
      id: 2,
      image: '/img/testimonial-2.jpg',
      name: 'John Smith',
      role: 'Engineer',
      quote: 'I had a fantastic experience at MEDINOVA\'s cardiology department. Doctor provided exemplary care, explaining my condition thoroughly.',
      rating: 5,
      department: 'Cardiology'
    },
    {
      id: 3,
      image: '/img/testimonial-3.jpg',
      name: 'Sophia Thompson',
      role: 'Writer',
      quote: 'I can\'t thank the staff at MEDINOVA\'s Pediatric Department enough for the care they provided to my child.',
      rating: 5,
      department: 'Pediatrics'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f7ff 0%, #e6f2ff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, rgba(19, 197, 221, 0.1), rgba(10, 158, 181, 0.05))',
        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        animation: 'floatShape 20s infinite linear'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        background: 'linear-gradient(135deg, rgba(19, 197, 221, 0.05), rgba(10, 158, 181, 0.1))',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        animation: 'floatShape 25s infinite linear reverse'
      }} />

      <div className="container-fluid py-5 position-relative z-1">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
            <div style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease'
            }}>
              <div className="mb-4">
                <div style={{
                  display: 'inline-block',
                  padding: '12px 35px',
                  background: 'linear-gradient(135deg, #13c5dd, #0a9eb5)',
                  borderRadius: '50px',
                  boxShadow: '0 10px 20px rgba(19, 197, 221, 0.3)'
                }}>
                  <h5 className="mb-0 text-white">Patient Experiences</h5>
                </div>
              </div>
              <h1 className="display-4 mb-4">
                Voices of <span style={{ color: '#13c5dd' }}>Hope</span>
              </h1>
              <p className="fs-5 text-muted">
                Real stories from patients who transformed their health with our expert care
              </p>
            </div>
          </div>

          <div className="row g-5 justify-content-center">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="col-lg-4 col-md-6"
                style={{
                  animation: `floatCard 3s ease-in-out infinite ${index * 0.2}s, fadeIn 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="h-100" style={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '30px',
                  boxShadow: '0 20px 60px rgba(19, 197, 221, 0.15)',
                  border: '1px solid rgba(19, 197, 221, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-20px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 40px 80px rgba(19, 197, 221, 0.25)';
                  e.currentTarget.style.animationPlayState = 'paused';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(19, 197, 221, 0.15)';
                  e.currentTarget.style.animationPlayState = 'running';
                }}>
                  
                  {/* Department Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(19, 197, 221, 0.1)',
                    color: '#13c5dd',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {testimonial.department}
                  </div>

                  {/* Profile */}
                  <div className="d-flex align-items-center mb-4">
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '3px solid rgba(19, 197, 221, 0.2)',
                      marginRight: '20px',
                      flexShrink: 0,
                      boxShadow: '0 10px 20px rgba(19, 197, 221, 0.2)'
                    }}>
                      <img 
                        className="w-100 h-100" 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="mb-1" style={{ color: '#333' }}>{testimonial.name}</h4>
                      <p className="mb-0" style={{ 
                        color: '#13c5dd',
                        fontWeight: '500'
                      }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-4">
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star" style={{ 
                            color: '#ffc107',
                            marginRight: '2px'
                          }}></i>
                        ))}
                      </div>
                      <span className="fw-bold" style={{ color: '#13c5dd' }}>
                        Excellent Experience
                      </span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mb-4" style={{ position: 'relative' }}>
                    <i className="fas fa-quote-left" style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '-10px',
                      fontSize: '2rem',
                      color: 'rgba(19, 197, 221, 0.2)',
                      transform: 'rotate(180deg)'
                    }}></i>
                    <p className="fs-5" style={{
                      color: '#333',
                      lineHeight: '1.6',
                      paddingLeft: '20px',
                      fontStyle: 'italic'
                    }}>
                      "{testimonial.quote}"
                    </p>
                    <i className="fas fa-quote-right" style={{
                      position: 'absolute',
                      bottom: '-10px',
                      right: '-10px',
                      fontSize: '2rem',
                      color: 'rgba(19, 197, 221, 0.2)'
                    }}></i>
                  </div>

                  {/* Decorative Line */}
                  <div style={{
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(90deg, #13c5dd, rgba(19, 197, 221, 0.2))',
                    borderRadius: '2px',
                    marginTop: '20px'
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="row mt-5 pt-5">
            <div className="col-12">
              <div className="text-center p-5" style={{
                background: 'linear-gradient(135deg, rgba(19, 197, 221, 0.1), rgba(10, 158, 181, 0.05))',
                borderRadius: '30px',
                border: '1px solid rgba(19, 197, 221, 0.2)',
                backdropFilter: 'blur(10px)',
                animation: isVisible ? 'fadeIn 1s ease-out 0.6s both' : 'none'
              }}>
                <h3 className="mb-4">Share Your Story</h3>
                <p className="fs-5 text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
                  Have you experienced exceptional care at our hospital? We'd love to hear your story.
                </p>
                <button className="btn px-5 py-3" style={{
                  background: 'linear-gradient(135deg, #13c5dd, #0a9eb5)',
                  color: 'white',
                  borderRadius: '12px',
                  fontWeight: '600',
                  border: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 15px 30px rgba(19, 197, 221, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}>
                  <i className="fas fa-pen me-2"></i>
                  Share Your Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(30px) rotate(240deg); }
        }
        
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialPage5;