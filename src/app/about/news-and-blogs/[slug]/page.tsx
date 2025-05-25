"use client";
import BlogSection from "@/components/pages/Home/BlogSection";
import Heading from "@/components/Tags/Heading/Heading";
import Image from "next/image";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import { useRouter } from "next/navigation";
import { MdKeyboardBackspace } from "react-icons/md";
import { useBlogData, useBlogDetails } from "@/hooks/queries";
import parse from "html-react-parser";

interface PageProps {
  params: {
    slug: string;
  };
}

const page: React.FC<PageProps> = ({ params }) => {
  const router = useRouter();
  const { slug } = params;
  const { data: blogDetails } = useBlogDetails(slug);
  const { data: blogData } = useBlogData(3);

  return (
    <section className="flex flex-col pb-[40px] w-full ">
      <div className="flex flex-col gap-y-[150px] lg:gap-y-[130px] xl:gap-y-[250px] 2xl:gap-y-[340px]">
        <div className="w-full h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[687px] bg-primary-blue pt-[30px] lg:pt-[60px] lg:px-5 3xl:px-0">
          {/* Back btn */}
          <div className="container">
            <div
              className="mb-3 cursor-pointer text-white flex gap-1 items-center justify-self-start font-semibold"
              onClick={() => router.back()}
            >
              <MdKeyboardBackspace className="text-xl" />
              <span className="text-base">Back</span>
            </div>
          </div>
          <div className="container flex flex-col  gap-4 xl:gap-10 ">
            {/* Title */}
            <Heading
              Txt={blogDetails?.title}
              Variant="h4"
              className="!text-lg lg:!text-[22px] xl:!text-[38px] text-white font-semibold lg:font-bold !leading-[120%] max-w-[894px] "
            />
            <div className="flex flex-row gap-x-2.5 lg:gap-x-5 items-center">
              {/* Author img */}
              <Image
                width={54}
                height={54}
                src={`${process.env.NEXT_PUBLIC_SITE_URL}/${blogDetails?.author_image}`}
                alt={"not found"}
                className="w-[40px] h-[40px] lg:w-[54px] lg:h-[54px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-y-0.5 xl:gap-y-1 ">
                {/* Author name */}
                <Paragraph
                  Txt={blogDetails?.author}
                  className="!text-base xl:!text-lg text-white font-medium leading-[80%] lg:leading-[150%]"
                />
                {/* Date */}
                <Paragraph
                  Txt={blogDetails?.created_date}
                  className="!text-sm xl:!text-base text-white font-normal leading-[150%]"
                />
              </div>
            </div>
            <div className="w-full h-[300px] lg:h-[325px] xl:h-[450px] 2xl:h-[681px] rounded-[8px]">
              {/* Thumbnail */}
              <Image
                width={1440}
                height={681}
                src={`${process.env.NEXT_PUBLIC_SITE_URL}/${blogDetails?.image}`}
                alt={"not found"}
                className="w-full rounded-[8px] h-full  object-cover"
              />
            </div>
          </div>
        </div>

        {/* Detailed Descriptions */}
        <div className="lg:px-5 3xl:px-0">
          <div className="container ">
            {typeof blogDetails?.description === "string"
              ? parse(blogDetails?.description)
              : blogDetails?.description}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <BlogSection
        title={"Latest News & Blog"}
        subTitle={
          "Catch up on the latest real estate news, expert insights, market trends, and inspiring stories from the MORE Realty community — all in one place."
        }
        isBtn={false}
        data={blogData?.data}
      />
    </section>
  );
};

export default page;
