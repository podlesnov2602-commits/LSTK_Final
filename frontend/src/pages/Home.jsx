import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Award,
  Truck,
  CheckCircle,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './Home.css';

import capsulesImg from '../assets/capsules.png';
import hangarsImg from '../assets/Hangars.jpeg';
import garagesImg from '../assets/garages.jpeg';
import productionImg from '../assets/production.jpg';

const Home = () => {
  const directions = [
    {
      title: 'Капсульные модульные дома',
      description: 'Премиальные модульные решения для проживания, бизнеса и отдыха.',
      link: '/capsules',
      image: capsulesImg,
      meta: 'Модульные решения',
    },
    {
      title: 'Ангары и склады',
      description: 'Инженерные ЛСТК конструкции для промышленных и складских объектов.',
      link: '/hangars',
      image: hangarsImg,
      meta: 'Промышленные объекты',
    },
    {
      title: 'Гаражи и навесы',
      description: 'Надёжные металлические гаражи, навесы и каркасные решения.',
      link: '/garages',
      image: garagesImg,
      meta: 'Частные и коммерческие объекты',
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'Сжатые сроки',
      description: 'Производство и монтаж в среднем за 2–5 рабочих дней.',
    },
    {
      icon: Shield,
      title: 'Заводское качество',
      description: 'Современная линия ЛСТК и многоуровневый контроль.',
    },
    {
      icon: Zap,
      title: 'Точная геометрия',
      description: 'ЧПУ-оборудование и инженерные расчеты под объект.',
    },
    {
      icon: Award,
      title: 'Гарантия',
      description: 'Гарантийные обязательства на конструкции и монтаж.',
    },
    {
      icon: Truck,
      title: 'Логистика',
      description: 'Организуем доставку и разгрузку по всему Казахстану.',
    },
    {
      icon: CheckCircle,
      title: 'Сертификация',
      description: 'Сопроводительные документы, сертификаты и договорная база.',
    },
  ];

  const documents = [
    { title: 'Сертификат соответствия', file: '#' },
    { title: 'Типовой договор поставки', file: '#' },
    { title: 'Реквизиты фабрики', file: '#' },
  ];

  const handleScrollToDirections = () => {
    const el = document.getElementById('directions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContacts = () => {
    const el = document.getElementById('contacts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      'Здравствуйте! Интересуюсь продукцией Фабрики Каркасов Алатау по ЛСТК.'
    );
    window.open(`${siteConfig.social.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-content">
            {/* Левая колонка */}
            <div className="hero-left">
              <div className="hero-eyebrow">
                <span className="hero-dot" />
                <span>Фабрика Каркасов Алатау — ЛСТК инженерного уровня</span>
              </div>

              <h1 className="hero-title display-xl">
                Инженерные ЛСТК конструкции
                <br />
                для дома и промышленности
              </h1>

              <p className="hero-subtitle body-lg">
                Капсульные дома, ангары и гаражи из лёгких стальных конструкций. Заводская
                геометрия, точные сроки и полный комплект документов.
              </p>

              <div className="hero-cta">
                <button className="btn-primary" onClick={handleScrollToContacts}>
                  Получить предложение
                  <ArrowRight size={18} />
                </button>

                <button className="btn-secondary" onClick={handleScrollToDirections}>
                  Смотреть направления
                </button>
              </div>

              <div>
                <div className="hero-caption">Основные направления</div>
                <div className="hero-directions-list">
                  <span className="hero-pill">Капсульные модульные дома</span>
                  <span className="hero-pill">Ангары и склады</span>
                  <span className="hero-pill">Гаражи и навесы</span>
                </div>
              </div>
            </div>

            {/* Правая колонка */}
            <div className="hero-right">
              <div className="hero-panel">
                <div className="hero-metric-row">
                  <div className="hero-metric">
                    <div className="hero-metric-label">Опыт</div>
                    <div className="hero-metric-value">10+ лет</div>
                    <div className="hero-metric-note">проектирования и монтажа ЛСТК</div>
                  </div>
                  <div className="hero-metric">
                    <div className="hero-metric-label">География</div>
                    <div className="hero-metric-value">Казахстан</div>
                    <div className="hero-metric-note">поставка и монтаж по регионам</div>
                  </div>
                </div>

                <div className="hero-divider" />

                <div className="hero-list">
                  <div className="hero-list-item">
                    <span className="hero-list-bullet">●</span>
                    <span>
                      Заводское производство ЛСТК с использованием современного оборудования.
                    </span>
                  </div>
                  <div className="hero-list-item">
                    <span className="hero-list-bullet">●</span>
                    <span>
                      Конструкции под ключ — от инженерного расчёта до готового объекта.
                    </span>
                  </div>
                  <div className="hero-list-item">
                    <span className="hero-list-bullet">●</span>
                    <span>
                      Прозрачная смета, договор, график работ и комплект документов для сдачи.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section id="directions" className="directions-section">
        <div className="container">
          <h2 className="section-title display-md">Направления ЛСТК</h2>

          <div className="directions-grid">
            {directions.map((item, i) => (
              <Link key={i} to={item.link} className="direction-card-link">
                <div className="direction-card">
                  <div
                    className="direction-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="direction-content">
                    <div className="direction-meta">{item.meta}</div>
                    <h3 className="h2">{item.title}</h3>
                    <p className="body-md">{item.description}</p>
                    <div className="direction-cta">
                      Подробнее
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="advantages-section">
        <div className="container">
          <h2 className="section-title display-md">Почему выбирают нашу фабрику</h2>

          <div className="advantages-grid">
            {advantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="advantage-card">
                  <div className="advantage-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="h3">{item.title}</h3>
                  <p className="body-md">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTION */}
      <section className="production-section">
        <div className="container">
          <div className="production-content">
            <div
              className="production-image"
              style={{
                backgroundImage: `url(${productionImg})`,
              }}
            />
            <div className="production-text">
              <h2 className="display-sm">Производство ЛСТК под задачи объекта</h2>
              <p className="body-lg">
                Фабрика Каркасов Алатау — это производственная площадка, специализирующаяся
                на лёгких стальных тонкостенных конструкциях для частных и промышленных
                объектов.
              </p>
              <p className="body-lg">
                Используем инженерные расчёты, металлопрокат проверенных поставщиков и
                современное оборудование. Контролируем геометрию каждой партии, чтобы
                монтаж на площадке проходил максимально быстро и предсказуемо.
              </p>
              <Link to="/about" className="btn-primary">
                О фабрике
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="documents-teaser">
        <div className="container">
          <h2 className="section-title display-md">Документы и сопровождение</h2>

          <div className="documents-grid">
            {documents.map((doc, i) => (
              <div key={i} className="document-card">
                <div className="document-icon">
                  <svg
                    width="40"
                    height="40"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    fill="none"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <h3 className="h3">{doc.title}</h3>
              </div>
            ))}
          </div>

          <div className="documents-cta">
            <Link to="/documents" className="btn-secondary">
              Перейти в раздел документов
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacts" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="display-sm">Связаться с фабрикой</h2>
              <p className="body-lg">
                Расскажите, какой объект вы планируете — подберём решение из ЛСТК, подготовим
                ориентировочную смету и предложим оптимальную конфигурацию по срокам и бюджету.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <strong>Телефон</strong>
                  {siteConfig.contact.phone}
                </div>
                <div className="contact-item">
                  <strong>Адрес</strong>
                  {siteConfig.contact.address}
                </div>
                <div className="contact-item">
                  <strong>Режим работы</strong>
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
