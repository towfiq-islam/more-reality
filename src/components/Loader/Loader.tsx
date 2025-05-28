"use client";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

export function Loader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Run once on mount to set the initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <HashLoader color="#63be60" size={isMobile ? 50 : 60} />;
}