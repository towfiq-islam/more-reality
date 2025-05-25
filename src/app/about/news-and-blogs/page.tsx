"use client";
import SubscribeNewsLetter from "@/components/CommonComponenet/SubscribeNewsLetter";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import BlogSection from "@/components/pages/Home/BlogSection";
import { useBlogBanner, useBlogData } from "@/hooks/queries";
import { useState } from "react";

const page = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const { data: blogBanner, isLoading: isBlogBannerLoading } = useBlogBanner();
  const { data: blogData, isLoading: isBlogDataLoading } = useBlogData(
    10,
    activePage
  );

  return (
    <>
      <CommonHeroBanner
        BgImgurl={blogBanner?.BlogBanner?.background_image}
        title={blogBanner?.BlogBanner?.title}
        subTitle={blogBanner?.BlogBanner?.description}
        isInfoBox={false}
      />
      <BlogSection
        title={"Latest News & Blog"}
        subTitle={
          "Catch up on the latest real estate news, expert insights, market trends, and inspiring stories from the MORE Realty community — all in one place."
        }
        isBtn={false}
        data={blogData?.data}
        isBlogPage={true}
        links={blogData?.links}
        setActivePage={setActivePage}
      />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
