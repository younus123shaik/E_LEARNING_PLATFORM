import './App.css';
import Home from './components/Home';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Login from './components/Auth/Login';
import Signin from './components/Auth/Signin';
import Register from './components/Auth/Register';
import Student from './components/Student Components/Student';
import Trainer from './components/Trainer Components/Trainer';
import Addcourse from './components/Trainer Components/Addcourse';
import Addlesson from './components/Trainer Components/Addlesson';
import Viewcourses from './components/Trainer Components/Viewcourses';
import Buycourse from './components/Student Components/Buycourse';
import Purchasedcourse from './components/Student Components/Purchasedcourse';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Auth Routes */}
      <Route path='/login' element={<Login />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/' element={<Register />} />
      
      {/* Home Page */}
      <Route path='/home' element={<Home />} />
  
      {/* Trainer Routes */}
      <Route path='/trainer' element={<Trainer />}>
        <Route path='addcourse' element={<Addcourse/>} />
        <Route path='addlesson' element={<Addlesson/>} />
        <Route path='viewcourses' element={<Viewcourses/>} />
      </Route>
  
      {/* Student Routes */}
      <Route path='/student' element={<Student />}>
        <Route path='buycourse' element={<Buycourse/>} />
        <Route path='purchasedcourses' element={<Purchasedcourse/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
