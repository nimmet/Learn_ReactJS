import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import React from 'react'

const CartDrowdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            <Button>GO TO CHECKOUT</Button>
        </div>
    </div>
  )
}

export default CartDrowdown