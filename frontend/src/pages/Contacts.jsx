import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import './Contacts.css';
import contactsHeroImg from '../assets/ContactsHero.webp';

const Contacts = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Здравствуйте! Хочу получить расчёт и КП по ЛСТК-проекту. Подскажите, что нужно уточнить.');
    window.open(`${siteConfig.social.whatsapp}?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      value: siteConfig.contact.phone,
      link: `tel:${siteConfig.contact.phoneRaw}`
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@alatau_lstk',
      link: siteConfig.social.instagram
    },
    {
      icon: Mail,
      title: 'Email',
      value: siteConfig.contact.email,
      link: `mailto:${siteConfig.contact.email}`
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: siteConfig.contact.address,
      link: null
    },
    {
      icon: Clock,
      title: 'Режим работы',
      value: siteConfig.contact.workingHours,
      link: null
    }
  ];

  return (
    <div className="contacts-page">
      <PageHero
        title="Контакты"
        subtitle="Свяжитесь с нами удобным способом"
        meta="Industrial Premium • Контакты"
        image={contactsHeroImg}
      />

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="container">
          <SectionHeader
            eyebrow="Связь"
            title="Мы всегда на линии"
            subtitle="Команда ответит в рабочие часы и направит к нужному специалисту"
          />
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <>
                  <div className="contact-info-icon">
                    <Icon size={28} />
                  </div>
                  <div className="contact-info-text">
                    <h3 className="h3">{info.title}</h3>
                    <p className="body-md">{info.value}</p>
                  </div>
                </>
              );

              return info.link ? (
                <a key={index} href={info.link} className="contact-info-card">
                  {content}
                </a>
              ) : (
                <div key={index} className="contact-info-card">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <SectionHeader
            eyebrow="Локация"
            title="Мы на карте"
            subtitle="Производственная площадка и офис на одной оси"
          />
          <div className="map-container">
            <a
              aria-label="Открыть адрес в Google Maps"
              href={`https://www.google.com/maps?q=${siteConfig.location.lat},${siteConfig.location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map static-map subdued-map"
            >
              <img
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${siteConfig.location.lat},${siteConfig.location.lng}&zoom=${siteConfig.location.zoom}&size=640x320&scale=2&markers=color:green|${siteConfig.location.lat},${siteConfig.location.lng}&key=${siteConfig.location.mapApiKey}`}
                alt="Карта проезда"
              />
              <span className="map-hint">Открыть в Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contacts-cta-section">
        <div className="container">
          <div className="contacts-cta-content">
            <SectionHeader
              eyebrow="Поддержка"
              title="Готовы ответить на ваши вопросы"
              subtitle="Напишите инженеру — отправим расчёт и КП по вашему запросу"
            />
            <button className="btn-primary" onClick={handleWhatsAppContact}>
              Получить расчёт и КП
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
