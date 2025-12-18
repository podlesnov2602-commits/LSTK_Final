import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const catalogLabels = {
    '/capsules': 'Капсулы',
    '/hangars': 'Ангары',
    '/garages': 'Гаражи'
  };

  const isCatalogPage = Object.keys(catalogLabels).some((path) => location.pathname.startsWith(path));
  const currentCatalog = Object.entries(catalogLabels).find(([path]) => location.pathname.startsWith(path))?.[1];

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
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
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
              <div className="mobile-menu-card">
                {/* Крестик мобильного меню */}
                {mobileMenuOpen && (
                  <button
                    className="mobile-close-btn"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Закрыть меню"
                  >
                    <X size={32} />
                  </button>
                )}

                <div className="nav-links">
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
                </div>

                {isCatalogPage && (
                  <div className="catalog-indicator" aria-label="Вы в каталоге">
                    <span className="catalog-dot" />
                    <div className="catalog-meta">
                      <span className="catalog-label">Каталог</span>
                      <span className="catalog-current">{currentCatalog || 'Раздел продукции'}</span>
                    </div>
                  </div>
                )}

                <div className="mobile-contacts">
                  <p className="mobile-contacts__caption">Свяжитесь с нами</p>
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="phone-link mobile-menu-phone"
                  >
                    <Phone size={20} />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </div>
              </div>
            </nav>

            {/* Кнопка телефона */}
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="phone-link">
              <Phone size={20} />
              <span>{siteConfig.contact.phone}</span>
            </a>

            {/* Компактная кнопка звонка для мобилы */}
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="phone-icon-button" aria-label="Позвонить">
              <Phone size={18} />
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
        <div className="mobile-menu-overlay" />
      )}
    </>
  );
};

export default Header;
