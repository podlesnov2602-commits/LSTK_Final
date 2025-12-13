import React, { useState, useEffect } from 'react';
import {
  ClipboardList,
  Clock,
  DollarSign,
  Factory,
  FileText,
  MessageCircle,
  PenTool,
  Ruler,
  Shield,
  Wrench,
  Zap
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import ProcessSteps from '../components/ui/ProcessSteps';
import PricingCards from '../components/ui/PricingCards';
import './ProductPage.css';

const Garages = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [ctaStatus, setCtaStatus] = useState('idle');
  const [whatsAppForm, setWhatsAppForm] = useState({ name: '', phone: '', comment: '' });
  const [emailForm, setEmailForm] = useState({ name: '', phone: '', email: '' });

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

  const processSteps = [
    {
      title: 'Заявка',
      description: 'Оставляете заявку в один клик или пишете в мессенджер',
      icon: ClipboardList
    },
    {
      title: 'Замеры',
      description: 'Фиксируем габариты участка, высоту и нагрузку на конструкцию',
      icon: Ruler
    },
    {
      title: 'Проект',
      description: 'Готовим смету, компоновку и визуализацию под ваш сценарий',
      icon: PenTool
    },
    {
      title: 'Производство',
      description: 'Запускаем ЛСТК в работу и собираем комплектацию на заводе',
      icon: Factory
    },
    {
      title: 'Монтаж',
      description: 'Приезжаем на объект, собираем гараж и сдаём заказчику',
      icon: Wrench
    }
  ];

  const openModal = (type) => {
    setActiveModal(type);
    setCtaStatus('idle');
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    setCtaStatus('loading');
    const message = encodeURIComponent(
      `Расчёт гаража в WhatsApp\nИмя: ${whatsAppForm.name}\nТелефон: ${whatsAppForm.phone}\nКомментарий: ${whatsAppForm.comment}`
    );

    setTimeout(() => {
      try {
        window.open(`${siteConfig.social.whatsapp}?text=${message}`, '_blank');
        setCtaStatus('success');
        setWhatsAppForm({ name: '', phone: '', comment: '' });
      } catch (error) {
        setCtaStatus('error');
      }
    }, 320);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setCtaStatus('loading');
    const subject = encodeURIComponent('КП на гараж (PDF)');
    const body = encodeURIComponent(
      `Имя: ${emailForm.name}\nТелефон: ${emailForm.phone}\nEmail: ${emailForm.email}\nКомментарий: Хочу получить КП на гараж`
    );

    setTimeout(() => {
      try {
        window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
        setCtaStatus('success');
        setEmailForm({ name: '', phone: '', email: '' });
      } catch (error) {
        setCtaStatus('error');
      }
    }, 320);
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
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="costing-cta-section">
        <div className="container">
          <div className="costing-cta-grid">
            <div className="costing-cta-copy subtle-grid">
              <p className="eyebrow">Расчёт стоимости</p>
              <h3>Два клика до сметы</h3>
              <p className="body-lg">
                Быстрая связь без лишних полей: отправим расчёт в WhatsApp или пришлём коммерческое
                предложение в PDF на вашу почту.
              </p>
              <div className="cta-pills">
                <span>Персональный менеджер</span>
                <span>Фиксация цены и сроков</span>
                <span>Индустриальный стиль</span>
              </div>
              <div className="cta-buttons">
                <button type="button" className="btn-primary btn-whatsapp" onClick={() => openModal('whatsapp')}>
                  <MessageCircle size={18} />
                  Рассчитать стоимость в WhatsApp
                </button>
                <button type="button" className="btn-secondary btn-ghost" onClick={() => openModal('email')}>
                  <FileText size={18} />
                  Получить КП на почту (PDF)
                </button>
              </div>
            </div>
            <div className="costing-cta-panels">
              <div className="cta-panel">
                <div className="panel-label">Минимум полей</div>
                <h4>От заявки до КП — без задержек</h4>
                <p>Чёткие вопросы, прозрачные сроки, мгновенная отправка через выбранный канал связи.</p>
              </div>
              <div className="cta-panel muted">
                <div className="panel-label">Подготовим PDF</div>
                <p className="body-md">
                  Структурированная смета с комплектацией, сроками и условиями монтажа — в едином
                  премиальном оформлении.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeModal && (
        <div className="cta-modal-backdrop" onClick={closeModal}>
          <div className="cta-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cta-modal-header">
              <div>
                <p className="eyebrow">{activeModal === 'whatsapp' ? 'Мессенджер' : 'Коммерческое предложение'}</p>
                <h4>{activeModal === 'whatsapp' ? 'Рассчитать в WhatsApp' : 'Получить КП на почту'}</h4>
                <p className="body-md">
                  {activeModal === 'whatsapp'
                    ? 'Ответим в чате и закрепим менеджера — без длинных анкет.'
                    : 'Соберём PDF с ценой, сроками и комплектацией под ваш запрос.'}
                </p>
              </div>
              <button className="btn-secondary" type="button" onClick={closeModal}>
                Закрыть
              </button>
            </div>

            {activeModal === 'whatsapp' ? (
              <form className="modal-form" onSubmit={handleWhatsAppSubmit}>
                <div className="form-row">
                  <label className="form-label">Имя
                    <input
                      type="text"
                      value={whatsAppForm.name}
                      onChange={(e) => setWhatsAppForm({ ...whatsAppForm, name: e.target.value })}
                      placeholder="Имя"
                      required
                      className="form-input"
                    />
                  </label>
                  <label className="form-label">Телефон
                    <input
                      type="tel"
                      value={whatsAppForm.phone}
                      onChange={(e) => setWhatsAppForm({ ...whatsAppForm, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="form-input"
                    />
                  </label>
                </div>
                <label className="form-label">Комментарий
                  <textarea
                    value={whatsAppForm.comment}
                    onChange={(e) => setWhatsAppForm({ ...whatsAppForm, comment: e.target.value })}
                    placeholder="Тип гаража, габариты или пожелания"
                    className="form-textarea"
                    rows="3"
                  />
                </label>
                <div className="modal-actions">
                  <button type="submit" className="btn-primary btn-whatsapp" disabled={ctaStatus === 'loading'}>
                    {ctaStatus === 'loading' ? 'Открываем WhatsApp...' : 'Открыть чат и отправить'}
                  </button>
                  <span className={`form-status form-status--${ctaStatus}`}>
                    {ctaStatus === 'success' && 'Сообщение готово — дождитесь ответа менеджера в WhatsApp.'}
                    {ctaStatus === 'error' && 'Не удалось открыть WhatsApp. Попробуйте еще раз.'}
                  </span>
                </div>
              </form>
            ) : (
              <form className="modal-form" onSubmit={handleEmailSubmit}>
                <div className="form-row">
                  <label className="form-label">Имя
                    <input
                      type="text"
                      value={emailForm.name}
                      onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                      placeholder="Имя"
                      required
                      className="form-input"
                    />
                  </label>
                  <label className="form-label">Телефон
                    <input
                      type="tel"
                      value={emailForm.phone}
                      onChange={(e) => setEmailForm({ ...emailForm, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="form-input"
                    />
                  </label>
                </div>
                <label className="form-label">Email для отправки
                  <input
                    type="email"
                    value={emailForm.email}
                    onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                    placeholder="mail@example.com"
                    required
                    className="form-input"
                  />
                </label>
                <div className="modal-actions">
                  <button type="submit" className="btn-primary" disabled={ctaStatus === 'loading'}>
                    {ctaStatus === 'loading' ? 'Формируем КП...' : 'Получить КП (PDF)'}
                  </button>
                  <span className={`form-status form-status--${ctaStatus}`}>
                    {ctaStatus === 'success' && 'Формируем письмо с КП и отправляем на указанную почту.'}
                    {ctaStatus === 'error' && 'Не удалось подготовить письмо. Проверьте настройки почты.'}
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Garages;
