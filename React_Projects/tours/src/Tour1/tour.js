import React, { useState } from 'react'

const Tour = ({tourdata,setData})=>{

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

    const handleNotInterested = (id)=>{
        
    }

    return(
        tourdata.map((tour,index)=>{
            const {id,name,info,image,price} = tour
                    return ( <div key={id} 
                    className='mx-auto my-5 bg-white rounded-md w-4/6'>
                    <img 
                    className=' w-full rounded-t-md h-64 mx-auto my-5'
                    src={image} alt="" />
                    <div className='flex items-center gap-5'>
                    <h3 className='text-black font-bold inline text-left mx-5'>{name}</h3>
                    <h3 className=' bg-sky-100 rounded-md inline px-2 mx-14 my-2.5 font-bold  text-sky-400 text-center'>${price}</h3>
                    </div>
                    
                    <p className='text-left my-6 mx-5 tracking-wide'>{
                        readMore ? processInfo(info) : info
                      } {<button className=' text-sky-400' onClick={()=>{
                          setReadMore(false)
                      }}>Read More</button>}</p>
                    
                    <button className=' rounded-md capitalize text-red-600 border border-red-900  font-medium bg-white px-5 my-5' onClick={handleNotInterested(id)}>not interested</button>
                    </div>
                    )
                })
    )
}

export default Tour