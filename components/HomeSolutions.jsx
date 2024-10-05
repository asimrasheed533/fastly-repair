"use client";
import React from "react";
import Link from "next/link";

import { homeSolutionsData } from "./homeSolutionsData";
import AOS from "aos";

export function HomeSolutions() {
  return (
    <div className="home__solutions">
      <div className="home__solutions__heading">How Our Services Work?</div>
      <div className="home__solutions__content">
        {homeSolutionsData.map((solution) => {
          console.log("solution", solution.id);
          return (
            <a
              key={solution.id}
              href="#"
              className="home__solutions__content__entry"
            >
              <div className="home__solutions__content__entry__icon">
                {solution.icon}
              </div>
              <div className="home__solutions__content__entry__text">
                {solution.label}
              </div>
              <div className="home__solutions__content__entry__info">
                {solution.info}
              </div>
            </a>
          );
        })}
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
  );
}
