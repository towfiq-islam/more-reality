import React from "react";
import hero from "../../assests/hero.jpg";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";

const CommonHeroBanner = () => {
  return (
    <div
      className="h-[780px] w-screen  "
      style={{
        backgroundImage: `linear-gradient(#00000099, #00000099), url(${hero.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container flex flex-col items-center pt-[200px] gap-y-5  ">
        <Heading
          Variant="h1"
          Txt={"Homes Made for Living, Investments Made for Life"}
          className="primary-hero-heading"
        />
        <Paragraph
          Txt={
            "Browse thousands of properties for sale and rent, handpicked to match your lifestyle and budget."
          }
          className="primary-hero-sub-heading"
        />
      </div>
    </div>
  );
};

export default CommonHeroBanner;
