import "@/styles/home.scss";

import { HomeCareSection } from "@/components/HomeCareSection";
import { HomeFaqSection } from "@/components/HomeFaqSection";
import { HomeSolutions } from "@/components/HomeSolutions";

export default function page() {
  return (
    <>
      <div className="banner__container">
        <div className="home__join__team__overlay">
          <div className="home__join__team__overlay__heading">
            <span>صيانة مكيفات، غساله اتوماتيك ،و تلاجه</span>
          </div>
          <div className="home__join__team__overlay__info">
            إصلاحات موثوقة وسريعة وبأسعار معقولة لمكيفات الهواء والآلات
            والثلاجات في ماديا - خدمة احترافية عند باب منزلك
          </div>
          <div className="header__content__buttons__button__warper">
            <a
              href="tel:0576370554"
              target="_blank"
              className="header__content__buttons__button"
            >
              اتصل الآن
            </a>
          </div>
        </div>
      </div>
      <HomeCareSection />
      <HomeSolutions />
      <HomeFaqSection />
    </>
  );
}
