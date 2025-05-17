import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import hero from "@/assests/hero.jpg";
import Property from "@/components/CommercialPageComponents/Property";
import WhyChoose from "@/components/CommercialPageComponents/WhyChoose";
import OurService from "@/components/CommercialPageComponents/OurService";
import OurSuccess from "@/components/CommercialPageComponents/OurSuccess";
import overviewImg from "@/assests/commertial/overview.png";
import SecondaryBanner from "@/components/CommonComponenet/SecondaryBanner";

const page = () => {
  return (
    <>
      <CommonHeroBanner
        BgImgurl={hero}
        title="Commercial Real Estate Solutions for Buyers, Sellers & Investors"
        subTitle="Explore opportunities in office, retail, industrial, and investment properties—backed by expert guidance every step of the way."
        isInfoBox={false}
      />
      <SecondaryBanner
        title="Overview"
        description="At MORE Realty, we offer tailored solutions for clients navigating the commercial real estate market. Whether you're looking to buy, sell, lease, or invest, our team of professionals brings deep market insight, strategic guidance, and unmatched service to every transaction."
        image={overviewImg}
      />
      <Property />
      <WhyChoose />
      <OurService />
      <OurSuccess />
    </>
  );
};

export default page;
