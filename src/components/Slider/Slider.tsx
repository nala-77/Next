"use client"; // Ensure this is at the top

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

type SliderProps = {
  items: any[];
  itemsToShow: number;
  renderItem: (items: any[]) => React.ReactNode; 
};

const Slider = ({ items, itemsToShow, renderItem }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsiveItems, setResponsiveItems] = useState(itemsToShow); 

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) {
        setResponsiveItems(1); 
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setResponsiveItems(2);
      } else {
        setResponsiveItems(itemsToShow);
      }
    };


    updateItemsToShow();


    window.addEventListener("resize", updateItemsToShow);


    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, [itemsToShow]);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex + responsiveItems < items.length;

  const nextSlide = () => {
    if (hasNext) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (hasPrev) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="absolute -top-[100px] right-[4%] gap-x-5 flex max-lg:w-full max-lg:right-0 max-lg:top-[38%] max-594:top-[28%] max-lg:justify-between">
          <button
            onClick={prevSlide}
            disabled={!hasPrev}
            className={`${
              !hasPrev
                ? "bg-[#EFEFEF] text-myBlack cursor-not-allowed"
                : "bg-main-color text-white"
            } rounded-full w-[50px] h-[50px] max-lg:-left-[3%] max-lg:absolute  max-594:left-0 max-594:h-10 max-594:w-10`}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-3.5"/>
          </button>

          <button
            onClick={nextSlide}
            disabled={!hasNext}
            className={`${
              !hasNext
                ? "bg-[#EFEFEF] text-myBlack cursor-not-allowed"
                : "bg-main-color text-white"
            } rounded-full w-[50px] h-[50px] text-center max-lg:-right-[3%] max-lg:absolute max-594:h-10 max-594:w-10 max-594:right-0`}
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-3.5 " />
          </button>
        </div>

        <div className="flex overflow-hidden gap-8 max-858:gap-4 max-lg:justify-center">
          {renderItem(
            items.slice(currentIndex, currentIndex + responsiveItems)
          )}
        </div>
      </div>
    </>
  );
};

export default Slider;