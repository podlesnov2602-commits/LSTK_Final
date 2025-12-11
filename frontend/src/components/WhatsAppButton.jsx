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
    const message = encodeURIComponent('Здравствуйте! Хочу получить консультацию по продукции Фабрика Каркасов Алатау');
    window.open(`${siteConfig.social.whatsapp}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`whatsapp-float ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <button className="whatsapp-float-btn" onClick={handleClick}>
        <MessageCircle size={28} />
        {isExpanded && (
          <span className="whatsapp-float-text">Написать в WhatsApp</span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
