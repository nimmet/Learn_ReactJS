import React, { useState,useEffect } from 'react'
import {data} from '../data'

const PropDrilling = ()=> {
    const [people,setPeople] = useState(data)
    const removePerson = (id)=> {
        setPeople((people)=>{
            return people.filter((person)=> person.id !== id)
        })
    }
    return (
        <section className='container'>
        <h2>Prop Drilling</h2>
        <List people={people} removePerson={removePerson}/>
        </section>
        
    )
}

const List = ({people,removePerson})=>{
        return( 
        <>
         {
            people.map((person)=>{
                return <SinglePerson key={person.id} {...person} removePerson={removePerson}

                />
            })
    }
    </>
    )
}

const SinglePerson = ({id,name,removePerson})=>{
   

    return (
    <div className='item'>
    <h4>{id}</h4>
        <h4>{name}</h4>
        <button className='btn' onClick={()=> removePerson(id)}>Remove</button>
    </div>
    )
}

export default PropDrilling