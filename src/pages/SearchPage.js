import React, { useState } from 'react';

const ModernDoctorSearch = () => {
  const [searchData, setSearchData] = useState({
    department: '',
    keyword: ''
  });

  const [searchFocused, setSearchFocused] = useState(false);

  const departments = [
    { value: '', label: 'All Specialties' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'neuro-surgery', label: 'Neurosurgery' },
    { value: 'pediatriology', label: 'Pediatrics' }
  ];

  const stats = [
    { label: 'Total Doctors', value: '500+', icon: 'fas fa-user-md' },
    { label: 'Departments', value: '20+', icon: 'fas fa-hospital' },
    { label: 'Patient Satisfaction', value: '98%', icon: 'fas fa-heart' },
    { label: 'Years Experience', value: '15+', icon: 'fas fa-award' }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. David Patel',
      specialization: 'Cardiology',
      experience: '20 years',
      image: '/img/team-1.jpg',
      rating: 4.9,
      nextAvailable: 'Today, 2:30 PM',
      type: 'dark' // dark, light, normal
    },
    {
      id: 2,
      name: 'Dr. Tyler Anderson',
      specialization: 'Neurosurgery',
      experience: '8 years',
      image: '/img/team-2.jpg',
      rating: 4.8,
      nextAvailable: 'Tomorrow, 10:00 AM',
      type: 'normal'
    },
    {
      id: 3,
      name: 'Dr. Emily Johnson',
      specialization: 'Pediatrics',
      experience: '12 years',
      image: '/img/team-3.jpg',
      rating: 4.9,
      nextAvailable: 'Today, 4:00 PM',
      type: 'light'
    }
  ];

  const getTypeStyles = (type) => {
    const baseColor = '#13c5dd';
    const styles = {
      dark: {
        background: `linear-gradient(135deg, ${baseColor} 0%, #0a9eb5 100%)`,
        color: '#ffffff',
        accent: '#ffffff'
      },
      light: {
        background: `linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)`,
        color: '#333333',
        accent: baseColor
      },
      normal: {
        background: `linear-gradient(135deg, rgba(19, 197, 221, 0.1) 0%, rgba(10, 158, 181, 0.1) 100%)`,
        color: '#333333',
        accent: baseColor
      }
    };
    return styles[type] || styles.normal;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Data:', searchData);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc'
    }}>
      {/* Header */}
      <div className="container-fluid" style={{
        background: `linear-gradient(135deg, #13c5dd 0%, #0a9eb5 100%)`,
        paddingTop: '80px',
        paddingBottom: '60px',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'pulse 8s infinite alternate'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          animation: 'pulse 6s infinite alternate-reverse'
        }} />

        <div className="container position-relative z-1">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div style={{
                animation: 'slideInLeft 0.8s ease-out'
              }}>
                <h1 className="display-4 text-white mb-4">
                  Find Your <span style={{ color: '#ffd700' }}>Perfect</span> Doctor
                </h1>
                <p className="text-white fs-5 mb-5" style={{ opacity: 0.9 }}>
                  Connect with top medical specialists for personalized healthcare solutions.
                </p>
                
                <div className="row">
                  {stats.map((stat, index) => (
                    <div key={index} className="col-6 mb-4">
                      <div className="d-flex align-items-center">
                        <div className="me-3" style={{
                          width: '50px',
                          height: '50px',
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                          e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}>
                          <i className={`${stat.icon} text-white`} style={{ fontSize: '1.5rem' }}></i>
                        </div>
                        <div>
                          <div className="text-white fs-3 fw-bold">{stat.value}</div>
                          <div className="text-white" style={{ opacity: 0.8 }}>{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                animation: 'slideInRight 0.8s ease-out',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div className="text-center mb-4">
                  <div style={{
                    display: 'inline-block',
                    padding: '10px 25px',
                    background: `linear-gradient(135deg, #13c5dd, #0a9eb5)`,
                    borderRadius: '50px',
                    marginBottom: '20px'
                  }}>
                    <h3 className="mb-0 text-white">Search Doctors</h3>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <div className="input-group" style={{
                      border: `2px solid ${searchFocused ? '#13c5dd' : '#e0e0e0'}`,
                      borderRadius: '16px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      background: 'white'
                    }}>
                      <span className="input-group-text border-0" style={{
                        background: 'transparent',
                        padding: '0 20px'
                      }}>
                        <i className="fas fa-search" style={{
                          color: searchFocused ? '#13c5dd' : '#999'
                        }}></i>
                      </span>
                      <input 
                        type="text" 
                        className="form-control border-0"
                        style={{
                          padding: '20px 0',
                          fontSize: '1.1rem',
                          background: 'transparent'
                        }}
                        placeholder="Search by name, specialty, or symptoms"
                        name="keyword"
                        value={searchData.keyword}
                        onChange={handleChange}
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <select 
                      className="form-select py-3"
                      style={{
                        border: '2px solid #e0e0e0',
                        borderRadius: '16px',
                        fontSize: '1rem',
                        padding: '15px',
                        transition: 'all 0.3s ease',
                        background: 'white'
                      }}
                      name="department"
                      value={searchData.department}
                      onChange={handleChange}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#13c5dd';
                        e.target.style.boxShadow = '0 0 0 3px rgba(19, 197, 221, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e0e0e0';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      {departments.map((dept, index) => (
                        <option key={index} value={dept.value}>
                          {dept.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <button 
                    className="btn w-100 py-3"
                    type="submit"
                    style={{
                      background: `linear-gradient(135deg, #13c5dd 0%, #0a9eb5 100%)`,
                      color: 'white',
                      borderRadius: '16px',
                      fontSize: '1.1rem',
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
                    <span>Find Doctors Now</span>
                    <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </form>
                
                <div className="text-center mt-4">
                  <p className="text-muted mb-0">
                    <i className="fas fa-shield-alt me-2" style={{ color: '#13c5dd' }}></i>
                    Verified doctors · Secure appointments · Confidential
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div style={{
              display: 'inline-block',
              padding: '15px 40px',
              background: 'rgba(19, 197, 221, 0.1)',
              borderRadius: '50px',
              marginBottom: '20px',
              border: '2px solid rgba(19, 197, 221, 0.2)'
            }}>
              <h2 className="display-6 mb-0" style={{ color: '#13c5dd' }}>Featured Specialists</h2>
            </div>
            <p className="text-muted mt-3">Top-rated doctors available for consultation</p>
          </div>
          
          <div className="row g-4">
            {doctors.map((doctor, index) => {
              const typeStyle = getTypeStyles(doctor.type);
              return (
                <div 
                  key={doctor.id} 
                  className="col-lg-4 col-md-6"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${index * 0.2}s both`
                  }}
                >
                  <div className="h-100" style={{
                    ...typeStyle,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    border: doctor.type === 'light' ? '1px solid rgba(19, 197, 221, 0.2)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(19, 197, 221, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                  }}>
                    {/* Doctor Image */}
                    <div style={{
                      height: '220px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <img 
                        className="w-100 h-100"
                        src={doctor.image} 
                        alt={doctor.name}
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: doctor.type === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'white',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                        backdropFilter: doctor.type === 'dark' ? 'blur(10px)' : 'none'
                      }}>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-star me-1" style={{
                            color: doctor.type === 'dark' ? '#ffd700' : '#ffc107'
                          }}></i>
                          <span className="fw-bold" style={{
                            color: doctor.type === 'dark' ? 'white' : '#333'
                          }}>{doctor.rating}</span>
                        </div>
                      </div>
                      
                      {/* Type Badge */}
                      <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: typeStyle.accent,
                        color: doctor.type === 'dark' ? '#333' : 'white',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        {doctor.type}
                      </div>
                    </div>
                    
                    {/* Doctor Info */}
                    <div className="p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h5 className="mb-1" style={{ color: typeStyle.color }}>{doctor.name}</h5>
                          <p className="mb-2" style={{
                            color: doctor.type === 'dark' ? 'rgba(255, 255, 255, 0.8)' : '#666'
                          }}>{doctor.specialization}</p>
                        </div>
                        <div style={{
                          color: typeStyle.accent,
                          fontWeight: 'bold'
                        }}>
                          {doctor.experience}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="d-flex align-items-center mb-2">
                          <i className="fas fa-calendar-check me-2" style={{ color: typeStyle.accent }}></i>
                          <span style={{
                            color: doctor.type === 'dark' ? 'rgba(255, 255, 255, 0.8)' : '#666'
                          }}>Next Available:</span>
                          <span className="ms-2 fw-semibold" style={{ color: typeStyle.color }}>
                            {doctor.nextAvailable}
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-video me-2" style={{ color: typeStyle.accent }}></i>
                          <span style={{
                            color: doctor.type === 'dark' ? 'rgba(255, 255, 255, 0.8)' : '#666'
                          }}>Video consultation available</span>
                        </div>
                      </div>
                      
                      <div className="d-flex gap-2">
                        <button className="btn flex-fill" style={{
                          background: doctor.type === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(19, 197, 221, 0.1)',
                          color: doctor.type === 'dark' ? 'white' : '#13c5dd',
                          border: `2px solid ${doctor.type === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(19, 197, 221, 0.3)'}`,
                          borderRadius: '12px',
                          padding: '12px',
                          fontWeight: '600',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = doctor.type === 'dark' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(19, 197, 221, 0.2)';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = doctor.type === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(19, 197, 221, 0.1)';
                          e.target.style.transform = 'translateY(0)';
                        }}>
                          <i className="fas fa-comment-medical me-2"></i>
                          Message
                        </button>
                        <button className="btn flex-fill" style={{
                          background: `linear-gradient(135deg, ${doctor.type === 'dark' ? '#ffffff' : '#13c5dd'} 0%, ${doctor.type === 'dark' ? '#f0f0f0' : '#0a9eb5'} 100%)`,
                          color: doctor.type === 'dark' ? '#333' : 'white',
                          border: 'none',
                          borderRadius: '12px',
                          padding: '12px',
                          fontWeight: '600',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = `0 10px 20px rgba(19, 197, 221, ${doctor.type === 'dark' ? '0.2' : '0.4'})`;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}>
                          <i className="fas fa-calendar-alt me-2"></i>
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Additional Features */}
          <div className="row mt-5 pt-5">
            <div className="col-lg-4 mb-4">
              <div className="text-center p-4 h-100" style={{
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(19, 197, 221, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(19, 197, 221, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.05)';
              }}>
                <div className="mb-3" style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #13c5dd, #0a9eb5)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  animation: 'pulse 2s infinite'
                }}>
                  <i className="fas fa-clock text-white" style={{ fontSize: '2rem' }}></i>
                </div>
                <h5 className="mb-3" style={{ color: '#13c5dd' }}>24/7 Availability</h5>
                <p className="text-muted">Book appointments anytime, day or night</p>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="text-center p-4 h-100" style={{
                background: 'linear-gradient(135deg, rgba(19, 197, 221, 0.05) 0%, rgba(10, 158, 181, 0.05) 100%)',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(19, 197, 221, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(19, 197, 221, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.05)';
              }}>
                <div className="mb-3" style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #13c5dd, #0a9eb5)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  animation: 'pulse 2s infinite 0.5s'
                }}>
                  <i className="fas fa-shield-alt text-white" style={{ fontSize: '2rem' }}></i>
                </div>
                <h5 className="mb-3" style={{ color: '#13c5dd' }}>Verified Doctors</h5>
                <p className="text-muted">All doctors are verified and certified</p>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="text-center p-4 h-100" style={{
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(19, 197, 221, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(19, 197, 221, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.05)';
              }}>
                <div className="mb-3" style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #13c5dd, #0a9eb5)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  animation: 'pulse 2s infinite 1s'
                }}>
                  <i className="fas fa-video text-white" style={{ fontSize: '2rem' }}></i>
                </div>
                <h5 className="mb-3" style={{ color: '#13c5dd' }}>Video Consultations</h5>
                <p className="text-muted">Consult from the comfort of your home</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ModernDoctorSearch;