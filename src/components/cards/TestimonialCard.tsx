import { Star } from "../SvgContainer/SvgContainer";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
import Image, { StaticImageData } from "next/image";
import parse from "html-react-parser";

interface TestimonialProps {
  imgUrl: StaticImageData | string;
  name: string;
  review: string;
  rating: number;
  isDownPart: boolean;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  imgUrl,
  name,
  review,
  rating,
  isDownPart,
}) => {
  return (
    <div className="min-h-[280px] w-full lg:max-w-[457px] rounded-[30px] bg-white border-[1px] border-solid border-[#E2E2E2] py-5 3xl:py-[31px] px-5 3xl:px-[30px] flex flex-col gap-y-7 lg:gap-y-8 3xl:gap-y-[60px]  ">
      <div className="flex flex-col gap-y-[18px] ">
        <div className="flex flex-row gap-x-[25px] items-center ">
          <Image
            data-aos="fade-up"
            data-aos-delay="100"
            src={typeof imgUrl === "string" ? imgUrl : imgUrl?.src}
            width={60}
            height={60}
            alt="not foudnd"
            className="h-[60px] w-[60px] object-cover "
          />
          <Paragraph
            Txt={name}
            className="text-[#05073C] text-[22px] leading-[144%] font-medium  "
          />
        </div>
        <div className="!text-[17px] 3xl:text-lg leading-[144%] font-normal text-primary-text-blue   ">
          {typeof review === "string" ? parse(review) : review}
        </div>
      </div>
      {isDownPart && (
        <div className="flex flex-col gap-y-[20.88px]">
          <hr
            data-aos="fade-up"
            data-aos-delay="100"
            className="border-t-[1px] border-[#E7E6E6] w-full"
          />
          <div className="flex flex-row gap-x-5 lg:gap-x-[23px] items-center">
            <Heading
              Variant="h4"
              Txt={
                <>
                  <Paragraph
                    Txt={`${rating}.0`}
                    className="text-lg lg:text-[31px] text-primary-blue leading-[125%]  "
                  />
                  <span className="lg:text-[19px] text-[#B9C8F3] leading-[125%]  ">
                    /
                  </span>
                  <Paragraph
                    Txt={"5.0"}
                    className="text-base lg:text-[19px] text-[#606060] leading-[125%]  "
                  />
                </>
              }
              className="flex flex-row items-center gap-x-1"
            />
            <div className="flex flex-row gap-x-1 ">
              {Array.from({ length: rating }).map((_, i) => (
                <Star data-aos="fade-up" data-aos-delay="100" key={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
