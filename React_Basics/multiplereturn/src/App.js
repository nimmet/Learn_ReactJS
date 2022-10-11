import './App.css';
import React, {useEffect,useState} from 'react';

const url = 'https://api.github.com/users/QuincyLarson'


function App() {
  const [isLoading,setLoading] = useState(true)
  const [isError,setError] = useState(false)
  const [user,setUser] = useState('default user')

  useEffect(()=>{
    fetch(url)
    .then((resp)=>resp.json())
    .then((user)=> {
      const {login} = user
      setUser(login)
      setLoading(false)
    })
    .catch((error) => {setError(true)
    console.log(error);})
  })

  if(isLoading){
    return( 
    <div>
      <h2>Loading...</h2>
    </div>
    )
  }

  if(isError){
    return( 
    <div>
      <h2>Error...</h2>
    </div>
    )
  }

  return (
    <div className="App">
     <h2>{user}</h2>
    </div>
  );
}

export default App;
