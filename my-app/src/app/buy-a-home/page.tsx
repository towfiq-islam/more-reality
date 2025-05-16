import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import hero from "@/assests/hero.jpg";
import BuyAHomeMoreRealty from "@/components/BuyaHomeComponents/BuyAHomeMoreRealty";
import FeaturedCardComponent from "@/components/BuyaHomeComponents/FeaturedCardComponents";
import BuyAHomeTestimonial from "@/components/BuyaHomeComponents/BuyAHomeTestimonial";
import SubscribeNewsLetter from "@/components/CommonComponenet/SubscribeNewsLetter";

const page = () => {
  return (
    <>
      <CommonHeroBanner
        BgImgurl={hero}
        title="Discover the Smartest Way to Buy a Home with MORE Realty by Your Side"
        subTitle="From finding the perfect neighborhood to closing the deal, our experienced agents are here to guide you through every step of the home buying process."
        isInfoBox={false}
      />
      <BuyAHomeMoreRealty />
      <FeaturedCardComponent />
      <BuyAHomeTestimonial />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
