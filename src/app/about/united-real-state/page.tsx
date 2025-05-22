import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import hero from "@/assests/hero.jpg";
import Partnership from "@/components/UnitedRealStateComponents/Partnership";
import OurLeadership from "@/components/UnitedRealStateComponents/OurLeadership";

const page = () => {
  return (
    <>
      <CommonHeroBanner
        BgImgurl={hero}
        title="United Real Estate — National Reach. Local Expertise."
        subTitle="Through our partnership with United Real Estate, we combine national strength with local focus — delivering smarter solutions, unmatched support, and innovative tools that drive success for both clients and agents."
        isInfoBox={false}
      />
      <section className="lg:px-5 3xl:px-0">
        <Partnership />
      </section>
      <section className="lg:px-5 3xl:px-0">
        <OurLeadership />
      </section>
    </>
  );
};

export default page;
