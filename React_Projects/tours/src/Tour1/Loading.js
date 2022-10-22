import React, { useState,useEffect } from 'react'

const url = "https://course-api.com/react-tours-project"

const Loading = ()=>{

    let readMore = true
    const [data,setData] = useState([])
    const [readMore1,setReadMore1] = useState(false)
    const [readMore2,setReadMore2] = useState(false)
    const [readMore3,setReadMore3] = useState(false)
    const [readMore4,setReadMore4] = useState(false)
    const [readMore5,setReadMore5] = useState(false)

   


    const getData = async ()=>{
        const res= await fetch(url)
        const tour_data = await res.json() 
        setData(tour_data)
    }


useEffect(()=>{
    getData()

   
},[])
    



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

    const handleReadMore= (index)=>{

        switch(index){
            case 0:
                setReadMore1(true)
                break
            case 1:
                setReadMore2(true)
                break
                case 2:
                    setReadMore3(true)
                    break
                    case 3:
                setReadMore4(true)
                break

                case 4:
                setReadMore5(true)
                break

                default:
                    break
            
        }
    }

  

    return (
        <div>
        <div className=' text-center '>
        <h1 className='font-bold capitalize'>Our Tours</h1>
        <div className=' w-10 bg-blue-400 h-0.5 mt-0.5 mx-auto mb-5'></div>
        </div>

      
      {
          data.map((tour,index)=>{
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
                } {<button name={id} className=' text-sky-400' onClick={()=>
           readMore = false
              
        
              }>Read More</button>}</p>
              
              <button className=' rounded-md capitalize text-red-600 border border-red-900  font-medium bg-white px-5 my-5'>not interested</button>
              </div>
              )
          })

        
      }
        </div>
        
    )
}

export default Loading