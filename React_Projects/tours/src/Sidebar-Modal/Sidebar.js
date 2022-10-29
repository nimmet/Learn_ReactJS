import React  from 'react'
import logo from '../logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

const Sidebar = ({showSide, handleShowSide}) => {

    const dataLinks = links
    const dataSocial = social
   

  return  <div className={`" relative -left-[18rem] h-full transition duration-700 ease-in-out " ${showSide?" translate-x-[16.8rem]":""}`}>
            
  <div className=' bg-slate-100 px-2 py-5 w-[17rem]
   '>
  <div className=' columns-2'>
  <img src={logo} alt="" className="mx-2" />
  <FaTimes className='ml-auto mr-2' onClick={handleShowSide}/>
  </div>
 
      <ul className=' my-10 text-gray-700'>
        {  dataLinks.map((link)=>{
             return <li key={link.id} className=" flex mx-2 my-5">
                  {link.icon}
                  <h1 className='mx-5 -my-1 text-2xl capitalize font-[500]'>{link.text}</h1>
              </li>
          })}
      </ul>

      <div className=' mt-[21rem]'>
      <ul className=' flex justify-center'>
          {
              dataSocial.map((so)=>{
                  return <li key={so.id} className='mx-1  text-sky-400'>
                      {so.icon}
                  </li>
              })
          }
      </ul>
  </div>
  </div>

 
</div>
}

export default Sidebar