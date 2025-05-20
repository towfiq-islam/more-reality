import Image, { StaticImageData } from "next/image";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";

interface SecondaryBannerProps {
  title: string;
  description: string;
  image: StaticImageData;
  subtitle?: string;
}

const SecondaryBanner: React.FC<SecondaryBannerProps> = ({
  title,
  description,
  image,
  subtitle,
}) => {
  return (
    <section className="container text-center py-20">
      <Heading Txt={title} Variant="h3" className="mb-3 text-[42px]" />
      <Paragraph Txt={subtitle} className="mb-2 text-gray-800" />
      <Paragraph Txt={description} className="max-w-[1440px] mb-10" />
      <Image
         data-aos="fade-up"
            data-aos-delay="100"
        src={image}
        alt="banner_image"
        placeholder="blur"
        className="h-[580px] w-full object-cover"
      />
    </section>
  );
};

export default SecondaryBanner;
