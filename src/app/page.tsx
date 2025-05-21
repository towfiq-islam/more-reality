import SubscribeNewsLetter from "@/components/CommonComponenet/SubscribeNewsLetter";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import BlogSection from "@/components/pages/Home/BlogSection";
import FaqSection from "@/components/pages/Home/FaqSection";
import Testimonial from "@/components/pages/Home/Testimonial";
import WhyChooseUs from "@/components/pages/Home/WhyChooseUs";
import hero from "../assests/hero.jpg";
import {
  CallSVg,
  EmailSvg,
  LocationSVg,
} from "@/components/SvgContainer/SvgContainer";

const InforArr = [
  {
    icon: LocationSVg,
    title: "Address",
    subTitle: "16037 SW Upper Boones Ferry RD Suite 150, Tigard, OR, 97224",
    mailAddress: "",
    phoneNumber: "",
  },
  {
    icon: EmailSvg,
    title: "Email Address",
    subTitle: "Send us your request or questions to",
    mailAddress: "info@morerealty.com",
    phoneNumber: "",
  },
  {
    icon: CallSVg,
    title: "Call Us",
    subTitle: "Got questions? Let’s talk it out.",
    mailAddress: "",
    phoneNumber: "+1(877) 344-6673",
  },
];

const page = () => {
  return (
    <>
      <CommonHeroBanner
        BgImgurl={hero}
        title="Homes Made for Living, Investments Made for Life"
        subTitle="Browse thousands of properties for sale and rent, handpicked to match your lifestyle and budget."
        isInfoBox={false}
        infoArr={InforArr}
      />
      <WhyChooseUs />
        <Testimonial />
        <BlogSection />
        <FaqSection />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
