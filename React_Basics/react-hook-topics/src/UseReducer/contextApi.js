import React, { useState,useEffect,useContext} from 'react'
import {data} from '../data'


const PersonContext = React.createContext()

const ContextAPI = ()=> {
    const [people,setPeople] = useState(data)
    const removePerson = (id)=> {
        setPeople((people)=>{
            return people.filter((person)=> person.id !== id)
        })
    }
    return (
        <PersonContext.Provider value={{removePerson,people}} className='container'>
        <h2 style={{color:'white', textShadow:"1px 1px 1px red"}}>Context API / useContext</h2>
        <List />
        </PersonContext.Provider>
        
    )
}

const List = ()=>{
    const {people} = useContext(PersonContext)

        return( 
        <>
         {
            people.map((person)=>{
                return <SinglePerson key={person.id} {...person} 

                />
            })
    }
    </>
    )
}

const SinglePerson = ({id,name})=>{
   const {removePerson} = useContext(PersonContext)
   console.log(data);

    return (
    <div className='item'>
    <h4>{id}</h4>
        <h4>{name}</h4>
        <button className='btn' onClick={()=> removePerson(id)}>Remove</button>
    </div>
    )
}

export default ContextAPI