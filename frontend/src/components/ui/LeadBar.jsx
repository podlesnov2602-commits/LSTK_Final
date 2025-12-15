import React from 'react';
import './LeadBar.css';

const LeadBar = ({ title, description, primaryAction, secondaryAction }) => {
  return (
    <section className="leadbar-shell">
      <div className="container">
        <div className="leadbar card-base">
          <div className="leadbar__text">
            <div className="label-chip">Поддержка</div>
            <h2 className="display-sm">{title}</h2>
            <p className="body-lg">{description}</p>
          </div>
          <div className="leadbar__actions">
            <button className="btn-primary" onClick={primaryAction}>Написать в WhatsApp</button>
            <button className="btn-secondary" onClick={secondaryAction}>Получить КП на почту</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadBar;
