import React from 'react'

const GridFlowExample = () => {
  return (

    <>
    <h1 className='font-bold italic text-center my-8'>Grid grid-flow-row-dense </h1>
  <div className=' grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 mx-4'>
        <div className=' bg-purple-500 rounded-md text-center col-span-2 h-10'>01</div>
        <div className=' bg-purple-500 rounded-md text-center col-span-2 h-10'>02</div>
        <div className=' bg-purple-500 rounded-md text-center h-10'>03</div>
        <div className=' bg-purple-500 rounded-md text-center h-10'>04</div>
        <div className=' bg-purple-500 rounded-md text-center h-10'>05</div>
    </div>

    <h1 className='font-bold italic text-center my-8'>Grid with auto-cols-max property</h1>
    <div class="grid grid-flow-col gap-4 auto-cols-max mx-4 mt-8">
  <div className=' bg-green-400  rounded-md'>01</div>
  <div className=' bg-green-400  rounded-md'>02</div>
  <div className=' bg-green-400  rounded-md'>03</div>
</div>

<h1 className='font-bold italic text-center my-8'>Grid with auto-rows-max property</h1>
    <div class="grid grid-flow-row gap-4 auto-rows-max mx-4 mt-8 ">
  <div className=' bg-sky-400 h-10 rounded-md'>01</div>
  <div className=' bg-sky-400 h-10 rounded-md'>02</div>
  <div className=' bg-sky-400 h-10 rounded-md '>03</div>
</div>

<h1 className='font-bold italic text-center m-8'>Flex justify-start</h1>
    <div class="flex justify-start gap-x-5 ">
  <div className=' bg-sky-400 h-10 rounded-md'>01</div>
  <div className=' bg-sky-400 h-10 rounded-md'>02</div>
  <div className=' bg-sky-400 h-10 rounded-md '>03</div>
</div>

<h1 className='font-bold italic text-center my-8'>Flex justify-end</h1>
    <div class="flex justify-end gap-x-5 m-5">
  <div className=' bg-sky-400 h-10 rounded-md'>01</div>
  <div className=' bg-sky-400 h-10 rounded-md'>02</div>
  <div className=' bg-sky-400 h-10 rounded-md '>03</div>
</div>


<h1 className='font-bold italic text-center my-8'>Flex justify-center</h1>
    <div class="flex justify-center gap-x-5 m-5">
  <div className=' bg-sky-400 h-10 rounded-md'>01</div>
  <div className=' bg-sky-400 h-10 rounded-md'>02</div>
  <div className=' bg-sky-400 h-10 rounded-md '>03</div>
</div>

<h1 className='font-bold italic text-center my-8'>Flex justify-between</h1>
    <div class="flex justify-between gap-x-5 m-5">
  <div className=' bg-sky-400 h-10 rounded-md'>01</div>
  <div className=' bg-sky-400 h-10 rounded-md'>02</div>
  <div className=' bg-sky-400 h-10 rounded-md '>03</div>
</div>

<h1 className='font-bold italic text-center my-8'>Flex justify-around</h1>
    <div class="flex justify-around gap-x-5 m-5">
  <div className=' bg-sky-400 h-10 rounded-md'>01</div>
  <div className=' bg-sky-400 h-10 rounded-md'>02</div>
  <div className=' bg-sky-400 h-10 rounded-md '>03</div>
</div>


<h1 className='font-bold italic text-center my-8'>Flex justify-evenly</h1>
    <div class="flex justify-evenly gap-x-5 m-5">
  <div className=' bg-sky-400 h-10 rounded-md'>01</div>
  <div className=' bg-sky-400 h-10 rounded-md'>02</div>
  <div className=' bg-sky-400 h-10 rounded-md '>03</div>
</div>
    </>
  
  )
}

export default GridFlowExample