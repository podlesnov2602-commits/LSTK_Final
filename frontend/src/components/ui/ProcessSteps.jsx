import React from 'react';
import { ArrowRight, ClipboardList, Factory, PenTool, Ruler, Wrench } from 'lucide-react';

const defaultSteps = [
  { title: 'Заявка', description: 'Оставляете заявку в один клик', icon: ClipboardList },
  { title: 'Замеры', description: 'Фиксируем габариты и нагрузки', icon: Ruler },
  { title: 'Проект', description: 'Собираем смету и визуализацию', icon: PenTool },
  { title: 'Производство', description: 'Запускаем изготовление ЛСТК', icon: Factory },
  { title: 'Монтаж', description: 'Собираем объект и сдаём работу', icon: Wrench }
];

const ProcessSteps = ({ steps = defaultSteps }) => {
  return (
    <div className="process-flow" role="list">
      {steps.map((step, index) => {
        const IconComponent = step.icon;
        return (
          <div key={step.title} className="process-step-wrapper" role="listitem">
            <div className="process-step">
              <div className="process-icon-shell">
                <IconComponent size={22} strokeWidth={1.5} />
              </div>
              <div className="process-step-body">
                <p className="process-step-label">Шаг {String(index + 1).padStart(2, '0')}</p>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="process-arrow" aria-hidden="true">
                <ArrowRight size={18} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProcessSteps;
