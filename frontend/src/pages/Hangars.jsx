import React, { useEffect } from 'react';
import { ClipboardList, DollarSign, Factory, Layers, PenTool, RefreshCw, Ruler, Wrench, Zap } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import ProcessSteps from '../components/ui/ProcessSteps';
import PricingCards from '../components/ui/PricingCards';
import CostingBlock from '../components/ui/CostingBlock';
import './ProductPage.css';

const Hangars = () => {
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
      image: 'https://images.unsplash.com/photo-1679068215572-e4ba8fdce4dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Ангар 700 м² · склад и логистика'
    },
    {
      image: 'https://images.unsplash.com/photo-1720036237334-9263cd28c3d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Индустриальный корпус 1200 м² · производство и сборка'
    },
    {
      image: 'https://images.unsplash.com/photo-1669003152237-7bd1ac4c13f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjQzMjM4OTJ8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Комплекс 2400 м² · кросс-докинг'
    },
    {
      image: 'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Ангар 300 м² · локальный склад'
    },
    {
      image: 'https://images.unsplash.com/photo-1679068215572-e4ba8fdce4dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Индустриальный корпус 1800 м² · логистика 24/7'
    },
    {
      image: 'https://images.unsplash.com/photo-1669003152237-7bd1ac4c13f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjQzMjM4OTJ8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Складской модуль 950 м² · FMCG'
    }
  ];

  const typicalSizes = [
    {
      title: '150 м²',
      price: 'от 4.5 млн ₸',
      scenario: 'Компактный склад и сервис в небольших городах',
      metric: 'Пролёт 12–15 м · высота до 6 м',
      note: 'Базовая конфигурация для хранения и сервиса',
      markers: ['Быстрая сборка и доставка', 'Пролёт без внутренних опор', 'Оптимален для локальной логистики']
    },
    {
      title: '200 м²',
      price: 'от 6 млн ₸',
      scenario: 'Логистические узлы и сервисные станции',
      metric: 'Пролёт 16–18 м · высота до 7.5 м',
      note: 'Типовой пролёт для складов и цехов',
      markers: ['Гибкая планировка под стеллажи', 'Усиление под снег/ветер', 'Подвод коммуникаций под задачу']
    },
    {
      title: '300 м²',
      price: 'от 9 млн ₸',
      scenario: 'Лёгкое производство и сборка с техникой',
      metric: 'Пролёт 18–21 м · высота до 9 м',
      note: 'Производственные задачи с кран-балкой',
      markers: ['Закладка под мостовые краны', 'Технологические ворота и доки', 'Запуск под ключ с монтажом']
    }
  ];

  const pricingCards = typicalSizes.map((item) => ({
    meta: item.scenario,
    title: item.title,
    price: item.price,
    description: item.note,
    markers: [item.metric, ...item.markers]
  }));

  const advantages = [
    { icon: Layers, title: 'Большие пролёты без внутренних опор' },
    { icon: DollarSign, title: 'Снижение стоимости фундамента' },
    { icon: Zap, title: 'Быстрый монтаж и масштабируемость' },
    { icon: RefreshCw, title: 'Расчёт под снеговые и ветровые нагрузки' }
  ];

  const steps = [
    {
      title: 'Заявка',
      description: 'Оставляете запрос и фиксируете задачу для будущего ангара или склада',
      icon: ClipboardList
    },
    {
      title: 'Замеры',
      description: 'Фиксируем пролёт, высоту, нагрузки и особенности участка',
      icon: Ruler
    },
    {
      title: 'Проект',
      description: 'Готовим расчёт нагрузок, узлов и смету с визуализацией',
      icon: PenTool
    },
    {
      title: 'Производство',
      description: 'Изготавливаем металлокаркас, комплектуем обшивку и крепёж',
      icon: Factory
    },
    {
      title: 'Монтаж',
      description: 'Собираем на площадке, проверяем узлы и сдаём объект',
      icon: Wrench
    }
  ];

  return (
    <div className="product-page">
      <PageHero
        title="Ангары"
        subtitle="Промышленные ангары и склады под логистику, производство и хранение"
        meta="Industrial Premium • Ангары"
        image={gallery[0].image}
      />

      <section className="gallery-section">
        <div className="container">
          <SectionHeader
            eyebrow="Проекты"
            title="Галерея проектов"
            subtitle="Решения для логистики, производства и локальных складских задач"
          />
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div key={index} className="project-card">
                <div className="project-visual" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="project-overlay">
                    <p className="project-caption">{item.caption}</p>
                    <span className="project-meta">Ангар</span>
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
            subtitle="Инженерные пролёты, расчёт нагрузок и аккуратный монтаж под вашу задачу"
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
        title="Типовые размеры и цены"
        subtitle="Стоимость зависит от пролёта, высоты, региона и комплектации. Цены указаны ориентировочно"
        items={pricingCards}
        footnote="Цена уточняется после фиксации нагрузки, региона и комплектации"
      />

      <section className="steps-section">
        <div className="container">
          <SectionHeader
            eyebrow="Процесс"
            title="Процесс работы"
            subtitle="Чёткая последовательность действий от инженерии до монтажа"
          />
          <ProcessSteps steps={steps} />
        </div>
      </section>

      <CostingBlock productName="ангар" />
    </div>
  );
};

export default Hangars;
