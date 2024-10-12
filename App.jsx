import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import Dashboard from './components/dashboard'
import Home from "./components/Home"
import Employee from './components/employee'
import Category from './components/Category'
import AddCategory from './components/AddCategory'
import Addgmt from './components/addGmtype'
import Profile from './components/Profile'
import AddEmployee from './components/addEmployee'
import EditEmployee from './components/editEmployee'
import Start from './components/start'
import EmployeeLogin from './components/employee_login'
import EmployeeDetail from './components/employeeDetail'
import PrivateRoute from './components/privateRoute'
import Userorder from './components/userorder'
import Stylelist from './components/stylelist'
import Stylemodel from './components/stylemodel'
import Addstyle from './components/addstyle'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start" element={<Start />}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path='/employee_detail/:id' element={<EmployeeDetail/>}></Route>
        <Route path='/userorder' element={<Userorder/>}></Route>
        <Route path="/employee_login" element={<EmployeeLogin />}></Route>
        
        <Route path='/dashboard' element={
        <PrivateRoute >
          <Dashboard />
        </PrivateRoute>
        }>
          <Route path="" element={< Home />}> </Route>
          <Route path="/dashboard/employee" element={< Employee />}> </Route>
          <Route path="/dashboard/category" element={< Category />}> </Route>
          <Route path="/dashboard/profile" element={< Profile />}> </Route>
          <Route path="/dashboard/add_category" element={< AddCategory />}> </Route>
          <Route path="/dashboard/add_employee" element={< AddEmployee />}> </Route>
          <Route path="/dashboard/edit_employee/:id" element={< EditEmployee />}> </Route>
          
        </Route>

        <Route path='/user' element={
        <PrivateRoute >
          <Userorder/>
        </PrivateRoute>
        }>
          <Route path="" element={< Home />}> </Route>
          <Route path="/user/employee" element={< Employee />}> </Route>
          <Route path="/user/category" element={< Category />}> </Route>
          <Route path="/user/stylemode" element={< Stylemodel />}> </Route>
          <Route path="/user/addgmt" element={< Addgmt />}> </Route>
          <Route path="/user/add_style" element={< Addstyle />}> </Route>
          <Route path="/user/edit_employee/:id" element={< EditEmployee />}> </Route>
          <Route path="/user/stylelist" element={< Stylelist />}> </Route>
          
          

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
