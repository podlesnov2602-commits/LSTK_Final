import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Award,
  Truck,
  CheckCircle,
} from "lucide-react";

import { siteConfig } from "../config/siteConfig";

// Локальные изображения
import capsulesImg from "../assets/capsules.png";
import hangarsImg from "../assets/Hangars.jpeg";
import garagesImg from "../assets/garages.jpeg";
import productionImg from "../assets/production.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1649587345666-0f4ad68aa723?crop=entropy&cs=srgb&fm=jpg&q=85",
    "https://images.unsplash.com/photo-1739599211500-74e04a9ca175?crop=entropy&cs=srgb&fm=jpg&q=85",
    "https://images.unsplash.com/photo-1679430786992-8bb54d023e2f?crop=entropy&cs=srgb&fm=jpg&q=85",
    "https://images.unsplash.com/photo-1655936072893-921e69ae9038?crop=entropy&cs=srgb&fm=jpg&q=85",
    "https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=srgb&fm=jpg&q=85",
  ];

  React.useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((p) => (p + 1) % heroImages.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const directions = [
    {
      title: "Капсулы-модульные дома",
      description: "Модульные конструкции для жилья, офисов и бизнеса",
      link: "/capsules",
      image: capsulesImg,
    },
    {
      title: "Ангары",
      description: "Промышленные ангары и складские помещения",
      link: "/hangars",
      image: hangarsImg,
    },
    {
      title: "Гаражи-навесы",
      description: "Надёжные металлические гаражи и боксы",
      link: "/garages",
      image: garagesImg,
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Быстрый монтаж",
      description: "Установка конструкции за 2–5 дней",
    },
    {
      icon: Shield,
      title: "Заводское качество",
      description: "Современное оборудование и контроль",
    },
    {
      icon: Zap,
      title: "Точная геометрия",
      description: "Прецизионное производство на ЧПУ",
    },
    {
      icon: Award,
      title: "Гарантия",
      description: "Полная гарантия на все изделия",
    },
    {
      icon: Truck,
      title: "Доставка",
      description: "По всему Казахстану",
    },
    {
      icon: CheckCircle,
      title: "Сертификация",
      description: "Все необходимые документы",
    },
  ];

  const documents = [
    { title: "Сертификат соответствия", file: "#" },
    { title: "Договор поставки", file: "#" },
    { title: "Реквизиты компании", file: "#" },
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Здравствуйте! Интересуюсь продукцией Фабрика Каркасов Алатау"
    );
    window.open(`${siteConfig.social.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-bg-primary">
        {/* Фоновые слайды */}
        <div className="absolute inset-0">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                i === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        {/* Оверлей */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Контент */}
        <div className="relative z-10 w-full">
          <div className="mx-auto flex max-w-[1320px] flex-col px-5 py-24 lg:py-32">
            <div className="max-w-[820px] space-y-6">
              <h1 className="text-3xl font-semibold leading-tight drop-shadow-xl sm:text-4xl lg:text-5xl xl:text-6xl">
                Производство ЛСТК
                <br />
                в Казахстане
              </h1>

              <p className="max-w-[600px] text-base leading-relaxed text-text-secondary sm:text-lg">
                Капсулы, ангары, гаражи — быстро, надёжно, заводское качество.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("directions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent-primary px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 hover:shadow-lg"
              >
                Выбрать направление
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Индикаторы */}
        <div className="pointer-events-none absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              className={`pointer-events-auto h-1 rounded-full transition-all ${
                i === currentSlide
                  ? "w-14 bg-accent-primary"
                  : "w-10 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= DIRECTIONS ================= */}
      <section
        id="directions"
        className="bg-bg-primary py-sectionSm sm:py-sectionMd lg:py-section"
      >
        <div className="mx-auto max-w-[1320px] px-5">
          <h2 className="mb-12 text-center text-2xl font-semibold sm:mb-16 sm:text-3xl">
            Выберите направление
          </h2>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {directions.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="group block h-full cursor-pointer"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-card border border-border-subtle bg-bg-secondary shadow-card transition hover:-translate-y-1 hover:border-accent-primary hover:shadow-cardHover">
                  <div
                    className="h-52 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  <div className="flex flex-1 flex-col space-y-4 px-7 py-6">
                    <h3 className="text-lg font-semibold text-accent-primary">
                      {item.title}
                    </h3>
                    <p className="flex-1 text-sm text-text-secondary">
                      {item.description}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-primary">
                      Подробнее
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section className="bg-bg-secondary py-sectionSm sm:py-sectionMd lg:py-section">
        <div className="mx-auto max-w-[1320px] px-5">
          <h2 className="mb-12 text-center text-2xl font-semibold sm:mb-16 sm:text-3xl">
            Почему ЛСТК от нашей фабрики
          </h2>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center rounded-card border border-border-subtle bg-bg-primary px-8 py-9 text-center shadow-card transition hover:-translate-y-1 hover:border-accent-primary hover:shadow-cardHover"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-accent-bg text-accent-primary transition group-hover:bg-accent-primary group-hover:text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mb-2 text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTION ================= */}
      <section className="bg-bg-primary py-sectionSm sm:py-sectionMd lg:py-section">
        <div className="mx-auto max-w-[1320px] px-5">
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
            <div
              className="h-80 w-full rounded-2xl border border-border-subtle bg-cover bg-center shadow-card md:h-[420px]"
              style={{ backgroundImage: `url(${productionImg})` }}
            />

            <div className="max-w-md space-y-4">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                О производстве
              </h2>
              <p className="text-base leading-relaxed text-text-secondary">
                Фабрика Каркасов Алатау — современное производство лёгких
                стальных тонкостенных конструкций.
              </p>
              <p className="text-base leading-relaxed text-text-secondary">
                Используем высокоточное оборудование и строгий контроль
                качества.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-accent-primary px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 hover:shadow-lg"
              >
                Узнать больше
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOCUMENTS ================= */}
      <section className="bg-bg-primary py-sectionSm sm:py-sectionMd lg:py-section">
        <div className="mx-auto max-w-[1320px] px-5">
          <h2 className="mb-12 text-center text-2xl font-semibold sm:mb-16 sm:text-3xl">
            Документы и сертификаты
          </h2>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {documents.map((doc, i) => (
              <div
                key={i}
                className="rounded-card border border-border-subtle bg-bg-secondary px-7 py-8 text-center shadow-card transition hover:-translate-y-1 hover:border-accent-primary hover:shadow-cardHover"
              >
                <div className="mb-4 flex justify-center text-accent-primary">
                  <svg
                    width="44"
                    height="44"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold">{doc.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/documents"
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-primary hover:text-accent-primary"
            >
              Перейти в раздел документов
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="bg-bg-secondary py-sectionSm sm:py-sectionMd lg:py-section">
        <div className="mx-auto max-w-[1320px] px-5">
          <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
            <div className="space-y-5 max-w-md">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Свяжитесь с нами
              </h2>
              <p className="text-base leading-relaxed text-text-secondary">
                Готовы ответить на ваши вопросы и помочь с выбором конструкции.
              </p>

              <div className="space-y-3 text-sm text-text-secondary">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-text-primary">
                    Телефон
                  </span>
                  <span>{siteConfig.contact.phone}</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-text-primary">
                    Адрес
                  </span>
                  <span>{siteConfig.contact.address}</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-text-primary">
                    Режим работы
                  </span>
                  <span>{siteConfig.contact.workingHours}</span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppContact}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent-primary px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 hover:shadow-lg"
              >
                Написать в WhatsApp
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border-subtle shadow-card">
              <iframe
                title="Location Map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.2524871691937!2d${siteConfig.location.lng}!3d${siteConfig.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDEzJzE5LjIiTiA3NsKwNTEnMDQuMyJF!5e0!3m2!1sen!2skz!4v1234567890123!5m2!1sen!2skz`}
                className="h-80 w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
