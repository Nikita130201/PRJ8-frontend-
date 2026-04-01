import garantIcon from '../../assets/images/icons/Security/Vector-security-garant.svg';
import heartIcon from '../../assets/images/icons/Security/Vector-security-heart.svg';
import returnIcon from '../../assets/images/icons/Security/Union-security-return.svg';
import './Security.scss';

const securityCards = [
  {
    title: 'Гарант-сервис',
    text: (
      <>
        Вы вносите стоимость оборудования в{' '}
        <span className="security__card-highlight">Гарант DarkMoney</span>. Средства защищены до
        возврата устройства
      </>
    ),
    variant: 'blue',
    icon: garantIcon,
  },
  {
    title: 'Страховка рисков',
    text: (
      <>
        Компенсируем до <span className="security__card-highlight">70% депозита</span> в случае
        форс-мажора (при соблюдении инструкций)
      </>
    ),
    variant: 'green',
    icon: heartIcon,
  },
  {
    title: 'Мгновенный возврат',
    text: (
      <>
        Выход из проекта в любой момент.{' '}
        <span className="security__card-highlight">100% возврат депозита</span> при возврате
        исправного оборудования
      </>
    ),
    variant: 'blue',
    icon: returnIcon,
  },
];

function Security() {
  return (
    <section className="security section" id="security">
      <div className="container">
        <h2 className="section__title security__title">
          Безопасность <span className="section__title-accent">& Защита</span>
        </h2>
        <p className="section__subtitle security__subtitle">
          Ваш капитал под защитой на каждом этапе сотрудничества
        </p>

        <div className="security__grid">
          {securityCards.map((card) => (
            <article
              key={card.title}
              className={`security__card security__card--${card.variant} card`}
            >
              <div className="security__icon" aria-hidden="true">
                <img src={card.icon} alt="" />
              </div>
              <h3 className="security__card-title">{card.title}</h3>
              <p className="security__card-text">{card.text}</p>
            </article>
          ))}
        </div>

        <div className="security__result card">
          <div className="security__result-side security__result-side--left">
            <span className="security__result-label">Ваше действие</span>
            <strong className="security__result-value">Вернули шлюз</strong>
          </div>

          <div className="security__result-side security__result-side--right">
            <span className="security__result-label">Наш ответ</span>
            <strong className="security__result-value security__result-value--green">
              Вернули 100% депа
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Security;
