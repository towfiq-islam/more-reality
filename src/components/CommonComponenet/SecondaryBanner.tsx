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
    <section className="text-center py-10 3xl:py-20 lg:px-5 3xl:px-0">
      <div className="container">
        <Heading Txt={title} Variant="h3" className="!mb-3" />
        <Paragraph
          Txt={subtitle}
          className="md:mb-2 !text-base md:text-lg text-gray-800"
        />
        <Paragraph Txt={description} className="max-w-[1440px] mb-7 lg:mb-10" />
        <Image
          data-aos="fade-up"
          data-aos-delay="100"
          width={500}
          height={580}
          src={`${process.env.NEXT_PUBLIC_SITE_URL}/${image}`}
          alt="banner_image"
          className="h-[270px] md:h-[300px] lg:h-[400px] xl:h-[500px] 3xl:h-[580px] w-full object-cover rounded"
        />
      </div>
    </section>
  );
};

export default SecondaryBanner;
