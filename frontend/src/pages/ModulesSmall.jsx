import React, { useEffect } from 'react';
import { CheckCircle2, Package, Ruler, Shield } from 'lucide-react';

import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';

import './ModuleDetails.css';

import garageImg from '../assets/garages.webp';

const ModulesSmall = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const deliverables = [
    'Комплекты ЛСТК с заранее раскроенными элементами и маркировкой',
    'Рабочие чертежи и узлы — для сборки без корректировок на площадке',
    'Сопроводительная спецификация: крепёж, облицовка и инженерные вводы по задаче'
  ];

  const formats = [
    'Бани и сауны — компактные тёплые контуры под быстрый монтаж',
    'Хозблоки, мастерские, складские модули — точная геометрия и простая логистика',
    'Сервисные блоки: ресепшн, прокат, кассы — чистое исполнение и сдержанный внешний вид'
  ];

  const controls = [
    { icon: Ruler, title: 'Точные габариты', text: 'Расчёт нагрузок, проверка пролётов и контроль узлов перед отгрузкой.' },
    { icon: Package, title: 'Сборка без пауз', text: 'Маркируем, комплектуем и упаковываем модули по очередности монтажа.' },
    { icon: Shield, title: 'Ресурс конструкции', text: 'Материалы промышленного класса и защита от коррозии под эксплуатацию.' }
  ];

  return (
    <div className="module-detail-page">
      <PageHero
        title="Малые функциональные здания"
        subtitle="Компактные здания ЛСТК под коммерческие сервисы и технические задачи: от бань и саун до рабочих блоков."
        meta="Industrial Premium • Модульные здания"
        image={garageImg}
      />

      <section className="module-detail-section">
        <div className="container">
          <SectionHeader
            eyebrow="Функциональные модули"
            title="Поставка под ключевые сценарии"
            subtitle="Сфокусированы на точности поставки и простоте сборки: заранее просчитываем эксплуатацию и монтаж."
          />

          <div className="module-detail-grid">
            <div className="module-detail-card">
              <h3>Комплектация</h3>
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
              <h3>Форматы</h3>
              <ul className="module-detail-list">
                {formats.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="module-stack-grid">
            {controls.map((item) => (
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

export default ModulesSmall;
