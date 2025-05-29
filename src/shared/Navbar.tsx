"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DropdownSvg } from "@/components/SvgContainer/SvgContainer";
import { usePathname } from "next/navigation";
import Button from "@/components/Tags/Button/Button";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { useSiteSettings } from "@/hooks/queries";
import { Loader } from "@/components/Loader/Loader";

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
  { name: "Home", path: "/" },
  {
    name: "Join MORE Realty",
    path: "/join-more-realty",
    subCategory: [{ label: "Click to apply", path: "/join-more-realty/apply" }],
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
  { name: "Buying a Home", path: "/buy-a-home" },
  { name: "Selling a Home", path: "/selling-a-home" },
  { name: "Commercial", path: "/commercial" },
];

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [isDropDown, setisDropDown] = useState(false);
  const [isJoinDropdown, setIsJoinDropdown] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isJoinMobileDropdownOpen, setIsJoinMobileDropdownOpen] =
    useState(false);

  const dropdownRef = useRef<HTMLUListElement>(null);
  const joinDropdownRef = useRef<HTMLUListElement>(null);

  const { data: siteSettingsData, isLoading } = useSiteSettings();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setisDropDown(false);
      }
      if (
        joinDropdownRef.current &&
        !joinDropdownRef.current.contains(event.target as Node)
      ) {
        setIsJoinDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      setIsMobileDropdownOpen(false);
      setIsJoinMobileDropdownOpen(false);
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  const handleNavigate = () => {
    setOpen(false);
    router.push("/contact-us");
  };

  const handleLogoClick = () => {
    setOpen(false);
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <nav className="h-auto lg:px-5 3xl:px-0 py-3 lg:py-5 2xl:py-6 shadow-nav-shadow bg-white w-full sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Image
          onClick={handleLogoClick}
          src={`${process.env.NEXT_PUBLIC_SITE_URL}/${siteSettingsData?.logo}`}
          width={108}
          height={52}
          alt="Logo"
          className="w-[90px] xl:w-[108px] h-[45px] xl:h-[52px] object-cover cursor-pointer"
        />

        {/* Desktop Nav */}
        <ul className="hidden 2xl:flex flex-row justify-between gap-x-8 3xl:gap-x-10">
          {navLinks.map((item, idx) => (
            <li key={idx} className="relative">
              {item.name === "About Us" || item.name === "Join MORE Realty" ? (
                <div className="flex items-center gap-x-[6px] relative">
                  <Link
                    className={`${
                      pathName === item.path ||
                      item.subCategory?.some(sub => pathName === sub.path)
                        ? "nav-link-active"
                        : "nav-link"
                    }`}
                    href={item.path}
                  >
                    {item.name}
                  </Link>
                  <div
                    onClick={e => {
                      e.preventDefault();
                      e.stopPropagation();
                      item.name === "About Us"
                        ? setisDropDown(prev => !prev)
                        : setIsJoinDropdown(prev => !prev);
                    }}
                    className="cursor-pointer"
                  >
                    <DropdownSvg />
                  </div>
                  <ul
                    ref={
                      item.name === "About Us" ? dropdownRef : joinDropdownRef
                    }
                    className={`w-[244px] h-auto py-5 bg-white border-[0.5px] absolute top-full left-0 mt-2 rounded-[8px] border-border-color shadow-lg flex flex-col px-5 ease-in-out duration-150 z-50 ${
                      (item.name === "About Us" && isDropDown) ||
                      (item.name === "Join MORE Realty" && isJoinDropdown)
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    {item.subCategory?.map((sub, subIdx) => (
                      <li
                        key={subIdx}
                        onClick={() => {
                          setisDropDown(false);
                          setIsJoinDropdown(false);
                        }}
                      >
                        <Link
                          className={`block py-2 ${
                            pathName === sub.path
                              ? "nav-link-active"
                              : "nav-link"
                          }`}
                          href={sub.path}
                        >
                          {sub.label}
                        </Link>
                        {subIdx !== (item.subCategory?.length ?? 0) - 1 && (
                          <hr className="border-gray-400" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  className={`${
                    pathName === item.path ? "nav-link-active" : "nav-link"
                  }`}
                  href={item.path}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <Button
          onClick={handleNavigate}
          Txt="Contact Us"
          className="primary-btn hidden 2xl:block"
        />

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!isOpen)}
          className="2xl:hidden w-9 lg:w-10 h-9 lg:h-10 rounded bg-primary-blue text-white grid place-items-center cursor-pointer"
        >
          <FaBars className="text-xl lg:text-2xl" />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 2xl:hidden z-[999] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } duration-500 transition-transform fixed top-0 left-0 bg-white p-6 lg:p-7 shadow-lg overflow-y-auto border-r border-gray-200 max-h-screen min-h-screen w-[250px] lg:w-[270px] z-[9999] 2xl:hidden`}
      >
        {/* Mobile Logo */}
        <Image
          onClick={handleLogoClick}
          src={`${process.env.NEXT_PUBLIC_SITE_URL}/${siteSettingsData?.logo}`}
          width={108}
          height={52}
          alt="Logo"
          className="w-[108px] h-[52px] object-cover cursor-pointer mb-10"
        />

        {/* Mobile Links */}
        <ul className="flex flex-col gap-6">
          {navLinks.map((item, idx) => (
            <li key={idx}>
              {item.name === "About Us" || item.name === "Join MORE Realty" ? (
                <div className="flex flex-col gap-2 relative">
                  <div className="flex items-center justify-between">
                    <Link
                      onClick={() => setOpen(false)}
                      className={`${
                        pathName === item.path ||
                        item.subCategory?.some(sub => pathName === sub.path)
                          ? "nav-link-active"
                          : "nav-link"
                      }`}
                      href={item.path}
                    >
                      {item.name}
                    </Link>
                    <div
                      onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        item.name === "About Us"
                          ? setIsMobileDropdownOpen(prev => !prev)
                          : setIsJoinMobileDropdownOpen(prev => !prev);
                      }}
                      className="cursor-pointer"
                    >
                      <DropdownSvg />
                    </div>
                  </div>
                  {(item.name === "About Us" && isMobileDropdownOpen) ||
                  (item.name === "Join MORE Realty" &&
                    isJoinMobileDropdownOpen) ? (
                    <ul className="pl-4 flex flex-col gap-2 mt-2">
                      {item.subCategory?.map((sub, subIdx) => (
                        <li key={subIdx} onClick={() => setOpen(false)}>
                          <Link
                            className={`block py-1 ${
                              pathName === sub.path
                                ? "nav-link-active !text-base"
                                : "nav-link !text-base"
                            }`}
                            href={sub.path}
                          >
                            {sub.label}
                          </Link>
                          {subIdx !== (item.subCategory?.length ?? 0) - 1 && (
                            <hr className="border-gray-400" />
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : (
                <Link
                  onClick={() => setOpen(false)}
                  className={`${
                    pathName === item.path ? "nav-link-active" : "nav-link"
                  }`}
                  href={item.path}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Contact Button */}
        <Button
          onClick={handleNavigate}
          Txt="Contact Us"
          className="primary-btn mt-10 !w-full !block"
        />
      </div>
    </nav>
  );
};

export default Navbar;
