
import React from 'react'
import { useState } from 'react'

const Product = ({id,title,category,image,price,rating} ) => {
//     const product ={"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}
// }
    // const {id,title,category,image,price,rating}  = {...product}

  return (
    <div className='flex flex-col justify-center items-start w-[250px] px-5 py-2 border border-gray-500 rounded-md gap-1 '>
        <img src={image} alt={id} width="200" className=' h-[250px]  my-5 mx-auto' />
        <h1>{category}</h1>
        <h1 className=''>{title.substring(0,25)}</h1>
        <h1>{price}</h1>
        <h1>{rating['rate']}</h1>
        <button className=' bg-amber-500 px-3 py-1 rounded-full  '>Add to cart</button>
    </div>
  )
}

export default Product