import Image from "next/image";
import Heading from "../Tags/Heading/Heading";
import parse from "html-react-parser";

interface PurposeCardProps {
  data: {
    title: string;
    description: string;
    section_image1: string;
    section_image2: string;
    section_image3: string;
    section_image4: string;
  };
}

const OurPurpose: React.FC<PurposeCardProps> = ({ data }) => {
  const imgArr = [
    data?.section_image1,
    data?.section_image2,
    data?.section_image3,
    data?.section_image4,
  ];

  return (
    <section className=" lg:px-5 3xl:px-0">
      <div className="container pb-10 xl:py-10 3xl:py-20 grid grid-cols-1 2xl:grid-cols-2 gap-5 items-center place-items-center">
        {/* Left */}
        <div className="flex flex-row  flex-wrap gap-y-5 gap-x-7 items-center justify-center lg:max-w-[700px] 2xl:max-w-full">
          {imgArr.map((item, idx) => {
            return (
              <Image
                data-aos="fade-up"
                data-aos-delay="100"
                key={idx}
                src={`${process.env.NEXT_PUBLIC_SITE_URL}/${item}`}
                width={300}
                height={300}
                alt="not found"
                className={`h-[220px] lg:h-[250px] w-full 3xl:h-[300px] lg:w-[250px] 3xl:w-[300px] object-cover rounded-[12px] ${
                  idx === 0 && "lg:mt-[-30px]"
                }  ${idx === 3 && "lg:mt-[30px]"} `}
              />
            );
          })}
        </div>

        {/* Right */}
        <div>
          <Heading Txt={data?.title} Variant="h3" className="!mb-5" />
          {typeof data?.description === "string"
            ? parse(data?.description)
            : data?.description}
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;
