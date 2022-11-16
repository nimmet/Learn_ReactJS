import React from 'react'

const LoginAccount = ({handleLogin,handleCreateAccount}) => {
  return (
    <div className=' flex flex-col items-center gap-2 bg-gradient-to-r from-teal-800/80 to-teal-700/90 my-12 w-[450px] mx-auto text-white py-5 rounded-md h-[50vh]'>
            <h1 className='text-bold text-2xl my-5 shadow-2xl shadow-orange-900   '>Login</h1>
            <form action="" className='flex flex-col  items-center gap-2 pb-2 '>
            <label htmlFor="email">Email</label>
                <input type="email" name="email"  className=' rounded-md grow w-[420px] h-8'/>
            <label htmlFor="password">Password</label>    
                <input type="password" name="password" className=' rounded-md grow w-[420px] h-8 mb-5'/>

                <button className=' hover:bg-amber-700/80 hover:rounded-md hover:px-3 hover:py-1  h-8' onClick={handleLogin}>Login</button>
                <button className='h-8 my-2 hover:bg-amber-700/80 hover:rounded-md hover:px-3 hover:py-1' onClick={handleCreateAccount}>Create New Account</button>
            </form>
        </div>
  )
}

export default LoginAccount