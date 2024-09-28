import React from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
const Student = () => {
    const nav = useNavigate();
    const handleBuycourse = ()=>{
        nav("/student/buycourse")
    }
   const handlePurchesedcourse = ()=>{
    nav("/student/purchasedcourses")
   }
  return (
    <div>
        <button onClick={handleBuycourse}>Buy Course</button>
        <button onClick={handlePurchesedcourse}>Purchased course</button>
        <Outlet/>
    </div>
  )
}

export default Student