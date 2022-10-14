import React, { useRef,useEffect} from 'react'

const UseRefBasics = ()=> {

    const refContainer = useRef(null)
    const refContainer1 = useRef(null)
    const divContainer = useRef(null)

    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(refContainer.current.value);
        console.log(refContainer1.current.value);
        console.log(divContainer.current.textContent);

    }
    
    
    useEffect(()=>{
        console.log(refContainer.current);
        refContainer1.current.focus()
    })

    return ( <>
        <form action="" className='form' onSubmit={handleSubmit}>
            <div>
                <input type="text" ref={refContainer} />
                <input type="text" ref={refContainer1} />
                <button type='submit'>Submit</button>
            </div>
        </form>
        <div ref={divContainer}>Hello Uyghur</div>
    </>)
}

export default UseRefBasics
