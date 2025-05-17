import m1 from "@/assests/about/m1.png"
import m2 from "@/assests/about/m2.png"
import m3 from "@/assests/about/m3.png"
import m4 from "@/assests/about/m4.png"
import m5 from "@/assests/about/m5.png"
import Image from "next/image"
import Heading from "@/components/Tags/Heading/Heading"
import Paragraph from "@/components/Tags/Paragraph/Paragraph"
const data = [
    {
        id:1,
        name: 'Acacia Dallman',
        img:m1
    },
    {
        id:2,
        name: 'Ali Rasouli',
        img:m2
    },
    {
        id:3,
        name: 'Adan Serrano',
        img:m3
    },
    {
        id:4,
        name: 'Angela Liriano',
        img:m4
    },
    {
        id:5,
        name: 'Andre Hage',
        img:m5
    },
]

const Meet = () => {
    return (
        <section className="py-20 container">
            {/* Title */}
            <Heading 
                Txt='Meet the Team'
                className='text-primary-text-blue font-semibold text-5xl mb-4 text-center'
                Variant='h3'
            />
            {/* Sub Title */}
            <Paragraph 
                Txt={'Our success starts with the people behind the name.'} 
                className="max-w-[1440px] text-primary-text-blue text-xl text-center mb-12" 
            />

            {/* Map */}
            <div className="grid grid-cols-5 gap-6">
                {
                    data?.map(item => <div key={item?.id} className="text-center">
                        <Image src={item?.img} alt='Meet_img' className="rounded-full w-[271px] h-[271px]"/>
                        <h3 className="text-primary-text-blue text-xl font-bold mt-5">{item?.name}</h3>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Meet;