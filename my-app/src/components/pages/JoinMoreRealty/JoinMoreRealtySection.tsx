"use client";

import {
  Competitive,
  Cutting,
  Expert,
  Supportive,
} from "@/components/SvgContainer/SvgContainer";
import Image from "next/image";
import React from "react";

import joinmoreimage from "../../../assests/contact-us/joinmorereallity.png";

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface JoinMoreData {
  heading: string;
  description: string;
  image: string | any;
  features: FeatureItem[];
}

const joinMoreData: JoinMoreData = {
  heading: "Join MORE Realty — Where Your Success Becomes Our Mission",
  description:
    "Unlock your potential with a brokerage that puts agents first. We provide the tools, training, and support you need to elevate your career and income.",
  image: joinmoreimage,
  features: [
    {
      icon: <Supportive />,
      title: "Competitive Commissions & Low Fees",
      description:
        "We believe you should keep more of what you earn. Our generous commission plans, low fees, and transparent structure help you maximize your income while minimizing costs.",
    },
    {
      icon: <Cutting />,
      title: "Cutting-Edge Technology & Tools",
      description:
        "Stay ahead of the competition with our suite of modern tools — from CRM and marketing automation to virtual tours and lead-generation platforms. We equip you to work smarter and grow faster.",
    },
    {
      icon: <Expert />,
      title: "Expert Coaching & Continuous Learning",
      description:
        "Whether you’re a new agent or a top producer, you’ll have access to mentorship, ongoing training, workshops, and masterminds designed to sharpen your skills and expand your business.",
    },
    {
      icon: <Competitive />,
      title: "Supportive Culture & Community",
      description:
        "At MORE Realty, you’re not just another agent — you’re family. You’ll join a collaborative team of like-minded professionals, sharing knowledge, referrals, and encouragement every step of the way.",
    },
  ],
};

const JoinMoreRealtySection = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="w-full">
          <Image
            src={joinMoreData.image}
            alt="Growth Illustration"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Right Text */}
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#212B36] mb-4">
            Join<span className="text-[#63BE60]"> MORE Realty</span> — Where
            Your Success Becomes Our Mission
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Unlock your potential with a brokerage that puts agents first. We
            provide the tools, training, and support you need to elevate your
            career and income.
          </p>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-[1440px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {joinMoreData.features.map((item, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="min-w-[40px] h-[40px]">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-[#212B36]">
                {item.title}
              </h3>
              <p className="text-[#637381] text-base mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JoinMoreRealtySection;
