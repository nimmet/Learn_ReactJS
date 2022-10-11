import './App.css';
import React,{useEffect,useState} from 'react'

function App() {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [people,setPeople] = useState([])

  const handle = (e)=>{
    e.preventDefault()
    console.log(firstName,lastName);
    if(firstName && lastName){
      const person = {id: new Date().getTime().toString(),firstName,lastName}
      setPeople((people)=>{
        return [...people,person]
      })
    }
  }

 
  return (
    <>
      <article>
        <form action="" className='form' onSubmit={handle}>
          <div className='form-control'>
            <label htmlFor="firstName">First Name : </label>
            <input type="text" id='firstName' name='firstName'
              value={firstName}
              onChange ={(e)=>{
                setFirstName(e.target.value)
              }}
            />
          </div>
          <div className='form-control'>
            <label htmlFor="lastName">Last Name : </label>
            <input type="text" id='lastName' name='lastName' 
              value={lastName}
              onChange={(e)=>{
                setLastName(e.target.value)
              }}
            />
          </div>
          <button className='btn' onClick={handle}>Add Person</button>
        </form>

        {
         people.map((person,index)=>{
            const {id, firstName, lastName} = person
            return  <div className='people' key={id}>
                <h4>{id}</h4>
                <h4>{firstName}</h4>
                <h4>{lastName}</h4>
              </div>
            
          })
        }
        
      </article>
     
    </>
  )
}

export default App;
