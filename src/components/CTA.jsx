const CTA = () => {
  return (
    <>
      <section className="bg-gray-200 p-9 flex flex-col gap-6 text-center">
        <div>
          <h2 className="text-xl font-semibold">Subscribe on our newsletter</h2>
          <p>
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
        </div>

        <form action="">
          <input type="text" className="p-2 rounded-md mr-2" />
          <button className="p-2 rounded-md bg-[#0067FF]">Submit</button>
        </form>
      </section>
    </>
  );
};

export default CTA;
