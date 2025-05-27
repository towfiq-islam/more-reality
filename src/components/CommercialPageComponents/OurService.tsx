import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";

type ServicesCard = {
  title: string;
  description: string;
  icon: string;
};

interface ServicesProps {
  data: ServicesCard[];
}
const OurService: React.FC<ServicesProps> = ({ data }) => {
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
          {data?.map((item, idx) => (
            <div
              key={idx}
              className="w-full lg:w-[47%] xl:w-[400px] 3xl:w-[445px] px-5 3xl:px-10 pt-5 3xl:pt-7 pb-7 3xl:pb-10 shadow rounded-xl border border-gray-200 bg-white hover:bg-gray-200 transition-all duration-300"
            >
              <img
                data-aos="fade-up"
                data-aos-delay="100"
                src={`${process.env.NEXT_PUBLIC_SITE_URL}/${item?.icon}`}
                alt="img"
                className="w-20 h-20"
              />
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
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
