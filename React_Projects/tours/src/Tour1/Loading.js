import React, { useState,useEffect } from 'react'
import Tour from './tour'

const url = "https://course-api.com/react-tours-project"

const Loading = ()=>{

    // let readMore = true
    const [data,setData] = useState([])
    
   
    const removeTour = (id)=>{
        const newData = data.filter((d)=> d.id !== id)
        setData(newData)
    }
   


    const getData = async ()=>{
        const res= await fetch(url)
        const tour_data = await res.json() 
        setData(tour_data)
    }


useEffect(()=>{
    getData()

   
},[])
    

    if(data.length===0){
        return(
            <div className=' text-center'>
                <h2 className=' text-red-400 capitalize  font-bold my-8'>No Tours Left</h2>
                <button className='rounded-md bg-sky-400 text-red-800 border px-5 py-1 my-5 capitalize' onClick={getData}>refresh</button>
            </div>
        )
    }


   
  

    return (
        <div className='mx-auto my-5'>
        <div className=' text-center mx-auto my-5'>
        <h1 className='font-bold capitalize'>Our Tours</h1>
        <div className=' w-10 bg-blue-400 h-0.5 mt-0.5 mx-auto mb-5'></div>
        </div>
        
           { 
            data.map((tour,index)=>{
                return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
            })
            }
        

      
        </div>
        
    )
}

export default Loading