import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {registerUser} from "../../Features/AuthSlice"
import { useNavigate,Link } from 'react-router-dom';
const Signup = () => {
  const auth=useSelector((state)=>state.auth);
const navigate=useNavigate();
  useEffect(()=>{

    if(auth._id){
      navigate("/cart")
    }
  },[auth._id,navigate])
  
  const dispatch=useDispatch();
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
  })

  console.log(user);
  const handlesubmit=(e)=>{
    e.preventDefault();
    dispatch(registerUser(user))
    setUser(
      {
        name:"",
        email:"",
        password:"",
      }
    )
  }
  return (
    <div>


<section class="bg-white">
  <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section
      class="relative flex h-32 items bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
    >
      
 
      {/* <img
        alt="Night"
        src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        class="absolute inset-0 h-full w-full object-cover opacity-80"
      /> */}

      <div class="hidden lg:relative lg:block lg:p-12">
       

        <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to MyStore 
        </h2>

        <p class="mt-4 leading-relaxed text-white/90">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
          dolorum aliquam, quibusdam aperiam voluptatum.
        </p>
      </div>
    </section>

    <main
      class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div class="max-w-xl lg:max-w-3xl">
        <div class="relative -mt-16 block lg:hidden">
          <a
            class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
            href="/"
          >
            <span class="sr-only">Home</span>
        
          </a>

          <h1
            class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
          >
            Welcome to MyStore 
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nam dolorum aliquam, quibusdam aperiam voluptatum.
          </p>
        </div>

        <form action="#" onSubmit={handlesubmit} class="mt-8 grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label
              for="Name"
              class="block text-sm font-medium text-gray-700"
            >
               Name
            </label>

            <input
              type="text"
              id="Name"
              name="name"
              onChange={(e)=>setUser({...user,name:e.target.value})}
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

   
          <div class="col-span-6">
            <label for="Email" class="block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              onChange={(e)=>setUser({...user,email:e.target.value})}
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="Password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              onChange={(e)=>setUser({...user,password:e.target.value})}
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="PasswordConfirmation"
              class="block text-sm font-medium text-gray-700"
            >
              Password Confirmation
            </label>

            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

       

          <div class="col-span-6">
            <p class="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" class="text-gray-700 underline">
                terms and conditions
              </a>
              and
              <a href="#" class="text-gray-700 underline">privacy policy</a>.
            </p>
          </div>

          <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Create an account
            </button>

            <p class="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <Link to="/login" class="text-gray-700 underline">Log in</Link>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>

    </div>
  )
}

export default Signup
