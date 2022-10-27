import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  return <>
    <div className=' bg-slate-200 w-4/6 mx-auto shadow-lg shadow-neutral-500 lg:w-2/5 rounded-md'>

<div className='text-center my-10'>
    <h1 className=' capitalize font-[700] text-2xl'>grocery bud</h1>
</div>

<div className='text-center'>
<form action="" className='py-5'>
    <input type="text" placeholder='e.g. eggss' className='rounded px-2 w-64 bg-sky-50'/>
    <button className='px-4 rounded-md bg-sky-300 mx-2'>Submit</button>
</form>
</div>


    </div>
  </>
}

export default App