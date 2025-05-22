import BlogSection from "@/components/pages/Home/BlogSection";
import Heading from "@/components/Tags/Heading/Heading";
import Image from "next/image";
import m1 from "../../../../assests/about/m1.png";
import analaysis from "../../../../assests/blog/analaysis.png";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";

const realEstateTrends = [
  {
    title: "Interest Rates Are Stabilizing, But Not Dropping Drastically",
    details:
      "Following the sharp rises of 2023 and the tapering in 2024, the Federal Reserve has taken a more measured approach this year. Interest rates are hovering between 5.5% to 6.25% for 30-year fixed mortgages, and experts don’t expect major changes in the immediate future. This stability is bringing more predictability for buyers and sellers alike.",
  },
  {
    title: "Inventory is Rising—Slowly",
    details:
      "One of the biggest hurdles over the past few years has been a lack of inventory. In 2025, we're finally seeing a gradual increase in available listings, particularly in suburban and secondary metro areas. While we're not back to pre-pandemic levels, this increase is beginning to ease some of the competition seen in the market in recent years.",
  },
  {
    title: "Buyers Are More Informed and Selective",
    details:
      "With the vast amount of digital tools, virtual tours, and real-time data, today’s buyers are entering the market better prepared than ever. They know what they want—and what they’re willing to pay for it. Properties that are priced right, well-staged, and marketed properly are moving quickly. Overpriced or outdated homes are sitting longer than they did even a year ago.",
  },
];

const homeBuyingTips = [
  "In a market where competition still exists, having your financing in place gives you a major edge.",
  "Navigating the local market requires a partner who knows the neighborhoods, price trends, and negotiation strategies.",
  "Set clear expectations and be ready to act when the right opportunity appears. Waiting too long can mean losing the home to a more prepared buyer.",
];

const page = () => {
  return (
    <section className="flex flex-col gap-y-[120px]  pb-[120px] w-full ">
      <div className="flex flex-col gap-y-[340px]">
        <div className="w-full h-[687px] bg-primary-blue pt-[60px]  ">
          <div className="container flex flex-col  gap-y-10 ">
            <Heading
              Txt={
                "Navigating the 2025 Real Estate Market: What Buyers and Sellers Need to Know"
              }
              Variant="h4"
              className="!text-[38px] text-white font-bold leading-[120%] max-w-[894px] "
            />
            <div className="flex flex-row gap-x-5 items-center ">
              <Image
                width={54}
                height={54}
                src={m1}
                alt={"not found"}
                className="w-[54px] h-[54px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-y-1 ">
                <Paragraph
                  Txt={"MORE Realty Editorial Team"}
                  className="text-lg text-white font-medium leading-[150%]"
                />
                <Paragraph
                  Txt={"05 May, 2025"}
                  className="text-base text-white font-normal leading-[150%]"
                />
              </div>
            </div>
            <div className="w-full h-[681px]  rounded-[8px] ">
              <Image
                width={1440}
                height={681}
                src={analaysis}
                alt={"not found"}
                className="w-full rounded-[8px] h-[681px]  object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 container ">
          <div className="flex flex-col gap-y-5 ">
            <Heading
              Txt={"Market Trends to Watch in 2025:"}
              className={
                "!text-2xl font-bold  text-primary-text-blue leading-[120%] "
              }
            />
            <div className="flex flex-col gap-y-10 ">
              {realEstateTrends.map((item, idx) => {
                return (
                  <div className="flex flex-col gap-y-1 ">
                    <Paragraph Txt={`${idx + 1}.${item.title} `} />
                    <Paragraph Txt={`${item.details} `} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-y-5 ">
            <Heading
              Txt={" Advice for Buyers:"}
              className={
                "!text-2xl font-bold  text-primary-text-blue leading-[120%] "
              }
            />
            <ul className="flex flex-col gap-y-2 list-disc list-inside text-secondary-text text-xl">
              {homeBuyingTips.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <BlogSection
        title={"Latest News & Blog"}
        subTitle={
          "Catch up on the latest real estate news, expert insights, market trends, and inspiring stories from the MORE Realty community — all in one place."
        }
        isBtn={false}
        isFullArr={false}
      />
    </section>
  );
};

export default page;
