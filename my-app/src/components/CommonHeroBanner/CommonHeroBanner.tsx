import React, { JSX, SVGProps } from "react";
import hero from "../../assests/hero.jpg";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";

type InfoBox = {
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
      className="h-[780px] w-screen relative  "
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
        <div className="w-screen absolute bottom-0 mb-[94px]  h-auto  flex flex-row gap-x-[30px]  ">
          <div className="container flex flex-row gap-x-[30px]   ">
            {infoArr?.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div className="w-[417px] h-auto py-8 bg-primary-blue rounded-[10px] flex flex-col gap-y-[15px] ">
                  <div className="flex flex-row gap-x-[15.35px] items-center ">
                    <Icon />
                    <Paragraph Txt={item.title} className="" />
                  </div>
                  <div className="flex flex-col gap-y-1.5 ">
                    <Paragraph
                      Txt={item.subTitle}
                      className=" max-w-[294px] "
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
