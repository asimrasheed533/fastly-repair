import SecondHeader from "@/components/SecondHeader";
import React from "react";
import blog from "@/public/blog.png";

import "@/styles/blog.scss";
import { blogCardData } from "@/constants/blogCardData";
import BlogCard from "@/components/BLogCard";

export default function page() {
  return (
    <>
      <SecondHeader image={blog} text="Blog" />
      <div className="blog__text__contain">
        <div className="blog__text__heading">
          YOUR ONE-STOP PORTAL FOR HOME MAINTENANCE CONTENT
        </div>
        <div className="blog__text__subheading">
          Want to learn common maintenance mistakes before you make them? Or
          need some inspiration for your upcoming DIY? The We Will Fix It blog
          delves into home maintenance topics with knowledge shared directly by
          our on-the-ground experts – making this your number one spot for
          discovering real tips and tricks to help you on your way. Meanwhile
          our regular podcast from Colin and James turns subjects like AC
          servicing and figuring out your drill into what feels like a
          light-hearted chat with friends. Read or listen on to make light work
          of your serious home maintenance research!
        </div>
      </div>
      <div className="blog__container">
        {blogCardData.map((blog) => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            subtitle={blog.subtitle}
          />
        ))}
      </div>
    </>
  );
}
