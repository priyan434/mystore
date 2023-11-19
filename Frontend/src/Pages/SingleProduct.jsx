import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  addtocart,
  increasequantity,
  decreasequantity,
} from "../../Features/CartSlice";

import StarRatings from "../Components/StarRatings";
import { useDispatch, useSelector } from "react-redux";
import { ProductsFetch, getSingleProduct } from "../../Features/ProductSlice";

const SingleProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const fetchsingleproduct = async () => {
    // console.log(id);
    const response = await axios.get(
      `http://localhost:5000/api/products/getsingleproduct/${id}`
    );
    // console.log(response.data);
    setItem(response.data);
    return response.data;
  };
  useEffect(() => {
    fetchsingleproduct();
  }, [id]);

  // console.log(item);

  const { name, price, imageSrc, stock, description, rating, category } = item;
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
    dispatch(increaseCount(id, count));
    f;
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Render the product details
  return (
    <div>
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 flex justify-center items-center">
              <div className="sticky top-0 z-50 overflow-hidden">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4">
                  <img
                    src={imageSrc}
                    alt=""
                    className="object-fit w-8/12 lg:h-full mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-8">
                  <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                    New
                  </span>
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    {name}
                  </h2>
                  <div className="flex items-center mb-6">
                    {/* Render star ratings here using a reusable component */}
                    <StarRatings rating={rating} />
                    <p className="text-xs dark:text-gray-400">
                      (120 customer reviews)
                    </p>
                  </div>
                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                    {description}
                  </p>
                  <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400">
                    <span> ~{price}</span>
                    <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                      {price + 67}
                    </span>
                  </p>
                  <p className="text-green-600 dark:text-green-300">
                    {} in stock
                  </p>
                </div>
                <div className="w-32 mb-8">
                  <label
                    htmlFor=""
                    className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
                  >
                    Quantity
                  </label>

                  <div>
                    <label for="Quantity" class="sr-only">
                      {" "}
                      Quantity{" "}
                    </label>

                    <div class="flex items-center gap-1 border border-gray-600 rounded-md mt-4">
                      <button
                        type="button"
                        class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 border-r border-gray-600"
                        onClick={decreaseCount}
                      >
                        &minus;
                      </button>

                      <input
                        type="number"
                        id="Quantity"
                        value={count}
                        class="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      />

                      <button
                        type="button"
                        class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 border-l border-gray-500 "
                        onClick={increaseCount}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center -mx-4">
                  <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                    <button
                      className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                      onClick={() =>
                        dispatch(
                          addtocart({
                            name,
                            category,
                            price,
                            count,
                            imageSrc,
                            id,
                          })
                        )
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                    <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
