"use client";
import { useEffect, useRef } from "react";

const page = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const loadHandler = () => {
      window.parent.scrollTo(0, 0);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", loadHandler);
    }

    // Dynamically load the JotForm embed handler script
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.onload = () => {
      // @ts-ignore
      window.jotformEmbedHandler?.(
        "iframe[id='JotFormIFrame-81704545649161']",
        "https://form.jotform.com/"
      );
    };
    document.body.appendChild(script);

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", loadHandler);
      }
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      id="JotFormIFrame-81704545649161"
      title="Ready to Join MORE Realty"
      allow="geolocation; microphone; camera; fullscreen; payment"
      allowTransparency={true}
      src="https://form.jotform.com/morerealtyinc/join-more-realty"
      frameBorder={0}
      style={{
        minWidth: "100%",
        maxWidth: "100%",
      }}
      scrolling="no"
    />
  );
};

export default page;
