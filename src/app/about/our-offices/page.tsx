"use client";
// import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
// import { Loader } from "@/components/Loader/Loader";
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
  // const { data: officesBanner, isLoading: isBannerLoading } =
  useOurOfficesBanner();
  const { data: officeData, isLoading: isOfficeDataLoading } = useOurOffices(
    10,
    activePage,
    selectedState,
    selectedCity
  );

  // const isLoading = isStateLoading || isCitiesLoading || isOfficeDataLoading;

  // Loader
  // useEffect(() => {
  //   if (isBannerLoading) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }

  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [isBannerLoading]);

  // if (isBannerLoading) {
  //   return (
  //     <div className="h-[90vh] flex justify-center items-center">
  //       <Loader />
  //     </div>
  //   );
  // }

  return (
    <>
      {/* <CommonHeroBanner
        BgImgurl={officesBanner?.ourOfficeBanner?.background_image}
        title={officesBanner?.ourOfficeBanner?.title}
        subTitle={officesBanner?.ourOfficeBanner?.description}
        isInfoBox={false}
      /> */}
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
        isOfficeDataLoading={isOfficeDataLoading}
      />
    </>
  );
};

export default page;
