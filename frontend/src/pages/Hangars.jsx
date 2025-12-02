import React, { useState } from 'react';
import { Check, ArrowRight, Wrench, Package, Tractor } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './ProductPage.css';

const Hangars = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    purpose: ''
  });

  const targetAudience = [
    {
      icon: Wrench,
      title: 'СТО / автомойки',
      description: 'Просторные помещения с удобным заездом для автомобилей'
    },
    {
      icon: Package,
      title: 'Склады / логистика',
      description: 'Надёжные складские здания для хранения и логистики'
    },
    {
      icon: Tractor,
      title: 'Фермерские ангары',
      description: 'Специализированные помещения для сельского хозяйства'
    }
  ];

  const typicalSolutions = [
    {
      title: 'Ангар 150 м²',
      price: 'от 3 500 000 ₸',
      features: ['Каркас ЛСТК', 'Профнастил', 'Ворота секционные', 'Освещение базовое']
    },
    {
      title: 'Ангар 200 м²',
      price: 'от 4 500 000 ₸',
      features: ['Каркас ЛСТК усиленный', 'Профнастил + утепление', 'Ворота автоматические', 'Освещение + вентиляция']
    },
    {
      title: 'Ангар 300 м²',
      price: 'от 6 200 000 ₸',
      features: ['Полный комплекс ЛСТК', 'Утепление 100мм', 'Двое ворот', 'Полная инженерия']
    },
    {
      title: 'Павильон / СТО',
      price: 'по запросу',
      features: ['Индивидуальный проект', 'Все коммуникации', 'Офисные помещения', 'Специальное оборудование']
    }
  ];

  const advantages = [
    {
      title: 'Быстрый монтаж',
      description: 'Готовое здание от 14 дней'
    },
    {
      title: 'Снижение стоимости',
      description: 'До 40% дешевле капитального строительства'
    },
    {
      title: 'Мобильность',
      description: 'Можно демонтировать и перенести на новое место'
    },
    {
      title: 'Надёжность',
      description: 'Срок службы более 50 лет'
    }
  ];

  const processSteps = [
    { number: '01', title: 'Заявка', description: 'Оставляете запрос на сайте' },
    { number: '02', title: 'Техзадание', description: 'Уточняем детали проекта' },
    { number: '03', title: 'Смета', description: 'Готовим точный расчёт' },
    { number: '04', title: 'Договор', description: 'Заключаем официальный договор' },
    { number: '05', title: 'Производство', description: 'Изготовление конструкций' },
    { number: '06', title: 'Монтаж', description: 'Сборка на вашем участке' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Запрос КП: Ангары\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nПлощадь: ${formData.area}\nНазначение: ${formData.purpose}`
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
            <p className="body-lg">Промышленные ангары и складские помещения</p>
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

      <section className="configurations-section">
        <div className="container">
          <h2 className="section-title display-md">Варианты комплектаций</h2>
          <div className="configurations-grid">
            {configurations.map((config, index) => (
              <div key={index} className="config-card">
                <h3 className="h2">{config.title}</h3>
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

export default Hangars;
