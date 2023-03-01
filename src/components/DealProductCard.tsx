import Image from "next/image";
import { FC } from "react";

interface CardProps {
  src: string;
  name: string;
  discount: number;
}

const DealProductCard: FC<CardProps> = ({ src, name, discount }) => {
  return (
    <div className="py-4 px-5 bg-white text-center flex flex-col items-center w-max">
      <Image src={src} alt="" width={140} height={140} />
      <p className="pt-3 pb-1">{name}</p>
      <p className="py-1 px-3 bg-[#FFE3E3] text-[#EB001B] rounded-full">
        {discount}%
      </p>
    </div>
  );
};

export default DealProductCard;
