const whyJoinData = [
  {
    title: "GENEROUS COMMISSION PLANS",
    description:
      "We offer competitive and flexible commission structures designed to help you keep more of your hard-earned income.",
  },
  {
    title: "CUTTING-EDGE TECHNOLOGY",
    description:
      "From CRM systems and marketing platforms to lead generation tools and virtual tour software, we equip you with everything you need to work smarter, not harder.",
  },
  {
    title: "TOP-NOTCH TRAINING & MENTORSHIP",
    description:
      "We provide new agent onboarding, ongoing workshops, coaching programs, and access to industry experts — so you can sharpen your skills and grow your business.",
  },
  {
    title: "UNMATCHED MARKETING SUPPORT",
    description:
      "Get professional branding, customizable marketing templates, social media assets, listing promotion tools, and access to expert marketing advisors.",
  },
  {
    title: "COLLABORATIVE & POSITIVE CULTURE",
    description:
      "We’re not just a brokerage — we’re a family. Join a supportive network of agents who share ideas, referrals, and encouragement every step of the way.",
  },
  {
    title: "FLEXIBLE WORK STYLE",
    description:
      "Whether you prefer working from home, in the field, or from one of our offices, we give you the freedom to run your business your way.",
  },
];

const MoreReality = () => {
  return (
    <section className="lg:px-5 3xl:px-0 bg-[#F3F9FE] py-12">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[20px] lg:text-2xl 3xl:text-4xl  text-[#161C24] font-lato font-bold leading-tight text-center mb-[24px] xl:mb-12"
        >
          Why Join MORE Realty
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 xl:gap-12">
          {whyJoinData.map((item, index) => (
            <div key={index} className="space-y-3">
              <h3
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-base  lg:text-md 2xl:text-xl font-semibold uppercase text-[#161C24]"
              >
                {item.title}
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-[#494949] font-lato text-sm 2xl:text-lg leading-relaxed"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreReality;
