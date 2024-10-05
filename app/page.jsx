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
        </div>
      </div>
      <HomeSolutions />
      <HomeFaqSection />
    </>
  );
}
