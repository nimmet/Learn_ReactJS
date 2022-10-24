import React, { useState } from 'react';
import people from './data';
import { BiChevronLeft, BiChevronRight, BiQuoteRight } from "react-icons/bi";
import { FaQuoteRight } from "react-icons/fa";
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const person = people
  const [count,setCount] = useState(0)
 
const handleRClick = ()=>{
  {
    if (count < person.length-1 && count >=0){
      setCount(count+1)
    }else if(count===person.length-1 ){
      setCount(0)
      
    } else{
      setCount(3)
    }
    
  }
}


const handleLClick = ()=>{
  {
    if (count === 0){
      setCount(3)

    }else if(count===person.length-1 ){
      setCount(0)
      setCount(count-1)
      
    } 
     else{
      setCount(count-1)
    }
    
  }
}

const supriseMe = ()=> {
  let rand = Math.trunc(Math.random()*person.length)
  setCount(rand);
}

  return (
    <div className='text-center my-20'>

    <h1 className=' capitalize font-bold tracking-wide text-3xl'>our reviews</h1>
    <div className='w-16 h-[3px] bg-blue-400 mx-auto my-2'></div>
    {
          <div className=' bg-white w-[450px] mx-auto my-5 py-5 rounded-md text-center shadow-lg' key={person[count]['id']}>
          <div className=' z-10 relative top-[45px] left-[160px] bg-sky-400 p-3 rounded-full w-7 h-7'><FaQuoteRight className='-ml-1.5 -mt-1.5 text-white'/></div>

          <div className='w-32 h-32 rounded-full bg-blue-400 relative mx-auto z-0 pr-2 pt-0.5'>
          <img src={person[count]['image']} alt={person[count]['name']} 
            className=" w-32 h-32 rounded-full mx-auto  shadow-lg shadow-green-100"
          />
          </div>
         
          <h1 className='font-bold mt-5 capitalize tracking-wider'>{person[count]['name']}</h1>
          <h3 className='text-sky-500 uppercase tracking-tighter'>{person[count]['job']}</h3>
          <p className=' mx-5'>{person[count]['text']} </p>
          <div className='my-2 mx-auto w-36  '>
            <button className='  mx-3' onClick={handleLClick}><BiChevronLeft className='text-blue-400 w-8 h-8' /></button>
            <button className='  mx-3' onClick={handleRClick
            }><BiChevronRight className='text-blue-400 w-8 h-8' /></button>
          </div>
          <button className=' capitalize bg-blue-100 text-blue-700 px-2  rounded-md '
           onClick={supriseMe}>suprise me</button>
          </div>
    }
    </div>
  )
};

export default Review;