import React, { useEffect } from 'react';
import { Award, Users, Factory, Target, Ruler, Wrench, Repeat } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import './About.css';
import productionVideo from '../assets/About.mp4';

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const values = [
    {
      icon: Award,
      title: 'Качество',
      description: 'Контроль точности профиля, оцинковки и крепежа на каждом этапе'
    },
    {
      icon: Users,
      title: 'Команда',
      description: 'Инженеры-конструкторы, технологи и монтажные бригады работают в едином контуре'
    },
    {
      icon: Factory,
      title: 'Производство',
      description: 'Собственные линии гибки и пробивки, склад металлопроката и сборочные зоны'
    },
    {
      icon: Target,
      title: 'Надёжность',
      description: 'Фиксированные сроки, повторяемые узлы и обязательная исполнительная документация'
    }
  ];

  return (
    <div className="about-page">
      <PageHero
        title="О компании"
        subtitle="Производство ЛСТК-конструкций в Казахстане"
        meta="INDUSTRIAL PREMIUM • О КОМПАНИИ"
        image="https://customer-assets.emergentagent.com/job_metal-builder/artifacts/6umjvmc1_zensiny-inzenery-rabotaut.jpg"
      />

      {/* Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <SectionHeader eyebrow="Компания" title="Наша история" />
              <p className="body-lg">Производим ЛСТК-конструкции с полным циклом: расчёт, проектирование, производство, сборка.</p>
              <p className="body-lg">Работаем для капсул, ангаров, складов и гаражей — решения типовые, масштабирующиеся под задачу.</p>
              <p className="body-lg">Стабильность обеспечивают ЧПУ-линии пробивки и гибки, сертифицированный металл и регламентированные операции.</p>
              <p className="body-lg">Инженерная ответственность закрывает узлы, сроки и монтаж, повторяемость решений ускоряет выпуск партий.</p>
            </div>
            <div className="story-facts">
              <div className="story-fact">
                <div className="story-fact__title">Полный цикл</div>
                <div className="story-fact__desc">Проектирование, выпуск профилей, сборка и монтаж управляются одной командой.</div>
              </div>
              <div className="story-fact">
                <div className="story-fact__title">Инженерная ответственность</div>
                <div className="story-fact__desc">Расчёты нагрузок, исполнительные схемы и авторский надзор по узлам.</div>
              </div>
              <div className="story-fact">
                <div className="story-fact__title">Повторяемость</div>
                <div className="story-fact__desc">Типовые решения масштабируются от капсулы до ангара без потери точности.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production reality */}
      <section className="reality-section">
        <div className="container">
          <div className="reality-layout">
            <div className="reality-video-column">
              <div className="reality-video-frame">
                <video
                  controls
                  preload="metadata"
                  className="reality-video"
                  poster="https://customer-assets.emergentagent.com/job_metal-builder/artifacts/vertical-production-poster.jpg"
                >
                  <source src={productionVideo} type="video/mp4" />
                  Ваш браузер не поддерживает видео.
                </video>
              </div>
            </div>
            <div className="reality-text">
              <SectionHeader
                eyebrow="О компании"
                title="Производство в реальности"
                subtitle="Реальные процессы, реальные цеха и полный контроль каждого этапа"
              />
              <p className="body-lg reality-lead">
                Мы не используем стоковые визуализации и абстрактные рендеры. Каждое решение, которое вы видите на сайте,
                проходит через реальное производство: от проектирования и расчёта нагрузок до выпуска профилей, сборки узлов и
                монтажа конструкций.
              </p>
              <ul className="reality-list">
                <li className="reality-list-item">
                  <div className="reality-icon">
                    <Factory size={22} />
                  </div>
                  <span>Собственное производство ЛСТК-конструкций</span>
                </li>
                <li className="reality-list-item">
                  <div className="reality-icon">
                    <Ruler size={22} />
                  </div>
                  <span>Контроль узлов, геометрии и допусков на каждом этапе</span>
                </li>
                <li className="reality-list-item">
                  <div className="reality-icon">
                    <Wrench size={22} />
                  </div>
                  <span>Сборка и монтаж без субподрядчиков</span>
                </li>
                <li className="reality-list-item">
                  <div className="reality-icon">
                    <Repeat size={22} />
                  </div>
                  <span>Повторяемость решений и стабильное качество от проекта к проекту</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <SectionHeader
            eyebrow="Подход"
            title="Наши ценности"
            subtitle="Фактические принципы, по которым строится производство и монтаж"
          />
          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="h3">{value.title}</h3>
                  <p className="body-md">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="production-details-section">
        <div className="container">
          <SectionHeader
            eyebrow="Производство"
            title="Производство в цифрах"
            subtitle="Метрики, подтверждающие мощность и повторяемость"
          />
          <div className="production-grid">
            <div className="production-item">
              <div className="production-number">5000 м²</div>
              <div className="production-label">площадь завода и складских зон</div>
            </div>
            <div className="production-item">
              <div className="production-number">200+</div>
              <div className="production-label">завершённых объектов в капсульном и промышленном сегменте</div>
            </div>
            <div className="production-item">
              <div className="production-number">15+</div>
              <div className="production-label">лет работы на рынке металлоконструкций</div>
            </div>
            <div className="production-item">
              <div className="production-number">24/7</div>
              <div className="production-label">сопровождение проектов на этапе монтажа и ввода</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <SectionHeader eyebrow="Миссия" title="Наша миссия" />
            <p className="mission-text body-md">
              Создавать функциональные металлоконструкции промышленного класса без декоративной избыточности — с точным расчётом, предсказуемым результатом и стабильным качеством. Мы работаем по инженерной логике: считаем нагрузки, стандартизируем узлы и обеспечиваем повторяемость решений от проекта к проекту.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
