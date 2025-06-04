import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container footer-section-container">
        <div className="footer-section-content">
          <div className="footer-section-content-logo">
            <img src="/aceplus-logo1.png" alt="logo" />
          </div>
          <div className="footer-section-content-links">
            <Link href="">Terms & Conditions</Link>
            <Link href="">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
