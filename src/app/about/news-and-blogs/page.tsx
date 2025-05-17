import hero from "@/assests/hero.jpg";
import SubscribeNewsLetter from "@/components/CommonComponenet/SubscribeNewsLetter";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import BlogSection from "@/components/pages/Home/BlogSection";

const page = () => {
  return (
    <>
      <CommonHeroBanner
        BgImgurl={hero}
        title="Empowering Real Estate Dreams with Local Expertise and Trusted Relationships"
        subTitle="At MORE Realty, we’re committed to guiding you with knowledge, integrity, and a personal touch—whether you’re buying, selling, or investing."
        isInfoBox={false}
      />
      <BlogSection isBtn={false} isFullArr={true} />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
