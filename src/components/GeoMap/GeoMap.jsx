import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "./GeoMap.scss";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const interactiveCountries = [
  {
    id: "germany",
    label: "Германия",
    level: "green",
    grossIncome: "$800 - $1200",
    note: "Легальная работа и предсказуемая правовая среда.",
    aliases: ["Germany"],
  },
  {
    id: "poland",
    label: "Польша",
    level: "green",
    grossIncome: "$800 - $1200",
    note: "Подходит для прозрачной и стабильной работы.",
    aliases: ["Poland"],
  },
  {
    id: "czechia",
    label: "Чехия",
    level: "green",
    grossIncome: "$800 - $1200",
    note: "Низкий уровень правовых рисков для запуска.",
    aliases: ["Czechia", "Czech Republic"],
  },
  {
    id: "spain",
    label: "Испания",
    level: "green",
    grossIncome: "$800 - $1200",
    note: "Возможна открытая работа через юрлицо.",
    aliases: ["Spain"],
  },
  {
    id: "portugal",
    label: "Португалия",
    level: "green",
    grossIncome: "$800 - $1200",
    note: "Стабильная среда и понятные правила работы.",
    aliases: ["Portugal"],
  },
  {
    id: "kazakhstan",
    label: "Казахстан",
    level: "yellow",
    grossIncome: "$1100 - $1450",
    note: "Нужна детальная юридическая проработка кейса.",
    aliases: ["Kazakhstan"],
  },
  {
    id: "kyrgyzstan",
    label: "Кыргызстан",
    level: "yellow",
    grossIncome: "$1100 - $1450",
    note: "Требуются осторожность и локальная консультация.",
    aliases: ["Kyrgyzstan"],
  },
  {
    id: "armenia",
    label: "Армения",
    level: "yellow",
    grossIncome: "$1100 - $1450",
    note: "Есть ограничения, нужен анализ законодательства.",
    aliases: ["Armenia"],
  },
  {
    id: "mexico",
    label: "Мексика",
    level: "yellow",
    grossIncome: "$1100 - $1450",
    note: "Работа возможна только после проверки правовых рисков.",
    aliases: ["Mexico"],
  },
  {
    id: "russia",
    label: "Россия",
    level: "red",
    grossIncome: "$1440 - $1680",
    note: "Вендоры в этой стране требуются и работа идет только через проверенные связки.",
    aliases: ["Russia", "Russian Federation"],
  },
  {
    id: "belarus",
    label: "Беларусь",
    level: "red",
    grossIncome: "$1440 - $1680",
    note: "Высокий риск и необходимость закрытого формата работы.",
    aliases: ["Belarus"],
  },
  {
    id: "china",
    label: "Китай",
    level: "red",
    grossIncome: "$1440 - $1680",
    note: "Максимальная осторожность и только проверенные партнеры.",
    aliases: ["China"],
  },
  {
    id: "uae",
    label: "ОАЭ",
    level: "red",
    grossIncome: "$1440 - $1680",
    note: "Требуется закрытое обсуждение условий и рисков.",
    aliases: ["United Arab Emirates"],
  },
];

const countryLevelMap = new Map(
  interactiveCountries.flatMap((country) =>
    country.aliases.map((alias) => [alias, country]),
  ),
);

const levelLabelMap = {
  green: "Уровень 1",
  yellow: "Уровень 2",
  red: "Уровень 3",
};

const mapLegend = [
  { id: "level-1", label: "Уровень 1", color: "green" },
  { id: "level-2", label: "Уровень 2", color: "yellow" },
  { id: "level-3", label: "Уровень 3", color: "red" },
  { id: "no-data", label: "Нет данных", color: "gray" },
];

const geoLevels = [
  {
    id: "level-1",
    color: "green",
    title: "Уровень 1: Страны с низкими рисками",
    subtitle:
      "Легальная работа, оборудование не запрещено, деятельность по терминации трафика не регулируется на уровне GSM-VoIP шлюзов",
    body: [
      "В ряде стран Евросоюза, Латинской Америки и Юго-Восточной Азии эксплуатация GSM-шлюзов и услуги коллокации являются абсолютно легальным видом предпринимательской деятельности.",
    ],
    sections: [
      {
        title: "Как мы работаем:",
        text: "Мы приветствуем создание полноценного юридического лица. Это позволяет Вам работать открыто, заключать официальные договоры аренды и масштабировать бизнес без ограничений. Однако для начала и нескольких устройств в работе (1-2) мы готовы подписывать контракты с физическими лицами, обозначив деятельность как «арендодатель» и «арендатор».",
      },
      {
        title: "Наша поддержка:",
        text: "Мы консультируем Вас на каждом этапе — от регистрации компании с правильными кодами деятельности (ОКВЭД/NACE) до настройки налоговой отчетности для получения выплат.",
      },
    ],
    chips: ["Германия", "Польша", "Чехия", "Испания", "Португалия"],
  },
  {
    id: "level-2",
    color: "yellow",
    title: "Уровень 2: Страны среднего риска",
    subtitle:
      "В странах Юго-Восточной Азии, Латинской Америки требуется детальная юридическая проработка кейса",
    body: [
      'В некоторых странах имеются ограничения на деятельность, связанную с терминацией голосового и текстового трафика. В этой стране рекомендуем получить дополнительные консультации не только нашей компании, но и местных юристов, для создания условий "колокации" GSM оборудования',
    ],
    sections: [
      {
        title: "Наша рекомендация:",
        text: "Мы настоятельно советуем Вам максимально детально изучить весь законодательный аспект перед тем, как подключать оборудование и заключать контракт.",
      },
      {
        title: "Ваша стратегия:",
        text: "В таких странах мы рекомендуем быть предельно осторожными, использовать юридические консультации и не афишировать масштаб деятельности до полного понимания правовых последствий",
      },
    ],
    chips: ["Казахстан", "Кыргызстан", "Армения", "Мексика"],
  },
  {
    id: "level-3",
    color: "red",
    title: "Уровень 3: Страны с высокими рисками",
    subtitle: "Высокий риск блокировок при максимальной прибыли",
    body: [
      "Достоверная информация от нашей компании, что государство всячески пресекает любую деятельность без отдельных лицензий. Нам по прежнему крайне интересны такие страны, в связи с условиями выше оплата по ним будет максимальной. Но требуется принимать во внимание возможные последствия: все действия исключительно на Ваш страх и риск.",
    ],
    sections: [
      {
        title: "Наша позиция:",
        text: "В официальных документах и открытом доступе мы не расписываем вариации сотрудничества в таких зонах. Однако мы уверены: люди с «предпринимательской жилкой» понимают, что для работы шлюза технически требуются только стабильный интернет и питание. Обеспечить эти условия можно разными способами.",
      },
      {
        title: "Обмен опытом:",
        text: "Все «подводные камни», технические хитрости и методы обеспечения безопасности в таких регионах мы готовы обсуждать исключительно на закрытых конференциях и в личном общении с проверенными партнерами.",
      },
    ],
    chips: ["Россия", "Беларусь", "Китай", "ОАЭ"],
  },
  {
    id: "no-data",
    color: "gray",
    title: "Нет данных",
    subtitle: "Отсутствие данных у нашей компании",
    body: [
      "Это страны, где наша компания не имеет практического опыта работы с телекоммуникационным оборудованием. Мы открыты к сотрудничеству и готовы изучить возможности работы в этих юрисдикциях.",
    ],
    sections: [
      {
        title: "Что это означает:",
        text: "Перед началом сотрудничества в этих странах потребуется детальный анализ законодательства, тестирование оборудования и оценка всех рисков. Мы готовы рассматривать предложения от партнеров из этих регионов.",
      },
    ],
    chips: [],
  },
];

function GeoMap() {
  const [openItem, setOpenItem] = useState(null);
  const [hoveredCountryId, setHoveredCountryId] = useState(null);
  const [activeLevel, setActiveLevel] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const hoveredCountry =
    interactiveCountries.find((country) => country.id === hoveredCountryId) ?? null;

  const handleToggle = (id) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  const handleLegendClick = (color) => {
    setActiveLevel((current) => (current === color ? null : color));
  };

  return (
    <section className="geomap section" id="map">
      <div className="container">
        <h2 className="section__title geomap__title">
          География <span className="section__title-accent">& Специфика</span>
        </h2>
        <p className="section__subtitle geomap__subtitle">
          Работаем в РФ, СНГ и Европе с учётом правовых особенностей
        </p>

        <div className="geomap__map-panel">
          <div className="geomap__map-surface">
            <div className="geomap__map-visual">
              <ComposableMap
                projection="geoMercator"
                className="geomap__map-base"
                aria-hidden="true"
                projectionConfig={{
                  scale: 135,
                  center: [0, 40],
                  rotate: [-10, 0, 0],
                }}
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies
                      .filter((geo) => geo.properties?.name !== "Antarctica")
                      .map((geo) => {
                        const name = geo.properties?.name;
                        const country = countryLevelMap.get(name);
                        const level = country?.level;
                        const isHovered = country?.id === hoveredCountryId;
                        const classNames = ["geomap__map-country"];

                        if (hoveredCountryId) {
                          if (isHovered) {
                            classNames.push(`is-level-${level}`);
                          } else {
                            classNames.push("is-dimmed");
                          }
                        } else if (activeLevel) {
                          if (level === activeLevel) {
                            classNames.push(`is-level-${level}`);
                          } else {
                            classNames.push("is-dimmed");
                          }
                        }

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            className={classNames.join(" ")}
                            onMouseEnter={(evt) => {
                              setHoveredCountryId(country?.id ?? null);
                              setMousePos({ x: evt.clientX, y: evt.clientY });
                            }}
                            onMouseMove={(evt) => {
                              setMousePos({ x: evt.clientX, y: evt.clientY });
                            }}
                            onMouseLeave={() => setHoveredCountryId(null)}
                          />
                        );
                      })
                  }
                </Geographies>
              </ComposableMap>

              {hoveredCountry && (
                <aside
                  className="geomap__country-card"
                  aria-live="polite"
                  style={{
                    position: "fixed",
                    left: mousePos.x + 20,
                    top: mousePos.y - 20,
                    zIndex: 100,
                  }}
                  onMouseEnter={() => setHoveredCountryId(hoveredCountryId)}
                  onMouseLeave={() => setHoveredCountryId(null)}
                >
                  <h3 className="geomap__country-card-title">{hoveredCountry.label}</h3>

                  <div className={`geomap__country-card-chip geomap__country-card-chip--${hoveredCountry.level}`}>
                    <span className="geomap__country-card-chip-dot" aria-hidden="true" />
                    <span>{levelLabelMap[hoveredCountry.level]}</span>
                  </div>

                  <div className="geomap__country-card-divider" />

                  <div className="geomap__country-card-label">ГРОСС ДОХОД</div>
                  <div className="geomap__country-card-income">{hoveredCountry.grossIncome}</div>
                  <div className="geomap__country-card-period">30 дней</div>

                  <div className="geomap__country-card-divider" />

                  <div className="geomap__country-card-note-row">
                    <span className="geomap__country-card-note-icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
                        <path d="M4.5 8.2L6.8 10.5L11.5 5.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="geomap__country-card-note">{hoveredCountry.note}</p>
                  </div>
                </aside>
              )}
            </div>

            <div className="geomap__legend">
              {mapLegend.map((item) => (
                <div
                  key={item.id}
                  className={`geomap__legend-item geomap__legend-item--${item.color} ${activeLevel === item.color ? 'is-active' : ''}`}
                  onClick={() => handleLegendClick(item.color)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="geomap__legend-dot" aria-hidden="true" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="geomap__intro">
          <h3 className="geomap__intro-title">
            Мы <span className="section__title-accent">разделили</span> страны на{" "}
            <span className="section__title-accent">4 уровня</span> по степени юридических рисков
          </h3>
          <p className="geomap__intro-text">
            Уровень 1, 2 и 3, а также те страны, где мы не имеем практического опыта работы с
            телекоммуникационным оборудованием
          </p>
        </div>

        <div className="geomap__accordion">
          {geoLevels.map((level) => {
            const isOpen = openItem === level.id;

            return (
              <article
                key={level.id}
                className={`geomap__accordion-item geomap__accordion-item--${level.color} ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="geomap__accordion-trigger"
                  onClick={() => handleToggle(level.id)}
                  aria-expanded={isOpen}
                >
                  <span className="geomap__accordion-marker" aria-hidden="true">
                    <span className="geomap__accordion-marker-core" />
                  </span>

                  <span className="geomap__accordion-heading">
                    <span className="geomap__accordion-title">{level.title}</span>
                    <span className="geomap__accordion-subtitle">{level.subtitle}</span>
                  </span>

                  <span className="geomap__accordion-arrow" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="geomap__accordion-body">
                    {level.body.map((paragraph) => (
                      <p key={paragraph} className="geomap__accordion-text">{paragraph}</p>
                    ))}

                    {level.sections.map((section) => (
                      <div key={section.title} className="geomap__accordion-section">
                        <h4 className="geomap__accordion-section-title">{section.title}</h4>
                        <p className="geomap__accordion-text">{section.text}</p>
                      </div>
                    ))}

                    {level.chips.length > 0 && (
                      <div className="geomap__chips">
                        {level.chips.map((chip) => (
                          <span key={chip} className={`geomap__chip geomap__chip--${level.color}`}>
                            {chip}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GeoMap;
