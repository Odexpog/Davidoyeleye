import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Post lead to Google Sheet Web App API
      fetch("https://script.google.com/macros/s/AKfycbybNggaJltC0EaS1ci11nJN_uWn6yMygFUCTvxgfsRh2EVy0wFqiPHOc7oG3vVs57rk4g/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email: email,
          source: "Newsletter Signup"
        })
      }).catch(err => console.error("Sheets capture error:", err));

      // Save lead locally as backup/audit trail
      const localLeads = JSON.parse(localStorage.getItem('newsletter_leads') || '[]');
      localLeads.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('newsletter_leads', JSON.stringify(localLeads));
      
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="container text-center">
          <h2 className="newsletter-title">Subscribe to my newsletter</h2>
          <p className="newsletter-desc">
            Mind shifting ideas to elevate your thinking and provide you with practical growth insights to help you become better and achieve more.
          </p>
          {subscribed ? (
            <div className="newsletter-success">Thank you for subscribing! Welcome aboard.</div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g you@gmail.com" 
                  className="newsletter-input" 
                  required
                />
                <button type="submit" className="btn btn-primary newsletter-btn">Subscribe</button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="footer-content">
        <div className="container footer-grid">
          <div className="footer-col col-main">
            <h4 className="footer-logo-title">David Oyeleye</h4>
            <p className="footer-about">
              Building and interpreting dreams for leaders, organizations, and creators globally.
            </p>
            <div className="social-links">
              <a href="https://instagram.com/iamdavidoyeleye" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path></svg>
              </a>
              <a href="https://www.facebook.com/temidayour.david?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
              </a>
              <a href="https://www.youtube.com/@davidoyeleyetv9090" target="_blank" rel="noreferrer" className="social-link" aria-label="YouTube">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em"><path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/david-oyeleye-9b8144165" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em"><path d="M6 6h2.767v1.418h0.040c0.385-0.691 1.327-1.418 2.732-1.418 2.921 0 3.461 1.818 3.461 4.183v4.817h-2.885v-4.27c0-1.018-0.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255v4.344h-2.883v-9z"></path><path d="M1 6h3v9h-3v-9z"></path><path d="M4 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Helpful Links</h4>
            <ul className="footer-links">
              <li><a href="#serveYou" className="footer-link">Corporate Capability</a></li>
              <li><a href="#about" className="footer-link">Meet David</a></li>
              <li><a href="#serveYou" className="footer-link">Train Your Team</a></li>
              <li><a href="http://bit.ly/invitedavidoyeleye" target="_blank" rel="noreferrer" className="footer-link">Book Me</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              <li><Link to="/books" className="footer-link">Get My Books</Link></li>
              <li><a href="http://bit.ly/thecareercamp" target="_blank" rel="noreferrer" className="footer-link">Join 360 MIC</a></li>
              <li><a href="https://calendly.com/growwithcamp/get-clarity" target="_blank" rel="noreferrer" className="footer-link">Book Clarity Now</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-links">
              <li className="footer-text">+234 816 135 0045</li>
              <li>
                <a href="https://wa.me/2348161350045" target="_blank" rel="noreferrer" className="footer-link whatsapp-link">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container text-center">
          <p className="copyright">&copy; {new Date().getFullYear()} David Oyeleye. All Rights Reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--color-primary-light);
          color: var(--color-text-light);
          margin-top: auto;
          display: flex;
          flex-direction: column;
        }
        .modal-content {
          background-color: var(--color-white);
          border-radius: 4px;
        }
        .footer-newsletter {
          background-color: var(--color-secondary);
          padding: 4rem 0;
          color: var(--color-white);
        }
        .newsletter-title {
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }
        .newsletter-desc {
          max-width: 700px;
          margin: 0 auto 2.5rem;
          opacity: 0.95;
          font-size: 1.05rem;
        }
        .newsletter-form {
          max-width: 600px;
          margin: 0 auto;
        }
        .form-group {
          display: flex;
          gap: 1rem;
        }
        .newsletter-input {
          flex: 1;
          padding: 1.1rem 1.5rem;
          border-radius: 4px;
          border: 1px solid var(--color-white);
          background: transparent;
          color: var(--color-white);
          outline: none;
          font-size: 1rem;
        }
        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        .newsletter-btn {
          background-color: var(--color-primary) !important;
          color: var(--color-white) !important;
          box-shadow: none !important;
        }
        .newsletter-btn:hover {
          background-color: var(--color-primary-light) !important;
        }
        .newsletter-success {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-white);
        }
        .footer-content {
          padding: 5rem 0 3rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.2fr;
          gap: 3rem;
        }
        .col-main {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .footer-logo-title {
          font-size: 1.8rem;
          color: var(--color-white);
        }
        .footer-about {
          opacity: 0.8;
          max-width: 320px;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 5px;
          background-color: rgba(255, 255, 255, 0.08);
          color: var(--color-white);
          font-size: 1.2rem;
          transition: var(--transition-smooth);
        }
        .social-link:hover {
          background-color: var(--color-secondary);
          transform: translateY(-2px);
        }
        .footer-title {
          font-size: 1.2rem;
          color: var(--color-white);
          margin-bottom: 1.5rem;
          position: relative;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .footer-link {
          color: var(--color-text-light);
          opacity: 0.8;
          transition: var(--transition-smooth);
        }
        .footer-link:hover {
          color: var(--color-secondary);
          opacity: 1;
        }
        .footer-text {
          opacity: 0.8;
        }
        .whatsapp-link {
          color: #25d366;
          font-weight: 600;
        }
        .footer-bottom {
          padding: 2rem 0;
          opacity: 0.6;
          font-size: 0.9rem;
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }
        @media (max-width: 600px) {
          .footer-newsletter {
            padding: 3rem 0;
          }
          .newsletter-title {
            font-size: 1.8rem;
          }
          .form-group {
            flex-direction: column;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-about {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
