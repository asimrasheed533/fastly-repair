import { HomeCareSection } from "@/components/HomeCareSection";
import { HomeFaqSection } from "@/components/HomeFaqSection";
import { HomeSolutions } from "@/components/HomeSolutions";
import "@/styles/home.scss";
// import AOS from "aos";
export default function page() {
  return (
    <>
      <div className="banner__container">
        <div className="home__join__team__overlay">
          <div className="home__join__team__overlay__heading">
            <span>Expert AC, Machine, and Refrigerator</span> Repair Services
          </div>
          <div className="home__join__team__overlay__info">
            Reliable, Fast, and Affordable Repairs for ACs, Machines, and
            Refrigerators in Madia – Professional Service at Your Doorstep!
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
              href="tel:0558617259"
              target="_blank"
              className="header__content__nav__buttons__button header__content__nav__buttons__button__secondary"
            >
              Call Now
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
