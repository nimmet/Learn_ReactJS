
import React from 'react'
import { useState } from 'react'
import CreateAccount from './CreateAccount'
import LoginAccount from './LoginAccount'

const Login = () => {

    const [newAccount,setNewAccount] = useState(false)
    
    const handleCreateAccount= (e)=>{
        e.preventDefault()
        setNewAccount(!newAccount)
    }
  return (
    <div>
    {
        newAccount ? <CreateAccount /> : <LoginAccount handleCreateAccount={handleCreateAccount}/>
    }
    </div>
  )
}

export default Login