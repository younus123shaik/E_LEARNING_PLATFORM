import React from 'react'
import {useNavigate} from 'react-router-dom'
const Signin = () => {
    const nav = useNavigate();
    const handleSubmit = () =>{
        nav('/login')
    }
  return (
    <div>
        Signin
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Signin