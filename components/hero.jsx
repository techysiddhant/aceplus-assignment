"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const Hero = () => {
  const [platform, setPlatform] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Detect platform
    const userAgent = window.navigator.userAgent.toLowerCase();
    console.log(userAgent);
    if (userAgent?.startsWith("win")) {
      setPlatform("windows");
    } else if (userAgent?.startsWith("mac")) {
      setPlatform("mac");
    } else {
      setPlatform("other");
    }
    // fetchBuilds();
  }, []);
  const handleDownload = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://dev.activity.api.aceplus.in/web/dashboard/builds",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch builds with status: ${response.status}`
        );
      }

      const data = await response.json();
      if (data.status && data.data) {
        const buildData = data.data;
        const currentBuild = buildData.find(
          (build) => build.build_type === platform
        );
        if (!currentBuild) return null;
        const a = document.createElement("a");
        a.href = currentBuild.build_url;
        a.download = currentBuild.build_url.substring(
          currentBuild.build_url.lastIndexOf("/") + 1
        );
        // a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.error("Error fetching builds:", err);
      setError(`Failed to fetch builds: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && (
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <div className="hero-section">
        <div className="container">
          <div className="hero-section-content">
            <h1>Learn Anytime, Anywhere</h1>
            <p>Join our 3,000+ happy student users.</p>
          </div>
        </div>
        <div className="hero-section-images">
          <div className="container hero-section-images-div">
            <div className="hero-mobile-app-div">
              <div className="hero-mobile-app-div-image">
                <Image
                  src="/hero-phone.svg"
                  alt="mobile-app-icon"
                  width={300}
                  height={100}
                />
              </div>
              <p className="hero-mobile-app-div-title">ACEplus on Mobile</p>
              <div className="hero-mobile-app-download-div">
                <div className="hero-mobile-app-download-div-android">
                  <Image
                    src="/android-icon.svg"
                    alt="android-icon"
                    width={24}
                    height={24}
                  />
                  <Link href="https://play.google.com/store/apps/details?id=com.app.aceplus">
                    Download on the Google Play
                  </Link>
                </div>
                <div className="hero-mobile-app-download-div-apple">
                  <Image
                    src="/apple-icon.svg"
                    alt="apple-icon"
                    width={24}
                    height={24}
                  />
                  <Link href="https://apps.apple.com/in/app/aceplus-speaking-soft-skills/id6742319474">
                    Download on the Apple Store
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero-desktop-app-div">
              <div className="hero-desktop-app-div-image">
                <Image
                  src="/hero-mac.svg"
                  alt="desktop-image"
                  width={300}
                  height={200}
                />
              </div>
              <p className="hero-desktop-app-div-title">ACEplus on Desktop</p>
              <div className="hero-mobile-app-download-div">
                <div className="hero-mobile-app-download-div-windows">
                  <Image
                    src="/window-icon.svg"
                    alt="windows-icon"
                    width={24}
                    height={24}
                  />
                  <button onClick={handleDownload}>Download on Windows</button>
                </div>
                <div className="hero-mobile-app-download-div-mac">
                  <Image
                    src="/apple-icon.svg"
                    alt="apple-icon"
                    width={24}
                    height={24}
                  />
                  <button onClick={handleDownload}>Download on Mac</button>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-desktop-app-download-div container">
            <div className="hero-mobile-app-download-div-desktop">
              <div className="hero-mobile-app-download-div-android">
                <Image
                  src="/android-icon.svg"
                  alt="android-icon"
                  width={24}
                  height={24}
                />
                <Link href="https://play.google.com/store/apps/details?id=com.app.aceplus">
                  Download on the Google Play
                </Link>
              </div>
              <div className="hero-mobile-app-download-div-apple">
                <Image
                  src="/apple-icon.svg"
                  alt="apple-icon"
                  width={24}
                  height={24}
                />
                <Link href="https://apps.apple.com/in/app/aceplus-speaking-soft-skills/id6742319474">
                  Download on the Apple Store
                </Link>
              </div>
            </div>
            <div className="hero-mobile-app-download-div-desktop hero-mobile-app-download-div-desktop-2">
              <div className="hero-mobile-app-download-div-windows">
                <Image
                  src="/window-icon.svg"
                  alt="windows-icon"
                  width={24}
                  height={24}
                />
                <button onClick={handleDownload}>Download on Windows</button>
              </div>
              <div className="hero-mobile-app-download-div-mac">
                <Image
                  src="/apple-icon.svg"
                  alt="apple-icon"
                  width={24}
                  height={24}
                />
                <button onClick={handleDownload}>Download on Mac</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
