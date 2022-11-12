
// https://fakestoreapi.com/products

import React, { createContext, useEffect, useState } from 'react'

const ProductsContext  = createContext()

const ProductContextProvider = ({children}) => {

    const [data,setData] = useState([])
    useEffect(()=>{
       const  fetchProducts = ()=> ( fetch("https://fakestoreapi.com/products").
        then((res)=>res.json()).
        then((data)=>setData(data)).
        catch((error)=>console.log(error))
       )
       fetchProducts()
    },[])

  return (
    <ProductsContext.Provider value={data}>
        {children}
    </ProductsContext.Provider>
  )
}

export  {ProductContextProvider, ProductsContext}