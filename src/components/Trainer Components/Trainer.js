import React from 'react'
import {useNavigate,Outlet} from 'react-router-dom'
const Trainer = () => {
    const basepath = "/trainer"
    const nav = useNavigate();
    const handleAddcourse = ()=>{
        nav(`${basepath}/addcourse`);
    }
    const handleAddlesson = ()=>{
        nav(`${basepath}/addlesson`);
    }
    const handleViewcourses = ()=>{
        nav(`${basepath}/viewcourses`);
    }
  return (
    <div>
        Trainer
        <button onClick={handleAddcourse }>Add Course</button>
        <button onClick={handleAddlesson}>Add Lesson</button>
        <button onClick={handleViewcourses}>View Courses</button>
        <Outlet/>
    </div>
  )
}

export default Trainer