import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AddProduct, DeleteProduct } from "../../Features/ProductSlice";
import Ad_ProductCard from "./Ad_ProductCard";
import AddProductButton from "./AddProductButton";
const Ad_products = () => {
  // const products = useSelector((state) => state.products.products);
  const [products, setProducts] = useState([]);
  const addproductstatus = useSelector((state) => state.products);
  const [productImage, setProductImage] = useState("");
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(null);
  const [rating, setRating] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [trimStart, setTrimStart] = useState(0);
  const [trimEnd, setTrimEnd] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const numberPerPage = 10;

  const numberOfItems = products.length;
  const numberOfPages = Math.ceil(numberOfItems / numberPerPage);
  const handleupload = (e) => {
    const file = e.target.files[0];
    transformfile(file);
  };

  const transformfile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
    } else {
      setProductImage("");
    }
  };
  // console.log(productImage);
  const handlesubmit = (e) => {
    e.preventDefault();

    dispatch(
      AddProduct({
        name,
        id,
        stock,
        category,
        price,
        description,
        rating,
        imageSrc: productImage,
      })
    );
  };

  const updatePage = (page) => {
    const start = (page - 1) * numberPerPage;
    const end = start + numberPerPage;
    setTrimStart(start);
    setTrimEnd(end);
  };

  const handlenext = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
      updatePage(currentPage + 1);
    }
  };

  const handleprev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      updatePage(currentPage - 1);
    }
  };

  useEffect(() => {
    // Fetch or set your products here, for example, using an API call
    // Replace this with your actual data-fetching logic
    const fetchData = async () => {
      try {
        // Example API call using fetch
        const response = await fetch(
          "http://localhost:5000/api/products/getallpro"
        );
        const data = await response.json();
        setProducts(data); // Assuming data is an array of products
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once on mount
  const cat = products.map((ele) => ele.category);
  const category2 = [...new Set(cat)];
  useEffect(() => {
    const handleSuccess = () => {
      setName("");
      setCategory("");
      setId("");
      setPrice("");
      setDescription("");
      setStock("");
      setRating("");
      alert("Success");
    };

    const handleFailure = () => {
      alert("Failed to add product");
    };

    const handlePending = () => {
      alert("Please wait...");
    };

    switch (addproductstatus.addproductstatus) {
      case "success":
        handleSuccess();
        break;
      case "failed to add":
        handleFailure();
        break;
      case "pending":
        handlePending();
        break;
      // Add more cases as needed

      default:
      // Handle other cases if necessary
    }
  }, [addproductstatus]);

  return (
    <div>
      {/* <!-- Start block --> */}
      <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
          {/* <!-- Start coding here --> */}
          <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div class="w-full md:w-1/2">
                <form class="flex items-center">
                  <label for="simple-search" class="sr-only">
                    Search
                  </label>
                  <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                      required=""
                    />
                  </div>
                </form>
              </div>
              <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <AddProductButton category2={category2} />
                <div class="flex items-center space-x-3 w-full md:w-auto">
                  {/* <button
                    id="actionsDropdownButton"
                    data-dropdown-toggle="actionsDropdown"
                    class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    type="button"
                  >
                    <svg
                      class="-ml-1 mr-1.5 w-5 h-5"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                    Actions
                    
                  </button> */}
                  <div className="dropdown">
                    <label tabIndex={0} className="btn m-1">
                      Action
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <label tabIndex={0} className="btn m-1">
                      Action  
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-4 py-4">
                      Product name
                    </th>
                    <th scope="col" class="px-4 py-3">
                      Category
                    </th>
                    <th scope="col" class="px-4 py-3">
                      Stock
                    </th>
                    <th scope="col" class="px-4 py-3">
                      Description
                    </th>
                    <th scope="col" class="px-4 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-4 py-3">
                      <span class="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 ? (
                    products.slice(trimStart, trimEnd).map((item) => {
                      return <Ad_ProductCard item={item} />;
                    })
                  ) : (
                    <div>loading..</div>
                  )}
                </tbody>
              </table>
            </div>
            <nav
              class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {trimStart + 1}
                </span>{" "}
                to{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {Math.min(trimEnd, numberOfItems)}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {numberOfItems}
                </span>{" "}
                Entries
              </span>
              <ul class="inline-flex items-stretch -space-x-px">
                <div class="flex flex-col items-center">
                  {/* <!-- Buttons --> */}
                  <div class="inline-flex mt-2 xs:mt-0">
                    <button
                      class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={handleprev}
                    >
                      Prev
                    </button>
                    <button
                      onClick={handlenext}
                      class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* <!-- End block -->
<!-- Create modal --> */}

      {/* <!-- Update modal --> */}

      {/* <!-- Read modal --> */}

      {/* <!-- Delete modal --> */}
    </div>
  );
};

export default Ad_products;
