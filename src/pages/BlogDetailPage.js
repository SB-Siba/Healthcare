import React, { useState, useEffect } from 'react';

const BlogDetailPage1 = () => {
  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    website: '',
    comment: ''
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    'Operation & Surgery',
    'Blood Testing',
    'Medicine & Pharmacy',
    'Outdoor Checkup',
    'Ambulance Service',
    'Emergency Care'
  ];

  const recentPosts = [
    { id: 1, image: '/img/blog-1.jpg', title: 'Lorem ipsum dolor sit amet consec adipis elit' },
    { id: 2, image: '/img/blog-2.jpg', title: 'Lorem ipsum dolor sit amet consec adipis elit' },
    { id: 3, image: '/img/blog-3.jpg', title: 'Lorem ipsum dolor sit amet consec adipis elit' },
    { id: 4, image: '/img/blog-1.jpg', title: 'Lorem ipsum dolor sit amet consec adipis elit' },
    { id: 5, image: '/img/blog-2.jpg', title: 'Lorem ipsum dolor sit amet consec adipis elit' }
  ];

  const tags = [
    'Operation', 'Pharmacy', 'Surgery', 'Hospital', 'Doctor',
    'Medical', 'Health', 'Emergency', 'Ambulance', 'Checkup',
    'Medicine', 'Blood Testing'
  ];

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log('Comment Data:', commentData);
    alert('Comment submitted successfully!');
    setCommentData({
      name: '',
      email: '',
      website: '',
      comment: ''
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      position: 'relative'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'rgba(19, 197, 221, 0.05)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'rgba(19, 197, 221, 0.03)',
        borderRadius: '50%',
        animation: 'float 12s ease-in-out infinite reverse'
      }} />

      <div className="container-fluid py-5 position-relative z-1">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-5" style={{
            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s ease'
          }}>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb" style={{
                background: 'transparent',
                padding: '0'
              }}>
                <li className="breadcrumb-item">
                  <a href="/" className="text-decoration-none" style={{ color: '#13c5dd' }}>
                    <i className="fas fa-home me-1"></i> Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/blog" className="text-decoration-none" style={{ color: '#13c5dd' }}>
                    Blog
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: '#666' }}>
                  Article Details
                </li>
              </ol>
            </nav>
          </div>

          <div className="row g-5">
            {/* Main Content */}
            <div className="col-lg-8">
              {/* Article Header */}
              <div className="mb-5" style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease 0.2s'
              }}>
                <div style={{
                  background: 'white',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(19, 197, 221, 0.1)'
                }}>
                  {/* Featured Image */}
                  <div style={{
                    height: '400px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img 
                      className="w-100 h-100"
                      src="/img/blog-2.jpg" 
                      alt="Blog Detail"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease'
                      }}
                    />
                    {/* Category Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: '30px',
                      left: '30px',
                      background: 'rgba(19, 197, 221, 0.9)',
                      color: 'white',
                      padding: '8px 20px',
                      borderRadius: '20px',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      backdropFilter: 'blur(10px)'
                    }}>
                      Medical Research
                    </div>
                    {/* Read Time */}
                    <div style={{
                      position: 'absolute',
                      bottom: '30px',
                      right: '30px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#13c5dd',
                      padding: '8px 20px',
                      borderRadius: '20px',
                      fontWeight: '600',
                      fontSize: '0.9rem'
                    }}>
                      8 min read
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-5">
                    <div className="mb-4">
                      <h1 className="mb-4" style={{
                        color: '#333',
                        fontSize: '2.5rem',
                        lineHeight: '1.3'
                      }}>
                        Diam dolor est labore duo ipsum clita sed et lorem tempor sanctus
                      </h1>
                      <div className="d-flex align-items-center mb-4">
                        <div className="d-flex align-items-center me-4">
                          <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '3px solid rgba(19, 197, 221, 0.2)',
                            marginRight: '15px'
                          }}>
                            <img 
                              className="w-100 h-100"
                              src="/img/user.jpg" 
                              alt="Author"
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <div>
                            <div className="fw-bold" style={{ color: '#333' }}>Dr. John Doe</div>
                            <div className="text-muted small">Cardiology Specialist</div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="me-4">
                            <i className="far fa-calendar me-2" style={{ color: '#13c5dd' }}></i>
                            <span className="text-muted">Dec 15, 2023</span>
                          </div>
                          <div>
                            <i className="far fa-clock me-2" style={{ color: '#13c5dd' }}></i>
                            <span className="text-muted">Last updated 2 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Article Body */}
                    <div className="article-content">
                      <p className="fs-5 mb-4" style={{ lineHeight: '1.8', color: '#555' }}>
                        Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                        magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                        amet magna accusam consetetur eirmod.
                      </p>
                      
                      <div className="my-5 p-4" style={{
                        background: 'rgba(19, 197, 221, 0.05)',
                        borderLeft: '4px solid #13c5dd',
                        borderRadius: '0 12px 12px 0'
                      }}>
                        <h4 className="mb-3" style={{ color: '#13c5dd' }}>
                          <i className="fas fa-quote-left me-2"></i>
                          Key Insight
                        </h4>
                        <p className="mb-0" style={{ fontStyle: 'italic', color: '#555' }}>
                          "The future of healthcare lies in preventive medicine and early detection."
                        </p>
                      </div>

                      <h3 className="my-4" style={{ color: '#333' }}>Understanding Modern Healthcare</h3>
                      <p className="fs-5 mb-4" style={{ lineHeight: '1.8', color: '#555' }}>
                        Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                        vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                        nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et.
                      </p>

                      <div className="row my-5">
                        <div className="col-md-6 mb-3">
                          <div className="p-4 h-100" style={{
                            background: 'rgba(19, 197, 221, 0.1)',
                            borderRadius: '16px',
                            border: '1px solid rgba(19, 197, 221, 0.2)'
                          }}>
                            <h5 className="mb-3" style={{ color: '#13c5dd' }}>
                              <i className="fas fa-heartbeat me-2"></i>
                              Prevention First
                            </h5>
                            <p className="mb-0">
                              Regular check-ups and healthy lifestyle choices prevent diseases.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="p-4 h-100" style={{
                            background: 'rgba(19, 197, 221, 0.1)',
                            borderRadius: '16px',
                            border: '1px solid rgba(19, 197, 221, 0.2)'
                          }}>
                            <h5 className="mb-3" style={{ color: '#13c5dd' }}>
                              <i className="fas fa-brain me-2"></i>
                              Early Detection
                            </h5>
                            <p className="mb-0">
                              Advanced screening technologies catch diseases at early stages.
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="fs-5 mb-4" style={{ lineHeight: '1.8', color: '#555' }}>
                        Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                        invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                        lorem sed. Magna amet sed rebum eos.
                      </p>
                    </div>

                    {/* Article Stats */}
                    <div className="d-flex justify-content-between align-items-center mt-5 pt-4" style={{
                      borderTop: '1px solid rgba(19, 197, 221, 0.1)'
                    }}>
                      <div className="d-flex align-items-center">
                        <div className="me-4">
                          <i className="far fa-eye me-2" style={{ color: '#13c5dd' }}></i>
                          <span className="fw-bold">12,345</span>
                          <span className="text-muted ms-1">views</span>
                        </div>
                        <div className="me-4">
                          <i className="far fa-comment me-2" style={{ color: '#13c5dd' }}></i>
                          <span className="fw-bold">123</span>
                          <span className="text-muted ms-1">comments</span>
                        </div>
                        <div>
                          <i className="fas fa-share-alt me-2" style={{ color: '#13c5dd' }}></i>
                          <span className="fw-bold">456</span>
                          <span className="text-muted ms-1">shares</span>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <button className="btn" style={{
                          background: 'rgba(19, 197, 221, 0.1)',
                          color: '#13c5dd',
                          border: 'none',
                          borderRadius: '8px',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <i className="fab fa-facebook-f"></i>
                        </button>
                        <button className="btn" style={{
                          background: 'rgba(19, 197, 221, 0.1)',
                          color: '#13c5dd',
                          border: 'none',
                          borderRadius: '8px',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <i className="fab fa-twitter"></i>
                        </button>
                        <button className="btn" style={{
                          background: 'rgba(19, 197, 221, 0.1)',
                          color: '#13c5dd',
                          border: 'none',
                          borderRadius: '8px',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <i className="fab fa-linkedin-in"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease 0.4s'
              }}>
                <div style={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '40px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(19, 197, 221, 0.1)',
                  marginBottom: '30px'
                }}>
                  <h3 className="mb-4" style={{ color: '#333' }}>
                    <i className="fas fa-comments me-3" style={{ color: '#13c5dd' }}></i>
                    Comments (3)
                  </h3>
                  
                  {/* Comment 1 */}
                  <div className="mb-4" style={{
                    animation: 'fadeIn 0.6s ease-out'
                  }}>
                    <div className="d-flex">
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid rgba(19, 197, 221, 0.2)',
                        marginRight: '20px',
                        flexShrink: 0
                      }}>
                        <img 
                          className="w-100 h-100"
                          src="/img/user.jpg" 
                          alt="User"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="mb-0" style={{ color: '#333' }}>
                            John Doe
                            <span className="text-muted ms-2" style={{ fontSize: '0.9rem' }}>
                              <i className="far fa-clock me-1"></i>
                              2 hours ago
                            </span>
                          </h6>
                          <button className="btn btn-sm" style={{
                            background: 'rgba(19, 197, 221, 0.1)',
                            color: '#13c5dd',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '5px 15px'
                          }}>
                            Reply
                          </button>
                        </div>
                        <p className="mb-0" style={{ color: '#555', lineHeight: '1.6' }}>
                          Excellent article! The insights on preventive healthcare are spot on.
                          As a medical professional, I completely agree with the points raised.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Comment 2 */}
                  <div className="mb-4" style={{
                    animation: 'fadeIn 0.6s ease-out 0.2s'
                  }}>
                    <div className="d-flex">
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid rgba(19, 197, 221, 0.2)',
                        marginRight: '20px',
                        flexShrink: 0
                      }}>
                        <img 
                          className="w-100 h-100"
                          src="/img/user.jpg" 
                          alt="User"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="mb-0" style={{ color: '#333' }}>
                            Sarah Johnson
                            <span className="text-muted ms-2" style={{ fontSize: '0.9rem' }}>
                              <i className="far fa-clock me-1"></i>
                              5 hours ago
                            </span>
                          </h6>
                          <button className="btn btn-sm" style={{
                            background: 'rgba(19, 197, 221, 0.1)',
                            color: '#13c5dd',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '5px 15px'
                          }}>
                            Reply
                          </button>
                        </div>
                        <p className="mb-0" style={{ color: '#555', lineHeight: '1.6' }}>
                          Very informative! Could you elaborate more on the early detection methods?
                          Would love to see a follow-up article on this topic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment Form */}
                <div style={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '40px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(19, 197, 221, 0.1)'
                }}>
                  <h3 className="mb-4" style={{ color: '#333' }}>
                    <i className="fas fa-edit me-3" style={{ color: '#13c5dd' }}></i>
                    Leave a Comment
                  </h3>
                  <form onSubmit={handleCommentSubmit}>
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input 
                            type="text" 
                            className="form-control"
                            placeholder="Your Name"
                            name="name"
                            value={commentData.name}
                            onChange={handleCommentChange}
                            required
                            style={{
                              padding: '15px',
                              border: '2px solid rgba(19, 197, 221, 0.2)',
                              borderRadius: '12px',
                              transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = '#13c5dd';
                              e.target.style.boxShadow = '0 0 0 3px rgba(19, 197, 221, 0.1)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(19, 197, 221, 0.2)';
                              e.target.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input 
                            type="email" 
                            className="form-control"
                            placeholder="Your Email"
                            name="email"
                            value={commentData.email}
                            onChange={handleCommentChange}
                            required
                            style={{
                              padding: '15px',
                              border: '2px solid rgba(19, 197, 221, 0.2)',
                              borderRadius: '12px',
                              transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = '#13c5dd';
                              e.target.style.boxShadow = '0 0 0 3px rgba(19, 197, 221, 0.1)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(19, 197, 221, 0.2)';
                              e.target.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input 
                            type="text" 
                            className="form-control"
                            placeholder="Website (Optional)"
                            name="website"
                            value={commentData.website}
                            onChange={handleCommentChange}
                            style={{
                              padding: '15px',
                              border: '2px solid rgba(19, 197, 221, 0.2)',
                              borderRadius: '12px',
                              transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = '#13c5dd';
                              e.target.style.boxShadow = '0 0 0 3px rgba(19, 197, 221, 0.1)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(19, 197, 221, 0.2)';
                              e.target.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea 
                            className="form-control"
                            rows="5"
                            placeholder="Your Comment"
                            name="comment"
                            value={commentData.comment}
                            onChange={handleCommentChange}
                            required
                            style={{
                              padding: '15px',
                              border: '2px solid rgba(19, 197, 221, 0.2)',
                              borderRadius: '12px',
                              transition: 'all 0.3s ease',
                              resize: 'vertical'
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = '#13c5dd';
                              e.target.style.boxShadow = '0 0 0 3px rgba(19, 197, 221, 0.1)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(19, 197, 221, 0.2)';
                              e.target.style.boxShadow = 'none';
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <button 
                        type="submit"
                        className="btn px-5 py-3"
                        style={{
                          background: 'linear-gradient(135deg, #13c5dd, #0a9eb5)',
                          color: 'white',
                          borderRadius: '12px',
                          fontWeight: '600',
                          border: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-3px)';
                          e.target.style.boxShadow = '0 10px 20px rgba(19, 197, 221, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        <i className="fas fa-paper-plane me-2"></i>
                        Post Comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div style={{
                position: 'sticky',
                top: '20px'
              }}>
                {/* Search */}
                <div className="mb-5" style={{
                  animation: 'slideInRight 0.6s ease-out 0.2s both'
                }}>
                  <div className="input-group" style={{
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}>
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="Search articles..."
                      style={{
                        border: '2px solid rgba(19, 197, 221, 0.2)',
                        borderRight: 'none',
                        padding: '15px',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#13c5dd';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(19, 197, 221, 0.2)';
                      }}
                    />
                    <button className="btn" style={{
                      background: '#13c5dd',
                      color: 'white',
                      border: '2px solid #13c5dd',
                      padding: '15px 20px'
                    }}>
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-5" style={{
                  animation: 'slideInRight 0.6s ease-out 0.4s both'
                }}>
                  <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '25px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(19, 197, 221, 0.1)'
                  }}>
                    <h4 className="mb-4" style={{ color: '#13c5dd' }}>
                      <i className="fas fa-folder-open me-2"></i>
                      Categories
                    </h4>
                    <div className="d-flex flex-column gap-2">
                      {categories.map((category, index) => (
                        <a 
                          key={index}
                          href={`/category/${category.toLowerCase().replace(/ & /g, '-')}`}
                          className="d-flex align-items-center justify-content-between p-3 text-decoration-none"
                          style={{
                            background: 'rgba(19, 197, 221, 0.05)',
                            borderRadius: '10px',
                            color: '#333',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(19, 197, 221, 0.1)';
                            e.currentTarget.style.transform = 'translateX(5px)';
                            e.currentTarget.style.color = '#13c5dd';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(19, 197, 221, 0.05)';
                            e.currentTarget.style.transform = 'translateX(0)';
                            e.currentTarget.style.color = '#333';
                          }}
                        >
                          <span>{category}</span>
                          <i className="fas fa-chevron-right" style={{ fontSize: '0.9rem' }}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="mb-5" style={{
                  animation: 'slideInRight 0.6s ease-out 0.6s both'
                }}>
                  <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '25px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(19, 197, 221, 0.1)'
                  }}>
                    <h4 className="mb-4" style={{ color: '#13c5dd' }}>
                      <i className="fas fa-clock me-2"></i>
                      Recent Posts
                    </h4>
                    <div className="d-flex flex-column gap-3">
                      {recentPosts.map((post, index) => (
                        <a 
                          key={post.id}
                          href={`/blog/${post.id}`}
                          className="d-flex align-items-center text-decoration-none"
                          style={{
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateX(5px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
                        >
                          <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            marginRight: '15px',
                            flexShrink: 0
                          }}>
                            <img 
                              className="w-100 h-100"
                              src={post.image}
                              alt={post.title}
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <div>
                            <h6 className="mb-1" style={{ 
                              color: '#333',
                              lineHeight: '1.4',
                              fontSize: '0.95rem'
                            }}>
                              {post.title}
                            </h6>
                            <div className="text-muted small">
                              <i className="far fa-calendar me-1"></i>
                              Dec {15 - index}, 2023
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div style={{
                  animation: 'slideInRight 0.6s ease-out 0.8s both'
                }}>
                  <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '25px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(19, 197, 221, 0.1)'
                  }}>
                    <h4 className="mb-4" style={{ color: '#13c5dd' }}>
                      <i className="fas fa-tags me-2"></i>
                      Popular Tags
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <a 
                          key={index}
                          href={`/tag/${tag.toLowerCase()}`}
                          className="px-3 py-2 text-decoration-none"
                          style={{
                            background: 'rgba(19, 197, 221, 0.1)',
                            color: '#13c5dd',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#13c5dd';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(19, 197, 221, 0.1)';
                            e.currentTarget.style.color = '#13c5dd';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BlogDetailPage1;