import React from "react";

const ProductDetailInfo = () => {
  const price = 3500;
  const feats = [
    [["Price:", "Negotiable"]],
    [
      ["Type:", "T-shirt"],
      ["Material:", "Cotton"],
      ["Design:", "Solid"],
    ],
    [
      ["Customization:", "Customized logo and design custom packages"],
      ["Warranty:", "1 year full warranty"],
    ],
  ];
  return (
    <div className="col-span-5">
      <p className=" text-green">✓ In Stock</p>
      <h4>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h4>
      <div>
        <div className="rating flex gap-2 items-center text-small md:text-base">
          <p className="text-orange">9.5</p>
          <i className="bg-gray-300 rounded-full p-1" />
          <p className="text-gray-500">34 reviews</p>
          <i className="bg-gray-300 rounded-full p-1" />
          <p className="text-gray-500">154 sold</p>
        </div>

        <div className="my-3 bg-red/10 box pr-0">
          <div className="grid grid-cols-3 gap-0.5 bg-gray-300">
            <div className="flex-1 bg-[#ffebeb]">
              <h5>₦ {price}</h5>
              <small className="text-gray-500">50 - 100 pcs</small>
            </div>
            <div className="flex-1 bg-[#ffebeb] pl-2.5">
              <h5>₦ {price * 0.9}</h5>
              <small className="text-gray-500">100 - 500 pcs</small>
            </div>
            <div className="flex-1 bg-[#ffebeb] pl-2.5">
              <h5>₦ {price * 0.8}</h5>
              <small className="text-gray-500">500+ pcs</small>
            </div>
          </div>
        </div>

        <div className="features">
          {feats.map((feat, i) => (
            <div key={i} className="border-b border-gray-300 grid gap-4 py-4">
              {feat.map(([title, details], i) => (
                <div key={i} className="flex gap-5">
                  <p className="text-gray-500 w-28">{title}</p>
                  <p className="text-gray-500 w-44">{details}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
