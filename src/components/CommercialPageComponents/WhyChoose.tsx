import Image from "next/image";
import whyChooseImg from "@/assests/commertial/whyChoose.png";

const data = [
  {
    id: 1,
    title: "Decades of Combined Experience",
    desc: "Our seasoned team brings years of hands-on experience in the commercial sector. We have navigated complex deals market shifts and high-stakes negotiations—equipping us to serve your needs with confidence and precision.",
  },
  {
    id: 2,
    title: "In-Depth Market Analysis",
    desc: "We don’t rely on guesswork. Our team uses the latest tools and data to provide thorough market insights, comparative property evaluations, and investment forecasts—ensuring you make decisions rooted in real-world trends and financial clarity.",
  },
  {
    id: 3,
    title: "Strong Negotiation Expertise",
    desc: "Your success is our priority. Whether you are buying, selling, or leasing, we advocate fiercely on your behalf, negotiating favorable terms that protect your bottom line and long-term interests.",
  },
  {
    id: 4,
    title: "Widespread Network & Resources",
    desc: "With access to an expansive network of property owners, investors, developers, and brokers, we open doors to off-market deals, exclusive listings, and partnership opportunities you won’t find on public platforms.",
  },
  {
    id: 5,
    title: "Client-Centered Strategy",
    desc: "Every client is unique—and so is our approach. We take time to understand your specific goals, whether that’s maximizing ROI, finding the ideal location, or streamlining your portfolio. Our service is tailored, transparent, and always aligned with your business objectives.",
  },
];

const WhyChoose = () => {
  return (
    <section className="lg:px-5 3xl:px-0 py-10 2xl:py-20">
      <div className="container grid 2xl:grid-cols-2 gap-7 md:gap-10 3xl:gap-20 items-center">
        {/* Left */}
        <div>
          <Image
            data-aos="fade-up"
            data-aos-delay="100"
            src={whyChooseImg}
            alt="choose_image"
            placeholder="blur"
            className="max-h-[350px] md:max-h-[500px] xl:max-h-[600px] 2xl:max-h-[814px] w-full"
          />
        </div>

        {/* Right */}
        <div>
          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[19px] md:text-[22px] 2xl:text-2xl font-bold mb-3 2xl:mb-7 3xl:mb-10 2xl:-ml-5"
          >
            Why Choose MORE Realty for Commercial Deals
          </h3>
          <ol className="2xl:list-decimal 2xl:list-outside space-y-5 3xl:space-y-7 marker:text-lg 3xl:marker:text-xl marker:font-bold">
            {data.map(item => (
              <li data-aos="fade-up" data-aos-delay="100" key={item.id}>
                <div className="2xl:pl-2">
                  <span className="font-bold md:text-lg 3xl:text-xl">
                    {item.title}:{" "}
                  </span>
                  <span className="text-secondary-text leading-[30px] md:text-[17px] 3xl:text-[19px]">
                    {item.desc}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
