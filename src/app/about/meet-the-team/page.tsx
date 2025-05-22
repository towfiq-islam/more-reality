import Meet from "@/components/AboutUsComponents/Meet";
import hero from "@/assests/hero.jpg";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";

const page = () => {
  return (
    <>
      <CommonHeroBanner
        BgImgurl={hero}
        title="Empowering Real Estate Dreams with Local Expertise and Trusted Relationships"
        subTitle="At MORE Realty, we’re committed to guiding you with knowledge, integrity, and a personal touch—whether you’re buying, selling, or investing."
        isInfoBox={false}
      />
      <Meet isAllmember={true} />
    </>
  );
};

export default page;
