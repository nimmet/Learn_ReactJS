
import { render } from '@testing-library/react'
import React, { Component,useState } from 'react'

const TestCss = ()=>{

    const [count,setCount] = useState(0)
    return (
        <div className='text-center my-10 text-lg border mx-5 rounded-xl bg-zinc-50'>
        <h3 className='italic animate-pulse'>Hello TailwindCss</h3>
        <h2 className=' text-2xl font-bold'>{count}</h2>
        <button className=' bg-green-300 px-5 py-1 my-5 rounded-md hover: outline-none hover:ring-2 ring-yellow-200 ring-offset-1 ' onClick={()=>{
            setCount(count+1)
        }}>Add</button>
        </div>
    )
}

export default TestCss