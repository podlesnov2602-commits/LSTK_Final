import React, { useMemo, useState } from 'react';
import { FileText, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import './CostingBlock.css';

const CostingBlock = ({ productName }) => {
  const [activeForm, setActiveForm] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const productLabel = useMemo(() => productName || 'проект', [productName]);

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(`Здравствуйте! Хочу расчёт на ${productLabel}. Напишите, пожалуйста, в WhatsApp.`);
    window.open(`${siteConfig.social.whatsapp}?text=${text}`, '_blank');
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (!name || !email) return;

    const subject = encodeURIComponent(`КП на ${productLabel}`);
    const body = encodeURIComponent(`Имя: ${name}\nEmail: ${email}\nУточните параметры ${productLabel} — отправим PDF без задержек.`);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

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
              <p className="body-md">Напишите нам в WhatsApp или оставьте email — пришлём расчёт и КП без задержек.</p>
            </div>

            <div className="costing-block__badges">
              <span>Моментальный переход в чат</span>
              <span>Цена фиксируется в КП</span>
              <span>Ответ в день обращения</span>
            </div>

            <div className="costing-block__actions">
              <button
                type="button"
                className="btn-primary btn-whatsapp-solid"
                onClick={handleWhatsAppRedirect}
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
