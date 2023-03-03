const Quote = () => {
  return (
    <div className="quote p-5 pb-10 md:p-10 md:pb-14 lg:rounded flex justify-between md:gap-16">
      <div className="text-white max-w-[440px]">
        <p className="text-2xl md:text-3xl font-bold mb-4">
          An easy way to send requests to all suppliers
        </p>
        <p className="hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <a
          href="#"
          className="md:hidden btn bg-[#0067FF] w-max text-white px-4"
        >
          Send inquiry
        </a>
      </div>

      <form
        action=""
        className="hidden md:grid gap-4 rounded-md bg-white p-5 w-[500px]"
      >
        <h3 className="text-xl font-semibold">Send quote to suppliers</h3>
        <input
          type="text"
          className="border p-2.5 rounded-md"
          placeholder="What item you need?"
        />
        <textarea
          name=""
          className="border p-2.5 rounded-md"
          placeholder="Type more details"
        />
        <div className="flex gap-4">
          <input
            type="number"
            className="border p-2.5 rounded-md"
            placeholder="Quantity"
          />
          <i className="border p-2.5 rounded-md">
            <select name="type" id="" className="bg-transparent w-20">
              {" "}
              <option value="pcs">Pcs</option>
              <option value="kg">kg</option>
              <option value="pack">pack</option>
            </select>
          </i>
        </div>
        <a href="#" className="btn bg-[#0067FF] w-max text-white px-4">
          Send inquiry
        </a>
      </form>
    </div>
  );
};

export default Quote;
