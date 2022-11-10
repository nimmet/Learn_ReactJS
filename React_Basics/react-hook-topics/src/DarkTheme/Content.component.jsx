import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './Theme'

const Content = () => {
    const getDark = useContext(ThemeContext)
  return (
    <div className={`flex flex-col h-[85vh] justify-around items-center gap-10 ${getDark?'bg-black':''}`}>
        <div className={` ${getDark&&'text-white'} font-bold my-10 tracking-wider`}><h1>Header</h1></div>
        <div className={` ${getDark&&'text-white'} font-bold my-10 tracking-wider`}><h1>Dark Theme Content</h1></div>
        <div className={` ${getDark&&'text-white'} font-bold my-10 tracking-wider`}><h1>Footer</h1></div>
    </div>
  )
}

export default Content