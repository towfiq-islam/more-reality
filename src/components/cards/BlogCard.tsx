import React from "react";
import Heading from "../Tags/Heading/Heading";
import Image from "next/image";
import Paragraph from "../Tags/Paragraph/Paragraph";

interface BlogCardProps {
  BgImgUrl: string | any;
  title: string;
  details: string;
  name: string;
  ProfileImgUrl: string | any;
  date: string;
  Variant: "small" | "full";
}

const BlogCard: React.FC<BlogCardProps> = ({
  Variant,
  BgImgUrl,
  title,
  details,
  name,
  date,
  ProfileImgUrl,
}) => {
  
  return (
    <div
      className={`relative overflow-hidden rounded-[16px] group ${
        Variant === "small" ? "h-[551px] w-[455px]" : "h-[427px] w-full"
      }`}
    >
      {/* Scalable background layer */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105 will-change-transform z-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(24, 59, 86, 0.00) 0%, rgba(0, 0, 0, 0.80) 100%), url(${
            BgImgUrl?.src || BgImgUrl
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 h-full w-full flex flex-col justify-end p-5 gap-y-5">
        <div className="flex flex-col gap-y-[10px]">
          <Heading Variant="h4" Txt={title} className="blog-card-title" />
          <Heading Variant="h6" Txt={details} className="blog-card-details" />
        </div>
        <div className="flex flex-row gap-x-5">
          <Image
            src={ProfileImgUrl?.src || ProfileImgUrl}
            width={54}
            height={54}
            alt="Profile"
            className="w-[54px] h-[54px] object-cover rounded-full"
          />
          <div className="flex flex-col gap-y-1 max-w-[347px]">
            <Paragraph Txt={name} className="blog-card-name" />
            <Paragraph Txt={date} className="blog-card-date" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
