import BuyAHomeTestimonial from "@/components/BuyaHomeComponents/BuyAHomeTestimonial";
import SecondaryBanner from "@/components/CommonComponenet/SecondaryBanner";
import SubscribeNewsLetter from "@/components/CommonComponenet/SubscribeNewsLetter";
import CommonHeroBanner, {
  InfoBox,
} from "@/components/CommonHeroBanner/CommonHeroBanner";
import hero from "@/assests/hero.jpg";
import buyHomeMoreRealty from "@/assests/buy-a-home/buyhomemorerealty.jpg";
import {
  AddressSvg,
  EmailSvg,
  PhoneSvg,
} from "@/components/SvgContainer/SvgContainer";

import featureone from "@/assests/buy-a-home/featured1.jpg";
import featuretwo from "@/assests/buy-a-home/featured2.jpg";
import featurethree from "@/assests/buy-a-home/featured3.jpg";
import featurefour from "@/assests/buy-a-home/featured4.jpg";
import { Feature } from "../buy-a-home/page";
import FeatureCard from "@/components/cards/FeaturedCard";
import SellingForm from "@/components/SellingAHomeComponents/SellingForm";

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

const features: Feature[] = [
  {
    heading: "Local Market Experts",
    description:
      "Our team has in-depth knowledge of the neighborhoods, school districts, amenities, and market trends in your area. We know where the best value can be found, which areas are up-and-coming, and how to match your lifestyle with the perfect community. Whether you want a quiet suburban home, a trendy downtown condo, or a family-friendly neighborhood, we help you make confident, informed decisions.",
    image: featureone,
    imagePosition: "right",
  },
  {
    heading: "Personalized Guidance",
    description:
      "We understand that every buyer’s journey is unique. That’s why we take time to listen carefully to your needs, preferences, and budget. We craft a home search plan that’s tailored just for you—focusing on the features you care about most, whether it’s a great kitchen, a home office, a big backyard, or walkable access to shops and restaurants.",
    image: featuretwo,
    imagePosition: "left",
  },
  {
    heading: "Skilled Negotiators",
    description:
      "Our experienced agents are your strongest advocates at the negotiation table. We know how to craft competitive offers, negotiate repairs or credits after inspections, and secure the best possible price and terms. Our goal is to protect your interests and help you win the home you love, without overpaying or missing key details",
    image: featurethree,
    imagePosition: "right",
  },
  {
    heading: "Streamlined Process",
    description:
      "We handle the details so you don’t have to stress. From helping you get pre-approved with trusted lenders, to arranging home inspections, appraisals, and paperwork, we ensure that every step is coordinated smoothly. Our team keeps you informed throughout the process, so you always know what’s happening and what’s next.",
    image: featurefour,
    imagePosition: "left",
  },
];

const page = () => {
  return (
    <>
      <CommonHeroBanner
        BgImgurl={hero}
        title="Partner with MORE Realty to Sell Your Home Quickly, Smoothly, and at the Right Price"
        subTitle="Our experienced agents provide strategic pricing, expert marketing, and full-service support to ensure your home stands out and sells with success."
        isInfoBox={true}
        infoArr={data}
      />
      <div className="mt-20">
        <SecondaryBanner
          title="Buying A Home with MORE Realty"
          subtitle="Sell Smarter, Faster, and for Top Dollar — With MORE Realty by Your Side"
          description="At MORE Realty, we understand that buying a home isn’t just a transaction — it’s a life-changing journey. Whether you’re a first-time homebuyer or an experienced investor, we’re here to guide you every step of the way, making sure your experience is smooth, informed, and rewarding."
          image={buyHomeMoreRealty}
        />
      </div>
      <div className="container py-10">
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
      <BuyAHomeTestimonial />
      <SubscribeNewsLetter />
      <SellingForm />
    </>
  );
};

export default page;
