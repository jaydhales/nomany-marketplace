import { Filter, IGlobalContext, Product } from "@/Interface";
import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const GlobalContext = createContext<IGlobalContext | null>(null);

interface Props {
  children: ReactNode;
}

export const GlobalProvider: FC<Props> = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const isDesktop: boolean = screenWidth >= 900 ? true : false;
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, []);

  const filter: Filter[] = [
    {
      type: "Category",
      as: "link",
      options: ["Clothing", "Shoes", "Accessories"],
    },
    {
      type: "Brands",
      as: "check",
      options: ["Adidas", "Nike", "Puma", "Reebok", "Vans"],
    },
    {
      type: "Features",
      as: "radio",
      options: [
        "Anti-Static",
        "Breathable",
        "Plus Size",
        "Quick Dry",
        "Waterproof",
      ],
    },
    { type: "Price range", as: "range", options: [0, 500000] },
    { type: "Condition", as: "check", options: ["New", "Used"] },
    {
      type: "Rating",
      as: "check",
      options: ["5", "4", "3", "2"],
    },
  ];

  const products: Product[] = [
    {
      id: uuidv4(),
      product_name: "Canon Camera EOS 2000",
      price: {
        regular: 1128.0,
      },
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      image_url: "/assets/1.webp",
      description:
        "Capture stunning photos and videos with the Canon Camera EOS 2000. With a 10x zoom lens and advanced image processing technology, this camera delivers high-quality results every time. Its sleek black design and intuitive controls make it easy to use for both amateur and professional photographers.",
    },
    {
      id: uuidv4(),
      product_name: "Apple iPhone 13",
      price: {
        regular: 999.0,
        discounted: 949.0,
      },
      rating: 8.5,
      orders: 1000,
      shipping: "Free Shipping",
      image_url: "/assets/2.jpg",
      description:
        "Experience the future of mobile technology with the Apple iPhone 13. With its stunning 6.1-inch Super Retina XDR display, powerful A15 Bionic chip, and advanced camera system, this phone is a true masterpiece of design and innovation. Choose from a range of beautiful colors and enjoy lightning-fast 5G connectivity wherever you go.",
    },
    {
      id: uuidv4(),
      product_name: "Samsung Galaxy S21",
      price: {
        regular: 799.0,
        discounted: 699.0,
      },
      rating: 8.0,
      orders: 500,
      shipping: "Free Shipping",
      image_url: "/assets/3.jpg",
      description:
        "Stay connected and productive on the go with the Samsung Galaxy S21. With its 6.2-inch Dynamic AMOLED 2X display, powerful Exynos 2100 processor, and advanced camera system, this phone is the perfect choice for both work and play. Its sleek and stylish design makes it a real head-turner, and with 5G connectivity, you can stream, download, and browse faster than ever before.",
    },
    {
      id: uuidv4(),
      product_name: "Sony PlayStation 5",
      price: {
        regular: 499.0,
        discounted: 449.0,
      },
      rating: 9.0,
      orders: 10000,
      shipping: "Free Shipping",
      image_url: "/assets/4.jpg",
      description:
        "Enter a new world of gaming with the Sony PlayStation 5. With lightning-fast load times, stunning graphics, and immersive gameplay, this console is the ultimate gaming machine. Its sleek and futuristic design will look great in any home, and with its advanced haptic feedback and adaptive triggers, you'll feel like you're really part of the action.",
    },
    {
      id: uuidv4(),
      product_name: "Amazon Echo (4th Gen)",
      price: {
        regular: 99.99,
      },
      rating: 8.5,
      orders: 5000,
      shipping: "Free Shipping",
      image_url: "/assets/5.jpg",
      description:
        "Make your life easier and more convenient with the Amazon Echo (4th Gen). With its advanced voice recognition technology and powerful speakers, this device can play music, answer questions, control your smart home, and much more. Its stylish and compact design will look great in any room, and with Alexa on board, you can stay connected and organized all day long.",
    },
    {
      id: uuidv4(),
      product_name: "Apple MacBook Pro 16-inch",
      price: {
        regular: 2399.0,
      },
      rating: 9.5,
      orders: 200,
      shipping: "Free Shipping",
      image_url: "/assets/6.jpg",
      description:
        "Unleash your creativity and productivity with the Apple MacBook Pro 16-inch. With its stunning Retina display, powerful Intel Core processor, and long battery life, this laptop is the ultimate tool for designers, developers, and content creators. Its sleek and stylish design makes it a real head-turner, and with its advanced Touch Bar and Touch ID, you can work more efficiently than ever before.",
    },
    {
      id: uuidv4(),
      product_name: "Samsung Galaxy Tab S7+",
      price: {
        regular: 849.99,
        discounted: 799.99,
      },
      rating: 8.0,
      orders: 100,
      shipping: "Free Shipping",
      image_url: "/assets/7.jpg",
      description:
        "Experience the ultimate in portable productivity with the Samsung Galaxy Tab S7+. With its stunning 12.4-inch Super AMOLED display, powerful Snapdragon 865+ processor, and included S Pen, this tablet is perfect for work or play. Plus, with up to 14 hours of battery life, you can stay connected all day long.",
    },
    {
      id: uuidv4(),
      product_name: "Sony WH-1000XM4 Wireless Headphones",
      price: {
        regular: 349.99,
        discounted: 299.99,
      },
      rating: 9.0,
      orders: 500,
      shipping: "Free Shipping",
      image_url: "/assets/8.jpg",
      description:
        "Escape the noise and immerse yourself in your music with the Sony WH-1000XM4 wireless headphones. With industry-leading noise cancellation, adaptive sound control, and up to 30 hours of battery life, these headphones are perfect for long flights or commutes. Plus, with support for Alexa, Google Assistant, and Siri, you can control your music and get answers to your questions without ever taking off the headphones.",
    },
    {
      id: uuidv4(),
      product_name: "Canon EOS R6 Mirrorless Camera",
      price: {
        regular: 2499.0,
        discounted: 2299.0,
      },
      rating: 9.0,
      orders: 250,
      shipping: "Free Shipping",
      image_url: "/assets/9.jpg",
      description:
        "Capture stunning photos and videos with the Canon EOS R6 mirrorless camera. With its advanced autofocus system, 4K video capabilities, and fast continuous shooting, this camera is perfect for photographers and videographers alike. Plus, with built-in Wi-Fi and Bluetooth, you can easily transfer your photos and videos to your smartphone or computer.",
    },
  ];

  return (
    <GlobalContext.Provider
      value={{ filter, products, isDesktop, screenWidth }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
