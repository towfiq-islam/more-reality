"use client";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import ContactUsTestimonial from "@/components/pages/ContactUs/ContactUsTestimonial";
import WhyChooseMoreSection from "@/components/pages/JoinMoreRealty/WhyChooseMoreSection";
import JoinMoreRealtySection from "@/components/pages/JoinMoreRealty/JoinMoreRealtySection";
import MoreReality from "@/components/pages/JoinMoreRealty/MoreReality";
import SecondaryBanner from "@/components/CommonComponenet/SecondaryBanner";
import { useJoinMoreRealty } from "@/hooks/queries";

const page = () => {
  const { data: joinMoreRealty } = useJoinMoreRealty();

  return (
    <>
      <CommonHeroBanner
        BgImgurl={joinMoreRealty?.joinBanner?.background_image}
        title={joinMoreRealty?.joinBanner?.title}
        subTitle={joinMoreRealty?.joinBanner?.description}
        isInfoBox={false}
      />
      <SecondaryBanner
        title={joinMoreRealty?.joinOverview?.title}
        // subtitle="A Brokerage That Invests in YOU"
        description={joinMoreRealty?.joinOverview?.description}
        image={joinMoreRealty?.joinOverview?.image_url}
      />
      <WhyChooseMoreSection
        description={joinMoreRealty?.joinWhyChoose?.description}
        title={joinMoreRealty?.joinWhyChoose?.title}
        button_link={joinMoreRealty?.joinWhyChoose?.button_link}
        button_text={joinMoreRealty?.joinWhyChoose?.button_text}
        image={joinMoreRealty?.joinWhyChoose?.image_url}
      />
      <MoreReality data={joinMoreRealty?.whyJoins} />
      <ContactUsTestimonial data={joinMoreRealty?.successStories} />
      <JoinMoreRealtySection
        visionData={joinMoreRealty?.join_missions?.joinMission}
        missionData={joinMoreRealty?.join_missions?.joinMissions}
      />
    </>
  );
};

export default page;
