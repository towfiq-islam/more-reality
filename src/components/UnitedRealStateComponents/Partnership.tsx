import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import FeatureCard from "@/components/cards/FeaturedCard";

type UpperContent = {
  title: string;
  description: string;
};

type IntroCard = {
  title: string;
  description: string;
  image_url: string;
};

interface PartnershipProps {
  data: {
    unitedIntroduce: UpperContent;
    unitedIntroduces: IntroCard[];
  };
}

const Partnership: React.FC<PartnershipProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="container pb-4 pt-10 xl:py-20">
      <Heading
        Txt={data?.unitedIntroduce?.title}
        Variant="h3"
        className="!mb-5 !text-center"
      />
      <Paragraph
        Txt={data?.unitedIntroduce?.description}
        className="mb-10 text-center text-lg"
      />

      {/* Map */}
      <div>
        {data?.unitedIntroduces?.map((feature, index) => (
          <FeatureCard
            key={index}
            heading={feature?.title}
            description={feature?.description}
            image={feature.image_url}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Partnership;
