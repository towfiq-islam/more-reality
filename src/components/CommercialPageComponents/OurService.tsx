import {
  BFiveSvg,
  BFourSvg,
  BOneSvg,
  BThreeSvg,
  BTwoSvg,
} from "../SvgContainer/SvgContainer";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
const data = [
  {
    id: 1,
    icon: <BOneSvg />,
    title: "Buying & Selling Commercial Properties",
    desc: "We help clients purchase and sell commercial spaces with confidence—handling pricing, marketing, negotiations, and closing.",
  },
  {
    id: 2,
    icon: <BTwoSvg />,
    title: "Leasing & Tenant Representation",
    desc: "From securing tenants to negotiating lease terms, we represent both landlords and tenants to ensure mutually beneficial outcomes.",
  },
  {
    id: 3,
    icon: <BThreeSvg />,
    title: "Investment Strategy & Advisory",
    desc: "We guide investors through smart commercial opportunities, offering ROI analysis, risk assessments, and portfolio planning.",
  },
  {
    id: 4,
    icon: <BFourSvg />,
    title: "Market Analysis & Property Valuation",
    desc: "Get data-driven insights with accurate property valuations, local trend analysis, and competitive benchmarking.",
  },
  {
    id: 5,
    icon: <BFiveSvg />,
    title: "Site Selection & Location Research",
    desc: "We help you find the right space by analyzing location dynamics, foot traffic, zoning, and target market alignment.",
  },
];

const OurService = () => {
  return (
    <section className="lg:px-5 3xl:px-0 lg:pt-5 pb-10 lg:pb-20">
      <div className="container">
        <Heading Txt="Our Services" className="mb-4 text-center" Variant="h3" />
        <Paragraph
          Txt={
            "We provide a full spectrum of services tailored to the commercial real estate market."
          }
          className="max-w-[1440px] text-center mb-5 md:mb-10 2xl:mb-14"
        />
        <div className="flex justify-center gap-5 xl:gap-7 flex-wrap">
          {data?.map(item => (
            <div
              key={item?.id}
              className="w-full lg:w-[47%] xl:w-[400px] 3xl:w-[445px] px-5 3xl:px-10 pt-5 3xl:pt-7 pb-7 3xl:pb-10 shadow rounded-xl border border-gray-200 bg-white hover:bg-gray-200 transition-all duration-300"
            >
              <span data-aos="fade-up" data-aos-delay="100">
                {item?.icon}
              </span>
              <h3
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-primary-text-blue font-bold text-lg md:text-xl 3xl:text-[22px] xl:leading-[34px] mt-5 mb-4"
              >
                {item?.title}
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-secondary-text md:text-lg"
              >
                {item?.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
