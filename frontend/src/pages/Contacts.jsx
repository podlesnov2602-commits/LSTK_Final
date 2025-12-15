import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import './Contacts.css';

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
        image="https://customer-assets.emergentagent.com/job_metal-builder/artifacts/4t51ec3s_1764756420383-019ae3ad-9634-7630-8426-e44060d6f5c2.png"
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
            <iframe
              title="Company Location"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.2524871691937!2d${siteConfig.location.lng}!3d${siteConfig.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDEzJzE5LjIiTiA3NsKwNTEnMDQuMyJF!5e0!3m2!1sen!2skz!4v1234567890123!5m2!1sen!2skz`}
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
            />
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
