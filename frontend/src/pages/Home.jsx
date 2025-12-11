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

/* Локальные изображения */
import capsulesImg from '../assets/capsules.png';
import hangarsImg from '../assets/Hangars.jpeg';
import garagesImg from '../assets/garages.jpeg';
import productionImg from '../assets/production.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1649587345666-0f4ad68aa723?q=85&fm=jpg",
    "https://images.unsplash.com/photo-1679430786992-8bb54d023e2f?q=85&fm=jpg",
    "https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?q=85&fm=jpg",
    "https://images.unsplash.com/photo-1655936072893-921e69ae9038?q=85&fm=jpg"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const directions = [
    {
      title: "Капсульные модульные дома",
      description: "Современные модульные здания для бизнеса и проживания.",
      link: "/capsules",
      image: capsulesImg
    },
    {
      title: "Ангары и склады",
      description: "Высокопрочные металлоконструкции промышленного назначения.",
      link: "/hangars",
      image: hangarsImg
    },
    {
      title: "Гаражи и навесы",
      description: "Надёжные ЛСТК конструкции для автомобилей и спецтехники.",
      link: "/garages",
      image: garagesImg
    }
  ];

  const advantages = [
    { icon: Clock, title: "Быстрый монтаж", desc: "Установка конструкции за 2–5 дней" },
    { icon: Shield, title: "Заводское качество", desc: "Современное оборудование и контроль" },
    { icon: Zap, title: "Высокая точность", desc: "Производство на ЧПУ-станках" },
    { icon: Award, title: "Гарантия", desc: "Полная гарантия на все изделия" },
    { icon: Truck, title: "Доставка", desc: "По всему Казахстану" },
    { icon: CheckCircle, title: "Сертификация", desc: "Нужные документы в наличии" }
  ];

  const documents = [
    { title: "Сертификат соответствия", file: "/documents" },
    { title: "Договор поставки", file: "/documents" },
    { title: "Реквизиты компании", file: "/documents" }
  ];

  const openWhatsApp = () => {
    const msg = encodeURIComponent("Здравствуйте! Интересуюсь продукцией Фабрика Каркасов Алатау.");
    window.open(`${siteConfig.social.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <div className="home-page">

      {/* ========================= HERO ========================= */}
      <section className="hero-section">
        <div className="hero-carousel">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">
              Производство ЛСТК<br />в Казахстане
            </h1>

            <p className="hero-subtitle">
              Капсулы, ангары, гаражи — современный промышленный стандарт
            </p>

            <button
              className="btn-primary"
              onClick={() => document.getElementById("directions").scrollIntoView({ behavior: "smooth" })}
            >
              Выбрать направление <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="hero-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* ========================= DIRECTIONS ========================= */}
      <section id="directions" className="directions-section">
        <div className="container">
          <h2 className="section-title">Выберите направление</h2>

          <div className="directions-grid">
            {directions.map((item, index) => (
              <Link key={index} to={item.link} className="direction-card-link">
                <div className="direction-card">
                  <div
                    className="direction-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="direction-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="btn-secondary">
                      Подробнее <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= ADVANTAGES ========================= */}
      <section className="advantages-section">
        <div className="container">
          <h2 className="section-title">Почему ЛСТК от нашей фабрики</h2>

          <div className="advantages-grid">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="advantage-card">
                  <div className="advantage-icon">
                    <Icon size={28} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= PRODUCTION ========================= */}
      <section className="production-section">
        <div className="container">
          <div className="production-content">
            <div
              className="production-image"
              style={{ backgroundImage: `url(${productionImg})` }}
            />

            <div className="production-text">
              <h2>О производстве</h2>

              <p>
                Фабрика Каркасов Алатау — современный комплекс по производству  
                лёгких стальных конструкций с высокой точностью и надёжностью.
              </p>

              <p>
                Высокая геометрия достигается благодаря использованию
                профессионального ЧПУ оборудования.
              </p>

              <Link to="/about" className="btn-primary">
                Узнать больше <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= DOCUMENTS ========================= */}
      <section className="documents-teaser">
        <div className="container">
          <h2 className="section-title">Документы и сертификаты</h2>

          <div className="documents-grid">
            {documents.map((doc, index) => (
              <div key={index} className="document-card">
                <div className="document-icon">
                  <svg width="40" height="40" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <h3>{doc.title}</h3>
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

      {/* ========================= CONTACT ========================= */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Свяжитесь с нами</h2>
              <p>Поможем подобрать оптимальное решение под вашу задачу.</p>

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

              <button className="btn-primary" onClick={openWhatsApp}>
                Написать в WhatsApp
              </button>
            </div>

            <div className="contact-map">
              <iframe
                title="map"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "16px" }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${siteConfig.location.lat},${siteConfig.location.lng}&hl=ru&z=14&output=embed`}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
