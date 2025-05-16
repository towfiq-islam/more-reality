"use client";

import Image from "next/image";
import React from "react";

const whyJoinData = [
  {
    title: "GENEROUS COMMISSION PLANS",
    description:
      "We offer competitive and flexible commission structures designed to help you keep more of your hard-earned income.",
  },
  {
    title: "CUTTING-EDGE TECHNOLOGY",
    description:
      "From CRM systems and marketing platforms to lead generation tools and virtual tour software, we equip you with everything you need to work smarter, not harder.",
  },
  {
    title: "TOP-NOTCH TRAINING & MENTORSHIP",
    description:
      "We provide new agent onboarding, ongoing workshops, coaching programs, and access to industry experts — so you can sharpen your skills and grow your business.",
  },
  {
    title: "UNMATCHED MARKETING SUPPORT",
    description:
      "Get professional branding, customizable marketing templates, social media assets, listing promotion tools, and access to expert marketing advisors.",
  },
  {
    title: "COLLABORATIVE & POSITIVE CULTURE",
    description:
      "We’re not just a brokerage — we’re a family. Join a supportive network of agents who share ideas, referrals, and encouragement every step of the way.",
  },
  {
    title: "FLEXIBLE WORK STYLE",
    description:
      "Whether you prefer working from home, in the field, or from one of our offices, we give you the freedom to run your business your way.",
  },
];

type Button = {
  text: string;
  href: string;
};

type WhyChooseMoreProps = {
  title: string;
  pricing: string;
  perks: string[];
  description: string;
  bonus: string;
  button: Button;
  image: string | any;
};

const WhyChooseMoreSection = ({
  title,
  pricing,
  perks,
  description,
  bonus,
  button,
  image,
}: WhyChooseMoreProps) => {
  return (
    <>
      <section className="w-full bg-white py-10 px-4 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={image}
              alt="Why Choose More"
              width={600}
              height={500}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl md:text-4xl mb-2 text-[#161C24] font-lato text-[36px] font-semibold leading-[56px] tracking-[-1.08px] capitalize">
              {title}
            </h2>

            <p className="text-md font-semibold text-gray-800 mb-2">
              {pricing}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-sm font-semibold text-gray-700">
              {perks.map((perk, idx) => (
                <span key={idx} className="before:content-['•'] before:mr-2">
                  {perk}
                </span>
              ))}
            </div>

            <p className="text-gray-700 mb-4">{description}</p>

            <p className="text-gray-800 font-semibold mb-6">{bonus}</p>

            <a
              href={button.href}
              className="inline-block bg-[#004D79] text-white font-medium px-5 py-2 rounded hover:bg-[#003f66] transition"
            >
              {button.text}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F9FE] py-12 px-4 sm:px-6 md:px-10">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#161C24] font-lato font-bold leading-tight text-center mb-10 sm:mb-12">
            Why Join MORE Realty
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {whyJoinData.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-[26px] font-semibold uppercase text-[#161C24]">
                  {item.title}
                </h3>
                <p className="text-[#494949] font-lato text-base font-normal sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseMoreSection;
