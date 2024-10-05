export default function ValueCard({ svg, heading, content, color }) {
  return (
    <div
      className={`value__container__card ${
        color && "value__container__card__color"
      }`}
    >
      <div className="map__container__card__head">
        <div className="map__container__card__svg">{svg}</div>
        <div className="map__container__card__title">{heading}</div>
      </div>
      <div className="map__container__card__content">{content}</div>
    </div>
  );
}
