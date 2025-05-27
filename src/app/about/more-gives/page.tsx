"use client";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import OurPurpose from "@/components/MoreGivesComponents/OurPurpose";
import JoinUs from "@/components/CommonComponenet/JoinUs";
import SecondaryBanner from "@/components/CommonComponenet/SecondaryBanner";
import { useMoreGives } from "@/hooks/queries";

const page = () => {
  const { data: moreGivesData } = useMoreGives();
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
        title="Join Us or Partner With Us"
        description="MORE Gives is powered by the hearts of our agents, clients, and
            partners. Whether you’re a nonprofit leader, a school coordinator,
            or just someone who wants to make a difference — we’d love to hear
            from you."
      />
    </>
  );
};

export default page;
