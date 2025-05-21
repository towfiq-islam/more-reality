import { WaveSvg } from "../SvgContainer/SvgContainer";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
import Button from "../Tags/Button/Button";

const SubscribeNewsLetter = () => {
  return (
    <section className="flex flex-col overflow-x-hidden mb-10 md:pb-16 2xl:pb-20 3xl:pb-24 h-auto w-full">
      <WaveSvg />
      <div className="lg:px-5 3xl:px-0 h-auto w-full 2xl:pt-[30px] pb-16 md:pb-28 2xl:pb-[138px] bg-primary-blue">
        <div className="container flex flex-col gap-y-7 md:gap-y-10 items-center">
        <div className="flex flex-col gap-y-3 md:gap-y-5">
          <Heading
            Variant="h3"
            Txt={"Subscribe to our newsletter"}
            className="text-white text-center"
          />
          <Paragraph
            Txt={
              "Stay updated with the latest blog, special offers, and exclusive content. Join our log today and never miss an update from us!"
            }
            className="text-white max-w-[815px] text-center"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-full md:w-[500px] xl:w-[700px] 2xl:w-[851px] h-[45px] md:h-[50px] 2xl:h-[66px] bg-white shadow-sm relative rounded-[8px] pr-2.5 py-[3.5px] md:py-[5px]"
        >
          <input
            data-aos="fade-up"
            data-aos-delay="100"
            type="email"
            placeholder="Enter your email address"
            className="h-full w-full pl-3 md:pl-5 text-sm font-400 text-primary-text-blue font-normal outline-none pr-28 md:pr-[160px]"
          />
          <Button
            Txt={"Subscription"}
            className="primary-btn absolute 2xl:top-1.3 right-0 2xl:mt-[2px] h-full md:h-[90%] mr-1.5 2xl:mr-[10px] !text-base 2xl:!text-[17px] "
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNewsLetter;
