import './App.css';
import React, {useState} from 'react'
function App() {
  let [value,setValue] = useState(0)

  const increase = ()=>{
    // value = value+1
    setValue(++value)
    
  }

  const decrease = ()=>{
    setValue(--value)

  }

  const reset = ()=>{
    setValue(0)
  }

  const complexInc = ()=> {
    setTimeout(()=>{
      setValue((prevState)=>{
        return prevState + 1
      })
    },2000)
  }
  return (
   <>
    <section className='counter' style={{margin:'4rem 0',textAlign:'center'}}>
    <h2>Regular Counter</h2>
    <h1>{value}</h1>

    <button className='btn' onClick={increase}>Increase</button>
    <button className='btn' onClick={reset}>reset</button>
    <button className='btn' onClick={decrease}>decrease</button>
    </section>

    <section className='counter' style={{margin:'4rem 0',textAlign:'center'}}>
    <h2>More Complex Counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={complexInc}>increase later</button>
    </section>
   </>
  );
}

export default App;
