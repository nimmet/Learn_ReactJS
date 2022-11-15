import { useReducer } from "react";
import { createContext } from "react";
import CartReducer from "../Reducer";

export const CartContext = createContext(null)

const initialState = {
    cartItems : []
}


const CartState = ({children})=> {

    const [state, dispatch] = useReducer(CartReducer,initialState)

    const addToCart = (currentProductItem) => {
        dispatch({type: 'ADD_TO_CART', currentProductItem: currentProductItem})
    }

    const removeFromCart = (currentIdToBeDeleted,typeOfDelete) => {
        dispatch({type: 'REMOVE_FROM_CART', currentIdToBeDeleted, typeOfDelete})
    }


    return (
        <CartContext.Provider value={{
            cartItems : state.cartItems,
            addToCart,
            removeFromCart,
            }}>
            {children}
            </CartContext.Provider>
    )
}

export default CartState
