import SecondHeader from "@/components/SecondHeader";
import React from "react";
import blog from "@/public/blog.png";

import "@/styles/blog.scss";
import { blogCardData } from "@/constants/blogCardData";
import BlogCard from "@/components/BlogCard";

export default function page() {
  return (
    <>
      <SecondHeader image={blog} text="مدونة" />
      <div className="blog__text__contain">
        <div className="blog__text__heading">
          بوابة شاملة لمحتوى صيانة المنزل
        </div>
        <div className="blog__text__subheading">
          هل تريد أن تتعلم أخطاء الصيانة الشائعة قبل أن ترتكبها؟ أو هل تحتاج إلى
          بعض الإلهام لمشروعك القادم؟ تتعمق مدونة We Will Fix It في موضوعات
          صيانة المنزل من خلال المعرفة التي يشاركها خبراؤنا على أرض الواقع
          مباشرةً - مما يجعلها مكانك الأول لاكتشاف النصائح والحيل الحقيقية
          لمساعدتك على طريقك. وفي الوقت نفسه، يحول البودكاست المنتظم من كولين
          وجيمس موضوعات مثل صيانة مكيف الهواء ومعرفة كيفية استخدام المثقاب إلى
          ما يشبه الدردشة المرحة مع الأصدقاء. اقرأ أو استمع لتجعل بحثك الجاد عن
          صيانة المنزل أسهل!
        </div>
      </div>
      <div className="blog__container">
        {blogCardData.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            image={blog.image}
            title={blog.title}
            subtitle={blog.subtitle}
          />
        ))}
      </div>
    </>
  );
}
