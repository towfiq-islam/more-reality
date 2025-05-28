"use client";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import Property from "@/components/CommercialPageComponents/Property";
import WhyChoose from "@/components/CommercialPageComponents/WhyChoose";
import OurService from "@/components/CommercialPageComponents/OurService";
import OurSuccess from "@/components/CommercialPageComponents/OurSuccess";
import SecondaryBanner from "@/components/CommonComponenet/SecondaryBanner";
import { useCommercial, useOurServices } from "@/hooks/queries";
import { Loader } from "@/components/Loader/Loader";
import { useEffect } from "react";

const page = () => {
  const { data: commercialData, isLoading: isCommercialLoading } =
    useCommercial();
  const { data: ourServicesData, isLoading: isServiceLoading } =
    useOurServices();

  const isLoading = isCommercialLoading || isServiceLoading;

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

  return (
    <>
      <CommonHeroBanner
        BgImgurl={commercialData?.commercial_banner?.background_image}
        title={commercialData?.commercial_banner?.title}
        subTitle={commercialData?.commercial_banner?.description}
        isInfoBox={false}
      />
      <SecondaryBanner
        title={commercialData?.commercial_overview?.title}
        description={commercialData?.commercial_overview?.description}
        image={commercialData?.commercial_overview?.background_image}
      />
      <Property data={commercialData?.commercial_properties} />
      <WhyChoose data={commercialData?.commercial_chooose} />
      <OurService data={ourServicesData} />
      <OurSuccess data={commercialData?.success_stories} />
    </>
  );
};

export default page;
