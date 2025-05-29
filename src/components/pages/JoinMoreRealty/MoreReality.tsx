import Image from "next/image";
import React from "react";
import parse from "html-react-parser";

type JoinMission = {
  title: string;
  description: string;
  image_url: string;
};

interface JoinMoreProps {
  visionData: {
    title: string;
    description: string;
    image_url: string;
  };
  missionData: JoinMission[];
}

const JoinMoreRealtySection: React.FC<JoinMoreProps> = ({
  visionData,
  missionData,
}) => {
  const bgImgURL = encodeURI(
    `${process.env.NEXT_PUBLIC_SITE_URL}/${visionData?.image_url}`
  );

  return (
    <section className="pb-10 lg:pb-20 2xl:pb-24 2xl:pt-5 lg:px-5 3xl:px-0 bg-white">
      <div className="container">
        <div className=" grid grid-cols-1 xl:grid-cols-2 gap-[20px] xl:gap-8 2xl:gap-12 items-center">
          {/* Left Image */}
          <div className="w-full">
            <Image
              data-aos="fade-up"
              data-aos-delay="100"
              src={bgImgURL}
              alt="Growth Illustration"
              width={600}
              height={268}
              className="w-full h-[300px] lg:h-[350px] object-cover rounded-md"
            />
          </div>

          {/* Right Text */}
          <div className="w-full">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[20px] lg:text-2xl 3xl:text-4xl  font-bold leading-tight text-[#212B36] mb-3"
            >
              {typeof visionData?.title === "string"
                ? parse(visionData?.title)
                : visionData?.title}
            </div>

            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xl mb-2 font-semibold text-[#212B36]"
            >
              Empowering Agents. Elevating Careers.
            </h3>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              {typeof visionData?.description === "string"
                ? parse(visionData?.description)
                : visionData?.description}
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-5 xl:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 2xl:gap-x-[128px] gap-y-[20px]">
          {missionData?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col xl:flex-row items-start gap-6"
            >
              <div className="min-w-[40px] h-[40px]">
                <img
                  src={encodeURI(
                    `${process.env.NEXT_PUBLIC_SITE_URL}/${item?.image_url}`
                  )}
                  alt="img"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-lg font-semibold text-[#212B36]"
                >
                  {item?.title}
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-[#637381] text-base mt-1 leading-relaxed"
                >
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinMoreRealtySection;
