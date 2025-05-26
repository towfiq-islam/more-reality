import OfficeCard from "../cards/OfficeCard";
import Heading from "../Tags/Heading/Heading";
import Button from "../Tags/Button/Button";
import Link from "next/link";

type OfficeCard = {
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  image: string;
};

interface OfficeCardProps {
  data: OfficeCard[];
}

const Office: React.FC<OfficeCardProps> = ({ data }) => {
  return (
    <section className="lg:px-5 3xl:px-0">
      <div className="container flex flex-col gap-y-5 lg:gap-y-10 items-center">
        <Heading
          Txt="Our Offices"
          className="text-primary-text-blue font-semibold text-center"
          Variant="h3"
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {data?.map((item, idx) => {
            return (
              <OfficeCard
                key={idx}
                bgImgurl={item?.image}
                name={item?.name}
                location={item?.address}
                phone={item?.phone}
                email={item?.email}
                descreption={item?.description}
              />
            );
          })}
        </div>
        <Link href='/about/our-offices'>
          <Button
            Txt={"See More Office"}
            className={"primary-btn max-w-[209px] "}
          />
        </Link>
      </div>
    </section>
  );
};

export default Office;
