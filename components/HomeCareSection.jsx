import React from "react";
import { BenefitsFeatureEntry } from "./BenefitsFeatureEntry";
import { HomeCareSectionEntry } from "./HomeCareSectionEntry";

const featureData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="lucide lucide-circle-dollar-sign"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </svg>
    ),
    title: "Air Condition Repairing",
    info: "We made thousands of air conditioner repairs. Our friendly and honest technicians go above and beyond to provide exceptional service to our customers every time.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="lucide lucide-hourglass"
      >
        <path d="M5 22h14" />
        <path d="M5 2h14" />
        <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
        <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
      </svg>
    ),
    title: "Refrigerator Repair",
    info: "We offer the best refrigerator repair service and offer the best prices with genuine parts in a doorstep solution in Madinah, Saudi Arabia.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="lucide lucide-clipboard-list"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" />
        <path d="M12 16h4" />
        <path d="M8 11h.01" />
        <path d="M8 16h.01" />
      </svg>
    ),
    title: "Washing Machine Repair",
    info: "We provide reliable washing machine repair services for all makes and models in  Madinah, Saudi Arabia.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="lucide lucide-user-pen"
      >
        <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
        <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
        <circle cx="10" cy="7" r="4" />
      </svg>
    ),
    title: "Microwave Repair",
    info: "All of our technicians are highly trained and qualified for all microwave repair, grill microwave repair, convection microwave oven for a brand like LG microwave repair in Dammam",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="lucide lucide-badge-check"
      >
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Toaster, Coffee Machines, Fan",
    info: "toaster coffee machines Dishwasher a fan repairing and maintenance All kind of electronics machines in Madinah, Saudi Arabia.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="lucide lucide-clock"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Other Appliances Repair",
    info: "Air conditioner repair refrigerators washing machines ovens central Split and Ordinary Renewal of the original American and Korean icopper fitting  Madinah, Saudi Arabia.",
  },
];

export function HomeCareSection() {
  return (
    <div className="home__care">
      <div className="home__care__header">
        <div className="home__care__header__heading">
          Discover the Benefits of choosing us
        </div>
        <div className="home__care__header__info">
          Experience World-Class Academic Assistance Along With Awesome Perks
        </div>
      </div>
      <div className="home__care__content">
        {featureData.map((feature) => (
          <BenefitsFeatureEntry
            key={JSON.stringify(feature)}
            feature={feature}
          />
        ))}
      </div>
    </div>
  );
}
