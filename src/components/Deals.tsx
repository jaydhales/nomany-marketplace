import DealProductCard from "@/components/DealProductCard";

const Deals = () => {
  return (
    <section className="caliph">
      <div className="head bg-white">
        <div>
          <h2>Deals and offers</h2>
          <p>Electronic equipments</p>
        </div>
        <div className="timer">
          <code>Timer Here</code>
        </div>
      </div>

      <main className="grid grid-flow-col gap-0.5 overflow-x-scroll hide-scroll">
        <DealProductCard
          src="/assets/dummy.png"
          name="Smart watches"
          discount={-10}
        />
        <DealProductCard
          src="/assets/dummy.png"
          name="Laptops"
          discount={-10}
        />
        <DealProductCard
          src="/assets/dummy.png"
          name="GoPro cameras"
          discount={-10}
        />
        <DealProductCard
          src="/assets/dummy.png"
          name="Headphones"
          discount={-10}
        />
        <DealProductCard
          src="/assets/dummy.png"
          name="Canon camreras"
          discount={-10}
        />
        <DealProductCard
          src="/assets/dummy.png"
          name="Canon camreras"
          discount={-10}
        />
      </main>
    </section>
  );
};

export default Deals;
