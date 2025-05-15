import ContactUsCard, {
  ContactCardType,
} from "@/components/cards/ContactUsCard";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import ContactFormSection from "@/components/pages/ContactUs/ContactFormSection";
import React from "react";

const data: ContactCardType[] = [
  {
    icon: "map",
    title: "Address",
    description: "16037 SW Upper Boones Ferry RD Suite 150, Tigard, OR, 97224",
  },
  {
    icon: "mail",
    title: "Email Address",
    description: "Send us your request or questions to info@morerealty.com",
  },
  {
    icon: "phone",
    title: "Call Us",
    description: "Got questions? Let’s talk it out. +1(877) 344-6673",
  },
] as const;

const page = () => {
  return (
    <>
      <CommonHeroBanner />
      <div className="max-w-7xl mx-auto px-4 py-12 mb-8  lg:-mt-[135px]">
        <ContactUsCard data={data} />
      </div>
      <div className="mb-[80px]">
        <ContactFormSection />
      </div>
    </>
  );
};

export default page;
