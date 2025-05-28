"use client";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import {
  FacebookLogo,
  InstaSvg,
  LinkdeinSvg,
} from "@/components/SvgContainer/SvgContainer";
import { useSiteSettings, useSocialLinks } from "@/hooks/queries";
import Link from "next/link";

const Footer = () => {
  const { data: siteSettingsData } = useSiteSettings();
  const { data: socialLinks } = useSocialLinks();

  const navLink = [
    {
      title: "Quick Links",
      navLinks: [
        {
          label: "ABOUT US",
          path: "/about",
        },
        {
          label: "JOIN MORE REALTY",
          path: "/join-more-realty",
        },
        {
          label: "NEWS & bLOG",
          path: "/news-and-blogs",
        },
        {
          label: "CONTACT US",
          path: "/contact-us",
        },
      ],
    },
    {
      title: "Our Service",
      navLinks: [
        {
          label: "Buying a Home",
          path: "/buying-a-home",
        },
        {
          label: "Selling A HOME",
          path: "/selling-a-home",
        },
        {
          label: "COMMERCIAL",
          path: "/commercial",
        },
        {
          label: "MORE GIVES",
          path: "/more-gives",
        },
      ],
    },
    {
      title: "Contact",
      navLinks: [
        {
          label: siteSettingsData?.address
            ? typeof siteSettingsData.address === "string"
              ? parse(siteSettingsData.address)
              : siteSettingsData.address
            : "Address not available",
          path: "",
        },
        {
          label: `Phone: ${siteSettingsData?.phone}`,
          path: "",
        },
        {
          label: `Email: ${siteSettingsData?.email}`,
          path: "",
        },
        {
          label: `Hours of Operation: ${siteSettingsData?.opening_hour}`,
          path: "",
        },
      ],
    },
  ];

  return (
    <footer className="h-auto lg:px-5 3xl:px-0 w-full pt-7 lg:pt-10 xl:pt-20 3xl:pt-[110px] bg-primary-blue">
      <div className="flex flex-col container">
        <div className="flex flex-col gap-y-7 lg:gap-y-10 xl:flex-row gap-x-6 2xl:gap-x-20 3xl:gap-x-[151px] pb-7 lg:pb-10 xl:pb-16 3xl:pb-[121px]">
          {/* Logo and Socials */}
          <div className="flex flex-col gap-y-5 2xl:gap-y-8">
            <Image
              data-aos="fade-up"
              data-aos-delay="100"
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/${siteSettingsData?.footer_logo}`}
              width={362}
              height={50}
              alt="not found"
              className="w-[150px] lg:w-[200px] 2xl:w-[250px] 3xl:w-[362px] h-[20px] lg:h-[30px] 2xl:h-[35px] 3xl:h-[50px]"
            />
            {/* data-aos="fade-up" data-aos-delay="100" */}
            <div className="flex flex-row gap-x-[9.23px]">
              {socialLinks?.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="w-9 lg:w-10 h-9 lg:h-10 cursor-pointer flex items-center justify-center border-[1px] border-solid border-white rounded-full"
                >
                  <a target="_blank" href={item?.profile_link}>
                    {item?.social_media === "facebook" && <FacebookLogo />}
                    {item?.social_media === "instagram" && <InstaSvg />}
                    {item?.social_media === "linkedin" && <LinkdeinSvg />}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row justify-between gap-y-6 md:gap-y-7 gap-x-8 2xl:gap-x-10 flex-1">
            {navLink.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-y-3 lg:gap-y-5 w-full"
              >
                <Paragraph Txt={item.title} className="footer-link-title" />
                <ul className="flex flex-col gap-y-2.5">
                  {item?.navLinks?.map((link, linkIdx) => (
                    <li
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className={`footer-link `}
                      key={linkIdx}
                    >
                      <Link href={link?.path}>{link?.label}</Link>
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
          <p className="footer-para">{siteSettingsData?.copyright_text}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
