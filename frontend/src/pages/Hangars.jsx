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
      image:
        'https://images.unsplash.com/photo-1679068215572-e4ba8fdce4dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      title: 'Ангар 700 м²',
      purpose: 'Склад и логистика',
      tag: 'АНГАР'
    },
    {
      image:
        'https://images.unsplash.com/photo-1720036237334-9263cd28c3d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      title: 'Индустриальный корпус 1200 м²',
      purpose: 'Производство и сборка',
      tag: 'АНГАР'
    },
    {
      image:
        'https://images.unsplash.com/photo-1669003152237-7bd1ac4c13f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjQzMjM4OTJ8MA&ixlib=rb-4.1.0&q=85',
      title: 'Комплекс 2400 м²',
      purpose: 'Кросс-докинг',
      tag: 'СКЛАД'
    },
    {
      image:
        'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      title: 'Ангар 300 м²',
      purpose: 'Локальный склад',
      tag: 'АНГАР'
    },
    {
      image:
        'https://images.unsplash.com/photo-1679068215572-e4ba8fdce4dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      title: 'Индустриальный корпус 1800 м²',
      purpose: 'Логистика 24/7',
      tag: 'СКЛАД'
    },
    {
      image:
        'https://images.unsplash.com/photo-1669003152237-7bd1ac4c13f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjQzMjM4OTJ8MA&ixlib=rb-4.1.0&q=85',
      title: 'Складской модуль 950 м²',
      purpose: 'FMCG',
      tag: 'СКЛАД'
    }
  ];

  const typicalSizes = [
    {
      title: '150 м²',
      price: 'от 4.5 млн ₸',
      scenario: 'Компактный склад / сервис',
      metric: 'Пролёт 12–15 м · высота до 6 м',
      note: 'Базовая конфигурация для хранения и сервиса',
      markers: ['Оптимизация фундамента под лёгкий каркас', 'Свободное размещение стеллажей', 'Инженерия под региональные нагрузки']
    },
    {
      title: '200 м²',
      price: 'от 6 млн ₸',
      scenario: 'Логистические и сервисные здания',
      metric: 'Пролёт 16–18 м · высота до 7.5 м',
      note: 'Типовой пролёт для складов и цехов',
      markers: ['Проходная высота под коммерческий транспорт', 'Узел ворот и доков в проекте', 'Подготовка под стеллажные системы']
    },
    {
      title: '300 м²',
      price: 'от 9 млн ₸',
      scenario: 'Лёгкое производство и сборка техники',
      metric: 'Пролёт 18–21 м · высота до 9 м',
      note: 'Производственные задачи с кран-балкой',
      markers: ['Закладка под мостовые краны', 'Расстановка оборудования и коммуникаций', 'Сдача объекта с монтажом']
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
    { icon: DollarSign, title: 'Снижение затрат на фундамент' },
    { icon: Zap, title: 'Быстрый монтаж и масштабирование' },
    { icon: RefreshCw, title: 'Расчёт под снеговые и ветровые нагрузки' },
    { icon: PenTool, title: 'Планировка под логистику и техпроцессы' }
  ];

  const steps = [
    {
      title: 'Заявка и сценарий эксплуатации',
      description: 'Фиксируем задачу: логистика, производство, хранение',
      icon: ClipboardList
    },
    {
      title: 'Замеры и расчёт нагрузок',
      description: 'Пролёт, высота, снеговая и ветровая зона, грунты',
      icon: Ruler
    },
    {
      title: 'Проект и визуализация',
      description: 'Узлы, пролёты, ворота, доки и стеллажные зоны',
      icon: PenTool
    },
    {
      title: 'Производство ЛСТК',
      description: 'Каркас, крепёж, обшивка и готовые монтажные схемы',
      icon: Factory
    },
    {
      title: 'Монтаж и сдача объекта',
      description: 'Сборка, контроль узлов, передача готового ангара или склада',
      icon: Wrench
    }
  ];

  return (
    <div className="product-page">
      <PageHero
        title="Ангары и склады"
        subtitle="Промышленные ангары и складские здания под логистику, производство и хранение"
        meta="Industrial Premium • Ангары и склады"
        image={gallery[0].image}
      />

      <section className="gallery-section">
        <div className="container">
          <SectionHeader
            eyebrow="Проекты"
            title="Галерея проектов"
            subtitle="Масштабные пролёты и разные сценарии эксплуатации: от локальных складов до кросс-доков"
          />
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div key={index} className="project-card">
                <div className="project-visual" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="project-overlay">
                    <p className="project-caption">{item.title}</p>
                    <p className="project-purpose">{item.purpose}</p>
                    <span className="project-meta">{item.tag}</span>
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
            title="Инженерные решения без декоративной избыточности"
            subtitle="Инженерные параметры: пролёты, нагрузки, монтаж без лишней декоративности"
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

      <CostingBlock productName="ангар или склад" />
    </div>
  );
};

export default Hangars;
