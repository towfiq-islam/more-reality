import React, { ReactElement } from "react";
import { Mail, MapPinned, PhoneCall } from "lucide-react";

export type ContactCardType = {
  icon: "map" | "mail" | "phone";
  title: string;
  description: string;
};
const iconMap: Record<ContactCardType["icon"], ReactElement> = {
  map: <MapPinned className="w-14 h-14 text-white" />,
  mail: <Mail className="w-14 h-14 text-white" />,
  phone: <PhoneCall className="w-14 h-14 text-white" />,
};

type Props = {
  data: ContactCardType[];
};

const ContactUsCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-[#004172] text-white p-6 rounded-xl flex flex-col gap-3 items-start"
        >
          <div className="flex items-center gap-4 mb-2">
            <div>{iconMap[item.icon]}</div>
            <h3 className="text-[20px] font-normal">{item.title}</h3>
          </div>
          <p className="text-[16px] font-normal leading-[150%]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
export default ContactUsCard;
