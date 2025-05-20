import { SVGProps } from "react";

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
      className="h-[380px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] 3xl:h-[780px] w-full relative lg:px-5 3xl:px-0"
      style={{
        backgroundImage: `linear-gradient(#00000099, #00000099), url(${BgImgurl?.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container flex flex-col items-center pt-32 lg:pt-40 xl:pt-[200px] gap-y-5  ">
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-[64px] text-white font-[700] leading-[137.5%] text-center !max-w-[1280px]"
        >
          {title}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-lg md:text-xl 2xl:text-2xl text-primary-gray font-normal leading-[124.5%] text-center !max-w-[903px]"
        >
          {subTitle}
        </p>
      </div>

      {isInfoBox && (
        <div className="absolute -bottom-20 flex left-1/2 -translate-x-1/2 gap-[30px]">
          <div className="container flex flex-row gap-x-[30px]">
            {infoArr?.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="w-[417px] h-auto px-[32px] py-8 bg-primary-blue rounded-[10px] flex flex-col gap-y-[15px] "
                >
                  <div className="flex flex-row gap-x-[15.35px] items-center ">
                    <Icon data-aos="fade-up" data-aos-delay="100" />
                    <p
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className="font-semibold text-white"
                    >
                      {item?.title}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-1.5 ">
                    <p
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className="max-w-[294px] text-white"
                    >
                      {item?.subTitle}
                    </p>
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
