"use client";
import React, { useEffect, useRef, useState } from "react";
import logo from "../assests/logo.png";
import Image from "next/image";
import Link from "next/link";
import { DropdownSvg } from "@/components/SvgContainer/SvgContainer";
import { usePathname } from "next/navigation";
import Button from "@/components/Tags/Button/Button";
import { useRouter } from "next/navigation";

interface navLink {
  name: string;
  path: string;
  subCategory?: string[];
}

const navLinks: navLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Join More Realty",
    path: "/join",
  },
  {
    name: "About Us",
    path: "/about",
    subCategory: [
      "Meeting the Team",
      "Our Offices",
      "News & Blog",
      "MORE Gives",
      "United Real Estate",
    ],
  },
  {
    name: "Buying a Home",
    path: "/buy",
  },
  {
    name: "Selling a Home",
    path: "/sell",
  },
  {
    name: "Commercial",
    path: "/commercial",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isDropDown, setisDropDown] = useState(Boolean || undefined);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setisDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className=" h-auto py-7 shadow-nav-shadow bg-white w-full sticky top-0 z-10">
      <div className=" container flex flex-row justify-between items-center  ">
        <Image
          onClick={() => {
            router.push("/");
          }}
          src={logo?.src}
          width={108}
          height={52}
          alt="not found"
          className="w-[108px] h-[52px] object-cover cursor-pointer "
        />
        <ul className="flex flex-row justify-between gap-x-[42px] ">
          {navLinks.map((item, idx) => {
            return (
              <li key={idx}>
                {item.name == "About Us" ? (
                  <Link
                    className={`${
                      pathName == item?.path ? "nav-link-active" : "nav-link  "
                    } flex flex-row gap-x-[6px] items-center relative  `}
                    href={""}
                  >
                    {item.name}

                    <div
                      onClick={() => {
                        setisDropDown(!isDropDown);
                      }}
                    >
                      <DropdownSvg />
                    </div>
                    <ul
                      ref={dropdownRef}
                      className={`
                        w-[244px] h-auto py-5 bg-white border-[0.5px] absolute top-0 left-0 mt-10 rounded-[8px] ml-[-50px] border-border-color shadow-md flex flex-col px-5 ease-in-out duration-150 ${
                          isDropDown ? "opacity-100" : "opacity-0"
                        } `}
                    >
                      {item?.subCategory?.map((data, idx) => (
                        <li key={idx}>
                          <div className="nav-link block py-2">{data}</div>
                          {idx !== item.subCategory!.length - 1 && (
                            <hr className="border-gray-400" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </Link>
                ) : (
                  <Link
                    className={`${
                      pathName == item?.path ? "nav-link-active" : "nav-link"
                    }`}
                    href={item?.path}
                  >
                    {item?.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <Button Txt={"Contact Us"} className="primary-btn" />
      </div>
    </nav>
  );
};

export default Navbar;
