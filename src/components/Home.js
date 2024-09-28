import React from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
  const nav = useNavigate();
  const handleStudent = () =>{
       nav("/student");
  }
  const handleTrainer = ()=>{
    nav("/trainer")
  }
  return (
    <>
        <button onClick={handleTrainer}>Trainer</button>
        <button onClick={handleStudent}>Student</button>

    </>
  )
}

export default Home