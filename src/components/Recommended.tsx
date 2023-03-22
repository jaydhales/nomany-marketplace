import ProductCard from "@/components/ProductCard";

const Recommended = () => (
  <section className="my-2.5 lg:mt-8 lg:mb-5">
    <h3 className="mb-5">Recommended items</h3>

    <main className="gap-8 flex flex-wrap justify-evenly">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <ProductCard
          src="/assets/05.png"
          price={350 * i}
          description="T-shirts with multiple colors, for men"
          key={i}
        />
      ))}
    </main>
  </section>
);

export default Recommended;
