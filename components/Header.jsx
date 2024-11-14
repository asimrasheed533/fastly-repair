"use client";

import "@/styles/header.scss";

import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function checkNavOpen() {
    if (window.innerWidth <= 950) {
      setIsOpenMenu(false);
    } else {
      setIsOpenMenu(true);
    }
  }
  useEffect(() => {
    checkNavOpen();

    window.addEventListener("resize", checkNavOpen);
  }, []);

  return (
    <>
      <ClickAwayListener
        onClickAway={() => {
          if (window.innerWidth <= 950) {
            setIsOpenMenu(false);
          }
        }}
      >
        <div className="nav__bar__container">
          {isOpenMenu ? (
            <div className="nav__entry">
              <Link
                href="/"
                className={`nav__entry__item ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                بيت
              </Link>
              <Link
                href="/about"
                className={`nav__entry__item ${
                  pathname === "/about" ? "active" : ""
                }`}
              >
                معلومات عنا
              </Link>

              <Link
                href="/blog"
                className={`nav__entry__item ${
                  pathname === "/blog" ? "active" : ""
                }`}
              >
                مدونة
              </Link>
              {/* <a
                href="#contactUs"
                className={`nav__entry__item ${
                  pathname === "contactUs" ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contactUs")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </a> */}
              <div className="menu__close__warper">
                <div className="menu__close__title">Menu</div>
                <div
                  onClick={() => setIsOpenMenu(false)}
                  className="menu__close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
              </div>
            </div>
          ) : null}
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="header__container__menu__icon"
          >
            <svg
              width="24"
              height="22"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="7" y2="0.5" stroke="#C4C4C4" />
              <line y1="3.5" x2="11" y2="3.5" stroke="#C4C4C4" />
              <line y1="6.5" x2="14" y2="6.5" stroke="#C4C4C4" />
            </svg>
          </button>
          {/* <button onClick={() => router.push("/")} className="nav__log">
            <Image className="nav__log__image" src="#" alt="logo" />
          </button> */}

          <div className="nav__register">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>{" "}
            0571734988
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
}
