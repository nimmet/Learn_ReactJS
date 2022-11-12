
import React, { useContext, useEffect, useState } from 'react'
import {ProductsContext } from '../context/product.context'
import Product from './product.component'

const ProductList = () => {

  const products = useContext(ProductsContext)
  return (
    <div className=' flex gap-5 flex-wrap justify-center'>
      {  
          products.map((product) =>
              <Product key={product.id} {...product}/>)
           
      }
        
    </div>
  )
}

export default ProductList