import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import BlogSection from "@/components/pages/Home/BlogSection";
import Testimonial from "@/components/pages/Home/Testimonial";
import WhyChooseUs from "@/components/pages/Home/WhyChooseUs";

import React from "react";

const page = () => {
  return (
    <>
      <CommonHeroBanner />
      <WhyChooseUs />
      <Testimonial />
      <BlogSection />
    </>
  );
};

export default page;
