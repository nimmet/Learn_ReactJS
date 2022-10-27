import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import Review from './Review';
function App() {

    const [people,setPeople] = useState(data)
    const [index,setIndex] = useState(0)

    const handleLeft = ()=> {
        if (index === 0){
            setIndex(people.length-1)
      
          }else if(index===people.length-1 ){
            setIndex(0)
            setIndex(index-1)
            
          } 
           else{
            setIndex(index-1)
          }
    }

    const handleRight = ()=> {
        if (index < people.length-1 && index >=0){
            setIndex(index+1)
          }else if(index===people.length-1 ){
            setIndex(0)
            
          } else{
            setIndex(people.length-1)
          }
    }

    useEffect(() => {
        let slider = setInterval(handleLeft, 4000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);

  return (

<div>
<h1 className=' text-3xl text-center my-16 font-[600] tracking-wide'><span className=' text-amber-700 text-3xl font-bold mx-2'>/</span> Reviews</h1>
<div className=' flex'>

<FiChevronLeft className=' mx-auto text-4xl border bg-slate-400 hover:bg-amber-700  rounded-md my-auto' 
    onClick={ handleLeft}
/>

{
    
       <Review {...people[index]}/>
   
}


<FiChevronRight className=' mx-auto text-4xl border bg-slate-400 hover:bg-amber-700  rounded-md
 my-auto'
    onClick={handleRight}
/>

</div>

</div>
  )
}

export default App;