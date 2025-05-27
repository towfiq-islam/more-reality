"use client";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import BuyAHomeTestimonial from "@/components/BuyaHomeComponents/BuyAHomeTestimonial";
import SubscribeNewsLetter from "@/components/CommonComponenet/SubscribeNewsLetter";
import SecondaryBanner from "@/components/CommonComponenet/SecondaryBanner";
import FeatureCard from "@/components/cards/FeaturedCard";
import { useBuyingHome } from "@/hooks/queries";

const page = () => {
  const { data: buyingHomeData } = useBuyingHome();
  return (
    <>
      <CommonHeroBanner
        BgImgurl={buyingHomeData?.buying_banner?.background_image}
        title={buyingHomeData?.buying_banner?.title}
        subTitle={buyingHomeData?.buying_banner?.description}
        isInfoBox={false}
      />
      <SecondaryBanner
        title={buyingHomeData?.buying_overview?.title}
        description={buyingHomeData?.buying_overview?.description}
        image={buyingHomeData?.buying_overview?.image_url}
      />
      <section className="lg:px-5 3xl:px-0">
        <div className="container 3xl:py-10">
          {buyingHomeData?.why_buying?.map(
            (
              feature: {
                title: string;
                description: string;
                image_url: string;
              },
              index: number
            ) => (
              <FeatureCard
                key={index}
                heading={feature?.title}
                description={feature?.description}
                image={feature?.image_url}
                index={index}
              />
            )
          )}
        </div>
      </section>
      <BuyAHomeTestimonial data={buyingHomeData?.buying_buyers} />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
