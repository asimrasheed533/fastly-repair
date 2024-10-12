"use client";

import { BenefitsFeatureEntry } from "./BenefitsFeatureEntry";
import ser01 from "@/public/ser01.webp";
import ser02 from "@/public/ser02.webp";
import ser03 from "@/public/ser03.webp";
import ser04 from "@/public/ser04.webp";
import ser05 from "@/public/ser05.webp";
import ser06 from "@/public/ser06.webp";
import { motion } from "framer-motion";

const featureData = [
  {
    icon: ser03,
    title: "إصلاح مكيفات الهواء",
    info: "لقد قمنا بإصلاح آلاف مكيفات الهواء. يذهب فنينا الودودون والصادقون إلى أبعد الحدود لتقديم خدمة استثنائية لعملائنا في كل مرة.",
  },
  {
    icon: ser02,
    title: "إصلاح الثلاجات",
    info: "نحن نقدم أفضل خدمة لإصلاح الثلاجات بأسعار معقولة مع قطع غيار أصلية وخدمة توصيل إلى المنزل في المدينة المنورة، المملكة العربية السعودية.",
  },
  {
    icon: ser01,
    title: "إصلاح الغسالات",
    info: "نقدم خدمات إصلاح موثوقة لجميع أنواع وموديلات الغسالات في المدينة المنورة، المملكة العربية السعودية.",
  },
  {
    icon: ser04,
    title: "إصلاح المايكروويف",
    info: "جميع فنينا مدربون تدريبًا عاليًا ومؤهلون لإصلاح جميع أنواع المايكروويف، بما في ذلك المايكروويف الشواية والمايكروويف الحراري لأمثال ماركة إل جي في الدمام.",
  },
  {
    icon: ser05,
    title: "إصلاح المحمصة وآلات القهوة والمراوح",
    info: "إصلاح وصيانة المحامص، وآلات القهوة، وغسالات الأطباق، والمراوح، وجميع أنواع الأجهزة الإلكترونية في المدينة المنورة، المملكة العربية السعودية.",
  },
  {
    icon: ser06,
    title: "إصلاح الأجهزة الأخرى",
    info: "إصلاح مكيفات الهواء، الثلاجات، الغسالات، الأفران، المركزية، الانقسام، وتجديد التركيب الأصلي للنحاس الأمريكي والكوري في المدينة المنورة، المملكة العربية السعودية.",
  },
];

export function HomeCareSection() {
  return (
    <div className="home__care">
      <div className="home__care__header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          اكتشف فوائد اختيارنا
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="home__care__header__info"
        >
          إن الحصول على خدمات الصيانة المنزلية الطارئة في المدينة المنورة أمر
          ضروري
        </motion.h1>
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
