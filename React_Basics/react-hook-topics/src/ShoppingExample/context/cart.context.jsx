

import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([])

  return (
    <CartContext.Provider values={cartItems}>
        {children}
    </CartContext.Provider>
  )
}

export  {CartContext,CartContextProvider}