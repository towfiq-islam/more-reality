import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import { DownArrow } from "../SvgContainer/SvgContainer";
import OfficeCard from "../cards/OfficeCard";

type Links = {
  url: string;
  label: string;
  active: boolean;
};

type State = {
  id: number;
  country_name: string;
};

type City = {
  id: number;
  country_id: number;
  city_name: string;
};

type OfficeCard = {
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  image: string;
};

interface OfficeProps {
  data: OfficeCard[];
  links?: Links[];
  states?: State[];
  cities?: City[];
  isAllOffices?: boolean;
  selectedState?: number | null;
  selectedCity?: number | null;
  setActivePage?: React.Dispatch<React.SetStateAction<number>>;
  setSelectedState?: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedCity?: React.Dispatch<React.SetStateAction<number | null>>;
}

const ExploreOurOffice: React.FC<OfficeProps> = ({
  data,
  links,
  isAllOffices = false,
  setActivePage,
  setSelectedState,
  setSelectedCity,
  selectedState,
  selectedCity,
  states,
  cities,
}) => {
  const handleApply = () => {
    setSelectedState("");
    setSelectedCity("");
  };
  return (
    <section className="lg:px-5 3xl:px-0 py-10 2xl:py-20">
      <div className="container">
        <Heading
          Txt="Explore Our Office Locations"
          Variant="h3"
          className="!mb-3 3xl:!mb-5 text-center"
        />
        <Paragraph
          Txt="Find the office nearest to you and connect with local experts who understand your market, your neighborhood, and your goals."
          className="!mb-5 3xl:!mb-10 text-center"
        />

        {/* Filter Section */}
        <div className="max-w-[820px] mx-auto border border-gray-100 flex flex-col lg:flex-row gap-3 md:gap-5 items-center bg-white p-5 rounded-xl shadow-lg justify-center mb-10">
          {/* State Select */}
          <div className="w-full lg:w-[324px] relative">
            <select
              value={selectedState}
              onChange={e => {
                setSelectedState(e.target.value);
                setSelectedCity("");
              }}
              className="w-full h-[45px] md:h-[50px] px-4 pr-10 bg-white border border-gray-300 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none"
            >
              <option value="">State Name</option>
              {states?.map((item, idx) => (
                <option key={idx} value={item?.id}>
                  {item?.country_name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
              <DownArrow />
            </div>
          </div>

          {/* City Select */}
          <div className="w-full lg:w-[324px] relative">
            <select
              value={selectedCity}
              onChange={e => setSelectedCity(e.target.value)}
              className={`w-full h-[45px] md:h-[50px] px-4 pr-10 bg-white border ${
                selectedState ? "border-gray-300" : "border-gray-200"
              } text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none`}
            >
              <option value="">City Name</option>
              {selectedState
                ? data?.map((item, idx) => (
                    <option key={idx} value={item?.city?.id}>
                      {item?.city?.city_name}
                    </option>
                  ))
                : cities?.map((item, idx) => (
                    <option key={idx} value={item?.id}>
                      {item?.city_name}
                    </option>
                  ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
              <DownArrow />
            </div>
          </div>

          {/* Apply Button */}
          <button
            onClick={handleApply}
            className="w-full lg:w-fit px-5 h-[45px] md:h-[50px] rounded-lg font-medium text-white bg-[#3F9DF3] cursor-pointer"
          >
            Reset
          </button>
        </div>

        {/* Map */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 ">
          {data?.map((item, idx) => {
            return (
              <OfficeCard
                key={idx}
                bgImgurl={item?.image}
                name={item?.name}
                location={item?.address}
                phone={item?.phone}
                email={item?.email}
                descreption={item?.description}
              />
            );
          })}
        </div>

        {/* Pagination */}
        {isAllOffices && (
          <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
            {links?.map((item, idx) => (
              <button
                key={idx}
                onClick={() =>
                  item.url && setActivePage?.(Number(item?.url.split("=")[1]))
                }
                className={`px-3 py-1 rounded border transition-all duration-150 
               ${
                 item?.active
                   ? "bg-primary-blue text-white cursor-pointer"
                   : "bg-white text-gray-700"
               } 
                ${!item.url ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!item.url}
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreOurOffice;
