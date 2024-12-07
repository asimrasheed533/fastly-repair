import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Phone from "@/components/Phone";
import "@/styles/global.scss";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Partytown } from "@builder.io/partytown/react";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "خدمة إصلاح الغسالات في المدينة المنورة - اتصل الآن",
  description:
    "احصل على خدمة صيانة سريعة للغسالات في المدينة المنورة. اتصل الآن للحصول على خدمة إصلاح الغسالة السريعة في نفس اليوم!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Partytown debug={true} forward={["dataLayer.push"]} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16712547038"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y6NPQQ3S59"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16712547038');
              gtag('config', 'G-Y6NPQQ3S59');
            `,
          }}
        />
      </head>
      <body className={plus_jakarta_sans.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8ZLCJRG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        {children}
        <Footer />
        <Phone />
      </body>
    </html>
  );
}
