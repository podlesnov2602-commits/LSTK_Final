import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './ProductPage.css';

const Capsules = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const gallery = [
    { 
      image: 'https://images.unsplash.com/photo-1623731389652-079c8732ed34?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzY0MzIzODU5fDA&ixlib=rb-4.1.0&q=85',
      caption: 'Модульная капсула 24 м²'
    },
    { 
      image: 'https://images.unsplash.com/photo-1668508081712-89aeee56681e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxjb250YWluZXIlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzY0MzIzODU5fDA&ixlib=rb-4.1.0&q=85',
      caption: 'Офисное помещение из ЛСТК'
    },
    { 
      image: 'https://images.unsplash.com/photo-1745566589290-d678de04f990?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxjb250YWluZXIlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzY0MzIzODU5fDA&ixlib=rb-4.1.0&q=85',
      caption: 'Жилая капсула с террасой'
    },
    { 
      image: 'https://images.unsplash.com/photo-1759647028384-1efcc6e0eff4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHw0fHxtb2R1bGFyJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzY0MzIzODQxfDA&ixlib=rb-4.1.0&q=85',
      caption: 'Двухэтажная конструкция'
    },
    { 
      image: 'https://images.unsplash.com/photo-1623731389652-079c8732ed34?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzY0MzIzODU5fDA&ixlib=rb-4.1.0&q=85',
      caption: 'Капсула для бизнеса'
    },
    { 
      image: 'https://images.unsplash.com/photo-1668508081712-89aeee56681e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxjb250YWluZXIlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzY0MzIzODU5fDA&ixlib=rb-4.1.0&q=85',
      caption: 'Готовое решение под ключ'
    }
  ];

  const configurations = [
    {
      title: 'Каркас',
      subtitle: 'Металлический каркас ЛСТК',
      features: ['Профиль ЛСТК', 'Крепеж', 'Чертежи']
    },
    {
      title: 'Каркас + оболочка',
      subtitle: 'Каркас с внешней отделкой',
      features: ['Каркас ЛСТК', 'Сэндвич-панели', 'Кровля', 'Окна/двери']
    },
    {
      title: 'Готовая капсула',
      subtitle: 'Под ключ с отделкой',
      features: ['Каркас', 'Отделка', 'Коммуникации', 'Мебель']
    }
  ];

  const advantages = [
    { title: 'Ровная геометрия', description: 'Точность до миллиметра' },
    { title: 'Лёгкий каркас', description: 'Не требует мощного фундамента' },
    { title: 'Долговечность', description: 'Срок службы более 50 лет' },
    { title: 'Мобильность', description: 'Можно разобрать и переместить' }
  ];

  const pricing = {
    title: 'Капсула 18–24 м²',
    price: 'от 5.9 млн ₽',
    note: 'Точная цена рассчитывается индивидуально'
  };

  const steps = [
    { number: '01', title: 'Консультация', description: 'Обсуждаем ваши требования' },
    { number: '02', title: 'Проектирование', description: 'Создаём 3D-модель' },
    { number: '03', title: 'Производство', description: 'Изготовление на заводе' },
    { number: '04', title: 'Монтаж', description: 'Установка за 2-5 дней' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Запрос на расчёт: Капсулы\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`
    );
    window.open(`${siteConfig.social.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="product-page">
      {/* Hero */}
      <section className="product-hero">
        <div className="product-hero-overlay" />
        <div className="container">
          <div className="product-hero-content">
            <h1 className="display-lg">Капсулы</h1>
            <p className="body-lg">Модульные конструкции для жилья, офисов и бизнеса</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
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

      {/* Configurations */}
      <section className="configurations-section">
        <div className="container">
          <h2 className="section-title display-md">Комплектации</h2>
          <div className="configurations-grid">
            {configurations.map((config, index) => (
              <div key={index} className="config-card">
                <h3 className="h2">{config.title}</h3>
                <p className="config-subtitle">{config.subtitle}</p>
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

      {/* Pricing */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-card">
            <h2 className="display-md">{pricing.title}</h2>
            <div className="pricing-amount">{pricing.price}</div>
            <p className="pricing-note">{pricing.note}</p>
          </div>
        </div>
      </section>

      {/* Steps */}
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

      {/* Form */}
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

export default Capsules;
