import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddProduct } from "../../Features/ProductSlice";
const AddProductButton = ({category2}) => {
    // console.log(category2);
    const dispatch = useDispatch();
    const [productImage, setProductImage] = useState("");

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(null);
    const [rating, setRating] = useState(null);
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
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
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleSubmit = (e) => {
      // Handle form submission logic here
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
        }))





      // You can add additional logic for handling form submission
      // For example, sending data to the server
      closeModal(); // Close the modal after submitting the form
    };
  
  return (
    <>
      <button
        className=" flex items-center justify-center text-white bg-blue-900  font-medium rounded-lg text-sm px-4 py-2 "
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add Product
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-full max-w-5xl">
          <form
            method="dialog"
            
            className="flex justify-end"
          >
            {/* if there is a button in form, it will close the modal */}
            <button  className="btn">
              Close
            </button>
          </form>
          <div id="c" aria-hidden="true" class="h-full">
            <div class="relative mx-auto p-4 w-full max-w-2xl max-h-full">
              {/* <!-- Modal content --> */}
              <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                {/* <!-- Modal header --> */}
                <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Add Product
                  </h3>
                </div>
                {/* <!-- Modal body --> */}
                <form action="#" onSubmit={handleSubmit}>
                  <div class="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="id"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Id
                      </label>
                      <input
                        type="number"
                        name="id"
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Id"
                        required=""
                      />
                    </div>

                    <div>
                      <label
                        for="price"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="$2999"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="category"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        value={category}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        {}

                        <option selected="">Select category</option>
                        {category2?.map((item, i) => {
                          return (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          );
                        })}
                        {/* <option value="TV">TV/Monitors</option>
                        <option value="PC">PC</option>
                        <option value="GA">Gaming/Console</option>
                        <option value="PH">Phones</option> */}
                      </select>
                    </div>
                    <div>
                      <label
                        for="Stock"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Stock
                      </label>
                      <input
                        type="number"
                        name="Stock"
                        id="stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Stock"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="Rating"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Rating
                      </label>
                      <input
                        type="number"
                        value={rating}
                        name="Rating"
                        id="Rating"
                        onChange={(e) => setRating(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Rating"
                        required=""
                      />
                    </div>
                    <div class="sm:col-span-2">
                      <label
                        for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write product description here"
                      ></textarea>
                    </div>
                  </div>
                  <div class="flex items-center justify-center w-full">
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <img
                          src={productImage}
                          class="w-40 h-40 mb-4"
                          alt="Image Preview"
                        />
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        accept="image/"
                        class="hidden"
                        onChange={handleupload}
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    class="text-white inline-flex items-center bg-blue-700  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      class="mr-1 -ml-1 w-6 h-6"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Add new product
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="modal-action"></div>
        </div>
      </dialog>
    </>
  );
};

export default AddProductButton;
