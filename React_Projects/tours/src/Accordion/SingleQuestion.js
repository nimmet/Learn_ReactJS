import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info }) => {
  const [hide, setHide] = useState(false);

  return (
    <div key={id}>
      <h2 className="font-bold mx-5 my-3 float-left">{title}</h2>
      <button
        className=" w-8 h-8 rounded-full bg-yellow-300 hover:border border-sky-600 hover:rounded-none  float-right my-3 mr-5"
        onClick={() => {
          setHide(!hide);
        }}
      >
        {hide ? (
          <AiOutlineMinus className="mx-auto text-lg font-bold " />
        ) : (
          <AiOutlinePlus className="mx-auto text-lg font-bold " />
        )}
      </button>

      {hide ? (
        <p className=" clear-both mx-5 my-3 text-blue-900  text-left">{info}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleQuestion;
