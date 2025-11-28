import React from 'react';
import { Award, Users, Factory, Target } from 'lucide-react';
import './About.css';

const About = () => {
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
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="container">
          <div className="about-hero-content">
            <h1 className="display-lg">О компании</h1>
            <p className="body-lg">Производство ЛСТК конструкций в Казахстане</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="display-md">Наша история</h2>
              <p className="body-lg">
                <strong>Фабрика Каркасов Алатау</strong> — ведущий производитель легких стальных тонкостенных конструкций в Казахстане с опытом работы более 15 лет.
              </p>
              <p className="body-lg">
                Мы специализируемся на полном цикле производства ЛСТК: от инженерного проектирования до финальной сборки. Наша продукция охватывает модульные капсулы для жилья и бизнеса, промышленные ангары и склады, а также металлические гаражи премиум-класса.
              </p>
              <p className="body-lg">
                Наше производство оборудовано высокоточными станками с ЧПУ европейского производства, что гарантирует идеальную геометрию каждого элемента. Мы используем только сертифицированную сталь и современные технологии защиты от коррозии.
              </p>
            </div>
            <div className="story-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1745448797900-35d08e85e9db)' }} />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title display-md">Наши ценности</h2>
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
          <h2 className="section-title display-md">Производство</h2>
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
            <h2 className="display-md">Наша миссия</h2>
            <p className="body-lg">
              Предоставлять клиентам высококачественные и надёжные каркасные конструкции, которые служат долгие годы и отвечают всем современным стандартам качества.
            </p>
            <p className="body-lg">
              Мы стремимся быть на шаг впереди в инновациях, постоянно совершенствуя наши технологии и процессы производства.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
