import CommonHeroBanner, { InfoBox } from "@/components/CommonHeroBanner/CommonHeroBanner";
import ContactFormSection from "@/components/pages/ContactUs/ContactFormSection";
import hero from "@/assests/hero.jpg"
import { AddressSvg, EmailSvg, PhoneSvg } from "@/components/SvgContainer/SvgContainer";

const data: InfoBox[] = [
  {
    icon: AddressSvg,
    title: "Address",
    subTitle: "16037 SW Upper Boones Ferry RD Suite 150, Tigard, OR, 97224",
  },
  {
    icon: EmailSvg,
    title: "Email Address",
    subTitle: "Send us your request or questions to info@morerealty.com",
    mailAddress: "info@morerealty.com", 
  },
  {
    icon: PhoneSvg,
    title: "Call Us",
    subTitle: "Got questions? Let’s talk it out. +1(877) 344-6673",
    phoneNumber: "+18773446673",
  },
];

const page = () => {
  return (
    <>
       <CommonHeroBanner
          BgImgurl={hero}
          title="Empowering Real Estate Dreams with Local Expertise and Trusted Relationships"
          subTitle="At MORE Realty, we’re committed to guiding you with knowledge, integrity, and a personal touch—whether you’re buying, selling, or investing."
          isInfoBox={true}
          infoArr={data}
        />
      <div className="mt-48 mb-20">
        <ContactFormSection />
      </div>
    </>
  );
};

export default page;
