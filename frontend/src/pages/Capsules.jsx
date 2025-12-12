import React, { useEffect } from 'react';
import { Check, Ruler, Feather, Infinity, Move } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import PriceAnchor from '../components/PriceAnchor';
import LeadCTA from '../components/LeadCTA';
import './ProductPage.css';

// Локальные изображения
import img1 from '../assets/Capsules1.jpg';
import img2 from '../assets/Capsules2.jpg';
import img3 from '../assets/Capsules3.jpg';
import img4 from '../assets/Capsules4.jpg';
import img5 from '../assets/Capsules5.jpg';
import img6 from '../assets/Capsules6.jpg';

const Capsules = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const gallerySection = document.querySelector('.gallery-section');
      if (gallerySection) {
        const yOffset = -100;
        const y =
          gallerySection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const gallery = [
    { image: img1, caption: 'Капсула', usage: 'под аренду' },
    { image: img2, caption: 'БарнХаус', usage: 'под глэмпинг' },
    { image: img3, caption: 'Модульный дом 44м²', usage: 'офис продаж / ресепшн' },
    { image: img4, caption: 'Гостевой дом 29м²', usage: 'под глэмпинг' },
    { image: img5, caption: 'Модульный дом 29м²', usage: 'под аренду' },
    { image: img6, caption: 'Гостевой дом 48м²', usage: 'офис продаж / ресепшн' },
  ];

  const configurations = [
    {
      title: 'Каркас',
      subtitle: 'Металлический каркас ЛСТК',
      features: ['Профиль ЛСТК', 'Крепеж', 'Чертежи'],
      description: 'для тиража и самостоятельной отделки'
    },
    {
      title: 'Каркас + оболочка',
      subtitle: 'Каркас с внешней отделкой',
      features: ['Каркас ЛСТК', 'Сэндвич-панели', 'Кровля', 'Окна/двери'],
      description: 'быстрый запуск с гибкой начинкой'
    },
    {
      title: 'Готовая капсула',
      subtitle: 'Под ключ с отделкой',
      features: ['Каркас', 'Отделка', 'Коммуникации', 'Мебель'],
      description: 'под ключ, установка и запуск'
    }
  ];

  const advantages = [
    { icon: Infinity, title: 'Повторяемость и тираж' },
    { icon: Move, title: 'Стабильные сроки' },
    { icon: Ruler, title: 'Единый стандарт качества' },
    { icon: Feather, title: 'Производственный контроль' }
  ];

  const pricingCards = [
    {
      title: 'Капсула 18–24 м²',
      price: 'от 6.8 млн ₸',
      scenario: 'Глэмпинг / аренда — быстрый запуск без сложной инженерии',
      metric: 'Пролёт 3.4–3.8 м · площадь 18–24 м²',
      note: 'Базовая комплектация под сезон и межсезонье',
      markers: ['Тёплый контур + инженерия', 'Тираж для быстрой окупаемости', 'Монтаж за 2–5 дней']
    },
    {
      title: 'Капсула 29–32 м²',
      price: 'от 9.4 млн ₸',
      scenario: 'Офис продаж / премиальная аренда',
      metric: 'Пролёт 3.8–4.2 м · площадь 29–32 м²',
      note: 'Оптимальный баланс площади и отделки',
      markers: ['Панорамное остекление и отделка', 'Готовность к подключению', 'Подходит для круглогодичной эксплуатации']
    },
    {
      title: 'Модуль 44–48 м²',
      price: 'от 13.5 млн ₸',
      scenario: 'Ресепшн / офис / управляющая компания',
      metric: 'Пролёт 4.2–4.6 м · площадь 44–48 м²',
      note: 'Расширенная комплектация с инженерией',
      markers: ['Полный комплект инженерии', 'Свободная планировка под задачу', 'Поставим и запустим под ключ']
    }
  ];

  const steps = [
    { number: '01', title: 'Консультация', description: 'Обсуждаем ваши требования' },
    { number: '02', title: 'Проектирование', description: 'Создаём 3D-модель' },
    { number: '03', title: 'Производство', description: 'Изготовление на заводе' },
    { number: '04', title: 'Монтаж', description: 'Установка за 2–5 дней' }
  ];

  const handleCtaClick = () => {
    const message = encodeURIComponent('Запрос на расчёт: Капсулы — нужна консультация по проекту');
    window.open(`${siteConfig.social.whatsapp}?text=${message}`, '_blank');
  };

  const handleEmailRequest = () => {
    const subject = encodeURIComponent('КП по капсулам');
    const body = encodeURIComponent('Опишите сценарий (аренда/глэмпинг/офис) и желаемую комплектацию.');
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="product-page">

      {/* HERO */}
      <section className="product-hero capsules-hero">
        <div className="product-hero-overlay" />
        <div className="container">
          <div className="product-hero-content">
            <h1 className="display-lg">Капсулы</h1>
            <p className="body-lg">Модульные решения для бизнеса и инвестиций</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title display-md">Галерея проектов</h2>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div key={index} className="gallery-item-wrapper">
                <div
                  className="gallery-item"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <p className="gallery-caption">{item.caption}</p>
                <p className="gallery-usage">{item.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurations */}
      <section className="configurations-section">
        <div className="container">
          <h2 className="section-title display-md">Комплектации</h2>
          <div className="configurations-grid">
            {configurations.map((config, index) => (
              <div key={index} className="config-card">
                <h3 className="config-title">{config.title}</h3>
                <p className="config-subtitle">{config.subtitle}</p>
                <p className="config-description">{config.description}</p>
                <ul className="config-features">
                  {config.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages-section-product">
        <div className="container">
          <h2 className="section-title display-md">Преимущества</h2>
          <div className="advantages-grid-product">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <div key={index} className="advantage-card-product">
                  <div className="advantage-icon-circle">
                    <Icon size={24} className="advantage-icon" />
                  </div>
                  <h3>{adv.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PriceAnchor
        title="Цены"
        subtitle="Цены ориентировочные — считаем под комплектацию, тираж и сценарий использования"
        cards={pricingCards}
      />

      {/* Steps */}
      <section className="steps-section">
        <div className="container">
          <h2 className="section-title display-md">Как мы работаем</h2>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3 className="h3">{step.title}</h3>
                <p className="body-md">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadCTA
        title="Подобрать капсулу и рассчитать стоимость"
        text="Уточним сценарий (аренда/глэмпинг/офис) и комплектацию"
        primaryLabel="Написать в WhatsApp"
        primaryAction={handleCtaClick}
        secondaryLabel="Получить КП на почту"
        secondaryAction={handleEmailRequest}
      />

    </div>
  );
};

export default Capsules;
