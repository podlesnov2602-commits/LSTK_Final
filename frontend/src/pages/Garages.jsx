import React, { useState } from 'react';
import { Check, ArrowRight, Zap, DollarSign, Shield, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './ProductPage.css';

const Garages = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const gallery = [
    'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1720036237334-9263cd28c3d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1679068215572-e4ba8fdce4dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1669003152237-7bd1ac4c13f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjQzMjM4OTJ8MA&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1720036237334-9263cd28c3d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85'
  ];

  const configurations = [
    {
      title: 'Гараж на 1 авто',
      subtitle: '3×6 м',
      price: 'от 690 000 ₸',
      features: ['Каркас ЛСТК', 'Профнастил', 'Ворота', 'Кровля']
    },
    {
      title: 'Гараж на 2 авто',
      subtitle: '6×6 м',
      price: 'от 1.2 млн ₸',
      features: ['Каркас усиленный', 'Двое ворот', 'Утепление', 'Вентиляция']
    },
    {
      title: 'Гараж 6×8',
      subtitle: 'С мастерской',
      price: 'от 1.9 млн ₸',
      features: ['Большая площадь', 'Рабочая зона', 'Освещение', 'Электрика']
    }
  ];

  const advantages = [
    { title: 'Быстро', description: 'Монтаж 3-5 дней' },
    { title: 'Дешево', description: 'Доступные цены' },
    { title: 'Аккуратно', description: 'Качественная сборка' },
    { title: 'Не требует разрешений', description: 'Легкие конструкции' }
  ];

  const steps = [
    { number: '01', title: 'Заявка', description: 'Оставьте заявку на сайте' },
    { number: '02', title: 'Размеры', description: 'Выбираем габариты гаража' },
    { number: '03', title: 'Смета', description: 'Расчёт стоимости проекта' },
    { number: '04', title: 'Производство', description: 'Изготовление конструкций' },
    { number: '05', title: 'Монтаж', description: 'Установка за 3-5 дней' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Запрос на расчёт: Гаражи\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`
    );
    window.open(`${siteConfig.social.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="product-page">
      <section className="product-hero product-hero-garage">
        <div className="product-hero-overlay" />
        <div className="container">
          <div className="product-hero-content">
            <h1 className="display-lg">Гаражи</h1>
            <p className="body-lg">Надёжные металлические гаражи и боксы</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title display-md">Галерея проектов</h2>
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <div key={index} className="gallery-item" style={{ backgroundImage: `url(${image})` }} />
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages-section-product">
        <div className="container">
          <h2 className="section-title display-md">Преимущества</h2>
          <div className="advantages-grid-product">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card-product">
                <h3 className="h3">{advantage.title}</h3>
                <p className="body-md">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurations with Prices */}
      <section className="configurations-section">
        <div className="container">
          <h2 className="section-title display-md">Типовые проекты</h2>
          <div className="configurations-grid">
            {configurations.map((config, index) => (
              <div key={index} className="config-card">
                <h3 className="h2">{config.title}</h3>
                <p className="config-subtitle">{config.subtitle}</p>
                <div className="config-price">{config.price}</div>
                <ul className="config-features">
                  {config.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="steps-section">
        <div className="container">
          <h2 className="section-title display-md">Как мы работаем</h2>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3 className="h3">{step.title}</h3>
                <p className="body-md">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="form-section">
        <div className="container">
          <div className="form-container">
            <h2 className="display-sm">Получить расчёт</h2>
            <p className="body-lg">Оставьте заявку, и мы свяжемся с вами</p>
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
              <button type="submit" className="btn-primary">
                Отправить запрос
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Garages;
