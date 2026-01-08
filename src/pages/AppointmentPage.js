import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppointmentForm from '../components/ui/AppointmentForm';

const AppointmentPage5 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    'No waiting time',
    'Expert doctors',
    'Flexible scheduling',
    '24/7 support',
    'Online consultations',
    'Insurance accepted'
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'rgba(19, 197, 221, 0.1)',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        animation: 'floatElement 20s infinite linear'
      }} />
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        width: '150px',
        height: '150px',
        background: 'rgba(19, 197, 221, 0.08)',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        animation: 'floatElement 25s infinite linear reverse'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '20%',
        width: '80px',
        height: '80px',
        background: 'rgba(19, 197, 221, 0.12)',
        borderRadius: '50%',
        animation: 'floatElement 15s infinite linear'
      }} />

      <div className="container-fluid py-5 position-relative z-1">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease'
              }}>
                <div className="mb-5">
                  <h5 className="text-uppercase mb-4" style={{
                    color: '#13c5dd',
                    letterSpacing: '2px',
                    fontWeight: '600'
                  }}>
                    Book Appointment
                  </h5>
                  <h1 className="display-4 mb-4" style={{
                    background: 'linear-gradient(135deg, #13c5dd, #0a9eb5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '800'
                  }}>
                    Easy & Quick <br />
                    Medical Booking
                  </h1>
                  <p className="fs-5 text-muted mb-5">
                    Schedule your healthcare appointments effortlessly with our 
                    user-friendly booking system. Get the care you need, when you need it.
                  </p>
                </div>

                {/* Benefits */}
                <div className="row mb-5">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="col-6 mb-3"
                      style={{
                        animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="me-3" style={{
                          width: '40px',
                          height: '40px',
                          background: 'rgba(19, 197, 221, 0.1)',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <i className="fas fa-check" style={{ color: '#13c5dd' }}></i>
                        </div>
                        <span className="fw-medium">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="d-flex flex-wrap gap-3">
                  <Link 
                    to="/team" 
                    className="btn px-5 py-3"
                    style={{
                      background: 'linear-gradient(135deg, #13c5dd, #0a9eb5)',
                      color: 'white',
                      borderRadius: '12px',
                      fontWeight: '600',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 15px 30px rgba(19, 197, 221, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <i className="fas fa-search me-2"></i>
                    Browse Doctors
                  </Link>
                  <Link 
                    to="/contact" 
                    className="btn px-5 py-3"
                    style={{
                      background: 'white',
                      color: '#13c5dd',
                      border: '2px solid #13c5dd',
                      borderRadius: '12px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(19, 197, 221, 0.1)';
                      e.target.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'white';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className="fas fa-headset me-2"></i>
                    Need Help?
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease 0.3s'
              }}>
                <div style={{
                  background: 'white',
                  borderRadius: '30px',
                  padding: '40px',
                  boxShadow: '0 30px 60px rgba(19, 197, 221, 0.15)',
                  border: '1px solid rgba(19, 197, 221, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Decorative Element */}
                  <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '200px',
                    height: '200px',
                    background: 'linear-gradient(135deg, rgba(19, 197, 221, 0.1), rgba(10, 158, 181, 0.1))',
                    borderRadius: '50%',
                    zIndex: 0
                  }} />
                  
                  <div className="position-relative z-1">
                    <div className="text-center mb-5">
                      <div className="mb-4" style={{
                        display: 'inline-block',
                        padding: '20px',
                        background: 'linear-gradient(135deg, #13c5dd, #0a9eb5)',
                        borderRadius: '20px',
                        boxShadow: '0 10px 20px rgba(19, 197, 221, 0.3)'
                      }}>
                        <i className="fas fa-calendar-check fa-3x text-white"></i>
                      </div>
                      <h3 className="mb-3">Schedule Now</h3>
                      <p className="text-muted">Book your appointment in minutes</p>
                    </div>
                    
                    <AppointmentForm />
                    
                    <div className="text-center mt-4 pt-4" style={{
                      borderTop: '1px solid rgba(19, 197, 221, 0.1)'
                    }}>
                      <p className="text-muted mb-0 small">
                        <i className="fas fa-lock me-2" style={{ color: '#13c5dd' }}></i>
                        Your data is protected and never shared
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="row mt-5 pt-5">
            <div className="col-md-4 mb-4">
              <div className="d-flex align-items-start p-4" style={{
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(19, 197, 221, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
              }}>
                <div className="me-3" style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(19, 197, 221, 0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <i className="fas fa-phone-alt fa-2x" style={{ color: '#13c5dd' }}></i>
                </div>
                <div>
                  <h5 className="mb-2">Call Center</h5>
                  <p className="text-muted mb-2">Available 24/7 for assistance</p>
                  <div className="fw-bold" style={{ color: '#13c5dd' }}>+1 (800) 123-4567</div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="d-flex align-items-start p-4" style={{
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(19, 197, 221, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
              }}>
                <div className="me-3" style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(19, 197, 221, 0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <i className="fas fa-video fa-2x" style={{ color: '#13c5dd' }}></i>
                </div>
                <div>
                  <h5 className="mb-2">Video Consult</h5>
                  <p className="text-muted mb-2">Online appointments available</p>
                  <div className="fw-bold" style={{ color: '#13c5dd' }}>Start Consultation</div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="d-flex align-items-start p-4" style={{
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(19, 197, 221, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
              }}>
                <div className="me-3" style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(19, 197, 221, 0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <i className="fas fa-file-medical fa-2x" style={{ color: '#13c5dd' }}></i>
                </div>
                <div>
                  <h5 className="mb-2">Insurance</h5>
                  <p className="text-muted mb-2">Most insurances accepted</p>
                  <div className="fw-bold" style={{ color: '#13c5dd' }}>Check Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes floatElement {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(20px) rotate(240deg);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AppointmentPage5;