/* TEAM */
/* Developer: Dorocreate */
/* Site: https://dorocreate.com.ng */
/* Twitter: @dorocreate */
/* Location: Nigeria */
/* >> We are a creative agency helping ambitious brands build the clarity, structure, and digital experiences required to scale.<< */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeadFormModal from '../components/LeadFormModal';


function Home() {
  const [showFullProfile, setShowFullProfile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeBookTitle, setActiveBookTitle] = useState('');
  const [activeMobileFlip, setActiveMobileFlip] = useState(null);
  const [centeredBookIdx, setCenteredBookIdx] = useState(0);

  const handleBookClick = (idx, title, e) => {
    if (window.innerWidth <= 1024) {
      if (centeredBookIdx !== idx) {
        setCenteredBookIdx(idx);
        setActiveMobileFlip(null);
        const container = document.querySelector('.books-lineup-row');
        if (container) {
          const child = container.children[idx];
          const targetScroll = child.offsetLeft - (container.offsetWidth - child.offsetWidth) / 2;
          container.scrollTo({ left: targetScroll, behavior: 'smooth' });
        }
      } else {
        setActiveMobileFlip(activeMobileFlip === idx ? null : idx);
      }
    } else {
      handleOpenModal(title);
    }
  };

  const handleDotClick = (idx) => {
    setCenteredBookIdx(idx);
    setActiveMobileFlip(null);
    const container = document.querySelector('.books-lineup-row');
    if (container) {
      const child = container.children[idx];
      const targetScroll = child.offsetLeft - (container.offsetWidth - child.offsetWidth) / 2;
      container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const handleScroll = (e) => {
    if (window.innerWidth > 1024) return;
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const children = container.children;
    if (!children.length) return;

    let closestIdx = 0;
    let minDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const containerCenter = scrollLeft + containerWidth / 2;
      const distance = Math.abs(childCenter - containerCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = i;
      }
    }
    setCenteredBookIdx(closestIdx);
  };

  const handleOpenModal = (title) => {
    setActiveBookTitle(title);
    setModalOpen(true);
  };
  
  const testimonials = [
    {
      name: "Dr. Akin Akinpelu",
      title: "Official Forbes Coaches Council and Consultant, Erudiohub",
      img: "/akin.jpg",
      text: "I've had the privilege of working closely with David, and I can confidently attest that if your goal is to grow or bring the best out of your team, expand your leadership base, build high-performing teams, and foster a work culture that everyone dreams to be a part of, love to come and work, David is one of the few tested and trusted names that instantly comes to mind."
    },
    {
      name: "Prof. Wale Adisa",
      title: "Consultant Minimal Access Surgeon",
      img: "/adisa.jpg",
      text: "Some of the unique attributes of a leader are the ability to see what others may not see, think outside the box and proffer solutions to situations that may otherwise look insolvent. Clearly, David Oyeleye has these qualities. He is excelling in deploying his God-given talents in helping individuals and organizations to realize, align with and fulfill purpose. I strongly recommend him to you."
    },
    {
      name: "Prof. BA Kolawole",
      title: "Provost, Health Sciences, OAU, and Professor of Internal Medicine/Endocrinology",
      img: "/kola.jpg",
      text: "David is a quintessential leader and ever-flowing river of knowledge. He can help people maximize their life and manifest all the hidden capabilities, potentials and gifts locked inside of them. He is also an insightful teacher, adept trainer, and an astute leadership coach. He will undoubtedly be an invaluable asset to anyone or organization. I highly recommend his services, products and programmes to anyone who seeks all round growth, improvement and transformation."
    },
    {
      name: "Rev Osiboye Ward",
      title: "CEO MATRIX global Governing Pst, O2C",
      img: "/ward.png",
      text: "David Oyeleye is a strategic human with a fine blend of ancient dimensions and contemporal competence. With astute intelligence, he teaches & operates effortlessly while conveying words that wake up the YOU in you in any setting of human consciousness be it business, faith-based organization or nation especially where 'excellence' is coveted. I unreservedly recommend him to the globe. You can trust him to always deliver excellent value."
    }
  ];

  const brandLogos = [
    '/bdayn.png', '/punch.png', '/gef.png', '/akin.png', '/ondea.png', '/kora.svg', 
    '/fincra.png', '/umera.png', '/ondo.png', '/aye.png', '/betax.png', '/heirs.png', '/dd.jpg'
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero-section">
        <video src="https://res.cloudinary.com/dckxlcwpr/video/upload/f_auto,q_auto/v1782060020/dolaVid_rba19k.mp4" autoPlay loop muted playsInline className="hero-video-bg"></video>
        <div className="hero-overlay"></div>
        <div className="hero-content container text-center animate-fade-in">
          <h1 className="hero-title">
            On A Mission To <br className="mobile-break" />
            <span className="text-highlight">Transform 200 Million</span> Lives
          </h1>
          <div className="hero-buttons">
            <a href="http://bit.ly/thecareercamp" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Grow With Me
            </a>
            <a href="http://bit.ly/invitedavidoyeleye" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Book Me
            </a>
          </div>
        </div>
      </header>

      {/* Scrolling Brands Banner */}
      <section className="brands-marquee-section">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {brandLogos.map((logo, idx) => (
              <img key={`logo-1-${idx}`} src={logo} alt="Partner Logo" className="marquee-logo" />
            ))}
            {brandLogos.map((logo, idx) => (
              <img key={`logo-2-${idx}`} src={logo} alt="Partner Logo" className="marquee-logo" />
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact Fullscreen Tagline Banner */}
      <section className="tagline-showcase-section">
        <div className="tagline-container">
          <img src="/kings.jpg" alt="I Build &amp; Interpret Dreams For Kings &amp; Nobles" className="tagline-img" />
        </div>
      </section>

      {/* Quote Banner */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-card">
            <img src="/quote.jpg" alt="David Oyeleye Quote" className="quote-img" />
          </div>
        </div>
      </section>

      {/* Main Focus Section (Self-Awareness) */}
      <section className="focus-section section-padding">
        <div className="container focus-grid">
          <div className="focus-img-wrapper">
            <img src="/inkim.png" alt="Self Awareness Book Cover" className="focus-book-img" />
          </div>
          <div className="focus-text-wrapper">
            <h2><span className="text-secondary font-weight-bold">SELF AWARENESS</span> Is VERY Rare Even Amongst The 'Best' Leaders, But It’s The First Step To Real Power & Transformation.</h2>
            <p className="focus-desc">GET This Book Now & Join the Few Top 1% in the world Who Truly Know Themselves!!</p>
            <div className="focus-actions">
              <Link to="/inkim-form" className="btn btn-primary">DOWNLOAD FOR FREE</Link>
              <a href="https://selar.com/47lr61" target="_blank" rel="noopener noreferrer" className="btn btn-dark">ORDER NOW!</a>
            </div>
          </div>
        </div>
      </section>

      {/* Clarity / Image section */}
      <section className="clarity-section">
        <div className="clarity-banner">
          <img src="/cla.svg" alt="Abstract Background Grid" className="clarity-bg" />
          <div className="clarity-content container text-center">
            <img src="/clarity.jpg" alt="Clarity Campaign Poster" className="clarity-main-img" />
            <a href="https://calendly.com/growwithcamp/get-clarity" target="_blank" rel="noopener noreferrer" className="btn btn-primary clarity-btn">
              Book Clarity Now
            </a>
          </div>
        </div>
      </section>

      {/* Public Speaker Grid */}
      <section className="speaker-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Public Speaker</h2>
          <div className="divider"></div>
          <div className="speaker-grid">
            <img src="/event1.jpg" alt="David Oyeleye Speaking" className="speaker-img" />
            <img src="/event2.jpg" alt="David Oyeleye Event" className="speaker-img" />
          </div>
        </div>
      </section>

      {/* Meet Me Section */}
      <section id="about" className="meet-section section-padding">
        <div className="container meet-grid">
          <div className="meet-img-col">
            <div className="meet-img-frame">
              <img src="/david.webp" alt="David Oyeleye Profile" className="meet-img" />
            </div>
          </div>
          <div className="meet-text-col">
            <h2 className="meet-title">MEET ME</h2>
            <div className="divider divider-left"></div>
            <h3 className="meet-subtitle">I build and interpret dreams for kings. Yours can be next!</h3>
            <p className="meet-para" style={{ fontWeight: '500' }}>
              Imagine your dream as a house, a unique architectural design that embodies your aspirations and potentials. Like the intricate step by step process of building a house from scratch into a beautiful home, my life's work is all about helping you to create, build and transform your dreams into reality.
            </p>
            
            {showFullProfile && (
              <div className="meet-collapsible-content animate-fade-in">
                <p className="meet-para">
                  But it's one thing to have a dream and vision in your heart, but it's another to know how to masterfully bring it to life. Just like a well-built home, your dreams require thoughtful planning, effort, and nurturing to become a reality. Unfortunately, not everyone can do that and this is where many visionaries get stuck and that's where I come in.
                </p>
                <p className="meet-para">
                  Maybe what you are thinking right now is "David, all I have right now is just a rough sketch, fuzzy, full of scattered details, maybe even a bit of confusing ideas". Don't worry! Now, picture that same rough sketch being conceptualized into an unbelievable masterpiece, a reality so beautiful you have always wanted and surpasses even your wildest expectations. That's literally what I do and I'm damn good at it.
                </p>
                <p className="meet-para">
                  Whether you're just beginning or already building, I'm here to help you. Let's bring your dream to life—together.
                </p>
              </div>
            )}
            
            <div className="meet-action" style={{ marginTop: '1.5rem' }}>
              <button 
                onClick={() => setShowFullProfile(!showFullProfile)} 
                className="btn btn-primary"
              >
                {showFullProfile ? 'HIDE FULL PROFILE' : 'SEE MY FULL PROFILE'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="serveYou" className="services-section section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">What Dream Do You Want To Interpret Today?</h2>
            <div className="divider"></div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Training & Speaking</h3>
              <p className="service-desc">
                I elevate the thinking of individuals and corporate organizations through my transformative training programme. My teachings and training sessions are designed to provoke all round transformation.
              </p>
              <a href="http://bit.ly/invitedavidoyeleye" target="_blank" rel="noopener noreferrer" className="btn btn-dark service-btn">Book me to train</a>
            </div>

            <div className="service-card active">
              <h3 className="service-title">Courses & Coaching</h3>
              <p className="service-desc">
                From understanding your purpose, gaining clarity about your life, career or business to building a strong personal brand or increasing your productivity, I can work closely with you to become the best version of yourself.
              </p>
              <a href="https://selar.co/955741" target="_blank" rel="noopener noreferrer" className="btn btn-primary service-btn">Coach me</a>
            </div>

            <div className="service-card">
              <h3 className="service-title">Consulting & Business Development</h3>
              <p className="service-desc">
                I deploy creative insight, analytic ability, proprietary methodologies, and vision clarification to organizations, individuals and groups to deliver out-of-the-box solutions.
              </p>
              <a href="mailto:davidoyeleyecompany@gmail.com" className="btn btn-dark service-btn">Book me</a>
            </div>

            <div className="service-card">
              <h3 className="service-title">Book Project Consulting</h3>
              <p className="service-desc">
                Thinking of writing and publishing a book? I help speakers, pastors, first time authors, coaches and thought leaders to become published authors and market their storytelling.
              </p>
              <a href="https://kontenthome.com.ng/" target="_blank" rel="noopener noreferrer" className="btn btn-dark service-btn">Work with me</a>
            </div>
          </div>
        </div>
      </section>

      {/* Get my Books section */}
      <section className="books-pitch-section section-padding">
        <div className="container">
          <div className="books-pitch-header text-center">
            <h2>Get My Books</h2>
            <p className="books-pitch-lead">Knowledge is the baseline for a qualitative life, and as such I’m passionate about transferring quality knowledge. Books have transformed my life and I believe my books will do the same for you.</p>
            <div className="divider"></div>
          </div>

          <div className="books-lineup-row" onScroll={handleScroll}>
            {/* Book 1: Tomb Was A Womb */}
            <div className={`interactive-book ${centeredBookIdx === 0 ? 'centered-mobile-book' : ''} ${activeMobileFlip === 0 ? 'flipped' : ''}`} onClick={() => handleBookClick(0, 'The Tomb Was A Womb')}>
              <div className="book-cover-3d">
                <div className="book-cover-front">
                  <img src="/tomb.png" alt="The Tomb Was A Womb" className="book-cover-img" />
                </div>
                <div className="book-cover-back"></div>
              </div>
              <div className="book-page-layer page-depth-1"></div>
              <div className="book-page-layer page-depth-2"></div>
              <div className="book-page-layer page-depth-3"></div>
              <div className="book-pages-reveal">
                <div className="book-pages-content">
                  <h4>Tomb Was A Womb</h4>
                  <p className="book-author-tag">David Oyeleye</p>
                  <p className="book-teaser">Seasons of death do the most work. Some things only grow in the dark...</p>
                  <span className="book-reveal-btn" onClick={(e) => { e.stopPropagation(); handleOpenModal('The Tomb Was A Womb'); }}>Download &rarr;</span>
                </div>
              </div>
            </div>

            {/* Book 2: I Never Knew I Was Me */}
            <div className={`interactive-book ${centeredBookIdx === 1 ? 'centered-mobile-book' : ''} ${activeMobileFlip === 1 ? 'flipped' : ''}`} onClick={() => handleBookClick(1, 'I Never Knew I Was Me')}>
              <div className="book-cover-3d">
                <div className="book-cover-front">
                  <img src="/inkim.png" alt="I Never Knew I Was Me" className="book-cover-img" />
                </div>
                <div className="book-cover-back"></div>
              </div>
              <div className="book-page-layer page-depth-1"></div>
              <div className="book-page-layer page-depth-2"></div>
              <div className="book-page-layer page-depth-3"></div>
              <div className="book-pages-reveal">
                <div className="book-pages-content">
                  <h4>I Never Knew I Was Me</h4>
                  <p className="book-author-tag">David Oyeleye</p>
                  <p className="book-teaser">Self-awareness is arguably the skill of the 21st century. Meet yourself.</p>
                  <span className="book-reveal-btn" onClick={(e) => { e.stopPropagation(); handleOpenModal('I Never Knew I Was Me'); }}>Download &rarr;</span>
                </div>
              </div>
            </div>

            {/* Book 3: Unbothered */}
            <div className={`interactive-book ${centeredBookIdx === 2 ? 'centered-mobile-book' : ''} ${activeMobileFlip === 2 ? 'flipped' : ''}`} onClick={() => handleBookClick(2, 'Unbothered')}>
              <div className="book-cover-3d">
                <div className="book-cover-front">
                  <img src="/unb.png" alt="Unbothered" className="book-cover-img" />
                </div>
                <div className="book-cover-back"></div>
              </div>
              <div className="book-page-layer page-depth-1"></div>
              <div className="book-page-layer page-depth-2"></div>
              <div className="book-page-layer page-depth-3"></div>
              <div className="book-pages-reveal">
                <div className="book-pages-content">
                  <h4>Unbothered</h4>
                  <p className="book-author-tag">David Oyeleye</p>
                  <p className="book-teaser">Stand firm in the storm. Unshaken. Untouched. Unbothered. Find peace.</p>
                  <span className="book-reveal-btn" onClick={(e) => { e.stopPropagation(); handleOpenModal('Unbothered'); }}>Download &rarr;</span>
                </div>
              </div>
            </div>

            {/* Book 4: The Business of Your Gift */}
            <div className={`interactive-book ${centeredBookIdx === 3 ? 'centered-mobile-book' : ''} ${activeMobileFlip === 3 ? 'flipped' : ''}`} onClick={() => handleBookClick(3, 'The Business of Your Gift')}>
              <div className="book-cover-3d">
                <div className="book-cover-front">
                  <img src="/TBG.png" alt="The Business of Your Gift" className="book-cover-img" />
                </div>
                <div className="book-cover-back"></div>
              </div>
              <div className="book-page-layer page-depth-1"></div>
              <div className="book-page-layer page-depth-2"></div>
              <div className="book-page-layer page-depth-3"></div>
              <div className="book-pages-reveal">
                <div className="book-pages-content">
                  <h4>Business of Your Gift</h4>
                  <p className="book-author-tag">David Oyeleye</p>
                  <p className="book-teaser">You can't be fired from your gift. Deploy your most underused asset.</p>
                  <span className="book-reveal-btn" onClick={(e) => { e.stopPropagation(); handleOpenModal('The Business of Your Gift'); }}>Download &rarr;</span>
                </div>
              </div>
            </div>

            {/* Book 5: Brand & Sell You */}
            <div className={`interactive-book ${centeredBookIdx === 4 ? 'centered-mobile-book' : ''} ${activeMobileFlip === 4 ? 'flipped' : ''}`} onClick={() => handleBookClick(4, 'Brand & Sell You')}>
              <div className="book-cover-3d">
                <div className="book-cover-front">
                  <img src="/brand2.png" alt="Brand &amp; Sell You" className="book-cover-img" />
                </div>
                <div className="book-cover-back"></div>
              </div>
              <div className="book-page-layer page-depth-1"></div>
              <div className="book-page-layer page-depth-2"></div>
              <div className="book-page-layer page-depth-3"></div>
              <div className="book-pages-reveal">
                <div className="book-pages-content">
                  <h4>Brand &amp; Sell You</h4>
                  <p className="book-author-tag">David Oyeleye</p>
                  <p className="book-teaser">Get paid like the professional you are. proven strategies to elevate price.</p>
                  <span className="book-reveal-btn" onClick={(e) => { e.stopPropagation(); handleOpenModal('Brand & Sell You'); }}>Download &rarr;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Swipe Indicators */}
          <div className="mobile-lineup-indicators">
            {[0, 1, 2, 3, 4].map((idx) => (
              <span 
                key={idx} 
                className={`indicator-dot ${centeredBookIdx === idx ? 'active' : ''}`}
                onClick={() => handleDotClick(idx)}
              />
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3.5rem' }}>
            <Link to="/books" className="btn btn-primary">Visit Bookstore &amp; Library</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">What Leaders &amp; Clients Say About Me</h2>
          <div className="divider"></div>
          <div className="testimonials-list">
            {testimonials.map((item, idx) => (
              <div key={idx} className="testimonial-card">
                <img src={item.img} alt={item.name} className="testimonial-avatar" />
                <p className="testimonial-text">"{item.text}"</p>
                <h4 className="testimonial-author">{item.name}</h4>
                <p className="testimonial-author-title">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      <LeadFormModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        bookTitle={activeBookTitle} 
      />

      {styleStyles}
    </div>
  );
}

const styleStyles = (
  <style>{`
    .home-page {
      position: relative;
    }
    
    /* Hero Section */
    .hero-section {
      position: relative;
      height: calc(100vh - 80px);
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .hero-video-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(5, 9, 57, 0.4) 0%, rgba(5, 9, 57, 0.85) 100%);
      z-index: 2;
    }
    .hero-content {
      position: relative;
      z-index: 3;
      color: var(--color-white);
    }
    .hero-title {
      font-size: 3.8rem;
      font-weight: 800;
      margin-bottom: 2rem;
      letter-spacing: -0.5px;
      line-height: 1.15;
    }
    .text-highlight {
      color: var(--color-secondary);
    }
    .hero-buttons {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 1.5rem;
    }
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.3rem;
      }
      .hero-buttons {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }

    /* Brands Marquee */
    .brands-marquee-section {
      background-color: var(--color-bg-light);
      padding: 1.5rem 0;
      overflow: hidden;
      border-bottom: 1px solid var(--color-bg-gray);
      border-top: 1px solid var(--color-bg-gray);
    }
    .marquee-wrapper {
      display: flex;
      width: 100%;
    }
    .marquee-track {
      display: flex;
      gap: 3.5rem;
      animation: scrollBrands 25s linear infinite;
      width: max-content;
      align-items: center;
    }
    .marquee-logo {
      height: 45px;
      width: auto;
      object-fit: contain;
      opacity: 0.95;
      transition: var(--transition-smooth);
    }
    .marquee-logo:hover {
      opacity: 1;
      transform: scale(1.05);
    }

    /* High-Impact Tagline Showcase */
    .tagline-showcase-section {
      width: 100%;
      background-color: #0c0a0a; /* Dark background matching the portrait background */
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .tagline-container {
      width: 100%;
      max-width: 1920px;
      margin: 0 auto;
    }
    .tagline-img {
      width: 100%;
      height: auto;
      display: block;
    }

    /* Quote Banner */
    .quote-section {
      background-color: var(--color-primary-fade);
      padding: 3rem 0;
      display: flex;
      justify-content: center;
    }
    .quote-card {
      max-width: 100%;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
    }
    .quote-img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }

    /* Focus Section */
    .focus-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      align-items: center;
    }
    .focus-img-wrapper {
      display: flex;
      justify-content: center;
    }
    .focus-book-img {
      max-width: 320px;
      height: auto;
      filter: drop-shadow(0 15px 30px rgba(13, 20, 43, 0.25));
      transition: var(--transition-smooth);
    }
    .focus-book-img:hover {
      transform: translateY(-5px) rotate(2deg);
    }
    .focus-text-wrapper h2 {
      font-size: 1.8rem;
      line-height: 1.4;
      margin-bottom: 1.5rem;
      color: var(--color-primary);
    }
    .focus-desc {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    .focus-actions {
      display: flex;
      gap: 1.5rem;
    }
    @media (max-width: 768px) {
      .focus-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .focus-actions {
        flex-direction: column;
      }
    }

    /* Clarity Section */
    .clarity-section {
      background-color: #0c1228;
      position: relative;
      overflow: hidden;
      padding: 4rem 0;
    }
    .clarity-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.15;
      z-index: 1;
    }
    .clarity-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    .clarity-main-img {
      max-width: 600px;
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    }

    /* Speaker Grid */
    .speaker-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
    .speaker-img {
      border-radius: 12px;
      width: 100%;
      height: auto;
      box-shadow: var(--shadow-md);
      transition: var(--transition-smooth);
    }
    .speaker-img:hover {
      transform: scale(1.02);
      box-shadow: var(--shadow-lg);
    }
    @media (max-width: 600px) {
      .speaker-grid {
        grid-template-columns: 1fr;
      }
    }

    /* Meet Me Section */
    .meet-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      align-items: center;
    }
    .meet-img-col {
      display: flex;
      justify-content: center;
    }
    .meet-img-frame {
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: var(--shadow-premium);
    }
    .meet-img {
      max-width: 400px;
      width: 100%;
      height: auto;
      display: block;
      transition: var(--transition-smooth);
    }
    .meet-img-frame:hover .meet-img {
      transform: scale(1.05);
    }
    .meet-title {
      font-size: 2.5rem;
      color: var(--color-primary);
    }
    .meet-subtitle {
      font-size: 1.5rem;
      color: var(--color-secondary);
      margin-bottom: 1.5rem;
    }
    .meet-para {
      margin-bottom: 1.2rem;
      font-size: 1.02rem;
      opacity: 0.85;
      text-align: justify;
    }
    @media (max-width: 768px) {
      .meet-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
    }

    /* Services Section */
    .services-section {
      background-color: var(--color-primary-fade);
    }
    .section-title {
      font-size: 2.5rem;
      color: var(--color-primary);
      text-align: center;
    }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      margin-top: 2rem;
    }
    .service-card {
      background-color: var(--color-white);
      padding: 2rem 1.5rem;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-sm);
      transition: var(--transition-smooth);
      border: 1px solid var(--color-bg-gray);
      position: relative;
      padding-bottom: 6rem;
    }
    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
    }
    .service-card.active {
      border: 2px solid var(--color-secondary);
      box-shadow: var(--shadow-md);
    }
    .service-title {
      font-size: 1.3rem;
      color: var(--color-primary);
      margin-bottom: 1rem;
    }
    .service-desc {
      font-size: 0.95rem;
      opacity: 0.85;
      line-height: 1.5;
    }
    .service-btn {
      position: absolute;
      bottom: 1.5rem;
      left: 1.5rem;
      right: 1.5rem;
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
    }
    @media (max-width: 1024px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 600px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
    }

    /* Books Pitch Section (Interactive Library Showroom) */
    .books-pitch-section {
      background: radial-gradient(circle at 50% 30%, #151a44 0%, #050939 70%, #02041a 100%); /* Radial glow on Homepage */
      color: var(--color-white);
    }
    .books-pitch-header h2 {
      font-size: 2.5rem;
      color: var(--color-white);
      margin-bottom: 1rem;
    }
    .books-pitch-lead {
      max-width: 750px;
      margin: 0 auto 2rem;
      font-size: 1.1rem;
      opacity: 0.95;
      line-height: 1.6;
    }
    
    .books-lineup-row {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 1.8rem;
      flex-wrap: wrap;
      margin-top: 4rem;
      padding: 2rem 2rem 4rem; /* padded at bottom for the shelf */
      z-index: 5;
    }
    
    /* Elegant glowing bookshelf ledge */
    .books-lineup-row::after {
      content: '';
      position: absolute;
      bottom: 2.5rem;
      left: 5%;
      width: 90%;
      height: 8px;
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(10px);
      border-radius: 4px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5), 
                  0 0 20px rgba(246, 97, 39, 0.4), /* Orange glow */
                  inset 0 1px 1px rgba(255, 255, 255, 0.2);
      z-index: 1;
    }

    .interactive-book {
      position: relative;
      width: 160px;
      height: 240px;
      perspective: 1000px;
      cursor: pointer;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), margin-bottom 0.4s ease, opacity 0.4s ease;
      z-index: 10;
    }
    .interactive-book:not(:first-child) {
      margin-left: -20px;
    }
    .interactive-book:hover {
      transform: translateZ(40px) translateY(-18px);
      z-index: 50;
      margin-right: 20px;
    }
    
    /* Turnable staggered book page layers */
    .book-page-layer {
      position: absolute;
      width: 94%;
      height: 94%;
      top: 3%;
      left: 2%;
      background: #fdfcf7;
      border: 1px solid #e2ded0;
      border-radius: 0 4px 4px 0;
      z-index: 1;
      transform-origin: left center;
      transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: inset 3px 0 6px rgba(0,0,0,0.1);
    }
    .page-depth-1 {
      z-index: 1;
      transition-delay: 0.05s;
    }
    .page-depth-2 {
      z-index: 1;
      transition-delay: 0.1s;
    }
    .page-depth-3 {
      z-index: 1;
      transition-delay: 0.15s;
    }
    
    /* Turn the page layers when flipped */
    .interactive-book:hover .page-depth-1,
    .interactive-book.flipped .page-depth-1 {
      transform: rotateY(-30deg);
    }
    .interactive-book:hover .page-depth-2,
    .interactive-book.flipped .page-depth-2 {
      transform: rotateY(-20deg);
    }
    .interactive-book:hover .page-depth-3,
    .interactive-book.flipped .page-depth-3 {
      transform: rotateY(-10deg);
    }

    .book-cover-3d {
      position: absolute;
      width: 100%;
      height: 100%;
      transform-origin: left center;
      transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      transform-style: preserve-3d;
      z-index: 2;
      box-shadow: 8px 12px 25px rgba(0, 0, 0, 0.4);
      border-radius: 0 4px 4px 0;
    }
    .book-cover-front {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 0 4px 4px 0;
      overflow: hidden;
    }
    .book-cover-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0 4px 4px 0;
    }
    .book-cover-back {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #fafafa;
      transform: rotateY(180deg);
      backface-visibility: hidden;
      border-radius: 4px 0 0 4px;
      box-shadow: inset 5px 0 12px rgba(0,0,0,0.12);
      border: 1px solid #ddd;
    }

    .book-pages-reveal {
      position: absolute;
      width: 95%;
      height: 96%;
      top: 2%;
      left: 1%;
      background: #fcfbf9; /* Warm book paper color */
      box-shadow: inset 4px 0 10px rgba(0,0,0,0.15), 5px 8px 20px rgba(0, 0, 0, 0.3);
      border-radius: 0 4px 4px 0;
      border-left: 5px solid var(--color-secondary); /* Brand orange book spine accent */
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1.5rem 1rem;
      border: 1px solid #eee;
    }
    .book-pages-reveal h4 {
      font-size: 0.88rem;
      color: var(--color-primary);
      line-height: 1.25;
      font-weight: 700;
    }
    .book-pages-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
    }
    .book-author-tag {
      font-size: 0.62rem;
      color: var(--color-secondary);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 2px;
    }
    .book-teaser {
      font-size: 0.72rem;
      line-height: 1.45;
      color: #444;
      margin: 10px 0;
    }
    .book-reveal-btn {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--color-secondary);
      align-self: flex-start;
      margin-top: auto;
      border-bottom: 1.5px solid var(--color-secondary);
      padding-bottom: 1px;
      transition: var(--transition-smooth);
    }
    .book-reveal-btn:hover {
      color: var(--color-primary);
      border-color: var(--color-primary);
    }
    
    /* Cover Opening Rotations */
    .interactive-book:hover .book-cover-3d,
    .interactive-book.flipped .book-cover-3d {
      transform: rotateY(-142deg);
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    }

    /* Swipe indicators styling */
    .mobile-lineup-indicators {
      display: none;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .indicator-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      transition: var(--transition-smooth);
    }
    .indicator-dot.active {
      background-color: var(--color-secondary);
      transform: scale(1.3);
    }
    
    @media (max-width: 1024px) {
      /* Mobile Snap Swipe Carousel for Book Deck */
      .books-lineup-row {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        justify-content: flex-start;
        align-items: center;
        scroll-snap-type: x mandatory;
        padding: 3rem 2rem 5rem;
        gap: 1.8rem;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
      }
      .books-lineup-row::-webkit-scrollbar {
        display: none;
      }
      .books-lineup-row::after {
        bottom: 3.5rem;
        left: 2rem;
        width: calc(100% - 4rem);
      }
      .interactive-book {
        flex-shrink: 0;
        scroll-snap-align: center;
        opacity: 0.45;
        transform: scale(0.85);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
      }
      .interactive-book:not(:first-child) {
        margin-left: 0;
      }
      .interactive-book.centered-mobile-book {
        opacity: 1;
        transform: scale(1.1) translateY(-12px);
        z-index: 100;
      }
      .interactive-book:hover {
        margin-right: 0;
      }
      .mobile-lineup-indicators {
        display: flex;
      }
    }

    /* Testimonials List */
    .testimonials-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      margin-top: 3rem;
    }
    .testimonial-card {
      background-color: var(--color-white);
      padding: 2.5rem;
      border-radius: 4px;
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--color-bg-gray);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .testimonial-avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1.5rem;
      border: 3px solid var(--color-secondary);
    }
    .testimonial-text {
      font-style: italic;
      font-size: 0.98rem;
      opacity: 0.9;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    .testimonial-author {
      font-size: 1.15rem;
      color: var(--color-primary);
      margin-bottom: 0.2rem;
    }
    .testimonial-author-title {
      font-size: 0.85rem;
      color: var(--color-secondary);
      font-weight: 500;
    }
    @media (max-width: 768px) {
      .testimonials-list {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        gap: 1.5rem;
        padding-bottom: 1.5rem;
        margin-top: 2rem;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
        scrollbar-color: var(--color-secondary) rgba(0,0,0,0.05);
      }
      .testimonials-list::-webkit-scrollbar {
        height: 5px;
      }
      .testimonials-list::-webkit-scrollbar-track {
        background: rgba(0,0,0,0.05);
        border-radius: 3px;
      }
      .testimonials-list::-webkit-scrollbar-thumb {
        background: var(--color-secondary);
        border-radius: 3px;
      }
      .testimonial-card {
        flex: 0 0 88%;
        scroll-snap-align: center;
        box-sizing: border-box;
      }
    }
  `}</style>
);

export default Home;
