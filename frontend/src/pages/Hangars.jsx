import React, { useState, useEffect } from 'react';
import { ArrowRight, DollarSign, Layers, Zap, RefreshCw } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './ProductPage.css';

const Hangars = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

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
      caption: 'Ангар 1200 м² · производство и сборка'
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
      caption: 'Индустриальный корпус · логистика 24/7'
    },
    {
      image: 'https://images.unsplash.com/photo-1669003152237-7bd1ac4c13f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjQzMjM4OTJ8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Складской модуль · FMCG'
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
    { number: '01', title: 'Консультация и ТЗ', description: 'Фиксируем параметры ангара и участка' },
    { number: '02', title: 'Инженерный расчёт', description: 'Прорабатываем пролёты, нагрузки и узлы' },
    { number: '03', title: 'Производство', description: 'Запускаем металлокаркас и ограждения' },
    { number: '04', title: 'Монтаж и сдача', description: 'Собираем, проверяем и передаём объект' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Запрос на расчёт: Ангары\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`
    );
    window.open(`${siteConfig.social.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="product-page">
      <section className="product-hero product-hero-hangar">
        <div className="product-hero-overlay" />
        <div className="container">
          <div className="product-hero-content">
            <h1 className="display-lg">Ангары</h1>
            <p className="body-lg">Промышленные ангары и склады под логистику, производство и хранение</p>
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
                <div key={index} className="advantage-card-product">
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

      <section className="form-section">
        <div className="container">
          <div className="form-container form-container-soft">
            <h2 className="display-sm">Получить расчёт</h2>
            <p className="body-lg">Рассчитаем ангар под ваши размеры и задачу</p>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="form-input"
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="form-input"
              />
              <textarea
                placeholder="Опишите ваш проект"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-textarea"
                rows="4"
              />
              <button type="submit" className="btn-primary btn-light">
                Получить расчёт
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hangars;
