import Button from "@/components/Tags/Button/Button";
import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import sky from "../../../assests/blog/sky.jpg";
import cute_house from "../../../assests/blog/cute-house.jpg";
import asthtetic from "../../../assests/blog/asthetic.jpg";
import white_shirt_man from "../../../assests/blog/white-shirt-man.jpg";
import BlogCard from "@/components/cards/BlogCard";

interface BlogCardProps {
  BgImgUrl: string | any;
  title: string;
  details: string;
  name: string;
  ProfileImgUrl: string | any;
  date: string;
  Variant: "small" | "full";
}

const blogData: BlogCardProps[] = [
  {
    BgImgUrl: sky,
    title: "Title: Blog Title",
    details: "Blog short details about the blog nothing more",
    name: "Charli Curs",
    ProfileImgUrl: white_shirt_man,
    date: "May 10, 2025",
    Variant: "small",
  },
  {
    BgImgUrl: cute_house,
    title: "Title: Blog Title",
    details: "Blog short details about the blog nothing more",
    name: "Sadia Nawar",
    ProfileImgUrl: asthtetic,
    date: "May 12, 2025",
    Variant: "small",
  },
  {
    BgImgUrl: asthtetic,
    title: "Title: Blog Title",
    details: "Blog short details about the blog nothing more",
    name: "Rafiul Islam",
    ProfileImgUrl: white_shirt_man,
    date: "May 14, 2025",
    Variant: "small",
  },
];

const BlogSection = () => {
  return (
    <div className="container h-auto py-24 cursor-pointer flex flex-col gap-y-[60px]">
      <div className="flex flex-col items-center gap-y-2 ">
        <Heading
          Variant="h4"
          Txt={"Latest Blog Post"}
          className="testimonial-heading"
        />
        <Paragraph
          Txt={ "Stay informed with expert tips, market insights, and home buying guides — everything you need to make smart real estate decisions."}
          className=" section-sub-heading-one font-normal opacity-[80] max-w-[889px] text-center !text-[#494949] "
        />
      </div>
      <div className="flex flex-col gap-y-[60px] items-center">
        <div className="flex flex-row flex-wrap  gap-x-[20px] gap-y-10 ">
          {blogData?.map((blog, idx) => {
            return (
              <BlogCard
                key={idx}
                BgImgUrl={blog.BgImgUrl}
                title={blog.title}
                details={blog.details}
                date={blog.date}
                name={blog.name}
                ProfileImgUrl={blog.ProfileImgUrl}
                Variant={blog.Variant}
              />
            );
          })}
        </div>
        <Button Txt={"Fine More Blog"} className="primary-btn-reverse" />
      </div>
    </div>
  );
};

export default BlogSection;
