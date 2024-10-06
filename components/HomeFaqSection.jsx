"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HomeFaqSectionEntry } from "./HomeFaqSectionEntry";
import { faqData } from "@/constants/faqData";

export function HomeFaqSection() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="home__faq">
      <div className="home__faq__col"></div>
      <div className="home__faq__col">
        {faqData.map((faq, i) => (
          <motion.li
            initial={{ opacity: 0, y: -250 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.8 }}
            key={JSON.stringify(faq)}
            index={i}
          >
            <HomeFaqSectionEntry
              heading={faq.heading}
              info={faq.info}
              selected={selected}
              setSelected={setSelected}
            />
          </motion.li>
        ))}
      </div>
      <div className="home__faq__col">
        <div className="home__faq__col__heading">التعليمات</div>
        <div className="home__faq__col__info">كل ما تريد معرفته</div>
      </div>
    </div>
  );
}
