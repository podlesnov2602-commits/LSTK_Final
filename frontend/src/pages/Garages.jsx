import React, { useEffect } from 'react';
import { ClipboardList, Clock, DollarSign, Factory, PenTool, Ruler, Shield, Wrench, Zap } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import ProcessSteps from '../components/ui/ProcessSteps';
import PricingCards from '../components/ui/PricingCards';
import CostingBlock from '../components/ui/CostingBlock';
import './ProductPage.css';

const Garages = () => {
  useEffect(() => {
    // Scroll to gallery section on page load
    const timer = setTimeout(() => {
      const gallerySection = document.querySelector('.gallery-section');
      if (gallerySection) {
        const yOffset = -100; // Offset for header
        const y = gallerySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const gallery = [
    { 
      image: 'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Гараж на 1 авто'
    },
    { 
      image: 'https://images.unsplash.com/photo-1720036237334-9263cd28c3d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Двойной гараж'
    },
    { 
      image: 'https://images.unsplash.com/photo-1679068215572-e4ba8fdce4dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Гараж с мастерской'
    },
    { 
      image: 'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Утеплённый гараж'
    },
    { 
      image: 'https://images.unsplash.com/photo-1669003152237-7bd1ac4c13f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjQzMjM4OTJ8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Гараж под ключ'
    },
    { 
      image: 'https://images.unsplash.com/photo-1720036237334-9263cd28c3d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Металлический бокс'
    }
  ];

  const configurations = [
    {
      title: 'Навес на 1 авто',
      subtitle: '3×6 м',
      price: 'от 490 000 ₸',
      features: ['Каркас ЛСТК', 'Профнастил', 'Кровля', 'Монтаж']
    },
    {
      title: 'Гараж на 2 авто',
      subtitle: '6×6 м',
      price: 'от 1.2 млн ₸',
      features: ['Каркас усиленный', 'Двое ворот', 'Утепление', 'Вентиляция']
    },
    {
      title: 'Навес на 2 авто',
      subtitle: '6×6 м',
      price: 'от 790 000 ₸',
      features: ['Каркас ЛСТК', 'Профнастил', 'Кровля', 'Монтаж']
    },
    {
      title: 'Гараж 6×6',
      subtitle: 'Стандарт',
      price: 'от 1.1 млн ₸',
      features: ['Каркас ЛСТК', 'Ворота', 'Утепление', 'Электрика']
    },
    {
      title: 'Хозблок',
      subtitle: '3×3 м',
      price: 'от 350 000 ₸',
      features: ['Каркас ЛСТК', 'Обшивка', 'Дверь', 'Кровля']
    },
    {
      title: 'Гараж с навесом',
      subtitle: '6×9 м',
      price: 'от 1.5 млн ₸',
      features: ['Гараж + навес', 'Усиленный каркас', 'Ворота', 'Кровля']
    }
  ];

  const pricingCards = configurations.map((config) => ({
    meta: config.subtitle,
    title: config.title,
    price: config.price,
    description: 'Готовое решение в единой архитектуре',
    markers: config.features
  }));

  const advantages = [
    { icon: Zap, title: 'Быстро', description: 'Монтаж 3-5 дней' },
    { icon: DollarSign, title: 'Дешево', description: 'Доступные цены' },
    { icon: Shield, title: 'Аккуратно', description: 'Качественная сборка' },
    { icon: Clock, title: 'Не требует разрешений', description: 'Легкие конструкции' }
  ];

  const processSteps = [
    {
      title: 'Заявка',
      description: 'Оставляете заявку в один клик или пишете в мессенджер',
      icon: ClipboardList
    },
    {
      title: 'Замеры',
      description: 'Фиксируем габариты участка, высоту и нагрузку на конструкцию',
      icon: Ruler
    },
    {
      title: 'Проект',
      description: 'Готовим смету, компоновку и визуализацию под ваш сценарий',
      icon: PenTool
    },
    {
      title: 'Производство',
      description: 'Запускаем ЛСТК в работу и собираем комплектацию на заводе',
      icon: Factory
    },
    {
      title: 'Монтаж',
      description: 'Приезжаем на объект, собираем гараж и сдаём заказчику',
      icon: Wrench
    }
  ];

  return (
    <div className="product-page">
      <PageHero
        title="Гаражи"
        subtitle="Надёжные металлические гаражи и боксы в едином индустриальном стиле"
        meta="Industrial Premium • Гаражи"
        image={gallery[0].image}
      />

      <section className="gallery-section">
        <div className="container">
          <SectionHeader
            eyebrow="Проекты"
            title="Галерея проектов"
            subtitle="Тиражируемые решения для частных и коммерческих задач"
          />
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div key={index} className="project-card">
                <div className="project-visual" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="project-overlay">
                    <p className="project-caption">{item.caption}</p>
                    <span className="project-meta">Гараж</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages-section-product">
        <div className="container">
          <SectionHeader
            eyebrow="Технология"
            title="Преимущества"
            subtitle="Быстрый монтаж, аккуратные фасады и стабильный бюджет"
          />
          <div className="advantages-grid-product">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="advantage-card-product">
                  <div className="advantage-icon-circle">
                    <IconComponent size={28} className="advantage-icon" />
                  </div>
                  <h3>{advantage.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PricingCards
        title="Типовые проекты"
        subtitle="Опции для одного или двух авто, утеплённые решения и интеграция с навесами"
        items={pricingCards}
        footnote="Стоимость рассчитываем под комплектацию, регион и сроки монтажа"
      />

      <section className="steps-section">
        <div className="container">
          <SectionHeader
            eyebrow="Процесс"
            title="Как мы работаем"
            subtitle="От заявки до монтажа — последовательные шаги без задержек"
          />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <CostingBlock productName="гараж" />
    </div>
  );
};

export default Garages;
