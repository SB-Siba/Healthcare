import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: '/img/blog-1.jpg',
      category: 'Cardiology',
      title: 'Understanding Heart Health: Latest Research & Prevention Tips',
      description: 'Discover the latest advancements in cardiology and learn how to maintain optimal heart health through preventive measures and lifestyle changes.',
      author: 'Dr. David Patel',
      date: 'Dec 15, 2023',
      readTime: '5 min read',
      views: 12345,
      comments: 123,
      type: 'dark'
    },
    {
      id: 2,
      image: '/img/blog-2.jpg',
      category: 'Neurosurgery',
      title: 'Advancements in Brain Surgery Techniques',
      description: 'Exploring the latest minimally invasive techniques that are revolutionizing neurosurgery and improving patient outcomes.',
      author: 'Dr. Tyler Anderson',
      date: 'Dec 12, 2023',
      readTime: '8 min read',
      views: 8567,
      comments: 89,
      type: 'light'
    },
    {
      id: 3,
      image: '/img/blog-3.jpg',
      category: 'Pediatrics',
      title: 'Child Health & Wellness: A Parent\'s Guide',
      description: 'Essential information for parents about common childhood illnesses, vaccination schedules, and promoting healthy development.',
      author: 'Dr. Emily Johnson',
      date: 'Dec 10, 2023',
      readTime: '6 min read',
      views: 9342,
      comments: 145,
      type: 'dark'
    },
    {
      id: 4,
      image: '/img/blog-4.jpg',
      category: 'Nutrition',
      title: 'Nutrition Tips for Better Health',
      description: 'Learn how proper nutrition can boost your immune system and improve overall wellness.',
      author: 'Sarah Miller',
      date: 'Dec 8, 2023',
      readTime: '4 min read',
      views: 7568,
      comments: 67,
      type: 'light'
    },
    {
      id: 5,
      image: '/img/blog-5.jpg',
      category: 'Mental Health',
      title: 'Managing Stress in Modern Life',
      description: 'Practical strategies for reducing stress and maintaining mental wellness in today\'s fast-paced world.',
      author: 'Dr. Michael Chen',
      date: 'Dec 5, 2023',
      readTime: '7 min read',
      views: 11234,
      comments: 234,
      type: 'dark'
    },
    {
      id: 6,
      image: '/img/blog-6.jpg',
      category: 'Fitness',
      title: 'Exercise for Longevity and Health',
      description: 'Discover the best exercises for different age groups to maintain mobility and prevent chronic diseases.',
      author: 'James Wilson',
      date: 'Dec 3, 2023',
      readTime: '5 min read',
      views: 6789,
      comments: 98,
      type: 'light'
    },
    {
      id: 7,
      image: '/img/blog-7.jpg',
      category: 'Prevention',
      title: 'Preventive Healthcare: Early Detection Saves Lives',
      description: 'Importance of regular check-ups and screening tests for early disease detection and prevention.',
      author: 'Dr. Lisa Wang',
      date: 'Nov 30, 2023',
      readTime: '6 min read',
      views: 8923,
      comments: 112,
      type: 'dark'
    },
    {
      id: 8,
      image: '/img/blog-8.jpg',
      category: 'Technology',
      title: 'How AI is Transforming Healthcare',
      description: 'Exploring the impact of artificial intelligence on diagnostics, treatment planning, and patient care.',
      author: 'Alex Turner',
      date: 'Nov 28, 2023',
      readTime: '9 min read',
      views: 14567,
      comments: 287,
      type: 'light'
    },
    {
      id: 9,
      image: '/img/blog-9.jpg',
      category: 'Wellness',
      title: 'Holistic Approaches to Health',
      description: 'Combining traditional medicine with alternative therapies for comprehensive wellness.',
      author: 'Dr. Maria Rodriguez',
      date: 'Nov 25, 2023',
      readTime: '7 min read',
      views: 7654,
      comments: 76,
      type: 'dark'
    }
  ];

  const getButtonStyles = (type) => {
    return {
      dark: {
        background: 'linear-gradient(135deg, #13c5dd, #0a9eb5)',
        color: 'white',
        hoverBackground: '#ffffff',
        hoverColor: '#13c5dd',
        border: '2px solid #13c5dd'
      },
      light: {
        background: 'rgba(255, 255, 255, 0.1)',
        color: '#13c5dd',
        hoverBackground: 'linear-gradient(135deg, #13c5dd, #0a9eb5)',
        hoverColor: 'white',
        border: '2px solid rgba(255, 255, 255, 0.3)'
      }
    }[type] || {
      background: 'linear-gradient(135deg, #13c5dd, #0a9eb5)',
      color: 'white',
      hoverBackground: '#ffffff',
      hoverColor: '#13c5dd',
      border: '2px solid #13c5dd'
    };
  };

  const loadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      position: 'relative'
    }}>
      {/* Decorative Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '400px',
        background: 'linear-gradient(135deg, #13c5dd 0%, #0a9eb5 100%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',
        zIndex: 0
      }} />

      <div className="container-fluid py-5 position-relative z-1">
        <div className="container">
          {/* Header */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
            <div style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease'
            }}>
              <div className="mb-4">
                <div style={{
                  display: 'inline-block',
                  padding: '12px 35px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '50px',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}>
                  <h5 className="mb-0 text-white">Health Insights</h5>
                </div>
              </div>
              <h1 className="display-4 text-white mb-4">
                Latest <span style={{ color: '#ffd700' }}>Medical</span> Insights
              </h1>
              <p className="text-white fs-5" style={{ opacity: 0.9 }}>
                Stay updated with the latest healthcare news, research, and wellness tips
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {['All', 'Cardiology', 'Neurosurgery', 'Pediatrics', 'Nutrition', 'Mental Health', 'Fitness'].map((cat, idx) => (
                  <button
                    key={idx}
                    className="btn px-4 py-2"
                    style={{
                      background: cat === 'All' ? '#13c5dd' : 'white',
                      color: cat === 'All' ? 'white' : '#13c5dd',
                      border: `2px solid ${cat === 'All' ? '#13c5dd' : 'rgba(19, 197, 221, 0.3)'}`,
                      borderRadius: '25px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both`
                    }}
                    onMouseEnter={(e) => {
                      if (cat !== 'All') {
                        e.target.style.background = '#13c5dd';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (cat !== 'All') {
                        e.target.style.background = 'white';
                        e.target.style.color = '#13c5dd';
                        e.target.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="row g-4">
            {blogPosts.slice(0, visiblePosts).map((post, index) => {
              const buttonStyle = getButtonStyles(post.type);
              const isHovered = hoveredCard === post.id;
              
              return (
                <div 
                  key={post.id} 
                  className="col-xl-4 col-lg-6"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div 
                    className="h-100"
                    style={{
                      background: 'white',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                      border: '1px solid rgba(19, 197, 221, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredCard(post.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Image Container */}
                    <div style={{
                      height: '250px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <img 
                        className="w-100 h-100"
                        src={post.image} 
                        alt={post.title}
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease',
                          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                        }}
                      />
                      {/* Category Badge */}
                      <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: post.type === 'dark' ? '#ffffff' : 'rgba(19, 197, 221, 0.9)',
                        color: post.type === 'dark' ? '#13c5dd' : 'white',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
                      }}>
                        {post.category}
                      </div>
                      {/* Read Time */}
                      <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        right: '20px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        color: '#13c5dd',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
                      }}>
                        {post.readTime}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <i className="fas fa-calendar me-2" style={{ color: '#13c5dd' }}></i>
                          <span className="text-muted">{post.date}</span>
                        </div>
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="text-decoration-none"
                        >
                          <h4 className="mb-3" style={{ 
                            color: '#333',
                            transition: 'color 0.3s ease',
                            transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
                          }}>
                            {post.title}
                          </h4>
                        </Link>
                        <p className="text-muted mb-4" style={{ 
                          lineHeight: '1.6',
                          transition: 'all 0.3s ease',
                          opacity: isHovered ? 0.8 : 1
                        }}>
                          {post.description}
                        </p>
                      </div>

                      {/* Author & Stats */}
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'rgba(19, 197, 221, 0.1)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '12px',
                            transition: 'all 0.3s ease',
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                          }}>
                            <i className="fas fa-user" style={{ color: '#13c5dd' }}></i>
                          </div>
                          <div>
                            <div className="small fw-bold">{post.author}</div>
                            <div className="small text-muted">Author</div>
                          </div>
                        </div>
                        <div className="d-flex gap-3">
                          <div className="text-center">
                            <div className="fw-bold" style={{ 
                              color: '#13c5dd',
                              transition: 'all 0.3s ease',
                              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                            }}>{post.views.toLocaleString()}</div>
                            <div className="small text-muted">Views</div>
                          </div>
                          <div className="text-center">
                            <div className="fw-bold" style={{ 
                              color: '#13c5dd',
                              transition: 'all 0.3s ease',
                              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                            }}>{post.comments}</div>
                            <div className="small text-muted">Comments</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Read Full Article Button - Always visible but animated */}
                    <div style={{
                      padding: '20px',
                      background: 'rgba(19, 197, 221, 0.05)',
                      borderTop: '1px solid rgba(19, 197, 221, 0.1)',
                      transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
                      opacity: isHovered ? 1 : 0,
                      height: isHovered ? 'auto' : '0',
                      paddingTop: isHovered ? '20px' : '0',
                      paddingBottom: isHovered ? '20px' : '0',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="btn w-100"
                        style={{
                          background: buttonStyle.background,
                          color: buttonStyle.color,
                          borderRadius: '12px',
                          fontWeight: '600',
                          transition: 'all 0.3s ease',
                          border: buttonStyle.border,
                          padding: '12px',
                          fontSize: '1rem'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = buttonStyle.hoverBackground;
                          e.target.style.color = buttonStyle.hoverColor;
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = buttonStyle.background;
                          e.target.style.color = buttonStyle.color;
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        <i className="fas fa-book-open me-2"></i>
                        Read Full Article
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {visiblePosts < blogPosts.length && (
            <div className="col-12 text-center mt-5">
              <button 
                className="btn px-5 py-3"
                onClick={loadMore}
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
                  
                  // Add ripple effect
                  const ripple = document.createElement('span');
                  const rect = e.target.getBoundingClientRect();
                  const size = Math.max(rect.width, rect.height);
                  const x = e.clientX - rect.left - size / 2;
                  const y = e.clientY - rect.top - size / 2;
                  
                  ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    width: ${size}px;
                    height: ${size}px;
                    top: ${y}px;
                    left: ${x}px;
                  `;
                  
                  e.target.appendChild(ripple);
                  setTimeout(() => ripple.remove(), 600);
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <i className="fas fa-sync me-2"></i>
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx="true">{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        /* Custom scrollbar for the entire page */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #13c5dd, #0a9eb5);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #0a9eb5, #13c5dd);
        }
      `}</style>
    </div>
  );
};

export default BlogPage;