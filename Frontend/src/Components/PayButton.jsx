import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const PayButton = ({cartitems}) => {
  // console.log(typeof(cartitems));
  // const car= JSON.stringify(cartitems)
  // console.log(car);
    const user=useSelector((state)=>state.auth)
    const handlecheckout=()=>{
        console.log("checkout");
        // console.log(cartitems);
         axios.post('http://localhost:5000/api/stripe/create-checkout-session',{
            cartitems,
            userId:user._id,

         }).then((res)=>{
            if(res.data.url){
                window.location.href=res.data.url
            }
         }).catch((err)=>console.log(err.response.message))
    }
  return (
    <>
      <button onClick={handlecheckout} class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">
        Checkout
      </button>
    </>
  );
};

export default PayButton;
