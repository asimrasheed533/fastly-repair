"use client";
import "@/styles/blog.scss";

import SecondHeader from "@/components/SecondHeader";
import blogImg from "@/public/blog.webp";
import { BlogData } from "@/constants/BlogData";

export default function slug({ params }) {
  const blog = BlogData.find((blog) => blog.id == params.slug);
  if (!blog) {
    return <p>Blog not found</p>;
  }
  return (
    <>
      <SecondHeader image={blogImg} text="Blog Details" />
      {/* <div className="blog__detail__warper">{params.slug}</div> */}
      <BlogDetail
        key={blog.id}
        heading={blog.question}
        subheading={blog.answer}
      />
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
