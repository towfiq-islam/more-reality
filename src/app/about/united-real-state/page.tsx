"use client";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import Partnership from "@/components/UnitedRealStateComponents/Partnership";
import OurLeadership from "@/components/UnitedRealStateComponents/OurLeadership";
import { useUnitedRealState } from "@/hooks/queries";

const page = () => {
  const { data: realStateData } = useUnitedRealState();
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
