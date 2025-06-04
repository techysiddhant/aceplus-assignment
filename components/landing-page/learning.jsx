import React from "react";

const Learning = () => {
  return (
    <div className="learning-section">
      <div className="container">
        <div className="learning-section-content">
          <h2>What the student will learn with us</h2>
          <p className="learning-section-content-p">
            achieve <span className="dot"></span> Confidence{" "}
            <span className="dot"></span> English
          </p>
          <div className="learning-section-content-div">
            <div className="achieve-div">
              <p className="achieve-div-title">Achieve</p>
              <div className="achieve-div-content">
                <div className="achive-item-div-1">
                  <div className="achive-item-div-1-img">
                    <img src="/images/thinking.svg" alt="thinking" />
                  </div>
                  <p>Thinking Skills</p>
                </div>
                <div className="achive-item-div-2">
                  <div className="achive-item-div-2-img">
                    <img src="/images/skills.svg" alt="skills" />
                  </div>
                  <p>Emotional Skills</p>
                </div>
                <div className="achive-item-div-3">
                  <div className="achive-item-div-3-img">
                    <img src="/images/social.svg" alt="social" />
                  </div>
                  <p>Social Skills</p>
                </div>
              </div>
            </div>
            <div className="confidence-div">
              <p className="confidence-div-title">Confidence</p>
              <div className="confidence-div-content">
                <div className="confidence-item-div-1">
                  <div className="confidence-item-div-1-img">
                    <img src="/images/reading.svg" alt="reading" />
                  </div>
                  <p>Reading</p>
                </div>
                <div className="confidence-item-div-2">
                  <div className="confidence-item-div-2-img">
                    <img src="/images/listening.svg" alt="listening" />
                  </div>
                  <p>Listening</p>
                </div>
                <div className="confidence-item-div-3">
                  <div className="confidence-item-div-3-img">
                    <img src="/images/speaking.svg" alt="speaking" />
                  </div>
                  <p>Speaking</p>
                </div>
              </div>
            </div>
            <div className="english-div">
              <p className="english-div-title">English</p>
              <div className="english-div-content">
                <div className="english-item-div-1">
                  <div className="english-item-div-1-img">
                    <img src="/images/proper.svg" alt="proper" />
                  </div>
                  <p>Proper Pronunciation </p>
                </div>
                <div className="english-item-div-2">
                  <div className="english-item-div-2-img">
                    <img src="/images/them.svg" alt="speaking correctly" />
                  </div>
                  <p>Speaking Correctly</p>
                </div>
                <div className="english-item-div-3">
                  <div className="english-item-div-3-img">
                    <img src="/images/building.svg" alt="building" />
                  </div>
                  <p>Building Vocabulary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
