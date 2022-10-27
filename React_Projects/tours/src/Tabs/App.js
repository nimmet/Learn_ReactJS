import React, { useState, useEffect } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
    const [jobs,setJobs] = useState([])
    const [value,setValue] = useState(0)
    const [loading, setLoading] = useState(true)
    

    const getData = async ()=> {
        const res = await fetch(url)
        const resData = await res.json()
        setJobs(resData)
        setLoading(false)
    }

    useEffect(()=>{
        getData()
    },[])
   
    if (loading) {
        return (
          <section className="section loading">
            <h1>Loading...</h1>
          </section>
        )
      }

    const { company, dates, duties, title } = jobs[value]

   
    

  return (

    <div className=''>

<div className='text-center capitalize text-4xl font-bold tracking-widest my-16'>
            <h1>experience</h1>
            <div className='w-16 h-[3.5px] bg-teal-600 mx-auto my-3'></div>
        </div>

{/* component head */}
<div className='flex'>
<div className='flex flex-col mx-20'>
        

        
            <div className=' flex flex-col justify-center '>
                <ul className=' capitalize text-2xl mx-16'>
                    {
                        jobs.map((exp,index)=>{
                           return (
                            <li className=' my-5' key={exp.id}><a href='#' className=' pl-10 hover:border-l-2 hover:border-teal-600 hover:pl-[38px] 
                            focus:pl-[38px] 
                             visited:border-l-2 
                             visited:border-teal-600 hover:text-teal-600 focus:border-l-2 focus:border-teal-600
                             ' 
                            onClick={()=>{
                                setValue(index)
                            }}>{exp.company.toLowerCase()}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
            </div>

{/* right side of the tabs project */}

            <div className=''>

<div className='mx-5 font-mono'>
                    <h1 className=' text-3xl my-5'>{title}</h1>
                    <h2 className=' text-xl bg-slate-200 rounded text-center font-[500] w-28 my-2 tracking-wider'>{company}</h2>
                    <h1 className='my-2 tracking-widest'>{dates}</h1>
</div>

                    <div>
                   {

                   duties.map((duty)=>{
                   return( <div className=' flex flex-row justify-start my-5'>
                    <FaAngleDoubleRight className=' text-teal-600 mx-5 my-auto ' />
                    <p className=' mx-5  w-4/5'>{duty}</p>
                    </div>
                   )
                   })

                            }
                        
                    </div>
            
        </div>
</div>
        {/* component bottom */}
   
    </div>
   
  )
}

export default App