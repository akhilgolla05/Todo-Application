
import React from 'react'
import LoginComponent from './LoginComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent'
import NavBar from './NavBar'
import ListTodos from './ListTodos'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
import AuthProvider, { useAuth } from '../security/AuthProvider'
import AddTodo from './AddTodo'
import EditEmployee from './EditEmployee'
import { Navigate } from 'react-router-dom'

export const AuthenticatedRoute = ({children})=>{

  const context = useAuth()
  if(context.isAuthenticated)
      return children
  return <Navigate to="/"/>

}

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
                <Route path="/welcome/:username" element={
                
                <AuthenticatedRoute>
                    <WelcomeComponent/>
                </AuthenticatedRoute>
                }/>
                <Route path="/todos" element={
                
                <AuthenticatedRoute>
                  <ListTodos/> 
                </AuthenticatedRoute>
                }/>
                <Route path="/add" element={
                <AddTodo/>}/>
                <Route path="/updateTodo/:id" element={
                <AuthenticatedRoute>
                    <EditEmployee/>
                </AuthenticatedRoute>
                }/>
                <Route path="/logout" element={
                <AuthenticatedRoute>
                    <LogoutComponent/>
                </AuthenticatedRoute>
                }/>
                
                <Route path="*" element={
                <AuthenticatedRoute>
                    <ErrorComponent/>
                </AuthenticatedRoute>
                }/>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
        
      
    </>
  )
}

export default TodoComponent
