import { Breadcrumbs } from "@/components/Utils";
import SidebarFilter from "@/components/SidebarFilter";
// import "react-double-range-slider/dist/cjs/index.css";
import Head from "next/head";

export interface Filter {
  type: string;
  as: "link" | "check" | "range" | "radio";
  options: string[] | number[];
}

const Clothing = () => {
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

  return (
    <>
      <Head>
        <title>Normany - Clothing</title>
      </Head>
      <div className="screen">
        <Breadcrumbs styling="flex gap-2 text-gray-500 font-title mb-4" />
        <main>
          <div className="sidebar w-max grid gap-4">
            {filter.map(({ type, as, options }, i) => (
              <SidebarFilter key={i} type={type} as={as} options={options} />
            ))}
          </div>
          <div className="content"></div>
        </main>
      </div>
    </>
  );
};

export default Clothing;
