import SecondHeader from "@/components/SecondHeader";
import React from "react";
import blog from "@/public/blog.png";

import "@/styles/blog.scss";
import { BlogData } from "@/constants/BlogData";

export default function slug() {
  return (
    <>
      <SecondHeader image={blog} text="Blog Details" />
      <div className="blog__detail__warper">
        {BlogData.map((blog) => (
          <BlogDetail
            key={blog.id}
            heading={blog.question}
            subheading={blog.answer}
          />
        ))}
      </div>
    </>
  );
}

function BlogDetail({ heading, subheading }) {
  return (
    <div className="blog__detail__text__container">
      <div className="blog__detail__text__container__heading">{heading}:Q</div>
      <div className="blog__detail__text__container__subheading">
        {subheading}
      </div>
    </div>
  );
}
