"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
const Experience = () => {
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
  return (
    <>
      <div className="experience-section">
        <div className="container">
          <div className="experience-section-content">
            <h2>
              ACEplus: From a Credible Team with over{" "}
              <span>30 Years Experience</span>
            </h2>
            <div className="experience-section-content-mb">
              <div className="experience-section-content-card-mb">
                <div className="experience-section-content-card-mb-img-div-1">
                  <img src="/experience-1.svg" alt="experience-1" />
                </div>
                <p>Making Knowledge Interesting</p>
              </div>
              <div className="experience-section-content-card-mb">
                <div className="experience-section-content-card-mb-img-div-2">
                  <div className="experience-section-content-card-mb-img-div-2-prop"></div>
                  <img src="/experience-2.svg" alt="experience-2" />
                </div>
                <p>Easy to use interface</p>
              </div>
              <div className="experience-section-content-card-mb">
                <div className="experience-section-content-card-mb-img-div-3">
                  <div className="experience-section-content-card-mb-img-div-3-prop"></div>
                  <img src="/experience-3.svg" alt="experience-3" />
                </div>
                <p>Learn from ACE Achievers</p>
              </div>
              <div className="experience-section-content-card-mb">
                <div className="experience-section-content-card-mb-img-div-4">
                  <img src="/experience-4.svg" alt="experience-4" />
                </div>
                <p>Take expert guidance</p>
              </div>
            </div>
            <div className="experience-section-content-slider">
              <div className="slider-container">
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
                  <div className="slider-item-1">
                    <div className="slider-item-1-img-div">
                      <img src="/experience-1.svg" alt="experience-1" />
                    </div>
                    <p className="slider-item-1-p">
                      Making Knowledge Interesting
                    </p>
                  </div>
                  <div className="slider-item-2">
                    <div className="slider-item-2-img-div">
                      <div className="slider-item-2-img-div-prop"></div>
                      <img src="/experience-2.svg" alt="experience-2" />
                    </div>
                    <p className="slider-item-2-p">Easy to use interface</p>
                  </div>
                  <div className="slider-item-3">
                    <div className="slider-item-3-img-div">
                      <div className="slider-item-3-img-div-prop"></div>
                      <img src="/experience-3.svg" alt="experience-3" />
                    </div>
                    <p className="slider-item-3-p">Learn from ACE Achievers</p>
                  </div>
                  <div className="slider-item-4">
                    <div className="slider-item-4-img-div">
                      <img src="/experience-4-web.png" alt="experience-4" />
                    </div>
                    <p className="slider-item-4-p">Take expert guidance</p>
                  </div>
                </Slider>
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
    </>
  );
};
export default Experience;
