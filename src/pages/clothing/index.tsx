import { Breadcrumbs } from "@/components/Utils";

import Head from "next/head";

const Clothing = () => {
  return (
    <>
      <Head>
        <title>Normany - Clothing</title>
      </Head>
      <main className="screen">
        <Breadcrumbs styling="flex gap-2" />
      </main>
    </>
  );
};

export default Clothing;
