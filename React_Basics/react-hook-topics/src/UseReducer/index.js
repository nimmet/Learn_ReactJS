import React, { useEffect, useReducer, useState,useRef } from 'react'
import Modal from './modal'
import { data } from '../data'
import {reducer} from './reducer'



const defaultState = {
    people:[],
    isModalOpen:true,
    modalContent:'Hello World'
}


const Index = ()=> {

const [name,setName] = useState("")
const [state,dispatch] = useReducer(reducer,defaultState)
const inputContainer = useRef(null)

// const [people,setPeople] = useState(data)
// const [showModal,setShowModal] = useState(false)


useEffect(()=>{
    inputContainer.current.focus()
}
)
const handleSubmit= (e)=>{
e.preventDefault()
if(name){
const newItem = {id:new Date().getTime().toString(), name}
dispatch({type:'ADD_ITEM', payload:newItem})
setName("")

}else{
dispatch({type:'NO_VALUE'})
}

}

const closeModal = ()=>{
    dispatch({type:'CLOSE_MODAL'})
}


const handleChange = (e)=>{
    setName(e.target.value)
}


    return(
       <>
        {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
        <form onSubmit={handleSubmit} className='container'>
            <div>
                <input type="text" value={name} 
                    onChange={handleChange}
                    ref={inputContainer}
                />
            </div>
            <button type='submit' className='btn'>Add</button>
        </form>
        {state.people.map((person)=> {
            return <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button className='btn' onClick={()=>{
                dispatch({type:'REMOVE_ITEM',
                payload:person.id})
            }}>remove</button>
            </div>
        })}
       </>
    )
}

export default Index

