"use client";
import Meet from "@/components/AboutUsComponents/Meet";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import { useMeetTheTeamBanner, useTeamMembers } from "@/hooks/queries";
import { useState } from "react";

const page = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const { data: meetTheTeamBanner } = useMeetTheTeamBanner();
  const { data: allTeamMembers } = useTeamMembers(20, activePage);

  return (
    <>
      <CommonHeroBanner
        BgImgurl={meetTheTeamBanner?.teamBanner?.background_image}
        title={meetTheTeamBanner?.teamBanner?.title}
        subTitle={meetTheTeamBanner?.teamBanner?.description}
        isInfoBox={false}
      />
      <Meet
        links={allTeamMembers?.links}
        data={allTeamMembers?.data}
        isAllMembers={true}
        setActivePage={setActivePage}
      />
    </>
  );
};

export default page;
