import React from 'react'
import { Link } from 'react-router-dom'
import { BiShoppingBag } from "react-icons/bi";
import { useContext } from 'react';
import { CartContext } from '../../Context';
import { useEffect } from 'react';


const Nav = () => {
    const  {cartItems} = useContext(CartContext)
    const cartCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0)
    
  return (
    <div className=' bg-slate-500 sticky top-0 z-10 h-[64px]'>

    <ul className='flex justify-center text-white text-2xl font-bold items-center gap-2'>
        <li className='mx-5 -mt-5'>
            <Link to="/">Home</Link>
        </li>
        <li  className='text-center  mx-5 cursor-pointer mt-2'>
        <Link to='/cart'>
        <BiShoppingBag size="50" fill="white"/>
        <span className=' relative -top-[38px] text-sm '>{cartCount}</span>
       
        </Link>
        
        
        </li>
    </ul>
    </div>
  )
}

export default Nav