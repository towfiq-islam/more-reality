import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import ExploreOurOffice from "@/components/OurOfficesComponents/ExploreOurOffice";

const page = () => {
  return (
    <>
      <CommonHeroBanner
        BgImgurl=""
        title="Our Offices — Local Presence, Regional Strength"
        subTitle="From Oregon to New Mexico, our offices reflect our deep roots in every community we serve — bringing personalized guidance and local expertise to clients across the region."
        isInfoBox={false}
      />
      <ExploreOurOffice />
    </>
  );
};

export default page;
