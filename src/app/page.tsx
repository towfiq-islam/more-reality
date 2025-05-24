"use client";
import SubscribeNewsLetter from "@/components/CommonComponenet/SubscribeNewsLetter";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import BlogSection from "@/components/pages/Home/BlogSection";
import FaqSection from "@/components/pages/Home/FaqSection";
import Testimonial from "@/components/pages/Home/Testimonial";
import WhyChooseUs from "@/components/pages/Home/WhyChooseUs";
import { ImSpinner9 } from "react-icons/im";
import { useBlogData, useHomepageData } from "@/hooks/queries";

const page = () => {
  const { data: homepageData, isLoading: isHomepageDataLoading } =
    useHomepageData();
  const { data: blogData, isLoading: isBlogDataLoading } = useBlogData(3);

  if (isHomepageDataLoading || isBlogDataLoading) {
    return (
      <p className="h-[70vh] flex justify-center items-center">
        <ImSpinner9 className="animate-spin text-5xl text-primary-blue" />
      </p>
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

export default page;
