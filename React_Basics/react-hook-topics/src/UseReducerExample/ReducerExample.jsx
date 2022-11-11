
import React from 'react'
import { useReducer } from 'react'

const ReducerExample = () => {
    const initialState = {count:0,name:'uyghur',age:20}
    const reducer= (state, action)=>{
        if(action.type==='increment'){
            return {...state,name:'Almas', count:state.count+1}
    }

    if(action.type ==='decrement'){
        return {name:'Ahmet',age:state.age-action.paylod,count:state.count-action.paylod}
}

    if(action.type==='reset'){
        return {name:'Samet',age:0,count:0}
    }


    }
    
    const [state,dispatch] = useReducer(reducer, initialState)
    const {name,age,count} = state 
    return (
    <div className='flex justify-center items-center mt-10'>

        <div>

    <div className=' divide-y-2'> <h1>Reducer Example</h1>
    <h1>Name: {name}</h1>
    <h1>Age: {age}</h1>
    <h1 className=''>Count: {count}</h1>
        </div>

    <div className='flex gap-3'>

    <button onClick={()=>{
        dispatch({type:'increment'})
    }}>increment</button>

<button onClick={()=>{
        dispatch({type:'decrement',paylod:1})
    }}>decrement</button>

<button onClick={()=>{
        dispatch({type:'reset'})
    }}>reset</button>
    </div>

    </div>
    </div>
  )
}

export default ReducerExample