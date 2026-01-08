import React, { useState, useEffect, useRef } from 'react';

const SearchDoctorFloating = () => {
  const [searchData, setSearchData] = useState({
    department: '',
    keyword: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [headingAnimation, setHeadingAnimation] = useState(false);
  const dropdownRef = useRef(null);

  const departments = [
    { value: '', label: 'Select Department' },
    { value: 'cardiology', label: 'Cardiology & Heart Care' },
    { value: 'neurology', label: 'Neurology & Neurosurgery' },
    { value: 'pediatrics', label: 'Pediatrics & Child Health' },
    { value: 'orthopedics', label: 'Orthopedics & Joint Care' },
    { value: 'dermatology', label: 'Dermatology & Skin Care' },
    { value: 'ophthalmology', label: 'Ophthalmology & Eye Care' },
    { value: 'gastroenterology', label: 'Gastroenterology' },
    { value: 'oncology', label: 'Oncology & Cancer Care' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Heading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeadingAnimation(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectDepartment = (value, label) => {
    setSearchData(prev => ({
      ...prev,
      department: value
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Data:', searchData);
  };

  const getSelectedDepartmentLabel = () => {
    const selected = departments.find(dept => dept.value === searchData.department);
    return selected ? selected.label : 'Select Department';
  };

  return (
    <div className="container-fluid" style={{ 
      backgroundColor: '#13c5dd',
      padding: '100px 0',
      overflow: 'visible',
      position: 'relative'
    }}>
      {/* Floating Elements */}
      <div className="floating-element el1"></div>
      <div className="floating-element el2"></div>
      <div className="floating-element el3"></div>
      <div className="floating-element el4"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="text-center mx-auto mb-4" style={{ maxWidth: '500px' }}>
          {/* Animated Heading */}
          <div className={`heading-badge ${headingAnimation ? 'animated' : ''}`}>
            <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">
              Connect with Specialists
            </h5>
          </div>
          
          {/* Main Title with Split Animation */}
          <div className={`title-wrapper ${headingAnimation ? 'animated' : ''}`}>
            <h2 className="mb-3 text-white" style={{ fontSize: '2rem' }}>
              <span className="title-part-1">Find Your</span>
              <span className="title-part-2"> Healthcare Expert</span>
            </h2>
          </div>
          
          {/* Description with Fade Up Animation */}
          <div className={`description-wrapper ${headingAnimation ? 'animated' : ''}`}>
            <p className="text-white fw-normal mb-0" style={{ fontSize: '1rem' }}>
              Access our network of board-certified physicians and healthcare specialists 
              committed to delivering personalized medical care with expertise and compassion.
            </p>
          </div>
        </div>
        
        <div className="floating-search-container">
          <div className="search-icon-animated">
            <i className="fas fa-search"></i>
          </div>
          
          <form onSubmit={handleSubmit} className="floating-search-form">
            <div className="search-grid">
              {/* Custom Dropdown */}
              <div className="search-field floating-field" ref={dropdownRef}>
                <div className="field-icon">
                  <i className="fas fa-hospital"></i>
                </div>
                <div 
                  className="custom-dropdown-trigger"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="dropdown-selected">
                    {getSelectedDepartmentLabel()}
                  </span>
                  <div className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
                
                <div className={`custom-dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                  {departments.map((dept, index) => (
                    <div
                      key={index}
                      className={`dropdown-item ${searchData.department === dept.value ? 'selected' : ''}`}
                      onClick={() => handleSelectDepartment(dept.value, dept.label)}
                    >
                      <span className="department-icon">
                        <i className="fas fa-stethoscope"></i>
                      </span>
                      <span className="department-label">{dept.label}</span>
                      {searchData.department === dept.value && (
                        <span className="selected-check">
                          <i className="fas fa-check"></i>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="field-underline"></div>
              </div>
              
              <div className="search-field floating-field">
                <div className="field-icon">
                  <i className="fas fa-stethoscope"></i>
                </div>
                <input 
                  type="text" 
                  className="floating-input"
                  placeholder="Search doctor or specialty..."
                  name="keyword"
                  value={searchData.keyword}
                  onChange={handleChange}
                />
                <div className="field-underline"></div>
              </div>
              
              <button className="floating-search-btn" type="submit">
                <i className="fas fa-search btn-search-icon"></i>
                <span className="btn-text">Find Doctor</span>
                <div className="btn-waves"></div>
              </button>
            </div>
            
            <div className="search-hints">
              <div className="hint-item">
                <i className="fas fa-lightbulb"></i>
                <span>Try: Cardiologist, Pediatrician, Surgeon, Dentist</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .heading-badge {
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.8s ease;
        }

        .heading-badge.animated {
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
          font-weight: 700;
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

        .floating-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 20s infinite linear;
        }
        
        .el1 {
          width: 80px;
          height: 80px;
          top: 15%;
          left: 5%;
          animation-delay: 0s;
        }
        
        .el2 {
          width: 120px;
          height: 120px;
          bottom: 15%;
          right: 10%;
          animation-delay: 5s;
        }
        
        .el3 {
          width: 60px;
          height: 60px;
          top: 60%;
          left: 15%;
          animation-delay: 10s;
        }
        
        .el4 {
          width: 100px;
          height: 100px;
          top: 30%;
          right: 20%;
          animation-delay: 15s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(90deg);
          }
          50% {
            transform: translateY(0) rotate(180deg);
          }
          75% {
            transform: translateY(15px) rotate(270deg);
          }
        }

        .floating-search-container {
          max-width: 750px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.98);
          border-radius: 15px;
          padding: 40px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(19, 197, 221, 0.1);
          position: relative;
          animation: containerFloat 4s ease-in-out infinite;
        }

        @keyframes containerFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .search-icon-animated {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: #13c5dd;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
          box-shadow: 0 8px 15px rgba(19, 197, 221, 0.3);
          animation: iconBounce 2s infinite;
        }

        @keyframes iconBounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-8px);
          }
        }

        .search-grid {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 12px;
          margin-bottom: 20px;
        }

        .search-field {
          position: relative;
        }

        .field-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #13c5dd;
          font-size: 16px;
          z-index: 2;
        }

        /* Custom Dropdown Styles */
        .custom-dropdown-trigger {
          width: 100%;
          height: 48px;
          padding: 0 45px 0 45px;
          border: 2px solid #e0f7fa;
          border-radius: 8px;
          background: white;
          color: #333;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .custom-dropdown-trigger:hover {
          border-color: #13c5dd;
        }

        .dropdown-selected {
          flex: 1;
          color: #333;
          font-weight: 500;
        }

        .dropdown-arrow {
          color: #13c5dd;
          transition: transform 0.3s ease;
          font-size: 12px;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .custom-dropdown-menu {
          position: absolute;
          top: calc(100% + 5px);
          left: 0;
          width: 100%;
          background: white;
          border-radius: 8px;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.15),
            0 0 0 1px #e0f7fa;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          z-index: 100;
          max-height: 250px;
          overflow-y: auto;
          padding: 8px 0;
        }

        .custom-dropdown-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .dropdown-item:hover {
          background: #f0f9ff;
        }

        .dropdown-item.selected {
          background: #e6f7ff;
          color: #13c5dd;
          font-weight: 500;
        }

        .department-icon {
          color: #13c5dd;
          font-size: 14px;
          width: 20px;
          display: flex;
          justify-content: center;
        }

        .department-label {
          flex: 1;
          font-size: 14px;
        }

        .selected-check {
          color: #13c5dd;
          font-size: 12px;
          animation: checkAppear 0.3s ease;
        }

        @keyframes checkAppear {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Scrollbar Styling */
        .custom-dropdown-menu::-webkit-scrollbar {
          width: 6px;
        }

        .custom-dropdown-menu::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .custom-dropdown-menu::-webkit-scrollbar-thumb {
          background: #13c5dd;
          border-radius: 3px;
        }

        .custom-dropdown-menu::-webkit-scrollbar-thumb:hover {
          background: #0ba8c7;
        }

        .floating-input {
          width: 100%;
          height: 48px;
          padding: 0 15px 0 45px;
          border: 2px solid #e0f7fa;
          border-radius: 8px;
          background: white;
          color: #333;
          font-size: 14px;
          transition: all 0.3s ease;
          outline: none;
          position: relative;
          z-index: 1;
        }

        .floating-input:focus {
          border-color: #13c5dd;
          box-shadow: 0 0 0 3px rgba(19, 197, 221, 0.1);
        }

        .floating-input::placeholder {
          color: #999;
          font-size: 13px;
        }

        .field-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: #13c5dd;
          transform: translateX(-50%);
          transition: width 0.3s ease;
          z-index: 3;
        }

        .custom-dropdown-trigger:focus ~ .field-underline,
        .floating-input:focus ~ .field-underline {
          width: 100%;
        }

        .floating-search-btn {
          height: 48px;
          padding: 0 20px;
          background: linear-gradient(135deg, #13c5dd, #0ba8c7);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-width: 130px;
        }

        .floating-search-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(19, 197, 221, 0.25);
        }

        .floating-search-btn:active {
          transform: translateY(0);
        }

        .btn-search-icon {
          font-size: 14px;
        }

        .btn-waves {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: wave 1s linear infinite;
        }

        @keyframes wave {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }

        .search-hints {
          background: #e6f7ff;
          padding: 12px 20px;
          border-radius: 8px;
          text-align: center;
          border: 1px solid #b3e8ff;
        }

        .hint-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #13c5dd;
          font-size: 13px;
          animation: hintPulse 3s infinite;
        }

        .hint-item i {
          font-size: 14px;
        }

        @keyframes hintPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .search-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .floating-search-container {
            padding: 25px;
            max-width: 600px;
          }
        }

        @media (max-width: 768px) {
          .floating-search-container {
            padding: 20px;
          }
          
          .floating-element {
            display: none;
          }
          
          .title-part-1, .title-part-2 {
            font-size: 1.75rem !important;
          }
          
          .description-wrapper p {
            font-size: 0.95rem !important;
          }
          
          .search-grid {
            gap: 12px;
          }
        }

        @media (max-width: 576px) {
          .floating-search-container {
            padding: 15px;
          }
          
          .custom-dropdown-trigger,
          .floating-input,
          .floating-search-btn {
            height: 45px;
          }
          
          .floating-search-btn {
            width: 100%;
            min-width: 100%;
          }
          
          .search-grid {
            gap: 10px;
          }
          
          .title-part-1, .title-part-2 {
            font-size: 1.5rem !important;
          }
          
          .heading-badge h5 {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .container-fluid {
            padding: 30px 0 !important;
          }
          
          .custom-dropdown-menu {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.9);
            width: 90%;
            max-width: 300px;
            max-height: 70vh;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          }
          
          .custom-dropdown-menu.open {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default SearchDoctorFloating;