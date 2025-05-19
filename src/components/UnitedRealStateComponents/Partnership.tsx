import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import p1 from "@/assests/united-real-state/p1.png";
import p2 from "@/assests/united-real-state/p2.png";
import p3 from "@/assests/united-real-state/p3.png";
import FeatureCard from "@/components/cards/FeaturedCard";
const features = [
  {
    heading: "Who Is United Real Estate?",
    description:
      "Our team has in-depth knowledge of the neighborhoods, school districts, amenities, and market trends in your area. We know where the best value can be found, which areas are up-and-coming, and how to match your lifestyle with the perfect community. Whether you want a quiet suburban home, a trendy downtown condo, or a family-friendly neighborhood, we help you make confident, informed decisions.",
    image: p1,
    imagePosition: "left",
  },
  {
    heading: "Why This Matters to You",
    description:
      "We understand that every buyer’s journey is unique. That’s why we take time to listen carefully to your needs, preferences, and budget. We craft a home search plan that’s tailored just for you—focusing on the features you care about most, whether it’s a great kitchen, a home office, a big backyard, or walkable access to shops and restaurants.",
    image: p2,
    imagePosition: "right",
  },
  {
    heading: "Powered by Innovation",
    description:
      "Our experienced agents are your strongest advocates at the negotiation table. We know how to craft competitive offers, negotiate repairs or credits after inspections, and secure the best possible price and terms. Our goal is to protect your interests and help you win the home you love, without overpaying or missing key details",
    image: p3,
    imagePosition: "left",
  },
];

const Partnership = () => {
  return (
    <section className="container py-20">
      <Heading
        Txt="Introduction: A Partnership That Elevates Us All"
        Variant="h3"
        className="mb-5 text-center"
      />
      <Paragraph
        Txt="At MORE Realty, we're proud to be a part of the United Real Estate network — a forward-thinking organization that’s transforming the real estate industry nationwide. United Real Estate empowers independent brokerages like ours with cutting-edge technology, expansive resources, and a national network — all while allowing us to preserve the values and culture that define our local identity. Together, we bring a seamless experience to clients and a powerful platform for agents to thrive."
        className="mb-10 text-center text-lg"
      />
      {/* Map */}
      <div>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            heading={feature.heading}
            description={feature.description}
            image={feature.image}
            imagePosition={feature.imagePosition as "left" | "right"}
          />
        ))}
      </div>
    </section>
  );
};

export default Partnership;
