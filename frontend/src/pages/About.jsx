import React, { useEffect } from 'react';
import { Award, Users, Factory, Target } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import './About.css';

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
          <div className="reality-content">
            <SectionHeader
              eyebrow="О компании"
              title="Производство в реальности"
              subtitle="Реальные процессы, оборудование и сборка без постановки. Видео фиксирует, как формируются профили, узлы и монтажные операции."
            />
          </div>
          <div className="story-video">
            <video
              controls
              muted
              playsInline
              className="story-video-player"
              poster="https://customer-assets.emergentagent.com/job_metal-builder/artifacts/hero-production-poster.jpg"
            >
              <source src="https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
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
            <SectionHeader
              eyebrow="Миссия"
              title="Наша миссия"
              subtitle="Создавать функциональные металлоконструкции без декоративной избыточности и с повторяемым качеством"
            />
            <p className="body-lg">
              Мы опираемся на инженерную логику: расчёт нагрузок, стандартизированные узлы, технологические карты и контроль качества. Каждая конструкция собирается одинаково предсказуемо — от профиля до монтажа.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
