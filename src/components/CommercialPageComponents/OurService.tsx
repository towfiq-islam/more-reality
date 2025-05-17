import { BFiveSvg, BFourSvg, BOneSvg, BThreeSvg, BTwoSvg } from "../SvgContainer/SvgContainer";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
const data = [
    {
        id: 1,
        icon: <BOneSvg />,
        title: 'Buying & Selling Commercial Properties',
        desc: 'We help clients purchase and sell commercial spaces with confidence—handling pricing, marketing, negotiations, and closing.'
    },
    {
        id: 2,
        icon: <BTwoSvg />,
        title: 'Leasing & Tenant Representation',
        desc: 'From securing tenants to negotiating lease terms, we represent both landlords and tenants to ensure mutually beneficial outcomes.'
    },
    {
        id: 3,
        icon: <BThreeSvg />,
        title: 'Investment Strategy & Advisory',
        desc: 'We guide investors through smart commercial opportunities, offering ROI analysis, risk assessments, and portfolio planning.'
    },
    {
        id: 4,
        icon: <BFourSvg />,
        title: 'Market Analysis & Property Valuation',
        desc: 'Get data-driven insights with accurate property valuations, local trend analysis, and competitive benchmarking.'
    },
    {
        id: 5,
        icon: <BFiveSvg />,
        title: 'Site Selection & Location Research',
        desc: 'We help you find the right space by analyzing location dynamics, foot traffic, zoning, and target market alignment.'
    }
]

const OurService = () => {
    return (
        <section className="container pb-20">
            <Heading Txt='Our Services' className='text-primary-text-blue font-semibold text-4xl text-center mb-4' Variant='h3' />
            <Paragraph Txt={'We provide a full spectrum of services tailored to the commercial real estate market.'} className="max-w-[1440px] text-primary-text-blue text-xl text-center mb-14" />
            <div className="flex justify-center gap-7 flex-wrap">
                {
                    data?.map(item => <div key={item?.id} className="w-[445px] px-10 pt-7 pb-10 shadow rounded-xl border border-gray-200 bg-white">
                        <span>{item?.icon}</span>
                        <h3 className="text-primary-text-blue font-bold text-[22px] leading-[34px] mt-5 mb-4">{item?.title}</h3>
                        <p className="text-secondary-text text-lg">{item?.desc}</p>
                    </div>)
                }
            </div>
        </section>
    );
};

export default OurService;