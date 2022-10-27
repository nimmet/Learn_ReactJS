import React, { useEffect, useState } from "react";
import data from "./data";
function App() {


    const lorem = data 
   
    const [val,setVal] = useState(0)
    const [text,setText] = useState([])
   
    
const handleClick = (e)=> {
    e.preventDefault()

    if(val === 0){
        setText([])
        setVal(0)
        setText(lorem.slice(0,val+1))
    }else if(val>0 && val<lorem.length-1){
        setText([])
        setText(lorem.slice(0,val))
    } else if(val > lorem.length-1){
        setText([])
        setText(lorem.slice(0,lorem.length-1))
    } else{
        setText([])
        setText(lorem.slice(0,1))
    }
}




  return (
    <div className="flex flex-col">
      <div className="text-center">
        <h1 className=" text-3xl capitalize font-[700] py-8">
          Tired of boring lorem ipsum?
        </h1>
      </div>

      <div className="text-center">
      <form >
      <label htmlFor="paragraph" className=" text-lg font-[500]">
          Paragraphs: 
        </label>
        <input
          type="number"
          name="par" value={val} 
          onChange={(e)=>setVal(e.target.value)}
          className=" bg-slate-200 mx-5 w-16 h-7 text-center"
        />
        <button className=" bg-sky-400 rounded-md px-3 py-1 uppercase " onClick={handleClick}>
          generate
        </button>
      </form>
       
      </div>

      <div className="mx-28 my-10">
      {
        text.map((txt,index)=>{
            return (
                <p key={index} className="my-12 lg:mx-64">{txt}</p>
            )
        })
      }
      </div>
    </div>
  );
}

export default App;
