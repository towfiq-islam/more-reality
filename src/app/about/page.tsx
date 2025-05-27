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

const page = () => {
  const { data: allTeamMembers } = useTeamMembers(5);
  const { data: ourOffices } = useOurOffices(4);
  const { data: aboutUs } = useAboutUs();
  const { data: blogData, isLoading: isBlogDataLoading } = useBlogData(3);

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
