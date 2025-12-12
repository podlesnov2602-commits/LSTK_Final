import React, { useEffect } from 'react';
import { Check, Ruler, Feather, Infinity, Move } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './ProductPage.css';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import PricingCards from '../components/ui/PricingCards';
import LeadBar from '../components/ui/LeadBar';

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
        const y = gallerySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
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
    { image: img6, caption: 'Гостевой дом 48м²', usage: 'офис продаж / ресепшн' }
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
      meta: 'Глэмпинг / аренда',
      title: 'Капсула 18–24 м²',
      price: 'от 6.8 млн ₸',
      description: 'Быстрый запуск без сложной инженерии. Комфортный контур под сезон и межсезонье.',
      markers: ['Пролёт 3.4–3.8 м', 'Тёплый контур + инженерия', 'Монтаж за 2–5 дней']
    },
    {
      meta: 'Офис продаж / премиум аренда',
      title: 'Капсула 29–32 м²',
      price: 'от 9.4 млн ₸',
      description: 'Баланс площади и отделки: панорамное остекление, готовность к подключению.',
      markers: ['Пролёт 3.8–4.2 м', 'Круглогодичная эксплуатация', 'Тираж для сети']
    },
    {
      meta: 'Ресепшн / управляющая компания',
      title: 'Модуль 44–48 м²',
      price: 'от 13.5 млн ₸',
      description: 'Свободная планировка под задачу. Полный комплект инженерии и отделки.',
      markers: ['Пролёт 4.2–4.6 м', 'Инженерия и мебель', 'Запуск под ключ']
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
      <PageHero
        title="Капсулы"
        subtitle="Модульные решения для бизнеса и инвестиций"
        meta="Industrial Premium • Капсулы"
        image={img4}
      />

      <section className="gallery-section">
        <div className="container">
          <SectionHeader
            title="Галерея проектов"
            subtitle="Тиражируемые решения под аренду, глэмпинг и корпоративные резиденции"
            eyebrow="Проекты"
          />
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div key={index} className="project-card">
                <div className="project-visual" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="project-overlay">
                    <p className="project-caption">{item.caption}</p>
                    {item.usage && <span className="project-meta">{item.usage}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="configurations-section">
        <div className="container">
          <SectionHeader
            title="Комплектации"
            subtitle="Выбирайте глубину поставки: каркас для своей отделки или капсула под ключ"
          />
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

      <section className="advantages-section-product">
        <div className="container">
          <SectionHeader title="Преимущества" subtitle="Повторяемость, контроль качества, стабильные сроки производства" />
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

      <PricingCards
        title="Типовые размеры и цены"
        subtitle="Цены ориентировочные — считаем под комплектацию, тираж и сценарий"
        items={pricingCards}
        footnote="Индивидуальный расчёт — по ТЗ (пролёт/высота/нагрузки/регион)"
      />

      <section className="steps-section">
        <div className="container">
          <SectionHeader title="Как мы работаем" subtitle="Короткий путь от задачи до монтажа" />
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

      <LeadBar
        title="Подобрать капсулу и рассчитать стоимость"
        description="Уточним сценарий (аренда/глэмпинг/офис) и комплектацию"
        primaryAction={handleCtaClick}
        secondaryAction={handleEmailRequest}
      />
    </div>
  );
};

export default Capsules;
