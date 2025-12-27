import React, { useEffect } from 'react';
import { ClipboardList, DollarSign, Factory, Layers, PenTool, RefreshCw, Ruler, Wrench, Zap } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import ProcessSteps from '../components/ui/ProcessSteps';
import PricingCards from '../components/ui/PricingCards';
import CostingBlock from '../components/ui/CostingBlock';
import './ProductPage.css';

// Локальные изображения
import img1 from '../assets/Angar1.webp';
import img2 from '../assets/Angar2.webp';
import img3 from '../assets/Angar3.webp';
import img4 from '../assets/Angar4.webp';
import img5 from '../assets/Angar5.webp';
import img6 from '../assets/Angar6.webp';
import hangarsHero from '../assets/HangarsHero.webp';


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
        img1,
      title: 'Ангар 400 м²',
      purpose: 'Склад и логистика',
      tag: 'АНГАР'
    },
    {
      image:
        img2,
      title: 'Ангар 57 м²',
      purpose: 'Склад и логистика',
      tag: 'АНГАР'
    },
    {
      image:
        img3,
      title: 'Ангар 367 м²',
      purpose: 'Склад и логистика',
      tag: 'АНГАР'
    },
    {
      image:
        img4,
      title: 'Цех 250 м²',
      purpose: 'Локальный склад',
      tag: 'СКЛАД'
    },
    {
      image:
        img5,
      title: 'Складской модуль 290 м²',
      purpose: 'FMCG',
      tag: 'СКЛАД'
    },
    {
      image:
        img6,
      title: 'Складской модуль 601 м²',
      purpose: 'FMCG',
      tag: 'СКЛАД'
    }
  ];

  const typicalSizes = [
    {
      title: 'ЛСТК ангар 400 м²',
      price: 'от 30 млн ₸',
      scenario: 'склад / сервис / производство',
      metric: 'Габариты 24×14 м',
      note: 'Планировка на четыре помещения с двумя въездными воротами',
      markers: ['Площадь 400 м²', 'Два въездных ворот', '4 функциональных помещения', 'Универсальное назначение']
    },
    {
      title: 'Производственный модуль 290 м²',
      price: 'от 20 млн ₸',
      scenario: 'производство / сборка / цех',
      metric: 'Производственная зона + офисные помещения',
      note: 'Встроенные раздевалки, комнаты отдыха и офисная зона',
      markers: ['Раздевалки и комнаты отдыха', 'Удобство для персонала', 'Круглогодичная эксплуатация']
    },
    {
      title: 'ЛСТК ангар 57 м²',
      price: 'от 5 млн ₸',
      scenario: 'хранение / сервис / вспомогательные помещения',
      metric: 'Быстровозводимый модуль',
      note: 'Одно универсальное помещение без перегородок',
      markers: ['Площадь 57 м²', 'Одно помещение', 'Быстрый монтаж', 'Минимальные затраты на запуск']
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
        image={hangarsHero}
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
            title="Преимущества"
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
