
import React from 'react'
import { useReducer } from 'react'

const ReducerExample = () => {
    const initialState = {count:0}
    const reducer= (state, action)=>{
        if(action.type==='increment'){
            return {count:state.count+action.paylod}
    }

    if(action.type ==='decrement'){
        return {count:state.count-action.paylod}
}

    if(action.type==='reset'){
        return {count:0}
    }


    }
    
    const [state,dispatch] = useReducer(reducer, initialState)
    return (
    <div> <h1>Reducer Example</h1>
    <h1>Count: {state.count}</h1>
    <button onClick={()=>{
        dispatch({type:'increment',paylod:1})
    }}>increment</button>

<button onClick={()=>{
        dispatch({type:'decrement',paylod:1})
    }}>decrement</button>

<button onClick={()=>{
        dispatch({type:'reset'})
    }}>reset</button>

    </div>
  )
}

export default ReducerExample