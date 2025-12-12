import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, DollarSign, Shield, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import PricingCards from '../components/ui/PricingCards';
import './ProductPage.css';

const Garages = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

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
      image: 'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Гараж на 1 авто'
    },
    { 
      image: 'https://images.unsplash.com/photo-1720036237334-9263cd28c3d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Двойной гараж'
    },
    { 
      image: 'https://images.unsplash.com/photo-1679068215572-e4ba8fdce4dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Гараж с мастерской'
    },
    { 
      image: 'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Утеплённый гараж'
    },
    { 
      image: 'https://images.unsplash.com/photo-1669003152237-7bd1ac4c13f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjQzMjM4OTJ8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Гараж под ключ'
    },
    { 
      image: 'https://images.unsplash.com/photo-1720036237334-9263cd28c3d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxzdGVlbCUyMGhhbmdhcnxlbnwwfHx8fDE3NjQzMjM4ODd8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Металлический бокс'
    }
  ];

  const configurations = [
    {
      title: 'Навес на 1 авто',
      subtitle: '3×6 м',
      price: 'от 490 000 ₸',
      features: ['Каркас ЛСТК', 'Профнастил', 'Кровля', 'Монтаж']
    },
    {
      title: 'Гараж на 2 авто',
      subtitle: '6×6 м',
      price: 'от 1.2 млн ₸',
      features: ['Каркас усиленный', 'Двое ворот', 'Утепление', 'Вентиляция']
    },
    {
      title: 'Навес на 2 авто',
      subtitle: '6×6 м',
      price: 'от 790 000 ₸',
      features: ['Каркас ЛСТК', 'Профнастил', 'Кровля', 'Монтаж']
    },
    {
      title: 'Гараж 6×6',
      subtitle: 'Стандарт',
      price: 'от 1.1 млн ₸',
      features: ['Каркас ЛСТК', 'Ворота', 'Утепление', 'Электрика']
    },
    {
      title: 'Хозблок',
      subtitle: '3×3 м',
      price: 'от 350 000 ₸',
      features: ['Каркас ЛСТК', 'Обшивка', 'Дверь', 'Кровля']
    },
    {
      title: 'Гараж с навесом',
      subtitle: '6×9 м',
      price: 'от 1.5 млн ₸',
      features: ['Гараж + навес', 'Усиленный каркас', 'Ворота', 'Кровля']
    }
  ];

  const pricingCards = configurations.map((config) => ({
    meta: config.subtitle,
    title: config.title,
    price: config.price,
    description: 'Готовое решение в единой архитектуре',
    markers: config.features
  }));

  const advantages = [
    { icon: Zap, title: 'Быстро', description: 'Монтаж 3-5 дней' },
    { icon: DollarSign, title: 'Дешево', description: 'Доступные цены' },
    { icon: Shield, title: 'Аккуратно', description: 'Качественная сборка' },
    { icon: Clock, title: 'Не требует разрешений', description: 'Легкие конструкции' }
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
    setFormStatus('loading');
    const message = encodeURIComponent(
      `Запрос на расчёт: Гаражи\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`
    );
    setTimeout(() => {
      try {
        window.open(`${siteConfig.social.whatsapp}?text=${message}`, '_blank');
        setFormStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } catch (error) {
        setFormStatus('error');
      }
    }, 350);
  };

  return (
    <div className="product-page">
      <PageHero
        title="Гаражи"
        subtitle="Надёжные металлические гаражи и боксы в едином индустриальном стиле"
        meta="Industrial Premium • Гаражи"
        image={gallery[0].image}
      />

      <section className="gallery-section">
        <div className="container">
          <SectionHeader
            eyebrow="Проекты"
            title="Галерея проектов"
            subtitle="Тиражируемые решения для частных и коммерческих задач"
          />
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div key={index} className="project-card">
                <div className="project-visual" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="project-overlay">
                    <p className="project-caption">{item.caption}</p>
                    <span className="project-meta">Гараж</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages-section-product">
        <div className="container">
          <SectionHeader
            eyebrow="Технология"
            title="Преимущества"
            subtitle="Быстрый монтаж, аккуратные фасады и стабильный бюджет"
          />
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

      <PricingCards
        title="Типовые проекты"
        subtitle="Опции для одного или двух авто, утеплённые решения и интеграция с навесами"
        items={pricingCards}
        footnote="Стоимость рассчитываем под комплектацию, регион и сроки монтажа"
      />

      <section className="steps-section">
        <div className="container">
          <SectionHeader
            eyebrow="Процесс"
            title="Как мы работаем"
            subtitle="От заявки до монтажа — последовательные шаги без задержек"
          />
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
          <div className="form-container form-container-soft">
            <SectionHeader
              eyebrow="Заявка"
              title="Получить расчёт"
              subtitle="Оставьте контакты и опишите проект — вернёмся с расчётом или уточняющими вопросами"
              level="h3"
            />
            <form onSubmit={handleSubmit} className="contact-form">
              <label className="form-label">Ваше имя
                <input
                  type="text"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="form-input"
                />
              </label>
              <label className="form-label">Телефон
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="form-input"
                />
              </label>
              <label className="form-label">Комментарий
                <textarea
                  placeholder="Опишите задачу или желаемые размеры"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                  rows="4"
                />
              </label>
              <div className="form-actions">
                <button type="submit" className="btn-primary" disabled={formStatus === 'loading'}>
                  {formStatus === 'loading' ? 'Отправляем...' : 'Отправить запрос'}
                  <ArrowRight size={20} />
                </button>
                <span className={`form-status form-status--${formStatus}`}>
                  {formStatus === 'success' && 'Заявка отправлена — ждём подтверждения в WhatsApp.'}
                  {formStatus === 'error' && 'Не удалось открыть WhatsApp. Попробуйте ещё раз.'}
                  {formStatus === 'loading' && 'Готовим сообщение для WhatsApp...'}
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Garages;
