
import React from 'react'
import {ReactComponent as ShoppingCartSvg} from '../../assets/images/shopping-bag.svg'
import { BiShoppingBag } from "react-icons/bi";
import CartItem from '../component/cartItem.component';

const Navbar = () => {

  
  return (
    <div className=' bg-gray-600 text-white flex justify-center items-center h-[60px] mb-5 sticky top-0 z-10'>
        <h1 className='text-2xl'>Home</h1>
        <div className='text-center my-auto mx-5 cursor-pointer'><a href="/CartItem">
        <BiShoppingBag size="50" fill="white"/>
        <span className=' relative -top-[30px] -left-[2px] text-sm '>14</span>
        </a>
        </div>
    </div>
  )
}

export default Navbar

