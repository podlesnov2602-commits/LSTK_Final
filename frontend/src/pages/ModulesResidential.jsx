import React, { useEffect } from 'react';
import { CheckCircle2, ClipboardList, HardHat, Layers } from 'lucide-react';

import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';

import './ModuleDetails.css';

import heroImg from '../assets/HeroStart.webp';

const ModulesResidential = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const deliverables = [
    'КМ/КМД с расчётом нагрузок и узлов сопряжений',
    'Комплект ЛСТК с маркировкой и упаковкой под очередность монтажа',
    'Сводная спецификация для бюджета, логистики и контроля на площадке'
  ];

  const scenarios = [
    'Коттеджные посёлки и клубные форматы — управляемая себестоимость и быстрый тираж',
    'Персонал и вахтовые городки — надёжная геометрия и тёплый контур',
    'Апартаменты и операторские форматы размещения — точные сроки поставки и сборки'
  ];

  const stack = [
    { icon: HardHat, title: 'Проектирование', text: 'Проверка нагрузок, выбор сечений и крепежа, согласование узлов с подрядчиком.' },
    { icon: Layers, title: 'Поставка', text: 'Заводская подготовка профилей, маркировка, упаковка и паспортизация партии.' },
    { icon: ClipboardList, title: 'Сопровождение', text: 'Инструкции, шеф-монтаж и контроль геометрии на узлах по запросу заказчика.' }
  ];

  return (
    <div className="module-detail-page">
      <PageHero
        title="Жилые дома до 3 этажей"
        subtitle="Малоэтажные жилые здания на базе ЛСТК: инженерные расчёты, заводская точность и готовность к быстрому вводу."
        meta="Industrial Premium • Модульные здания"
        image={heroImg}
      />

      <section className="module-detail-section">
        <div className="container">
          <SectionHeader
            eyebrow="Жилые решения"
            title="Что поставляем"
            subtitle="Готовим комплект для инженерного строительства: от документации до поставки маркированных профилей."
          />

          <div className="module-detail-grid">
            <div className="module-detail-card">
              <h3>Пакет поставки</h3>
              <ul className="module-detail-list">
                {deliverables.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="module-detail-card">
              <h3>Сценарии применения</h3>
              <ul className="module-detail-list">
                {scenarios.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="module-stack-grid">
            {stack.map((item) => (
              <div key={item.title} className="module-stack-card">
                <item.icon size={28} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModulesResidential;
