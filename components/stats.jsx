import Image from "next/image";
import React from "react";

const Stats = () => {
  return (
    <div className="stats-section">
      <div className="container stats-section-container">
        <div className="stats-section-content">
          <p className="stats-section-content-text">
            ACEplus is an interactive spoken English, life skills and
            confidence-building App, which will help your child develop 5 key
            21st-century success skills.
          </p>
          <div className="stats-section-content-stats">
            <div>
              <p className="stats-section-content-stats-number">5,000+</p>
              <p className="stats-section-content-stats-text">Schools</p>
            </div>
            <div>
              <p className="stats-section-content-stats-number">100+</p>
              <p className="stats-section-content-stats-text">
                Cities Worldwide
              </p>
            </div>
            <div>
              <p className="stats-section-content-stats-number">15 Lakhs+</p>
              <p className="stats-section-content-stats-text">Students</p>
            </div>
          </div>
        </div>
        <div className="stats-section-image">
          <Image
            src="/stats-1.svg"
            alt="stats-image"
            width={600}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
