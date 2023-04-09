import { Breadcrumbs, toSentenceCase } from "@/components/Utils";
import SidebarFilter from "@/components/SidebarFilter";
import ViewCard from "@/components/ViewCard";
// import "react-double-range-slider/dist/cjs/index.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import { GlobalContext } from "@/contexts/GlobalContext";

// export const getStaticPaths = async () => {};

const Clothing = () => {
  const [viewType, setViewType] = useState<"grid" | "list">("list");
  const { query } = useRouter();

  const { filter, products, isDesktop, screenWidth } =
    useContext(GlobalContext)!;

  useEffect(() => {
    !isDesktop && setViewType("list");
  }, [isDesktop, screenWidth]);

  const path = toSentenceCase(String(query.type));

  return (
    <>
      <Head>
        <title>Normany - {path}</title>
      </Head>
      <div className="screen">
        {isDesktop && (
          <Breadcrumbs styling="flex gap-3 text-gray-500 font-title mb-4 " />
        )}
        <main className="product-main">
          <div className="sidebar w-max hidden md:grid gap-4 ">
            {filter.map(({ type, as, options }, i) => (
              <SidebarFilter key={i} type={type} as={as} options={options} />
            ))}
          </div>
          <div className="content">
            <div className="box py-3 flex justify-between items-center">
              <p>
                12,202 items in <b>{path}</b>
              </p>
              <div className="flex items-center gap-4">
                <label htmlFor="verified">
                  <input
                    type="checkbox"
                    name="verified"
                    id="verified"
                    className="mr-2"
                  />
                  Verified Only
                </label>

                <div className="type shadow-input hover:shadow-lg  rounded-sm p-2 min-w-[140px]">
                  <select name="type" id="" className="w-full">
                    <option value="Featured">Featured</option>
                  </select>
                </div>

                {isDesktop && (
                  <div className="flex">
                    <button
                      className={
                        "shadow-input hover:shadow-lg rounded-l-sm p-2 " +
                        (viewType === "grid" ? "bg-gray-200" : "")
                      }
                      onClick={(e) => setViewType("grid")}
                    >
                      <Image
                        src="/assets/icons/gridview.png"
                        alt="grid"
                        width="20"
                        height="20"
                      />
                    </button>

                    <button
                      className={
                        "shadow-input hover:shadow-lg rounded-r-sm p-2 " +
                        (viewType === "list" ? "bg-gray-200" : "")
                      }
                      onClick={(e) => setViewType("list")}
                    >
                      <Image
                        src="/assets/icons/listview.png"
                        alt="grid"
                        width="20"
                        height="20"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="view my-5 hide-scroll  p-3 md:p-0">
              <div className={viewType === "grid" ? "grid-view" : "list-view"}>
                {products.map((product) => (
                  <ViewCard
                    key={product.id}
                    product={product}
                    parentPath={path.toLowerCase()}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Clothing;
