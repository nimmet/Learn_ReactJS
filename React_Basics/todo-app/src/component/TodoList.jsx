import React,{useState} from 'react'
import { useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const TodoList = ()=> {
    const [todos,setTodos] = useState([])
    const [editData,setEditData] = useState(null)
    const [searchParam,setSearchParam] = useState("")

    const handleModifyTodos = (getLatestTodoItemDetails)=>{
        const newTodos = [...todos]
        const indexOfLatestTodoItem = todos.findIndex((item)=> item.id === getLatestTodoItemDetails.id)

        if(indexOfLatestTodoItem === -1){
            // item is not present in thee todos array
            newTodos.push(getLatestTodoItemDetails)
        } else {
            // if item is already present then we have to modify that index in the array
            newTodos[indexOfLatestTodoItem]={
                ...newTodos[indexOfLatestTodoItem],
                text: getLatestTodoItemDetails.text
            }
        }
       setTodos(newTodos)
       localStorage.setItem('todoList', JSON.stringify(newTodos))

    }

    const getEditTodoData = (editedData)=>{
        setEditData(editedData)
        
    }

    const handleDelete = (iDToBeDeleted)=>{
        let updatedTodos = [...todos]
        updatedTodos = updatedTodos.filter(item=> item.id !== iDToBeDeleted )
        setTodos(updatedTodos)
        localStorage.setItem('todoList', JSON.stringify(updatedTodos))

    }

    useEffect(()=>{
        const extractTodoFromLocalStorage = JSON.parse(localStorage.getItem('todoList'))
        if(extractTodoFromLocalStorage && extractTodoFromLocalStorage.length) {
            setTodos(extractTodoFromLocalStorage)
        }

    },[])

    const handleOnSearch = (e)=>{
        const {value} = e.target
        setSearchParam(value.toLowerCase())
    }

    const filteredTodos = todos && todos.length ? todos.filter(item=> item.text.toLowerCase().includes(searchParam)):[]

    return(
        <div className='todo-list'>
        <div className='search-todos-input-wrapper'>
            <h3>Search Todos</h3>
            <input type="text" name='search' onChange={handleOnSearch} 
                value={searchParam}
                placeholder="Search todos here"
                className='search-input'
            />
        </div>
        <TodoForm editData={editData} getNewlyCreatedTodoItem = {handleModifyTodos} />

        {
            filteredTodos && filteredTodos.length ? (
                <TodoItem getIDToBeDeleted={handleDelete} getEditTodoData={getEditTodoData} todos = {filteredTodos}/>
            ) : <p className='no-todo'>No todos found</p>
        }
        
        </div>
    )
}
export default TodoList