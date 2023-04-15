import ImageCarousel from "@/components/ProductDetail/ImageCarousel";
import ProductDetailInfo from "@/components/ProductDetail/ProductDetailInfo";
import SellerInfo from "@/components/ProductDetail/SellerInfo";
import { Breadcrumbs, toSentenceCase } from "@/components/Utils";
import { GlobalContext } from "@/contexts/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";

const ProductDetail = () => {
  const { isDesktop } = useContext(GlobalContext)!;
  const { query } = useRouter();
  const path = toSentenceCase(String(query.id));
  return (
    <>
      <Head>
        <title>Normany | {path}</title>
      </Head>
      <div className="screen">
        {isDesktop && (
          <Breadcrumbs styling="flex gap-3 text-gray-500 font-title mb-4 " />
        )}
        {isDesktop ? (
          <div className="box grid grid-cols-11 gap-5 items-start pb-12">
            <ImageCarousel />
            <ProductDetailInfo />
            <SellerInfo />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
