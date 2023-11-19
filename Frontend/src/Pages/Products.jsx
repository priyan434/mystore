import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";

import { addtocart } from "../../Features/CartSlice";
import {
  fetchbycat,
  clearfilter,
  sort,
  sortPriceHighToLow,
  sortPriceLowToHigh,
} from "../../Features/FilterSlice";
import ProductCard from "../Components/ProductCard";

import Search from "../Components/Search";

const sortOptions = [
  { name: "Best Rating", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [trimStart, setTrimStart] = useState(0);
  const [trimEnd, setTrimEnd] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const numberPerPage = 6;
  const dispatch = useDispatch();

  const products = useSelector((state) => state.filter.filter);
  const category = useSelector((state) => state.filter.products);
  const numberOfItems = products.length;
  const numberOfPages = Math.ceil(numberOfItems / numberPerPage);

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

  // category---------------------------
  const cat = category.map((item) => item.category);
  const newcat = ["All", ...new Set(cat)];

  const options = newcat.map((ele) => ({
    value: ele,
    checked: false,
    label: ele,
  }));
  const options2 = newcat.map((ele) => ({
    name: ele,
    href:"#",
   
  }));
  const [filterStatus, setFilterStatus] = useState([]);

  const handleclearfilter = () => {
    dispatch(clearfilter());
    setTrimStart(0);
    setTrimEnd(6);
  };

  const handleRadioChange = (event) => {
    setTrimStart(0);
    setTrimEnd(6);
    const selectedValue = event.target.value;
    const newFilterStatus = filterStatus.map((opt) => opt === selectedValue);
    setFilterStatus(newFilterStatus);
    dispatch(fetchbycat(event.target.value));
  };
  const searchbycat=(value)=>{
    setTrimStart(0);
    setTrimEnd(6);
    dispatch(fetchbycat(value));
  }

  const handlesort = (value) => {
    if (value === "Best Rating") {
      dispatch(sort());
    } else if (value === "Price: Low to High") {
      dispatch(sortPriceLowToHigh());
    } else if (value === "Price: High to Low") {
      dispatch(sortPriceHighToLow());
    }
  };

  // Filters
  const filters = [
    {
      id: "category",
      name: "category",
      options,
    },
  ];
  const subCategories = options2

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={() => setMobileFiltersOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                           {subCategories.map((category) => (
                        <li key={category.name} className="block px-2 py-1 font-lg text-lg cursor-pointer border-2 elative mr-4 mb-1 hover:scale-105 " onClick={()=>searchbycat(category.name)}>
                         
                            {category.name}
                        
                        </li>
                      ))}
                    </ul>

                    {/* <RangeSlider/> */}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 border lg:px-8">
          <div className="flex items-baseline justify-between  border-b border-gray-900 pb-1 pt-2">
            <h1 className=" hidden text-3xl font-bold tracking-tight text-gray-900 sm:block " >
              New Arrivals
            </h1>
            <div>
            <div className="w-96">
               {/* <Search/> */}
              </div>
            </div>
            <div className="flex items-center">
             
              <div className="dropdown dropdown-bottom ">
                <label tabIndex={0} className="btn m-1">
                  sort
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {sortOptions.map((ele) => {
                    return (
                      <li
                        key={ele.name}
                        onClick={() => handlesort(ele.name)}
                        className="cursor-pointer my-1"
                      >
                        {ele.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                onClick={handleclearfilter}
              >
                <span className="sr-only">clear filter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4  ">
              {/* Filters */}
              <form className="hidden lg:block border-r-2  border-gray-400">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-1 border-b  border-gray-200 pb-1 text-sm font-medium text-gray-900"
                >
                       {subCategories.map((category) => (
                        <li key={category.name} onClick={()=>searchbycat(category.name)} className="block px-2 py-1 font-lg text-lg cursor-pointer border-2 elative mr-4 mb-1 hover:scale-105 ">
                          
                            {category.name}
                       
                        </li>
                      ))}
                </ul>

               
                       {/* <RangeSlider/> */}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {
                  //  ************************************************
                  // products card
                  <section
                    id="Projects"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5"
                  >
                    {products.slice(trimStart, trimEnd).map((product) => (
                      <ProductCard product={product} key={product.id} />
                    ))}
                  </section>
                }

                {/* pagination--------------------------------------- */}

                <div className="text-center border-gray-500 w-50 h-50 mt-4">
                  <div class="flex flex-col items-center">
                    {/* <!-- Help text --> */}
                    <span className="text-sm text-gray-700 dark:text-gray-400">
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

                    {/* <!-- Buttons --> */}
                    <div class="inline-flex mt-2 xs:mt-0">
                      <button
                      disabled={trimStart==0?true:false}
                        class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={handleprev}
                      >
                        Prev
                      </button>
                      <button
                     disabled={trimEnd >= numberOfItems}
                        onClick={handlenext}
                        class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Next  
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
