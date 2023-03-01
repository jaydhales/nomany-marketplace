import Image from "next/image";
import { FC } from "react";

interface Category {
  title: string;
  imgSrc: string;
}

const CategoryHero: FC<Category> = ({ title, imgSrc }) => {
  return (
    <div className="caliph">
      <div className="head hero-main">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/assets/${imgSrc}.png`} alt="banner" />
        <div className="content">
          <h2>{title}</h2>
          <a href="#" className="btn bg-white mt-4 block px-4 w-max">
            Source now
          </a>
        </div>
      </div>
      <main className="grid grid-cols-4 gap-0.5 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
          <div className="p-5 bg-white relative" key={i}>
            <p>Soft Chairs</p>
            <p className="mb-6">
              From <br /> USD 19
            </p>
            <Image
              src="/assets/dummy.png"
              alt="dummy"
              width={82}
              height={82}
              className="absolute right-0 bottom-5"
            />
          </div>
        ))}
      </main>
    </div>
  );
};

export default CategoryHero;
