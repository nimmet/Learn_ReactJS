import React,{useState} from 'react'
import { useEffect } from 'react'



const TodoForm = (props)=> {

    const {getNewlyCreatedTodoItem, editData} = props
    const [isEdit,setIsEdit] = useState(false)
    

    const [inputValue,setInputValue] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newlyCreatedTodo = {
            id : isEdit ? editData.id : Math.floor(Math.random()*1000),
            text: inputValue
        }

        getNewlyCreatedTodoItem(newlyCreatedTodo)
        setInputValue("")
        setIsEdit(false)

    }

    useEffect(()=>{
        if(editData && Object.keys(editData).length !== 0){
            setInputValue(editData.text)
            setIsEdit(true)
        }

        
    },[editData])

  

    const handleInputChange = (e)=>{
        const {value} = e.target
        setInputValue(value)
    }

    return(
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" name="input" 
            onChange={handleInputChange} 
            placeholder = "Enter todo here" 
                className='todo-input'
                value={inputValue}
            />
            <button type='submit' 
            className='todo-button'>{isEdit? "Edit Toto":"Add Todo"}</button>
        </form>
    )
}

export default TodoForm