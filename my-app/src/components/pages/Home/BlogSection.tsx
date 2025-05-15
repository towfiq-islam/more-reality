import Button from "@/components/Tags/Button/Button";
import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import sky from "../../../assests/blog/sky.jpg";
import cute_house from "../../../assests/blog/cute-house.jpg";
import asthtetic from "../../../assests/blog/asthetic.jpg";
import sun_moon from "../../../assests/blog/sun-moon.jpg";
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
    title: "Mastering React for Scalable Frontend Development",
    details:
      "Discover best practices, performance tips, and architectural patterns to take your React apps to the next level.",
    name: "Md. Abib Ahmed Dipto",
    ProfileImgUrl: white_shirt_man,
    date: "May 10, 2025",
    Variant: "small",
  },
  {
    BgImgUrl: cute_house,
    title: "Demystifying Node.js Event Loop",
    details:
      "Understand how asynchronous code execution works under the hood in Node.js with real-world examples.",
    name: "Sadia Nawar",
    ProfileImgUrl: asthtetic,
    date: "May 12, 2025",
    Variant: "small",
  },
  {
    BgImgUrl: asthtetic,
    title: "CSS Grid vs Flexbox: When and Why",
    details:
      "A practical guide to choosing the right layout tool for responsive and maintainable designs.",
    name: "Rafiul Islam",
    ProfileImgUrl: white_shirt_man,
    date: "May 14, 2025",
    Variant: "small",
  },
];

const BlogSection = () => {
  return (
    <div className="container h-auto py-[120px] cursor-pointer flex flex-col gap-y-[60px]">
      <div className="flex flex-col items-center gap-y-2 ">
        <Heading
          Variant="h4"
          Txt={"What our customer are saying"}
          className="testimonial-heading"
        />
        <Paragraph
          Txt={
            "Stay informed with expert tips, market insights, and home buying guides — everything you need to make smart real estate decisions."
          }
          className=" section-sub-heading-one font-normal opacity-[80] max-w-[889px] text-center !text-[#494949] "
        />
      </div>
      <div className="flex flex-col gap-y-[60px] items-center">
        <div className="flex flex-row flex-wrap  gap-x-[20px] gap-y-10 ">
          {blogData.map((blog, idx) => {
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
