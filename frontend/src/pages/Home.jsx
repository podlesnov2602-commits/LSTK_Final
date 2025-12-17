import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Gem, Layers, ShieldCheck, Sparkles, Timer, Building2, FileText, Factory, Gauge } from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import SectionHeader from '../components/ui/SectionHeader';
import './Home.css';

import capsulesImg from '../assets/capsules.png';
import hangarsImg from '../assets/Hangars.jpeg';
import garagesImg from '../assets/garages.jpeg';
import productionImg from '../assets/production.jpg';
import factoryDiagram from '../assets/factory-diagram.svg';

const Home = () => {
  const heroImages = [
    `linear-gradient(120deg, rgba(6,10,10,0.9) 0%, rgba(10,18,16,0.92) 48%, rgba(10,22,18,0.86) 100%), url(${productionImg})`
  ];

  const categories = [
    {
      title: 'Капсульные модульные дома',
      description: 'ЛСТК-каркас, инженерное проектирование, производство комплекта и монтаж с контролем геометрии.',
      audience: 'Для частных и коммерческих проектов',
      image: capsulesImg,
      link: '/capsules'
    },
    {
      title: 'Ангары и склады',
      description: 'Индустриальный ЛСТК-комплект: расчёт нагрузок, профилирование, упаковка и маркировка для быстрой сборки.',
      audience: 'Для складов, производств и логистики',
      image: hangarsImg,
      link: '/hangars'
    },
    {
      title: 'Гаражи и навесы',
      description: 'ЛСТК-каркас с точной посадкой, комплект крепежа и чертежи монтажа для минимизации простоев.',
      audience: 'Для бизнеса и частных участков',
      image: garagesImg,
      link: '/garages'
    }
  ];

  const premiumBenefits = [
    {
      icon: Layers,
      title: 'Инженерная точность',
      text: 'ЧПУ-разметка и калиброванные профили → стабильная геометрия → монтаж без подрезок.',
      badge: 'Ключевая ценность',
      meta: 'Основа производства'
    },
    {
      icon: Gem,
      title: 'Премиальные материалы',
      text: 'Оцинковка и защитные покрытия промышленного класса → ресурс конструкции → без коррозии на сроке службы.'
    },
    {
      icon: ShieldCheck,
      title: 'Контроль безопасности',
      text: 'Нормативные проверки и паспорта партий → подтверждённая несущая способность → допуск к коммерческим объектам.'
    },
    {
      icon: Timer,
      title: 'Дисциплина сроков',
      text: 'Синхронизация расчёта, производства и логистики → предсказуемый график → ввод объекта без задержек.'
    }
  ];

  const coreBenefit = premiumBenefits[0];
  const supportingBenefits = premiumBenefits.slice(1);

  const CoreIcon = coreBenefit.icon;

  const productionHighlights = [
    'Входной контроль металла и маркировка партий',
    'Инженерный расчёт ЛСТК и выпуск КМ/КМД',
    'ЧПУ-пробивка и профилирование с допуском по геометрии',
    'Упаковка, маркировка, логистика и шеф-монтаж'
  ];

  const productionStats = [
    'X лет на рынке — заводской контур',
    'X м² конструкций в год — подтверждённая мощность',
    'Толщины профилей X–X мм — под нагрузку проекта',
    'География: Казахстан / регионы'
  ];

  const documents = [
    { title: 'Пакет документов для тендера', file: '/documents', result: 'Готовность к закупкам' },
    { title: 'Сертификаты соответствия', file: '/documents', result: 'Подтверждённые материалы' },
    { title: 'Договор и спецификация', file: '/documents', result: 'Прозрачные условия поставки' }
  ];

  const trustMetrics = [
    { label: 'Лет на рынке', value: 'X+' },
    { label: 'м² ЛСТК в год', value: 'X 000' },
    { label: 'Реализованных объектов', value: 'X+' },
    { label: 'География', value: 'Казахстан / регионы' },
    { label: 'Контроль геометрии', value: 'допуск по проекту' }
  ];

  const heroBadges = [
    'Точность профилирования и маркировка',
    'Чёткие сроки производства и отгрузки',
    'Проектная ответственность и сопровождение'
  ];

  const processSteps = [
    {
      title: 'Техническое задание',
      subtitle: 'Фиксация требований проекта',
      description: 'Нагрузки, пролёты, сроки, требования к геометрии и монтажу.'
    },
    {
      title: 'Инженерный расчёт ЛСТК',
      subtitle: 'Расчёт несущей способности',
      description: 'Подбор сечений, схем креплений, проверка нагрузок и устойчивости.'
    },
    {
      title: 'Проектирование (КМ / КМД)',
      subtitle: 'Рабочая документация',
      description: 'Выпускаем КМ/КМД, увязываем узлы, закладные и маркировку элементов.'
    },
    {
      title: 'Производство',
      subtitle: 'Изготовление конструкций',
      description: 'ЧПУ-разметка, профилирование, контроль размеров каждой партии.'
    },
    {
      title: 'Контроль качества',
      subtitle: 'Проверка и приёмка',
      description: 'Входной контроль металла, выборочная проверка узлов и крепежа.'
    },
    {
      title: 'Упаковка и доставка',
      subtitle: 'Логистика под объект',
      description: 'Маркировка, упаковка, транспортный формат, организация поставки.'
    },
    {
      title: 'Монтаж / сопровождение',
      subtitle: 'Поддержка реализации',
      description: 'Шеф-монтаж, инструкции, авторский надзор по запросу.'
    }
  ];

  const materials = [
    { icon: Factory, title: 'Сталь', text: 'Прокат X марки, подтверждён сертификатами. Входной контроль партии.' },
    { icon: Gauge, title: 'Толщина профилей', text: 'X–X мм под нагрузку проекта. Расчёт и подбор сечений инженером.' },
    { icon: ShieldCheck, title: 'Покрытие', text: 'Цинк/покрытие промышленного класса, стойкость к коррозии.', },
    { icon: FileText, title: 'Нормы и стандарты', text: 'Проектирование и производство по ГОСТ / СТ РК (по применимости).' }
  ];

  const openWhatsApp = (message) => {
    const defaultMsg = 'Здравствуйте! Интересуюсь металлоконструкциями Фабрика Каркасов Алатау.';
    const msg = encodeURIComponent(message || defaultMsg);
    window.open(`${siteConfig.social.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-carousel">
          {heroImages.map((img, index) => (
            <div key={index} className="hero-slide active" style={{ backgroundImage: img }} />
          ))}
        </div>

        <div className="hero-overlay" />
        <div className="hero-vignette" />

        <div className="container hero-inner">
          <div className="hero-badge">Промышленное производство ЛСТК</div>
          <h1 className="hero-title">
            <span className="hero-word steel">Стальные решения</span>
            <span className="hero-word subtitle-line">для масштабных проектов</span>
          </h1>
          <p className="hero-positioning">
            Производство ЛСТК-конструкций: проектирование, расчёт, изготовление, поставка и монтаж по РК.
          </p>
          <p className="hero-subtitle">
            Инженерный контроль на каждом этапе: входной контроль металла, ЧПУ-профилирование, маркировка и сопровождение монтажа.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => openWhatsApp('Хочу получить расчёт и КП по ЛСТК-проекту.')}>
              Получить расчёт и КП <ArrowRight size={20} />
            </button>
          </div>

          <div className="hero-meta">
            <div className="hero-meta__note">Ответим в течение 15 минут в рабочее время</div>
            <div className="hero-trust">
              {heroBadges.map((item, idx) => (
                <div key={idx} className="hero-trust-card">
                  <CheckCircle2 size={18} /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="trust-metrics">
            {trustMetrics.map((metric, idx) => (
              <div key={idx} className="metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <SectionHeader
            eyebrow="Почему нам доверяют"
            title="Закрываем ключевые риски на старте"
            subtitle="Фиксируем требования по геометрии и документации заранее, чтобы монтаж и сдача объекта шли без пауз."
          />
          <div className="trust-grid">
            <div className="trust-card">
              <Layers size={18} />
              <p>Входной контроль металла, ЧПУ-профилирование и маркировка каждой детали.</p>
            </div>
            <div className="trust-card">
              <Gem size={18} />
              <p>Комплектация по спецификации: крепёж, метизы, инструкции и маркировка узлов.</p>
            </div>
            <div className="trust-card">
              <ShieldCheck size={18} />
              <p>Сертификаты материалов, договор, спецификация и готовность к тендерам.</p>
            </div>
            <div className="trust-card">
              <Timer size={18} />
              <p>Сроки производства и отгрузки по графику, закреплённому в договоре.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="premium-directions" className="directions-section">
        <div className="container">
          <SectionHeader
            eyebrow="Линейка решений"
            title="КАТЕГОРИИ"
            subtitle="Промышленные комплекты ЛСТК с инженерным расчётом, контролем геометрии и сопровождаемым монтажом."
          />

          <div className="directions-grid">
            {categories.map((item, index) => (
              <Link key={index} to={item.link} className="direction-card">
                <div className="direction-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(4,7,7,0.6) 0%, rgba(4,7,7,0.4) 36%, rgba(4,7,7,0.78) 100%), url(${item.image})` }} />
                <div className="direction-body">
                  <div className="direction-top">
                    <h3>{item.title}</h3>
                    <ArrowRight size={18} />
                  </div>
                  <p className="direction-audience">{item.audience}</p>
                  <p>{item.description}</p>
                  <div className="direction-actions">
                    <span className="btn-primary ghost">Подробнее</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="aesthetic-section">
        <div className="container">
          <SectionHeader
            eyebrow="Премиальный стандарт"
            title="Архитектурная эстетика и технологичность"
            subtitle="Производство ЛСТК с упором на процессы: контроль металла, точность профилирования, инженерные расчёты и стабильность геометрии."
          />

          <div className="aesthetic-grid">
            <div className="aesthetic-surface">
              <div className="factory-card">
                <div className="factory-layer">
                  <div className="factory-badge">
                    <Sparkles size={16} /> Фабрика Каркасов Алатау
                  </div>
                  <h3>Технологичная фабрика полного цикла</h3>
                  <p>
                    Управляем всей цепочкой — от входного контроля металла до шеф-монтажа. Геометрия и сроки фиксируются в договоре.
                  </p>

                  <div className="factory-stats">
                    {productionStats.map((item, idx) => (
                      <div key={idx} className="stat-pill">
                        <Timer size={16} /> {item}
                      </div>
                    ))}
                  </div>

                  <div className="factory-body">
                    <div className="production-highlights">
                      {productionHighlights.map((item, index) => (
                        <div key={index} className="highlight-item">
                          <CheckCircle2 size={18} /> {item}
                        </div>
                      ))}
                    </div>

                    <div className="factory-visual">
                      <div className="visual-frame">
                        <img src={factoryDiagram} alt="Схема потоков фабрики от расчёта до монтажа" />
                        <div className="visual-caption">Реальный поток работ: расчёт → ЧПУ → сборка → контроль → монтаж</div>
                      </div>
                    </div>
                  </div>

                  <Link to="/about" className="btn-primary factory-action">
                    Как мы производим <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="cluster-surface">
                <div className="premium-quad">
                  <div className="premium-card premium-core">
                    <div className="core-top">
                      <span className="core-badge">{coreBenefit.badge}</span>
                      <span className="core-meta">{coreBenefit.meta}</span>
                    </div>
                    <div className="core-header">
                      <div className="premium-icon accent">
                        <CoreIcon size={28} />
                      </div>
                      <div className="core-title-block">
                        <h3>{coreBenefit.title}</h3>
                        <p className="core-subline">Факт → ценность → результат</p>
                      </div>
                    </div>
                    <p className="core-text">{coreBenefit.text}</p>
                    <div className="core-footer">
                      <div className="core-signal">Стабильная геометрия по всей партии</div>
                    </div>
                  </div>

                  <div className="support-grid">
                    {supportingBenefits.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className={`premium-card support-card ${idx === 2 ? 'wide-support' : ''}`}>
                          <div className="premium-icon subdued">
                            <Icon size={22} />
                          </div>
                          <div className="support-body">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <SectionHeader
            eyebrow="Как мы работаем"
            title="Процесс производства"
            subtitle="Линейный инженерный процесс от задания до монтажа: фиксация требований, расчёт, производство, логистика."
          />

          <div className="process-regulation">
            <div className="process-route" aria-hidden="true">
              <svg viewBox="0 0 100 70" preserveAspectRatio="none">
                <defs>
                  <marker id="process-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="rgba(14, 162, 115, 0.8)" />
                  </marker>
                </defs>
                <path
                  d="M4 18 H96 V44 H6 H94"
                  stroke="rgba(14, 162, 115, 0.5)"
                  strokeWidth="1.4"
                  fill="none"
                  strokeDasharray="7 6"
                  markerEnd="url(#process-arrow)"
                />
              </svg>
            </div>

            <div className="process-track" aria-label="Производственная цепочка">
              <div className="process-row process-row-top">
                {processSteps.slice(0, 4).map((step, index) => (
                  <div key={index} className="process-card" aria-label={`${index + 1}. ${step.title}`}>
                    <div className="process-step-number">0{index + 1}</div>
                    <div className="process-step-content">
                      <div className="process-step-subtitle">{step.subtitle}</div>
                      <h3 className="process-step-title">{step.title}</h3>
                      <p className="process-step-text">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="process-row process-row-bottom">
                {processSteps.slice(4).map((step, index) => (
                  <div key={index + 4} className="process-card" aria-label={`${index + 5}. ${step.title}`}>
                    <div className="process-step-number">0{index + 5}</div>
                    <div className="process-step-content">
                      <div className="process-step-subtitle">{step.subtitle}</div>
                      <h3 className="process-step-title">{step.title}</h3>
                      <p className="process-step-text">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="process-note">
              Процесс выстроен как единый инженерный цикл — от расчёта до монтажа, без разрывов и допущений.
            </div>
          </div>
        </div>
      </section>

      <section className="materials-section">
        <div className="container">
          <SectionHeader
            eyebrow="Материалы и стандарты"
            title="Факты о комплектации"
            subtitle="Работаем только с подтверждёнными материалами и нормами — без маркетинговых обещаний."
          />

          <div className="materials-grid">
            {materials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="material-card">
                  <div className="material-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="documents-section">
        <div className="container">
          <SectionHeader
            eyebrow="Документы"
            title="Документы и сертификаты"
            subtitle="Актуальные сертификаты, договор и спецификация поставки."
          />

          <div className="documents-grid">
            {documents.map((doc, index) => (
              <div key={index} className="document-card">
                <Building2 size={28} />
                <h3>{doc.title}</h3>
                <span className="document-result">{doc.result}</span>
              </div>
            ))}
          </div>

          <div className="documents-cta">
            <Link to="/documents" className="btn-primary">
              Подробнее <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-card">
            <SectionHeader
              eyebrow="Контакты"
              title="Обсудим ваш проект"
              subtitle="Ответим в течение рабочего дня и предложим готовые решения под ваши задачи."
            />

            <div className="contact-badges">
              <span className="contact-badge">Инженер на связи</span>
              <span className="contact-response">Ответ в течение 15 минут</span>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <strong>Телефон:</strong> {siteConfig.contact.phone}
              </div>
              <div className="contact-item">
                <strong>Instagram:</strong>{' '}
                <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
                  @alatau_lstk
                </a>
              </div>
              <div className="contact-item">
                <strong>Адрес:</strong> {siteConfig.contact.address}
              </div>
              <div className="contact-item">
                <strong>Режим работы:</strong> {siteConfig.contact.workingHours}
              </div>
            </div>

            <div className="contact-actions">
              <button className="btn-primary contact-whatsapp" onClick={() => openWhatsApp('Хочу получить расчёт и КП по проекту.')}>
                Получить расчёт и КП
              </button>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="map"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '18px' }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${siteConfig.location.lat},${siteConfig.location.lng}&hl=ru&z=14&output=embed`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
