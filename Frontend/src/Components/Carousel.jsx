import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { addtocart } from "../../Features/CartSlice";

const Carousel = () => {
  const dispatch = useDispatch();

  const newArrival = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 301,
      price: 999,
      name: "White T-shirt",
      category: "men's clothing",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 303,
      price: 999,
      name: "iphone 8",
      category: "electronics",
    },
    {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1690349404224-53f94f20df8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 302,
      price: 999,
      name: "women clothing",
      category: "women's clothing",
    },
  ];
  const handleclick = (item) => {
    console.log(item);
    dispatch(
      addtocart({
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price,
        imageSrc: item.imageSrc,
      })
    );
  };

  return (
    <div className=" p-7 mt-4">
      <div className="flex flex-row justify-center items-center sm:flex-col md:flex:col lg:flex-row">
        {newArrival.map((item) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={item.imageSrc}
                  alt="image"
                  className="rounded-xl card h-30 w-38 md:h-48 md:w-48 lg:h-64 lg:w-64 mx-auto object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.category}</h2>

                <div className="card-actions">
                  <button
                    className="text-md  focus:none bg-gray-900 text-white p-2 rounded-xl "
                    onClick={() => {
                      handleclick(item);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
{
  /* <Slider {...settings}>

</Slider> */
}
{
  /* {productsImg.length > 0 ? (
  productsImg.map((item) => (
    <div key={item.id} className="my-2 rounded-2xl shadow-2xl ml-10">
      <div className="relative w-56 h-64 rounded-sm">
        <div className="w-full h-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75">
          <img
            src={item.imageSrc}
            alt="image"
            className="card h-30 w-38 md:h-48 md:w-48 lg:h-64 lg:w-64 mx-auto  bg-gray-400 bg-transparent"
          />
        </div>
      </div>
    </div>
  ))
) : (
  <div>Loading...</div>
)} */
}
// const [settings, setSettings] = useState({
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 5,
//   slidesToScroll: 3,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 1190,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 900,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// });
