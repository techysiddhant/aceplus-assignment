"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const StickyButtons = () => {
  const [bottomPosition, setBottomPosition] = useState("20px");

  function handleStoreRedirect() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      window.location.href =
        "https://apps.apple.com/in/app/aceplus-speaking-soft-skills/id6742319474";
    } else if (/android/.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.app.aceplus";
    } else {
      // Default to Android if device type cannot be determined
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.app.aceplus";
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer-section");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const newBottom =
        footerTop <= window.innerHeight
          ? `${window.innerHeight - footerTop}px`
          : "20px";

      setBottomPosition(newBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="sticky-buttons-div"
      style={{
        position: "fixed",
        right: "20px",
        bottom: bottomPosition,
        transition: "bottom 0.3s ease-in-out",
      }}
    >
      <div className="sticky-buttons-div-download-btn">
        <button onClick={handleStoreRedirect}>
          <img src="/download-app.svg" alt="" />
        </button>
      </div>
      <div className="sticky-buttons-div-whatsapp-btn">
        <Link
          href="https://api.whatsapp.com/send/?phone=919007858855&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsapp.svg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default StickyButtons;
