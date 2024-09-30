import React from 'react'
import {useNavigate} from 'react-router-dom'
const Signin = () => {
    const nav = useNavigate();
    const handleSubmit = () =>{
        nav('/login')
    }
  return (
    <div className='loginbox'>
        <form className='loginform' onSubmit={handleSubmit}>
          <div style={{width:"100%",textAlign:"center"}}>
            <h1>Register Here</h1>
          </div>
          <label>Name</label>
          <input type='text' required/>
          <label>Email address</label>
          <div style={{display:"flex", flexDirection:"column"}}>
          <input type='email' required/>
          <small>we'll never share your email with anyone</small>
          </div>
          <label>Password</label>
          <input type='password' required/>
          <div className='radio'>
          <label>Role:</label>
          <div>
          <input type='radio'/>
          <label>Trainer</label>
          </div>
          <div>
          <input type='radio'/>
          <label>Student</label>
          </div>
          </div>
          <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
          <button type='submit' className='btnsignin' style={{padding:"10px"}}>Submit</button>
          </div>
        </form>
    </div>
  )
}

export default Signin