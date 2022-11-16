
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateAccount from './CreateAccount'
import Login from './Login'
import LoginAccount from './LoginAccount'
import Navbar from './Navbar'

const LoginMain = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/new" element={<CreateAccount/>} />
    <Route path="/login" element={<LoginAccount/>} />
    </Routes>
    </div>
  )
}

export default LoginMain