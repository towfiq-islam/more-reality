import CommonHeroBanner from "@/components/CommonHeroBanner/CommonHeroBanner";
import hero from "@/assests/hero.jpg"
import Overview from "@/components/CommercialPageComponents/Overview";
import Property from "@/components/CommercialPageComponents/Property";
import WhyChoose from "@/components/CommercialPageComponents/WhyChoose";
import OurService from "@/components/CommercialPageComponents/OurService";
import OurSuccess from "@/components/CommercialPageComponents/OurSuccess";

const Commercial = () => {
    return (
        <>
            <CommonHeroBanner
                BgImgurl={hero}
                title="Commercial Real Estate Solutions for Buyers, Sellers & Investors"
                subTitle="Explore opportunities in office, retail, industrial, and investment properties—backed by expert guidance every step of the way."
                isInfoBox={false}
            />
            <Overview/>
            <Property/>
            <WhyChoose/>
            <OurService/>
            <OurSuccess/>
        </>
    );
};

export default Commercial;