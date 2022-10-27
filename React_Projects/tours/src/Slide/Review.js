import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

const Review = ({image,name,title,quote})=>{

    return (
        <div className=' text-center  my-10 w-1/2 mx-auto'>
            <img src={image} alt={name} className='w-40 h-40 rounded-full shadow-md shadow-amber-300 mx-auto'/>
            <h1 className=' text-amber-700 text-2xl capitalize mt-2'>{name}</h1>
            <h1 className=' capitalize text-lg text-sky-900'>{title}</h1>
            <p className='my-5 text-sky-900'>{quote}</p>
            <FaQuoteRight className='mx-auto text-amber-700 text-[3rem]'/>
        </div>
    )
}

export default Review