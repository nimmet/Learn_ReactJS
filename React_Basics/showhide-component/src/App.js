import './App.css';
import React, {useState,useEffect} from 'react';

function App() {

  const [show,setShow] = useState(false)

  return (
    <div className="container">
     <button onClick={()=> setShow(!show)}>Show/Hide</button>
     {show && <Item/>}
    </div>
  );
}

const Item = ()=>{

  const [size,setSize] = useState(window.innerWidth)
  const checkSize = ()=> {
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',checkSize)
    return ()=>{
      window.removeEventListener('resize',checkSize)
    }
  },[])
  return (
    <div className='container'>
      <h1>Window</h1>
      <h2>Size : {size} PX</h2>
    </div>
  )
}
export default App;
