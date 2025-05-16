import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import ContactUsTestimonial from "@/components/pages/ContactUs/ContactUsTestimonial";
import Testimonial from "@/components/pages/Home/Testimonial";
import hero from "@/assests/hero.jpg"
import React from "react";

const page = () => {
  return (
    <>
      <CommonHeroBanner   
      BgImgurl={hero}
      title="Unlock Your Potential with MORE Realty"
      subTitle="Join a brokerage that puts your growth first—with the tools, support, and culture to build a thriving real estate career on your terms."
      isInfoBox={false} />
      <ContactUsTestimonial />
    </>
  );
};

export default page;
