
import React, { useContext, useEffect, useState } from 'react'
import CartItem from '../component/cartItem.component'
import { CartItemProvider } from '../context/CartItem.context'
import {ProductsContext } from '../context/product.context'
import Product from './product.component'

const ProductList = () => {

  const products = useContext(ProductsContext)
  
  return (
    <div className=' flex gap-5 flex-wrap justify-center mb-5'>
    <CartItemProvider>

      {  
          products.map((product) =>
              <Product key={product.id} {...product}/>)
           
      }
      <CartItem/>
    </CartItemProvider>
        
    </div>
  )
}

export default ProductList