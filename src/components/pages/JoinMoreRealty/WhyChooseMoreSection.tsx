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
      <section className="lg:px-5 3xl:px-0  w-full bg-white py-10 2xl:py-20">
        <div className="container flex flex-col gap-7">
          {/* Left Side Image */}
          <div className="w-full">
            <Image
              data-aos="fade-up"
              data-aos-delay="100"
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/${image}`}
              alt="Why Choose More"
              width={600}
              height={548}
              className="rounded-lg w-full h-[300px] lg:h-[500px] 2xl:h-[548px] object-cover"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full text-center">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[20px] lg:text-2xl 3xl:text-4xl  text-[#161C24] font-lato  font-semibold leading-[36px] 2xl:leading-[56px] tracking-[-1.08px] capitalize mb-2"
            >
              {title}
            </h2>

            {/* Description */}
            <div className="[&>p]:!text-lg">
              {typeof description === "string"
                ? parse(description)
                : description}
            </div>

            {/* Btn */}
            <div className="flex items-center justify-center mt-5 lg:mt-10">
              <a
                data-aos="fade-up"
                data-aos-delay="100"
                // href={button_link}
                href={"/join-more-realty/apply"}
                className="px-7 lg:px-12 py-3 lg:py-4 bg-primary-blue text-white rounded-[8px] hover:bg-transparent hover:text-primary-blue border-[1px] border-transparent hover:border-primary-blue hover:border-solid ease-in-out duration-500 cursor-pointer text-[17px]"
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
