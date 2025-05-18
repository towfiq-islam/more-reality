"use client";
import "aos/dist/aos.css";
import "./aos-custom.css"
import React, { useEffect } from "react";
import AOS from "aos";

function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);
  return <>{children}</>;
}

export default AosProvider;
