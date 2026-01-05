import React, { useEffect } from 'react';
import { ClipboardList, Factory, PenTool, Ruler, Shield, Wrench } from 'lucide-react';

import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import ProcessSteps from '../components/ui/ProcessSteps';
import PricingCards from '../components/ui/PricingCards';
import CostingBlock from '../components/ui/CostingBlock';

import './ProductPage.css';

import module1 from '../assets/Garage1.webp';
import module2 from '../assets/Garage2.webp';
import module3 from '../assets/Garage3.webp';
import module4 from '../assets/Garage4.webp';
import module5 from '../assets/Garage5.webp';
import heroImage from '../assets/HangarsHero.webp';

const ModulesSmall = () => {
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
      image: module1,
      caption: 'Баня модульная 24 м²'
    },
    {
      image: module2,
      caption: 'Сауна модульная 18 м²'
    },
    {
      image: module3,
      caption: 'Хозблок 30 м²'
    },
    {
      image: module4,
      caption: 'Сервисный модуль 40 м²'
    },
    {
      image: module5,
      caption: 'Технический блок 36 м²'
    }
  ];

  const advantages = [
    { icon: Factory, title: 'Заводская сборка конструкций' },
    { icon: Wrench, title: 'Быстрый монтаж' },
    { icon: Shield, title: 'Минимальные требования к участку' },
    { icon: ClipboardList, title: 'Чёткая комплектация без скрытых доплат' },
    { icon: PenTool, title: 'Подготовка под инженерные сети' }
  ];

  const pricingCards = [
    {
      meta: 'Функциональное здание',
      title: '18–24 м²',
      price: 'По расчёту',
      description: 'Тёплый контур под бани, сауны или компактные рабочие модули.',
      markers: [
        'Габариты 6×3 — 8×3 м',
        'Каркас ЛСТК с утеплением под сезон',
        'Готовность под ввод инженерии',
        'Сборка за короткое окно монтажа'
      ]
    },
    {
      meta: 'Функциональное здание',
      title: '30–36 м²',
      price: 'По расчёту',
      description: 'Универсальные блоки под хоззоны, мастерские и сервисные комнаты.',
      markers: [
        'Габариты 6×5 — 9×4 м',
        'Расчёт под хранение техники и расходников',
        'Несущие узлы под подвесное оборудование',
        'Комплектация обшивки без декоративных элементов'
      ]
    },
    {
      meta: 'Функциональное здание',
      title: '40–60 м²',
      price: 'По расчёту',
      description: 'Модули для сервисных зон, приёмов, касс или технических блоков.',
      markers: [
        'Габариты 10×4 — 12×5 м',
        'Планировки под отдельные помещения',
        'Опциональные технические комнаты и санузлы',
        'Учитываем подключение к сетям и потоки людей'
      ]
    }
  ];

  const processSteps = [
    {
      title: 'Запрос и параметры',
      description: 'Фиксируем габариты, назначение и регион эксплуатации',
      icon: ClipboardList
    },
    {
      title: 'Подбор решения',
      description: 'Выбираем тип каркаса, обшивку и утепление под задачу',
      icon: Ruler
    },
    {
      title: 'Производство',
      description: 'Режем и маркируем ЛСТК, комплектуем узлы и крепёж',
      icon: Factory
    },
    {
      title: 'Поставка',
      description: 'Отгружаем комплект с инструкциями и схемами сборки',
      icon: PenTool
    },
    {
      title: 'Монтаж и сдача',
      description: 'Собираем объект, выводим под инженерные подключения',
      icon: Wrench
    }
  ];

  return (
    <div className="product-page">
      <PageHero
        title="Малые функциональные здания"
        subtitle="Компактные здания на базе ЛСТК для сервисных, технических и вспомогательных задач."
        meta="INDUSTRIAL PREMIUM · МАЛЫЕ ЗДАНИЯ"
        image={heroImage}
      />

      <section className="gallery-section">
        <div className="container">
          <SectionHeader
            eyebrow="Проекты"
            title="Галерея проектов"
            subtitle="Компактные ЛСТК-модули для сервисных, технических и вспомогательных задач"
          />
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div key={index} className="project-card">
                <div className="project-visual" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="project-overlay">
                    <p className="project-caption">{item.caption}</p>
                    <span className="project-meta">ФУНКЦИОНАЛЬНОЕ ЗДАНИЕ</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="advantages-section-product">
        <div className="container">
          <SectionHeader
            eyebrow="Технология"
            title="Инженерные решения без избыточности"
            subtitle="Конструкции ЛСТК с заводской подготовкой, точным раскроем и понятной комплектацией"
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
        subtitle="Размерные группы под разные сценарии эксплуатации"
        items={pricingCards}
        footnote="Эти проекты — лишь часть нашей проектной базы. Под конкретную задачу мы подбираем оптимальное решение и рассчитываем стоимость индивидуально."
      />

      <section className="steps-section">
        <div className="container">
          <SectionHeader
            eyebrow="Процесс"
            title="Как мы работаем"
            subtitle="Чёткий порядок действий от запроса до сдачи готового объекта"
          />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <CostingBlock productName="малое функциональное здание" />
    </div>
  );
};

export default ModulesSmall;
