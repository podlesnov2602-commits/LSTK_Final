import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, eyebrow }) => {
  return (
    <div className="section-header">
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      <div className="section-title-row">
        <h2 className="display-sm">{title}</h2>
        <div className="section-title-line" />
      </div>
      {subtitle && <p className="body-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
