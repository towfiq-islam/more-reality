import Heading from "../Tags/Heading/Heading";
import parse from "html-react-parser";

type PropertyCard = {
  title: string;
  description: string;
  image_url: string;
};

type PropertiesProps = {
  data: PropertyCard[];
};

const Property: React.FC<PropertiesProps> = ({ data }) => {
  return (
    <section className="lg:px-5 3xl:px-0 py-10 lg:py-20 bg-propertyBg">
      <div className="container">
        <Heading
          Txt="Type of commercial properties we handle"
          className="!text-xl md:!text-2xl lg:!text-3xl text-center"
          Variant="h3"
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-10 2xl:gap-20 mt-10">
          {data?.map((item, idx) => (
            <div key={idx}>
              <span data-aos="fade-up" data-aos-delay="100">
                <img
                  src={encodeURI(
                    `${process.env.NEXT_PUBLIC_SITE_URL}/${item?.image_url}`
                  )}
                  alt="img"
                  className="w-14 h-14"
                />
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
                {typeof item?.description === "string"
                  ? parse(item?.description)
                  : item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Property;
