
import React ,{useContext, useState,createContext} from 'react'


const Context = createContext(null)

const ContextExample = () => {
    const [count,setCount] = useState(0)
  return (

    <div className=' w-[250px] bg-red-300 mx-auto my-10 py-5 rounded-md '>

    <Context.Provider value={count} >
    <div>Context Example</div>
    <Child />
    <button onClick={()=> setCount(count+1)} className=" bg-gradient-to-r from-yellow-300 to-pink-500 px-5 rounded-md my-5 outline-blue-400 outline ">Add</button>
    </Context.Provider>
    </div>
  )
}

function Child(){
    return (
        <div >
            <h1>Parent Context</h1>
            <SubChild />
        </div>
    )
}

function SubChild(){
    const getCount = useContext(Context)
    return(
        <div>
            <h1>Subchild count is {getCount}</h1>
        </div>
    )
}

export default ContextExample