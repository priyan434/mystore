import React from "react";
import pic from "../assets/pic.png";

const Pro = () => {
  const arr = new Array(10);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {[...arr].map((ele, i) => (
          <div
            key={i}
            className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 border border-gray-900"
          >
            <div className="card text-center">
              <div className="relative">
                <img
                  className="card h-2/3 w-1/2 border border-green-500 mx-auto"
                  src={pic}
                  alt="Image Description"
                />
                <div className="absolute top-0 left-0 pt-3 pl-3">
                  {/* <span className="badge badge-success badge-pill">New arrival</span> */}
                </div>
                <div className="absolute top-0 right-0 pt-3 pr-3">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-outline-secondary rounded-circle"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Save for later"
                  >
                    <span className="fas fa-heart btn-icon__inner"></span>
                  </button>
                </div>
              </div>
              <div className="card-body pt-4 px-4 pb-0">
                <div className="mb-2">
                  <a
                    className="inline-block text-secondary text-sm font-medium mb-1"
                    href="#"
                  >
                    Accessories
                  </a>
                  <h3 className="text-secondary">
                    <a href="#" className="text-secondary">
                      Herschel backpack in dark blue
                    </a>
                  </h3>
                  <div className="block text-sm">
                    <span className="font-medium">$56.99</span>
                  </div>
                </div>
              </div>
              <div className="card-footer border-0 pt-0 pb-4 px-4">
                <div className="mb-3">
                  <a className="inline-flex items-center text-sm" href="#">
                    <div className="text-warning mr-2">stars section</div>
                    <span className="text-secondary">40</span>
                  </a>
                </div>
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pro;
