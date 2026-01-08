import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'owl.carousel';

const OwlCarousel = ({ 
  children, 
  className = '', 
  options = {},
  onInitialize 
}) => {
  const carouselRef = useRef(null);
  const owlCarouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      owlCarouselRef.current = $(carouselRef.current).owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          }
        },
        ...options
      });

      if (onInitialize) {
        onInitialize(owlCarouselRef.current);
      }
    }

    return () => {
      if (owlCarouselRef.current) {
        owlCarouselRef.current.trigger('destroy.owl.carousel');
      }
    };
  }, [options, onInitialize]);

  return (
    <div ref={carouselRef} className={`owl-carousel ${className}`}>
      {children}
    </div>
  );
};

export default OwlCarousel;