
import React from 'react'
import { ProductContextProvider } from '../context/product.context'
import Navbar from '../navigation/navbar.component'
import ProductList from '../Products/productlist.component'

const Shopping = () => {
  return (
    <div>

        <ProductContextProvider>
        <Navbar />
            <ProductList/>
        </ProductContextProvider>
    </div>
  )
}

export default Shopping