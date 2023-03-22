import Image from "next/image";
import { FC } from "react";

interface CardProps {
  src: string;
  name: string;
  discount: number;
}

const DealProductCard: FC<CardProps> = ({ src, name, discount }) => {
  return (
    <div className="py-4 px-5 bg-white text-center flex flex-col items-center justify-between w-[150px] lg:w-[180px] text-sm lg:text-base">
      <Image src={src} alt="" width={140} height={140} />
      <div>
        <p className="py-1">{name}</p>
        <p className="py-1 px-3 w-max mx-auto bg-[#FFE3E3] text-[#EB001B] rounded-full">
          {discount}%
        </p>
      </div>
    </div>
  );
};

export default DealProductCard;
