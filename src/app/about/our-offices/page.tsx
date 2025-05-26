"use client";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import ExploreOurOffice from "@/components/OurOfficesComponents/ExploreOurOffice";
import { useOurOffices, useOurOfficesBanner } from "@/hooks/queries";
import { useState } from "react";

const page = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const { data: officesBanner } = useOurOfficesBanner();
  const { data: officeData } = useOurOffices(10, activePage);

  return (
    <>
      <CommonHeroBanner
        BgImgurl={officesBanner?.ourOfficeBanner?.background_image}
        title={officesBanner?.ourOfficeBanner?.title}
        subTitle={officesBanner?.ourOfficeBanner?.description}
        isInfoBox={false}
      />
      <ExploreOurOffice
        links={officeData?.links}
        data={officeData?.data}
        isAllOffices={true}
        setActivePage={setActivePage}
      />
    </>
  );
};

export default page;
