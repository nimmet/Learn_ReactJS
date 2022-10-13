import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


const TodoItem = (props)=> {
    const {todos,getEditTodoData,getIDToBeDeleted} = props
    

    return(
       todos.map((todoItem,index)=>(
        <div key={`${todoItem.id}${index}`} className='todo-item-wrapper'>
            <p className='todo-text'>{todoItem.text}</p>
            <div className='icons'>
                <RiCloseCircleLine className='delete-icon'
                    onClick={()=> getIDToBeDeleted(todoItem.id)}
                />
                <TiEdit className='edit-icon' 
                onClick={()=> getEditTodoData({id:todoItem.id, text: todoItem.text})} />
            </div>
        </div>
       ))
    )
}

export default TodoItem