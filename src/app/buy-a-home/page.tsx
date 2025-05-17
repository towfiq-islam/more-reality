import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import hero from "@/assests/hero.jpg";
import FeaturedCardComponent from "@/components/BuyaHomeComponents/FeaturedCardComponents";
import BuyAHomeTestimonial from "@/components/BuyaHomeComponents/BuyAHomeTestimonial";
import SubscribeNewsLetter from "@/components/CommonComponenet/SubscribeNewsLetter";
import SecondaryBanner from "@/components/CommonComponenet/SecondaryBanner";
import buyHomeMoreRealty from "@/assests/buy-a-home/buyhomemorerealty.jpg";
const page = () => {
  return (
    <>
      <CommonHeroBanner
        BgImgurl={hero}
        title="Discover the Smartest Way to Buy a Home with MORE Realty by Your Side"
        subTitle="From finding the perfect neighborhood to closing the deal, our experienced agents are here to guide you through every step of the home buying process."
        isInfoBox={false}
      />
      <SecondaryBanner
        title="Buying A Home with MORE Realty"
        subtitle="Sell Smarter, Faster, and for Top Dollar — With MORE Realty by Your Side"
        description="At MORE Realty, we understand that buying a home isn’t just a transaction — it’s a life-changing journey. Whether you’re a first-time homebuyer or an experienced investor, we’re here to guide you every step of the way, making sure your experience is smooth, informed, and rewarding."
        image={buyHomeMoreRealty}
      />
      <FeaturedCardComponent />
      <BuyAHomeTestimonial />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
