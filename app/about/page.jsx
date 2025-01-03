"use client";

import "@/styles/about.scss";

import React, { useState } from "react";
import AboutCard from "@/components/AboutCard";
import Accordion from "@/components/Accordion";
import SecondHeader from "@/components/SecondHeader";
import ValueCard from "@/components/ValueCard";
import aboutAc from "@/public/aboutAc.webp";
import about01 from "@/public/about01.webp";
import about02 from "@/public/about02.webp";
import Image from "next/image";

export default function About() {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  return (
    <>
      <SecondHeader image={aboutAc} text="معلومات عنا" />
      <AboutCard
        image={about01}
        heading="حلول الخبراء لإصلاح الأجهزة"
        content1="نحن الخبراء الذين يمكنك اللجوء إليهم للحصول على خدمات إصلاح الأجهزة الموثوقة والفعّالة. سواء كان الأمر يتعلق بخلل في مكيف الهواء أو جهاز أوتوماتيكي أو ثلاجة لا تعمل بشكل جيد، فإن فنيينا المهرة موجودون لمساعدتك. نحن نفخر بتقديم خدمات إصلاح متخصصة لمكيفات الهواء والأجهزة الأوتوماتيكية والثلاجات."
        content2="التزامنا بإرضاء العملاء يعني أننا نضع احتياجاتك في المقام الأول ونضمن الشفافية طوال عملية الإصلاح. نستخدم أجزاء عالية الجودة وأحدث التقنيات لتوفير حلول دائمة بأسعار تنافسية."
      />
      <AboutCard
        image={about02}
        heading="خدمات إصلاح الأجهزة الموثوقة"
        content1=" نحن متخصصون في خدمات الإصلاح المتخصصة لمكيفات الهواء والآلات الأوتوماتيكية والثلاجات. يتمتع الفنيون المعتمدون لدينا بالمعرفة والمهارات اللازمة لتشخيص وإصلاح مجموعة واسعة من مشكلات الأجهزة بكفاءة. نحن ندرك أهمية هذه الأجهزة الأساسية في حياتك اليومية، ولهذا السبب نعطي الأولوية لأوقات الاستجابة السريعة والخدمة الموثوقة."
        content2="سواء كنت تواجه مشكلة تبريد في مكيف الهواء الخاص بك، أو خلل في ميزات الغسالة الأوتوماتيكية، أو ثلاجة لا تحافظ على درجة الحرارة المناسبة، فإن فريقنا هنا للمساعدة. نحن نفخر بالتزامنا بالجودة في العمل وإرضاء العملاء، ونضمن إجراء كل إصلاح بشكل صحيح في المرة الأولى."
        reverse
      />
      <div className="about__img__text__container">
        <div className="about__img__warper">
          <div className="about__img__warper_overlay">
            <Image
              className="about__img__warper_overlay__img"
              src={aboutAc}
              alt="خدمات إصلاح المكيفات، إصلاح الثلاجات، إصلاح الآلات الأوتوماتيكية، خبراء إصلاح الأجهزة، إصلاح الأجهزة الطارئ، إصلاح الأجهزة المنزلية، فنيو إصلاح محترفون"
            />
          </div>
        </div>
        <div className="about__text__warper">
          <div className="about__text__warper__heading">
            حلول الخبراء لإصلاح الأجهزة
          </div>
          <div className="about__text__warper__content">
            نحن نؤمن بالتسعير الصادق والصريح. قبل بدء أي عمل، نقدم تقديرًا
            مفصلاً بدون رسوم خفية. تساعدك هذه الشفافية على اتخاذ قرارات مستنيرة
            بشأن إصلاحات أجهزتك. سواء كان عطلًا بسيطًا أو عطلًا كبيرًا، فإننا
            نقدم خدمات إصلاح شاملة لجميع أنواع وحدات تكييف الهواء والآلات
            الأوتوماتيكية والثلاجات. من الصيانة الروتينية إلى الإصلاحات المعقدة،
            نتعامل مع كل ذلك بدقة وعناية.
          </div>
        </div>
      </div>
      <div className="value__text__warper">
        <div className="value__text__warper__left">
          <div className="value__container__heading"> قيمنا</div>
          <div className="value__card__warper">
            <ValueCard
              svg={
                <svg
                  width="25"
                  height="34"
                  viewBox="0 0 25 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.38003 0.00421938C4.55364 -0.0544607 5.49252 0.506519 6.3469 1.21303C8.21142 2.74376 9.426 4.92465 9.74565 7.31575C9.84423 7.96593 9.98037 8.25463 10.7057 8.29219C12.1468 8.36026 13.5786 8.58559 15.0198 8.68417C15.4488 8.68775 15.868 8.81207 16.2296 9.04287C16.5911 9.27368 16.8804 9.60165 17.0642 9.98922C19.4983 14.6156 21.9605 19.2255 24.3992 23.8494C25.0118 25.023 24.7419 25.9901 23.5777 26.6215C19.5311 28.8122 15.472 30.981 11.4004 33.1279C10.1963 33.7593 9.21988 33.3885 8.56735 32.1609C6.14269 27.6191 3.7462 23.0631 1.29103 18.5307C0.821586 17.6528 0.734735 16.9017 1.27224 16.0215C2.00457 14.8245 2.59607 13.5429 3.31901 12.3411C3.71334 11.6839 3.61945 11.3107 3.06786 10.7661C0.884962 8.60672 -0.37314 6.04122 0.0986472 2.87484C0.380311 1.03698 1.63137 -0.012211 3.38003 0.00421938ZM17.3013 22.1172C17.3046 21.61 17.1885 21.1091 16.9625 20.6549C16.7365 20.2008 16.4068 19.8062 16.0001 19.5031C15.5934 19.1999 15.1211 18.9966 14.6214 18.9096C14.1217 18.8227 13.6085 18.8545 13.1233 19.0025C12.5341 19.1903 11.9919 19.5212 11.4145 19.7489C10.8371 19.9766 10.2409 19.8968 9.83484 19.3686C9.65049 19.1633 9.53704 18.9042 9.51126 18.6294C9.48547 18.3547 9.54873 18.079 9.69167 17.843C10.1611 16.9933 11.5812 16.4088 12.4754 16.7938C13.25 17.1294 13.7828 16.5872 14.0692 16.1929C14.4494 15.6671 13.7453 15.3244 13.3533 15.0826C12.7876 14.7376 12.1281 14.4677 11.4591 14.6813C10.8512 14.8761 10.4921 14.7353 10.255 14.1696C9.99915 13.5617 9.6189 13.4819 9.04853 13.8175C8.53918 14.1179 8.05332 14.3785 8.50163 15.0545C8.87953 15.6272 8.6542 15.9934 8.24579 16.4628C7.77966 17.0218 7.51338 17.7204 7.48915 18.4478C7.46492 19.1753 7.6841 19.8901 8.112 20.4789C8.5443 21.0625 9.15575 21.4885 9.85296 21.692C10.5502 21.8954 11.2948 21.8651 11.9731 21.6055C12.4801 21.413 12.9519 21.1196 13.4636 20.9342C13.7175 20.8237 14.0005 20.7993 14.2696 20.8645C14.5387 20.9298 14.779 21.0812 14.9541 21.2957C15.2686 21.6642 15.4658 22.0609 15.2733 22.5796C14.9071 23.5631 13.3556 24.347 12.405 23.9269C11.607 23.5748 11.0249 24.0701 10.7244 24.5278C10.3864 25.0418 11.0812 25.3423 11.4849 25.6192C12.0576 26.0112 12.7219 26.2225 13.3627 26.0347C14.0035 25.8469 14.3837 26.0347 14.6208 26.6215C14.9682 27.4759 15.4775 26.9665 15.947 26.7788C16.4704 26.5675 16.7098 26.2647 16.3319 25.7131C15.954 25.1615 16.0408 24.7508 16.4986 24.2672C16.769 23.9805 16.9793 23.6426 17.1172 23.2733C17.255 22.9041 17.3176 22.511 17.3013 22.1172ZM2.22287 4.02732C2.36059 5.82678 3.11022 7.52485 4.34708 8.83908C4.73437 9.26628 4.99491 9.2874 5.32352 8.77571C5.46737 8.51711 5.68147 8.30449 5.94107 8.16244C6.20067 8.02038 6.49516 7.9547 6.79052 7.97297C7.43835 8.01756 7.5205 7.66314 7.39375 7.17258C6.94074 5.42626 6.09575 3.9217 4.62171 2.82555C4.10767 2.44531 3.53964 2.08618 2.9012 2.39132C2.26276 2.69646 2.22991 3.38184 2.22287 4.02732Z"
                    fill="currentColor"
                  />
                </svg>
              }
              heading="الشفافية، الثقة، والنزاهة"
              content="نؤمن ببناء الثقة من خلال التسعير الشفاف، والتواصل الواضح، والالتزام بالنزاهة في كل جانب من جوانب عملنا، حتى تكون مطمئنًا بأنك في أيدٍ أمينة."
            />
            <ValueCard
              svg={
                <svg
                  width="33"
                  height="24"
                  viewBox="0 0 33 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.39583 23.6667C6.16319 23.6667 5.11545 23.2352 4.2526 22.3724C3.38976 21.5095 2.95833 20.4618 2.95833 19.2292H0V2.95833C0 2.14479 0.289917 1.4486 0.86975 0.86975C1.44958 0.290902 2.14578 0.000986111 2.95833 0H23.6667V5.91667H28.1042L32.5417 11.8333V19.2292H29.5833C29.5833 20.4618 29.1519 21.5095 28.2891 22.3724C27.4262 23.2352 26.3785 23.6667 25.1458 23.6667C23.9132 23.6667 22.8655 23.2352 22.0026 22.3724C21.1398 21.5095 20.7083 20.4618 20.7083 19.2292H11.8333C11.8333 20.4618 11.4019 21.5095 10.5391 22.3724C9.67622 23.2352 8.62847 23.6667 7.39583 23.6667ZM7.39583 20.7083C7.81493 20.7083 8.16648 20.5663 8.45048 20.2823C8.73448 19.9983 8.87599 19.6473 8.875 19.2292C8.875 18.8101 8.733 18.459 8.449 18.176C8.165 17.893 7.81394 17.751 7.39583 17.75C6.97674 17.75 6.62568 17.892 6.34267 18.176C6.05965 18.46 5.91765 18.8111 5.91667 19.2292C5.91667 19.6483 6.05867 19.9998 6.34267 20.2838C6.62667 20.5678 6.97772 20.7093 7.39583 20.7083ZM25.1458 20.7083C25.5649 20.7083 25.9165 20.5663 26.2005 20.2823C26.4845 19.9983 26.626 19.6473 26.625 19.2292C26.625 18.8101 26.483 18.459 26.199 18.176C25.915 17.893 25.5639 17.751 25.1458 17.75C24.7267 17.75 24.3757 17.892 24.0927 18.176C23.8097 18.46 23.6677 18.8111 23.6667 19.2292C23.6667 19.6483 23.8087 19.9998 24.0927 20.2838C24.3767 20.5678 24.7277 20.7093 25.1458 20.7083ZM23.6667 13.3125H29.9531L26.625 8.875H23.6667V13.3125Z"
                    fill="currentColor"
                  />
                </svg>
              }
              heading="إصلاحات سريعة وفعالة"
              content="نحن ندرك مدى أهمية الأعطال الطارئة للأجهزة. فريقنا ملتزم بتقديم إصلاحات سريعة وفعالة لتقليل وقت التوقف وإعادة أجهزتك إلى العمل."
            />
            <ValueCard
              color
              svg={
                <svg
                  width="23"
                  height="30"
                  viewBox="0 0 23 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.474 29.1593H1.31267C0.564663 29.1593 0.168287 28.8956 0.092151 28.1758C-0.257131 24.8439 0.327622 21.7812 2.86521 19.363C4.62339 17.6888 6.73792 16.8364 9.17504 16.8238C10.7189 16.816 12.2621 16.8238 13.806 16.8238C18.4628 16.8136 22.2272 20.2978 22.8543 24.5574C23.0173 25.7099 23.0436 26.8775 22.9328 28.0361C22.8543 28.8799 22.4791 29.1617 21.6409 29.1617L11.474 29.1593Z"
                    fill="white"
                  />
                  <path
                    d="M18.1234 8.63483C18.1384 12.2281 15.1408 15.239 11.5467 15.2406C9.78895 15.2481 8.09991 14.5582 6.84998 13.3223C5.60004 12.0863 4.89125 10.4052 4.879 8.64739C4.85938 5.02506 7.83651 2.01967 11.4596 2.00397C12.3331 2.00005 13.1987 2.16864 14.0068 2.50007C14.8149 2.83151 15.5496 3.31926 16.1687 3.93534C16.7879 4.55142 17.2793 5.2837 17.6147 6.09017C17.9502 6.89663 18.123 7.76139 18.1234 8.63483Z"
                    fill="white"
                  />
                  <path
                    d="M1.79412 8.69369C1.79412 8.1835 1.82473 7.67331 1.78627 7.1647C1.73525 6.48183 2.0759 6.07917 2.67478 5.91905C3.14023 5.79426 3.27523 5.52033 3.39846 5.09412C3.92984 3.25274 5.16606 1.99062 6.83005 1.11388C8.73109 0.112348 10.7546 -0.171001 12.8738 0.0935109C14.8502 0.340755 16.5974 1.08013 18.0416 2.47333C18.8867 3.26693 19.4595 4.30725 19.6781 5.44576C19.7197 5.66318 19.8006 5.77071 20.0046 5.80603C20.2486 5.85482 20.4819 5.94651 20.6938 6.07682C20.9928 6.2495 21.1765 6.49439 21.2008 6.86172C21.2747 8.09029 21.2747 9.3222 21.2008 10.5508C21.1741 11.0492 20.8123 11.4212 20.1601 11.557C19.8924 11.6127 19.7676 11.7046 19.7786 11.9848C19.7766 12.1549 19.7502 12.3238 19.7001 12.4863C19.5651 12.9997 19.6554 13.3921 20.0651 13.8034C20.6789 14.4195 20.237 15.4297 19.2982 15.6997C19.0121 15.7751 18.7104 15.7665 18.4291 15.6749C18.1478 15.5833 17.8988 15.4126 17.7119 15.1833C17.219 14.5553 17.4325 13.7492 18.2386 13.3835C18.5902 13.2265 18.7441 12.991 18.7582 12.6457C18.85 10.4103 18.9152 8.17172 18.8022 5.93868C18.7347 4.59022 17.978 3.56513 16.9914 2.7143C15.7199 1.61779 14.2285 1.06836 12.5748 0.877629C10.8425 0.677479 9.16749 0.919229 7.60789 1.66253C5.87561 2.48118 4.57425 3.74095 4.21084 5.73146C4.14098 6.11293 4.1606 6.51637 4.15903 6.90489C4.15118 8.25178 4.13627 9.59946 4.15903 10.9464C4.1661 11.3184 4.00676 11.484 3.69751 11.5476C3.18026 11.6543 2.67714 11.5978 2.23524 11.2854C1.96523 11.0963 1.79648 10.8451 1.79883 10.5005C1.79883 9.8993 1.79883 9.29806 1.79883 8.69526L1.79412 8.69369Z"
                    fill="white"
                  />
                </svg>
              }
              heading="رضا العملاء"
              content="رضاكم هو أولويتنا. نحن نركز على تقديم خدمة ممتازة وبناء علاقات طويلة الأمد مع عملائنا."
            />
            <ValueCard
              svg={
                <svg
                  width="18"
                  height="23"
                  viewBox="0 0 18 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.55675 0.0910006C8.69681 0.0309596 8.84761 0 9 0C9.15239 0 9.30319 0.0309596 9.44325 0.0910006L16.6365 3.17463C17.0413 3.34816 17.3863 3.6367 17.6287 4.00447C17.8711 4.37223 18.0002 4.80305 18 5.2435V12.961C17.9999 14.3492 17.6328 15.7126 16.936 16.9132C16.2392 18.1138 15.2374 19.1089 14.0321 19.7976L9.558 22.3536C9.38805 22.4507 9.19572 22.5018 9 22.5018C8.80428 22.5018 8.61195 22.4507 8.442 22.3536L3.96788 19.7976C2.76229 19.1087 1.76028 18.1133 1.06345 16.9122C0.366622 15.7112 -0.000260433 14.3473 1.38703e-07 12.9588V5.2435C4.8762e-05 4.80324 0.129258 4.37267 0.371622 4.00512C0.613985 3.63758 0.958852 3.34921 1.3635 3.17575L8.55675 0.0910006ZM13.1704 9.79638C13.3753 9.5842 13.4887 9.30002 13.4861 9.00505C13.4836 8.71008 13.3653 8.42791 13.1567 8.21933C12.9481 8.01075 12.6659 7.89243 12.371 7.88987C12.076 7.8873 11.7918 8.0007 11.5796 8.20563L7.875 11.9103L6.42037 10.4556C6.2082 10.2507 5.92402 10.1373 5.62905 10.1399C5.33408 10.1424 5.05191 10.2607 4.84333 10.4693C4.63475 10.6779 4.51643 10.9601 4.51387 11.255C4.5113 11.55 4.6247 11.8342 4.82963 12.0464L7.07963 14.2964C7.29059 14.5073 7.57669 14.6258 7.875 14.6258C8.17331 14.6258 8.45941 14.5073 8.67037 14.2964L13.1704 9.79638Z"
                    fill="currentColor"
                  />
                </svg>
              }
              heading="الالتزام بالجودة"
              content="نقدم خدمات إصلاح من الدرجة الأولى باستخدام قطع غيار عالية الجودة وحرفية خبيرة لضمان حلول تدوم طويلاً."
            />
          </div>
        </div>
        <div className="value__text__warper__right">
          <div className="value__container__heading__why">لماذا نحن؟</div>
          <div className="value__corden__container">
            <Accordion
              id={1}
              isOpen={isOpen}
              setIsOpen={() => toggleAccordion(1)}
              content="يتكون فريقنا من محترفين مدربين تدريباً عالياً ولديهم سنوات من الخبرة في المجال."
              heading="فنيون ذوو خبرة"
            />
            <Accordion
              id={2}
              isOpen={isOpen}
              setIsOpen={() => toggleAccordion(2)}
              content="نقدم أسعارًا تنافسية دون المساس بالجودة."
              heading="أسعار معقولة"
            />
            <Accordion
              id={3}
              isOpen={isOpen}
              setIsOpen={() => toggleAccordion(3)}
              content="نحن متاحون على مدار الساعة لمساعدتك في حالات الطوارئ المتعلقة بالإصلاح."
              heading="توفر 24/7"
            />
          </div>
        </div>
      </div>
      {/* <div className="map__container">
        <div className="map__container__content">
          <div className="map__container__heading"> Location & Contact</div>
          <div className="map__adress__entry__warper">
            <div className="map__adress__entry">
              <div className="map__adress__entry__svg">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="19" cy="19" r="19" fill="#3cb149" />
                  <path
                    d="M18.6 18.6C18.0696 18.6 17.5609 18.3893 17.1858 18.0142C16.8107 17.6391 16.6 17.1304 16.6 16.6C16.6 16.0696 16.8107 15.5609 17.1858 15.1858C17.5609 14.8107 18.0696 14.6 18.6 14.6C19.1304 14.6 19.6391 14.8107 20.0142 15.1858C20.3893 15.5609 20.6 16.0696 20.6 16.6C20.6 16.8626 20.5483 17.1227 20.4478 17.3654C20.3472 17.608 20.1999 17.8285 20.0142 18.0142C19.8285 18.1999 19.608 18.3472 19.3654 18.4478C19.1227 18.5483 18.8626 18.6 18.6 18.6ZM18.6 11C17.1148 11 15.6904 11.59 14.6402 12.6402C13.59 13.6904 13 15.1148 13 16.6C13 20.8 18.6 27 18.6 27C18.6 27 24.2 20.8 24.2 16.6C24.2 15.1148 23.61 13.6904 22.5598 12.6402C21.5096 11.59 20.0852 11 18.6 11Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="map__adress__entry__content">
                <div className="map__adress__entry__content__heading">
                  Address
                </div>
                <div className="map__adress__entry__content__sub__heading">
                  Genuine Parts Giant, Inc. <br /> 2500 Troy Ave, South El
                  Monte, CA 91733.
                </div>
              </div>
            </div>
            <div className="map__adress__entry">
              <div className="map__adress__entry__svg">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="19" cy="19" r="19" fill="#3cb149" />
                  <path
                    d="M12.5 25C12.0875 25 11.7345 24.8533 11.441 24.5597C11.1475 24.2662 11.0005 23.913 11 23.5V14.5C11 14.0875 11.147 13.7345 11.441 13.441C11.735 13.1475 12.088 13.0005 12.5 13H24.5C24.9125 13 25.2657 13.147 25.5597 13.441C25.8538 13.735 26.0005 14.088 26 14.5V23.5C26 23.9125 25.8533 24.2657 25.5597 24.5597C25.2662 24.8538 24.913 25.0005 24.5 25H12.5ZM18.5 19.75L24.5 16V14.5L18.5 18.25L12.5 14.5V16L18.5 19.75Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
              <div className="map__adress__entry__content">
                <div className="map__adress__entry__content__heading">
                  Email
                </div>
                <div className="map__adress__entry__content__sub__heading">
                  Genuine Parts Giant, Inc.
                </div>
              </div>
            </div>
            <div className="map__adress__entry">
              <div className="map__adress__entry__svg">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="19" cy="19" r="19" fill="#3cb149" />
                  <path
                    d="M12 18.9984C12.0004 17.4637 12.505 15.9717 13.4364 14.7519C14.3677 13.5321 15.6741 12.6523 17.1545 12.2477C18.6349 11.8431 20.2072 11.9362 21.6295 12.5127C23.0518 13.0892 24.2452 14.1171 25.0261 15.4382C25.807 16.7594 26.132 18.3006 25.9513 19.8246C25.7705 21.3486 25.0939 22.7709 24.0256 23.8727C22.9573 24.9745 21.5565 25.6947 20.0388 25.9225C18.5211 26.1502 16.9706 25.8729 15.626 25.1332L12.9044 25.962C12.783 25.999 12.6539 26.0022 12.5307 25.9715C12.4076 25.9407 12.2952 25.8771 12.2055 25.7873C12.1157 25.6976 12.0521 25.5852 12.0213 25.4621C11.9905 25.3389 11.9938 25.2098 12.0308 25.0884L12.8596 22.3626C12.2939 21.3316 11.9982 20.1743 12 18.9984ZM16.2 18.2984C16.2 18.484 16.2738 18.6621 16.405 18.7934C16.5363 18.9246 16.7144 18.9984 16.9 18.9984H21.1C21.2856 18.9984 21.4637 18.9246 21.595 18.7934C21.7262 18.6621 21.8 18.484 21.8 18.2984C21.8 18.1127 21.7262 17.9347 21.595 17.8034C21.4637 17.6721 21.2856 17.5984 21.1 17.5984H16.9C16.7144 17.5984 16.5363 17.6721 16.405 17.8034C16.2738 17.9347 16.2 18.1127 16.2 18.2984ZM16.9 20.3984C16.7144 20.3984 16.5363 20.4721 16.405 20.6034C16.2738 20.7347 16.2 20.9127 16.2 21.0984C16.2 21.284 16.2738 21.4621 16.405 21.5934C16.5363 21.7246 16.7144 21.7984 16.9 21.7984H19.7C19.8857 21.7984 20.0637 21.7246 20.195 21.5934C20.3262 21.4621 20.4 21.284 20.4 21.0984C20.4 20.9127 20.3262 20.7347 20.195 20.6034C20.0637 20.4721 19.8857 20.3984 19.7 20.3984H16.9Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
              <div className="map__adress__entry__content">
                <div className="map__adress__entry__content__heading">
                  Live Chat
                </div>
                <div className="map__adress__entry__content__sub__heading">
                  Live Chat With Agent
                </div>
              </div>
            </div>
            <div className="map__adress__entry">
              <div className="map__adress__entry__svg">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="19" cy="19" r="19" fill="#3cb149" />
                  <path
                    d="M23.2186 26.0033C22.6084 26.0033 21.7513 25.7827 20.4679 25.0656C18.9072 24.1904 17.7 23.3823 16.1477 21.8341C14.6511 20.3384 13.9227 19.3701 12.9034 17.5152C11.7519 15.4209 11.9482 14.3231 12.1676 13.8539C12.4289 13.2932 12.8146 12.9578 13.3132 12.6249C13.5964 12.4393 13.8961 12.2803 14.2084 12.1497C14.2397 12.1363 14.2688 12.1235 14.2947 12.1119C14.4494 12.0422 14.6839 11.9369 14.9808 12.0494C15.179 12.1238 15.3559 12.276 15.6329 12.5495C16.2008 13.1097 16.977 14.3572 17.2633 14.9699C17.4555 15.3828 17.5828 15.6553 17.5831 15.961C17.5831 16.319 17.403 16.595 17.1845 16.8929C17.1436 16.9488 17.1029 17.0023 17.0636 17.0541C16.8257 17.3667 16.7735 17.4571 16.8079 17.6184C16.8776 17.9425 17.3974 18.9074 18.2517 19.7598C19.106 20.6123 20.0431 21.0993 20.3685 21.1686C20.5366 21.2046 20.6289 21.1502 20.9514 20.9039C20.9977 20.8686 21.0452 20.832 21.0949 20.7954C21.4281 20.5476 21.6913 20.3722 22.0408 20.3722H22.0427C22.3468 20.3722 22.6072 20.5041 23.0385 20.7217C23.6012 21.0055 24.8862 21.7716 25.4498 22.3402C25.7239 22.6165 25.8768 22.7928 25.9515 22.9907C26.064 23.2886 25.9581 23.5221 25.889 23.6784C25.8774 23.7043 25.8646 23.7328 25.8511 23.7643C25.7196 24.0761 25.5596 24.3752 25.3732 24.6577C25.0409 25.1547 24.7043 25.5395 24.1423 25.8011C23.8537 25.9376 23.5378 26.0068 23.2186 26.0033Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="map__adress__entry__content">
                <div className="map__adress__entry__content__heading">
                  Contact
                </div>
                <div className="map__adress__entry__content__sub__heading">
                  +1-888-984-2011
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map__container__img">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27341.268410662142!2d72.93446296151463!3d31.063603713248195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922f1aee1a4035f%3A0x1e765ba5546791d9!2sSamundri%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1707115975381!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div> */}
    </>
  );
}
