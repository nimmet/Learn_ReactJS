
import React from 'react'
import { ProductContextProvider } from '../context/product.context'
import ProductList from '../Products/productlist.component'

const Shopping = () => {
  return (
    <div>
        <ProductContextProvider>
            <ProductList/>
        </ProductContextProvider>
    </div>
  )
}

export default Shopping