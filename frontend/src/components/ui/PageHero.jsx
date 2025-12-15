import React from 'react';
import './PageHero.css';

const PageHero = ({ title, subtitle, meta = 'Industrial Premium • ЛСТК', image }) => {
  return (
    <section className="page-hero">
      <div className="page-hero__backdrop" style={image ? { backgroundImage: `url(${image})` } : {}} />
      <div className="page-hero__noise" />
      <div className="container page-hero__content">
        <div className="page-hero__meta">{meta}</div>
        <h1 className="display-md">{title}</h1>
        {subtitle && <p className="body-lg">{subtitle}</p>}
        <div className="page-hero__divider" />
      </div>
    </section>
  );
};

export default PageHero;
