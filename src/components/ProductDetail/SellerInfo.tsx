import React from "react";

const SellerInfo = () => {
  return (
    <div className="col-span-3 w-full">
      <div className="box shadow-input w-full">
        <div className="flex gap-2.5 items-center">
          <h3 className="w-12 h-12 flex items-center justify-center rounded bg-light-green/30 text-light-green">
            J
          </h3>
          <div>
            <p>Supplier</p>
            <p>Guanjoi Trading LLC</p>
          </div>
        </div>
        <div className="my-5 border-t border-gray-200 pt-3 pb-2">
          {[
            ["N", "Nigeria"],
            ["V", "Verified Seller"],
            ["W", "Worldwide"],
          ].map(([icon, text], i) => (
            <div key={i} className="flex gap-4">
              <p className="text-gray-500 w-5 text-center">{icon}</p>
              <p className="text-gray-500">{text}</p>
            </div>
          ))}
        </div>
        <div className="">
          <a
            href="#"
            className="btn block bg-blue hover:bg-blue/80 text-white text-center"
          >
            Send inquiry
          </a>
          <a
            href="#"
            className="btn block shadow-input text-blue text-center mt-2"
          >
            Seller&apos;s Profile
          </a>
        </div>
      </div>

      <div className="flex text-blue gap-2 5 mt-6 justify-center">
        <p>t</p>
        <p>Save for later</p>
      </div>
    </div>
  );
};

export default SellerInfo;
