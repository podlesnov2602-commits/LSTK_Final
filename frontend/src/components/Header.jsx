import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Главная' },
    { path: '#premium-directions', label: 'Каталог', isAnchor: true },
    { path: '/about', label: 'О нас' },
    { path: '/documents', label: 'Документы' },
    { path: '/contacts', label: 'Контакты' }
  ];

  const handleNavClick = (item) => {
    if (item.isAnchor) {
      const anchorId = 'premium-directions';

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(anchorId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        const element = document.getElementById(anchorId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header-content">

            {/* Логотип */}
            <Link to="/" className="logo">
              <img 
                src={siteConfig.company.logo} 
                alt={siteConfig.company.name} 
                className="logo-icon" 
              />
            </Link>

            {/* Навигация */}
            <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>

              {/* Крестик мобильного меню */}
              {mobileMenuOpen && (
                <button 
                  className="mobile-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={32} />
                </button>
              )}

              {menuItems.map((item) =>
                item.isAnchor ? (
                  <button
                    key={item.path}
                    className="nav-link"
                    onClick={() => handleNavClick(item)}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Кнопка телефона */}
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="phone-link">
              <Phone size={20} />
              <span>{siteConfig.contact.phone}</span>
            </a>

            {/* Бургер */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </header>

      {/* Затемнение фона при открытом меню */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
