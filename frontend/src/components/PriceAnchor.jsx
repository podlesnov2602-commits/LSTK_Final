import React from 'react';
import './PriceAnchor.css';

const PriceAnchor = ({ title, subtitle, cards }) => {
  return (
    <section className="price-anchor-section">
      <div className="container">
        <div className="price-anchor-header">
          <h2 className="price-anchor-title">{title}</h2>
          {subtitle && <p className="price-anchor-subtitle">{subtitle}</p>}
        </div>

        <div className="price-anchor-grid">
          {cards.map((card, index) => (
            <div className="price-anchor-card" key={index}>
              <div className="price-anchor-top">
                <span className="price-anchor-size">{card.title}</span>
                <div className="price-anchor-price">{card.price}</div>
              </div>
              <p className="price-anchor-note">{card.note}</p>
              <div className="price-anchor-markers">
                {card.markers.map((marker, markerIndex) => (
                  <span className="price-anchor-marker" key={markerIndex}>
                    {marker}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceAnchor;
