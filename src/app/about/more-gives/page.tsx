"use client";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import OurPurpose from "@/components/MoreGivesComponents/OurPurpose";
import JoinUs from "@/components/CommonComponenet/JoinUs";
import SecondaryBanner from "@/components/CommonComponenet/SecondaryBanner";
import { useMoreGives } from "@/hooks/queries";
import { Loader } from "@/components/Loader/Loader";
import { useEffect } from "react";

const page = () => {
  const { data: moreGivesData, isLoading } = useMoreGives();

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
        BgImgurl={moreGivesData?.moreGivesBanner?.background_image}
        title={moreGivesData?.moreGivesBanner?.title}
        subTitle={moreGivesData?.moreGivesBanner?.description}
        isInfoBox={false}
      />
      <SecondaryBanner
        title={moreGivesData?.moreGivesOverview?.title}
        description={moreGivesData?.moreGivesOverview?.description}
        image={moreGivesData?.moreGivesOverview?.image_url}
      />
      <OurPurpose data={moreGivesData?.moreGivesPurpose} />
      <JoinUs
        title={moreGivesData?.moreGivesContact?.title}
        description={moreGivesData?.moreGivesContact?.description}
      />
    </>
  );
};

export default page;
