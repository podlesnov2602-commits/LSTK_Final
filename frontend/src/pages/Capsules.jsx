import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Ruler, Feather, Infinity, Move } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './ProductPage.css';

// 🔥 Новый локальный фон
import CapsulesHero from '../assets/CapsulesHero.png';

// 🔥 Локальные изображения для галереи
import img1 from '../assets/Capsules1.jpg';
import img2 from '../assets/Capsules2.jpg';
import img3 from '../assets/Capsules3.jpg';
import img4 from '../assets/Capsules4.jpg';
import img5 from '../assets/Capsules5.jpg';
import img6 from '../assets/Capsules6.jpg';

const Capsules = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const gallerySection = document.querySelector('.gallery-section');
      if (gallerySection) {
        const yOffset = -100;
        const y =
          gallerySection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // 🔥 ЛОКАЛЬНАЯ ГАЛЕРЕЯ
  const gallery = [
    { image: img1, caption: 'Капсула 1' },
    { image: img2, caption: 'Капсула 2' },
    { image: img3, caption: 'Капсула 3' },
    { image: img4, caption: 'Капсула 4' },
    { image: img5, caption: 'Капсула 5' },
    { image: img6, caption: 'Капсула 6' },
  ];

  const configurations = [
    {
      title: 'Каркас',
      subtitle: 'Металлический каркас ЛСТК',
      features: ['Профиль ЛСТК', 'Крепеж', 'Чертежи'],
    },
    {
      title: 'Каркас + оболочка',
      subtitle: 'Каркас с внешней отделкой',
      features: ['Каркас ЛСТК', 'Сэндвич-панели', 'Кровля', 'Окна/двери'],
    },
    {
      title: 'Готовая капсула',
      subtitle: 'Под ключ с отделкой',
      features: ['Каркас', 'Отделка', 'Коммуникации', 'Мебель'],
    },
  ];

  const advantages = [
    { icon: Ruler, title: 'Ровная геометрия', description: 'Точность до мм' },
    { icon: Feather, title: 'Лёгкий каркас', description: 'Не требует фундамента' },
    { icon: Infinity, title: 'Долговечность', description: 'Служит 50+ лет' },
    { icon: Move, title: 'Мобильность', description: 'Можно перевозить' },
  ];

  const pricing = {
    title: 'Капсула 18–24 м²',
    price: 'от 5.9 млн ₸',
    note: 'Точная цена рассчитывается индивидуально',
  };

  const steps = [
    { number: '01', title: 'Консультация', description: 'Обсуждаем проект' },
    { number: '02', title: 'Проектирование', description: 'Создаём 3D-модель' },
    { number: '03', title: 'Производство', description: 'Изготовление на заводе' },
    { number: '04', title: 'Монтаж', description: 'Установка за 2–5 дней' },
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
      {/* HERO с локальным фоном */}
      <section
        className="product-hero"
        style={{
          backgroundImage: `url(${CapsulesHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="product-hero-overlay" />
        <div className="container">
          <div className="product-hero-content">
            <h1 className="display-lg">Капсулы</h1>
            <p className="body-lg">Модульные конструкции для жилья, офисов и бизнеса</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title display-md">Галерея проектов</h2>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div key={index} className="gallery-item-wrapper">
                <div
                  className="gallery-item"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <p className="gallery-caption">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIGURATIONS */}
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

      {/* ADVANTAGES */}
      <section className="advantages-section-product">
        <div className="container">
          <h2 className="section-title display-md">Преимущества</h2>

          <div className="advantages-grid-product">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <div key={index} className="advantage-card-product">
                  <div className="advantage-icon-circle">
                    <Icon size={28} className="advantage-icon" />
                  </div>
                  <h3>{adv.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-card-single">
            <h2 className="display-md">{pricing.title}</h2>
            <div className="pricing-amount">{pricing.price}</div>
            <p className="pricing-note">{pricing.note}</p>
          </div>
        </div>
      </section>

      {/* STEPS */}
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

      {/* FORM */}
      <section className="form-section">
        <div className="container">
          <div className="form-container">
            <h2 className="display-sm">Получить расчёт</h2>
            <p className="body-lg">Оставьте заявку</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="form-input"
              />

              <input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="form-input"
              />

              <textarea
                placeholder="Опишите ваш проект"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
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
