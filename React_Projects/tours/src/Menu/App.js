import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const data = items;
  const categoryNames = new Set();
  data.map((item) => categoryNames.add(item.category));
  const navList = [...categoryNames];

  return (
    <div>
      <div className=" text-center my-16">
      <h1 className=" capitalize font-bold text-4xl ">our menu</h1>
      <div className=" w-20 h-[3px] bg-yellow-600 mx-auto my-2"></div>
      </div>
      <nav className=" capitalize text-yellow-600">
        <ul className="flex flex-row mx-64 sm:mx-32 justify-center">
        <li className=" flex-1">All</li>
          {navList.map((nam) => (
            <li className=" flex-1">{nam}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default App;
