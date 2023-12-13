import React from "react";
import { Link } from "react-router-dom";

const CheckoutSucess = () => {
  return (
    <div className="flex justify-center items-center h-96 w-full">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mx-auto">Checkout Success !</h2>

          <div className="card-actions justify-center">
            <Link to="/" className="font-bold mt-6 flex flex-row items-center justify-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 mr-2 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSucess;
