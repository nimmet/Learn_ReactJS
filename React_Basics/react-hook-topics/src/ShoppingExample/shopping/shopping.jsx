
import React from 'react'
import { BrowserRouter, Outlet, Routes } from 'react-router-dom'
import CartItem from '../component/cartItem.component'
import { CartContextProvider } from '../context/cart.context'
import { ProductContextProvider } from '../context/product.context'
import Navbar from '../navigation/navbar.component'
import ProductList from '../Products/productlist.component'

const Shopping = () => {
  return (
    <div>

    
        <ProductContextProvider>
    
        {/* <Navbar /> */}
       
            <ProductList/>
            <CartContextProvider>
              <CartItem/>
            </CartContextProvider>
        </ProductContextProvider>
    </div>
  )
}

export default Shopping

