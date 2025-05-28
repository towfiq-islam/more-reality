import Image from "next/image";
import Heading from "../Tags/Heading/Heading";
import parse from "html-react-parser";

interface FeatureCardProps {
  image: string;
  heading: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  heading,
  description,
  index,
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-7 xl:gap-10 py-6 3xl:py-10 ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Left Side */}
      <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[350px] 2xl:h-[392px]">
        <Image
          data-aos="fade-up"
          data-aos-delay="100"
          src={`${process.env.NEXT_PUBLIC_SITE_URL}/${image}`}
          alt={heading}
          fill
          className="object-cover !rounded-lg h-full"
        />
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2">
        <Heading
          Txt={heading}
          className="text-primary-text-blue font-semibold text-xl lg:!text-[24px] 3xl:!text-[35px] mb-2 lg:!mb-3"
          Variant="h3"
        />

        {/* Description */}
        <div data-aos="fade-up" data-aos-delay="100">
          {typeof description === "string" ? parse(description) : description}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
