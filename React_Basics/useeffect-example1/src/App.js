import './App.css';
import React ,{useEffect,useState}from 'react';


function App() {

  const [size,setSize] = useState(window.innerWidth)

  const checkSize = ()=> {
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',checkSize)
    return ()=> {
      window.removeEventListener('resize',checkSize)
    }
  },[])
  return (
  <>
  <div style={{textAlign:"center"}}>
  <h1>Window</h1>
    <h2>{size} PX</h2>
  </div>
   
  </>
  );
}

export default App;
