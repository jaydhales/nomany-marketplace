const CTA = () => {
  return (
    <>
      <section className="bg-gray-200 p-9 flex flex-col gap-6 text-center">
        <div>
          <h4>Subscribe on our newsletter</h4>
          <p className="font-info text-gray-600">
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
        </div>

        <form action="">
          <input
            type="text"
            className="p-2 rounded-md mr-2 bg-white shadow-input"
          />
          <button className="p-2 rounded-md bg-blue text-white">
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
};

export default CTA;
