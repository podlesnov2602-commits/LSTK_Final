import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (window.innerWidth <= 768 && !isExpanded) {
      setIsExpanded(true);
      return;
    }

    const message = encodeURIComponent('Здравствуйте! Хочу получить консультацию по продукции Фабрика Каркасов Алатау');
    window.open(`${siteConfig.social.whatsapp}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className={`whatsapp-float ${isExpanded ? 'expanded' : ''}`} onMouseEnter={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)}>
      <button className="whatsapp-float-btn" onClick={handleClick} aria-label="Написать в WhatsApp">
        <div className="whatsapp-icon-wrap">
          <MessageCircle size={24} />
        </div>
        {isExpanded && (
          <div className="whatsapp-labels">
            <span className="whatsapp-float-text">Написать в WhatsApp</span>
            <span className="whatsapp-float-sub">Ответим в течение 15 минут</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
