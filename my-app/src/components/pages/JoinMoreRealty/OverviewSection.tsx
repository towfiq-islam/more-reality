"use client";

import Heading from "@/components/Tags/Heading/Heading";
import Image from "next/image";
import React from "react";

type OverviewProps = {
  sectionTitle: string;
  sectionContent: string;
  sectionSubtitle: string;
  sectionImage: string | any;
};

const OverviewSection: React.FC<OverviewProps> = ({
  sectionTitle,
  sectionSubtitle,
  sectionContent,
  sectionImage,
}) => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <Heading
            Txt={sectionTitle}
            Variant="h2"
            className="text-[#161C24] text-center font-lato font-bold text-[32px] leading-[44px] sm:text-[40px] sm:leading-[56px] md:text-[48px] md:leading-[70px]"
          />
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            {sectionSubtitle}
          </p>

          <p className="mt-2 text-gray-600 text-base sm:text-lg">
            {sectionContent}
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <Image
            src={sectionImage}
            alt="Overview section image"
            width={1440}
            height={800}
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
