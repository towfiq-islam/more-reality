import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import hero from "@/assests/hero.jpg";
import OurPurpose from "@/components/MoreGivesComponents/OurPurpose";
import JoinUs from "@/components/CommonComponenet/JoinUs";
import SecondaryBanner from "@/components/CommonComponenet/SecondaryBanner";
import introductionImg from "@/assests/more-gives/introduction.png";

const page = () => {
  return (
    <>
      <CommonHeroBanner
        BgImgurl={hero}
        title="Creating Real Impact for Real People, One Community at a Time"
        subTitle="A home is more than four walls — it’s connection, care, and community. Through MORE Gives, we give back to uplift lives and strengthen the neighborhoods we serve."
        isInfoBox={false}
      />
      <SecondaryBanner
        title="Introduction"
        description="At MORE Realty, we don’t just help people find homes — we believe in building hope, community, and connection. Through MORE Gives, our commitment extends far beyond real estate. We are here to uplift lives, stand by those in need, and invest in the neighborhoods we proudly serve. We know that even the smallest act of kindness can change someones world. That’s why giving back isn’t something we do — it’s who we are."
        image={introductionImg}
      />
      <OurPurpose />
      <JoinUs
        title="Join Us or Partner With Us"
        description="MORE Gives is powered by the hearts of our agents, clients, and
            partners. Whether you’re a nonprofit leader, a school coordinator,
            or just someone who wants to make a difference — we’d love to hear
            from you."
      />
    </>
  );
};

export default page;
