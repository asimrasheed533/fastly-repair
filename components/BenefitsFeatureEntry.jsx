"use client";
import Image from "next/image";

import { motion } from "framer-motion";

export function BenefitsFeatureEntry({ feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -250 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="benefits__features__entry"
    >
      <Image src={feature.icon} className="benefits__features__entry__icon" />
      <div className="benefits__features__entry__heading">{feature.title}</div>
      <div className="benefits__features__entry__info">{feature.info}</div>
    </motion.div>
  );
}
