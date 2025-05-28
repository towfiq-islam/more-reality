"use client";
import BuyAHomeTestimonial from "@/components/BuyaHomeComponents/BuyAHomeTestimonial";
import SecondaryBanner from "@/components/CommonComponenet/SecondaryBanner";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import {
  AddressSvg,
  EmailSvg,
  PhoneSvg,
} from "@/components/SvgContainer/SvgContainer";
import FeatureCard from "@/components/cards/FeaturedCard";
import SellingForm from "@/components/SellingAHomeComponents/SellingForm";
import { useSellingHome } from "@/hooks/queries";
import Heading from "@/components/Tags/Heading/Heading";
import { Loader } from "@/components/Loader/Loader";
import { useEffect } from "react";

const page = () => {
  const { data: sellingHomeData, isLoading } = useSellingHome();
  
  // Loader
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="h-[90vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

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

      <section className="lg:px-5 3xl:px-0">
        <div className="container">
          <Heading
            Txt="Why Selling Your Home With Us"
            className="!text-center text-[22px] md:text-2xl lg:text-3xl 3xl:!text-4xl"
          />

          {sellingHomeData?.why_sellinging?.map(
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
      <BuyAHomeTestimonial
        data={sellingHomeData?.selling_clients}
        isSellingHome={true}
      />
      <SellingForm />
    </>
  );
};

export default page;
