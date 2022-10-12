import './App.css';
import React,{useState,useEffect} from 'react'
function App() {
  const [counter1,setCounter1] = useState(0)
  const [counter2,setCounter2] = useState(0)
  const [data,setData] = useState([])
  const [message,setMessage] = useState('')

  // useEffect(()=>{
  //   async function loadData(){
  //     const request = await fetch('https://jsonplaceholder.typicode.com/posts')
  
  //     const data = await request.json()
  //     console.log(data);
  //     if(data && data.length) setData(data)
  
  //   }
   
  // },[])

  async function loadData(){
    const request = await fetch('https://jsonplaceholder.typicode.com/posts')

    const data = await request.json()
    console.log(data);
    if(data && data.length) setData(data)

  }

  useEffect(()=>{
    if(counter1 === 5){
      setMessage('Counter1 reached to 5')
      loadData()
     
    }
  },[counter1])

  useEffect(()=>{
    if(counter2===6){
      setMessage('Counter2 reached to 6')
      setData([])
    }
  },[counter2])


  return (
   <>
    <div className='container'>
      <div>
        <button onClick={()=> setCounter1(counter1+1)}>Counter1</button>
        <h1>{counter1}</h1>
      </div>
      <div>
      <button onClick={()=> setCounter2(counter2+1)}>Counter2</button>
        <h1>{counter2}</h1>
      </div>
     <h1>{message}</h1>
     <ul>
      {
        data.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
     </ul>
    </div>
   </>
  );
}

export default App;
