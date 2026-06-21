import React from 'react';

function InkimForm() {
  return (
    <div className="inkim-form-page section-padding">
      <div className="container form-container text-center">
        <img src="/cla.svg" alt="Abstract Background Grid" className="form-bg" />
        <div className="form-card">
          <h2 className="form-title">Just 1 step away from your free copy!</h2>
          <p className="form-subtitle">Fill out the secure subscription form below to claim your free ebook copy of <strong>I Never Knew I Was Me</strong>.</p>
          <div className="iframe-wrapper">
            <iframe 
              src="https://sibforms.com/serve/MUIFAHT-6VfhRS73zZF-YVxIhN6r0gwHtieMK2W1kUMzzLso-4-GDqrDyKLPo6sfz9-EhtDxOvOqi9LrwK0zI64S9SnkTRDymSP4Tp0zxEeWi_1vEJE_Lh2pXdpNYcJTB6UiK1OxAnfrOxi6Pp9vWBacTe8S-nzKVViugRWaYkR1FYmo4nthsR3Btcaec6OWLTwVaUkQ0-y-6p3i" 
              allowFullScreen 
              title="Joy of Dee Form" 
              className="form-iframe"
            ></iframe>
          </div>
        </div>
      </div>

      <style>{`
        .inkim-form-page {
          background-color: var(--color-bg-light);
          min-height: 80vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .form-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.05;
          z-index: 1;
        }
        .form-container {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin: 0 auto;
        }
        .form-card {
          background-color: var(--color-white);
          border-radius: 15px;
          padding: 3rem;
          box-shadow: var(--shadow-premium);
          border-top: 5px solid var(--color-secondary);
        }
        .form-title {
          font-size: 2rem;
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        .form-subtitle {
          color: var(--color-text-dark);
          opacity: 0.8;
          margin-bottom: 2rem;
        }
        .iframe-wrapper {
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          background: #fdfdfd;
          border: 1px solid var(--color-bg-gray);
          height: 520px;
        }
        .form-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        @media (max-width: 600px) {
          .form-card {
            padding: 2rem 1rem;
          }
          .form-title {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
}

export default InkimForm;
