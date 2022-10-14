import React, { useEffect, useReducer, useState } from 'react'
import Modal from './modal'
import { data } from '../data'

const Index = ()=> {

const [name,setName] = useState("")
const [people,setPeople] = useState(data)
const [showModal,setShowModal] = useState(false)

const handleSubmit= (e)=>{
e.preventDefault()
if(name){
setShowModal(false)
setPeople([...people,{id:new Date().getTime().toString(),name}])
setName("")
}else{
    setShowModal(true)
}

}

const handleChange = (e)=>{
    setName(e.target.value)
}


    return(
       <>
        {showModal && <Modal/>}
        <form onSubmit={handleSubmit} className='container'>
            <div>
                <input type="text" value={name} 
                    onChange={handleChange}
                />
            </div>
            <button type='submit' className='btn'>Add</button>
        </form>
        {people.map((person)=> {
            return <div key={person.id} className='container'>
            <h4>{person.name}</h4>
            </div>
        })}
       </>
    )
}

export default Index

{/* <>
<div className='container'>
<input type="text" />
<button type='button'>Add</button>
</div>
</> */}