import React from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const nav = useNavigate();
    const handleSubmit = ()=>{
        nav("/home")
    }
  return (
    <div>
        Login
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login