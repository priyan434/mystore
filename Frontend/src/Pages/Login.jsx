// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { LoadUser, login } from "../../Features/AuthSlice";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const updatedAuth = useSelector((state) => state.auth);

//   useEffect(()=>{

//     if(updatedAuth._id){
//       navigate("/cart")
//     }
//   },[updatedAuth._id,navigate])
//   // console.log(updatedAuth);
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const handleLogin = (e) => {
//     e.preventDefault();
//     try {
//       dispatch(login(user));

//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <div>
//       <section className="relative flex flex-wrap lg:h-screen lg:items-center">
//         <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
//           <div className="mx-auto max-w-lg text-center">
//             <h1 className="text-2xl font-bold sm:text-3xl">
//               Get started today!
//             </h1>

//             <p className="mt-4 text-gray-500">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
//               nulla eaque error neque ipsa culpa autem, at itaque nostrum!
//             </p>
//           </div>

//           <form
//             action=""
//             onSubmit={handleLogin}
//             className="mx-auto mb-0 mt-8 max-w-md space-y-4"
//           >
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email
//               </label>
//               <div className="relative">
//                 <input
//                   type="email"
//                   name="email"
//                   className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//                   placeholder="Enter email"
//                   onChange={(e) => setUser({ ...user, email: e.target.value })}
//                 />
//                 <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
//                     />
//                   </svg>
//                 </span>
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type="password"
//                   name="password"
//                   className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//                   placeholder="Enter password"
//                   onChange={(e) =>
//                     setUser({ ...user, password: e.target.value })
//                   }
//                 />
//                 <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                     />
//                   </svg>
//                 </span>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-500">
//                 No account?
//                 <a className="underline" href="#">
//                   Sign up
//                 </a>
//               </p>

//               <button
//                 type="submit"
//                 className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>
//         </div>

//         <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
//           <img
//             alt="Welcome"
//             src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
//             className="absolute inset-0 h-full w-full object-cover"
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoadUser, login } from "../../Features/AuthSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updatedAuth = useSelector((state) => state.auth);
  useEffect(() => {
    if (updatedAuth._id) {
      navigate("/cart");
    }
  }, [updatedAuth._id, navigate]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      dispatch(login(user));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {/* <img  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
            <svg
              class="w-8 h-8 mr-2
                xmlns="
              http:fill="none" //www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
              />
            </svg>
            MYS
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6"     onSubmit={handleLogin} action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required=""
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) =>setUser({ ...user, password: e.target.value }) }
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-900 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-600">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    class="font-medium text-blue-900 hover:underline dark:text-primary-500 "
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
