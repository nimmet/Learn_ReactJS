
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cart.context'

const CartItem = () => {
    const items = useContext(CartContext)
    const [id,title,image,price] = items
  return (
    <div>
    
    {
        items.map((item)=>{

         return(   <div>
        <div>
            <div><img src={image} alt={title} /></div>
        </div>
        <h1>{title}</h1>
        <h1>{price}</h1>
    </div>)
})
    }
    </div>
  )
}

export default CartItem