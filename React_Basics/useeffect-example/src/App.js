import './App.css';
import React, {useState,useEffect} from 'react'


function App() {
  const [value,setValue] = useState(0)
 useEffect(()=>{
  if(value>1){ 
  document.title = `New Messages(${value})`}
 },[value])
  return (
   <>
   <section style={{margin: "4rem 0", textAlign:'center'}}>

   <h2>UseEffect Basics</h2>
   <h1>{value}</h1>
   <button className='btn' onClick={()=>{
    //  document.title = `New Messages(${value})`
    setValue(value+1)
   }}>Click Me</button>
   </section>
    
   </>
  );
}

export default App;
