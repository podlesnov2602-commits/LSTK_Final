import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">
              <img src={siteConfig.company.logo} alt={siteConfig.company.name} className="footer-logo-icon" />
              <h3 className="footer-title">{siteConfig.company.name}</h3>
            </div>
            <p className="footer-description">
              {siteConfig.company.description}
            </p>
            <div className="footer-social">
              <a href={siteConfig.social.instagram} className="footer-social-link" target="_blank" rel="noopener noreferrer">
                <Instagram size={22} />
              </a>
              <a href={siteConfig.social.facebook} className="footer-social-link" target="_blank" rel="noopener noreferrer">
                <Facebook size={22} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Продукция</h4>
            <nav className="footer-nav">
              <Link to="/capsules" className="footer-link">Капсулы</Link>
              <Link to="/hangars" className="footer-link">Ангары</Link>
              <Link to="/garages" className="footer-link">Гаражи</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Компания</h4>
            <nav className="footer-nav">
              <Link to="/about" className="footer-link">О нас</Link>
              <Link to="/documents" className="footer-link">Документы</Link>
              <Link to="/contacts" className="footer-link">Контакты</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Контакты</h4>
            <div className="footer-contact">
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="footer-contact-item">
                <Phone size={16} />
                {siteConfig.contact.phone}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="footer-contact-item">
                <Mail size={16} />
                {siteConfig.contact.email}
              </a>
              <div className="footer-contact-item">
                <MapPin size={16} />
                {siteConfig.contact.address}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 {siteConfig.company.name}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
