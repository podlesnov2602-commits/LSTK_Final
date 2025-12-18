import React, { useEffect } from 'react';
import { Download, FileText } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import './Documents.css';

const Documents = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const documentGroups = [
    {
      title: 'Юридические документы',
      items: [
        {
          title: 'Сертификат соответствия',
          description: 'Сертификат качества на продукцию',
          file: '#',
          priority: true
        },
        {
          title: 'Лицензия на деятельность',
          description: 'Лицензия на осуществление деятельности',
          file: '#',
          priority: true
        },
        {
          title: 'Реквизиты компании',
          description: 'Полные реквизиты для оформления договора',
          file: '#',
          priority: true
        },
        {
          title: 'Договор поставки',
          description: 'Типовой договор поставки продукции',
          file: '#'
        }
      ]
    },
    {
      title: 'Техническая документация',
      items: [
        {
          title: 'Технические условия',
          description: 'Технические характеристики продукции',
          file: '#'
        },
        {
          title: 'Гарантийное обязательство',
          description: 'Условия гарантийного обслуживания',
          file: '#'
        },
        {
          title: 'Пожарный сертификат',
          description: 'Сертификат пожарной безопасности',
          file: '#',
          priority: true
        }
      ]
    },
    {
      title: 'Коммерческие материалы',
      items: [
        {
          title: 'Прайс-лист',
          description: 'Актуальные цены на продукцию',
          file: '#'
        },
        {
          title: 'Каталог продукции',
          description: 'Полный каталог производимой продукции',
          file: '#'
        }
      ]
    }
  ];

  const handleDownload = (file) => {
    // Заглушка - позже можно добавить реальные файлы
    console.log('Downloading:', file);
  };

  return (
    <div className="documents-page">
      <PageHero
        title="Документы"
        subtitle="Все необходимые сертификаты и документы"
        meta="Industrial Premium • Документы"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
      />

      {/* Documents Grid */}
      <section className="documents-grid-section">
        <div className="container">
          <SectionHeader
            eyebrow="Прозрачность"
            title="Документы"
            subtitle="Готовые к загрузке сертификаты, договоры и каталоги"
          />
          <div className="documents-groups">
            {documentGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="documents-group">
                <h3 className="h3 documents-group-title">{group.title}</h3>
                <div className="documents-grid">
                  {group.items.map((doc, docIndex) => (
                    <div
                      key={`${groupIndex}-${docIndex}`}
                      className={`document-card ${doc.priority ? 'document-card-priority' : ''}`}
                    >
                      <div className="document-icon-wrapper">
                        <FileText size={40} />
                      </div>
                      <div className="document-info">
                        <h3 className="h3">{doc.title}</h3>
                        <p className="body-md">{doc.description}</p>
                      </div>
                      <button
                        className="btn-primary download-btn"
                        onClick={() => handleDownload(doc.file)}
                      >
                        <Download size={18} />
                        Скачать
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="documents-info-section">
        <div className="container">
          <div className="documents-info-content">
            <SectionHeader
              eyebrow="Стандарты"
              title="Официальные документы"
              subtitle="Подтверждаем законность деятельности и допуск к работам"
            />
            <p className="body-lg">
              Все представленные документы действительны и предоставляются для проверки, согласования и заключения договоров. Мы работаем в соответствии с требованиями законодательства и отраслевых стандартов.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents;
