import Heading from "@/components/Tags/Heading/Heading";
import Image from "next/image";
import leadership_image from "@/assests/united-real-state/leadership.png";

const OurLeadership = () => {
  return (
    <div className="container pb-40">
      <Heading
        Txt="From Our Leadership"
        Variant="h3"
        className="mb-14 text-center"
      />
      <div className="grid grid-cols-12 gap-10 items-center relative px-20">
        <div className="col-span-5">
          <Image
            src={leadership_image}
            alt="leadership_image"
            placeholder="blur"
            className="h-[442px] w-full object-cover rounded-[20px]"
          />
        </div>
        <div className="col-span-7">
          <h3 className="text-3xl font-semibold text-primary-text-blue mb-3">
            John Wick
          </h3>
          <p className="text-secondary-text text-xl mb-10">
            Managing Broker, MORE Realty
          </p>
          <p className="text-2xl text-primary-text-blue leading-[150%]">
            We’re proud to align with a company that shares our values of
            innovation, independence, and integrity. United gives us the scale
            to compete nationally, while letting us lead with our local heart.
          </p>
        </div>

        {/* Absolute design */}
        <p className="text-[220px] text-primary-blue absolute -top-22 left-0 ">
          “
        </p>
        <p className="text-[220px] text-primary-blue absolute -bottom-44 right-0 ">
          ”
        </p>
      </div>
    </div>
  );
};

export default OurLeadership;
