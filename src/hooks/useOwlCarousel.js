import { useEffect, useRef } from 'react';

const useOwlCarousel = (options = {}) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel && carouselRef.current) {
      $(carouselRef.current).owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
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
    }

    return () => {
      if (window.$ && carouselRef.current) {
        $(carouselRef.current).trigger('destroy.owl.carousel');
      }
    };
  }, [options]);

  return carouselRef;
};

export default useOwlCarousel;