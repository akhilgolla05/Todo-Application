
import React from 'react'
import LoginComponent from './LoginComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent'
import NavBar from './NavBar'
import ListTodos from './ListTodos'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
import AuthProvider from '../security/AuthProvider'
import AddTodo from './AddTodo'
import EditEmployee from './EditEmployee'

const TodoComponent = () => {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route index element={<LoginComponent/>}/>
                <Route path="/" element={<LoginComponent/>}/>
                <Route path="/login" element={<LoginComponent/>}/>
                <Route path="/welcome/:username" element={<WelcomeComponent/>}/>
                <Route path="/todos" element={<ListTodos/>}/>
                <Route path="/add" element={<AddTodo/>}/>
                <Route path="/updateTodo/:id" element={<EditEmployee/>}/>
                <Route path="/logout" element={<LogoutComponent/>}/>
                
                <Route path="*" element={<ErrorComponent/>}/>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
        
      
    </>
  )
}

export default TodoComponent
