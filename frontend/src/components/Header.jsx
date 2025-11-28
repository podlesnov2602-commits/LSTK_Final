import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Главная' },
    { 
      path: '#', 
      label: 'Каталог',
      isDropdown: true,
      subMenu: [
        { path: '/capsules', label: 'Капсулы' },
        { path: '/hangars', label: 'Ангары' },
        { path: '/garages', label: 'Гаражи' }
      ]
    },
    { path: '/about', label: 'О нас' },
    { path: '/documents', label: 'Документы' },
    { path: '/contacts', label: 'Контакты' }
  ];

  const handleWhatsAppClick = () => {
    window.open(siteConfig.social.whatsapp, '_blank');
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-text">{siteConfig.company.name}</span>
          </Link>

          <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {menuItems.map((item, index) => (
              item.isDropdown ? (
                <div 
                  key={index}
                  className="nav-dropdown"
                  onMouseEnter={() => setCatalogOpen(true)}
                  onMouseLeave={() => setCatalogOpen(false)}
                >
                  <button className="nav-link dropdown-toggle">
                    {item.label}
                    <ChevronDown size={16} />
                  </button>
                  {catalogOpen && (
                    <div className="dropdown-menu">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="dropdown-item"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
            ))}
          </nav>

          <button className="btn-primary whatsapp-btn" onClick={handleWhatsAppClick}>
            <Phone size={18} />
            {siteConfig.contact.phone}
          </button>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
