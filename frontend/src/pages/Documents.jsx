import React, { useEffect } from 'react';
import { Download, FileText } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import './Documents.css';

// ⬇️ ИМПОРТ PDF
import presentationPdf from '../assets/presentation.pdf';
import requisitePdf from '../assets/requisite.pdf';

const documents = [
  {
    title: 'Презентация компании',
    description:
      'Краткая информация о команде, направлениях и подходах к производству.',
    cta: 'Скачать презентацию',
    file: presentationPdf
  },
  {
    title: 'Реквизиты компании',
    description: 'Официальные данные для договоров и бухгалтерии.',
    cta: 'Скачать реквизиты',
    file: requisitePdf
  }
];

const Documents = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="documents-page">
      <PageHero
        title="Документы"
        subtitle="Только главное: презентация компании и реквизиты"
        meta="Industrial Premium • Документы"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
      />

      <section className="documents-grid-section">
        <div className="container">
          <SectionHeader
            eyebrow="Документы"
            title="Ключевые материалы"
            subtitle="Минимум текста — максимум уверенности"
          />

          <div className="documents-grid">
            {documents.map((doc, index) => (
              <div key={index} className="document-card">
                <div className="document-icon-wrapper">
                  <FileText size={34} />
                </div>

                <div className="document-info">
                  <h3 className="h3">{doc.title}</h3>
                  <p className="body-md">{doc.description}</p>
                </div>

                {/* ⬇️ ВАЖНО: a + download */}
                <a
                  href={doc.file}
                  download
                  className="btn-primary download-btn"
                >
                  <Download size={18} />
                  {doc.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="body-md documents-note">
            Все документы предоставляются по официальному запросу и используются
            для заключения договоров и подтверждения деятельности компании.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Documents;
