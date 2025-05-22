import Heading from "@/components/Tags/Heading/Heading";
import Image from "next/image";
import leadership_image from "@/assests/united-real-state/leadership.png";

const OurLeadership = () => {
  return (
    <div className="container pb-10 xl:pb-40">
      <div className="flex flex-col gap-5 xl:gap-15">
        <Heading
          Txt="From Our Leadership"
          Variant="h3"
          className="xl:mb-14 text-center"
        />
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 xl:gap-10 items-center relative px-0 xl:px-20">
          <div className="col-span-full xl:col-span-5">
            <Image
              data-aos="fade-up"
              data-aos-delay="100"
              src={leadership_image}
              alt="leadership_image"
              placeholder="blur"
              className="h-[350px] xl:h-[442px] w-full object-cover rounded-[20px]"
            />
          </div>
          <div className="col-span-full xl:col-span-7">
            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xl xl:text-3xl font-semibold text-primary-text-blue mb-3"
            >
              John Wick
            </h3>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-secondary-text text-[18px] xl:text-xl mb-3 xl:mb-10"
            >
              Managing Broker, MORE Realty
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-base xl:text-2xl text-primary-text-blue leading-[150%]"
            >
              We’re proud to align with a company that shares our values of
              innovation, independence, and integrity. United gives us the scale
              to compete nationally, while letting us lead with our local heart.
            </p>
          </div>

          {/* Absolute design */}
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="hidden xl:block text-[150px] 2xl:text-[220px] text-primary-blue absolute -top-22 left-0 "
          >
            “
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="hidden xl:block  text-[150px] 2xl:text-[220px] text-primary-blue absolute -bottom-44 right-0 "
          >
            ”
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurLeadership;
