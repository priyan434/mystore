import React from "react";
import { Link } from "react-router-dom";
import BasicRating from "./BasicRating";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Features/CartSlice";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const ProductCard = ({ product }) => {
  const dispatch=useDispatch();
const handleaddtocart=()=>{
  // console.log("count");
  toast.success("Added to cart !",  {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",});

  dispatch(addtocart({
    id:product.id,
    name:product.name,
    category:product.category,
    price:product.price,
    imageSrc:product.imageSrc,
  
  }))
}
  return (
    <>

      <div key={product.id}  className="col-span-1 relative z-0 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <div className="card text-center">
          <Link to={`/singleProduct/${product.id}`} className="relative">
            <img
              className="card h-40 w-40 md:h-48 md:w-48 lg:h-64 lg:w-64 border mx-auto object-fit"
              src={product.imageSrc}
              alt="Image Description"
            />
            <div className="absolute top-0 left-0 pt-3 pl-3">
              {/* <span className="badge badge-success badge-pill">New arrival</span> */}
            </div>
          
          </Link>
          <div className="card-body pt-4 px-4 pb-0">
            <div className="mb-2">
              <a
                className="inline-block text-gray-700 font-semibold text-sm  mb-1"
                href="#"
              >
                {product.category}
              </a>
              <h3 className="text-secondary">
                <a href="#" className="text-secondary">
                  {product.name.substring(0,25)}
                </a>
              </h3>
              <div className="block text-sm">
                <span className="font-medium">~{product.price}</span>
              </div>
            </div>
          </div>
          <div className="card-footer border-0 pt-0 pb-4 px-4">
            <div className="mb-3">
              <a className="inline-flex items-center text-sm" href="#">
                <div className="text-warning mr-2"> <BasicRating rating={product.rating} /></div>
                {/* <span className="text-secondary">40</span> */}
              </a>
            </div>
            <button
              type="button"
              onClick={handleaddtocart}
              className="bg-blue-500 relative -z-4 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <ToastContainer 
         />
      </div>
    </>
  );
};

export default ProductCard;
