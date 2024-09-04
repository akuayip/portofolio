"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles = "", btnStyles = "", iconStyles = "" }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        onClick={() => swiper.slidePrev()}
        className={btnStyles}
        aria-label="Previous Slide"
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={btnStyles}
        aria-label="Next Slide"
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
