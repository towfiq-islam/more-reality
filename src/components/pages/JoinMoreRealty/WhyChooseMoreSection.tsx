"use client";
import Image from "next/image";
import parse from "html-react-parser";

type WhyChooseMoreProps = {
  title: string;
  description: string;
  image: string | any;
  button_link: string;
  button_text: string;
};

const WhyChooseMoreSection = ({
  title,
  description,
  button_link,
  button_text,
  image,
}: WhyChooseMoreProps) => {
  return (
    <>
      <section className="lg:px-5 3xl:px-0  w-full bg-white py-10 2xl:py-20 3xl:py-[100px]">
        <div className="container flex flex-col xl:flex-row items-center gap-7 xl:gap-12">
          {/* Left Side Image */}
          <div className="w-full xl:w-1/2">
            <Image
              data-aos="fade-up"
              data-aos-delay="100"
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/${image}`}
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

            {/* Description */}
            {typeof description === "string" ? parse(description) : description}

            <div className="flex items-start">
              <a
                target="_blank"
                data-aos="fade-up"
                data-aos-delay="100"
                href={button_link}
                className="primary-btn text-sm lg:text-md "
              >
                {button_text}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseMoreSection;
