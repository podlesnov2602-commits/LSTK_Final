import React, { useEffect } from 'react';
import { ClipboardList, Factory, PenTool, Ruler, Shield, Wrench } from 'lucide-react';

import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import ProcessSteps from '../components/ui/ProcessSteps';
import PricingCards from '../components/ui/PricingCards';
import CostingBlock from '../components/ui/CostingBlock';

import './ProductPage.css';

import module1 from '../assets/Banya1.webp';
import module2 from '../assets/Banya2.webp';
import module3 from '../assets/Banya3.webp';
import module4 from '../assets/Banya4.webp';
import module5 from '../assets/Banya5.webp';
import module6 from '../assets/Banya6.webp';
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
      caption: 'Баня 21 м²'
    },
    {
      image: module2,
      caption: 'Баня 54 м²'
    },
    {
      image: module3,
      caption: 'Баня 48 м²'
    },
    {
      image: module4,
      caption: 'Модульная баня'
    },
        {
      image: module5,
      caption: 'Модульная баня 24 м²'
    },
    {
      image: module6,
      caption: 'Модульная баня 24 м²'
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
      meta: 'ФУНКЦИОНАЛЬНОЕ ЗДАНИЕ',
      title: '18–24 м²',
      price: 'По расчёту',
      description:
        'Компактные модули для бань, саун и вспомогательных помещений. Подходят для частных участков, глэмпингов и сервисных зон с ограниченной площадью.',
      markers: [
        'Габариты: 6×3 — 8×3 м',
        'ЛСТК-каркас с утеплением под сезонную эксплуатацию',
        'Подготовка под инженерные подключения',
        'Быстрый монтаж в короткое окно'
      ]
    },
    {
      meta: 'ФУНКЦИОНАЛЬНОЕ ЗДАНИЕ',
      title: '30–36 м²',
      price: 'По расчёту',
      description:
        'Универсальные модули под бани повышенной комфортности, хозблоки, мастерские и сервисные помещения с зонированием.',
      markers: [
        'Габариты: 6×5 — 9×4 м',
        'Расчёт под хранение оборудования и эксплуатационные нагрузки',
        'Несущие узлы под навесное и инженерное оборудование',
        'Комплектация без декоративных элементов'
      ]
    },
    {
      meta: 'ФУНКЦИОНАЛЬНОЕ ЗДАНИЕ',
      title: '40–60 м²',
      price: 'По расчёту',
      description:
        'Модули для коммерческих бань, сервисных зон, приёмных и технических блоков. Проектируются с учётом потоков людей и функционального разделения помещений.',
      markers: [
        'Габариты: 10×4 — 12×5 м',
        'Планировки под отдельные помещения',
        'Возможность технических комнат и санузлов',
        'Учёт подключения к сетям и интенсивной эксплуатации'
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
        title="Типовые размерные решения"
        subtitle={
          'Размерные группы ЛСТК-модулей под разные сценарии эксплуатации.\nСтоимость рассчитывается индивидуально под проект, регион и комплектацию.'
        }
        items={pricingCards}
        footnote="Эти решения — ориентиры по размеру и формату. Под конкретную задачу мы проектируем модуль индивидуально и рассчитываем комплектацию."
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
