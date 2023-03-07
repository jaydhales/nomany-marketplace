import Image from "next/image";
import { FC } from "react";

interface CardProps {
  src: string;
  price: number;
  description: string;
}

const ProductCard: FC<CardProps> = ({ src, price, description }) => {
  return (
    <div className="bg-white w-60 p-4 flex flex-col gap-3.5 items-center rounded-md">
      <Image src={src} width={200} height={200} alt={description} />
      <div>
        <small>₦{price}</small>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
