import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Calculate topbar height
    const calculateTopbarHeight = () => {
      const topbarElement = document.querySelector('.topbar');
      if (topbarElement) {
        setTopbarHeight(topbarElement.offsetHeight);
      }
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    calculateTopbarHeight();
    window.addEventListener('resize', calculateTopbarHeight);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateTopbarHeight);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/services", text: "Services" },
    { to: "/pricing", text: "Pricing" },
    { to: "/contact", text: "Contact" },
  ];

  const dropdownPages = [
    { to: "/blog", text: "Health Articles" },
    { to: "/blog-detail", text: "Article Details" },
    { to: "/team", text: "Medical Team" },
    { to: "/testimonials", text: "Patient Reviews" },
    { to: "/appointment", text: "Book Appointment" },
    { to: "/search", text: "Find Doctors" },
  ];

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`} 
      style={{ 
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(5px)',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        transition: 'all 0.3s ease',
        top: scrolled ? '0' : `${topbarHeight}px`,
        boxShadow: scrolled ? '0 4px 30px rgba(19, 197, 221, 0.1)' : 'none'
      }}
    >
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={closeNavbar}>
          <div className="d-flex align-items-center">
            <div className="brand-icon">
              <i className="fas fa-heartbeat"></i>
            </div>
            <div className="ms-2">
              <h3 className="mb-0 fw-bold" style={{ color: '#13c5dd' }}>HealthSolutions</h3>
              <small className="text-muted">Medical Center</small>
            </div>
          </div>
        </Link>
        
        <button 
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <NavLink 
                  to={link.to}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={closeNavbar}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
            
            {/* Single Pages Dropdown */}
            <li 
              ref={dropdownRef}
              className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}
              onMouseEnter={() => window.innerWidth > 991 && setDropdownOpen(true)}
              onMouseLeave={() => window.innerWidth > 991 && setDropdownOpen(false)}
            >
              <a 
                className="nav-link dropdown-toggle"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth <= 991) {
                    toggleDropdown();
                  }
                }}
                aria-expanded={dropdownOpen}
              >
                Resources
                {/* <span className="dropdown-caret"></span> */}
              </a>
              
              <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                {dropdownPages.map((page, index) => (
                  <Link 
                    key={index}
                    to={page.to}
                    className="dropdown-item"
                    onClick={closeNavbar}
                  >
                    <span className="dropdown-text">{page.text}</span>
                    <i className="dropdown-arrow fas fa-arrow-right"></i>
                  </Link>
                ))}
              </div>
            </li>
          </ul>
          
          <div className="d-flex">
            <Link to="/appointment" className="btn-appointment" onClick={closeNavbar}>
              <i className="fas fa-calendar-check me-2"></i>
              Schedule Visit
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar-scrolled {
          top: 0 !important;
          box-shadow: 0 4px 20px rgba(19, 197, 221, 0.15);
        }
        
        .brand-icon {
          background: linear-gradient(135deg, #13c5dd, #0d8ba5);
          width: 45px;
          height: 45px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          box-shadow: 0 4px 15px rgba(19, 197, 221, 0.3);
          transition: all 0.3s ease;
        }
        
        .brand-icon:hover {
          transform: rotate(360deg);
          box-shadow: 0 6px 20px rgba(19, 197, 221, 0.4);
        }
        
        .nav-link {
          color: #333 !important;
          font-weight: 500;
          margin: 0 10px;
          padding: 10px 15px !important;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #13c5dd, #0d8ba5);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 3px;
        }
        
        .nav-link:hover::before,
        .nav-link.active::before {
          width: 80%;
        }
        
        .nav-link:hover,
        .nav-link.active {
          color: #13c5dd !important;
          background: rgba(19, 197, 221, 0.05);
        }
        
        .dropdown-caret {
          display: inline-block;
          width: 0;
          height: 0;
          margin-left: 8px;
          vertical-align: middle;
          border-top: 4px solid;
          border-right: 4px solid transparent;
          border-left: 4px solid transparent;
          transition: transform 0.3s ease;
        }
        
        .dropdown.show .dropdown-caret {
          transform: rotate(180deg);
        }
        
        .dropdown-menu {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(19, 197, 221, 0.1);
          box-shadow: 0 15px 40px rgba(19, 197, 221, 0.15);
          border-radius: 12px;
          padding: 10px 0;
          min-width: 220px;
          max-height: 350px;
          overflow-y: auto;
          animation: dropdownFade 0.3s ease;
          border-top: 3px solid #13c5dd;
          margin-top: 10px;
        }
        
        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dropdown-item {
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
          color: #333;
          position: relative;
          overflow: hidden;
        }
        
        .dropdown-item:hover {
          background: rgba(19, 197, 221, 0.08);
          color: #13c5dd;
          padding-left: 25px;
        }
        
        .dropdown-text {
          font-weight: 500;
        }
        
        .dropdown-arrow {
          color: rgba(0, 0, 0, 0.3);
          font-size: 0.8rem;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }
        
        .dropdown-item:hover .dropdown-arrow {
          opacity: 1;
          transform: translateX(0);
          color: #13c5dd;
        }
        
        .btn-appointment {
          background: linear-gradient(135deg, #13c5dd, #0d8ba5);
          color: white;
          padding: 10px 20px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(19, 197, 221, 0.3);
          border: none;
        }
        
        .btn-appointment:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(19, 197, 221, 0.4);
          color: white;
        }
        
        @media (max-width: 991px) {
          .navbar-collapse {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            margin-top: 15px;
            padding: 20px;
            box-shadow: 0 10px 40px rgba(19, 197, 221, 0.15);
          }
          
          .nav-link {
            margin: 5px 0;
            padding: 15px !important;
          }
          
          .dropdown-menu {
            position: static;
            box-shadow: none;
            border: 1px solid rgba(19, 197, 221, 0.1);
            background: rgba(19, 197, 221, 0.05);
            margin: 10px 0;
            max-height: none;
          }
          
          .btn-appointment {
            margin-top: 15px;
            text-align: center;
            display: block;
          }
          
          nav {
            top: 0 !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar1;