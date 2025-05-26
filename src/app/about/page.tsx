"use client";
import Meet from "@/components/AboutUsComponents/Meet";
import Office from "@/components/AboutUsComponents/Office";
import SecondaryBanner from "@/components/CommonComponenet/SecondaryBanner";
import BlogSection from "@/components/pages/Home/BlogSection";
import fan from "@/assests/about/fan.jpg";
import SubscribeNewsLetter from "@/components/CommonComponenet/SubscribeNewsLetter";
import { useTeamMembers } from "@/hooks/queries";

const page = () => {
  const { data: allTeamMembers } = useTeamMembers(5);
  return (
    <>
      <Meet data={allTeamMembers?.data} />
      {/* <Office />
      <BlogSection />
      <div className="-mt-10 3xl:-mt-20">
        <SecondaryBanner
          image={fan}
          title={"MORE Gives: Committed to Community"}
          description={
            "As part of the United Real Estate network, MORE Realty benefits from national reach, powerful resources, and a shared commitment to excellence. This partnership allows us to bring you the best of both worlds: local dedication and national strength."
          }
        />
      </div>
      <SubscribeNewsLetter /> */}
    </>
  );
};

export default page;
