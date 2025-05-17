import Image from "next/image";
import white_building from "@/assests/home/white-building.jpg";
import gray_building from "@/assests/home/gray-building.jpg";
import vila from "@/assests/home/vila.jpg";
import haunted from "@/assests/home/haunted.jpg";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
const imgArr = [white_building, gray_building, haunted, vila];
const data = [
  {
    id: 1,
    title: "🏠 Housing Stability",
    desc: "Working with partners to ensure every family has a place to call home.",
  },
  {
    id: 2,
    title: "🎒 Children & Education",
    desc: "We don’t rely on guesswork. Our team uses the latest tools and data to provide thorough market insights, comparative property evaluations.",
  },
  {
    id: 3,
    title: "🍎 Hunger Relief",
    desc: "Helping kids thrive with school supplies, mentorship, and support.",
  },
  {
    id: 4,
    title: "🌱 Neighborhood Wellness",
    desc: "From community gardens to public clean-ups, we make spaces healthier.",
  },
  {
    id: 5,
    title: "🤝 Emergency Response ",
    desc: "Supporting families during times of crisis or natural disaster.",
  },
];

const OurPurpose = () => {
  return (
    <div className="container py-20 grid grid-cols-2 gap-5 items-center">
      {/* Left */}
      <div className="flex flex-row flex-wrap gap-x-7">
        {imgArr.map((item, idx) => {
          return (
            <Image
              key={idx}
              src={item.src}
              width={300}
              height={300}
              alt="not found"
              className={`h-[300px] w-[300px] object-cover rounded-[12px] ${
                idx === 0 && "mt-[-30px]"
              }  ${idx === 3 && "mt-[30px]"} `}
            />
          );
        })}
      </div>

      {/* Right */}
      <div>
        <Heading Txt="Our Purpose" Variant="h3" className="text-4xl mb-5" />
        <Paragraph
          className="text-lg mb-5"
          Txt={
            "MORE Gives was created with a single vision:👉 To be a force for good in every community we touch. We support causes that align with our values — compassion, integrity, inclusion, and empowerment."
          }
        />
        <p className="mb-10 text-lg">Our areas of impact include:</p>
        <ol className="list-disc list-outside space-y-3 marker:text-xl marker:font-bold">
          {data.map(item => (
            <li key={item.id}>
              <div className="pl-2">
                <span className="font-medium text-lg">{item.title} - </span>
                <span className="text-secondary-text text-lg">{item.desc}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default OurPurpose;
