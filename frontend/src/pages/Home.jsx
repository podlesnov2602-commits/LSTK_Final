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
  Building2
} from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import SectionHeader from '../components/ui/SectionHeader';
import './Home.css';

import capsulesImg from '../assets/capsules.png';
import hangarsImg from '../assets/Hangars.jpeg';
import garagesImg from '../assets/garages.jpeg';
import productionImg from '../assets/production.jpg';
import factoryDiagram from '../assets/factory-diagram.svg';

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
      audience: 'Для частных и коммерческих проектов',
      image: capsulesImg,
      link: '/capsules'
    },
    {
      title: 'Ангары и склады',
      description: 'Индустриальные решения с высоким ресурсом и идеальной геометрией ЛСТК.',
      audience: 'Для складов, производств и логистики',
      image: hangarsImg,
      link: '/hangars'
    },
    {
      title: 'Гаражи и навесы',
      description: 'Элегантные и надёжные конструкции для автомобилей и спецтехники.',
      audience: 'Для бизнеса и частных участков',
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

  const productionStats = [
    'Производство: X м²/мес — вставить фактические данные',
    'Срок изготовления: от X дней — вставить фактические данные',
    'Толщины/профиль: X–X мм — вставить фактические данные',
    'География: Алматы / Казахстан'
  ];

  const documents = [
    { title: 'Сертификат соответствия', file: '/documents', result: 'Ускоряет согласование' },
    { title: 'Договор поставки', file: '/documents', result: 'Снижает риски для заказчика' },
    { title: 'Реквизиты компании', file: '/documents', result: 'Подходит для закупок/тендеров' }
  ];

  const trustReasons = [
    'Заводская точность и контроль качества',
    'Понятная смета и спецификация',
    'ЛСТК-геометрия без “сюрпризов” на монтаже',
    'Документы и готовность к тендерам'
  ];

  const heroBadges = [
    'X+ лет опыта',
    'X+ объектов',
    'Сроки по договору / контроль качества'
  ];

  const openWhatsApp = (message) => {
    const defaultMsg = 'Здравствуйте! Интересуюсь металлоконструкциями Фабрика Каркасов Алатау.';
    const msg = encodeURIComponent(message || defaultMsg);
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
        <div className="hero-vignette" />

        <div className="container hero-inner">
          <div className="hero-badge">Industrial premium • ЛСТК</div>
          <h1 className="hero-title">
            <span className="hero-word steel">Стальные</span>
            <span className="hero-word accent">решения</span>
            <span className="hero-word subtitle-line">для масштабных проектов</span>
          </h1>
          <p className="hero-positioning">ЛСТК-конструкции под ключ: расчёт, производство, доставка и монтаж по Казахстану</p>
          <p className="hero-subtitle">
            Заводские металлокаркасы с инженерным контролем: точная геометрия, прогнозируемые сроки и эстетика без компромиссов.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => openWhatsApp('Хочу получить расчёт и КП по ЛСТК-проекту.')}>
              Получить расчёт и КП <ArrowRight size={20} />
            </button>
          </div>

          <div className="hero-meta">
            <div className="hero-meta__note">Ответим в течение 15 минут в рабочее время</div>
            <div className="hero-trust">
              {heroBadges.map((item, idx) => (
                <div key={idx} className="hero-trust-card">
                  <CheckCircle2 size={18} /> {item}
                </div>
              ))}
            </div>
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

      <section className="trust-section">
        <div className="container">
          <SectionHeader
            eyebrow="Почему нам доверяют"
            title="Закрываем ключевые риски на старте"
            subtitle="Показываем прозрачные цифры, геометрию и документы, чтобы монтаж проходил без остановок."
          />
          <div className="trust-grid">
            {trustReasons.map((item, index) => (
              <div key={index} className="trust-card">
                <CheckCircle2 size={18} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="premium-directions" className="directions-section">
        <div className="container">
          <SectionHeader
            eyebrow="Линейка решений"
            title="КАТЕГОРИИ"
            subtitle="От модульных капсул до масштабных ангаров — каждая конструкция создаётся с акцентом на эстетику, долговечность и точность геометрии."
          />

          <div className="directions-grid">
            {categories.map((item, index) => (
              <Link key={index} to={item.link} className={`direction-card ${index === 0 ? 'featured-card' : ''}`}>
                <div className="direction-image" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="direction-body">
                  <div className="direction-top">
                    <h3>{item.title}</h3>
                    <ArrowRight size={18} />
                  </div>
                  <p className="direction-audience">{item.audience}</p>
                  <p>{item.description}</p>
                  <div className="direction-actions">
                    <span className="btn-primary ghost">Подробнее</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="aesthetic-section">
        <div className="container">
          <SectionHeader
            eyebrow="Премиальный стандарт"
            title="Архитектурная эстетика и технологичность"
            subtitle="Мы объединяем инженерную точность ЛСТК с дизайнерским подходом: строгие формы, акцентные линии и комфорт для повседневной эксплуатации."
          />

          <div className="aesthetic-grid">
            <div className="factory-card">
              <div className="factory-layer">
                <div className="factory-badge">
                  <Sparkles size={16} /> Фабрика Каркасов Алатау
                </div>
                <h3>Технологичная фабрика полного цикла</h3>
                <p>
                  От проектирования до монтажа — управляем всей цепочкой, чтобы сохранить точную геометрию ЛСТК и сроки, закреплённые в договоре.
                </p>

                <div className="factory-stats">
                  {productionStats.map((item, idx) => (
                    <div key={idx} className="stat-pill">
                      <Timer size={16} /> {item}
                    </div>
                  ))}
                </div>

                <div className="factory-body">
                  <div className="production-highlights">
                    {productionHighlights.map((item, index) => (
                      <div key={index} className="highlight-item">
                        <CheckCircle2 size={18} /> {item}
                      </div>
                    ))}
                  </div>

                  <div className="factory-visual">
                    <div className="visual-frame">
                      <img src={factoryDiagram} alt="Схема потоков фабрики от расчёта до монтажа" />
                      <div className="visual-caption">Реальный поток работ: расчёт → ЧПУ → сборка → контроль → монтаж</div>
                    </div>
                  </div>
                </div>

                <Link to="/about" className="btn-primary factory-action">
                  Как мы производим <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="premium-quad">
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
        </div>
      </section>

      <section className="documents-section">
        <div className="container">
          <SectionHeader
            eyebrow="Документы"
            title="Прозрачность и готовность к тендерам"
            subtitle="Предоставляем пакет документов по запросу — для тендеров и закупок"
          />

          <div className="documents-grid">
            {documents.map((doc, index) => (
              <div key={index} className="document-card">
                <Building2 size={28} />
                <h3>{doc.title}</h3>
                <span className="document-result">{doc.result}</span>
              </div>
            ))}
          </div>

          <div className="documents-cta">
            <Link to="/documents" className="btn-primary">
              Смотреть все документы <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-card">
            <SectionHeader
              eyebrow="Контакты"
              title="Обсудим ваш проект"
              subtitle="Ответим в течение рабочего дня и предложим готовые решения под ваши задачи."
            />

            <div className="contact-badges">
              <span className="contact-badge">Инженер на связи</span>
              <span className="contact-response">Ответ в течение 15 минут</span>
            </div>

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
              <button className="btn-primary contact-whatsapp" onClick={() => openWhatsApp('Хочу получить расчёт и КП по проекту.')}>
                Получить расчёт и КП
              </button>
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
