import React from 'react'
import Login from './Login'

const Navbar = () => {
  return (
    <div>
        <nav className=' w-full bg-gradient-to-r from-teal-700 to-teal-800/90 h-14 '>
<ul className=' flex justify-between mx-24 font-bold text-white items-center text-2xl py-2'>
    <li>React Authentication</li>
    <li>Login</li>
</ul>
        </nav>
        <Login/>
    </div>
  )
}

export default Navbar