const Quote = () => {
  return (
    <div className="quote p-5 pb-10 md:p-10 md:pb-14 lg:rounded flex justify-between md:gap-16">
      <div className="text-white max-w-[440px]">
        <h2>An easy way to send requests to all suppliers</h2>
        <p className="hidden md:block text-info font-info">
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
        className="hidden md:grid gap-4 rounded-md shadow-md bg-white p-5 w-[500px]"
      >
        <h4>Send quote to suppliers</h4>
        <input
          type="text"
          className="p-2.5 rounded-md shadow-input"
          placeholder="What item you need?"
        />
        <textarea
          name=""
          className="p-2.5 rounded-md shadow-input"
          placeholder="Type more details"
        />
        <div className="flex gap-4 ">
          <input
            type="number"
            className="p-2.5 rounded-md shadow-input"
            placeholder="Quantity"
          />
          <i className="p-2.5 rounded-md shadow-input">
            <select name="type" id="" className="w-20">
              {" "}
              <option value="pcs">Pcs</option>
              <option value="kg">kg</option>
              <option value="pack">pack</option>
            </select>
          </i>
        </div>
        <a href="#" className="btn bg-blue w-max text-white px-4">
          Send inquiry
        </a>
      </form>
    </div>
  );
};

export default Quote;
