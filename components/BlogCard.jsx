"use client";
import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogCard({ title, subtitle, image }) {
  const router = useRouter();
  return (
    <>
      <div className="blog__card">
        <div className="blog__card__img">
          <Image
            className="blog__card__img__image"
            src={image}
            alt="ac repair"
          />
        </div>
        <div className="blog__card__title">{title}</div>
        <div className="blog__card__subtitle">{subtitle}</div>

        <button
          onClick={() => router.push("/blog/slug")}
          className="read__button"
        >
          Read more
        </button>
      </div>
    </>
  );
}
