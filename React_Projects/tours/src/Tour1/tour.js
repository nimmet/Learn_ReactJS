import React, { useState } from 'react'

const Tour = ({id,image,info,price,name,removeTour})=>{

    const [readMore,setReadMore] = useState(false)

    // const processInfo = (info)=>{
        
    //     let count = 180
    //     const infoAr = info.split('')
    //     let text =''
    //     if(!readMore){
    //         return info
    //     }else{
           
    //         for(let i=0; i<count; i++){
    //             text +=infoAr[i]
    //         }
            
    //         return text+'...'
    //     }

       
    // }

   
    return(
       
            <div key={id} 
                    className='mx-auto my-5 bg-white rounded-md w-[550px]'>
                    <img 
                    className=' w-full rounded-t-md h-64 mx-auto my-5'
                    src={image} alt="" />
                    <div className='flex items-center gap-5'>
                    <h3 className='text-black font-bold inline text-left mx-5'>{name}</h3>
                    <h3 className=' bg-sky-100 rounded-md inline px-2 mx-14 my-2.5 font-bold  text-sky-400 text-center'>${price}</h3>
                    </div>
                    
                    <p className='text-left my-6 mx-5 tracking-wide'>{
                        readMore ? info : `${info.substring(0,200)}...` 
                      } {<button className=' text-sky-400' onClick={()=>{
                        setReadMore(!readMore)
                         
                      }}>{readMore?'Show Less':'Read More'}</button>}</p>
                    
                    <button className=' rounded-md capitalize text-red-600 border border-red-900  font-medium bg-white px-5 mx-auto my-5 text-center' onClick={()=>removeTour(id)} >not interested</button>
                    </div>
               
    )
                    
}

export default Tour