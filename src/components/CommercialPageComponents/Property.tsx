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
    <section className="py-20 bg-propertyBg">
      <div className="container">
        <Heading
          Txt="Type of commercial properties we handle"
          className="text-4xl text-center mb-10"
          Variant="h3"
        />
        <div className="grid grid-cols-3 gap-20">
          {data?.map(item => (
            <div key={item?.id}>
              <span data-aos="fade-up" data-aos-delay="100">
                {item?.icon}
              </span>
              <h3 data-aos="fade-up"
            data-aos-delay="100" className="text-primary-text-blue uppercase font-semibold text-xl mt-3 mb-2">
                {item?.title}
              </h3>
              <p data-aos="fade-up"
            data-aos-delay="100" className="text-secondary-text text-lg">{item?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Property;
