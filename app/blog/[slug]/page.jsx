"use client";
import SecondHeader from "@/components/SecondHeader";
import React from "react";
import blogImg from "@/public/blog.png";
import "@/styles/blog.scss";
import { BlogData } from "@/constants/BlogData";

export default function slug({ params }) {
  const blog = BlogData.find((blog) => blog.id == params.slug);
  if (!blog) {
    return <p>Blog not found</p>;
  }
  console.log("prams, slug: " + BlogData + ", params: " + params.slug);
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
