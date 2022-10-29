import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from '../logo.svg'

const Navbar = () => {
    const navLinks = links
    const navSocial= social

  return (
    <div className=' grid grid-cols-3 gap-x-5 bg-slate-200 shadow-lg justify-center'>
        <img src={logo} alt="" className=' mx-auto my-auto' />
        <div className=' mx-auto font-[500] text-lg capitalize'>
            <ul className=' flex flex-row'>
                {
                    navLinks.map((link)=>{
                        return (
                            <li key={link.id} className=' mx-2 my-5'>{link.text}</li>
                        )
                    })
                }
            </ul>
        </div>

        <div className=' mx-auto text-sky-600'>
            <ul className=' flex flex-row '>
                {
                    navSocial.map((social)=>{
                        return (
                            <li key={social.id}
                            className=' mx-2 my-6'>
                                {social.icon}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar