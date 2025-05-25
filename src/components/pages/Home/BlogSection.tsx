import Button from "@/components/Tags/Button/Button";
import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import BlogCard from "@/components/cards/BlogCard";
import Link from "next/link";

type BlogCard = {
  title: string;
  author: string;
  author_image: string | any;
  created_date: string;
  image: string;
  short_description: string;
  slug: string;
  id: number;
};

type LinksCard = {
  url: string;
  label: string;
  active: boolean;
};

interface BlogSectionProps {
  title?: string;
  subTitle?: string;
  isBtn?: boolean;
  data?: BlogCard[];
  links?: LinksCard[];
  isBlogPage?: boolean;
  setActivePage?: React.Dispatch<React.SetStateAction<number>>;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  title = "Latest Blog Post",
  subTitle = "Stay informed with expert tips, market insights, and home buying guides — everything you need to make smart real estate decisions.",
  isBtn = true,
  data,
  links,
  isBlogPage = false,
  setActivePage,
}) => {
  return (
    <section className="lg:px-5 3xl:px-0 py-10 lg:py-16 3xl:py-24">
      <div className="container h-auto cursor-pointer flex flex-col gap-y-10 3xl:gap-y-[60px]">
        <div className="flex flex-col items-center gap-y-2 ">
          {/* Title */}
          <Heading Variant="h3" Txt={title} />

          {/* Subtitle */}
          <Paragraph
            Txt={subTitle}
            className=" section-sub-heading-one font-normal opacity-[80] max-w-[889px] text-center !text-[#494949] "
          />
        </div>

        {/* Map */}
        <div className="flex flex-col gap-y-[60px] items-center">
          <div className="flex justify-center flex-row flex-wrap gap-x-[20px] gap-y-5 2xl:gap-y-10">
            {data?.map((blog, idx) => {
              return (
                <BlogCard
                  BgImgUrl={blog?.image}
                  key={idx}
                  title={blog?.title}
                  details={blog?.short_description}
                  date={blog?.created_date}
                  name={blog?.author}
                  ProfileImgUrl={blog?.author_image}
                  slug={blog?.slug}
                  isBlogPage={isBlogPage}
                  isFirst={idx === 0}
                />
              );
            })}
          </div>
          {isBtn && (
            <Link href="/about/news-and-blogs">
              <Button Txt={"Fine More Blog"} className="primary-btn-reverse" />
            </Link>
          )}
        </div>

        {/* Pagination */}
        {isBlogPage && (
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {links?.map((item, idx) => (
              <button
                key={idx}
                onClick={() =>
                  item.url && setActivePage?.(Number(item?.url.split("=")[1]))
                }
                className={`px-3 py-1 rounded border transition-all duration-150 
               ${
                 item?.active
                   ? "bg-primary-blue text-white cursor-pointer"
                   : "bg-white text-gray-700"
               } 
                ${!item.url ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!item.url}
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
            ))}
          </div>
          
        )}
      </div>
    </section>
  );
};

export default BlogSection;
