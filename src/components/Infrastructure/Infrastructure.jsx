import { useEffect, useRef, useState } from 'react';
import lightningIcon from '../../assets/images/icons/Infrastructure/Lighthing.svg';
import wifiIcon from '../../assets/images/icons/Infrastructure/WiFi.svg';
import locationIcon from '../../assets/images/icons/Infrastructure/Location.svg';
import './Infrastructure.scss';

const infrastructureCards = [
  {
    id: 'power',
    title: 'Питание',
    accent: '220V / 110V',
    text: 'Рекомендуется использование ИБП (UPS) для исключения сбоев',
    variant: 'blue',
    icon: lightningIcon,
  },
  {
    id: 'internet',
    title: 'Доступ в интернет',
    accent: 'Internet / Wi-Fi',
    text: 'Предпочтителен стационарный доступ, готовы рассмотреть мобильное подключение',
    variant: 'green',
    icon: wifiIcon,
  },
  {
    id: 'location',
    title: 'Локация',
    accent: 'Безопасное место',
    text: 'Иметь доступ к устройству для сброса, перенастройки. Подключаться с ПК к той же сети интернет',
    variant: 'blue',
    icon: locationIcon,
  },
];

function Infrastructure() {
  const gridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.50,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="infrastructure section" id="infrastructure">
      <div className="container">
        <h2 className="section__title infrastructure__title">
          Техническая <span className="section__title-accent">Инфраструктура</span>
        </h2>

        <p className="section__subtitle infrastructure__subtitle">
          Минимальные требования — максимальная эффективность
        </p>

        <div
          className={`infrastructure__grid ${
            isVisible ? 'infrastructure__grid--visible' : ''
          }`}
          ref={gridRef}
        >
          {infrastructureCards.map((card) => (
            <article
              key={card.id}
              className={`infrastructure__card infrastructure__card--${card.variant}`}
            >
              <div className={`infrastructure__icon infrastructure__icon--${card.variant}`}>
                <img src={card.icon} alt="" />
              </div>

              <h3 className="infrastructure__card-title">{card.title}</h3>

              <p
                className={`infrastructure__card-accent infrastructure__card-accent--${card.variant}`}
              >
                {card.accent}
              </p>

              <p className="infrastructure__card-text">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Infrastructure;