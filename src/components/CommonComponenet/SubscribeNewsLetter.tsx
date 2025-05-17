import { WaveSvg } from "../SvgContainer/SvgContainer";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
import Button from "../Tags/Button/Button";

const SubscribeNewsLetter = () => {
  return (
    <section className="flex flex-col overflow-x-hidden pb-24 h-auto w-full">
      <WaveSvg />
      <div className="h-auto w-full pt-[30px] pb-[138px] bg-primary-blue  flex flex-col gap-y-10 items-center ">
        <div className="flex flex-col  gap-y-5">
          <Heading
            Variant="h3"
            Txt={"Subscribe to our newsletter"}
            className="text-white text-center text-[48px]  font-bold leading-[60px]"
          />
          <Paragraph
            className="text-white max-w-[815px] text-center font-lato text-[20px] not-italic font-normal leading-[32px]"
            Txt={
              "    Stay updated with the latest blog, special offers, and exclusive content. Join our log today and never miss an update from us!"
            }
          />
        </div>
        <div className="w-[851px] h-[66px] bg-white shadow-sm relative rounded-[8px] pr-2.5 py-[5px] ">
          <input
            type="email"
            placeholder="Enter your email address"
            className="h-full w-full pl-5 text-sm font-400 text-primary-text-blue font-normal outline-none pr-[160px] "
          />

          <Button Txt={"Subscription"} className="primary-btn absolute top-1.3 right-0 mt-[2px] h-[90%] mr-[10px] !text-[17px] " />
        </div>
      </div>
    </section>
  );
};

export default SubscribeNewsLetter;
