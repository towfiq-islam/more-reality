import overviewImg from "@/assests/commertial/overview.png"
import Image from "next/image";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";

const Overview = () => {
    return (
        <section className="container text-center py-20">
            <Heading 
                Txt='Overview'
                Variant='h3'
                className='mb-3'
            />
            <Paragraph 
                Txt={'At MORE Realty we offer tailored solutions for clients navigating the commercial real estate market. Whether you  are looking to buy sell, lease, or invest, our team of professionals brings deep market insight, strategic guidance, and unmatched service to every transaction.'} 
                className="max-w-[1440px] mb-10"
            />
            <Image 
                src={overviewImg}
                alt='Overview_image'
                placeholder="blur"
                className="mx-auto h-[577px] w-full"
            />
        </section>
    );
};

export default Overview;