export function HomeCareSectionEntry({ icon, title, info }) {
  return (
    <div className="home__care__content__entry">
      <div className="home__care__content__entry__icon">{icon}</div>
      <div className="home__care__content__entry__content">
        <div className="home__care__content__entry__content__title">
          {title}
        </div>
        <div className="home__care__content__entry__content__info">{info}</div>
      </div>
    </div>
  );
}
