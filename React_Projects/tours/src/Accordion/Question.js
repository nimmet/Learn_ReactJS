import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import data from "./data";
const Question = () => {
  const [hide, setHide] = useState(false);
  const QAdata = data;

  return (
    <div>
      <ul className=" flex flex-col  mt-5">
        {QAdata.map((qa) => (
          <li className="border rounded-md shadow-lg mx-4 my-5 bg-white w-[35vw] ">
            <SingleQuestion {...qa} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
