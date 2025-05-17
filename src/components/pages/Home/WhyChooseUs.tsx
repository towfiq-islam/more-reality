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
    <section className="h-auto w-full pt-[102px] pb-[167px] container flex flex-row gap-x-10 ">
      <div className="flex flex-row flex-wrap gap-x-10 max-w-[744px] ">
        {imgArr.map((item, idx) => {
          return (
            <Image
              key={idx}
              src={item.src}
              width={342}
              height={320}
              alt="not found"
              className={`h-[320px] w-[342px] object-cover rounded-[12px]  ${
                idx === 0 && "mt-[-51px]"
              }  ${idx === 3 && "mt-[47px]"} `}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-y-4   ">
        <Heading
          Txt={"Why Choose Us"}
          Variant="h2"
        />
        <div className="flex flex-col gap-y-5 max-w-[685px] ">
          <Paragraph
            Txt={`We’re not just another real estate agency — we’re your trusted partner in finding the perfect place to call home. Here's why clients choose us again and again:`}
          />
          {highlights?.map((item, idx) => {
            return (
              <div key={idx} className="flex flex-col gap-y-1 ">
                <Paragraph
                  Txt={item.title}
                  className=" section-sub-heading-one font-[700] "
                />
                <Paragraph
                  Txt={item.description}
                  className=" section-sub-heading-one font-normal opacity-[80] "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
