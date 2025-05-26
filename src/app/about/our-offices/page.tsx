"use client";
import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import ExploreOurOffice from "@/components/OurOfficesComponents/ExploreOurOffice";
import {
  useGetCities,
  useGetStates,
  useOurOffices,
  useOurOfficesBanner,
} from "@/hooks/queries";
import { useState } from "react";

const page = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [selectedState, setSelectedState] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<number | null>(null);
  const { data: allStates } = useGetStates();
  const { data: allCities } = useGetCities();
  const { data: officesBanner } = useOurOfficesBanner();
  const { data: officeData } = useOurOffices(
    10,
    activePage,
    selectedState,
    selectedCity
  );

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
        selectedState={selectedState}
        selectedCity={selectedCity}
        setActivePage={setActivePage}
        setSelectedState={setSelectedState}
        setSelectedCity={setSelectedCity}
        states={allStates}
        cities={allCities}
      />
    </>
  );
};

export default page;
