import Image from "next/image";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
import buyHomeMoreRealty from "@/assests/buy-a-home/buyhomemorerealty.jpg";
const BuyAHomeMoreRealty = () => {
  return (
    <section className="container text-center py-20">
      <Heading
        Txt="Buying A Home with MORE Realty"
        className="text-primary-text-blue font-semibold text-5xl mb-4"
        Variant="h3"
      />
      <Heading
        Txt="Discover the Smartest Way to Buy a Home with MORE Realty by Your Side"
        className="text-primary-text-blue font-medium text-[24px] mb-4"
        Variant="h6"
      />
      <Paragraph
        Txt={
          "At MORE Realty, we understand that buying a home isn’t just a transaction — it’s a life-changing journey. Whether you’re a first-time homebuyer or an experienced investor, we’re here to guide you every step of the way, making sure your experience is smooth, informed, and rewarding."
        }
        className="max-w-[1440px] text-primary-text-blue text-xl mb-10"
      />
      <Image
        src={buyHomeMoreRealty}
        alt="Overview_image"
        placeholder="blur"
        className="mx-auto"
      />
    </section>
  );
};

export default BuyAHomeMoreRealty;
