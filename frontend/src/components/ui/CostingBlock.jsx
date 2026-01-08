import React, { useMemo, useState } from 'react';
import { FileText, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import './CostingBlock.css';

const CostingBlock = ({ productName, expansionNote }) => {
  const [activeForm, setActiveForm] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const productLabel = useMemo(() => productName || 'проект', [productName]);

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Здравствуйте! Хочу расчёт на ${productLabel}. Напишите, пожалуйста, в WhatsApp.`
    );
    window.open(`${siteConfig.social.whatsapp}?text=${text}`, '_blank');
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;
  setLoading(true);

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('_replyto', email); // 🔥 ОБЯЗАТЕЛЬНО
  formData.append('product', productLabel);
  formData.append('_subject', 'Заявка на КП — LSTK');

  try {
    const response = await fetch('https://formspree.io/f/mgowaqow', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    const result = await response.json();
    console.log('Formspree response:', result);

    if (response.ok) {
      setSubmitted(true);
      setName('');
      setEmail('');
    } else {
      alert('Ошибка отправки формы. Проверь консоль.');
    }
  } catch (error) {
    console.error('Ошибка отправки формы:', error);
    alert('Ошибка сети при отправке формы');
  } finally {
    setLoading(false);
  }
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
              <p className="body-md">
                Напишите нам в WhatsApp или оставьте email — пришлём расчёт и КП без задержек.
                {expansionNote ? ` ${expansionNote}` : ''}
              </p>
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
                onClick={() => {
                  setSubmitted(false);
                  setActiveForm(showEmailForm ? null : 'email');
                }}
              >
                <FileText size={18} />
                Получить КП в PDF на почту
              </button>
            </div>

            <div className="costing-block__forms">
              {showEmailForm && (
                <form className="costing-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <label className="form-label">
                      Имя
                      <input
                        type="text"
                        name="name"
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
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="mail@example.com"
                        required
                        className="form-input"
                      />
                    </label>
                  </div>

                  {/* антиспам */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />

                  <div className="form-actions">
                    <button
                      type="submit"
                      className="btn-secondary btn-secondary-muted"
                      disabled={loading}
                    >
                      {loading ? 'Отправка…' : 'Получить КП в PDF'}
                    </button>
                    <span className="form-hint">
                      Пришлём файл с фиксированной ценой
                    </span>
                  </div>

                  {submitted && (
                    <div className="form-success">
                      Заявка отправлена. Мы свяжемся с вами.
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

          <div className="costing-block__aside">
            <div className="aside-card">
              <p className="eyebrow">Как вы получите расчёт</p>
              <h4>Без задержек и лишних шагов</h4>
              <p className="body-md">
                Мы уточним базовые параметры и отправим расчёт выбранным способом без задержек.
              </p>
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
