import white_building from "../../../assests/home/white-building.jpg";
import gray_building from "../../../assests/home/gray-building.jpg";
import vila from "../../../assests/home/vila.jpg";
import haunted from "../../../assests/home/haunted.jpg";
import Image from "next/image";
import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";

const imgArr = [white_building, gray_building, haunted, vila];
const highlights = [
  {
    title: "1. 100% Verified Listings",
    description:
      "We ensure every property listed on our site is verified and up-to-date — no surprises, no scams, just real homes you can trust.",
  },
  {
    title: "2. Expert Local Agents",
    description:
      "Our experienced agents know the ins and outs of your target neighborhood, ensuring you get personalized, professional guidance every step of the way.",
  },
  {
    title: "3. Fast & Transparent Process",
    description:
      "We value your time. Our smooth, step-by-step buying and renting process keeps everything simple, clear, and quick — no hidden fees or delays.",
  },
  {
    title: "4. Smart Tech + Human Touch",
    description:
      "From AI-powered chat support to mobile-optimized browsing, we blend cutting-edge tech with warm, real human support to give you the best experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="lg:px-5 3xl:px-0 pt-10 lg:pt-20 3xl:pt-[102px] pb-10 lg:pb-20 3xl:pb-[167px] h-auto w-full">
      <div className="container flex flex-col gap-y-10 2xl:flex-row gap-x-10">
        {/* Left */}
        <div className="self-start mx-auto flex flex-row flex-wrap gap-5 lg:gap-x-5 2xl:gap-x-7 3xl:gap-x-10 w-full lg:max-w-[600px] 3xl:max-w-[744px]">
          {imgArr.map((item, idx) => {
            return (
              <Image
                data-aos="fade-up"
                data-aos-delay="100"
                key={idx}
                src={item.src}
                width={342}
                height={320}
                alt="not found"
                className={`h-[220px] md:h-[240px] lg:h-[260px] 3xl:h-[320px] w-full md:w-[43%] lg:w-[280px] 3xl:w-[342px] object-cover rounded-[12px] border ${
                  idx === 0 && "lg:-mt-5 2xl:mt-[-35px] 3xl:mt-[-51px]"
                }  ${idx === 3 && "lg:mt-5 2xl:mt-[35px] 3xl:mt-[47px]"} `}
              />
            );
          })}
        </div>
        {/* Right */}
        <div className="flex flex-col gap-y-3 2xl:gap-y-4">
          <Heading Txt={"Why Choose Us"} Variant="h2" />
          <div className="flex flex-col gap-y-5 2xl:max-w-[685px] ">
            <Paragraph
              Txt={`We’re not just another real estate agency — we’re your trusted partner in finding the perfect place to call home. Here's why clients choose us again and again:`}
              className="!text-lg 3xl:text-xl"
            />
            {highlights?.map((item, idx) => {
              return (
                <div key={idx} className="flex flex-col gap-y-1 ">
                  <Paragraph
                    Txt={item.title}
                    className="!text-lg 3xl:text-xl font-[700] "
                  />
                  <Paragraph
                    Txt={item.description}
                    className="!text-base 2xl:!text-lg 3xl:!text-xl font-normal opacity-[80] "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
