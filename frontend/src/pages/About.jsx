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
      description: 'Высокоточное производство на современном оборудовании с ЧПУ и строгий контроль на всех этапах'
    },
    {
      icon: Users,
      title: 'Команда',
      description: 'Профессиональные инженеры и технологи с многолетним опытом в металлоконструкциях'
    },
    {
      icon: Factory,
      title: 'Производство',
      description: 'Собственный завод площадью 5000+ м² с передовым оборудованием и автоматизацией'
    },
    {
      icon: Target,
      title: 'Надёжность',
      description: 'Полная гарантия на изделия, соблюдение сроков и техническая поддержка 24/7'
    }
  ];

  return (
    <div className="about-page">
      <PageHero
        title="О компании"
        subtitle="Производство ЛСТК конструкций в Казахстане"
        meta="Industrial Premium • О компании"
        image="https://customer-assets.emergentagent.com/job_metal-builder/artifacts/6umjvmc1_zensiny-inzenery-rabotaut.jpg"
      />

      {/* Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <SectionHeader
                eyebrow="Компания"
                title="Наша история"
                subtitle={<strong>Фабрика Каркасов Алатау</strong>}
              />
              <p className="body-lg">Ведущий производитель легких стальных тонкостенных конструкций в Казахстане с опытом работы более 15 лет.</p>
              <p className="body-lg">
                Мы специализируемся на полном цикле производства ЛСТК: от инженерного проектирования до финальной сборки. Наша продукция охватывает модульные капсулы для жилья и бизнеса, промышленные ангары и склады, а также металлические гаражи премиум-класса.
              </p>
              <p className="body-lg">
                Наше производство оборудовано высокоточными станками с ЧПУ европейского производства, что гарантирует идеальную геометрию каждого элемента. Мы используем только сертифицированную сталь и современные технологии защиты от коррозии.
              </p>
            </div>
            <div className="story-video">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="story-video-player"
              >
                <source src="https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
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
            subtitle="Команда, производство и надёжность, объединённые единым стандартом"
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
            title="Производство"
            subtitle="Цифры подтверждают масштаб и стабильность"
          />
          <div className="production-grid">
            <div className="production-item">
              <div className="production-number">5000+</div>
              <div className="production-label">м² производственных площадей</div>
            </div>
            <div className="production-item">
              <div className="production-number">200+</div>
              <div className="production-label">реализованных проектов</div>
            </div>
            <div className="production-item">
              <div className="production-number">15+</div>
              <div className="production-label">лет опыта на рынке</div>
            </div>
            <div className="production-item">
              <div className="production-number">24/7</div>
              <div className="production-label">поддержка клиентов</div>
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
              subtitle="Создавать инновационные металлоконструкции премиум-класса, которые сочетают надёжность промышленных стандартов с эстетикой современной архитектуры"
            />
            <p className="body-lg">
              Наша цель — предоставить каждому клиенту не просто металлический каркас, а комплексное инженерное решение с полным сопровождением от проекта до монтажа. Мы инвестируем в передовые технологии и непрерывное обучение команды.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
