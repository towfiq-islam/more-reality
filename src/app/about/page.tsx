"use client";
import Meet from "@/components/AboutUsComponents/Meet";
import Office from "@/components/AboutUsComponents/Office";
import SecondaryBanner from "@/components/CommonComponenet/SecondaryBanner";
import BlogSection from "@/components/pages/Home/BlogSection";
import SubscribeNewsLetter from "@/components/CommonComponenet/SubscribeNewsLetter";
import {
  useAboutUs,
  useBlogData,
  useOurOffices,
  useTeamMembers,
} from "@/hooks/queries";
import { useEffect } from "react";
import { Loader } from "@/components/Loader/Loader";

const page = () => {
  const { data: allTeamMembers, isLoading: isMembersLoading } =
    useTeamMembers(5);
  const { data: ourOffices, isLoading: isOurOfficeLoading } = useOurOffices(4);
  const { data: aboutUs, isLoading: isAboutUsLoading } = useAboutUs();
  const { data: blogData, isLoading: isBlogDataLoading } = useBlogData(3);

  const isLoading =
    isMembersLoading ||
    isOurOfficeLoading ||
    isAboutUsLoading ||
    isBlogDataLoading;

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
      <Meet data={allTeamMembers?.data} />
      <Office data={ourOffices?.data} />
      <BlogSection data={blogData?.data} isBtn={false} />
      <div className="-mt-10 3xl:-mt-20">
        <SecondaryBanner
          title={aboutUs?.aboutMoreGives?.title}
          description={aboutUs?.aboutMoreGives?.description}
          image={aboutUs?.aboutMoreGives?.image_url}
        />
      </div>
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
