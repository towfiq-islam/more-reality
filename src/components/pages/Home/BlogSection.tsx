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
  id: number;
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
    id: 1,
  },
  {
    BgImgUrl: cute_house,
    title: "Title: Blog Title",
    details: "Blog short details about the blog nothing more",
    name: "Sadia Nawar",
    ProfileImgUrl: asthtetic,
    date: "May 12, 2025",
    Variant: "small",
    id: 2,
  },
  {
    BgImgUrl: asthtetic,
    title: "Title: Blog Title",
    details: "Blog short details about the blog nothing more",
    name: "Rafiul Islam",
    ProfileImgUrl: white_shirt_man,
    date: "May 14, 2025",
    Variant: "small",
    id: 3,
  },
];

const blogDataList: BlogCardProps[] = [
  {
    id: 1,
    BgImgUrl: sky,
    title: "Title: Exploring the Skies",
    details:
      "An insightful look into the beauty of the sky and how it inspires creativity.",
    name: "Charli Curs",
    ProfileImgUrl: white_shirt_man,
    date: "May 10, 2025",
    Variant: "full",
  },
  {
    id: 2,
    BgImgUrl: cute_house,
    title: "Title: Living in Aesthetic Homes",
    details:
      "Discover how cozy and creative houses affect mood and productivity.",
    name: "Sadia Nawar",
    ProfileImgUrl: asthtetic,
    date: "May 12, 2025",
    Variant: "small",
  },
  {
    id: 3,
    BgImgUrl: asthtetic,
    title: "Title: Urban Aesthetic Lifestyle",
    details:
      "A dive into the trending aesthetic lifestyle and how it changes design choices.",
    name: "Rafiul Islam",
    ProfileImgUrl: white_shirt_man,
    date: "May 14, 2025",
    Variant: "small",
  },
  {
    id: 4,
    BgImgUrl: sky,
    title: "Title: Cloud Watching as a Hobby",
    details:
      "Looking up can be therapeutic. Learn how people find peace in the clouds.",
    name: "Elina Borse",
    ProfileImgUrl: white_shirt_man,
    date: "May 15, 2025",
    Variant: "small",
  },
  {
    id: 5,
    BgImgUrl: cute_house,
    title: "Title: Architecture of Calm",
    details:
      "Minimalist and calm-inducing architecture explained through real projects.",
    name: "Zidan Khan",
    ProfileImgUrl: asthtetic,
    date: "May 16, 2025",
    Variant: "small",
  },
  {
    id: 6,
    BgImgUrl: asthtetic,
    title: "Title: Pastel Power",
    details:
      "How pastel colors became the language of modern blog design aesthetics.",
    name: "Nabila Noor",
    ProfileImgUrl: white_shirt_man,
    date: "May 17, 2025",
    Variant: "small",
  },
  {
    id: 7,
    BgImgUrl: sky,
    title: "Title: Sky Photography Tips",
    details: "Capture breathtaking skies with just your phone – here’s how.",
    name: "Ratul Farid",
    ProfileImgUrl: asthtetic,
    date: "May 18, 2025",
    Variant: "small",
  },
  {
    id: 8,
    BgImgUrl: cute_house,
    title: "Title: Cottagecore Living",
    details:
      "Cottagecore is more than a trend – it’s a lifestyle. Here's why it matters.",
    name: "Samira Jahan",
    ProfileImgUrl: white_shirt_man,
    date: "May 19, 2025",
    Variant: "small",
  },
  {
    id: 9,
    BgImgUrl: asthtetic,
    title: "Title: Styling with Neutrals",
    details:
      "Neutral tones never go out of style. Here’s how to use them well.",
    name: "Imran Qureshi",
    ProfileImgUrl: asthtetic,
    date: "May 20, 2025",
    Variant: "small",
  },
  {
    id: 10,
    BgImgUrl: sky,
    title: "Title: Sunset Diaries",
    details: "Sunsets and reflections — visual poetry in everyday life.",
    name: "Nusrat Jahan",
    ProfileImgUrl: white_shirt_man,
    date: "May 21, 2025",
    Variant: "small",
  },
];

interface BlogSectionProps {
  title?: string;
  subTitle?: string;
  isFullArr?: boolean;
  isBtn?: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  title = "Latest Blog Post",
  subTitle = "Stay informed with expert tips, market insights, and home buying guides — everything you need to make smart real estate decisions.",
  isFullArr = false,
  isBtn = true,
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
        {isFullArr ? (
          <div className="flex flex-col gap-y-[60px] items-center">
            <div className="flex flex-row flex-wrap gap-x-[20px] gap-y-10 ">
              {blogDataList?.map((blog, idx) => {
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
                    id={blog.id}
                  />
                );
              })}
            </div>
            {isBtn && (
              <Button Txt={"Fine More Blog"} className="primary-btn-reverse" />
            )}
          </div>
        ) : (
          <div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-7 lg:mb-10">
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
                    id={blog.id}
                  />
                );
              })}
            </div>
            <div className="flex justify-center items-center">
              {isBtn && (
                <Button
                  Txt={"Fine More Blog"}
                  className="primary-btn-reverse"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
