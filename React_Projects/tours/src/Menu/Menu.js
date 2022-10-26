import React from "react";


const Menu = ({id,title,price,img,desc}) => {
 

  return (
    <div key={id} className="mx-5 my-5 columns-2 w-[47%]">
    <img className=" w-60 h-40  border-yellow-600 border-2 rounded float-left my-6" src={img} alt={title} />

      <div className=" -ml-16 float-right">
      <div className="  border-b my-5 flex">
      <h1 className="inline font-bold capitalize  flex-1">{title}</h1>
      <h1 className="inline font-bold text-yellow-700 ">${Math.floor(price)}</h1>
      </div>
      <p className=" text-sky-800">{desc}</p>
      </div>
    </div>
  );
};

export default Menu;


