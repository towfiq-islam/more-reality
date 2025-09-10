"use client";
import BlogSection from "@/components/pages/Home/BlogSection";
import Heading from "@/components/Tags/Heading/Heading";
import Image from "next/image";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import { useRouter } from "next/navigation";
import { MdKeyboardBackspace } from "react-icons/md";
import { useBlogData, useBlogDetails } from "@/hooks/queries";
import parse from "html-react-parser";
import { useEffect } from "react";
import { use } from "react";
import { Loader } from "@/components/Loader/Loader";


const FALLBACK_IMAGE = "/images/fallback.jpg"; // Ensure this exists in /public
const FALLBACK_AUTHOR_IMAGE = "/images/fallback-author.jpg"; // Ensure this exists in /public

interface Props {
  params: Promise<{ slug: string }>;
}

const Page = ({ params }: Props) => {
  const { slug } = use(params);
  const router = useRouter();

  const { data: blogDetails, isLoading: isBlogDetailsLoading } =
    useBlogDetails(slug);
  const { data: blogData, isLoading: isBlogDataLoading } = useBlogData(3);

  useEffect(() => {
    document.body.removeAttribute("data-new-gr-c-s-check-loaded");
    document.body.removeAttribute("data-gr-ext-installed");
  }, []);

  const isLoading = isBlogDetailsLoading || isBlogDataLoading;

  // Loader
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const authorImage = blogDetails?.author_image
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${blogDetails.author_image}`
    : FALLBACK_AUTHOR_IMAGE;
  const mainImage = blogDetails?.image
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${blogDetails.image}`
    : FALLBACK_IMAGE;

  return (
    <section className="flex flex-col pb-[40px] w-full">
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
          <div className="container flex flex-col gap-4 xl:gap-10">
            {/* Title */}
            <Heading
              Txt={blogDetails?.title || "Untitled"}
              Variant="h4"
              className="!text-lg lg:!text-[22px] xl:!text-[32px] text-white font-semibold lg:font-bold !leading-[120%] max-w-[894px]"
            />
            <div className="flex flex-row gap-x-2.5 lg:gap-x-5 items-center">
              {/* Author img */}
              <Image
                width={54}
                height={54}
                src={authorImage}
                alt={blogDetails?.author || "Author"}
                className="w-[40px] h-[40px] lg:w-[54px] lg:h-[54px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-y-0.5 xl:gap-y-1">
                {/* Author name */}
                <Paragraph
                  Txt={blogDetails?.author || "Unknown Author"}
                  className="!text-base xl:!text-lg text-white font-medium leading-[80%] lg:leading-[150%]"
                />
                {/* Date */}
                <Paragraph
                  Txt={blogDetails?.created_date || "Unknown Date"}
                  className="!text-sm xl:!text-base text-white font-normal leading-[150%]"
                />
              </div>
            </div>
            <div className="w-full h-[300px] lg:h-[325px] xl:h-[450px] 2xl:h-[681px] rounded-[8px]">
              {/* Thumbnail */}
              <Image
                width={1440}
                height={681}
                src={mainImage}
                alt={blogDetails?.title || "Blog Image"}
                className="w-full rounded-[8px] h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Detailed Descriptions */}
        <div className="lg:px-5 3xl:px-0">
          <div className="container">
            {typeof blogDetails?.description === "string"
              ? parse(blogDetails.description)
              : blogDetails?.description || <p>No description available.</p>}
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

export default Page;
