import React, { useState,useEffect } from 'react'
import Tour from './tour'

const url = "https://course-api.com/react-tours-project"

const Loading = ()=>{

    // let readMore = true
    const [data,setData] = useState([])
    
   

   


    const getData = async ()=>{
        const res= await fetch(url)
        const tour_data = await res.json() 
        setData(tour_data)
    }


useEffect(()=>{
    getData()

   
},[])
    




   
  

    return (
        <div>
        <div className=' text-center '>
        <h1 className='font-bold capitalize'>Our Tours</h1>
        <div className=' w-10 bg-blue-400 h-0.5 mt-0.5 mx-auto mb-5'></div>
        </div>

      {<Tour tourdata={data} setData={setData}/>}
        </div>
        
    )
}

export default Loading