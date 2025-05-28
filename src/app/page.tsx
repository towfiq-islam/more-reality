"use client";
import { useEffect } from "react";
import SubscribeNewsLetter from "@/components/CommonComponenet/SubscribeNewsLetter";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import { Loader } from "@/components/Loader/Loader";
import BlogSection from "@/components/pages/Home/BlogSection";
import FaqSection from "@/components/pages/Home/FaqSection";
import Testimonial from "@/components/pages/Home/Testimonial";
import WhyChooseUs from "@/components/pages/Home/WhyChooseUs";
import { useBlogData, useHomepageData } from "@/hooks/queries";

const Page = () => {
  const { data: homepageData, isLoading: isHomepageDataLoading } =
    useHomepageData();
  const { data: blogData, isLoading: isBlogDataLoading } = useBlogData(3);

  const isLoading = isHomepageDataLoading || isBlogDataLoading;

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
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <CommonHeroBanner
        BgImgurl={homepageData?.home_banner?.background_image}
        title={homepageData?.home_banner?.title}
        subTitle={homepageData?.home_banner?.description}
        isInfoBox={false}
      />
      <WhyChooseUs data={homepageData?.home_choose} />
      <Testimonial data={homepageData?.testimonials} />
      <BlogSection data={blogData?.data} />
      <FaqSection data={homepageData?.faqs} />
      <SubscribeNewsLetter />
    </>
  );
};

export default Page;
