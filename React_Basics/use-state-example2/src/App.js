import './App.css';
import React, {useState} from 'react'
import {data} from './data.js'


const UseStateObject = ()=> {
  const [person, setPerson] = useState({
    name: 'Ahmet',
    age: 25,
    message: 'I miss Lopnur'
  })
  return (
   <>
    <h3>UseState Array Example</h3>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button onClick={()=>{
      let message="I also miss my family."
      {setPerson({...person,message:message})}
    }}>Update Message</button>
   </>
  );
}

export default UseStateObject;
