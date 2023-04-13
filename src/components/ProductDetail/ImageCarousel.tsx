import React, { useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = () => {
  const [currLoc, setCurrLoc] = useState<number>(0);
  const imgSample = [1, 2, 3, 4, 5];

  const handleClick = (i: number) => {
    setCurrLoc(i);
  };

  return (
    <div className="grid gap-5">
      <div className="image w-60 h-60 shadow-input grid place-content-center rounded-md">
        <h1>{imgSample[currLoc]}</h1>
      </div>
      <div className="grid grid-cols-5 gap-2.5">
        {imgSample.map((img, i) => (
          <button
            className="py-2 text-center shadow-input hover:shadow-lg disabled:opacity-70"
            key={i}
            onClick={(e) => handleClick(i)}
            disabled={currLoc === i}
          >
            {img}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
