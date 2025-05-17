"use client";
import Image from "next/image";

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
      <section className="w-full bg-white py-20">
        <div className="container flex flex-col md:flex-row items-center gap-8">
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

            <a href={button.href} className="primary-btn">
              {button.text}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseMoreSection;
