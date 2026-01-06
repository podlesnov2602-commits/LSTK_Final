import React, { useEffect } from 'react';
import { ClipboardList, Factory, Layers, PenTool, RefreshCw, Ruler, ShieldCheck } from 'lucide-react';

import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import ProcessSteps from '../components/ui/ProcessSteps';
import PricingCards from '../components/ui/PricingCards';
import CostingBlock from '../components/ui/CostingBlock';

import './ProductPage.css';

import heroImg from '../assets/Hero2.webp';
import gallery1 from '../assets/Dom1.webp';
import gallery2 from '../assets/Dom2.webp';
import gallery3 from '../assets/Dom3.webp';
import gallery4 from '../assets/Dom4.webp';
import gallery5 from '../assets/Dom5.webp';
import gallery6 from '../assets/Dom6.webp';

const ModulesResidential = () => {
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
      image: gallery1,
      title: 'Жилой дом Адлер 129 м²',
      purpose:,
      tag: 'ЖИЛОЙ ДОМ'
    },
    {
      image: gallery2,
      title: 'Жилой дом 72 м²',
      purpose:,
      tag: 'ЖИЛОЙ ДОМ'
    },
    {
      image: gallery3,
      title: 'Жилой дом 102,6 м²',
      purpose: ,
      tag: 'ЖИЛОЙ ДОМ'
    },
    {
      image: gallery4,
      title: 'Финский дом 158м²',
      purpose: ,
      tag: 'ЖИЛОЙ ДОМ'
    },
    {
      image: gallery5,
      title: 'Малоэтажный дом 2 этажа',
      purpose: ,
      tag: 'ЖИЛОЙ ДОМ'
    },
     {
      image: gallery6,
      title: 'Жилой дом «Хельсинки»',
      purpose: ,
      tag: 'ЖИЛОЙ ДОМ'
    }
  ];

  const pricingCards = [
    {
      meta: 'Жилое здание 1–2 этажа',
      title: 'Дом 100–140 м²',
      price: 'от … ₸',
      description: 'Лёгкий ЛСТК-каркас под гибкую планировку и быстрый ввод в эксплуатацию.',
      markers: ['Расчёт снеговых и ветровых нагрузок', 'Комплектация КМД', 'Маркировка и упаковка под монтаж', 'Совместимость с фасадами и инженеркой']
    },
    {
      meta: 'Жилое здание 2 этажа',
      title: 'Дом 150–200 м²',
      price: 'от … ₸',
      description: 'Двухэтажный дом с заводской подготовкой узлов и контролем геометрии.',
      markers: ['Планировки под смешанные сценарии проживания', 'Усиленные сечения под перекрытия', 'Комплектация крепежом и схемами монтажа', 'Подготовка под чистовые фасады']
    },
    {
      meta: 'Жилое здание 2–3 этажа',
      title: 'Дом 200–300 м²',
      price: 'от … ₸',
      description: 'Малоэтажный объём с расчётом нагрузок, КМД и логистикой поставок.',
      markers: ['Расчёт под региональные нагрузки', 'Паспорт партии и маркировка элементов', 'Вариативность фасадных решений', 'Шеф-монтаж по запросу']
    }
  ];

  const advantages = [
    { icon: RefreshCw, title: 'Расчёт под снеговые и ветровые нагрузки' },
    { icon: Layers, title: 'КМД и заводская точность' },
    { icon: ShieldCheck, title: 'Минимум работ на участке' },
    { icon: PenTool, title: 'Предсказуемые сроки и бюджет' },
    { icon: Factory, title: 'Совместимость с любыми фасадными решениями' }
  ];

  const steps = [
    {
      title: 'Запрос и исходные данные',
      description: 'Фиксируем габариты, этажность, нагрузки и требования к фасадам.',
      icon: ClipboardList
    },
    {
      title: 'Проектирование и КМД',
      description: 'Готовим расчёты, выпускаем КМД и согласовываем узлы сопряжений.',
      icon: Ruler
    },
    {
      title: 'Производство каркаса',
      description: 'Пробивка, профилирование, маркировка и упаковка под очередность монтажа.',
      icon: Factory
    },
    {
      title: 'Поставка и монтаж',
      description: 'Логистика под график объекта, сопровождение и шеф-монтаж по запросу.',
      icon: Layers
    },
    {
      title: 'Сдача объекта',
      description: 'Контроль геометрии и передача готового каркаса под дальнейшие работы.',
      icon: PenTool
    }
  ];

  return (
    <div className="product-page">
      <PageHero
        title="Жилые дома до 3 этажей"
        subtitle="Малоэтажные жилые здания на базе ЛСТК с инженерным расчётом нагрузок, КМД и заводской подготовкой конструкций."
        meta="INDUSTRIAL PREMIUM · ЖИЛЫЕ ЗДАНИЯ ЛСТК"
        image={heroImg}
      />

      <section className="gallery-section">
        <div className="container">
          <SectionHeader eyebrow="Проекты" title="Галерея проектов" />
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

      <section className="advantages-section-product">
        <div className="container">
          <SectionHeader
            eyebrow="Технология"
            title="Инженерный подход к жилому строительству"
            subtitle="Фиксируем нагрузки, выпускаем КМД и поставляем маркированный ЛСТК-каркас под монтаж"
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
        title="Типовые решения и ориентиры по стоимости"
        subtitle="Стоимость зависит от проекта, этажности, региона и комплектации."
        items={pricingCards}
        footnote="Эти проекты — лишь часть нашей проектной базы. Под конкретную задачу мы подбираем оптимальное решение и рассчитываем стоимость индивидуально."
      />

      <section className="steps-section">
        <div className="container">
          <SectionHeader
            eyebrow="Процесс"
            title="Процесс реализации проекта"
            subtitle="Пять этапов — от исходных данных до сдачи готового каркаса"
          />
          <ProcessSteps steps={steps} />
        </div>
      </section>

      <CostingBlock productName="жилой дом" />
    </div>
  );
};

export default ModulesResidential;
