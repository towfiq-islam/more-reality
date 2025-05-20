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
    <footer className="h-auto w-full pt-[110px] bg-primary-blue">
      <div className="flex flex-col">
        <div className="container flex flex-row gap-x-[151px] pb-[121px]">
          {/* Logo and Socials */}
          <div className="flex flex-col gap-y-8">
            <Image
              data-aos="fade-up"
              data-aos-delay="100"
              src={logo?.src || logo}
              width={362}
              height={50}
              alt="not found"
              className="w-[362px] h-[50px] object-cover"
            />

            <div className="flex flex-row gap-x-[9.23px]">
              {SvgArr.map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 cursor-pointer flex items-center justify-center border-[1px] border-solid border-white rounded-full"
                >
                  <Icon data-aos="fade-up" data-aos-delay="100" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-row justify-between gap-x-10 flex-1">
            {navLink.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-y-5 w-full">
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
