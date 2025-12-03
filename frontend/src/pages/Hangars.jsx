import React, { useState } from 'react';
import { Check, ArrowRight, DollarSign, Layers, Zap, RefreshCw } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './ProductPage.css';

const Hangars = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const gallery = [
    { 
      image: 'https://images.unsplash.com/photo-1679068215572-e4ba8fdce4dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Складской ангар 200 м²'
    },
    { 
      image: 'https://images.unsplash.com/photo-1720036237334-9263cd28c3d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Производственный цех'
    },
    { 
      image: 'https://images.unsplash.com/photo-1669003152237-7bd1ac4c13f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjQzMjM4OTJ8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Логистический комплекс'
    },
    { 
      image: 'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Ангар 300 м²'
    },
    { 
      image: 'https://images.unsplash.com/photo-1679068215572-e4ba8fdce4dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Промышленное здание'
    },
    { 
      image: 'https://images.unsplash.com/photo-1669003152237-7bd1ac4c13f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjQzMjM4OTJ8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Склад под ключ'
    }
  ];

  const typicalSizes = [
    { size: '150 м²', price: 'от 4.5 млн ₸' },
    { size: '200 м²', price: 'от 6 млн ₸' },
    { size: '300 м²', price: 'от 9 млн ₸' }
  ];

  const advantages = [
    { title: '30% дешевле капитального', description: 'Экономия на строительстве' },
    { title: 'Лёгкий фундамент', description: 'Не требует глубокого основания' },
    { title: 'Быстрый монтаж', description: 'Готовность за 2-4 недели' },
    { title: 'Возможность демонтажа', description: 'Можно разобрать и переместить' }
  ];

  const steps = [
    { number: '01', title: 'Заявка', description: 'Оставьте заявку на сайте' },
    { number: '02', title: 'ТЗ', description: 'Обсуждаем техническое задание' },
    { number: '03', title: 'Смета', description: 'Составляем смету проекта' },
    { number: '04', title: 'Производство', description: 'Изготовление на заводе' },
    { number: '05', title: 'Монтаж', description: 'Сборка на вашем участке' }
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
            <p className="body-lg">Промышленные ангары и складские помещения</p>
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
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card-product">
                <h3 className="h3">{advantage.title}</h3>
                <p className="body-md">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Sizes */}
      <section className="typical-sizes-section">
        <div className="container">
          <h2 className="section-title display-md">Типовые размеры и цены</h2>
          <div className="sizes-grid">
            {typicalSizes.map((item, index) => (
              <div key={index} className="size-card">
                <h3 className="h2">{item.size}</h3>
                <div className="size-price">{item.price}</div>
              </div>
            ))}
          </div>
          <p className="sizes-note">Индивидуальные размеры по запросу</p>
        </div>
      </section>

      {/* Process */}
      <section className="steps-section">
        <div className="container">
          <h2 className="section-title display-md">Процесс работы</h2>
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
