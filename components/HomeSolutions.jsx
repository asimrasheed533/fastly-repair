import { homeSolutionsData } from "./homeSolutionsData";

export function HomeSolutions() {
  return (
    <div className="home__solutions">
      <div className="home__solutions__heading">كيف تعمل خدماتنا؟</div>
      <div className="home__solutions__content">
        {homeSolutionsData.map((solution) => {
          return (
            <a
              key={solution.id}
              href="#"
              className="home__solutions__content__entry"
            >
              <div className="home__solutions__content__entry__icon">
                {solution.icon}
              </div>
              <div className="home__solutions__content__entry__text">
                {solution.label}
              </div>
              <div className="home__solutions__content__entry__info">
                {solution.info}
              </div>
            </a>
          );
        })}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "1em",
        }}
      >
        <a
          href="tel:0571734988"
          target="_blank"
          className="header__content__nav__buttons__button header__content__nav__buttons__button__secondary"
        >
          اتصل الآن
        </a>
      </div>
    </div>
  );
}
