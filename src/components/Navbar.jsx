import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
const Navbar = () => {
  return (

<div className='text-center mx-auto'>
<header className="text-gray-600 body-font bg-[#93c5fd] mx-auto">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <img src="/image/logo.png" alt="img" className='w-12 h-12 rounded' />
        <span className="ml-3 text-xl"><span className='text-red-600'>E</span>-commerce</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center  justify-center">
        <a className="mr-5 text-[#020617]  font-semibold">First Link</a>
        <a className="mr-5 text-[#020617]  font-semibold">Second Link</a>
        <a className="mr-5 text-[#020617] font-semibold">Third Link</a>
        <a className="mr-5 text-[#020617] font-semibold">Fourth Link</a>
      </nav>
      <div class="relative inline-flex">
    <button
      class="reld:opacity-50 disabled:shadow-none "
      type="button">
  <GiShoppingCart  className='text-3xl'/>
    </button>
    <span
      class="absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white min-w-[24px] min-h-[24px]">
      5
    </span>
  </div>
    </div>
  </header>
</div>


  )
}

export default Navbar
