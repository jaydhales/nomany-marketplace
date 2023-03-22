import React, { FC, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { RangeSlider } from "react-double-range-slider";
import Link from "next/link";
import { Filter } from "../pages/clothing";

type sliderData = {
  min: number | string;
  max: number | string;
  minIndex: number;
  maxIndex: number;
};

const SidebarFilter: FC<Filter> = ({ type, options, as }) => {
  const [rangeData, setRangeData] = useState<sliderData | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="border-t border-gray-200 w-[300px]">
      <div className="head flex justify-between items-center mt-2 mb-6">
        <h6>{type}</h6>
        <button onClick={(e) => setIsOpened(!isOpened)}>
          <RxCaretDown
            className={
              isOpened
                ? "w-6 h-6 transition-transform"
                : "w-6 h-6 transition-transform  rotate-180"
            }
          />
        </button>
      </div>
      {isOpened && (
        <div className="content grid gap-4">
          {as === "range" ? (
            <div className="range-slider">
              <RangeSlider
                value={{
                  min: Number(options[0]),
                  max: Number(options[1]),
                }}
                onChange={(e: any) => {
                  setRangeData({
                    min: e.min,
                    max: e.max,
                    minIndex: e.minIndex,
                    maxIndex: e.maxIndex,
                  });
                }}
                tooltipVisibility="always"
              />
            </div>
          ) : (
            options.map((option, i) => (
              <div key={i}>
                {as === "link" ? (
                  <Link href={`/clothing/${option}`} className="text-gray-500">
                    {option}
                  </Link>
                ) : (
                  <div className="flex items-center gap-4">
                    <input
                      type={as === "check" ? "checkbox" : "radio"}
                      name={option.toString()}
                      id={option.toString()}
                    />
                    <label htmlFor={option.toString()}>{option}</label>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SidebarFilter;
