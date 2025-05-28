type realtyCard = {
  title: string;
  description: string;
};

type realtyProps = {
  data: realtyCard[];
};

const MoreReality: React.FC<realtyProps> = ({ data }) => {
  return (
    <section className="lg:px-5 3xl:px-0 bg-[#F3F9FE] py-10 lg:py-16 3xl:py-20 mb-10 lg:mb-20 3xl:mb-[100px]">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[20px] lg:text-2xl 3xl:text-4xl  text-[#161C24] font-lato font-bold leading-tight text-center mb-[24px] 2xl:mb-8 3xl:mb-12"
        >
          Why Join MORE Realty
        </h2>

        {/* Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 xl:gap-12">
          {data?.map((item, index) => (
            <div key={index} className="space-y-3">
              <h3
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-sm md:text-base 2xl:text-lg 3xl:text-xl font-semibold uppercase text-[#161C24]"
              >
                {item?.title}
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-[#494949] font-lato text-base 2xl:text-lg leading-relaxed"
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

export default MoreReality;
