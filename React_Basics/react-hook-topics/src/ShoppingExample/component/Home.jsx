import { Route,Routes } from 'react-router-dom'
import React from 'react'
import Shopping from '../shopping/shopping'
import CartItem from './cartItem.component'
import { BrowserRouter } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <BrowserRouter>

    <Routes>

        <Route  path="/" component={<Shopping/>} />
        {/* <Route index element={Shopping}/> */}
        <Route path="cart" element={<CartItem />}/>
        
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default Home