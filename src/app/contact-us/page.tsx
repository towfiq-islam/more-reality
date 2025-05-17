import CommonHeroBanner, { InfoBox} from "@/components/CommonHeroBanner/CommonHeroBanner";
import hero from "@/assests/hero.jpg";
import { AddressSvg, EmailSvg, PhoneSvg} from "@/components/SvgContainer/SvgContainer";
import JoinUs from "@/components/CommonComponenet/JoinUs";

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
      <div className="mt-48">
        <JoinUs
          title="Stay Connected & Elevate Your Real Estate Journey with Confidence"
          description="Our Real Estate CRM system empowers you with deeper insights, seamless automation, and data-driven strategies—all in one place. Submit your details below, and let's elevate your real estate journey together!"
        />
      </div>
    </>
  );
};

export default page;
