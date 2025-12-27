import React, { useEffect } from 'react';
import { ClipboardList, Factory, PenTool, Ruler, Shield, Wrench } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import ProcessSteps from '../components/ui/ProcessSteps';
import PricingCards from '../components/ui/PricingCards';
import CostingBlock from '../components/ui/CostingBlock';
import './ProductPage.css';

// Локальные изображения
import img1 from '../assets/Garage1.webp';
import img2 from '../assets/Garage2.webp';
import img3 from '../assets/Garage3.webp';
import img4 from '../assets/Garage4.webp';
import img5 from '../assets/Garage5.webp';
import img6 from '../assets/Garage6.webp';
import garagesHero from '../assets/GarageHero.webp';

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
      image: img1,
      caption: 'Гараж — СТО 205м²'
    },
    {
      image: img2,
      caption: 'Гараж 32м²'
    },
    {
      image: img3,
      caption: 'Гаража 6х4 24м²'
    },
    {
      image: img4,
      caption: 'Хозблок с навесом 48м²'
    },
    {
      image: img5,
      caption: 'Хозблок 36м²'
    },
    {
      image: img6,
      caption: 'Хозблок 8х4 32м²'
    }
  ];

  const configurations = [
    {
      title: 'Гараж 6×6',
      subtitle: '6×6 м',
      features: ['Каркас ЛСТК', 'Обшивка: профлист / сэндвич', 'Кровля', 'Ворота / двери (по комплектации)']
    },
    {
      title: 'Гараж на 2 авто',
      subtitle: '6×9 м',
      features: ['Каркас ЛСТК', 'Обшивка: профлист / сэндвич', 'Кровля', 'Ворота / двери (по комплектации)']
    },
    {
      title: 'Хозблок',
      subtitle: '3×6 м',
      features: ['Каркас ЛСТК', 'Обшивка: профлист / сэндвич', 'Кровля', 'Ворота / двери (по комплектации)']
    },
    {
      title: 'Навес',
      subtitle: 'под 1–2 авто',
      features: ['Каркас ЛСТК', 'Обшивка: профлист / сэндвич', 'Кровля', 'Ворота / двери (по комплектации)']
    },
    {
      title: 'Гараж с навесом',
      subtitle: '6×9 м',
      features: ['Каркас ЛСТК', 'Обшивка: профлист / сэндвич', 'Кровля', 'Ворота / двери (по комплектации)']
    },
    {
      title: 'Металлический бокс',
      subtitle: 'для техники и склада',
      features: ['Каркас ЛСТК', 'Обшивка: профлист / сэндвич', 'Кровля', 'Ворота / двери (по комплектации)']
    }
  ];

  const pricingCards = configurations.map((config) => ({
    meta: config.subtitle,
    title: config.title,
    price: 'По расчёту',
    description: 'Металлическая конструкция для хранения, техники или мастерской',
    markers: config.features
  }));

  const advantages = [
    { icon: Factory, title: 'Заводская сборка без кустарных решений' },
    { icon: Shield, title: 'Расчёт конструкции под снеговые и ветровые нагрузки' },
    { icon: Wrench, title: 'Минимум работ на участке' },
    { icon: ClipboardList, title: 'Понятная комплектация без скрытых доплат' }
  ];

  const processSteps = [
    {
      title: 'Запрос и базовые параметры',
      description: 'Получаем размеры, сценарий использования и сроки',
      icon: ClipboardList
    },
    {
      title: 'Замеры и уточнение нагрузок',
      description: 'Фиксируем габариты участка и учитываем снеговые и ветровые зоны',
      icon: Ruler
    },
    {
      title: 'Подбор конструкции и комплектации',
      description: 'Выбираем тип каркаса, обшивку и двери под задачу',
      icon: PenTool
    },
    {
      title: 'Производство на заводе',
      description: 'Режем и маркируем ЛСТК, собираем комплект на складе',
      icon: Factory
    },
    {
      title: 'Монтаж и сдача объекта',
      description: 'Приезжаем на участок, собираем конструкцию и передаем заказчику',
      icon: Wrench
    }
  ];

  return (
    <div className="product-page">
      <PageHero
        title="Гаражи и хозблоки"
        subtitle="Металлические гаражи и хозблоки с расчётом под реальные нагрузки"
        meta="INDUSTRIAL PREMIUM · ГАРАЖИ И ХОЗБЛОКИ"
        image={garagesHero}
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
            title="Инженерные решения без декоративной избыточности"
            subtitle="Сосредоточены на расчётах, комплектации и заводском изготовлении"
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
        subtitle="Гаражи, хозблоки и навесы под хранение техники или мастерской"
        items={pricingCards}
        footnote="Цена ориентировочная. Рассчитывается по комплектации и региону."
        showHint={false}
      />

      <section className="steps-section">
        <div className="container">
          <SectionHeader
            eyebrow="Процесс"
            title="Как мы работаем"
            subtitle="Этапы работ по гаражам, хозблокам и навесам"
          />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <CostingBlock productName="гараж" />
    </div>
  );
};

export default Garages;
