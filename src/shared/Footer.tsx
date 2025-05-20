import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import React from "react";
import logo from "../assests/footer-logo.png";
import Image from "next/image";
import {
  FacebookLogo,
  InstaSvg,
  LinkdeinSvg,
} from "@/components/SvgContainer/SvgContainer";

const SvgArr = [FacebookLogo, InstaSvg, LinkdeinSvg];
const navLink = [
  {
    title: "Quick Links",
    navLinks: ["ABOUT US", "jOIN MORE REALTY", "NEWS & bLOG", "cONTACT US"],
  },
  {
    title: "Our Service",
    navLinks: ["Buying a Home", "Selling A HOME", "COMMERCIAL", "MORE GIVES"],
  },
  {
    title: "Contact",
    navLinks: [
      "16037 SW Upper Boones Ferry Rd, Portland, OR 97224",
      "Phone: +1(877) 344-6673",
      "Email: careers@morerealty.com",
      "Hours of Operation: 9am-5pm",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="h-auto lg:px-5 3xl:px-0 w-full pt-7 lg:pt-10 xl:pt-20 3xl:pt-[110px] bg-primary-blue">
      <div className="flex flex-col">
        <div className="container flex flex-col gap-y-7 lg:gap-y-10 xl:flex-row gap-x-6 2xl:gap-x-20 3xl:gap-x-[151px] pb-7 lg:pb-10 xl:pb-16 3xl:pb-[121px]">
          {/* Logo and Socials */}
          <div className="flex flex-col gap-y-5 2xl:gap-y-8">
            <Image
              data-aos="fade-up"
              data-aos-delay="100"
              src={logo?.src || logo}
              width={362}
              height={50}
              alt="not found"
              className="w-[150px] lg:w-[200px] 2xl:w-[250px] 3xl:w-[362px] h-[20px] lg:h-[30px] 2xl:h-[35px] 3xl:h-[50px]"
            />

            <div className="flex flex-row gap-x-[9.23px]">
              {SvgArr.map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-9 lg:w-10 h-9 lg:h-10 cursor-pointer flex items-center justify-center border-[1px] border-solid border-white rounded-full"
                >
                  <Icon data-aos="fade-up" data-aos-delay="100" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row justify-between gap-y-6 md:gap-y-7 gap-x-8 2xl:gap-x-10 flex-1">
            {navLink.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-y-3 lg:gap-y-5 w-full">
                <Paragraph Txt={item.title} className="footer-link-title" />
                <ul className="flex flex-col gap-y-2.5">
                  {item?.navLinks?.map((link, linkIdx) => (
                    <li
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className={`${
                        link == "Email: careers@morerealty.com" &&
                        "whitespace-nowrap"
                      } footer-link `}
                      key={linkIdx}
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center h-auto w-full gap-y-6 pb-6">
          <hr className="h-[1px] w-full bg-[#131313] opacity-[0.15]" />
          <p className="footer-para">
            Copyright © construck all right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
