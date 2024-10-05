import Image from "next/image";

export default function SecondHeader({ image, text }) {
  return (
    <div className="Second__header__container">
      <Image
        className="Second__header__container__img"
        src={image}
        alt="خدمات إصلاح المكيفات، إصلاح الثلاجات، إصلاح الآلات الأوتوماتيكية، خبراء إصلاح الأجهزة، إصلاح الأجهزة الطارئ، إصلاح الأجهزة المنزلية، فنيو إصلاح محترفون"
      />
      <div className="Second__header__container__warper"></div>
      <div className="Second__header__container__text">
        <svg viewBox="0 0 51 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0H40.9986C46.4736 0 50.912 4.43837 50.912 9.91338H9.91338C4.43837 9.91338 0 5.47501 0 0Z"
            fill="#00263B"
          />
        </svg>
        <span>{text}</span>
        <svg viewBox="0 0 51 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0H40.9986C46.4736 0 50.912 4.43837 50.912 9.91338H9.91338C4.43837 9.91338 0 5.47501 0 0Z"
            fill="#00263B"
          />
        </svg>
      </div>
    </div>
  );
}
