import React, { useReducer,useEffect,useRef } from 'react'

const Modal = ({modalContent,closeModal})=> {
    
useEffect(()=>{
    setTimeout(()=>{
        closeModal()
    },3000)
})

    return(
        <>
        <div style={{textAlign:'center',color:"red",textTransform:'capitalize'}}>
        <p>
      {modalContent}
        </p>
        </div>
        </>
    )
}

export default Modal