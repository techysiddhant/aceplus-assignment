import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="">
      <nav className="container navbar">
        <div className="navbar-logo-div">
          <Link href="/" className="navbar-logo">
            <Image
              src="/logo.svg"
              alt="logo"
              width={185}
              height={100}
              className="navbar-logo-img"
            />
          </Link>
        </div>
        <div className="navbar-menu-div">
          <Link href="/" className="navbar-menu-link">
            Home
          </Link>
          <Link href="/" className="navbar-menu-link">
            Guru Speak
          </Link>
          <div>
            <Link href="/" className="navbar-menu-link navbar-menu-link-arrow">
              ACEplus Zones{" "}
              <span>
                <img src="/arrow.svg" alt="arrow" />
              </span>
            </Link>
          </div>
          <Link href="/" className="navbar-menu-link">
            ACEplus Dictionary
          </Link>
          <Link href="/" className="navbar-menu-link">
            About Us
          </Link>
          <Link href="/" className="navbar-menu-link">
            Contact Us
          </Link>
          <Link href="/" className="navbar-menu-link">
            FAQs
          </Link>
        </div>
        <div className="download-btn-div">
          <button className="download-btn">Download App</button>
        </div>
      </nav>
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
