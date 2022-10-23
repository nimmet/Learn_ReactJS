import React, { useState } from 'react'

const Tour = ({tourdata})=>{

    const [readMore,setReadMore] = useState(true)

    const processInfo = (info)=>{
        
        let count = 105
        const infoAr = info.split('')
        let text =''
        if(!readMore){
            return info
        }else{
           
            for(let i=0; i<count; i++){
                text +=infoAr[i]
            }
            
            return text+'...'
        }

       
    }

    return(
        tourdata.map((tour,index)=>{
            const {id,name,info,image,price} = tour
                    return ( <div key={id} 
                    className='mx-auto my-5 bg-white rounded-md w-4/6'>
                    <img 
                    className=' w-full rounded-t-md h-64 mx-auto my-5'
                    src={image} alt="" />
                    <h3 className='text-black font-bold inline text-left mx-5'>{name}</h3>
                    <h3 className=' bg-sky-100 rounded-md inline px-2 ml-12 font-bold  text-sky-400'>${price}</h3>
                    <p className='text-left my-6 mx-5 tracking-wide'>{
                      readMore ? processInfo(info) : info
                      } {<button name={id} className=' text-sky-400' onClick={()=>{
                          setReadMore(false)
                      }}>Read More</button>}</p>
                    
                    <button className=' rounded-md capitalize text-red-600 border border-red-900  font-medium bg-white px-5 my-5'>not interested</button>
                    </div>
                    )
                })
    )
}

export default Tour