import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context'

const ProductCard = (props) => {
    const {product} = props
    const {id,category,price,title,rating,image} = product
    const {addToCart} = useContext(CartContext)
  return (
    <div className=' w-[220px] border-[1.5px] border-gray-600 my-5 mx-5 rounded-md flex flex-col justify-center  '> 
    <div className=' overflow-hidden  justify-center'>
        <img src={image} alt={id} className=' h-[220px] w-full my-5 mx-auto hover:scale-125  transition-all ease-in-out' />
    </div>
    <div className=' ml-2 py-4 text-xl capitalize items-start'>
    <h1>{category}</h1>
    <h1>{title.substring(0,20)}</h1>
    <h1>{price}</h1>
    <h1>{rating.rate}</h1>
    <button className=' bg-amber-500 rounded-2xl px-3 py-1 my-2 font-[400] outline outline-yellow-600'
     onClick={()=>addToCart(product)}>Add to cart</button>
    </div>
    </div>
  )
}

export default ProductCard