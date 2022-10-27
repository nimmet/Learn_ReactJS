import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
    const [data,setData] = useState([])

    const getData = async ()=> {
        const res = await fetch(url)
        const resData = await res.json()
        setData(resData)
    }

    useEffect(()=>{
        getData()
    },[])
   
    console.log(data);
  return (
    <div>
        <div className='text-center capitalize text-3xl font-bold tracking-wider my-10'>
            <h1>experience</h1>
            <div className='w-16 h-[3.5px] bg-teal-600 mx-auto my-3'></div>
        </div>

        <div>
            <div>
                <ul className=' capitalize text-2xl mx-16'>
                    {
                        data.map((exp)=>{
                           return (
                            <li className=' my-5' key={exp.id}><a href="#">{exp.company.toLowerCase()}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default App