import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, eyebrow, level = 'h2' }) => {
  const HeadingTag = level;

  return (
    <div className="section-header">
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      <HeadingTag className="section-header__title">{title}</HeadingTag>
      {subtitle && <p className="section-header__subtitle body-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
