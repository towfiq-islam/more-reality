import {
  FamilySvg,
  IndustrySvg,
  LandSvg,
  OfferSvg,
  PropertySvg,
  SpecialSvg,
} from "../SvgContainer/SvgContainer";
import Heading from "../Tags/Heading/Heading";
const data = [
  {
    id: 1,
    icon: <OfferSvg />,
    title: "Office Spaces",
    desc: "Corporate offices, medical suites, executive buildings",
  },
  {
    id: 2,
    icon: <PropertySvg />,
    title: "Retail Properties",
    desc: "Storefronts, shopping centers, high-traffic retail corridors",
  },
  {
    id: 3,
    icon: <IndustrySvg />,
    title: "Industrial Facilities",
    desc: "Warehouses, flex spaces, and distribution centers",
  },
  {
    id: 4,
    icon: <FamilySvg />,
    title: "Multi-Family Units",
    desc: " Duplexes, triplexes, and large apartment complexes",
  },
  {
    id: 5,
    icon: <LandSvg />,
    title: "Land",
    desc: "Raw, zoned, or development-ready land for commercial use",
  },
  {
    id: 6,
    icon: <SpecialSvg />,
    title: "Special Use Properties",
    desc: "Hospitality, healthcare, and mixed-use buildings",
  },
];

const Property = () => {
  return (
    <section className="lg:px-5 3xl:px-0 py-10 lg:py-20 bg-propertyBg">
      <div className="container">
        <Heading
          Txt="Type of commercial properties we handle"
          className="!text-xl md:!text-2xl lg:!text-3xl text-center"
          Variant="h3"
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-10 2xl:gap-20 mt-10">
          {data?.map(item => (
            <div key={item?.id}>
              <span data-aos="fade-up" data-aos-delay="100">
                {item?.icon}
              </span>
              <h3
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-primary-text-blue uppercase font-semibold md:text-lg 2xl:text-xl mt-3 mb-2"
              >
                {item?.title}
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-secondary-text lg:text-lg"
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

export default Property;
