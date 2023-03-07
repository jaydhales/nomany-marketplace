import Head from "next/head";
import Hero from "@/components/Hero";
import Deals from "@/components/Deals";
import CategoryHero from "@/components/CategoryHero";
import Quote from "@/components/Quote";
import Recommended from "@/components/Recommended";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Normany</title>
        <meta name="description" content="A marketplace for everyone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="screen">
        <Hero />
        <Deals />
        <CategoryHero title="Home and outdoor" imgSrc="image 92" />
        <CategoryHero
          title="Consumer electronics and gadgets"
          imgSrc="image 98"
        />
        <Quote />
        <Recommended />
      </main>
      <CTA />
    </>
  );
}
