import React from 'react'

const GridJustifyItem = () => {
  return (
    <>
        <h1 className='font-bold italic text-center m-8'>Grid justify-items-start</h1>
    <div class="grid justify-items-start gap-5 m-5">
  <div className=' bg-sky-400 h-10 w-10 rounded-md'>01</div>
  <div className=' bg-sky-400 h-10 w-10 rounded-md'>02</div>
  <div className=' bg-sky-400 h-10  w-10 rounded-md '>03</div>
  <div className=' bg-sky-400 h-10 w-10 rounded-md '>04</div>
  <div className=' bg-sky-400 h-10 w-10  rounded-md '>05</div>
  <div className=' bg-sky-400 h-10 w-10 rounded-md '>06</div>
</div>


<h1 className='font-bold italic text-center m-8'>Grid justify-items-end</h1>
    <div class="grid justify-items-end gap-5 m-5">
  <div className=' bg-purple-600 h-10 w-10 rounded-md'>01</div>
  <div className=' bg-purple-600 h-10 w-10 rounded-md'>02</div>
  <div className=' bg-purple-600 h-10  w-10 rounded-md '>03</div>
  <div className=' bg-purple-600 h-10 w-10 rounded-md '>04</div>
  <div className=' bg-purple-600 h-10 w-10  rounded-md '>05</div>
  <div className=' bg-purple-600 h-10 w-10 rounded-md '>06</div>
</div>


<h1 className='font-bold italic text-center m-8'>Grid justify-items-center</h1>
    <div class="grid justify-items-center gap-5 m-5">
  <div className=' bg-yellow-600 h-10 w-10 rounded-md'>01</div>
  <div className=' bg-yellow-600 h-10 w-10 rounded-md'>02</div>
  <div className=' bg-yellow-600 h-10  w-10 rounded-md '>03</div>
  <div className=' bg-yellow-600 h-10 w-10 rounded-md '>04</div>
  <div className=' bg-yellow-600 h-10 w-10  rounded-md '>05</div>
  <div className=' bg-yellow-600 h-10 w-10 rounded-md '>06</div>
</div>


<h1 className='font-bold italic text-center m-8'>Grid justify-items-stretch</h1>
    <div class="grid grid-cols-3 justify-items-stretch gap-5 m-5 text-center">
  <div className=' bg-lime-300 h-10 rounded-md'>01</div>
  <div className=' bg-lime-300 h-10 rounded-md'>02</div>
  <div className=' bg-lime-300 h-10  rounded-md '>03</div>
  <div className=' bg-lime-300 h-10 rounded-md '>04</div>
  <div className=' bg-lime-300 h-10  rounded-md '>05</div>
  <div className=' bg-lime-300 h-10 rounded-md '>06</div>
</div>

<h1 className='font-bold italic text-center m-8'>Grid justify-items-stretch justify-self-*</h1>
    <div class="grid grid-cols-3 justify-items-stretch gap-5 m-5 text-center">
  <div className=' bg-lime-300 h-10 rounded-md w-10 justify-self-start text-center'>01</div>
  <div className=' bg-lime-300 h-10 rounded-md justify-self-auto'>02</div>
  <div className=' bg-lime-300 h-10  rounded-md w-10 justify-self-end text-center'>03</div>
  <div className=' bg-lime-300 h-10 rounded-md '>04</div>
  <div className=' bg-lime-300 h-10  w-10 text-center  rounded-md justify-self-center'>05</div>
  <div className=' bg-lime-300 h-10  rounded-md '>06</div>
</div>


<h1 className='font-bold italic text-center m-8'>Grid justify-self-stretch</h1>
    <div class="grid grid-cols-3 justify-items-stretch gap-5 m-5 text-center">
  <div className=' bg-lime-300 h-10 rounded-md justify-self-start'>01</div>
  <div className=' bg-lime-300 h-10 rounded-md justify-self-center'>02</div>
  <div className=' bg-lime-300 h-10  rounded-md justify-self-end'>03</div>
  <div className=' bg-lime-300 h-10 rounded-md justify-self-start'>04</div>
  <div className=' bg-lime-300 h-10  rounded-md justify-self-stretch'>05</div>
  <div className=' bg-lime-300 h-10 rounded-md justify-self-end'>06</div>
</div>
    </>
  )
}

export default GridJustifyItem