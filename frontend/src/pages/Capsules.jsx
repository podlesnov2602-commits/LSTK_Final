import React, { useEffect } from 'react';
import { Check, ClipboardList, Factory, Feather, Infinity, Move, PenTool, Ruler, Wrench } from 'lucide-react';
import './ProductPage.css';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import PricingCards from '../components/ui/PricingCards';
import ProcessSteps from '../components/ui/ProcessSteps';
import CostingBlock from '../components/ui/CostingBlock';

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
    {
      image:
        'https://images.unsplash.com/photo-1709741455970-be31d448826d?auto=format&fit=crop&w=1600&q=80',
      caption: 'Капсула',
      usage: 'под аренду'
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
      caption: 'БарнХаус',
      usage: 'под глэмпинг'
    },
    {
      image:
        'https://images.unsplash.com/photo-1473862170184-862ab08aae5b?auto=format&fit=crop&w=1600&q=80',
      caption: 'Модульный дом 44м²',
      usage: 'офис продаж / ресепшн'
    },
    {
      image:
        'https://images.unsplash.com/photo-1413845009317-1f713c4230eb?auto=format&fit=crop&w=1600&q=80',
      caption: 'Гостевой дом 29м²',
      usage: 'под глэмпинг'
    },
    {
      image:
        'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1600&q=80',
      caption: 'Модульный дом 29м²',
      usage: 'под аренду'
    },
    {
      image:
        'https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=1600&q=80',
      caption: 'Гостевой дом 48м²',
      usage: 'офис продаж / ресепшн'
    }
  ];

  const heroImage = gallery[0].image;

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
    {
      title: 'Заявка',
      description: 'Оставляете запрос: глэмпинг, аренда или корпоративное размещение',
      icon: ClipboardList
    },
    {
      title: 'Замеры',
      description: 'Понимаем участок, габариты и сценарий, фиксируем инженерные вводы',
      icon: Ruler
    },
    {
      title: 'Проект',
      description: 'Согласовываем планировку, финальную комплектацию и смету',
      icon: PenTool
    },
    {
      title: 'Производство',
      description: 'Собираем каркас, облицовку и начинку на производстве',
      icon: Factory
    },
    {
      title: 'Монтаж',
      description: 'Привозим модуль, ставим на подготовленную площадку и подключаем',
      icon: Wrench
    }
  ];

  return (
    <div className="product-page">
      <PageHero
        title="Капсулы"
        subtitle="Модульные решения для бизнеса и инвестиций"
        meta="Industrial Premium • Капсулы"
        image={heroImage}
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
          <SectionHeader title="Как мы работаем" subtitle="Выстраиваем процесс так, чтобы запуск занял минимум времени" />
          <ProcessSteps steps={steps} />
        </div>
      </section>

      <CostingBlock productName="капсулу" />
    </div>
  );
};

export default Capsules;
