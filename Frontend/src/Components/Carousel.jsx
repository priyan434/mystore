import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  return (
    <div className="border-2 border-solid p-7 mt-4">
      <Slider {...settings}>
        <div className="">
          <div className=" relative w-56 ">
            <div className=" w-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center lg:h-full lg:w-full "
              />
            </div>
         
          </div>
        </div>
        <div className="">
          <div className=" relative w-56 ">
            <div className=" w-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center lg:h-full lg:w-full "
              />
            </div>
         
          </div>
        </div>
        <div className="">
          <div className=" relative w-56 ">
            <div className=" w-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center lg:h-full lg:w-full "
              />
            </div>
         
          </div>
        </div>
        <div className="">
          <div className=" relative w-56   ">
            <div className=" w-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center lg:h-full lg:w-full "
              />
            </div>
         
          </div>
        </div>
        <div className="">
          <div className=" relative w-56   ">
            <div className=" w-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center lg:h-full lg:w-full "
              />
            </div>
         
          </div>
        </div>
        <div className="">
          <div className=" relative w-56   ">
            <div className=" w-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center lg:h-full lg:w-full "
              />
            </div>
         
          </div>
        </div>
        <div className="">
          <div className=" relative w-56  ">
            <div className=" w-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center lg:h-full lg:w-full "
              />
            </div>
         
          </div>
        </div>
        <div className="">
          <div className=" relative w-56  ">
            <div className=" w-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center lg:h-full lg:w-full "
              />
            </div>
         
          </div>
        </div>
        <div className="">
          <div className=" relative w-56   ">
            <div className=" w-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center lg:h-full lg:w-full "
              />
            </div>
         
          </div>
        </div>
        <div className="">
          <div className=" relative w-56  ">
            <div className=" w-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center lg:h-full lg:w-full "
              />
            </div>
         
          </div>
        </div>
        <div className="">
          <div className=" relative w-56   ">
            <div className=" w-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center lg:h-full lg:w-full "
              />
            </div>
         
          </div>
        </div>
       
    
    
   
     
   
    
      
      </Slider>
    </div>
  );
};

export default Carousel;
