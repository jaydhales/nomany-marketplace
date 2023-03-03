import ProductCard from "@/components/ProductCard";

const Recommended = () => (
  <section className="my-2.5 lg:mt-8 lg:mb-5">
    <h2 className="text-2xl font-semibold mb-5">Recommended items</h2>

    <main className="gap-8 flex flex-wrap justify-evenly">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <ProductCard
          src="/assets/05.png"
          price={3500}
          description="T-shirts with multiple colors, for men"
          key={i}
        />
      ))}
    </main>
  </section>
);

export default Recommended;
