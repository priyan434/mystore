import React from "react";
import { useState } from "react";
import {
  decreasequantity,
  increasequantity,
  removefromcart,
} from "../../Features/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const CartItem = ({ item }) => {
  // console.log(item);
  const dispatch = useDispatch();
  const initialcount = item.count;
  const [cc, setCc] = useState(initialcount);

  const increaseCount = () => {
    setCc(cc + 1);
    console.log("plus");
  };

  const decreaseCount = () => {
    if (cc > 1) {
      setCc(cc - 1);
      console.log("minus");
    }
  };

  return (
    <>
      <div class="flex flex-wrap items-center mb-8 -mx-4 md:mb-8 relative ">
        <div className="absolute -top-2 right-0">
          <button
            onClick={() => {
              dispatch(removefromcart(item.id));
            }}
            className=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-8 text-red-600 font-2xl"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full px-4 mb-3 md:w-1/3">
              <div class="w-full h-96 md:h-24 md:w-24">
                <img
                  src={item.imageSrc}
                  alt=""
                  class="object-fit w-full h-full"
                />
              </div>
            </div>
            <div class="w-2/3 px-4">
              <Link
                to={`/SingleProduct/${item.id}`}
                class="mb-2 text-xl font-bold dark:text-gray-400"
              >
                {item.name}
              </Link>
              <p class="text-gray-500 dark:text-gray-400 ">{item.category}</p>
            </div>
          </div>
        </div>
        <div class="hidden px-4 lg:block lg:w-2/12">
          <p class="text-lg font-bold text-blue-500 dark:text-gray-400">
            {item.price}
          </p>
          <span class="text-xs text-gray-500 line-through dark:text-gray-400">
            {Math.ceil(item.price + 67)}
          </span>
        </div>
        <div class="w-auto px-4 md:w-1/6 lg:w-2/12 ">
          <div class="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md dark:border-gray-700 ">
            <button
              class="py-2 hover:text-gray-700 dark:text-gray-400"
              onClick={() => dispatch(decreasequantity(item.id))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <input
              type="text"
              class="w-12 px-2 py-4 text-center border-0 rounded-md dark:bg-gray-800 bg-gray-50 dark:text-gray-400 md:text-right"
              placeholder="1"
              value={item.count}
            />
            <button
              onClick={() => dispatch(increasequantity(item.id))}
              class="py-2 hover:text-gray-700 dark:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
        <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
          <p class="text-lg font-bold text-blue-500 dark:text-gray-400">
            {Math.floor(item.price * item.count)}
          </p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
