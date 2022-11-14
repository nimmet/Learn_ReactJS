import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context";
import { BiPlus,BiMinus } from "react-icons/bi";

const Cart = () => {
  const { cartItems, addToCart,removeFromCart } = useContext(CartContext);

  console.log(cartItems);

  const handleDelete = (id)=>{
   
         cartItems.filter((it)=> it.id !== id)
    
}

  return (
    <div className=" ">
    {!cartItems.length && <div className="text-center font-bold text-2xl mt-5 ">Cart is empty</div>}
      {cartItems.map((item) => {
        const { id, category, price, title, rating, image,quantity } = item;

        return (
          <div key={id} className=" flex gap-5 justify-center my-5 items-center bg-sky-200/20  ">
        
            <img src={image} alt={id}  className="w-16 h-16 ml-4"/>
         
            <h1 className="mx-5 px-1 w-[98px]  ">{title.substring(0,10)}</h1>
            <div className=" flex-row flex justify-center items-center flex-1">
            <BiMinus size={30} className='cursor-pointer' fill="red" onClick={()=> removeFromCart(item)} />
            <h1 className="mx-4 " >{quantity}</h1>
            <BiPlus size={30} className='cursor-pointer' fill="green" onClick={()=> addToCart(item)}/>
            </div>
            <h1 className="mx-1 flex-1">{price} $</h1>
            <button className=' bg-amber-500 rounded-2xl px-3 py-1 my-2 font-[400] outline outline-yellow-600 mr-4' onClick={()=>handleDelete(id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
