import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [activePost, setActivePost] = useState(null);
  const [headingAnimation, setHeadingAnimation] = useState(false);

  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Advancements in Minimally Invasive Cardiac Procedures',
      description: 'Exploring the latest innovations in heart surgery techniques that reduce recovery time and improve patient outcomes through smaller incisions and advanced technology.',
      author: 'Dr. Michael Chen',
      role: 'Cardiovascular Surgeon',
      date: 'Nov 15, 2024',
      views: 8450,
      comments: 86,
      category: 'Cardiac Surgery',
      readTime: '6 min',
      trending: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Understanding Pediatric Immunization: A Complete Guide',
      description: 'Comprehensive overview of childhood vaccination schedules, benefits, and addressing common concerns about pediatric immunization programs.',
      author: 'Dr. Sarah Johnson',
      role: 'Pediatric Specialist',
      date: 'Dec 08, 2024',
      views: 9200,
      comments: 94,
      category: 'Pediatrics',
      readTime: '8 min',
      trending: true
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'The Role of AI in Diagnostic Imaging Accuracy',
      description: 'How artificial intelligence is transforming medical imaging interpretation and improving early detection of various health conditions.',
      author: 'Dr. Robert Kim',
      role: 'Radiology Director',
      date: 'Jan 22, 2025',
      views: 11200,
      comments: 127,
      category: 'Medical Technology',
      readTime: '7 min',
      trending: false
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Nutrition Strategies for Post-Surgical Recovery',
      description: 'Evidence-based dietary recommendations to enhance healing and support the body\'s recovery process after surgical procedures.',
      author: 'Dr. Emily White',
      role: 'Clinical Nutritionist',
      date: 'Feb 10, 2025',
      views: 7800,
      comments: 72,
      category: 'Nutrition',
      readTime: '5 min',
      trending: true
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1584467735871-8db9ac8dcc6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Mental Wellness in Healthcare Professionals',
      description: 'Strategies for managing stress and maintaining mental health while working in high-pressure medical environments.',
      author: 'Dr. James Wilson',
      role: 'Mental Health Consultant',
      date: 'Mar 05, 2025',
      views: 6500,
      comments: 58,
      category: 'Mental Health',
      readTime: '9 min',
      trending: false
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Telemedicine: Transforming Access to Healthcare',
      description: 'Exploring the growth of virtual healthcare services and their impact on patient accessibility and medical consultation delivery.',
      author: 'Dr. Olivia Martinez',
      role: 'Healthcare Innovation Lead',
      date: 'Apr 18, 2025',
      views: 10500,
      comments: 143,
      category: 'Digital Health',
      readTime: '8 min',
      trending: true
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeadingAnimation(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          {/* Animated Badge */}
          <div className={`blog-badge ${headingAnimation ? 'animated' : ''} mb-3`}>
            <h5 className="d-inline-block text-uppercase border-bottom border-5" style={{ color: '#13c5dd' }}>
              <i className="fas fa-blog me-2"></i>
              Medical Insights
            </h5>
          </div>
          
          {/* Animated Title */}
          <div className={`blog-title-wrapper ${headingAnimation ? 'animated' : ''}`}>
            <h1 className="display-4 fw-bold mb-4">
              <span className="blog-title-part-1">Latest Healthcare</span>
              <span className="blog-title-part-2" style={{ color: '#13c5dd' }}> Research & Articles</span>
            </h1>
          </div>
          
          {/* Animated Description */}
          <div className={`blog-description-wrapper ${headingAnimation ? 'animated' : ''}`}>
            <p className="lead text-muted">
              Stay informed with expert analysis, medical breakthroughs, and practical health 
              advice from our team of healthcare professionals.
            </p>
          </div>
        </div>
        
        <div className="row g-5">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <div key={post.id} className="col-xl-4 col-lg-6">
              <div 
                className="blog-card-minimal"
                onMouseEnter={() => setActivePost(post.id)}
                onMouseLeave={() => setActivePost(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`minimal-card-inner ${activePost === post.id ? 'active' : ''}`}>
                  <div className="minimal-image-section">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="minimal-image"
                    />
                    {post.trending && (
                      <div className="trending-badge">
                        <i className="fas fa-fire"></i>
                        Featured
                      </div>
                    )}
                    <div className="read-time-minimal">
                      <i className="fas fa-clock me-1"></i>
                      {post.readTime}
                    </div>
                    <div className="category-badge">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="minimal-content-section">
                    <div className="category-minimal">
                      <span className="category-dot"></span>
                      {post.category}
                    </div>
                    
                    <Link to={`/blog/${post.id}`} className="minimal-title-link">
                      <h3 className="minimal-title">{post.title}</h3>
                    </Link>
                    
                    <p className="minimal-description">{post.description}</p>
                    
                    <div className="post-meta-minimal">
                      <div className="author-minimal">
                        <div className="author-avatar-minimal">
                          <div className="author-initials">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        <div className="author-info-minimal">
                          <h4 className="author-name-minimal">{post.author}</h4>
                          <p className="author-role-minimal">{post.role}</p>
                          <p className="author-date">{post.date}</p>
                        </div>
                      </div>
                      
                      <div className="post-actions">
                        <button className="action-btn-minimal save">
                          <i className="far fa-bookmark"></i>
                        </button>
                        <button className="action-btn-minimal share">
                          <i className="fas fa-share-alt"></i>
                        </button>
                      </div>
                    </div>
                    
                    <div className="post-footer-minimal">
                      <div className="stats-minimal">
                        <div className="stat-minimal">
                          <i className="far fa-eye"></i>
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="stat-minimal">
                          <i className="far fa-comment"></i>
                          <span>{post.comments}</span>
                        </div>
                        <div className="stat-minimal">
                          <i className="fas fa-heart"></i>
                          <span>{Math.floor(post.views / 100)}</span>
                        </div>
                      </div>
                      
                      <Link to={`/blog/${post.id}`} className="minimal-read-btn">
                        <span>Read Article</span>
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="minimal-hover-line"></div>
                  <div className="corner-decoration"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {visiblePosts < blogPosts.length && (
          <div className="col-12 text-center mt-5">
            <button className="minimal-load-btn" onClick={loadMore}>
              <span>Explore More Articles</span>
              <div className="load-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .blog-badge {
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.8s ease;
        }

        .blog-badge.animated {
          opacity: 1;
          transform: translateY(0);
        }

        .blog-title-wrapper {
          overflow: hidden;
          margin-bottom: 10px;
        }

        .blog-title-part-1, .blog-title-part-2 {
          display: inline-block;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .blog-title-wrapper.animated .blog-title-part-1 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.2s;
        }

        .blog-title-wrapper.animated .blog-title-part-2 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.4s;
        }

        .blog-description-wrapper {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.6s;
        }

        .blog-description-wrapper.animated {
          opacity: 1;
          transform: translateY(0);
        }

        .blog-card-minimal {
          height: 100%;
          opacity: 0;
          transform: translateY(20px);
          animation: cardReveal 0.6s ease forwards;
        }

        @keyframes cardReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .minimal-card-inner {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
          height: 100%;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #f0f0f0;
        }

        .minimal-card-inner.active {
          transform: translateY(-10px);
          box-shadow: 
            0 20px 50px rgba(19, 197, 221, 0.12),
            0 0 0 2px rgba(19, 197, 221, 0.08);
        }

        .corner-decoration {
          position: absolute;
          top: 0;
          right: 0;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, transparent 50%, rgba(19, 197, 221, 0.08) 50%);
          border-top-right-radius: 12px;
        }

        .minimal-image-section {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .minimal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .minimal-card-inner.active .minimal-image {
          transform: scale(1.08);
        }

        .trending-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: linear-gradient(135deg, #13c5dd, #0ba8c7);
          color: white;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 6px 20px rgba(19, 197, 221, 0.3);
          animation: badgeGlow 2s infinite;
        }

        @keyframes badgeGlow {
          0%, 100% {
            box-shadow: 0 6px 20px rgba(19, 197, 221, 0.3);
          }
          50% {
            box-shadow: 0 6px 20px rgba(19, 197, 221, 0.5);
          }
        }

        .read-time-minimal {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: rgba(255, 255, 255, 0.95);
          color: #333;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 600;
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }

        .category-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(255, 255, 255, 0.95);
          color: #13c5dd;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 11px;
          font-weight: 600;
          backdrop-filter: blur(5px);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }

        .minimal-content-section {
          padding: 25px;
        }

        .category-minimal {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #13c5dd;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .category-dot {
          width: 8px;
          height: 8px;
          background: #13c5dd;
          border-radius: 50%;
          animation: dotPulse 1.5s infinite;
        }

        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

        .minimal-title-link {
          text-decoration: none;
          display: block;
          margin-bottom: 15px;
        }

        .minimal-title {
          font-size: 20px;
          font-weight: 700;
          color: #333;
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .minimal-title-link:hover .minimal-title {
          color: #13c5dd;
        }

        .minimal-description {
          color: #666;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 25px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .post-meta-minimal {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f0f0f0;
        }

        .author-minimal {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          flex: 1;
        }

        .author-avatar-minimal {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          background: linear-gradient(135deg, #13c5dd, #0ba8c7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 16px;
          box-shadow: 0 5px 15px rgba(19, 197, 221, 0.2);
        }

        .author-info-minimal {
          flex: 1;
        }

        .author-name-minimal {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 0 0 3px 0;
        }

        .author-role-minimal {
          font-size: 13px;
          color: #13c5dd;
          font-weight: 500;
          margin: 0 0 5px 0;
        }

        .author-date {
          font-size: 12px;
          color: #888;
          margin: 0;
        }

        .post-actions {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }

        .action-btn-minimal {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 15px;
        }

        .action-btn-minimal.save {
          background: rgba(19, 197, 221, 0.1);
          color: #13c5dd;
        }

        .action-btn-minimal.share {
          background: #f5f5f5;
          color: #666;
        }

        .action-btn-minimal.save:hover {
          background: #13c5dd;
          color: white;
          transform: translateY(-3px) rotate(15deg);
        }

        .action-btn-minimal.share:hover {
          background: #e9ecef;
          transform: translateY(-3px);
        }

        .post-footer-minimal {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stats-minimal {
          display: flex;
          gap: 25px;
        }

        .stat-minimal {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 13px;
          font-weight: 500;
        }

        .stat-minimal i {
          color: #13c5dd;
          font-size: 13px;
        }

        .minimal-read-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #13c5dd;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          padding: 8px 16px;
          background: rgba(19, 197, 221, 0.1);
          border-radius: 20px;
        }

        .minimal-read-btn:hover {
          gap: 12px;
          color: white;
          background: #13c5dd;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(19, 197, 221, 0.2);
        }

        .minimal-read-btn i {
          transition: transform 0.3s ease;
        }

        .minimal-read-btn:hover i {
          transform: translateX(5px);
        }

        .minimal-hover-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #13c5dd, #0ba8c7);
          transition: width 0.3s ease;
        }

        .minimal-card-inner.active .minimal-hover-line {
          width: 100%;
        }

        .minimal-load-btn {
          padding: 14px 40px;
          background: linear-gradient(135deg, #13c5dd, #0ba8c7);
          color: white;
          border: none;
          border-radius: 25px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 15px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(19, 197, 221, 0.2);
        }

        .minimal-load-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(19, 197, 221, 0.3);
        }

        .minimal-load-btn:hover .load-dots {
          opacity: 1;
          animation: dotsSpin 1s infinite;
        }

        .load-dots {
          display: flex;
          gap: 4px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        @keyframes dotsSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .dot {
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .minimal-image-section {
            height: 200px;
          }
          
          .minimal-content-section {
            padding: 20px;
          }
          
          .minimal-title {
            font-size: 18px;
          }
        }

        @media (max-width: 992px) {
          .minimal-image-section {
            height: 180px;
          }
          
          .minimal-title {
            font-size: 17px;
          }
          
          .author-minimal {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          
          .post-meta-minimal {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          
          .post-actions {
            width: 100%;
            justify-content: flex-end;
          }
        }

        @media (max-width: 768px) {
          .minimal-image-section {
            height: 220px;
          }
          
          .blog-card-minimal {
            max-width: 450px;
            margin: 0 auto;
          }
          
          .post-footer-minimal {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }
          
          .stats-minimal {
            width: 100%;
            justify-content: space-between;
          }
          
          .minimal-read-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .minimal-image-section {
            height: 200px;
          }
          
          .display-4 {
            font-size: 2.2rem;
          }
          
          .minimal-content-section {
            padding: 20px 15px;
          }
          
          .minimal-title {
            font-size: 18px;
          }
          
          .minimal-description {
            font-size: 14px;
          }
          
          .minimal-load-btn {
            padding: 12px 30px;
            font-size: 15px;
          }
        }

        @media (max-width: 400px) {
          .minimal-image-section {
            height: 180px;
          }
          
          .minimal-title {
            font-size: 16px;
          }
          
          .trending-badge,
          .read-time-minimal,
          .category-badge {
            font-size: 11px;
            padding: 4px 10px;
          }
          
          .author-avatar-minimal {
            width: 45px;
            height: 45px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;