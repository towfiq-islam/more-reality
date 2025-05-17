// components/FeaturesSection.tsx
import React from "react";
import FeatureCard from "../cards/FeaturedCard";
import featureone from "@/assests/buy-a-home/featured1.jpg";
import featuretwo from "@/assests/buy-a-home/featured2.jpg";
import featurethree from "@/assests/buy-a-home/featured3.jpg";
import featurefour from "@/assests/buy-a-home/featured4.jpg";
const features = [
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

const FeaturedCardComponent: React.FC = () => {
  return (
    <section className="container py-12">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          heading={feature.heading}
          description={feature.description}
          image={feature.image}
          imagePosition={feature.imagePosition as "left" | "right"}
        />
      ))}
    </section>
  );
};

export default FeaturedCardComponent;
