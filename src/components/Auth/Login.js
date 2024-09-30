import React from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const nav = useNavigate();
    const handleSubmit = ()=>{
        nav("/home")
    }
  return (
    <div className='loginbox'>
    <form className='loginform log' style={{height:"300px"}} onSubmit={handleSubmit}>
      <div style={{width:"100%",textAlign:"center"}}>
        <h1>Login Here</h1>
      </div>
      <label>Email address</label>
      <div style={{display:"flex", flexDirection:"column"}}>
      <input type='email' required/>
      <small>we'll never share your email with anyone</small>
      </div>
      <label>Password</label>
      <input type='password' required/>
      <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
      <button type='submit' className='btnlogin' style={{padding:"10px"}}>Submit</button>
      </div>
    </form>
</div>
  )
}

export default Login