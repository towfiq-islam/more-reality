import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import ContactUsTestimonial from "@/components/pages/ContactUs/ContactUsTestimonial";
import OverviewSection from "@/components/pages/JoinMoreRealty/OverviewSection";
import realityBanner from "../../assests/contact-us/more-reality-banner.png";
import whyChooseImage from "../../assests/contact-us/whychooseusmorereallity.png";
import hero from "@/assests/hero.jpg"
import WhyChooseMoreSection from "@/components/pages/JoinMoreRealty/WhyChooseMoreSection";
import JoinMoreRealtySection from "@/components/pages/JoinMoreRealty/JoinMoreRealtySection";
import MoreReality from "@/components/pages/JoinMoreRealty/MoreReality";
const whyChooseMoreData = {
  title: "WHY CHOOSE MORE",
  pricing: "$129.99/MONTH  |  $495 TRANSACTION FEE  |  $4950 CAP",
  perks: ["FREE E&O", "NO HIDDEN FEES", "NO FRANCHISE FEES", "NO DESK FEES"],
  description:
    "We pride ourselves on offering GREAT SUPPORT with cutting-edge tools, training, leads programs, classes, and assistance to help you be successful. As a result, we are able to offer the best of what you need!",
  bonus: "PLUS you keep 100% of YOUR commissions!",
  button: {
    text: "Join MORE Realty",
    href: "#",
  },
  image: whyChooseImage,
};

const page = () => {
  return (
    <>
      <CommonHeroBanner   
        BgImgurl={hero}
        title="Unlock Your Potential with MORE Realty"
        subTitle="Join a brokerage that puts your growth first—with the tools, support, and culture to build a thriving real estate career on your terms."
        isInfoBox={false}
       />
      <OverviewSection
        sectionTitle="Overview"
        sectionSubtitle="A Brokerage That Invests in YOU"
        sectionContent="At MORE Realty, we believe real estate agents deserve more — more support, more opportunities, and more freedom to thrive. Whether you’re a seasoned agent or just starting your career, we provide the tools, technology, training, and culture to help you grow and succeed."
        sectionImage={realityBanner}
      />
      <WhyChooseMoreSection {...whyChooseMoreData} />
      <MoreReality/>
      <ContactUsTestimonial />
      <JoinMoreRealtySection />
    </>
  );
};

export default page;
