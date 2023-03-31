export interface Filter {
  type: string;
  as: "link" | "check" | "range" | "radio";
  options: string[] | number[];
}

export interface Product {
  product_name: string;
  price: {
    regular: number;
    discounted?: number;
  };
  rating: number;
  orders: number;
  shipping: string;
  description: string;
  image_url: string;
}

export interface IGlobalContext {
  filter: Filter[];
  products: Product[];
  isDesktop: boolean;
  screenWidth: number;
}
