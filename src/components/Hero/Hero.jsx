import './Hero.scss';

function Hero() {
  return (
    <section className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__badge">Exclusive offer</div>
          <h1 className="hero__title">
            Exclusive for Dark Money:
            <span className="hero__title-accent"> Телeком-бизнес </span>
            с защитой капитала
          </h1>
          <p className="hero__text">
            Секция-заглушка под первый экран. Текст и цифры потом подставим из финального макета.
          </p>

          <div className="hero__chips">
            <span className="hero__chip hero__chip--blue">Гарант-сервис DM</span>
            <span className="hero__chip hero__chip--green">Доход от $1500+</span>
            <span className="hero__chip hero__chip--green">60% Gross</span>
            <span className="hero__chip hero__chip--blue">РФ, РБ, KZ, KG</span>
          </div>

          <a href="#contacts" className="hero__button">Стать партнёром</a>
        </div>

        <div className="hero__visual card">
          <div className="hero__placeholder">Изображение / медиа</div>
          <div className="hero__floating hero__floating--top">
            <span>Месячная прибыль</span>
            <strong>$1,500+</strong>
          </div>
          <div className="hero__floating hero__floating--bottom">
            <span>Система активна</span>
            <strong>32 канала</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
