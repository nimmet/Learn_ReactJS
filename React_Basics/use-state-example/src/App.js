import './App.css';
import React, {useState} from 'react'

const App = ()=> {
  

  const [title,setTitle] = useState("Random Title")

  const handleClick = ()=> {
    if(title === "Random Title"){
      setTitle("Hello React!!!")
    }else {
      setTitle("Random Title")
    }
    
    
    
  }

  return (
  <React.Fragment>
  
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}  >change title</button>
  </React.Fragment>
  )
}
export default App;
