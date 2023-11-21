

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteProduct, UpdateProduct } from "../../Features/ProductSlice";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const DeleteModal = ({ isOpen, onClose, onDelete, itemName }) => {
  const handleDelete = () => {
    onDelete();
    onClose();
  };
 
  
  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box w-96 max-w-5xl">
        <form method="dialog" className="flex justify-end">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </form>
        <h3 className="font-bold text-center text-red-700 text-lg">
          Are you sure!
        </h3>
        <div className="flex justify-center mt-4">
          <button onClick={onClose} className="text-center w-14 font-semibold text-lg border rounded-lg border-gray-600 ml-2">
            No
          </button>
          <button onClick={handleDelete} className="text-center w-14 bg-gray-900 text-white font-semibold text-lg rounded-lg ml-2">
            Yes
          </button>
        </div>
        <div className="modal-action"></div>
      </div>
    </div>
  );
};

const EditModal = ({ isOpen, onClose, onEdit, item }) => {
  const [editedItem, setEditedItem] = useState(item);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [productImage, setProductImage] = useState(item.imageSrc);
  const [name, setName] = useState(item.name);
  const [id, setId] = useState(item.id);
  const [category2, setCategory] = useState(item.category);
  const [stock, setStock] = useState(item.stock);
  const [rating, setRating] = useState(item.rating);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products/getallpro");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const cat = products.map((ele) => ele.category);
  const category = [...new Set(cat)];

  const handleEdit = () => {
    onEdit(editedItem);
    onClose();
  };

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

 
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(UpdateProduct({
      id,
      name,
      price,
      category: category2,
      description,
      stock,
      rating,
      imageSrc: productImage
    }));
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
        <ToastContainer 
         />
      <div className="modal-box w-full max-w-5xl">
        <form method="dialog" className="flex justify-end">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </form>
        <form action="#" onSubmit={handleUpdate}>
          {/* ... existing code ... */}
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
                onChange={(e)=>setName(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ex. Apple iMac 27&ldquo;"
              />
            </div>
            <div>
              <label
                for="brand"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                id
              </label>
              <input
                type="number"
                name="id"
                id="id"
                value={id}
                onChange={(e)=>setId(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ex. 123"
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
                value={price}
                name="price"
                id="price"
                onChange={(e)=>setPrice(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$299"
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
                onChange={(e)=>setCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value={item.category} selected>
                  {item.category}
                </option>
                {category.map((ele) => {
                  if (ele !== item.category) {
                    return (
                      <option key={ele} value={ele}>
                        {ele}
                      </option>
                    );
                  }
                  return null; // Exclude the selected category from the options
                })}
              </select>
            </div>
            <div>
              <label
                for="stock"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Stock
              </label>
              <input
                type="number"
                name="stock"
                id="stock"
                value={stock}
                onChange={(e)=>setStock(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ex. 123"
              />
            </div>
            <div>
              <label
                for="rating"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rating
              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                value={rating}
                onChange={(e)=>setRating(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ex. 123"
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
                rows="5"
                onChange={(e)=>setDescription(e.target.value)}
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write a description..."
              >
                {item.description}
              </textarea>
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
                      // src=""
                      class="w-40 h-40 mb-4"
                      alt="Image Preview"
                    />
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
          <input
            id="dropzone-file"
            type="file"
            accept="image/"
            className="hidden"
            onChange={handleupload}
          />
           </label>
              </div>
          <div class="flex items-center space-x-4"></div>
          {/* ... existing code ... */}
          <button type="submit" className="text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Update product
          </button>
        </form>
        <div className="modal-action"></div>
      </div>
    </div>
  );
};

const Ad_ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleDelete = () => {
    console.log("item id:", item.id);


    dispatch(DeleteProduct(item.id));
    toast.warning("Deleted!",  {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",});
  };

  const handleEdit = (editedItem) => {
    console.log("Edited item:", editedItem);
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  return (
    <>
      <tr key={item.id} className="border-b dark:border-gray-700">
        {/* ... existing code ... */}
        <th
          scope="row"
          class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {item.name.substring(0, 20)}&#34;
        </th>
        <td class="px-4 py-3">{item.category}</td>
        <td class="px-4 py-3">{item.stock}</td>
        <td class="px-4 py-3 max-w-[12rem] truncate">
          {item.description.substring(0, 30)}...
        </td>
        <td class="px-4 py-3">~{item.price}</td>
        <td>
        <button className="btn" onClick={() => setEditModalOpen(true)}>
          edit
        </button>
        <EditModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          onEdit={handleEdit}
          item={item}
        />
        </td>
        <td>
          <button className="btn" onClick={openDeleteModal}>
            delete
          </button>
          <DeleteModal
            isOpen={isDeleteModalOpen}
            onClose={closeDeleteModal}
            onDelete={handleDelete}
            itemName={item.id}
          />
         
        </td>
        
      </tr>
      
    </>
  );
};

export default Ad_ProductCard;
