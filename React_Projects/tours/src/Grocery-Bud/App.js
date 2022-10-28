import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { FaEdit, FaTrash } from 'react-icons/fa'


function App() {

  const [val,setVal] = useState('')
  const [list,setList] = useState([])
  const [editable,setEditable] = useState(false)
  const [editableId,setEditableId] = useState(0)
  const [submit,setSubmit] = useState(false)
  const [del,setDel] = useState(false)


 

  const handleClick= (e) => {
    e.preventDefault()
    let newVal = e.target.value
    setVal(newVal)

  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    const newList = {id:new Date().getTime().toString(), value:val}
    setList([...list,newList])
    setSubmit(true)

    if(editable){

     const changed = list.filter((li)=>li.value===val)
     const changedList = list.filter((li)=>li.id !==editableId)
     console.log(changedList);
     const newEditItem = {id:editableId,value:val}
     setList([...changedList,newEditItem])
     setVal("")
     setEditable(false)
     setSubmit(false)
     console.log(changed);
    }
    
    setVal("")
  }


 

  const delItem = (id)=>{
    setDel(true)
    setList((list)=> {
     return list.filter((l)=>  l.id !== id
     )
    })
    setDel(false)
  }

  const editItem = (id)=> {
    
    
      const editableItem = list.filter((li)=> li.id === id)
      setVal(editableItem[0].value)
      setEditableId(id)
     
      setEditable(true)
      // console.log(editedItem);
      
    
  }

 

  return <>
    <div className=' bg-slate-200 w-4/6 mx-auto shadow-lg shadow-neutral-500 lg:w-2/5 rounded-md flex flex-col my-16'>

<div className='text-center my-10'>
    <h1 className=' capitalize font-[700] text-2xl  '>grocery bud</h1>
</div>
{/* <div className='mx-auto'>
  <h1>{submit && "Item added"}</h1>
  <h1>{editable && "Item Edited"}</h1>
  <h1>{del && "Item deleted"}</h1>
</div> */}
<div className='text-center py-2'>
<form action="" className='py-5' onSubmit={handleSubmit}>
    <input type="text" placeholder='e.g. eggs' className='rounded ml-2 px-2 w-64 bg-sky-50' value={val}
      onChange={handleClick }
    />
    <button className='px-4 rounded-md bg-sky-300 mx-2' onClick={handleSubmit}>{editable ? 'Edit' : 'Submit'}</button>
</form>
</div>


<div className='my-5'>
  
    {
     list.map((l)=>{
      const {id,value} = l
      return (
      <div key={id} className='flex bg-green-100 mx-7 my-5 py-2 rounded-md shadow-md'>

      <h1 className='flex-1 mx-2 font-[500] capitalize' >{value.toLowerCase()}</h1>
        <FaEdit className=' text-red-700 my-auto hover:text-blue-600' onClick={()=>editItem(id)}/>
        <FaTrash className='mr-3 ml-2 text-red-700 my-auto hover:text-blue-600'  onClick={()=>delItem(id)}/>
        
      </div>
      )
     })
    }
   
</div>


    </div>
  </>
}

export default App