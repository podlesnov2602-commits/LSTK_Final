import React from 'react';
import './LeadCTA.css';

const LeadCTA = ({ title, text, guarantee, primaryLabel, primaryAction, secondaryLabel, secondaryAction }) => {
  return (
    <section className="lead-cta-section">
      <div className="container">
        <div className="lead-cta-card card-surface subtle-grid">
          <div className="lead-cta-text">
            <h2>{title}</h2>
            <p>{text}</p>
            {guarantee && <div className="lead-cta-guarantee">{guarantee}</div>}
          </div>
          <div className="lead-cta-actions">
            <button type="button" className="btn-primary" onClick={primaryAction}>
              {primaryLabel}
            </button>
            {secondaryLabel && (
              <button type="button" className="btn-secondary" onClick={secondaryAction}>
                {secondaryLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCTA;
