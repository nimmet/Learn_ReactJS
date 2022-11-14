import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { cartItems } = state;
      const { currentProductItem } = action;
      let updateCartItems = [...cartItems];
      console.log(updateCartItems);

      const checkIndexOfCurrentItem  = updateCartItems.findIndex(item=> item.id === currentProductItem.id)
      if(checkIndexOfCurrentItem===-1){
        updateCartItems.push({
            ...currentProductItem,
        quantity:1
    })

      } else{
        const checkIfTheItemAlreadyExists = updateCartItems.find(item=> item.id === updateCartItems[checkIndexOfCurrentItem].id)
        updateCartItems[checkIndexOfCurrentItem] = {
            ...checkIfTheItemAlreadyExists,
            quantity: checkIfTheItemAlreadyExists.quantity+1
        }
      }
      return {
       ...state,
        cartItems: updateCartItems
      }

      console.log(checkIndexOfCurrentItem,updateCartItems);

    case REMOVE_FROM_CART:
      console.log("===================================");
      console.log("remove from cart is called");
      console.log("===================================");

    default:
      return state;
  }
};

export default CartReducer;
