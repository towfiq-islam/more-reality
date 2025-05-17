import Blog from "@/components/AboutUsComponents/Blog";
import Community from "@/components/AboutUsComponents/Community";
import Meet from "@/components/AboutUsComponents/Meet";
import Office from "@/components/AboutUsComponents/Office";
import Partner from "@/components/AboutUsComponents/Partner";

const page = () => {
    return (
        <>
            <Meet/>
            <Office/>
            <Blog/>
            <Community/>
            <Partner/>
        </>
    );
};

export default page;