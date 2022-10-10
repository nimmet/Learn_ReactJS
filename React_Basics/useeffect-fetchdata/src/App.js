import './App.css';
import React,{useEffect,useState} from 'react';

const url = 'https://api.github.com/users'

function App() {

const [users,setUsers] = useState([])

const getUsers = async ()=> {
  const response = await fetch(url)
  const users = await response.json();
  setUsers(users);
}

useEffect(()=>{
getUsers()
},[])


  return (
    <>

    <div className='container'>
    <h3>github users</h3>
    <ul >
    {users.map((user)=>{
      const {id,login,avatar_url,html_url} = user
      return <li key={id} className='user'>
        <img src={avatar_url} alt={login} style={{borderRadius:'50%',height:'45px'}} />
        
        <div className='profile'>
        <h4 className='login'>{login}</h4>
        <a href={html_url}>profile</a>
        </div>
          

       
      </li>
})}
    </ul>
    </div>
  
    
    </>
  );
}

export default App;
