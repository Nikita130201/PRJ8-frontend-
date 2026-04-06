import { useEffect, useRef, useState } from 'react';
import badgeStarIcon from '../../assets/images/icons/Equipment/star.svg';
import successIcon from '../../assets/images/icons/Equipment/success.svg';
import './Equipment.scss';

const equipmentSteps = [
  {
    number: '1',
    title: 'Работаете от 12 месяцев',
    text: 'Получаете стабильный доход от терминации трафика',
    variant: 'blue',
  },
  {
    number: '2',
    title: 'Списание из дохода',
    text: (
      <>
        <span className="equipment__step-accent">До 50% дохода</span> автоматически направляется
        на выкуп устройства
      </>
    ),
    variant: 'green',
  },
  {
    number: '3',
    title: 'Полная собственность',
    text: 'Шлюз переходит в вашу полную собственность с экономией 50% от рыночной цены',
    variant: 'green',
  },
];

function Equipment() {
  const stepsRef = useRef(null);
  const progressRef = useRef(null);

  const [isStepsVisible, setIsStepsVisible] = useState(false);
  const [isProgressVisible, setIsProgressVisible] = useState(false);

  useEffect(() => {
    const stepsElement = stepsRef.current;
    const progressElement = progressRef.current;

    if (!stepsElement || !progressElement) return;

    const stepsObserver = new IntersectionObserver(
      ([entry]) => {
        setIsStepsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.50,
      }
    );

    const progressObserver = new IntersectionObserver(
      ([entry]) => {
        setIsProgressVisible(entry.isIntersecting);
      },
      {
        threshold: 0.75,
      }
    );

    stepsObserver.observe(stepsElement);
    progressObserver.observe(progressElement);

    return () => {
      stepsObserver.disconnect();
      progressObserver.disconnect();
    };
  }, []);

  return (
    <section className="equipment section" id="equipment">
      <div className="container">
        <div className="equipment__badge">
          <span className="equipment__badge-icon" aria-hidden="true">
            <img src={badgeStarIcon} alt="" />
          </span>
          <span>50/50 Strategy</span>
        </div>

        <h2 className="section__title equipment__title">
          Оборудование <span className="equipment__title-accent">за полцены</span>
        </h2>

        <div className="equipment__panel">
          {/* ШАГИ */}
          <div
            className={`equipment__steps ${
              isStepsVisible ? 'equipment__steps--visible' : ''
            }`}
            ref={stepsRef}
          >
            {equipmentSteps.map((step) => (
              <article className="equipment__step" key={step.number}>
                <div
                  className={`equipment__step-number equipment__step-number--${step.variant}`}
                >
                  {step.number}
                </div>
                <h3 className="equipment__step-title">{step.title}</h3>
                <p className="equipment__step-text">{step.text}</p>
              </article>
            ))}
          </div>

          {/* КАЛЬКУЛЯТОР */}
          <div className="equipment__calculator" ref={progressRef}>
            <div className="equipment__calculator-head">
              <div>
                <p className="equipment__calculator-label">
                  Залоговая стоимость за 32-канальный шлюз
                </p>
                <strong className="equipment__calculator-value">$3,000</strong>
              </div>

              <div className="equipment__calculator-side">
                <p className="equipment__calculator-label">
                  Реальные затраты через год
                </p>
                <strong className="equipment__calculator-value equipment__calculator-value--green">
                  ~$1,500
                </strong>
              </div>
            </div>

            <div className="equipment__progress" aria-hidden="true">
              <span
                className={`equipment__progress-fill ${
                  isProgressVisible
                    ? 'equipment__progress-fill--visible'
                    : ''
                }`}
              />
            </div>

            <div className="equipment__calculator-foot">
              <span>Выкупили на 50%</span>
              <span className="equipment__calculator-saving">
                Экономия 50%
              </span>
            </div>
          </div>

          {/* ИТОГ */}
          <aside className="equipment__summary">
            <div className="equipment__summary-icon" aria-hidden="true">
              <img src={successIcon} alt="" />
            </div>

            <div className="equipment__summary-content">
              <h3 className="equipment__summary-title">Итог:</h3>
              <p className="equipment__summary-text">
                Через год шлюз переходит в вашу{' '}
                <span className="equipment__summary-accent equipment__summary-accent--blue">
                  полную собственность
                </span>
                , фактически оплатив лишь{' '}
                <span className="equipment__summary-accent equipment__summary-accent--green">
                  50% его стоимости
                </span>{' '}
                из прибыли. Вы продолжаете зарабатывать, а депозит
                возвращается из Гаранта.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Equipment;