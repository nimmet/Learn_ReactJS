import React,{useState,useEffect} from 'react'
import { useCallback } from 'react'
import Products from './products'

const url = 'https://course-api.com/javascript-store-products'

const Example = ()=> {
    const [loading,setLoading] = useState(true)
    const [products,setProducts] = useState([])

    const getProducts = useCallback( async ()=> {
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
        setLoading(false)
    },[url])


    useEffect(()=> {
        getProducts()
    },[url,getProducts])
    // console.log(products)

    return (
        <div>
            <h2>{loading? 'loading...':'data'}</h2>
            <Products products={products} />

        </div>
    )
}

export default Example