import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Clock, Award, Truck, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './Home.css';

const Home = () => {
  const directions = [
    {
      title: 'Капсулы',
      description: 'Модульные конструкции для жилья, офисов и бизнеса',
      link: '/capsules',
      image: 'https://images.unsplash.com/photo-1623731389652-079c8732ed34?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzY0MzIzODU5fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Ангары',
      description: 'Промышленные ангары и складские помещения',
      link: '/hangars',
      image: 'https://images.unsplash.com/photo-1679068215572-e4ba8fdce4dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Гаражи',
      description: 'Надёжные металлические гаражи и боксы',
      link: '/garages',
      image: 'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85'
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'Быстрый монтаж',
      description: 'Установка конструкции за 2-5 дней'
    },
    {
      icon: Shield,
      title: 'Заводское качество',
      description: 'Современное оборудование и контроль'
    },
    {
      icon: Zap,
      title: 'Точная геометрия',
      description: 'Прецизионное производство на станках ЧПУ'
    },
    {
      icon: Award,
      title: 'Гарантия',
      description: 'Полная гарантия на все изделия'
    },
    {
      icon: Truck,
      title: 'Доставка',
      description: 'По всему Казахстану'
    },
    {
      icon: CheckCircle,
      title: 'Сертификация',
      description: 'Все необходимые документы'
    }
  ];

  const documents = [
    { title: 'Сертификат соответствия', file: '#' },
    { title: 'Договор поставки', file: '#' },
    { title: 'Реквизиты компании', file: '#' }
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Здравствуйте! Интересуюсь продукцией Фабрика Каркасов Алатау');
    window.open(`${siteConfig.social.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title display-lg">
                Производство ЛСТК<br />в Казахстане
              </h1>
              <p className="hero-subtitle body-lg">
                Капсулы, ангары, гаражи — быстро, надёжно, заводское качество
              </p>
              <button className="btn-primary" onClick={() => document.getElementById('directions').scrollIntoView({ behavior: 'smooth' })}>
                Выбрать направление
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="directions-section">
        <div className="container">
          <h2 className="section-title display-md">Выберите направление</h2>
          <div className="directions-grid">
            {directions.map((direction, index) => (
              <div key={index} className="direction-card">
                <div className="direction-image" style={{ backgroundImage: `url(${direction.image})` }} />
                <div className="direction-content">
                  <h3 className="h2">{direction.title}</h3>
                  <p className="body-md">{direction.description}</p>
                  <Link to={direction.link} className="btn-primary">
                    Подробнее
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages-section">
        <div className="container">
          <h2 className="section-title display-md">Почему ЛСТК от нашей фабрики</h2>
          <div className="advantages-grid">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="advantage-card">
                  <div className="advantage-icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="h3">{advantage.title}</h3>
                  <p className="body-md">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section className="production-section">
        <div className="container">
          <div className="production-content">
            <div className="production-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1496247749665-49cf5b1022e9)' }} />
            <div className="production-text">
              <h2 className="display-sm">О производстве</h2>
              <p className="body-lg">
                Фабрика Каркасов Алатау — современное производство легких стальных тонкостенных конструкций в Казахстане.
              </p>
              <p className="body-lg">
                Мы используем высокоточное оборудование и качественные материалы, что позволяет создавать надёжные и долговечные конструкции.
              </p>
              <Link to="/about" className="btn-primary">
                Узнать больше
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Teaser */}
      <section className="documents-teaser">
        <div className="container">
          <h2 className="section-title display-md">Документы и сертификаты</h2>
          <div className="documents-grid">
            {documents.map((doc, index) => (
              <div key={index} className="document-card">
                <div className="document-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <h3 className="h3">{doc.title}</h3>
              </div>
            ))}
          </div>
          <div className="documents-cta">
            <Link to="/documents" className="btn-secondary">
              Перейти в раздел документов
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="display-sm">Свяжитесь с нами</h2>
              <p className="body-lg">
                Готовы ответить на ваши вопросы и предоставить подробную консультацию.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Телефон:</strong> {siteConfig.contact.phone}
                </div>
                <div className="contact-item">
                  <strong>Адрес:</strong> {siteConfig.contact.address}
                </div>
                <div className="contact-item">
                  <strong>Режим работы:</strong> {siteConfig.contact.workingHours}
                </div>
              </div>
              <button className="btn-primary" onClick={handleWhatsAppContact}>
                Написать в WhatsApp
              </button>
            </div>
            <div className="contact-map">
              <iframe
                title="Location Map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.2524871691937!2d${siteConfig.location.lng}!3d${siteConfig.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDEzJzE5LjIiTiA3NsKwNTEnMDQuMyJF!5e0!3m2!1sen!2skz!4v1234567890123!5m2!1sen!2skz`}
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
