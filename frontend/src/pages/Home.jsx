import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Timer, Building2, FileText, Factory, Gauge, ShieldCheck } from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import SectionHeader from '../components/ui/SectionHeader';
import './Home.css';

import capsulesImg from '../assets/capsules.png';
import hangarsImg from '../assets/Hangars.jpeg';
import garagesImg from '../assets/garages.jpeg';
import productionImg from '../assets/production.jpg';
import capsulesHeroImg from '../assets/CapsulesHero.png';
import factoryDiagram from '../assets/factory-diagram.svg';

const Home = () => {
  const heroBackgrounds = useMemo(
    () => [productionImg, hangarsImg, capsulesHeroImg],
    []
  );

  const mobileHeroImage = heroBackgrounds[0];

  const [isMobile, setIsMobile] = useState(false);
  const [visibleLayer, setVisibleLayer] = useState(0);
  const [layerImages, setLayerImages] = useState(() => [
    { id: 'layer-1', index: 0 },
    { id: 'layer-2', index: heroBackgrounds.length > 1 ? 1 : 0 }
  ]);
  const visibleLayerRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateMatch = () => setIsMobile(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener('change', updateMatch);

    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, []);

  useEffect(() => {
    if (isMobile) {
      visibleLayerRef.current = 0;
      setVisibleLayer(0);
      setLayerImages([{ id: 'layer-1', index: 0 }]);
    } else {
      setLayerImages([
        { id: 'layer-1', index: 0 },
        { id: 'layer-2', index: heroBackgrounds.length > 1 ? 1 : 0 }
      ]);
    }
  }, [heroBackgrounds.length, isMobile]);

  useEffect(() => {
    if (isMobile || heroBackgrounds.length <= 1) return undefined;

    const delay = 7000;

    const interval = setInterval(() => {
      const hiddenLayer = visibleLayerRef.current === 0 ? 1 : 0;

      setLayerImages((prev) => {
        const nextIndex = (prev[visibleLayerRef.current].index + 1) % heroBackgrounds.length;
        const updated = [...prev];
        updated[hiddenLayer] = { ...updated[hiddenLayer], index: nextIndex };
        return updated;
      });

      requestAnimationFrame(() => {
        visibleLayerRef.current = hiddenLayer;
        setVisibleLayer(hiddenLayer);
      });
    }, delay);

    return () => clearInterval(interval);
  }, [heroBackgrounds.length, isMobile]);

  const categories = [
    {
      title: 'Капсульные здания',
      description: 'Быстрый ввод, предсказуемый бюджет и полный комплект для сборки без доработок на площадке.',
      image: capsulesImg,
      link: '/capsules',
      featured: true
    },
    {
      title: 'Ангары и склады',
      description: 'Большие пролёты, расчёт нагрузок и маркировка каждой детали для быстрой сборки по схеме.',
      image: hangarsImg,
      link: '/hangars'
    },
    {
      title: 'Гаражи и хозблоки',
      description: 'Функциональность без переплаты: точная геометрия, крепёж и инструкции без сюрпризов по срокам.',
      image: garagesImg,
      link: '/garages'
    }
  ];

  const riskPoints = [
    'Фиксируем нагрузки и пролёты, чтобы избежать перерасхода металла и переделок на площадке.',
    'Маркируем и комплектуем каждую партию — бригада собирает без ожиданий и разночтений.',
    'Закрепляем сроки в договоре и синхронизируем логистику под график стройки.',
    'Документируем расчёты и материалы — даём основу для экспертизы и тендеров.',
    'Берём на себя контроль геометрии: допуски подтверждаем на производстве.'
  ];

  const productionHighlights = [
    'Входной контроль металла и маркировка партий',
    'Инженерный расчёт ЛСТК и выпуск КМ/КМД',
    'ЧПУ-пробивка и профилирование с допуском по геометрии',
    'Упаковка, маркировка, логистика и шеф-монтаж'
  ];

  const productionStats = [
    '10+ лет в ЛСТК — заводской контур',
    'до 3 500 м² в месяц — стабильная мощность',
    'Толщины профилей 1,2–2 мм — под расчёт нагрузок',
    'География: Казахстан / регионы',
  ];

  const documents = [
    { title: 'Пакет документов для тендера', file: '/documents', result: 'Готовность к закупкам' },
    { title: 'Сертификаты соответствия', file: '/documents', result: 'Подтверждённые материалы' },
    { title: 'Договор и спецификация', file: '/documents', result: 'Прозрачные условия поставки' }
  ];

  const trustMetrics = [
    { label: 'Готовых комплектов в месяц', value: '15+' },
    { label: 'Площадь отгрузок', value: '3 500 м²' },
    { label: 'Проекты по Казахстану', value: '40+' },
    { label: 'Контроль геометрии', value: 'допуск по КМД' }
  ];

  const heroBadges = [
    'Фиксируем требования в КМ/КМД — исключаем споры на площадке',
    'Маркировка и комплектация партий — монтаж без пауз',
    'Сроки производства и логистики — закреплены в договоре'
  ];

  const processSteps = [
    {
      title: 'Техническое задание',
      subtitle: 'Фиксируем исходные данные',
      description: 'Нагрузки, пролёты, график стройки и требования по геометрии — чтобы исключить допущения.'
    },
    {
      title: 'Расчёт и КМ/КМД',
      subtitle: 'Проектная ответственность',
      description: 'Подбираем сечения, проверяем несущую способность, выпускаем документацию под монтаж.'
    },
    {
      title: 'Производство',
      subtitle: 'Контроль геометрии',
      description: 'ЧПУ-пробивка, профилирование и проверка размеров каждой партии до упаковки.'
    },
    {
      title: 'Комплектация и логистика',
      subtitle: 'Без разрывов по поставке',
      description: 'Маркируем, упаковываем и собираем комплекты под график объекта.'
    },
    {
      title: 'Сопровождение монтажа',
      subtitle: 'Ввод без задержек',
      description: 'Инструкции, шеф-монтаж и контроль узлов по запросу заказчика.'
    }
  ];

  const materials = [
    { icon: Factory, title: 'Сталь', text: 'Прокат подтверждён сертификатами. Входной контроль каждой партии.' },
    { icon: Gauge, title: 'Толщина профилей', text: '1,2–2 мм под нагрузку проекта. Расчёт и подбор сечений инженером.' },
    { icon: ShieldCheck, title: 'Покрытие', text: 'Цинк/покрытие промышленного класса, стойкость к коррозии.' },
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
        <div className="hero-surfaces">
          {isMobile ? (
            <div className="hero-static-layer">
              <img
                src={mobileHeroImage}
                alt="Hero background"
                className="hero-static-image"
                loading="lazy"
              />
              <div className="hero-surface-gradient" aria-hidden />
            </div>
          ) : (
            layerImages.map((layer, idx) => (
              <div
                key={layer.id}
                className={`hero-surface-layer ${visibleLayer === idx ? 'is-visible' : ''}`}
              >
                <img
                  src={heroBackgrounds[layer.index]}
                  alt="Hero background"
                  className="hero-surface-image"
                  loading="lazy"
                />
                <div className="hero-surface-gradient" aria-hidden />
              </div>
            ))
          )}
        </div>

        <div className="hero-overlay" />

        <div className="container hero-inner hero-panel">
          <div className="hero-badge">Промышленное производство ЛСТК</div>
          <h1 className="hero-title">
            <span className="hero-word steel">Стальные решения</span>
            <span className="hero-word subtitle-line">для масштабных проектов</span>
          </h1>
          <p className="hero-positioning">
            Производство, проектирование и поставка ЛСТК-конструкций для коммерческих и инфраструктурных объектов по всему Казахстану.
          </p>
          <p className="hero-subtitle">
            Держим расчёт, геометрию и график: фиксируем параметры в договоре, комплектуем и маркируем партии, контролируем поставку.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => openWhatsApp('Нужен расчёт проекта ЛСТК для объекта.')}>
              Получить расчёт проекта <ArrowRight size={20} />
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

            <div className="trust-metrics">
              {trustMetrics.map((metric, idx) => (
                <div key={idx} className="metric-card">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="premium-directions" className="directions-section">
        <div className="container">
          <SectionHeader
            eyebrow="Линейка решений"
            title="Категории продукции"
            subtitle="Главные комплекты ЛСТК под коммерческие и инфраструктурные объекты. Всё просчитано и готово к сборке."
          />

          <div className="directions-grid">
            {categories.map((item, index) => (
              <Link key={index} to={item.link} className={`direction-card ${item.featured ? 'featured' : ''}`}>
                <div
                  className="direction-image"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(4,7,7,0.35) 0%, rgba(4,7,7,0.4) 48%, rgba(4,7,7,0.55) 100%), url(${item.image})`,
                  }}
                />
                <div className="direction-body">
                  <div className="direction-top">
                    <h3>{item.title}</h3>
                  </div>
                  <p className="direction-summary">{item.description}</p>
                  <div className="direction-actions">
                    <span className="btn-primary ghost">Подробнее</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="risk-section">
        <div className="container">
          <SectionHeader
            eyebrow="Как мы снимаем риски"
            title="Закрываем ключевые узкие места"
            subtitle="Говорим на языке заказчика: сроки, ответственность и предсказуемость стоимости."
          />

          <div className="risk-grid">
            {riskPoints.map((point, index) => (
              <div key={index} className="risk-card">
                <div className="risk-index">0{index + 1}</div>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <SectionHeader
            eyebrow="Как мы работаем"
            title="Процесс производства"
            subtitle="5 шагов, которые держат под контролем сроки, бюджет и геометрию."
          />

          <div className="process-regulation">
            <div className="process-track" aria-label="Производственная цепочка">
              <div className="process-row single-row">
                {processSteps.map((step, index) => (
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
            </div>

            <div className="process-note">
              Цепочка настроена как единый инженерный контур: фиксируем условия, производим, комплектуем, вводим в работу без разрывов.
            </div>
          </div>
        </div>
      </section>

      <section className="aesthetic-section">
        <div className="container">
          <SectionHeader
            eyebrow="Премиальный стандарт"
            title="Архитектурная эстетика и технологичность"
            subtitle="Визуальная чистота и дисциплина производства без лишнего пафоса."
          />

          <div className="aesthetic-layout">
            <div className="aesthetic-text">
              <div className="factory-badge subdued">
                <Sparkles size={16} /> Контроль и дисциплина
              </div>
              <h3>Технологичная фабрика полного цикла</h3>
              <p>
                Убираем визуальный шум и работаем по принципу: расчёт → производство → комплектация → монтаж. Всё фиксируется документально.
              </p>

              <div className="factory-stats">
                {productionStats.map((item, idx) => (
                  <div key={idx} className="stat-pill muted">
                    <Timer size={16} /> {item}
                  </div>
                ))}
              </div>

              <div className="production-highlights">
                {productionHighlights.map((item, index) => (
                  <div key={index} className="highlight-item">
                    <CheckCircle2 size={18} /> {item}
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-primary ghost-link">
                Детали производства <ArrowRight size={18} />
              </Link>
            </div>

            <div className="aesthetic-visual">
              <div className="visual-frame soft">
                <img src={factoryDiagram} alt="Схема потоков фабрики от расчёта до монтажа" />
                <div className="visual-caption">Контур без разрывов: расчёт → ЧПУ → упаковка → объект</div>
              </div>
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

      <section className="final-cta">
        <div className="container final-grid">
          <div className="final-copy">
            <SectionHeader
              eyebrow="Готовность к решению"
              title="Проект можно обсуждать долго. Или сразу считать правильно."
              subtitle="Давайте закрепим параметры и рассчитаем комплект без лишних итераций."
            />

            <div className="contact-details compact">
              <div className="contact-item">
                <strong>Телефон:</strong> {siteConfig.contact.phone}
              </div>
              <div className="contact-item">
                <strong>Email:</strong> {siteConfig.contact.email}
              </div>
            </div>

            <button className="btn-primary" onClick={() => openWhatsApp('Готов обсудить проект и получить расчёт.')}>Обсудить проект</button>
          </div>

          <div className="contact-map subdued-map">
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
