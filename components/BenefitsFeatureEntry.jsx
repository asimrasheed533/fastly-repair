import Image from "next/image";
import React from "react";

export function BenefitsFeatureEntry({ feature }) {
  return (
    <div className="benefits__features__entry">
      <Image src={feature.icon} className="benefits__features__entry__icon" />

      <div className="benefits__features__entry__heading">{feature.title}</div>

      <div className="benefits__features__entry__info">{feature.info}</div>
    </div>
  );
}
