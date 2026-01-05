import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';

import './Modules.css';

import banyaImg from '../assets/banya.webp';
import capsulesImg from '../assets/capsules.webp';
import bigImg from '../assets/modulesbig.webp';

const directions = [
  {
    title: 'Модульные дома для глэмпинга',
    description:
      'Тиражируемые модули для туристических проектов, баз отдыха и инвестиций в аренду. Быстрый запуск и предсказуемая экономика.',
    cta: 'Перейти в каталог',
    link: '/capsules',
    image: capsulesImg
  },
  {
    title: 'Жилые дома до 3 этажей',
    description:
      'Малоэтажные жилые здания на базе ЛСТК — с расчётом нагрузок, КМД и заводской подготовкой конструкций.',
    cta: 'Смотреть решения',
    link: '/modules/residential',
    image: bigImg
  },
  {
    title: 'Малые функциональные здания',
    description:
      'Компактные здания для частных участков и коммерческих задач: бани, сауны, хозблоки и сервисные модули.',
    cta: 'Смотреть решения',
    link: '/modules/small',
    image: banyaImg
  }
];

const Modules = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="modules-page">
      <PageHero
        title="Модульные здания ЛСТК"
        subtitle="Проектируем и производим модульные и малоэтажные здания с заводской точностью — под бизнес, инвестиции и индивидуальные задачи."
        meta="Industrial Premium • Модульные здания"
        image={productionImg}
      />

      <section className="modules-directions-section">
        <div className="container">
          <SectionHeader
            eyebrow="Модульные здания"
            title="Выберите направление"
            subtitle="Три готовых сценария: инвестиционные капсулы, жилые объекты до 3 этажей и компактные сервисные модули."
          />

          <div className="modules-grid">
            {directions.map((direction) => (
              <Link key={direction.title} to={direction.link} className="modules-card">
                <div
                  className="modules-card__image"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(4,7,7,0.35) 0%, rgba(4,7,7,0.6) 100%), url(${direction.image})` }}
                />
                <div className="modules-card__body">
                  <div>
                    <p className="modules-card__eyebrow">Направление</p>
                    <h3>{direction.title}</h3>
                    <p className="modules-card__description">{direction.description}</p>
                  </div>
                  <div className="modules-card__cta">
                    <span className="btn-primary ghost">{direction.cta}</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modules;
