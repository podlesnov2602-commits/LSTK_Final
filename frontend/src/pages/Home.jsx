import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Award,
  Truck,
  CheckCircle
} from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import './Home.css';

// Изображения
import capsulesImg from '../assets/capsules.png';
import hangarsImg from '../assets/Hangars.jpeg';
import garagesImg from '../assets/garages.jpeg';
import productionImg from '../assets/production.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1649587345666-0f4ad68aa723?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1739599211500-74e04a9ca175?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1679430786992-8bb54d023e2f?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1655936072893-921e69ae9038?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=srgb&fm=jpg&q=85'
  ];

  // Автосмена слайдов
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const directions = [
    {
      title: 'Капсулы-модульные дома',
      description: 'Модульные конструкции для жилья, офисов и бизнеса',
      link: '/capsules',
      image: capsulesImg
    },
    {
      title: 'Ангары',
      description: 'Промышленные ангары и складские помещения',
      link: '/hangars',
      image: hangarsImg
    },
    {
      title: 'Гаражи-навесы',
      description: 'Надёжные металлические гаражи и боксы',
      link: '/garages',
      image: garagesImg
    }
  ];

  const advantages = [
    { icon: Clock, title: 'Быстрый монтаж', description: 'Установка конструкции за 2–5 дней' },
    { icon: Shield, title: 'Заводское качество', description: 'Современное оборудование и контроль' },
    { icon: Zap, title: 'Точная геометрия', description: 'Прецизионное производство на ЧПУ' },
    { icon: Award, title: 'Гарантия', description: 'Полная гарантия на все изделия' },
    { icon: Truck, title: 'Доставка', description: 'По всему Казахстану' },
    { icon: CheckCircle, title: 'Сертификация', description: 'Все необходимые документы' }
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

      {/* ================= HERO ================= */}
      <section className="hero-section">

        {/* Фоновые слайды */}
        <div className="hero-carousel">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`hero-slide ${i === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="hero-overlay" />

        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Производство ЛСТК<br />в Казахстане
              </h1>

              <p className="hero-subtitle">
                Капсулы, ангары, гаражи — быстро, надёжно, заводское качество
              </p>

              <button
                className="btn-primary"
                onClick={() =>
                  document.getElementById('directions').scrollIntoView({ behavior: 'smooth' })
                }
              >
                Выбрать направление
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Индикаторы */}
        <div className="hero-indicators">
          {heroImages.map((_, i) => (
            <button
              key={i}
              className={`hero-indicator ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </section>

      {/* ================= DIRECTIONS ================= */}
      <section id="directions" className="directions-section">
        <div className="container">
          <h2 className="section-title display-md">Выберите направление</h2>

          <div className="directions-grid">
            {directions.map((item, i) => (
              <Link key={i} to={item.link} className="direction-card-link">
                <div className="direction-card">
                  <div
                    className="direction-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="direction-content">
                    <h3 className="h2">{item.title}</h3>
                    <p className="body-md">{item.description}</p>

                    <span className="btn-primary">
                      Подробнее <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section className="advantages-section">
        <div className="container">
          <h2 className="section-title display-md">Почему ЛСТК от нашей фабрики</h2>

          <div className="advantages-grid">
            {advantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="advantage-card">
                  <div className="advantage-icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="h3">{item.title}</h3>
                  <p className="body-md">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTION ================= */}
      <section className="production-section">
        <div className="container">
          <div className="production-content">

            <div
              className="production-image"
              style={{ backgroundImage: `url(${productionImg})` }}
            />

            <div className="production-text">
              <h2 className="display-sm">О производстве</h2>

              <p className="body-lg">
                Фабрика Каркасов Алатау — современное производство лёгких стальных тонкостенных конструкций.
              </p>

              <p className="body-lg">
                Используем высокоточное оборудование и строгий контроль качества.
              </p>

              <Link to="/about" className="btn-primary">
                Узнать больше <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOCUMENTS ================= */}
      <section className="documents-teaser">
        <div className="container">
          <h2 className="section-title display-md">Документы и сертификаты</h2>

          <div className="documents-grid">
            {documents.map((doc, i) => (
              <div key={i} className="document-card">
                <div className="document-icon">
                  <svg width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none">
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
              Перейти в раздел документов <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">

            <div className="contact-info">
              <h2 className="display-sm">Свяжитесь с нами</h2>

              <p className="body-lg">
                Готовы ответить на ваши вопросы и помочь с выбором конструкции.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <strong>Телефон:</strong>
                  {siteConfig.contact.phone}
                </div>

                <div className="contact-item">
                  <strong>Адрес:</strong>
                  {siteConfig.contact.address}
                </div>

                <div className="contact-item">
                  <strong>Режим работы:</strong>
                  {siteConfig.contact.workingHours}
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
                loading="lazy"
                allowFullScreen
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
