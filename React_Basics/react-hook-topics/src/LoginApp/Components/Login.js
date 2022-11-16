
import React from 'react'

const Login = () => {
  return (
    <div>
        <div className=' flex flex-col items-center gap-2 bg-gradient-to-r from-teal-800 to-teal-700 my-12 w-[450px] mx-auto text-white py-5 rounded-md '>
            <h1 className='text-bold text-xl my-5  '>Login</h1>
            <form action="" className='flex flex-col  items-center gap-2 pb-2 '>
            <label htmlFor="email">Email</label>
                <input type="email" name="email"  className=' rounded-md grow w-[230%] h-8'/>
            <label htmlFor="password">Password</label>    
                <input type="password" name="password" className=' rounded-md grow w-[230%] h-8 mb-5'/>

                <button>Login</button>
                <button>Create New Account</button>
            </form>
        </div>
    </div>
  )
}

export default Login