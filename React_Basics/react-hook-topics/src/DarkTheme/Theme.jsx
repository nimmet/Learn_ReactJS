
import React ,{useState} from 'react'
import { createContext } from 'react';
import { BsSun,BsSunFill } from 'react-icons/bs';
import Content from './Content.component';


export const ThemeContext = createContext(null)

const Theme = () => {
    const [dark,setDark] = useState(false)
  return (
    <ThemeContext.Provider value={dark}>

    <div className=' h-[100vh]'>
        <div className={` border-b-2 py-5 flex justify-end  shadow-slate-400 shadow-md h-[15vh]`}>
        {
            dark?
            <BsSunFill size="60" className="mr-5 bg-white" onClick={()=> setDark(!dark)}/> :
                <BsSun className='mr-5 text-black' size={60} onClick={()=> setDark(!dark)}/> 

        }
        </div>
        <Content />
    </div>
    </ThemeContext.Provider>
  )
}

export default Theme

// BsSun