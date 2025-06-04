"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isSticky ? "sticky" : ""}`}
      style={{
        position: isSticky ? "fixed" : "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "white",
        boxShadow: isSticky ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div className="container ">
        <div className="landing-page-navbar">
          <div className="navbar-logo-div">
            <Link href="/" className="navbar-logo">
              <Image
                src="/logo.svg"
                alt="logo"
                width={185}
                height={100}
                className="navbar-logo-img navbar-logo-img-landing"
              />
            </Link>
          </div>
          <div className="download-btn-div">
            <button className="download-btn">
              <Link href="/download">Download App</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-mobile-menu-div">
        <div className="navbar-mobile-menu-icon-div">
          <Image
            src="/menu-icon.svg"
            alt="menu"
            width={50}
            height={50}
            className="navbar-mobile-menu-icon"
          />
        </div>
        <div className="navbar-logo-div">
          <Link href="/" className="navbar-logo">
            <Image
              src="/logo.svg"
              alt="logo"
              width={120}
              height={40}
              className="navbar-logo-img-phone"
            />
          </Link>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Navbar;
