import OfficeCard from "../cards/OfficeCard";
import Heading from "../Tags/Heading/Heading";
import house from "../../assests/house.jpg";
import Button from "../Tags/Button/Button";

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
];

const Office = () => {
  return (
    <section className="container flex flex-col gap-y-10 items-center ">
      <Heading
        Txt="Our Offices"
        className="text-primary-text-blue font-semibold text-5xl mb-4 text-center"
        Variant="h3"
      />
      <div className="grid grid-cols-4 gap-x-[11px] ">
        {officeData.map((item, idx) => {
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
      <Button Txt={'See More Office'} className={'primary-btn max-w-[209px] '}  />
    </section>
  );
};

export default Office;
