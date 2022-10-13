import React, { useState } from 'react'

const MultipleInputs = ()=> {
    const [person,setPerson] = useState({firstName:"",lastName:"",age:"",email:""})
    const [people,setPeople] = useState([])

    const handleClick = (e)=> {
        const name = e.target.name
        const value = e.target.value
        setPerson({...person,[name]:value})
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(person.firstName && person.lastName && person.age && person.email){
            const newPerson = {...person,id : new Date().getTime().toString()}

            setPeople([...people,newPerson])
        }

       
    }
    
    return(
        <article>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">FirstName : </label>
                <input type="text" name='firstName' value={person.firstName}
                    onChange={handleClick}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name :</label>
                <input type="text" name="lastName" value={person.lastName} 
                    onChange={handleClick}
                />
            </div>
            <div>
                <label htmlFor="age">Age : </label>
                <input type="text" name='age' value={person.age}
                     onChange={handleClick}
                />
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="text" name='email' value={person.email} 
                    onChange={handleClick}
                />
                <button name='btn' onClick={handleClick}>Add Person</button>
   
            </div>
        </form>

      {people.map((person) => {
                    return(<div key={person.id}>
                        <h3>{person.firstName}</h3>
                        <h3>{person.lastName}</h3>
                        <h3>{person.age}</h3>
                        <h3>{person.email}</h3>
                   </div>)
                })
                
            }

            </article>
    )
}

export default MultipleInputs