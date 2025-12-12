import React from 'react';
import { Check } from 'lucide-react';
import './PricingCards.css';
import SectionHeader from './SectionHeader';

const PricingCards = ({ title, subtitle, items, footnote }) => {
  return (
    <section className="pricing-shell section-shell subtle-grid">
      <div className="container">
        <SectionHeader title={title} subtitle={subtitle} eyebrow="Стоимость" />
        <div className="pricing-grid">
          {items.map((item, index) => (
            <article key={index} className="pricing-card card-base">
              <div className="pricing-card__top">
                <div>
                  <p className="pricing-meta">{item.meta}</p>
                  <h3 className="h2">{item.title}</h3>
                </div>
                <div className="pricing-price">{item.price}</div>
              </div>
              {item.badge && <div className="pricing-badge">{item.badge}</div>}
              <p className="body-md">{item.description}</p>
              <div className="pricing-markers">
                {item.markers.map((marker, idx) => (
                  <div key={idx} className="pricing-marker">
                    <Check size={16} />
                    <span>{marker}</span>
                  </div>
                ))}
              </div>
              <p className="pricing-hint">Цена ориентировочная</p>
            </article>
          ))}
        </div>
        {footnote && <p className="pricing-footnote body-md">{footnote}</p>}
      </div>
    </section>
  );
};

export default PricingCards;
