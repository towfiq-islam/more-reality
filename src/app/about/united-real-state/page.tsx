"use client";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import Partnership from "@/components/UnitedRealStateComponents/Partnership";
import OurLeadership from "@/components/UnitedRealStateComponents/OurLeadership";
import { useUnitedRealState } from "@/hooks/queries";
import { Loader } from "@/components/Loader/Loader";
import { useEffect } from "react";

const page = () => {
  const { data: realStateData, isLoading } = useUnitedRealState();

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
        BgImgurl={realStateData?.unitedRealStateBanner?.background_image}
        title={realStateData?.unitedRealStateBanner?.title}
        subTitle={realStateData?.unitedRealStateBanner?.description}
        isInfoBox={false}
      />
      <section className="lg:px-5 3xl:px-0">
        <Partnership data={realStateData?.united_real_state_introduces} />
      </section>
      <section className="lg:px-5 3xl:px-0">
        <OurLeadership data={realStateData?.leader} />
      </section>
    </>
  );
};

export default page;
