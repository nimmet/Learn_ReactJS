import React ,{useState}from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = () => {

    const [isClose,setIsClose] = useState(true)
    const [hideBtn,setHideBtn] = useState(false)
  return <>
    <div className='my-auto'>
    
        <button className={`" w-24 font-bold rounded bg-sky-300 " ${hideBtn?"hidden":""}`}
        onClick={()=>{
            setIsClose(!isClose)
            setHideBtn(!hideBtn)
        }}>Modal</button>
        <div className={`" h-40 w-[20rem] mr-[15rem] bg-green-100 my-auto rounded-md shadow-lg text-center outline-2 outline-red-200 outline-offset-2 ring-2  " ${isClose ? "hidden":""   }`}>
            
            <FaTimes className='ml-auto mr-2 relative top-2 hover:text-red-500' onClick={()=>{
                setIsClose(!isClose)
                setHideBtn(!hideBtn)
            }} />
            <h2 className=' font-bold capitalize italic my-12 mx-20'>Hello from Uyghur</h2>
           
            
        </div>
    </div>
  </>
}

export default Modal