import React,{useState,useEffect} from 'react'
import { useFetch } from './useFetch'
import Product from './product'


const url = 'https://course-api.com/javascript-store-products'

const CustomHooks = ()=> {
 
    const {loading,products} = useFetch(url)

    return (
        <div>
            <h2>Products</h2>
            {
                products.map((product) => {
                    const {id, fields} = product
                    return <Product key={id} {...fields}/>
                  
                })
            }
          

        </div>
    )
}

export default CustomHooks