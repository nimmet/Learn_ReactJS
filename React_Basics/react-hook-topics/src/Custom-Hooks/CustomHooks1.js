import React,{useState,useEffect} from 'react'
import Products from './products'
import { useFetch } from './useFetch'


const url = 'https://course-api.com/javascript-store-products'

const CustomHooks = ()=> {
 
    const {loading,products} = useFetch(url)

    return (
        <div>
            <h2>{loading? 'loading...':'data'}</h2>
           <Products products={products} />

        </div>
    )
}

export default CustomHooks