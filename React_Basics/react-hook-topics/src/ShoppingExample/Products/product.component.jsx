
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CartItemContext } from '../context/CartItem.context'


let shoppingCartItems =[]

const Product = ({id,title,category,image,price,rating} ) => {

    // const {id,title,category,image,price,rating}  = {...product}




const [item,setItem] = useState({})

// const addToShoppingCart = ()=> {
//   // const newCartItems =  
//   //   {id,title,image,price}
//     // setCartItems([...cartItems,{id,title,image,price}])
//     // setCartItems({...cartItems,id,title,image,price})
//   // {'id':id, 'title':title, 'image':image,'price':price}
//   // setCartItems(addToCart({id,title,image,price}))
//   // shoppingCartItems=[...shoppingCartItems,cartItems]
//   // console.log(shoppingCartItems);
// }

// const addToCart = ({id,title,image,price})=> {
//   // console.log(cartItems);

// return [...cartItems,{id,title,image,price}]
// }

// useEffect(()=>{
//   setCartItems(addToCart({id,title,image,price}))
  
// },[])



const onChangeHandler = (e)=>{
 const {name,value} = e.target
 console.log(name,value);
}

let cartItems = useContext(CartItemContext)

const addItemToCart = ()=> {

  setItem({id,title,image,price})
  cartItems = [{id,title,image,price}]
  console.log(cartItems);
}

  return (
    <div className='flex flex-col justify-center items-start w-[250px] px-5 py-2 border border-gray-500 rounded-md gap-1'>
    <div className=' overflow-hidden'>

        <img src={image} alt={id}  className=' h-[250px] w-[200px] my-5 mx-auto hover:scale-125  transition-all ease-in-out' />
    </div>
        <h1>{category}</h1>
        <h1 className=''>{title.substring(0,25)}</h1>
        <h1 name="price" >{price}</h1>
        <h1>{rating['rate']}</h1>
        <button className=' bg-amber-500 px-3 py-1 rounded-full  ' onClick={addItemToCart}>Add to cart</button>
    </div>
  )
}


export default Product