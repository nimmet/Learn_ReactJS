import React, { useState,useEffect } from 'react'
import data from './data'
const List = ()=>{

    const [people,setPeople] = useState(data)

    return (
        <div className=' bg-white w-4/6 mx-auto my-10 rounded-md text-center'>
<h1 className='font-bold capitalize text-left m-5 tracking-wider '>{people.length} birthdays today</h1>
  {people.map((person)=>{
    return(
        <div>
    <div className=' columns-2 my-5 mx-4 p-2'>
    <img className='rounded-full w-16 h-16' src={person.image} alt={person.name} />
    <span className='block text-left font-bold -mx-24'>{person.name}</span>
    <span className='block text-left -mx-24'>{person.age} years</span>
    </div>
   
    </div>)

    
  })}
  <button className=' bg-rose-300 m-5 capitalize  w-5/6 py-1.5 rounded-md text-white' onClick={()=>{
    setPeople([])
  }}>clear all</button>
        </div>
    )
}

export default List