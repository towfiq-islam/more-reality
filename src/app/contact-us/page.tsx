"use client";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import {
  AddressSvg,
  EmailSvg,
  PhoneSvg,
} from "@/components/SvgContainer/SvgContainer";
import JoinUs from "@/components/CommonComponenet/JoinUs";
import { useContactInfo } from "@/hooks/queries";
import { Loader } from "@/components/Loader/Loader";
import { useEffect } from "react";

const page = () => {
  const { data: contactInfo, isLoading } = useContactInfo();

  // Loader
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="h-[90vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const InfoBox = [
    {
      title: "Address",
      icon: AddressSvg,
      subTitle: contactInfo?.contact?.address,
    },
    {
      title: "Email Address",
      icon: EmailSvg,
      subTitle: contactInfo?.contact?.email,
    },
    {
      title: "Call Us",
      icon: PhoneSvg,
      subTitle: contactInfo?.contact?.phone,
    },
  ];

  return (
    <>
      <CommonHeroBanner
        BgImgurl={contactInfo?.contactBanner?.background_image}
        title={contactInfo?.contactBanner?.title}
        subTitle={contactInfo?.contactBanner?.description}
        isInfoBox={true}
        infoArr={InfoBox}
      />
      <div className="mt-12 2xl:mt-48">
        <JoinUs
          title={contactInfo?.contactContent?.title}
          description={contactInfo?.contactContent?.description}
        />
      </div>
    </>
  );
};

export default page;
