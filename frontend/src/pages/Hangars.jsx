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
      {/* Hero Section */}
      <section className="product-hero product-hero-hangar">
        <div className="product-hero-overlay" />
        <div className="container">
          <div className="product-hero-content">
            <h1 className="display-lg">Ангары и коммерческие здания из ЛСТК</h1>
            <p className="hero-subtitle body-lg">Производство и монтаж от 14 дней</p>
            <button 
              className="btn-primary btn-hero"
              onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Запросить коммерческое предложение
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Кому подходит */}
      <section className="audience-section">
        <div className="container">
          <h2 className="section-title display-md">Кому подходит</h2>
          <div className="audience-grid">
            {targetAudience.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="audience-card">
                  <div className="audience-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="h3">{item.title}</h3>
                  <p className="body-md">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Типовые решения */}
      <section className="solutions-section">
        <div className="container">
          <h2 className="section-title display-md">Типовые решения</h2>
          <div className="solutions-grid">
            {typicalSolutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="solution-header">
                  <h3 className="h2">{solution.title}</h3>
                  <div className="solution-price">{solution.price}</div>
                </div>
                <ul className="solution-features">
                  {solution.features.map((feature, idx) => (
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

      {/* Преимущества ЛСТК */}
      <section className="advantages-section">
        <div className="container">
          <h2 className="section-title display-md">Преимущества ЛСТК для коммерции</h2>
          <div className="advantages-grid-commercial">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card-commercial">
                <h3 className="h3">{advantage.title}</h3>
                <p className="body-md">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс работы */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title display-md">Процесс работы</h2>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-number">{step.number}</div>
                <h3 className="h3">{step.title}</h3>
                <p className="body-md">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма КП */}
      <section id="form-section" className="form-section">
        <div className="container">
          <div className="form-container">
            <h2 className="display-sm">Получить коммерческое предложение</h2>
            <p className="body-lg">Заполните форму, и мы подготовим для вас индивидуальное КП</p>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                placeholder="Имя"
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
              <input
                type="text"
                placeholder="Площадь (например, 150 м²)"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                className="form-input"
              />
              <input
                type="text"
                placeholder="Назначение (склад, СТО, фермерский и т.д.)"
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                className="form-input"
              />
              <button type="submit" className="btn-primary">
                Получить КП
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
