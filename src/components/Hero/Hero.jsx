import heroNetworkImage from '../../assets/hero-network.png';
import garantIcon from '../../assets/images/icons/Hero/Vector-garant.svg';
import globalIcon from '../../assets/images/icons/Hero/Vector-global.svg';
import moneyIcon from '../../assets/images/icons/Hero/Vector-money.svg';
import tradeIcon from '../../assets/images/icons/Hero/Vector-trade.svg';
import './Hero.scss';

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__content-main">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              <span>Exclusive offer</span>
            </div>

            <h1 className="hero__title">
              <span className="hero__title-line">Exclusive for</span>
              <span className="hero__title-line">Dark Money:</span>
              <span className="hero__title-line">
                <span className="hero__title-accent">Телеком-бизнес</span> с
              </span>
              <span className="hero__title-line">защитой капитала</span>
            </h1>

            <p className="hero__text">
              Получайте от <span className="hero__text-accent hero__text-accent--green">$1500/мес*</span> на
              терминации голосового трафика. <span className="hero__text-accent hero__text-accent--nowrap">100% безопасность</span>{' '}
              <span className="hero__text-accent">депозита</span>{' '}
              через Гарант-сервис форума
            </p>

            <div className="hero__chips">
              <span className="hero__chip hero__chip--blue hero__chip--garant">
                <span className="hero__chip-icon">
                  <img src={garantIcon} alt="" aria-hidden="true" />
                </span>
                <span>Гарант-сервис DM</span>
              </span>
              <span className="hero__chip hero__chip--green hero__chip--income">
                <span className="hero__chip-icon">
                  <img src={moneyIcon} alt="" aria-hidden="true" />
                </span>
                <span>Доход от $1500+</span>
              </span>
              <span className="hero__chip hero__chip--green hero__chip--gross">
                <span className="hero__chip-icon">
                  <img src={tradeIcon} alt="" aria-hidden="true" />
                </span>
                <span>60% Gross</span>
              </span>
              <span className="hero__chip hero__chip--blue hero__chip--geo">
                <span className="hero__chip-icon">
                  <img src={globalIcon} alt="" aria-hidden="true" />
                </span>
                <span>РФ, РБ, КЗ, КГ</span>
              </span>
            </div>

            <a href="#contacts" className="hero__button">Стать партнёром</a>
          </div>

          <div className="hero__content-footer">
            <p className="hero__note">
              *Прогноз дохода $1500+ актуален для приоритетных регионов (РФ) при работе с 32-канальным
              оборудованием.
            </p>
            <p className="hero__note hero__note--secondary">
              В других локациях и форматах доходность составляет $100-$300/мес
            </p>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-frame">
            <img className="hero__visual-network" src={heroNetworkImage} alt="Схема сетевого соединения" />
          </div>

          <div className="hero__floating hero__floating--top">
            <span className="hero__floating-label">Месячная прибыль</span>
            <strong>$1,500+</strong>
          </div>

          <div className="hero__floating hero__floating--bottom">
            <span className="hero__floating-status">
              <span className="hero__floating-dot" />
              <span>Система активна</span>
            </span>
            <strong className="hero__floating-strong--green">32 Канала</strong>
            <span className="hero__floating-meta">Онлайн / Процессинг</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
