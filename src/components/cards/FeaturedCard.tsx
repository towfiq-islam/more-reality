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
      className={`flex flex-col md:flex-row ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      } items-center gap-6 py-6`}
    >
      {/* Left Side */}
      <div className="relative w-1/2 h-[392px]">
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
      <div className="w-full md:w-1/2">
        <Heading
          Txt={heading}
          className="text-primary-text-blue font-medium text-[32px] mb-4"
          Variant="h3"
        />
        <Paragraph
          Txt={description}
          className=" text-primary-text-blue text-[]"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
