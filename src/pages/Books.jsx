/* TEAM */
/* Developer: Dorocreate */
/* Site: https://dorocreate.com.ng */
/* Twitter: @dorocreate */
/* Location: Nigeria */
/* >> We are a creative agency helping ambitious brands build the clarity, structure, and digital experiences required to scale.<< */

import React, { useState, useEffect } from 'react';
import LeadFormModal from '../components/LeadFormModal';


function Books() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeBookTitle, setActiveBookTitle] = useState('');
  const [animatedIdea, setAnimatedIdea] = useState(0);
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

  const ideas = [
    "Personal Transformation",
    "Effective Living",
    "Maximize Your Potential",
    "Elevate Your Thinking"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedIdea((prev) => (prev + 1) % ideas.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleOpenModal = (title) => {
    setActiveBookTitle(title);
    setModalOpen(true);
  };

  const otherBooks = [
    {
      title: "I Never Knew I Was Me",
      img: "/inkim.png",
      orderLink: "https://selar.co/47lr61",
      freeLink: "/inkim-form",
      desc: "Over the years, I've worked with brilliant leaders across business, corporate, government, and faith-based sectors. Success was visible, yet self-awareness was missing. Self-awareness is arguably the skill of the 21st century. This book is the guide you need to truly meet yourself underneath all the titles and achievements. Not because you need fixing. Because you've never actually met yourself."
    },
    {
      title: "Unbothered",
      img: "/unb.png",
      orderLink: "https://selar.co/531553",
      freeLink: null,
      desc: "Can you imagine standing in the middle of a storm, with fierce winds howling, rain pounding, and chaos everywhere, and standing firm, unshaken, untroubled? Unbothered is the essential roadmap for anyone tired of letting notifications, bad news, and life pressure steal their peace. Stop feeling like life is happening to you and start living with true inner calm."
    },
    {
      title: "The Business of Your Gift",
      img: "/TBG.png",
      orderLink: "https://selar.co/it7605",
      freeLink: null,
      desc: "You can be fired from your job, but you can't be fired from your gift. Your gift is your ultimate leverage, yet it is likely your most underused asset. This is a step-by-step tactical guide to discovering what your gift actually is, developing it into something valuable, and deploying it to build an extraordinary career and legacy."
    },
    {
      title: "Brand & Sell You",
      img: "/brand2.png",
      orderLink: "https://selar.co/m/thedavidoyeleye",
      freeLink: null,
      desc: "Tired of quoting your price and watching clients flinch? Brand & Sell You hands you proven strategies to elevate your pricing, boost your income, and flood your pipeline with high-net-worth clients who value your experience and results without questioning invoices."
    }
  ];

  return (
    <div className="books-page">
      {/* Books Hero Header */}
      <section className="books-hero">
        <div className="hero-gradient-overlay"></div>
        <div className="container">
          <div className="books-hero-text">
            <h1 className="hero-main-title">
              Knowledge Is The Baseline For <br className="desktop-break" />
              <span className="text-secondary">Personal Transformation</span> <br />
              &amp; Qualitative Living
            </h1>
            
            {/* Animated Ideas */}
            <div className="animated-ideas-container">
              <span className="ideas-prefix">Tools &amp; Superior Ideas For:</span>
              <div className="ideas-slider">
                <span className="idea-item active-idea">{ideas[animatedIdea]}</span>
              </div>
            </div>

            <p className="hero-subtext">
              Equip yourself with premium strategic insights to build your brand, command authority, and lead a highly productive life.
            </p>
            <div className="hero-actions">
              <button onClick={() => document.getElementById('new-release')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">Explore New Release</button>
              <button onClick={() => document.getElementById('all-books')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-outline">Browse Books</button>
            </div>
          </div>
        </div>
      </section>

      {/* New Release Section */}
      <section id="new-release" className="new-release-section section-padding">
        <div className="container">
          <span className="badge">NEW RELEASE</span>
          <h2 className="new-release-heading">The Tomb Was A Womb</h2>
          <div className="divider divider-left"></div>

          <div className="release-grid">
            <div className="release-cover-col">
              <div className="book-cover-3d-wrapper">
                {/* 3D isometric representation of Tomb Was A Womb */}
                <div className="book-3d">
                  <div className="book-3d-front">
                    <img src="/tomb.png" alt="The Tomb Was A Womb Cover" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                  </div>
                  <div className="book-3d-side"></div>
                </div>
              </div>
            </div>

            <div className="release-details-col">
              <p className="release-italic">This is a book you won't put down once you read the first line. It's really that good.</p>
              <div className="release-description">
                <p>
                  <strong>The Tomb Was A Womb</strong> makes one simple, life-altering argument: the seasons that feel like death are actually the seasons that do the most work.
                </p>
                <p>
                  Some things only grow in the dark. Some things only form under pressure. And the version of you that's about to walk out of this season? You couldn't have built that person any other way.
                </p>
                <p>
                  This isn't a book that tells you to just "stay positive." It's a book that tells you the whole truth and what happens behind the scenes of our lives: that what you're going through right now isn't just happening to you. It's happening <em>for</em> you.
                </p>
                <p>
                  If you've ever needed to know why what's happening is happening, this is it!
                </p>
              </div>

              <div className="release-actions">
                <div className="purchase-buttons">
                  <a href="https://selar.co/m/thedavidoyeleye" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Order On Selar
                  </a>
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                    Order On Amazon
                  </a>
                </div>
                <button className="btn btn-outline read-sample-btn" onClick={() => handleOpenModal('The Tomb Was A Womb')}>
                  Read Sample Chapter &darr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3D Book Lineup (Dan Lok reference) */}
      <section className="books-lineup-section">
        <div className="container">
          <div className="lineup-header">
            <h2 className="lineup-title text-center" style={{ color: 'var(--color-white)' }}>Interactive Library</h2>
            <p className="lineup-subtitle desktop-subtitle text-center" style={{ color: 'var(--color-bg-gray)' }}>Explore David's published works and strategic guides</p>
            <p className="lineup-subtitle mobile-subtitle text-center" style={{ color: 'var(--color-bg-gray)' }}>Tap a book to preview details</p>
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
        </div>
      </section>

      {/* Free devotional Callout banner */}
      <section className="devotional-banner-section text-center">
        <div className="container">
          <h2>Equip Devotional &amp; Free Library</h2>
          <p>Get instant access to free resources and weekly devotional letters to build your capacity.</p>
          <button className="btn btn-primary" onClick={() => handleOpenModal('Equip Devotional')}>
            Download Devotional Copy
          </button>
        </div>
      </section>

      <section id="all-books" className="showcase-section section-padding">
        <div className="container">
          <h2 className="section-title">Books</h2>
          <div className="divider"></div>

          <div className="books-grid">
            {otherBooks.map((book, idx) => (
              <div key={idx} className="book-card-showcase">
                <div className="book-card-img-wrapper">
                  <img src={book.img} alt={book.title} className="book-card-img" />
                </div>
                <div className="book-card-content">
                  <h3 className="book-card-title">{book.title}</h3>
                  <p className="book-card-desc">{book.desc}</p>
                  <div className="book-card-actions">
                    <a href={book.orderLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                      Get Your Copy
                    </a>
                    {book.freeLink ? (
                      <a href={book.freeLink} className="btn btn-outline btn-sm btn-dark-text">
                        Free Download
                      </a>
                    ) : (
                      <button className="btn btn-outline btn-sm btn-dark-text" onClick={() => handleOpenModal(book.title)}>
                        Get Free Chapter
                      </button>
                    )}
                  </div>
                </div>
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
    .books-page {
      background-color: var(--color-white);
    }
    
    /* Books Hero */
    .books-hero {
      background-image: linear-gradient(to right, rgba(5, 9, 57, 1) 0%, rgba(5, 9, 57, 0.8) 45%, rgba(5, 9, 57, 0.1) 85%, rgba(5, 9, 57, 0) 100%), url('/hero_books.jpg');
      background-size: auto 100%;
      background-position: right center;
      background-repeat: no-repeat;
      background-color: #121010; /* Blends perfectly with the portrait's dark background */
      color: var(--color-white);
      min-height: 580px;
      display: flex;
      align-items: center;
      padding: 6rem 0;
      position: relative;
    }
    .hero-gradient-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(5, 9, 57, 0.4) 0%, rgba(5, 9, 57, 0.8) 100%);
      z-index: 1;
    }
    .books-hero .container {
      position: relative;
      z-index: 2;
    }
    .hero-main-title {
      font-size: 3rem;
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }
    .animated-ideas-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
      font-size: 1.2rem;
      font-family: var(--font-heading);
    }
    .ideas-prefix {
      opacity: 0.85;
      font-weight: 500;
    }
    .ideas-slider {
      display: inline-block;
      position: relative;
      font-weight: 700;
    }
    .idea-item {
      color: var(--color-secondary);
      border-bottom: 2px solid var(--color-secondary);
      padding-bottom: 2px;
      animation: ideaPulse 2.5s ease-in-out infinite;
    }
    .hero-subtext {
      font-size: 1.1rem;
      opacity: 0.9;
      margin-bottom: 2.5rem;
      max-width: 500px;
    }
    .hero-actions {
      display: flex;
      gap: 1.5rem;
    }
    
    /* Stacked Books Visual */
    .books-hero-visual {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .book-stack {
      position: relative;
      width: 320px;
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .stacked-img {
      position: absolute;
      width: 130px;
      height: 190px;
      object-fit: cover;
      border-radius: 4px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
      transition: var(--transition-smooth);
    }
    .book-tomb {
      position: absolute;
      width: 130px;
      height: 190px;
      background: linear-gradient(135deg, #2b0b3b 0%, #0d142b 100%);
      border-radius: 4px;
      border-left: 8px solid #f66127;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
      padding: 10px;
      z-index: 10;
      transform: rotate(-15deg) translate(-50px, -20px);
    }
    .book-tomb .book-spine {
      text-align: center;
      line-height: 1.2;
    }
    .img-inkim {
      z-index: 9;
      transform: rotate(-8deg) translate(-20px, 10px);
    }
    .img-unb {
      z-index: 8;
      transform: rotate(2deg) translate(20px, 0px);
    }
    .img-tbg {
      z-index: 7;
      transform: rotate(10deg) translate(50px, 20px);
    }
    .img-brand {
      z-index: 6;
      transform: rotate(18deg) translate(80px, 40px);
    }
    .book-stack:hover .stacked-img,
    .book-stack:hover .book-tomb {
      transform: translateY(-10px) rotate(0deg) scale(1.05);
      z-index: 15;
      box-shadow: var(--shadow-lg);
    }
    .stack-caption {
      margin-top: 1rem;
      font-size: 0.85rem;
      opacity: 0.7;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* New Release Section */
    .new-release-section {
      background-color: var(--color-bg-light);
    }
    .badge {
      display: inline-block;
      background-color: var(--color-secondary-fade);
      color: var(--color-secondary);
      font-weight: 700;
      font-size: 0.85rem;
      padding: 0.4rem 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;
      letter-spacing: 1px;
    }
    .new-release-heading {
      font-size: 2.8rem;
      color: var(--color-primary);
    }
    .release-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 4rem;
      align-items: center;
      margin-top: 3rem;
    }
    .release-cover-col {
      display: flex;
      justify-content: center;
    }
    
    /* 3D Book representation */
    .book-cover-3d-wrapper {
      perspective: 1000px;
    }
    .book-3d {
      width: 240px;
      height: 360px;
      position: relative;
      transform-style: preserve-3d;
      transform: rotateY(-20deg) rotateX(10deg);
      box-shadow: 10px 10px 20px rgba(5, 9, 57, 0.2);
      transition: transform 0.5s ease;
    }
    .book-3d:hover {
      transform: rotateY(-5deg) rotateX(5deg);
    }
    .book-3d-front {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #1b0528 0%, #050939 100%);
      border-radius: 4px;
      z-index: 2;
      transform: translateZ(15px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 4px solid var(--color-secondary);
    }
    .front-design {
      border: 2px solid rgba(255,255,255,0.15);
      width: 88%;
      height: 92%;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      text-align: center;
    }
    .front-design h3 {
      font-size: 1.8rem;
      color: white;
      margin-bottom: 2rem;
      font-weight: 800;
      line-height: 1.2;
    }
    .front-design .author-name {
      color: var(--color-secondary);
      font-size: 0.95rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .book-3d-side {
      position: absolute;
      width: 30px;
      height: 100%;
      background: #f66127;
      left: 0;
      top: 0;
      transform: rotateY(-90deg) translateZ(15px);
      border-radius: 4px 0 0 4px;
    }
    .release-italic {
      font-style: italic;
      font-size: 1.2rem;
      color: var(--color-secondary);
      margin-bottom: 1.5rem;
      font-weight: 500;
    }
    .release-description p {
      margin-bottom: 1.2rem;
      font-size: 1.05rem;
      line-height: 1.7;
      opacity: 0.9;
      text-align: justify;
    }
    .release-actions {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 2rem;
    }
    .purchase-buttons {
      display: flex;
      gap: 1.5rem;
    }
    .read-sample-btn {
      align-self: flex-start;
      border-color: var(--color-primary);
      color: var(--color-primary);
    }
    .read-sample-btn:hover {
      background-color: var(--color-primary);
      color: white;
    }

    /* Devotional Banner */
    .devotional-banner-section {
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
      color: white;
      padding: 4rem 0;
    }
    .devotional-banner-section h2 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }
    .devotional-banner-section p {
      max-width: 600px;
      margin: 0 auto 2rem;
      opacity: 0.9;
      font-size: 1.05rem;
    }

    /* Showcase grid */
    .books-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      margin-top: 3rem;
    }
    .book-card-showcase {
      display: flex;
      gap: 2rem;
      background-color: var(--color-bg-light);
      padding: 2.5rem;
      border-radius: 4px;
      border: 1px solid var(--color-bg-gray);
      transition: var(--transition-smooth);
    }
    .book-card-showcase:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-secondary);
    }
    .book-card-img-wrapper {
      flex-shrink: 0;
    }
    .book-card-img {
      width: 140px;
      height: 210px;
      object-fit: cover;
      border-radius: 4px;
      box-shadow: 0 10px 15px rgba(0,0,0,0.15);
    }
    .book-card-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .book-card-title {
      font-size: 1.4rem;
      color: var(--color-primary);
      margin-bottom: 0.8rem;
    }
    .book-card-desc {
      font-size: 0.95rem;
      opacity: 0.8;
      line-height: 1.5;
      margin-bottom: 1.5rem;
      text-align: justify;
    }
    .book-card-actions {
      display: flex;
      gap: 1rem;
    }
    .btn-sm {
      padding: 0.5rem 1.2rem;
      font-size: 0.85rem;
    }
    .btn-dark-text {
      color: var(--color-primary);
      border-color: var(--color-primary);
    }
    .btn-dark-text:hover {
      background-color: var(--color-primary);
      color: white;
    }

    @keyframes ideaPulse {
      0%, 100% { opacity: 0.5; transform: scale(0.98); }
      50% { opacity: 1; transform: scale(1.02); }
    }

    @media (max-width: 1024px) {
      .books-hero-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      .books-hero-visual {
        order: -1;
      }
      .books-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .hero-subtext {
        display: none;
      }
      .hero-main-title {
        font-size: 2.2rem;
      }
      .release-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
      .purchase-buttons {
        flex-direction: column;
      }
      .read-sample-btn {
        width: 100%;
        text-align: center;
      }
      .book-card-showcase {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .book-card-desc {
        text-align: center;
      }
      .book-card-actions {
        justify-content: center;
      }
    }

    /* Interactive 3D Book Lineup Shelf Styles */
    .books-lineup-section {
      background: radial-gradient(circle at 50% 30%, #151a44 0%, #050939 70%, #02041a 100%); /* Brand navy blue based radial glow */
      padding: 5.5rem 0 7.5rem;
      position: relative;
      overflow: hidden;
      border-bottom: 12px solid var(--color-secondary); /* Glow / Platform line */
      box-shadow: 0 15px 35px rgba(246, 97, 39, 0.25);
    }
    .lineup-header h2 {
      font-size: 2.5rem;
      color: var(--color-white);
    }
    .lineup-subtitle {
      opacity: 0.9;
      font-size: 1.1rem;
      margin-top: 0.5rem;
      color: var(--color-text-light);
    }
    .desktop-subtitle {
      display: block;
    }
    .mobile-subtitle {
      display: none;
    }
    .books-lineup-row {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 1.8rem;
      flex-wrap: wrap;
      margin-top: 4.5rem;
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
    /* Overlaps matching Dan Lok style library */
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
    
    @media (max-width: 1024px) {
      .desktop-subtitle {
        display: none;
      }
      .mobile-subtitle {
        display: block;
      }
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
        scrollbar-width: none; /* Hide scrollbar for Firefox */
        -webkit-overflow-scrolling: touch;
      }
      .books-lineup-row::-webkit-scrollbar {
        display: none; /* Hide scrollbar for Safari/Chrome */
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
  `}</style>
);

export default Books;
