import React from "react";

const Features = () => {
  return (
    <div className="features-section">
      <div className="container">
        <h2 className="features-section-title">
          Engaging Features for effective learning
        </h2>
        <div className="features-section-content-mb">
          <div className="features-section-content-item-mb">
            <div className="features-section-content-item-img-1-mb ">
              <img
                src="/interactive-mobile.svg"
                alt=""
                className="features-section-content-item-img-1-mobile"
              />
            </div>
            <p className="features-section-content-item-title">
              Interactive Videos
            </p>
          </div>
          <div className="features-section-content-item-mb">
            <div className="features-section-content-item-img-2-mb">
              <img src="/game-based.svg" alt="" />
            </div>
            <p className="features-section-content-item-title title-2">
              Game-based Learning
            </p>
          </div>
          <div className="features-section-content-item-mb">
            <div className="features-section-content-item-img-3-mb">
              <img
                src="/live-free-mobile.svg"
                alt=""
                className="features-section-content-item-img-3-mobile"
              />
            </div>
            <p className="features-section-content-item-title  title-3">
              LIVE Feedback Sessions
            </p>
          </div>
        </div>
        <div className="features-section-content-wb">
          <div className="features-section-content-item-wb">
            <div className="features-section-content-item-img-1-wb">
              <img src="/interactive.svg" alt="" />
              <div className="features-section-content-item-img-1-bg"></div>
            </div>
            <p className="features-section-content-item-title">
              Interactive Videos
            </p>
          </div>
          <div className="features-section-content-item-wb">
            <div className="features-section-content-item-img-2-wb">
              <img src="/game-based.svg" alt="" />
            </div>
            <p className="features-section-content-item-title">
              Game-based Learning
            </p>
          </div>
          <div className="features-section-content-item-wb">
            <div className="features-section-content-item-img-3-wb">
              <img src="/live-free.svg" alt="" />
              <div className="features-section-content-item-img-3-bg"></div>
            </div>
            <p className="features-section-content-item-title">
              LIVE Feedback Sessions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
