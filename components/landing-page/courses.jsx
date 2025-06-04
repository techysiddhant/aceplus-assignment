"use client";
import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

const Courses = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    draggable: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Initialize slider state
  const [canGoNext, setCanGoNext] = useState(true);
  const [canGoPrev, setCanGoPrev] = useState(false);

  // Update button states when slider changes
  const handleBeforeChange = (oldIndex, newIndex) => {
    const slideCount = sliderRef?.props?.children?.length || 0;
    const slidesToShow = settings.slidesToShow;

    // Check current breakpoint to determine slidesToShow
    const width = window.innerWidth;
    let currentSlidesToShow = slidesToShow;

    if (width >= 1920) {
      currentSlidesToShow = 3;
    } else if (width >= 1024) {
      currentSlidesToShow = 3;
    } else {
      currentSlidesToShow = 2; // Default for smaller screens
    }

    // Calculate if we can go next/prev
    setCanGoPrev(newIndex > 0);

    // Ensure next button is disabled on last possible slide
    const lastPossibleSlide = slideCount - currentSlidesToShow;
    setCanGoNext(newIndex < lastPossibleSlide);

    // // Log values for debugging
    // console.log({
    //   newIndex,
    //   slideCount,
    //   currentSlidesToShow,
    //   lastPossibleSlide,
    //   canGoNext: newIndex <= lastPossibleSlide,
    // });
  };
  const [showStaticImage, setShowStaticImage] = useState(false);
  useEffect(() => {
    const gifDuration = 3800; // ms

    // Start fade transition just before switch
    const fadeStart = setTimeout(() => {
      setShowStaticImage(true);
    }, gifDuration); // Start fade-out 500ms before switch

    return () => {
      clearTimeout(fadeStart);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div className="courses-section-content">
          <h2>Tailored Learning for Every Level</h2>
          <div className="courses-section-content-mb">
            <div className="courses-section-content-mb-item border-badge-1">
              <div className="courses-section-content-mb-item-img fade-container">
                <img
                  src="/beginner-1.png"
                  alt="courses-1-static"
                  className={`static-image static-image-mb ${
                    showStaticImage ? "fade-in" : ""
                  }`}
                />
                <img
                  src="/beginner-1.gif"
                  alt="courses-1-gif"
                  className={`gif-image ${showStaticImage ? "fade-out" : ""}`}
                />
              </div>
              <div className="courses-section-content-mb-item-content">
                <p className="courses-section-content-mb-item-title">
                  Beginner
                </p>
                <div className="courses-section-content-mb-item-content-item">
                  <img src="/arrow-check.svg" alt="arrow-check" />
                  <p>450 Minutes of Learning</p>
                </div>
                <div className="courses-section-content-mb-item-content-item">
                  <img src="/arrow-check.svg" alt="arrow-check" />
                  <p>5 LIVE Feedback Sessions With a Skill Coach</p>
                </div>
                <div className="courses-section-content-mb-item-content-item">
                  <img src="/arrow-check.svg" alt="arrow-check" />
                  <p>5 Self-paced Capsules</p>
                </div>
              </div>
            </div>
            <div className="courses-section-content-mb-item border-badge-2">
              <div className="courses-section-content-mb-item-img fade-container">
                <img
                  src="/advance-1.png"
                  alt="courses-1-static"
                  className={`static-image static-image-mb ${
                    showStaticImage ? "fade-in" : ""
                  }`}
                />
                <img
                  src="/advance-1.gif"
                  alt="courses-1-gif"
                  className={`gif-image ${showStaticImage ? "fade-out" : ""}`}
                />
              </div>

              <div className="courses-section-content-mb-item-content">
                <p className="courses-section-content-mb-item-title">
                  Advanced
                </p>
                <div className="courses-section-content-mb-item-content-item">
                  <img src="/arrow-check.svg" alt="arrow-check" />
                  <p>450 Minutes of Learning</p>
                </div>
                <div className="courses-section-content-mb-item-content-item">
                  <img src="/arrow-check.svg" alt="arrow-check" />
                  <p> 5 LIVE Feedback Sessions With a Skill Coach</p>
                </div>
                <div className="courses-section-content-mb-item-content-item">
                  <img src="/arrow-check.svg" alt="arrow-check" />
                  <p>5 Self-paced Capsules</p>
                </div>
              </div>
            </div>
            <div className="courses-section-content-mb-item border-badge-3">
              <div className="courses-section-content-mb-item-img fade-container">
                <img
                  src="/expert-1.png"
                  alt="courses-1-static"
                  className={`static-image static-image-mb static-image-mb-3 ${
                    showStaticImage ? "fade-in" : ""
                  }`}
                />
                <img
                  src="/expert-1.gif"
                  alt="courses-1-gif"
                  className={`gif-image ${showStaticImage ? "fade-out" : ""}`}
                />
              </div>

              <div className="courses-section-content-mb-item-content">
                <p className="courses-section-content-mb-item-title">Expert</p>
                <div className="courses-section-content-mb-item-content-item">
                  <img src="/arrow-check.svg" alt="arrow-check" />
                  <p>450 Minutes of Learning</p>
                </div>
                <div className="courses-section-content-mb-item-content-item">
                  <img src="/arrow-check.svg" alt="arrow-check" />
                  <p> 5 LIVE Feedback Sessions With a Skill Coach</p>
                </div>
                <div className="courses-section-content-mb-item-content-item">
                  <img src="/arrow-check.svg" alt="arrow-check" />
                  <p>5 Self-paced Capsules</p>
                </div>
              </div>
            </div>
            <div className="courses-section-content-mb-item border-badge-4">
              <div className="courses-section-content-mb-item-img fade-container">
                <img
                  src="/spoken-english-1.png"
                  alt="courses-1-static"
                  className={`static-image static-image-mb static-image-mb-4 ${
                    showStaticImage ? "fade-in" : ""
                  }`}
                />
                <img
                  src="/spoken-english-1.gif"
                  alt="courses-1-gif"
                  className={`gif-image ${showStaticImage ? "fade-out" : ""}`}
                />
              </div>

              <div className="courses-section-content-mb-item-content">
                <p className="courses-section-content-mb-item-title">
                  Spoken English
                </p>
                <div className="courses-section-content-mb-item-content-item">
                  <img src="/arrow-check.svg" alt="arrow-check" />
                  <p>Downloadable Pdfs for Self-learning</p>
                </div>
                <div className="courses-section-content-mb-item-content-item">
                  <img src="/arrow-check.svg" alt="arrow-check" />
                  <p>Diverse Role-Play Situations across capsules.</p>
                </div>
                <div className="courses-section-content-mb-item-content-item">
                  <img src="/arrow-check.svg" alt="arrow-check" />
                  <p>10 Self-paced Capsules</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-section-content-mb-item-link-mb">
            <Link href="">Unlock All Courses</Link>
          </div>
          <div className="courses-section-content-wb">
            <div className="courses-slider-container">
              <Slider
                ref={(slider) => {
                  sliderRef = slider;
                }}
                {...settings}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: false,
                      arrows: true,
                    },
                  },
                  {
                    breakpoint: 1920,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      infinite: false,
                      arrows: true,
                    },
                  },
                ]}
                beforeChange={(oldIndex, newIndex) =>
                  handleBeforeChange(oldIndex, newIndex)
                }
              >
                <div className="courses-section-content-mb-item border-badge-1">
                  <div className="courses-section-content-mb-item-img fade-container">
                    <img
                      src="/beginner-1.png"
                      alt="courses-1-static"
                      className={`static-image ${
                        showStaticImage ? "fade-in" : ""
                      }`}
                    />
                    <img
                      src="/beginner-1.gif"
                      alt="courses-1-gif"
                      className={`gif-image ${
                        showStaticImage ? "fade-out" : ""
                      }`}
                    />
                  </div>
                  <div className="courses-section-content-mb-item-content">
                    <p className="courses-section-content-mb-item-title">
                      Beginner
                    </p>
                    <div className="courses-section-content-mb-item-content-item">
                      <img src="/arrow-check.svg" alt="arrow-check" />
                      <p>450 Minutes of Learning</p>
                    </div>
                    <div className="courses-section-content-mb-item-content-item">
                      <img src="/arrow-check.svg" alt="arrow-check" />
                      <p>5 LIVE Feedback Sessions With a Skill Coach</p>
                    </div>
                    <div className="courses-section-content-mb-item-content-item">
                      <img src="/arrow-check.svg" alt="arrow-check" />
                      <p>5 Self-paced Capsules</p>
                    </div>
                  </div>
                </div>
                <div className="courses-section-content-mb-item border-badge-2">
                  <div className="courses-section-content-mb-item-img fade-container">
                    <img
                      src="/advance-1.png"
                      alt="courses-1-static"
                      className={`static-image ${
                        showStaticImage ? "fade-in" : ""
                      }`}
                    />
                    <img
                      src="/advance-1.gif"
                      alt="courses-1-gif"
                      className={`gif-image ${
                        showStaticImage ? "fade-out" : ""
                      }`}
                    />
                  </div>

                  <div className="courses-section-content-mb-item-content">
                    <p className="courses-section-content-mb-item-title">
                      Advanced
                    </p>
                    <div className="courses-section-content-mb-item-content-item">
                      <img src="/arrow-check.svg" alt="arrow-check" />
                      <p>450 Minutes of Learning</p>
                    </div>
                    <div className="courses-section-content-mb-item-content-item">
                      <img src="/arrow-check.svg" alt="arrow-check" />
                      <p> 5 LIVE Feedback Sessions With a Skill Coach</p>
                    </div>
                    <div className="courses-section-content-mb-item-content-item">
                      <img src="/arrow-check.svg" alt="arrow-check" />
                      <p>5 Self-paced Capsules</p>
                    </div>
                  </div>
                </div>
                <div className="courses-section-content-mb-item border-badge-3">
                  <div className="courses-section-content-mb-item-img fade-container">
                    <img
                      src="/expert-1.png"
                      alt="courses-1-static"
                      className={`static-image ${
                        showStaticImage ? "fade-in" : ""
                      }`}
                    />
                    <img
                      src="/expert-1.gif"
                      alt="courses-1-gif"
                      className={`gif-image ${
                        showStaticImage ? "fade-out" : ""
                      }`}
                    />
                  </div>

                  <div className="courses-section-content-mb-item-content">
                    <p className="courses-section-content-mb-item-title">
                      Expert
                    </p>
                    <div className="courses-section-content-mb-item-content-item">
                      <img src="/arrow-check.svg" alt="arrow-check" />
                      <p>450 Minutes of Learning</p>
                    </div>
                    <div className="courses-section-content-mb-item-content-item">
                      <img src="/arrow-check.svg" alt="arrow-check" />
                      <p> 5 LIVE Feedback Sessions With a Skill Coach</p>
                    </div>
                    <div className="courses-section-content-mb-item-content-item">
                      <img src="/arrow-check.svg" alt="arrow-check" />
                      <p>5 Self-paced Capsules</p>
                    </div>
                  </div>
                </div>
                <div className="courses-section-content-mb-item border-badge-4 item-4">
                  <div className="courses-section-content-mb-item-img fade-container">
                    <img
                      src="/spoken-english-1.png"
                      alt="courses-1-static"
                      className={`static-image ${
                        showStaticImage ? "fade-in" : ""
                      }`}
                    />
                    <img
                      src="/spoken-english-1.gif"
                      alt="courses-1-gif"
                      className={`gif-image ${
                        showStaticImage ? "fade-out" : ""
                      }`}
                    />
                  </div>

                  <div className="courses-section-content-mb-item-content">
                    <p className="courses-section-content-mb-item-title">
                      Spoken English
                    </p>
                    <div className="courses-section-content-mb-item-content-item">
                      <img src="/arrow-check.svg" alt="arrow-check" />
                      <p>Downloadable Pdfs for Self-learning</p>
                    </div>
                    <div className="courses-section-content-mb-item-content-item">
                      <img src="/arrow-check.svg" alt="arrow-check" />
                      <p>Diverse Role-Play Situations across capsules.</p>
                    </div>
                    <div className="courses-section-content-mb-item-content-item">
                      <img src="/arrow-check.svg" alt="arrow-check" />
                      <p>10 Self-paced Capsules</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="courses-section-content-mb-item-link-wb">
              <Link href="">Unlock All Courses</Link>
            </div>
            <div className="experience-section-content-slider-buttons">
              <button
                onClick={() => {
                  if (canGoPrev) {
                    previous();
                  }
                }}
                disabled={!canGoPrev}
                style={{
                  backgroundColor: canGoPrev ? "#482BC5" : "#CFC3FF",
                  cursor: canGoPrev ? "pointer" : "not-allowed",
                }}
              >
                <img src="/arrow-left.svg" alt="arrow-left" />
              </button>
              <button
                onClick={() => {
                  if (canGoNext) {
                    next();
                  }
                }}
                disabled={!canGoNext}
                style={{
                  backgroundColor: canGoNext ? "#482BC5" : "#CFC3FF",
                  cursor: canGoNext ? "pointer" : "not-allowed",
                }}
              >
                <img src="/arrow-right.svg" alt="arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
