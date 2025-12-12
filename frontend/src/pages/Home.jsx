import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Gem,
  Layers,
  ShieldCheck,
  Sparkles,
  Timer,
  Building2,
  PhoneCall
} from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import './Home.css';

import capsulesImg from '../assets/capsules.png';
import hangarsImg from '../assets/Hangars.jpeg';
import garagesImg from '../assets/garages.jpeg';
import productionImg from '../assets/production.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const heroImages = [
    `linear-gradient(120deg, rgba(11,17,16,0.86) 0%, rgba(12,24,21,0.9) 40%, rgba(14,162,115,0.22) 100%), url(${productionImg})`,
    `linear-gradient(115deg, rgba(11,17,16,0.9) 18%, rgba(12,24,21,0.92) 58%, rgba(14,162,115,0.18) 100%), url(${hangarsImg})`,
    `linear-gradient(120deg, rgba(11,17,16,0.88) 0%, rgba(12,24,21,0.9) 42%, rgba(14,162,115,0.2) 100%), url(${capsulesImg})`
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const categories = [
    {
      title: 'Капсульные модульные дома',
      description: 'Премиальные капсулы с панорамным остеклением и заводской чистотой сборки.',
      image: capsulesImg,
      link: '/capsules'
    },
    {
      title: 'Ангары и склады',
      description: 'Индустриальные решения с высоким ресурсом и идеальной геометрией ЛСТК.',
      image: hangarsImg,
      link: '/hangars'
    },
    {
      title: 'Гаражи и навесы',
      description: 'Элегантные и надёжные конструкции для автомобилей и спецтехники.',
      image: garagesImg,
      link: '/garages'
    }
  ];

  const premiumBenefits = [
    { icon: Gem, title: 'Премиальные материалы', text: 'Оцинкованный металл и профессиональные покрытия, созданные служить десятилетиями.' },
    { icon: Layers, title: 'Инженерная точность', text: 'Собственное производство на ЧПУ: каждая деталь безупречно повторяет проект.' },
    { icon: ShieldCheck, title: 'Гарантированная безопасность', text: 'Строгий контроль качества, соответствие нормативам и необходимые сертификаты.' },
    { icon: Timer, title: 'Сроки без компромиссов', text: 'Оптимизированная логистика и монтаж под ключ в заранее согласованные сроки.' }
  ];

  const productionHighlights = [
    'Единый стандарт качества от расчёта до монтажа',
    'Собственный инжиниринг и дизайн-поддержка проектов',
    'Полный пакет документов для коммерческих объектов',
    'Доставка и сервис по всему Казахстану'
  ];

  const documents = [
    { title: 'Сертификат соответствия', file: '/documents' },
    { title: 'Договор поставки', file: '/documents' },
    { title: 'Реквизиты компании', file: '/documents' }
  ];

  const openWhatsApp = () => {
    const msg = encodeURIComponent('Здравствуйте! Интересуюсь металлоконструкциями Фабрика Каркасов Алатау.');
    window.open(`${siteConfig.social.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-carousel">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: img }}
            />
          ))}
        </div>

        <div className="hero-overlay" />

        <div className="container hero-inner">
          <div className="hero-badge">Industrial premium • ЛСТК</div>
          <h1 className="hero-title">
            Стальные <span className="accent">решения</span>
            <span>для масштабных проектов</span>
          </h1>
          <p className="hero-subtitle">
            Заводские металлокаркасы, инженерный контроль на каждом этапе и архитектурная эстетика без компромиссов.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => document.getElementById('premium-directions').scrollIntoView({ behavior: 'smooth' })}
            >
              Запросить расчёт <ArrowRight size={20} />
            </button>
            <button className="btn-ghost" onClick={openWhatsApp}>
              Консультация <PhoneCall size={18} />
            </button>
          </div>

          <div className="hero-indicators">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="premium-directions" className="directions-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Линейка решений</p>
              <h2>Выберите формат металлоконструкции</h2>
            </div>
            <p className="section-lead">
              От модульных капсул до масштабных ангаров — каждая конструкция создаётся с акцентом на эстетику, долговечность и точность геометрии.
            </p>
          </div>

          <div className="directions-grid">
            {categories.map((item, index) => (
              <Link key={index} to={item.link} className={`direction-card ${index === 0 ? 'featured-card' : ''}`}>
                <div className="direction-image" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="direction-body">
                  <div className="direction-top">
                    <h3>{item.title}</h3>
                    <ArrowRight size={18} />
                  </div>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Премиальный стандарт</p>
              <h2>Архитектурная эстетика и технологичность</h2>
            </div>
            <p className="section-lead">
              Мы объединяем инженерную точность ЛСТК с дизайнерским подходом: строгие формы, акцентные линии и комфорт для повседневной эксплуатации.
            </p>
          </div>

          <div className="premium-grid">
            {premiumBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="premium-card">
                  <div className="premium-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="production-section">
        <div className="container production-grid">
          <div className="production-visual" style={{ backgroundImage: `url(${productionImg})` }}>
            <div className="production-overlay">
              <div className="production-badge">
                <Sparkles size={16} /> Инновационное производство
              </div>
              <div className="production-title">Фабрика Каркасов Алатау</div>
              <p>Современные линии и цифровой контроль качества на каждом этапе.</p>
            </div>
          </div>

          <div className="production-content">
            <h2>Технологичная фабрика полного цикла</h2>
            <p>
              От проектирования до монтажа — мы управляем всей цепочкой, гарантируя предсказуемые сроки и премиальное исполнение конструкций.
            </p>
            <div className="production-highlights">
              {productionHighlights.map((item, index) => (
                <div key={index} className="highlight-item">
                  <CheckCircle2 size={18} /> {item}
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary">
              Как мы производим <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="documents-section">
        <div className="container">
          <div className="documents-header">
            <div>
              <p className="eyebrow">Документы</p>
              <h2>Прозрачность и готовность к тендерам</h2>
            </div>
            <p className="section-lead">Все подтверждающие документы доступны онлайн и предоставляются по запросу.</p>
          </div>

          <div className="documents-grid">
            {documents.map((doc, index) => (
              <div key={index} className="document-card">
                <Building2 size={28} />
                <h3>{doc.title}</h3>
              </div>
            ))}
          </div>

          <div className="documents-cta">
            <Link to="/documents" className="btn-ghost">
              Смотреть все документы <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-card">
            <p className="eyebrow">Контакты</p>
            <h2>Обсудим ваш проект</h2>
            <p className="section-lead">Ответим в течение рабочего дня и предложим готовые решения под ваши задачи.</p>

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

            <div className="contact-actions">
              <button className="btn-primary" onClick={openWhatsApp}>
                WhatsApp — ответим в течение 15 минут
              </button>
              <Link to="/contacts" className="btn-ghost">
                Все контакты
              </Link>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="map"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '18px' }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${siteConfig.location.lat},${siteConfig.location.lng}&hl=ru&z=14&output=embed`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
