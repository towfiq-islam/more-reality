"use client";
import Meet from "@/components/AboutUsComponents/Meet";
// import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import { Loader } from "@/components/Loader/Loader";
import { useMeetTheTeamBanner, useTeamMembers } from "@/hooks/queries";
import { useEffect, useState } from "react";

const page = () => {
  const [activePage, setActivePage] = useState<number>(1);
  // const { data: meetTheTeamBanner, isLoading: isMeetDataLoading } =
  useMeetTheTeamBanner();
  const { data: allTeamMembers, isLoading } = useTeamMembers(20, activePage);

  // const isLoading = isMeetDataLoading || isTeamDataLoading;

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
      {/* <CommonHeroBanner
        BgImgurl={meetTheTeamBanner?.teamBanner?.background_image}
        title={meetTheTeamBanner?.teamBanner?.title}
        subTitle={meetTheTeamBanner?.teamBanner?.description}
        isInfoBox={false}
      /> */}
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
