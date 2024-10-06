import React from "react";
import Link from "next/link";
import "@/styles/footer.scss";
export default function Footer() {
  return (
    <div id="contactUs" className="footer">
      <div className="footer__content">
        <div className="footer__content__top">
          <form className="footer__content__top__left">
            <div className="footer__content__top__left__heading">
              دعونا نتواصل
            </div>
            <FooterInput
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.438"
                  height="23.285"
                  viewBox="0 0 17.438 23.285"
                >
                  <g
                    id="Group_12041"
                    data-name="Group 12041"
                    transform="translate(10201.156 -16784.014)"
                  >
                    <path
                      id="Path_11231"
                      data-name="Path 11231"
                      d="M145.945,177.3a2.652,2.652,0,1,0-2.652-2.652A2.652,2.652,0,0,0,145.945,177.3Zm0-4.272a1.626,1.626,0,1,1-1.626,1.626A1.626,1.626,0,0,1,145.945,173.031Zm0,0"
                      transform="translate(-10338.383 16619.072)"
                    />
                    <path
                      id="Path_11232"
                      data-name="Path 11232"
                      d="M112.74,325.122a3.98,3.98,0,0,0-2.882,1.205,4.254,4.254,0,0,0-1.19,3.011.514.514,0,0,0,.513.513H116.3a.514.514,0,0,0,.513-.513,4.254,4.254,0,0,0-1.19-3.011A3.979,3.979,0,0,0,112.74,325.122Zm-3.011,3.7a3.136,3.136,0,0,1,.862-1.78,3.021,3.021,0,0,1,4.3,0,3.153,3.153,0,0,1,.862,1.78Zm0,0"
                      transform="translate(-10305.18 16472.23)"
                    />
                    <path
                      id="Path_11233"
                      data-name="Path 11233"
                      d="M10.292,0H-2.018A2.565,2.565,0,0,0-4.582,2.564V20.72a2.565,2.565,0,0,0,2.564,2.564H10.292a2.566,2.566,0,0,0,2.564-2.564V2.564A2.566,2.566,0,0,0,10.292,0ZM11.83,20.72a1.543,1.543,0,0,1-1.539,1.539H-2.018A1.543,1.543,0,0,1-3.556,20.72V2.564A1.543,1.543,0,0,1-2.018,1.026H10.292A1.543,1.543,0,0,1,11.83,2.564Zm0,0"
                      transform="translate(-10196.574 16784.014)"
                    />
                  </g>
                </svg>
              }
              type="text"
              placeholder="Name"
            />
            <FooterInput
              icon={
                <svg
                  id="mail"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.682"
                  height="16.455"
                  viewBox="0 0 24.682 16.455"
                >
                  <g id="Group_202" data-name="Group 202">
                    <path
                      id="Path_292"
                      data-name="Path 292"
                      d="M23.416,85.333H1.266A1.269,1.269,0,0,0,0,86.6v13.923a1.269,1.269,0,0,0,1.266,1.266h22.15a1.269,1.269,0,0,0,1.266-1.266V86.6A1.27,1.27,0,0,0,23.416,85.333Zm-.475.949-9.872,7.4a1.323,1.323,0,0,1-1.456,0l-9.872-7.4Zm-5.273,7.893,5.379,6.645c.005.007.012.012.018.018H1.617c.006-.006.012-.011.018-.018l5.379-6.645a.475.475,0,0,0-.738-.6l-5.327,6.58V86.876l10.094,7.571a2.266,2.266,0,0,0,2.595,0l10.094-7.571v13.283l-5.327-6.58a.475.475,0,0,0-.738.6Z"
                      transform="translate(0 -85.333)"
                    />
                  </g>
                </svg>
              }
              type="email"
              placeholder="Email Address"
            />
            <FooterInput
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.99"
                  height="24.051"
                  viewBox="0 0 23.99 24.051"
                >
                  <path
                    id="Icon_ionic-ios-call"
                    data-name="Icon ionic-ios-call"
                    d="M22.452,27.053h0A9.826,9.826,0,0,1,17.925,25.5a30.268,30.268,0,0,1-7.071-5.3l.627-.65-.638.639a30.141,30.141,0,0,1-5.3-7.072C3.584,9.636,3.865,8.041,4.329,7.04A4.886,4.886,0,0,1,6.235,4.993,9.143,9.143,0,0,1,7.722,4.2l.031-.012.095-.035A1.881,1.881,0,0,1,8.544,4a2.311,2.311,0,0,1,1.6.876,18.417,18.417,0,0,1,2.672,3.979,2.661,2.661,0,0,1-.127,3.232c-.072.1-.145.2-.216.293-.381.509-.431.618-.385.835a10.718,10.718,0,0,0,2.493,3.247,10.491,10.491,0,0,0,3.249,2.493.594.594,0,0,0,.126.016c.168,0,.372-.147.718-.407.09-.068.184-.138.282-.209a2.66,2.66,0,0,1,1.591-.608,3.831,3.831,0,0,1,1.646.482,18.7,18.7,0,0,1,3.975,2.67c.866.861,1.05,1.439.724,2.289-.012.031-.024.063-.036.1l-.012.031a9.136,9.136,0,0,1-.789,1.486A4.812,4.812,0,0,1,24,26.713,3.552,3.552,0,0,1,22.452,27.053ZM8.382,5.885A7.409,7.409,0,0,0,7.235,6.5a3.133,3.133,0,0,0-1.27,1.309c-.164.353-.605,1.306,1.149,4.427a28.456,28.456,0,0,0,5.005,6.678l.012.012a28.584,28.584,0,0,0,6.678,5.006,8.376,8.376,0,0,0,3.643,1.319h0a1.74,1.74,0,0,0,.79-.173,3.07,3.07,0,0,0,1.3-1.267,7.416,7.416,0,0,0,.613-1.148c.014-.04.029-.078.043-.114l0-.012a3.232,3.232,0,0,0-.317-.352,17,17,0,0,0-3.48-2.32,2.756,2.756,0,0,0-.867-.3c-.085,0-.209.032-.534.267-.087.063-.171.126-.252.187a2.925,2.925,0,0,1-1.8.771,2.373,2.373,0,0,1-.507-.056c-1.358-.287-3.516-2.354-4.144-2.98s-2.693-2.777-2.984-4.153a2.665,2.665,0,0,1,.706-2.29c.063-.084.128-.172.194-.264.342-.475.385-.535-.033-1.4A16.727,16.727,0,0,0,8.865,6.158a3.263,3.263,0,0,0-.358-.32l-.016.006Z"
                    transform="translate(-3.521 -3.502)"
                    stroke="#e5e5e5"
                    strokeWidth="1"
                  />
                </svg>
              }
              type="tel"
              placeholder="Phone Number"
            />
            <textarea
              cols="30"
              rows="10"
              className="footer__content__top__left__textarea"
              placeholder="Message"
            />
            <button className="footer__content__top__left__button">
              Submit
            </button>
          </form>
          <div className="footer__content__top__right">
            <FooterSocialEntry
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31.378"
                  height="31.438"
                  viewBox="0 0 31.378 31.438"
                >
                  <path
                    id="phone"
                    d="M32.486,24.787v4.582a3.055,3.055,0,0,1-3.329,3.055,30.225,30.225,0,0,1-13.18-4.689,29.782,29.782,0,0,1-9.164-9.164A30.225,30.225,0,0,1,2.124,5.329,3.055,3.055,0,0,1,5.164,2H9.745A3.055,3.055,0,0,1,12.8,4.627a19.61,19.61,0,0,0,1.069,4.292,3.055,3.055,0,0,1-.687,3.223l-1.94,1.94a24.436,24.436,0,0,0,9.164,9.164l1.94-1.94a3.055,3.055,0,0,1,3.223-.687,19.61,19.61,0,0,0,4.292,1.069,3.055,3.055,0,0,1,2.627,3.1Z"
                    transform="translate(-1.61 -1.5)"
                    fill="none"
                    stroke="#3cb149"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </svg>
              }
              label="0558617259"
            />
            <FooterSocialEntry
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.27"
                  height="27.301"
                  viewBox="0 0 34.27 27.301"
                >
                  <g id="mail" transform="translate(-1.304 -3.5)">
                    <path
                      id="Path_11226"
                      data-name="Path 11226"
                      d="M5.288,4h26.3a3.3,3.3,0,0,1,3.288,3.288V27.014A3.3,3.3,0,0,1,31.589,30.3H5.288A3.3,3.3,0,0,1,2,27.014V7.288A3.3,3.3,0,0,1,5.288,4Z"
                      fill="none"
                      stroke="#3cb149"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                    <path
                      id="Path_11227"
                      data-name="Path 11227"
                      d="M34.877,6,18.439,17.507,2,6"
                      transform="translate(0 1.288)"
                      fill="none"
                      stroke="#3cb149"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                  </g>
                </svg>
              }
              label="mehtashamjutt553@gmail.com"
            />
            {/* <FooterSocialEntry
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.402"
                  height="40.959"
                  viewBox="0 0 22.402 40.959"
                >
                  <path
                    id="Icon_awesome-facebook-f"
                    data-name="Icon awesome-facebook-f"
                    d="M21.609,22.477l1.11-7.232H15.78V10.553c0-1.978.969-3.907,4.077-3.907h3.155V.489A38.47,38.47,0,0,0,17.412,0C11.7,0,7.962,3.464,7.962,9.734v5.512H1.609v7.232H7.962V39.96H15.78V22.477Z"
                    transform="translate(-1.109 0.5)"
                    fill="none"
                    stroke="#3cb149"
                    strokeWidth="1"
                  />
                </svg>
              }
              label="Lorem Ipsum is simply dummy text "
            /> */}
          </div>
        </div>
        {/* <div className="footer__content__bottom">
         
        </div> */}
        <div className="footer__content__bottom__links">
          <a href="#" className="footer__content__bottom__links__link">
            أمان
          </a>
          <a href="#" className="footer__content__bottom__links__link">
            يساعد
          </a>
          <a href="/about" className="footer__content__bottom__links__link">
            عن
          </a>
        </div>
        <div className="footer__content__bottom__text">
          جميع الحقوق محفوظة 2024
        </div>
      </div>
    </div>
  );
}

function FooterInput(props) {
  return (
    <div className="footer__content__top__left__input">
      {props.icon}
      <input {...props} className="footer__content__top__left__input__field" />
    </div>
  );
}

function FooterSocialEntry({ icon, link, label }) {
  return (
    <div className="footer__content__top__right__entry">
      <div className="footer__content__top__right__entry__icon">{icon}</div>
      <a href={link} className="footer__content__top__right__entry__link">
        {label}
      </a>
    </div>
  );
}
