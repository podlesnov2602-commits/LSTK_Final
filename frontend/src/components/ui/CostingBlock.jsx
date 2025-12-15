import React, { useMemo, useState } from 'react';
import { FileText, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import './CostingBlock.css';

const CostingBlock = ({ productName }) => {
  const [activeForm, setActiveForm] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const productLabel = useMemo(() => productName || 'проект', [productName]);

  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();
    if (!name || !phone) return;

    const text = encodeURIComponent(`Расчёт ${productLabel}. Имя: ${name}. Телефон: ${phone}.`);
    window.open(`${siteConfig.social.whatsapp}?text=${text}`, '_blank');
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (!name || !email) return;

    const subject = encodeURIComponent(`КП на ${productLabel}`);
    const body = encodeURIComponent(`Имя: ${name}\nEmail: ${email}\nУточните параметры ${productLabel} — отправим PDF без задержек.`);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  const showWhatsAppForm = activeForm === 'whatsapp';
  const showEmailForm = activeForm === 'email';

  return (
    <section className="costing-block-section">
      <div className="container">
        <div className="costing-block card-surface subtle-grid">
          <div className="costing-block__content">
            <div className="costing-block__header">
              <p className="eyebrow">Расчёт</p>
              <h3>Расчёт стоимости под ключ</h3>
              <p className="body-lg subtle">Без длинных форм и ожиданий</p>
              <p className="body-md">Имя и телефон — отправим расчёт в WhatsApp или коммерческое предложение в PDF на почту.</p>
            </div>

            <div className="costing-block__badges">
              <span>Имя + телефон</span>
              <span>Цена фиксируется в КП</span>
              <span>Ответ в день обращения</span>
            </div>

            <div className="costing-block__actions">
              <button
                type="button"
                className="btn-primary btn-whatsapp-solid"
                onClick={() => setActiveForm(activeForm === 'whatsapp' ? null : 'whatsapp')}
              >
                <MessageCircle size={18} />
                Рассчитать стоимость в WhatsApp
              </button>
              <button
                type="button"
                className="btn-secondary btn-secondary-muted"
                onClick={() => setActiveForm(activeForm === 'email' ? null : 'email')}
              >
                <FileText size={18} />
                Получить КП в PDF на почту
              </button>
            </div>

            <div className="costing-block__forms">
              {showWhatsAppForm && (
                <form className="costing-form" onSubmit={handleWhatsAppSubmit}>
                  <div className="form-grid">
                    <label className="form-label">
                      Имя
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ваше имя"
                        required
                        className="form-input"
                      />
                    </label>
                    <label className="form-label">
                      Телефон
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+7 (___) ___-__-__"
                        required
                        className="form-input"
                      />
                    </label>
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn-primary btn-whatsapp-solid">
                      Отправить расчёт в WhatsApp
                    </button>
                    <span className="form-hint">Откроется чат с готовым сообщением</span>
                  </div>
                </form>
              )}

              {showEmailForm && (
                <form className="costing-form" onSubmit={handleEmailSubmit}>
                  <div className="form-grid">
                    <label className="form-label">
                      Имя
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ваше имя"
                        required
                        className="form-input"
                      />
                    </label>
                    <label className="form-label">
                      Email
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="mail@example.com"
                        required
                        className="form-input"
                      />
                    </label>
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn-secondary btn-secondary-muted">
                      Получить КП в PDF
                    </button>
                    <span className="form-hint">Пришлём файл с фиксированной ценой</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="costing-block__aside">
            <div className="aside-card">
              <p className="eyebrow">Как вы получите расчёт</p>
              <h4>Без задержек и лишних шагов</h4>
              <p className="body-md">Мы уточним базовые параметры и отправим расчёт выбранным способом без задержек.</p>
              <ul className="aside-list">
                <li>Один специалист отвечает за запрос</li>
                <li>Чётко фиксируем цену в КП</li>
                <li>Сообщаем срок готовности сразу</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostingBlock;
