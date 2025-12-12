import React, { useEffect } from 'react';
import { ArrowRight, DollarSign, Layers, Zap, RefreshCw } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './ProductPage.css';

const Hangars = () => {
  useEffect(() => {
    // Scroll to gallery section on page load
    const timer = setTimeout(() => {
      const gallerySection = document.querySelector('.gallery-section');
      if (gallerySection) {
        const yOffset = -100; // Offset for header
        const y = gallerySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const gallery = [
    {
      image: 'https://images.unsplash.com/photo-1679068215572-e4ba8fdce4dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Ангар 700 м² · склад и логистика'
    },
    {
      image: 'https://images.unsplash.com/photo-1720036237334-9263cd28c3d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Индустриальный корпус 1200 м² · производство и сборка'
    },
    {
      image: 'https://images.unsplash.com/photo-1669003152237-7bd1ac4c13f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjQzMjM4OTJ8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Комплекс 2400 м² · кросс-докинг'
    },
    {
      image: 'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Ангар 300 м² · локальный склад'
    },
    {
      image: 'https://images.unsplash.com/photo-1679068215572-e4ba8fdce4dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Индустриальный корпус 1800 м² · логистика 24/7'
    },
    {
      image: 'https://images.unsplash.com/photo-1669003152237-7bd1ac4c13f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjQzMjM4OTJ8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Складской модуль 950 м² · FMCG'
    }
  ];

  const typicalSizes = [
    { size: '150 м²', price: 'от 4.5 млн ₸' },
    { size: '200 м²', price: 'от 6 млн ₸' },
    { size: '300 м²', price: 'от 9 млн ₸' }
  ];

  const advantages = [
    { icon: Layers, title: 'Большие пролёты без внутренних опор' },
    { icon: DollarSign, title: 'Снижение стоимости фундамента' },
    { icon: Zap, title: 'Быстрый монтаж и масштабируемость' },
    { icon: RefreshCw, title: 'Расчёт под снеговые и ветровые нагрузки' }
  ];

  const steps = [
    { number: '01', title: 'Консультация и ТЗ', description: 'Уточняем параметры участка, габариты и задачу' },
    { number: '02', title: 'Инженерный расчёт', description: 'Закладываем пролёты, нагрузки, узлы и ограждения' },
    { number: '03', title: 'Производство', description: 'Изготавливаем металлокаркас и подготовку под монтаж' },
    { number: '04', title: 'Монтаж и сдача', description: 'Собираем, проверяем и передаём объект' }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Запрос на расчёт ангара. Опишите размеры, пролёт и нагрузки — инженер свяжется напрямую.'
    );
    window.open(`${siteConfig.social.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="product-page">
      <section className="product-hero product-hero-hangar">
        <div className="container">
          <div className="product-hero-content">
            <h1 className="display-lg">Ангары</h1>
            <p className="body-lg">Промышленные ангары и склады под логистику, производство и хранение</p>
            <p className="hero-subline">Проектирование • производство • монтаж</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title display-md">Галерея проектов</h2>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div key={index} className="gallery-item-wrapper">
                <div className="gallery-item" style={{ backgroundImage: `url(${item.image})` }} />
                <p className="gallery-caption">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages-section-product">
        <div className="container">
          <h2 className="section-title display-md">Преимущества</h2>
          <div className="advantages-grid-product">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={index}
                  className={`advantage-card-product ${index === 0 ? 'advantage-card-emphasis' : ''}`}
                >
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

      {/* Typical Sizes */}
      <section className="pricing-section alt-bg">
        <div className="container">
          <h2 className="section-title display-md">Типовые размеры и цены</h2>
          <p className="pricing-subtitle">
            Стоимость зависит от пролёта, высоты, региона и комплектации. Цены указаны ориентировочно
          </p>
          <div className="pricing-grid">
            {typicalSizes.map((item, index) => (
              <div key={index} className="pricing-card">
                <h2>{item.size}</h2>
                <div className="pricing-amount">{item.price}</div>
              </div>
            ))}
          </div>
          <p className="pricing-note">Индивидуальные размеры по запросу</p>
        </div>
      </section>

      {/* Process */}
      <section className="steps-section-horizontal">
        <div className="container">
          <h2 className="section-title display-md">Процесс работы</h2>
          <div className="steps-grid-horizontal">
            {steps.map((step, index) => (
              <div key={index} className="step-card-horizontal">
                <div className="step-number-horizontal">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="form-section cta-section">
        <div className="container">
          <div className="form-container form-container-soft cta-container">
            <h2 className="display-sm">Рассчитать ангар под вашу задачу</h2>
            <p className="body-lg cta-subtext">
              Обсудим размеры, пролёты и нагрузки — инженер свяжется с вами напрямую
            </p>
            <button type="button" className="btn-primary btn-light cta-button" onClick={handleWhatsAppClick}>
              Написать в WhatsApp
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hangars;
