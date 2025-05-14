'use client'
import Heading from "@/components/Tags/Heading/Heading";
import notFound from "../assests/not-found.png";
import Image from "next/image";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import Button from "@/components/Tags/Button/Button";
import { useRouter } from "next/navigation";



const page = () => {
  const router = useRouter()

  return (
    <section className="flex flex-col container items-center justify-center gap-y-8 h-auto py-[63px] ">
      <Image
        src={notFound}
        width={582}
        height={354}
        alt="not found"
        className="w-[582px] h-[354px] object-cover "
      />
      <div className="flex flex-col gap-y-6  items-center ">
        <div className="flex flex-col gap-y-5 items-center ">
          <Heading
            Variant="h5"
            Txt={"Oops! page not found"}
            className="text-[40px] text-primary-text-blue font-[600] leading-[120%] "
          />
          <Paragraph
            Txt={
              "Oops! It seems like the page you’re trying to reach doesn’t exist anymore or maybe it never did."
            }
            className="text-base text-[#808080] text-center max-w-[612] font-[400] leading-[150%] "
          />
        </div>
        <Button onClick={() => {
          router.push("/")
        }} Txt={"Back to Home"} className="secondary-btn" />
      </div>
    </section>
  );
};

export default page;
