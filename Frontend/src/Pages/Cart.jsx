import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { Link, useNavigate } from "react-router-dom";
import PayButton from "../Components/PayButton";
import { clearcart } from "../../Features/CartSlice";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const cartitems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const auth = useSelector((state) => state.auth);
  const Subtotal = cartitems.reduce(
    (accumaltor, current) => accumaltor + current.price * current.count,
    0
  );
  // console.log(Subtotal);
  // console.log(cartitems.length);
const handleclearcart=()=>{

    toast.warning("cart cleared !",  {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",});

    dispatch(clearcart())
  
}
  return (
    <>
      {cartitems?.length > 0 ? (
        <div>
          <section class="py-10 bg-gray-100 font-poppins dark:bg-gray-700">
            <div class="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
              <div >
                <div className="flex justify-between items-center">
                <h2 class="mb-8 text-4xl font-bold dark:text-gray-400">
                  Your Cart
                </h2>
             
                <button onClick={handleclearcart} class="text-gray-800  font-semibold  border-2 border-solid dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                  clear cart
                </button>
                </div>
                <div class="p-6 mb-8 border bg-gray-50 dark:bg-gray-800 dark:border-gray-800">
                  <div class="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
                    <div class="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                      <h2 class="font-bold text-gray-500 dark:text-gray-400">
                        Product name
                      </h2>
                    </div>
                    <div class="hidden px-4 lg:block lg:w-2/12">
                      <h2 class="font-bold text-gray-500 dark:text-gray-400">
                        Price
                      </h2>
                    </div>
                    <div class="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                      <h2 class="font-bold text-gray-500 dark:text-gray-400">
                        Quantity
                      </h2>
                    </div>
                    <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                      <h2 class="font-bold text-gray-500 dark:text-gray-400">
                        {" "}
                        Subtotal
                      </h2>
                    </div>
                  </div>
                  <div class="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
                    {/* list starts here */}
                    {cartitems.map((item) => {
                      if(item){
                        return  <CartItem item={item} />
                      }
                        })}
                  </div>
                </div>
                <div class="flex flex-wrap justify-between">
                  <div class="w-full px-4 mb-4 lg:w-1/2 ">
                    <div class="flex flex-wrap items-center gap-4">
                      <span class="text-gray-700 dark:text-gray-400">
                        Apply Coupon
                      </span>
                      <input
                        type="text"
                        class="w-full px-8 py-4 font-normal placeholder-gray-400 border lg:flex-1 dark:border-gray-700 dark:placeholder-gray-500 dark:text-gray-400 dark:bg-gray-800"
                        placeholder=""
                        required
                      />
                      <button class="inline-block w-full px-8 py-4 border-10 font-bold text-center text-black-100 rounded-md lg:w-32 hover:bg-white-600 ">
                        Apply
                      </button>
                    </div>
                  </div>
                  <div class="w-full px-4 mb-4 lg:w-1/2 ">
                    <div class="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-gray-50 md:p-8">
                      <h2 class="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        Order Summary
                      </h2>
                      <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                        <span class="text-gray-700 dark:text-gray-400">
                          Subtotal
                        </span>
                        <span class="text-xl font-bold text-gray-700 dark:text-gray-400 ">
                          ${Math.ceil(Subtotal)}
                        </span>
                      </div>
                      <div class="flex items-center justify-between pb-4 mb-4 ">
                        <span class="text-gray-700 dark:text-gray-400 ">
                          Shipping
                        </span>
                        <span class="text-xl font-bold text-gray-700 dark:text-gray-400 ">
                          Free
                        </span>
                      </div>
                      <div class="flex items-center justify-between pb-4 mb-4 ">
                        <span class="text-gray-700 dark:text-gray-400">
                          Order Total
                        </span>
                        <span class="text-xl font-bold text-gray-700 dark:text-gray-400">
                          ${Math.ceil(Subtotal)}
                        </span>
                      </div>
                      <h2 class="text-lg text-gray-500 dark:text-gray-400">
                        We offer:
                      </h2>
                      <div class="flex items-center gap-2 mb-4 ">
                        <a href="#">
                          <img
                            src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                            alt=""
                            class="object-cover h-16 w-26"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                            alt=""
                            class="object-cover h-16 w-26"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                            alt=""
                            class="object-cover h-16 w-26"
                          />
                        </a>
                      </div>
                      <div class="flex items-center justify-between ">
                        {auth._id ? (
                          <PayButton cartitems={cartitems} />
                        ) : (
                          <button
                            onClick={() => navigate("/login")}
                            class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600"
                          >
                            login
                          </button>
                        )}
                      </div>
                      <div class="flex items-center justify-center mt-6">
                        <p>
                          <span class="dark:text-gray-400">or,</span>

                          <Link to="/products" class="pl-1 text-blue-600 hover:underline dark:text-gray-300">
                            Continue Shopping
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="flex justify-center items-center h-96 w-full flex-col -z-1">
          <span>Cart is empty</span>
          <Link
            to="/products"
            class=" text-blue-600 hover:underline dark:text-gray-300 "
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;

