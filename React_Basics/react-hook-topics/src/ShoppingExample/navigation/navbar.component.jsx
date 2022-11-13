
import React from 'react'
import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {

  
  return (
    <div className=' bg-gray-600 text-white flex justify-center items-center h-[60px] mb-5 sticky top-0 z-10'>
        <h1 className='text-2xl'>Home</h1>
        <div className='text-center my-auto mx-5 cursor-pointer'>
        <BiShoppingBag size="50" fill="white"/>
        <span className=' relative -top-[30px] -left-[2px] text-sm '>14</span>
       
        </div>
    </div>
  )
}

export default Navbar

