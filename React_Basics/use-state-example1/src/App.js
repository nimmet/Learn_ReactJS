import './App.css';
import React, {useState} from 'react'
import {data} from './data.js'



function App() {
  const [people, setPeople] = useState(data)

  return (
   <>
 { 
    people.map((person)=> {
      const {id,name} = person
      return (
        <div key={id} className='item'>
        <h2>{id}{'-'.repeat(25)}{name}</h2>
        <button className="item" onClick={()=>{
          // people.splice(id-1,1)
          setPeople(people.filter((person)=> person.id !== id))
          

        }}>Remove</button>
        </div>
       
      )
    }
    )
    }
    
    <button className='item' onClick={()=> {
     
        setPeople([])
      
      }}>Clear Item</button>
   </>
  
  );
}

export default App;
