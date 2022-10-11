import './App.css';
import React,{useEffect,useState} from 'react'

function App() {
  const [firstName,setFirstName] = useState('')
  const [email,setEmail] = useState('')
  const [people,setPeople] = useState([])

  const handleSubmit = (e)=> {
    e.preventDefault()
    if(firstName && email){
      console.log("submit the form");
      console.log(firstName,email);
      const person = {id: new Date().getTime().toString(),firstName,email}
      console.log(person);
      setPeople((people)=>{
        return [...people,person]
      })
    }else{
      console.log('empty values');
    }
    
  }

  return (
    <>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="firstName">Name : </label>
          <input type="text" id='firstName' name='firstName'
          onChange={(e)=>{
            setFirstName(e.target.value)
          }}
            value={firstName}
          />
        </div>
        <div className='form-control'>
          <label htmlFor="email">Email : </label>
          <input type="text" id='email' name='email' 
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          value={email} />
        </div>
        <button type='submit' onClick={handleSubmit}>Add Person</button>
        
      </form>

     { people.map((person,index) => {
        const {id,firstName,email} = person
        return <div className='people' key={id}>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      })
      }

      
    </article>
    </>
  );
}

export default App;
