import React, { useEffect } from 'react';
import { DollarSign, Layers, Zap, RefreshCw } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import PriceAnchor from '../components/PriceAnchor';
import LeadCTA from '../components/LeadCTA';
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
    {
      title: '150 м²',
      price: 'от 4.5 млн ₸',
      scenario: 'Компактный склад и сервис в небольших городах',
      metric: 'Пролёт 12–15 м · высота до 6 м',
      note: 'Базовая конфигурация для хранения и сервиса',
      markers: ['Быстрая сборка и доставка', 'Пролёт без внутренних опор', 'Оптимален для локальной логистики']
    },
    {
      title: '200 м²',
      price: 'от 6 млн ₸',
      scenario: 'Логистические узлы и сервисные станции',
      metric: 'Пролёт 16–18 м · высота до 7.5 м',
      note: 'Типовой пролёт для складов и цехов',
      markers: ['Гибкая планировка под стеллажи', 'Усиление под снег/ветер', 'Подвод коммуникаций под задачу']
    },
    {
      title: '300 м²',
      price: 'от 9 млн ₸',
      scenario: 'Лёгкое производство и сборка с техникой',
      metric: 'Пролёт 18–21 м · высота до 9 м',
      note: 'Производственные задачи с кран-балкой',
      markers: ['Закладка под мостовые краны', 'Технологические ворота и доки', 'Запуск под ключ с монтажом']
    }
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

  const handleEmailRequest = () => {
    const subject = encodeURIComponent('КП по ангарам и складам');
    const body = encodeURIComponent('Укажите габариты, пролёт, нагрузки и регион — вышлем КП с расчётом.');
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="product-page">
      <section className="product-hero product-hero-hangar">
        <div className="product-hero-overlay" />
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

      <PriceAnchor
        title="Типовые размеры и цены"
        subtitle="Стоимость зависит от пролёта, высоты, региона и комплектации. Цены указаны ориентировочно"
        cards={typicalSizes}
      />

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

      <LeadCTA
        title="Рассчитать ангар под вашу задачу"
        text="Обсудим размеры, пролёты и нагрузки — инженер ответит напрямую"
        primaryLabel="Написать в WhatsApp"
        primaryAction={handleWhatsAppClick}
        secondaryLabel="Получить КП на почту"
        secondaryAction={handleEmailRequest}
      />
    </div>
  );
};

export default Hangars;
