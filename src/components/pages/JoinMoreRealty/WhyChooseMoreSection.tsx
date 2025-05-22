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
      <section className="lg:px-5 3xl:px-0  w-full bg-white pb-[40px]">
        <div className="container flex flex-col xl:flex-row items-center gap-7 xl:gap-12">
          {/* Left Side Image */}
          <div className="w-full xl:w-1/2">
            <Image
              data-aos="fade-up"
              data-aos-delay="100"
              src={image}
              alt="Why Choose More"
              width={600}
              height={500}
              className="rounded-lg w-full h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-auto object-cover"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full xl:w-1/2 text-left flex flex-col gap-[15px] 2xl:gap-[20px]">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[20px] lg:text-2xl 3xl:text-4xl  text-[#161C24] font-lato  font-semibold leading-[36px] 2xl:leading-[56px] tracking-[-1.08px] capitalize"
            >
              {title}
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-sm lg:text-md font-semibold text-gray-800 "
            >
              {pricing}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs lg:text-sm font-semibold text-gray-700">
              {perks.map((perk, idx) => (
                <span
                  data-aos="fade-up"
                  data-aos-delay="100"
                  key={idx}
                  className="before:content-['•'] before:mr-2"
                >
                  {perk}
                </span>
              ))}
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-gray-700 text-base lg:text-lg "
            >
              {description}
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-gray-800 text-sm lg:text-md font-semibold "
            >
              {bonus}
            </p>
            <div className="flex items-start">
              <a
                data-aos="fade-up"
                data-aos-delay="100"
                href={button.href}
                className="primary-btn text-sm lg:text-md "
              >
                {button.text}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseMoreSection;
