"use client";
import React from "react";
import Heading from "../Tags/Heading/Heading";
import Image from "next/image";
import Paragraph from "../Tags/Paragraph/Paragraph";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  BgImgUrl: string | any;
  title: string;
  details: string;
  name: string;
  ProfileImgUrl: string | any;
  date: string;
  Variant?: "small" | "full";
  slug: string;
  isBlogPage: boolean;
  isFirst?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  BgImgUrl,
  title,
  details,
  name,
  date,
  ProfileImgUrl,
  slug,
  isBlogPage,
  isFirst,
}) => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push(`/about/news-and-blogs/${slug}`);
  };
  const baseUrl = encodeURI(`${process.env.NEXT_PUBLIC_SITE_URL}/${BgImgUrl}`);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      onClick={handleRedirect}
      className={`relative overflow-hidden rounded-[16px] ${
        isBlogPage && isFirst
          ? "h-[400px] 3xl:h-[427px] w-full"
          : "h-[380px] md:h-[450px] 3xl:h-[551px] w-full lg:w-[330px] xl:w-[420px] 2xl:w-[380px] 3xl:w-[455px]"
      }`}
    >
      {/* Scalable background layer */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105 will-change-transform z-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(24, 59, 86, 0.00) 0%, rgba(0, 0, 0, 0.80) 100%), url(${baseUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 h-full w-full flex flex-col justify-end p-4 3xl:p-5 gap-y-5">
        <div className="flex flex-col gap-y-[10px]">
          <Heading Variant="h4" Txt={title} className="blog-card-title" />
          <Heading Variant="h6" Txt={details} className="blog-card-details" />
        </div>
        <div className="flex flex-row gap-x-3 md:gap-x-5">
          <Image
            data-aos="fade-up"
            data-aos-delay="100"
            src={`${process.env.NEXT_PUBLIC_SITE_URL}/${ProfileImgUrl}`}
            width={54}
            height={54}
            alt="Profile"
            className="!w-12 md:!w-[54px] !h-12 md:!h-[54px] object-cover rounded-full flex-shrink-0"
          />
          <div className="flex flex-col md:gap-y-1 max-w-[347px]">
            <Paragraph Txt={name} className="blog-card-name" />
            <Paragraph Txt={date} className="blog-card-date" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
