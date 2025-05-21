import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <div className="explore-section">
      <div className="container explore-section-div">
        <div className="explore-section-content">
          <h2>
            Unlock Your Child&apos;s Potential with <span>ACEplus</span>
          </h2>
          <p>
            We encourage the student to enjoy their journey of self growth
            through the use of friendly and interactive videos,
            scientifically-crafted exercises, and colourful learning-based
            games, reinforced by LIVE feedback sessions by specially-trained
            skill coaches.
          </p>
          <div className="explore-section-content-button">
            <button>Explore more</button>
          </div>
        </div>
        <div className="explore-section-image">
          <div className="explore-section-image-qr-code">
            <Image
              src="/qr-code.svg"
              alt="explore-section-image-1"
              width={180}
              height={180}
            />
          </div>
          <div className="explore-section-image-text-mobile">
            <div className="explore-section-image-div-text">
              <img src="/arrow-up.svg" alt="arrow-up-right" />
              <p className="explore-section-image-div-text-android">
                Scan to download on <span>Android</span>
              </p>
            </div>
            <p className="explore-section-image-text">
              Scan to download the app
            </p>
            <div className="explore-section-image-div-text">
              <p className="explore-section-image-div-text-ios">
                Scan to download on <span>iOS</span>
              </p>
              <img src="/arrow-down.svg" alt="arrow-down-right" />
              {/* <div className="explore-section-image-div-text-arrow-div">
              </div> */}
            </div>
          </div>
          <div className="explore-section-image-qr-code">
            <Image
              src="/ios-qr.svg"
              alt="explore-section-image-1"
              width={180}
              height={180}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
