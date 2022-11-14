import React,{useState,useEffect} from 'react'
import ProductCard from '../components/ProductCard'

const ProductList = () => {

  const [products,setProducts] = useState([])
  const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
      setIsLoading(true)
       const  fetchProducts = ()=> ( fetch("https://fakestoreapi.com/products").
        then((res)=>res.json()).
        then((data)=>setProducts(data)).
        catch((error)=>console.log(error))
        )
        fetchProducts()
        setIsLoading(false)

    },[])
  return (
    <div className='flex flex-row flex-wrap justify-center  gap-4 mx-24'> 
    {
      isLoading ? <div>Fetching data! Pleaes wait </div> : 
      products.map((product, index) =>(
        <ProductCard product= {product} key={`${index}${product.id}`}/>
      ))
    }
    </div>
  )
}

export default ProductList