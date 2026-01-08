import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if ($(window).scrollTop() > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    $(window).scroll(handleScroll);
    handleScroll(); // Initial check

    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
  };

  return (
    <>
      {isVisible && (
        <button 
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default BackToTop;