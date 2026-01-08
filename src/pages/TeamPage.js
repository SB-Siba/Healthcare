import React from 'react';
import useCarousel from '../hooks/useCarousel';

const TeamPage = () => {
  useCarousel();

  const doctors = [
    {
      id: 1,
      image: '/img/team-1.jpg',
      name: 'Dr. David Patel',
      specialization: 'Cardiology Specialist',
      description: 'A skilled cardiologist known for her expertise in diagnosing and treating heart conditions, with 20 years of experience.',
      social: {
        twitter: '#',
        facebook: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      image: '/img/team-2.jpg',
      name: 'Dr. Tyler Anderson',
      specialization: 'Neurosurgeon Specialist',
      description: 'A highly skilled neurosurgeon renowned for his surgical precision and vast knowledge of the nervous system, with 8 years of experience.',
      social: {
        twitter: '#',
        facebook: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      image: '/img/team-3.jpg',
      name: 'Dr. Emily Johnson',
      specialization: 'Pediatrician Specialist',
      description: 'A dedicated pediatrician known for her gentle and empathetic approach in providing comprehensive care to children.',
      social: {
        twitter: '#',
        facebook: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <div className="container-fluid py-5" id="doctor" style={{ 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)',
      minHeight: '100vh'
    }}>
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <h5 className="text-uppercase fw-bold mb-3" style={{ 
            color: '#13c5dd',
            textShadow: '0 2px 4px rgba(19, 197, 221, 0.1)'
          }}>
            <i className="fas fa-heartbeat me-2"></i>
            Our Medical Experts
          </h5>
          <h1 className="display-5 fw-bold mb-4" style={{ 
            background: 'linear-gradient(135deg, #13c5dd, #0ea5c0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Dedicated Healthcare Team
          </h1>
          <p className="lead text-muted mb-0">Expertise, compassion, and commitment in every patient interaction</p>
        </div>
        
        <style>
          {`
            .team-glass-card {
              background: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(10px);
              border-radius: 20px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              padding: 30px;
              margin-bottom: 30px;
              box-shadow: 0 8px 32px rgba(19, 197, 221, 0.1);
              transition: all 0.4s ease;
              position: relative;
              overflow: hidden;
              z-index: 1;
            }
            
            .team-glass-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 3px;
              background: linear-gradient(90deg, #13c5dd, #0ea5c0);
              transform: scaleX(0);
              transform-origin: left;
              transition: transform 0.5s ease;
              z-index: 2;
            }
            
            .team-glass-card:hover::before {
              transform: scaleX(1);
            }
            
            .team-glass-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 20px 40px rgba(19, 197, 221, 0.2);
              background: rgba(255, 255, 255, 0.25);
            }
            
            .team-glass-img-container {
              width: 160px;
              height: 160px;
              margin: 0 auto 25px;
              position: relative;
              border-radius: 50%;
              padding: 5px;
              background: linear-gradient(135deg, transparent, #13c5dd, transparent);
            }
            
            .team-glass-img-border {
              width: 170px;
              height: 170px;
              position: absolute;
              top: -5px;
              left: -5px;
              border-radius: 50%;
              background: linear-gradient(135deg, #13c5dd, #0ea5c0, #13c5dd);
              opacity: 0;
              transition: opacity 0.4s ease;
            }
            
            .team-glass-card:hover .team-glass-img-border {
              opacity: 1;
            }
            
            .team-glass-img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              object-fit: cover;
              border: 4px solid white;
              position: relative;
              z-index: 1;
              transition: all 0.4s ease;
            }
            
            .team-glass-card:hover .team-glass-img {
              transform: scale(1.05);
            }
            
            .team-glass-info {
              text-align: center;
              margin-bottom: 20px;
            }
            
            .team-glass-name {
              font-size: 1.5rem;
              font-weight: bold;
              margin-bottom: 8px;
              color: #333;
              transition: color 0.3s ease;
            }
            
            .team-glass-card:hover .team-glass-name {
              color: #13c5dd;
            }
            
            .team-glass-specialty {
              color: #13c5dd;
              font-weight: 600;
              margin-bottom: 15px;
              position: relative;
              display: inline-block;
              padding-bottom: 10px;
            }
            
            .team-glass-specialty::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 2px;
              background: linear-gradient(90deg, transparent, #13c5dd, transparent);
              transform: scaleX(0);
              transition: transform 0.4s ease;
            }
            
            .team-glass-card:hover .team-glass-specialty::after {
              transform: scaleX(1);
            }
            
            .team-glass-desc {
              color: #666;
              margin-bottom: 25px;
              line-height: 1.6;
              transition: color 0.3s ease;
            }
            
            .team-glass-card:hover .team-glass-desc {
              color: #555;
            }
            
            .team-glass-social {
              display: flex;
              justify-content: center;
              gap: 15px;
              margin-top: 20px;
            }
            
            .team-glass-social-btn {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: rgba(19, 197, 221, 0.1);
              color: #13c5dd;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.3s ease;
              border: 1px solid rgba(19, 197, 221, 0.2);
              text-decoration: none;
            }
            
            .team-glass-social-btn:hover {
              background: #13c5dd;
              color: white;
              transform: translateY(-3px);
              box-shadow: 0 5px 15px rgba(19, 197, 221, 0.3);
            }
            
            .team-glass-experience {
              position: absolute;
              top: 20px;
              right: 20px;
              background: rgba(19, 197, 221, 0.9);
              color: white;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              transform: scale(0);
              transition: transform 0.4s ease 0.2s;
              box-shadow: 0 4px 15px rgba(19, 197, 221, 0.3);
            }
            
            .team-glass-card:hover .team-glass-experience {
              transform: scale(1);
            }
            
            @media (max-width: 768px) {
              .team-glass-card {
                padding: 20px;
              }
              
              .team-glass-img-container {
                width: 140px;
                height: 140px;
              }
              
              .team-glass-img-border {
                width: 150px;
                height: 150px;
              }
              
              .team-glass-experience {
                width: 50px;
                height: 50px;
                font-size: 0.9rem;
              }
            }
            
            @media (max-width: 576px) {
              .team-glass-img-container {
                width: 120px;
                height: 120px;
              }
              
              .team-glass-img-border {
                width: 130px;
                height: 130px;
              }
            }
          `}
        </style>

        <div className="row g-4 justify-content-center">
          {doctors.map((doctor, index) => (
            <div key={doctor.id} className="col-lg-4 col-md-6">
              <div className="team-glass-card">
                <div className="team-glass-img-container">
                  <div className="team-glass-img-border"></div>
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="team-glass-img"
                  />
                </div>
                
                <div className="team-glass-experience">
                  <span style={{ fontSize: '0.8rem' }}>EXP</span>
                  <span>{index === 0 ? '20y' : index === 1 ? '8y' : '15y'}</span>
                </div>
                
                <div className="team-glass-info">
                  <h3 className="team-glass-name">{doctor.name}</h3>
                  <h5 className="team-glass-specialty">{doctor.specialization}</h5>
                  <p className="team-glass-desc">{doctor.description}</p>
                </div>
                
                <div className="team-glass-social">
                  <a href={doctor.social.twitter} className="team-glass-social-btn">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={doctor.social.facebook} className="team-glass-social-btn">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={doctor.social.linkedin} className="team-glass-social-btn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;