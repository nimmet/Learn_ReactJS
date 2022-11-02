
import React from 'react'

const GridAlignContent = () => {
  return (
    <>
    <h1 className='font-bold italic text-center m-5 text-2xl capitalize'>Grid Align Content start</h1>
    <div class="h-56 grid grid-cols-3 gap-4 content-start bg-green-100">
  <div className='bg-purple-400 rounded-sm text-center w-8 '>01</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>02</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>03</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>04</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>05</div>
</div>

<h1 className='font-bold italic text-center m-5 text-2xl capitalize '>Grid Align Content center</h1>
    <div class="h-56 grid grid-cols-3 gap-4 content-center bg-green-100">
  <div className='bg-purple-400 rounded-sm text-center w-8 '>01</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>02</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>03</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>04</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>05</div>
</div>

<h1 className='font-bold italic text-center m-5 text-2xl capitalize '>Grid Align Content evenly</h1>
    <div class="h-56 grid grid-cols-3 gap-4 content-evenly bg-green-100">
  <div className='bg-purple-400 rounded-sm text-center w-8 '>01</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>02</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>03</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>04</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>05</div>
</div>

<h1 className='font-bold italic text-center m-5 text-2xl capitalize '>Grid Align Content end</h1>
    <div class="h-56 grid grid-cols-3 gap-4 content-end bg-green-100">
  <div className='bg-purple-400 rounded-sm text-center w-8 '>01</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>02</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>03</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>04</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>05</div>
</div>


<h1 className='font-bold italic text-center m-5 text-2xl capitalize '>Grid Align Content between</h1>
    <div class="h-56 grid grid-cols-3 gap-4 content-between bg-green-100">
  <div className='bg-purple-400 rounded-sm text-center w-8 '>01</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>02</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>03</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>04</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>05</div>
</div>


<h1 className='font-bold italic text-center m-5 text-2xl capitalize '>Grid Align Content around</h1>
    <div class="h-56 grid grid-cols-3 gap-4 content-around bg-green-100">
  <div className='bg-purple-400 rounded-sm text-center w-8 '>01</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>02</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>03</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>04</div>
  <div className='bg-purple-400 rounded-sm text-center w-8 '>05</div>
</div>
    </>
  )
}

export default GridAlignContent