import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import { DownArrow } from "../SvgContainer/SvgContainer";
import OfficeCard from "../cards/OfficeCard";
import house from "../../assests/house.jpg";

type ImageObject = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};

interface OfficeCardProps {
  bgImgurl: string | ImageObject;
  name: string;
  location: string;
  phone: string;
  email: string;
  descreption: string;
}

const officeData: OfficeCardProps[] = [
  {
    bgImgurl: house,
    name: "Head Office",
    location: "123 Main Street, Dhaka, Bangladesh",
    phone: "+880123456789",
    email: "headoffice@example.com",
    descreption:
      "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
  },
  {
    bgImgurl: house,
    name: "Branch Office",
    location: "456 Elm Street, Chittagong, Bangladesh",
    phone: "+880987654321",
    email: "branchoffice@example.com",
    descreption:
      "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
  },
  {
    bgImgurl: house,
    name: "Regional Office",
    location: "789 Oak Street, Sylhet, Bangladesh",
    phone: "+880192837465",
    email: "regionaloffice@example.com",
    descreption:
      "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
  },
  {
    bgImgurl: house,
    name: "Regional Office",
    location: "789 Oak Street, Sylhet, Bangladesh",
    phone: "+880192837465",
    email: "regionaloffice@example.com",
    descreption:
      "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
  },
  {
    bgImgurl: house,
    name: "Head Office",
    location: "123 Main Street, Dhaka, Bangladesh",
    phone: "+880123456789",
    email: "headoffice@example.com",
    descreption:
      "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
  },
  {
    bgImgurl: house,
    name: "Branch Office",
    location: "456 Elm Street, Chittagong, Bangladesh",
    phone: "+880987654321",
    email: "branchoffice@example.com",
    descreption:
      "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
  },
  {
    bgImgurl: house,
    name: "Regional Office",
    location: "789 Oak Street, Sylhet, Bangladesh",
    phone: "+880192837465",
    email: "regionaloffice@example.com",
    descreption:
      "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
  },
  {
    bgImgurl: house,
    name: "Regional Office",
    location: "789 Oak Street, Sylhet, Bangladesh",
    phone: "+880192837465",
    email: "regionaloffice@example.com",
    descreption:
      "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
  },
];

const ExploreOurOffice = () => {
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
          {/* State Wise Filter */}
          <div className="w-full lg:w-[324px] relative">
            <select
              data-aos="fade-up"
              data-aos-delay="100"
              className="w-full h-[45px] md:h-[50px] px-4 pr-10 bg-white border border-gray-300 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none"
            >
              <option value="">State Name</option>
              <option value="Barishal">Barishal</option>
              <option value="Chattagong">Chattagong</option>
              <option value="Rajshai">Rajshai</option>
              <option value="Cumilla">Cumilla</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
              <DownArrow />
            </div>
          </div>

          {/* City Wise Filter */}
          <div className="w-full lg:w-[324px] relative">
            <select
              data-aos="fade-up"
              data-aos-delay="100"
              className="w-full h-[45px] md:h-[50px] px-4 pr-10 bg-white border border-gray-300 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none"
            >
              <option value="">City Name</option>
              <option value="Barishal">Barishal</option>
              <option value="Chattagong">Chattagong</option>
              <option value="Rajshai">Rajshai</option>
              <option value="Cumilla">Cumilla</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
              <DownArrow />
            </div>
          </div>

          {/* Apply btn */}
          <button className="w-full lg:w-fit px-5 h-[45px] md:h-[50px] rounded-lg font-medium text-white bg-[#3F9DF3] cursor-pointer">
            Apply
          </button>
        </div>

        {/* Map */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 ">
          {officeData?.map((item, idx) => {
            return (
              <OfficeCard
                key={idx}
                bgImgurl={item.bgImgurl}
                name={item.name}
                location={item.location}
                phone={item.phone}
                email={item.email}
                descreption={item.descreption}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreOurOffice;
