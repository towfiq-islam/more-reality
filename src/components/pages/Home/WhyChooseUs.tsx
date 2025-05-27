import Image from "next/image";
import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import parse from "html-react-parser";

type DataProps = {
  title: string;
  sub_description: string;
  description: string;
  section_image1: string;
  section_image2: string;
  section_image3: string;
  section_image4: string;
};

const WhyChooseUs = ({ data }: { data: DataProps }) => {
  const imgArr = [
    data?.section_image1,
    data?.section_image2,
    data?.section_image3,
    data?.section_image4,
  ];
  console.log(data?.description);

  return (
    <section className="lg:px-5 3xl:px-0 pt-10 lg:pt-20 3xl:pt-[102px] pb-10 lg:pb-20 3xl:pb-[167px] h-auto w-full">
      <div className="container flex flex-col gap-y-10 2xl:flex-row gap-x-10">
        {/* Left */}
        <div className="self-start mx-auto flex flex-row flex-wrap gap-5 lg:gap-x-5 2xl:gap-x-7 3xl:gap-x-10 w-full lg:max-w-[600px] 3xl:max-w-[744px]">
          {imgArr?.map((item, idx) => {
            return (
              <Image
                data-aos="fade-up"
                data-aos-delay="100"
                key={idx}
                src={`${process.env.NEXT_PUBLIC_SITE_URL}/${item}`}
                width={342}
                height={320}
                alt="not found"
                className={`h-[220px] md:h-[240px] lg:h-[260px] 3xl:h-[320px] !w-full md:!w-[43%] lg:!w-[280px] 3xl:!w-[342px] object-cover rounded-[12px] border ${
                  idx === 0 && "lg:-mt-5 2xl:mt-[-35px] 3xl:mt-[-51px]"
                }  ${idx === 3 && "lg:mt-5 2xl:mt-[35px] 3xl:mt-[47px]"} `}
              />
            );
          })}
        </div>

        {/* Right */}
        <div className="flex flex-col gap-y-3 2xl:gap-y-4">
          <Heading Txt={data?.title} Variant="h2" />
          <div className="flex flex-col gap-y-5 2xl:max-w-[685px] ">
            <Paragraph
              Txt={data?.sub_description}
              className="!text-lg 3xl:!text-xl"
            />

            {/* <div className="[&>h2]:text-lg 3xl:[&>h2]:text-xl [&>h3]:text-lg 3xl:[&>h3]:text-xl [&>h4]:text-lg 3xl:[&>h4]:text-xl 2xl:[&>p]:text-lg space-y-5">
              {typeof data?.description === "string"
                ? parse(data?.description)
                : data?.description}
            </div> */}

            {/* Description */}
            {typeof data?.description === "string"
              ? parse(data?.description)
              : data?.description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
