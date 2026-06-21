import React, { useState } from 'react';

function LeadFormModal({ isOpen, onClose, bookTitle }) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      // Post lead to Google Sheet Web App API
      fetch("https://script.google.com/macros/s/AKfycbybNggaJltC0EaS1ci11nJN_uWn6yMygFUCTvxgfsRh2EVy0wFqiPHOc7oG3vVs57rk4g/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          source: `Book Download: ${bookTitle}`
        })
      }).catch(err => console.error("Sheets capture error:", err));

      // Save lead locally as backup/audit trail
      const localLeads = JSON.parse(localStorage.getItem('download_leads') || '[]');
      localLeads.push({
        ...formData,
        bookTitle,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('download_leads', JSON.stringify(localLeads));
      setDownloadStarted(true);

      // Simulate file download
      const link = document.createElement('a');
      link.href = `/files/${bookTitle.replace(/\s+/g, '_')}_Sample.pdf`;
      link.setAttribute('download', `${bookTitle.replace(/\s+/g, '_')}_Sample.pdf`);
      document.body.appendChild(link);
      
      // Wait a tiny bit and alert / mock download
      setTimeout(() => {
        alert(`Downloading free sample for "${bookTitle}"...\nThank you, ${formData.name}!`);
        onClose();
        setDownloadStarted(false);
        setFormData({ name: '', email: '' });
      }, 500);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3 className="modal-title">Get Free Sample Chapters</h3>
        <p className="modal-subtitle">Enter your name and email to download your sample copy of <strong>{bookTitle}</strong></p>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="modal-form-group">
            <label className="modal-label">Your Name</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="modal-input" 
              placeholder="e.g. John Doe"
              required 
            />
          </div>
          <div className="modal-form-group">
            <label className="modal-label">Email Address</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="modal-input" 
              placeholder="e.g. john@example.com"
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary modal-submit-btn" disabled={downloadStarted}>
            {downloadStarted ? 'Preparing Download...' : 'Download Sample Chapter'}
          </button>
        </form>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(5, 9, 57, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(5px);
          animation: fadeInOverlay 0.3s ease-out forwards;
        }
        .modal-content {
          background-color: var(--color-white);
          border-radius: 4px;
          padding: 3rem;
          width: 90%;
          max-width: 500px;
          position: relative;
          box-shadow: var(--shadow-premium);
          border-top: 5px solid var(--color-secondary);
          animation: slideUpContent 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .modal-close {
          position: absolute;
          top: 15px;
          right: 20px;
          font-size: 2rem;
          color: var(--color-primary);
          transition: var(--transition-smooth);
        }
        .modal-close:hover {
          color: var(--color-secondary);
        }
        .modal-title {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .modal-subtitle {
          text-align: center;
          margin-bottom: 2rem;
          color: var(--color-text-dark);
          opacity: 0.85;
          font-size: 0.95rem;
        }
        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .modal-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .modal-label {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--color-primary-light);
        }
        .modal-input {
          padding: 0.9rem 1.2rem;
          border-radius: 4px;
          border: 1px solid var(--color-bg-gray);
          font-size: 1rem;
          outline: none;
          transition: var(--transition-smooth);
        }
        .modal-input:focus {
          border-color: var(--color-secondary);
          box-shadow: 0 0 0 3px var(--color-secondary-fade);
        }
        .modal-submit-btn {
          width: 100%;
          margin-top: 0.5rem;
          padding: 1rem !important;
        }
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUpContent {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 600px) {
          .modal-content {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default LeadFormModal;
