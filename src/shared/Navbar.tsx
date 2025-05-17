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
              <li key={idx}>
                {item.name == "About Us" ? (
            <Link
              className={`${
                (pathName === item.path || item.subCategory?.some(sub => pathName === sub.path))
                  ? "nav-link-active"
                  : "nav-link"
              } flex flex-row gap-x-[6px] items-center relative`}
              href={item?.path}
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
                        w-[244px] h-auto py-5 bg-white border-[0.5px] absolute top-0 left-0 mt-10 rounded-[8px] ml-[-50px] border-border-color shadow-lg flex flex-col px-5 ease-in-out duration-150 ${
                          isDropDown ? "opacity-100" : "opacity-0"
                        } `}
                    >
               {item?.subCategory?.map((data, idx) => (
                <li key={idx}>
                  <div
                    className={`block py-2 ${
                      pathName === data.path ? "nav-link-active" : "nav-link"
                    }`}
                  >
                    <Link href={data?.path}>{data.label}</Link>
                  </div>
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