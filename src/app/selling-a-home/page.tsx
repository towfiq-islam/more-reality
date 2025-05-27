"use client";
import BuyAHomeTestimonial from "@/components/BuyaHomeComponents/BuyAHomeTestimonial";
import SecondaryBanner from "@/components/CommonComponenet/SecondaryBanner";
import SubscribeNewsLetter from "@/components/CommonComponenet/SubscribeNewsLetter";
import CommonHeroBanner, {
  InfoBox,
} from "@/components/CommonHeroBanner/CommonHeroBanner";
import {
  AddressSvg,
  EmailSvg,
  PhoneSvg,
} from "@/components/SvgContainer/SvgContainer";
// import { Feature } from "../buy-a-home/page";
import FeatureCard from "@/components/cards/FeaturedCard";
import SellingForm from "@/components/SellingAHomeComponents/SellingForm";
import { useSellingHome } from "@/hooks/queries";

const page = () => {
  const { data: sellingHomeData } = useSellingHome();

  const InfoBox = [
    {
      title: "Address",
      icon: AddressSvg,
      subTitle: sellingHomeData?.contact?.address,
    },
    {
      title: "Email Address",
      icon: EmailSvg,
      subTitle: sellingHomeData?.contact?.email,
    },
    {
      title: "Call Us",
      icon: PhoneSvg,
      subTitle: sellingHomeData?.contact?.phone,
    },
  ];

  return (
    <>
      <CommonHeroBanner
        BgImgurl={sellingHomeData?.selling_banner?.background_image}
        title={sellingHomeData?.selling_banner?.title}
        subTitle={sellingHomeData?.selling_banner?.description}
        isInfoBox={true}
        infoArr={InfoBox}
      />
      <div className="lg:mt-10 2xl:mt-20">
        <SecondaryBanner
          title={sellingHomeData?.selling_overview?.title}
          description={sellingHomeData?.selling_overview?.description}
          image={sellingHomeData?.selling_overview?.image_url}
        />
      </div>
      {/*
      <section className="lg:px-5 3xl:px-0">
        <div className="container lg:pt-10 xl:py-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              heading={feature.heading}
              description={feature.description}
              image={feature.image}
              imagePosition={feature.imagePosition}
            />
          ))}
        </div>
      </section>
      <BuyAHomeTestimonial />
      <SubscribeNewsLetter />
      <SellingForm /> */}
    </>
  );
};

export default page;
