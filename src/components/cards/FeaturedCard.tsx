import Image, { StaticImageData } from "next/image";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";

interface FeatureCardProps {
  image: StaticImageData;
  heading: string;
  description: string;
  imagePosition?: "left" | "right";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  heading,
  description,
  imagePosition = "right",
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        imagePosition === "right" ? "lg:flex-row-reverse" : ""
      } items-center gap-7 xl:gap-10 py-6`}
    >
      {/* Left Side */}
      <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[350px] 2xl:h-[392px]">
        <Image
          data-aos="fade-up"
          data-aos-delay="100"
          src={image}
          alt={heading}
          fill
          className="object-cover rounded-lg"
          placeholder="blur"
        />
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2">
        <Heading
          Txt={heading}
          className="text-primary-text-blue font-semibold text-xl lg:!text-[24px] 2xl:!text-[35px] mb-2 lg:!mb-3"
          Variant="h3"
        />
        <Paragraph Txt={description} className=" text-primary-text-blue" />
      </div>
    </div>
  );
};

export default FeatureCard;
