import React, { useState,useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {

  const [data,setData] = useState(items)
 
  const categoryNames = new Set();
  items.map((item) => categoryNames.add(item.category));
  const navList = [...categoryNames];

  const clickAll = ()=> setData(items)
  

  const clickBreakfast = ()=>{
    setData(()=> {
        return (
            items.filter((item)=> item.category === 'breakfast')
        )
    })
  }

  const clickLunch = ()=>{
    setData(()=> {
        return (
            items.filter((item)=> item.category === 'lunch')
        )
    })
  }

  const clickShakes = ()=>{
    setData(()=> {
        return (
            items.filter((item)=> item.category === 'shakes')
        )
    })
  }
 
 

  return (
    <div>
      <div className=" text-center my-16">
        <h1 className=" capitalize font-bold text-4xl ">our menu</h1>
        <div className=" w-20 h-[3px] bg-yellow-600 mx-auto my-2"></div>
      </div>
      <nav className=" capitalize text-yellow-600 py-4">
        <ul className="flex flex-row mx-10 px-1 text-center justify-center font-bold">
          <li className=" flex-initial mx-8 hover:border hover:rounded-md hover:bg-yellow-400 hover:text-white px-2 py-[1px] " onClick={clickAll}>All
          </li>
          {navList.map((cat, index) => (
            <li
              key={index}
              name={cat}
              className="  mx-8  hover:border hover:rounded-md hover:bg-yellow-400 hover:text-white  px-2 py-[1px] "
              onClick={(e)=>{
                
                if(e.target.textContent ==="breakfast"){
                    clickBreakfast()
                }else if(e.target.textContent==='lunch'){
                    clickLunch()
                }else{
                    clickShakes()
                }
              }
              }
            >
              {cat}
            </li>
          ))}
        </ul>
      </nav>

      <div className=" flex flex-wrap sm:flex justify-between mx-5">
        {
            data.map((d)=> {
               return <Menu {...d}/>
            })

    
        }
      </div>
    </div>
  );
}

export default App;
