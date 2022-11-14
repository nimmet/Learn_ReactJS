
import React from 'react'
import { createContext,useState } from 'react'

const CartItemContext = createContext() 

const CartItemProvider = ({children}) => {
    // const [cartItems, setCartItems] = useState([])
    let cartItems = ['empty']

  return (
    <CartItemContext.Provider value={cartItems} >
        {children}
    </CartItemContext.Provider>
  )
}

export  {CartItemProvider,CartItemContext }