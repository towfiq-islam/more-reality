import { SVGProps } from "react";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";

export type InfoBox = {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  title: string;
  subTitle: string;
  mailAddress?: string;
  phoneNumber?: string;
};

interface CommonHeroBannerProps {
  BgImgurl: string | any;
  title: string;
  subTitle: string;
  isInfoBox: boolean;
  infoArr?: InfoBox[];
}

const CommonHeroBanner: React.FC<CommonHeroBannerProps> = ({
  BgImgurl,
  title,
  subTitle,
  isInfoBox,
  infoArr,
}) => {
  return (
    <div
      className="h-[780px] w-full relative"
      style={{
        backgroundImage: `linear-gradient(#00000099, #00000099), url(${BgImgurl?.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container flex flex-col items-center pt-[200px] gap-y-5  ">
        <Heading Variant="h1" Txt={title} className="primary-hero-heading" />
        <Paragraph Txt={subTitle} className="primary-hero-sub-heading" />
      </div>
      {isInfoBox && (
        <div className="absolute -bottom-20 flex left-1/2 -translate-x-1/2 gap-[30px]">
          <div className="container flex flex-row gap-x-[30px]">
            {infoArr?.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="w-[417px] h-auto px-[32px] py-8 bg-primary-blue rounded-[10px] flex flex-col gap-y-[15px] ">
                  <div className="flex flex-row gap-x-[15.35px] items-center ">
                    <Icon />
                    <Paragraph Txt={item.title} className="font-semibold text-white" />
                  </div>
                  <div className="flex flex-col gap-y-1.5 ">
                    <Paragraph
                      Txt={item.subTitle}
                      className=" max-w-[294px] text-white "
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonHeroBanner;
