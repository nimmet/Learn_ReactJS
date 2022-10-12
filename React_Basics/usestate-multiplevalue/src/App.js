import './App.css';
import React,{useState} from 'react'

function App() {

  const initVal = {
    name1:'',
    name2:''
  }

  const [infodata,setInfodata] = useState(initVal)

  const handleClick = (e)=> {
    const {name,value} = e.target
  
    setInfodata(prev =>  ({...prev,[name]:value}))
  }
  const FullName = ()=>{
    return <h2>Your full name is {infodata.name1} {infodata.name2}</h2>
  }


  return (
   <>
   <div>
   <label htmlFor="name1">First Name: </label>
    <input type="text" name='name1' value={infodata.name1} onChange={handleClick}/>
   </div>
   <div>
   <label htmlFor="name2">Last Name: </label>
    <input type="text" name='name2' value={infodata.name2} onChange={handleClick}/>
   </div>
   <button onClick={handleClick}>Submit</button>
   <FullName/>
   </>
  );
}

export default App;
