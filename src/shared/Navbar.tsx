"use client";
import { useEffect, useRef, useState } from "react";
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
  subCategory?: subCategory[];
}

type subCategory = {
  label: string;
  path: string;
};

const navLinks: navLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Join More Realty",
    path: "/join-more-realty",
  },
  {
    name: "About Us",
    path: "/about",
    subCategory: [
      { label: "Meet the Team", path: "/about/meet-the-team" },
      { label: "Our Offices", path: "/about/our-offices" },
      { label: "News & Blog", path: "/about/news-and-blogs" },
      { label: "MORE Gives", path: "/about/more-gives" },
      { label: "United Real Estate", path: "/about/united-real-state" },
    ],
  },
  {
    name: "Buying a Home",
    path: "/buy-a-home",
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

  const handleNavigate = () => {
    router.push("/contact-us");
  };

  return (
    <nav className=" h-auto py-6 shadow-nav-shadow bg-white w-full sticky top-0 z-50">
      <div className=" container flex flex-row justify-between items-center  ">
        <Image
          data-aos="fade-up"
          data-aos-delay="100"
          onClick={() => {
            router.push("/");
          }}
          src={logo?.src}
          width={108}
          height={52}
          alt="not found"
          className="w-[108px] h-[52px] object-cover cursor-pointer "
        />
        <ul className="flex flex-row justify-between gap-x-[42px]">
          {navLinks.map((item, idx) => {
            return (
              <li
                data-aos="fade-up"
                data-aos-delay="100"
                key={idx}
                className="relative"
              >
                {item.name === "About Us" ? (
                  <div
                    className={`${
                      pathName === item.path ||
                      item.subCategory?.some(sub => pathName === sub.path)
                        ? "nav-link-active"
                        : "nav-link"
                    } flex flex-row gap-x-[6px] items-center cursor-pointer`}
                    onClick={e => {
                      e.stopPropagation();
                      e.preventDefault();
                      setisDropDown(!isDropDown);
                    }}
                  >
                    <span>{item.name}</span>
                    <DropdownSvg />
                  </div>
                ) : (
                  <Link
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className={`${
                      pathName == item?.path ? "nav-link-active" : "nav-link"
                    }`}
                    href={item?.path}
                  >
                    {item?.name}
                  </Link>
                )}

                {/* Dropdown menu only for "About Us" */}
                {item.name === "About Us" && (
                  <ul
                    ref={dropdownRef}
                    className={`w-[244px] h-auto py-5 bg-white border-[0.5px] absolute top-full left-0 mt-2 rounded-[8px] border-border-color shadow-lg flex flex-col px-5 ease-in-out duration-150 ${
                      isDropDown ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    {item?.subCategory?.map((data, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          className={`block py-2 ${
                            pathName === data.path
                              ? "nav-link-active"
                              : "nav-link"
                          }`}
                          href={data.path}
                          onClick={() => setisDropDown(false)}
                        >
                          {data.label}
                        </Link>
                        {subIdx !== item.subCategory!.length - 1 && (
                          <hr className="border-gray-400" />
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <Button
          onClick={handleNavigate}
          Txt={"Contact Us"}
          className="primary-btn"
        />
      </div>
    </nav>
  );
};

export default Navbar;
