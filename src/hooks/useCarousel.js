/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import { initializeCarousels, initializeBackToTop } from '../assets/js/main';

const useCarousel = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      // Initialize carousels
      initializeCarousels();
      initializeBackToTop();
      isInitialized.current = true;
    }

    return () => {
      // Cleanup if needed
      if (window.$ && window.$.fn.owlCarousel) {
        $('.owl-carousel').trigger('destroy.owl.carousel');
      }
    };
  }, []);
};

export default useCarousel;