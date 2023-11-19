import React from 'react'
import Carousel from '../Components/Carousel'
import Features from "../Components/Features"
import Newsletter from '../Components/Newsletter'
import Herosection from '../Components/Herosection'
import jew2 from "../assets/jew2.jpg"
import fashion from "../assets/fashion.jpg"
const Homepage = () => {

  return (
    <div>

<div id="default-carousel" class="relative w-full" data-carousel="slide">
 
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://images.unsplash.com/photo-1587749091716-f7b291a87f87?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="absolute block w-full  object-fit -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="absolute block object-fit w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={fashion} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    
       
    </div>
   
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        {/* <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> */}
    </div>

    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
<Herosection/>
<h2 className='text-center mt-3 text-xl font-bold decoration-solid underline'>NEW ARRIVALS</h2>
<Carousel/>

<Features/> 
<Newsletter/>
    </div>
  )
}

export default Homepage
