import DealProductCard from "@/components/DealProductCard";

const Deals = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-0.5 my-2.5 lg:mt-8 lg:mb-5">
      <div className="head bg-white p-5 min-w-[280px] flex justify-between items-center lg:block">
        <div>
          <h2 className="font-semibold text-xl">Deals and offers</h2>
          <p>Electronic equipments</p>
        </div>
        <div className="timer">
          <code>Timer Here</code>
        </div>
      </div>
      <main className="flex gap-0.5 overflow-x-scroll">
        <DealProductCard src="/assets/dummy.png" name="iWatch" discount={-10} />
        <DealProductCard src="/assets/dummy.png" name="iWatch" discount={-10} />
        <DealProductCard src="/assets/dummy.png" name="iWatch" discount={-10} />
        <DealProductCard src="/assets/dummy.png" name="iWatch" discount={-10} />
        <DealProductCard src="/assets/dummy.png" name="iWatch" discount={-10} />
        <DealProductCard src="/assets/dummy.png" name="iWatch" discount={-10} />
      </main>
    </section>
  );
};

export default Deals;
