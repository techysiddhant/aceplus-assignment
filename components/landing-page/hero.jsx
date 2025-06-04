import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-section-background">
      <div className="landing-hero-section-content container">
        <div className="landing-hero-section-content-left">
          <div className="landing-hero-section-content-left-logo">
            <img src="/image.png" alt="logo" />
          </div>
          <h2>
            India's No. 1 Choice for Communicating with Confidence and Speaking
            Correct and Better English.
          </h2>
          <Link href="/download">Download App Now</Link>
        </div>
        <div className="landing-hero-section-content-right">
          <div className="landing-hero-section-content-right-img">
            <Image
              src="/landing-hero-img.png"
              alt="hero-img"
              width={500}
              height={450}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
