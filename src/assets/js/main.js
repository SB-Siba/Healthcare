// main.js - Updated with proper jQuery import
import $ from 'jquery';

export function initializeBackToTop() {
  // Back to top button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

export function initializeNavbarDropdown() {
  // Navbar dropdown on hover for desktop
  const dropdowns = document.querySelectorAll('.navbar .dropdown');
  
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
      if (window.innerWidth > 991) {
        dropdown.classList.add('show');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        if (toggle) toggle.setAttribute('aria-expanded', 'true');
        if (menu) menu.classList.add('show');
      }
    });

    dropdown.addEventListener('mouseleave', () => {
      if (window.innerWidth > 991) {
        dropdown.classList.remove('show');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        if (menu) menu.classList.remove('show');
      }
    });
  });
}

// Remove Owl Carousel initialization or check if it exists
export function initializeCarousels() {
  // Only initialize if Owl Carousel is loaded
  if (typeof window.$ !== 'undefined' && typeof window.$.fn !== 'undefined' && typeof window.$.fn.owlCarousel !== 'undefined') {
    try {
      // Testimonials carousel
      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
      });
      
      // Team carousel
      $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 4 }
        }
      });
    } catch (error) {
      console.warn('Owl Carousel error:', error);
    }
  } else {
    console.warn('Owl Carousel plugin not available');
  }
}

// Initialize everything
export function initializeAll() {
  initializeBackToTop();
  initializeNavbarDropdown();
  // Comment out carousel initialization if not using Owl Carousel
  // initializeCarousels();
}