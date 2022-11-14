

import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const CartContext = createContext()

const CartContextProvider = ({children}) => {

    
    const [cartItems, setCartItems] = useState([])
 

  return (
    <CartContext.Provider value={{cartItems,setCartItems}}>
        {children}
    </CartContext.Provider>
  )
}

export  {CartContext,CartContextProvider}