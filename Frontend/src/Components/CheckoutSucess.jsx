import React from "react";
import { Link } from "react-router-dom";

const CheckoutSucess = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Checkout Success !</h2>
          
          <div className="card-actions justify-end">
            <Link to="/" className="btn btn-primary">Continue shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSucess;
