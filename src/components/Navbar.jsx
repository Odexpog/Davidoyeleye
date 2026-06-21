import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link" onClick={handleLinkClick}>
          <img src="/dolalogo.png" alt="David Oyeleye Logo" className="navbar-logo" />
        </Link>

        {/* Hamburger Menu Toggle */}
        <button 
          className={`navbar-toggle ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Menu Links */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className={`navbar-link ${isActive('/')}`} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/books" className={`navbar-link ${isActive('/books')}`} onClick={handleLinkClick}>
              Books
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className={`navbar-link ${isActive('/blog')}`} onClick={handleLinkClick}>
              Blog
            </Link>
          </li>
          <li className="navbar-item">
            <a 
              href="http://bit.ly/invitedavidoyeleye" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="navbar-link"
              onClick={handleLinkClick}
            >
              Book Me (Speaker)
            </a>
          </li>
          <li className="navbar-item btn-item">
            <a 
              href="https://calendly.com/growwithcamp/get-clarity" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="navbar-btn"
              onClick={handleLinkClick}
            >
              Book Clarity Now
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        .navbar {
          background-color: var(--color-white);
          border-bottom: 1px solid var(--color-bg-gray);
          position: sticky;
          top: 0;
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
          transition: var(--transition-smooth);
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .navbar-logo-link {
          display: flex;
          align-items: center;
        }
        .navbar-logo {
          height: 50px;
          width: auto;
          object-fit: contain;
        }
        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .navbar-item {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 0.95rem;
        }
        .navbar-link {
          color: var(--color-primary);
          transition: var(--transition-smooth);
          padding: 0.5rem 0;
          position: relative;
        }
        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-secondary);
          transition: var(--transition-smooth);
        }
        .navbar-link:hover::after,
        .navbar-link.active::after {
          width: 100%;
        }
        .navbar-link:hover,
        .navbar-link.active {
          color: var(--color-secondary);
        }
        .navbar-btn {
          display: inline-flex;
          align-items: center;
          background-color: var(--color-primary);
          color: var(--color-white);
          padding: 0.6rem 1.4rem;
          border-radius: 4px;
          font-weight: 600;
          transition: var(--transition-smooth);
        }
        .navbar-btn:hover {
          background-color: var(--color-secondary);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(246, 97, 39, 0.3);
        }
        .navbar-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 1010;
        }
        .navbar-toggle .bar {
          height: 3px;
          width: 100%;
          background-color: var(--color-primary);
          border-radius: 10px;
          transition: all 0.3s ease-in-out;
        }
        @media (max-width: 1024px) {
          .navbar-toggle {
            display: flex;
          }
          .navbar-menu {
            position: fixed;
            top: 80px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 80px);
            background-color: var(--color-white);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2.5rem;
            transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: var(--shadow-lg);
            z-index: 999;
          }
          .navbar-menu.active {
            left: 0;
          }
          .navbar-toggle.open .bar:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
          }
          .navbar-toggle.open .bar:nth-child(2) {
            opacity: 0;
          }
          .navbar-toggle.open .bar:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
