import React, { useState } from 'react';
import './Accordion.css'
import Question from './Question';


function App() {


  return (
    <div className=' flex bg-white w-[50vw] h-4/6 mx-auto my-36 rounded-md '>
    <div className='  bg-white flex-none w-32 text-lg font-bold px-2 mx-5 my-8 capitalize'>
        <h1>Questions and answers about login</h1>
        
    </div>

    <Question />


    </div>
  )
}

export default App;