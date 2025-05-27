import Image from "next/image";
import parse from "html-react-parser";

type WhyChooseProps = {
  data: {
    title: string;
    description: string;
    image_url: string;
  };
};

const WhyChoose: React.FC<WhyChooseProps> = ({ data }) => {
  console.log(data);
  return (
    <section className="lg:px-5 3xl:px-0 py-10 2xl:py-20">
      <div className="container grid 2xl:grid-cols-2 gap-7 3xl:gap-14 items-center">
        {/* Left */}
        <div>
          <Image
            data-aos="fade-up"
            data-aos-delay="100"
            height={814}
            width={500}
            src={`${process.env.NEXT_PUBLIC_SITE_URL}/${data?.image_url}`}
            alt="choose_image"
            className="max-h-[350px] md:max-h-[500px] xl:max-h-[600px] 2xl:max-h-[814px] w-full"
          />
        </div>

        {/* Right */}
        <div>
          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[19px] md:text-[22px] 2xl:text-2xl font-bold mb-3 2xl:mb-7 3xl:mb-10"
          >
            {data?.title}
          </h3>
          {/* Description */}
          {typeof data?.description === "string"
            ? parse(data?.description)
            : data?.description}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
