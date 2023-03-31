import { Product } from "@/Interface";
import Image from "next/image";
import { FC } from "react";
import { Rating } from "react-simple-star-rating";

interface ProductProps {
  product: Product;
}

const ViewCard: FC<ProductProps> = ({ product }) => {
  return (
    <div className="box">
      <div className="image mx-auto rounded-lg">
        <Image
          src={product.image_url}
          width={200}
          height={200}
          alt={product.product_name}
        />
      </div>

      <div className="details">
        <p className="text-title font-title md:h-12 flex items-end">
          {product.product_name}
        </p>
        <div>
          <div className="price flex gap-3 items-center">
            <h4>${product.price.discounted || product.price.regular}</h4>
            {product.price.discounted && (
              <h6 className="text-gray-500 line-through">
                ${product.price.regular}
              </h6>
            )}
          </div>
          <div className="rating flex gap-2 items-center text-small md:text-base">
            <p>{product.rating}</p>
            <i className="bg-gray-300 rounded-full p-1" />
            <p className="text-gray-500 orders">{product.orders} orders</p>
            <i className="bg-gray-300 rounded-full p-1" />
            <p className=" text-green">{product.shipping} </p>
          </div>
        </div>

        <p className="description hidden md:block text-gray-600 w-4/5">
          {product.description}
        </p>
        <div className="like hidden md:block shadow-input hover:shadow-lg rounded-sm p-2">
          <Image
            src="/assets/icons/like-icon.png"
            width={20}
            height={20}
            alt="heart"
          />
        </div>
      </div>
    </div>
  );
};

// export interface Product {
//   product_name: string;
//   price: {
//     regular: number;
//     discounted: number;
//   };
//   rating: number;
//   orders: number;
//   shipping: string;
//   description: string;
//   image_url: string;
// }

export default ViewCard;
