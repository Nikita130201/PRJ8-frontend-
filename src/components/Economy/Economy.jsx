import "./Economy.scss";

const economyPlans = [
  {
    id: "own-equipment",
    badge: "Максимальный доход",
    badgeVariant: "green",
    title: "Своё оборудование",
    subtitle: "Для владельцев GoIP, Dinstar и других шлюзов",
    value: "70% Gross",
    caption: "от всего трафика",
    button: "Подключить своё устройство",
    variant: "green",
    items: [
      "Выплаты от $1500/мес за одно 32-канальное устройство (для РФ)",
      "Гарантированные выплаты от $700/мес для регионов с ограничениями",
      "Не менее $300/мес для любой локации в мире",
      "Эксклюзивный контракт от 12 до 24 месяцев",
      "Выплаты, даже если трафик временно отсутствует, пока устройство в сети",
      "Разовая выплата $200 - $500 за каждое устройство",
      "Полное сопровождение, удалённая настройка и мониторинг 24/7",
    ],
  },
  {
    id: "vider-equipment",
    badge: "Старт без вложений",
    badgeVariant: "blue",
    title: "Оборудование Vider",
    subtitle: "32-канальный шлюз в залог через Garant DM",
    value: "60% Gross",
    caption: "От выручки оборудования",
    button: "Получить оборудование",
    variant: "blue",
    items: [
      "Залоговая стоимость $3000 через Garant-сервис DM",
      "100% возврат депозита при выходе из проекта",
      "Автовыкуп до 50% от дохода в счёт стоимости",
      "Оборудование в собственности через 12 месяцев",
      "Страховка депозита до 70% от рисков",
      "Оплата за онлайн, даже при простое трафика",
      "Гибкий выход из проекта в любой момент",
    ],
  },
];

const highlightTokens = [
  "$1500/мес",
  "$700/мес",
  "$300/мес",
  "12 до 24 месяцев",
  "$200 - $500",
  "$3000",
  "100%",
  "50%",
  "12 месяцев",
  "70%",
];

function renderHighlightedText(text, variant) {
  let result = text;

  highlightTokens.forEach((token) => {
    result = result.replace(
      token,
      `<span class="economy__feature-accent economy__feature-accent--${variant}">${token}</span>`,
    );
  });

  return result;
}

function Economy() {
  return (
    <section className="economy section" id="economy">
      <div className="container">
        <h2 className="section__title economy__title">
          Экономика <span className="section__title-accent">& Выплаты</span>
        </h2>
        <p className="section__subtitle economy__subtitle">
          Выберите модель сотрудничества и начните зарабатывать
        </p>

        <div className="economy__plans">
          {economyPlans.map((plan) => (
            <article
              key={plan.id}
              className={`economy__card economy__card--${plan.variant}`}
            >
              <div
                className={`economy__badge economy__badge--${plan.badgeVariant}`}
              >
                {plan.badgeVariant === "green" ? (
                  <span className="economy__badge-trend" aria-hidden="true">
                    <svg
                      width="22"
                      height="13"
                      viewBox="0 0 22 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.4179 0.75C14.4179 0.335786 14.7536 0 15.1679 0H20.75C21.1642 0 21.5 0.335786 21.5 0.75V6.29583C21.5 6.71005 21.1642 7.04583 20.75 7.04583C20.3358 7.04583 20 6.71005 20 6.29583V2.55286L13.8642 8.65129C13.3952 9.11744 12.991 9.51923 12.6239 9.79771C12.2304 10.0962 11.7932 10.322 11.255 10.322C10.7168 10.3219 10.2797 10.096 9.88624 9.7974C9.51923 9.51884 9.11512 9.11697 8.64629 8.65072L8.37203 8.37801C7.85787 7.86675 7.52452 7.53751 7.24695 7.32686C6.98672 7.12937 6.86506 7.10734 6.78449 7.10737C6.70393 7.1074 6.58228 7.12952 6.32219 7.3272C6.04478 7.53805 5.71167 7.86753 5.19789 8.37917L1.27922 12.2814C0.985711 12.5737 0.510838 12.5727 0.218559 12.2792C-0.0737192 11.9857 -0.0727238 11.5108 0.220783 11.2186L4.17433 7.28155C4.64326 6.81453 5.04742 6.41202 5.41452 6.133C5.80802 5.83391 6.24535 5.60756 6.78395 5.60737C7.32254 5.60717 7.76003 5.8332 8.15375 6.13199C8.52105 6.41074 8.9255 6.81296 9.39477 7.27963L9.66903 7.55235C10.1827 8.06316 10.5158 8.39209 10.7931 8.60257C11.0531 8.79989 11.1747 8.82197 11.2552 8.82198C11.3357 8.82199 11.4573 8.79994 11.7173 8.60268C11.9947 8.39226 12.3278 8.06341 12.8416 7.55272L18.9315 1.5H15.1679C14.7536 1.5 14.4179 1.16421 14.4179 0.75Z"
                        fill="#77DDAC"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="economy__badge-dot" aria-hidden="true" />
                )}
                <span>{plan.badge}</span>
              </div>

              <h3 className="economy__card-title">{plan.title}</h3>
              <p className="economy__card-subtitle">{plan.subtitle}</p>

              <div className="economy__value">{plan.value}</div>
              <p className="economy__caption">{plan.caption}</p>

              <ul className="economy__features">
                {plan.items.map((item) => (
                  <li className="economy__feature" key={item}>
                    <span
                      className={`economy__feature-mark economy__feature-mark--${plan.variant}`}
                      aria-hidden="true"
                    >
                      <svg
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0404 0.292893C11.431 0.683417 11.431 1.31658 11.0404 1.70711L4.37377 8.37377C3.98325 8.7643 3.35008 8.7643 2.95956 8.37377L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289C0.683417 3.90237 1.31658 3.90237 1.70711 4.29289L3.66667 6.25245L6.64645 3.27267L9.62623 0.292893C10.0168 -0.0976311 10.6499 -0.0976311 11.0404 0.292893Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: renderHighlightedText(item, plan.variant),
                      }}
                    />
                  </li>
                ))}
              </ul>

              <a
                href="#contacts"
                className={`economy__button economy__button--${plan.variant}`}
              >
                {plan.button}
              </a>
            </article>
          ))}
        </div>

        <aside className="economy__bonus">
          <div className="economy__bonus-icon" aria-hidden="true">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4998 11.5008V37.5008M19.4998 11.5008C20.2232 8.51964 21.4684 5.971 23.0738 4.1872C24.6793 2.40339 26.5699 1.46726 28.4993 1.50087C29.8254 1.50087 31.0972 2.02766 32.0349 2.96534C32.9725 3.90302 33.4993 5.17479 33.4993 6.50087C33.4993 7.82696 32.9725 9.09873 32.0349 10.0364C31.0972 10.9741 29.8254 11.5009 28.4993 11.5009M19.4998 11.5008C18.7763 8.51964 17.5302 5.971 15.9248 4.1872C14.3194 2.40339 12.4287 1.46726 10.4993 1.50087C9.17323 1.50087 7.90147 2.02766 6.96378 2.96534C6.0261 3.90302 5.49932 5.17479 5.49932 6.50087C5.49932 7.82696 6.0261 9.09873 6.96378 10.0364C7.90147 10.9741 9.17323 11.5009 10.4993 11.5009M5.49932 19.5009V33.5009C5.49932 34.5617 5.92075 35.5792 6.67089 36.3293C7.42104 37.0794 8.43845 37.5009 9.49932 37.5009H29.4993C30.5602 37.5009 31.5776 37.0794 32.3277 36.3293C33.0779 35.5792 33.4993 34.5617 33.4993 33.5009V19.5009M35.5 11.5008H3.5C2.39543 11.5008 1.5 12.3963 1.5 13.5008V17.5008C1.5 18.6054 2.39543 19.5008 3.5 19.5008H35.5C36.6046 19.5008 37.5 18.6054 37.5 17.5008V13.5008C37.5 12.3963 36.6046 11.5008 35.5 11.5008Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="economy__bonus-content">
            <h3 className="economy__bonus-title">Бонус менеджера</h3>
            <p className="economy__bonus-text">
              Получайте{" "}
              <span className="economy__feature-accent economy__feature-accent--green">
                $200 – $500
              </span>{" "}
              за каждого привлеченного вендора. Выплата начисляется разово после
              фиксации устройства в сети. Частные вендоры могут получить этот
              бонус за самих себя при старте.
            </p>
          </div>

          <a href="#contacts" className="economy__bonus-button">
            Стать партнёром
          </a>
        </aside>
      </div>
    </section>
  );
}

export default Economy;
