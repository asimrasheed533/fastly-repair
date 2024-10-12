"use client";

import React, { useState } from "react";
import { HomeFaqSectionEntry } from "./HomeFaqSectionEntry";
import { faqData } from "@/constants/faqData";

export function HomeFaqSection() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="home__faq">
      <div className="home__faq__col"></div>
      <div className="home__faq__col">
        {faqData.map((faq, i) => (
          <HomeFaqSectionEntry
            key={JSON.stringify(faq)}
            index={i}
            heading={faq.heading}
            info={faq.info}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      <div className="home__faq__col">
        <div className="home__faq__col__heading">التعليمات</div>
        <div className="home__faq__col__info">كل ما تريد معرفته</div>
      </div>
    </div>
  );
}
