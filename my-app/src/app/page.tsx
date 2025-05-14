import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import Testimonial from "@/components/pages/Home/Testimonial";
import WhyChooseUs from "@/components/pages/Home/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <>
      <CommonHeroBanner />
      <WhyChooseUs />
      <Testimonial />
    </>
  );
};

export default page;
