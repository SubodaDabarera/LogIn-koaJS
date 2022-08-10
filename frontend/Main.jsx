import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddItems from './components/AddItems'
import CreateUser from './components/CreateUser'
import EditItems from './components/EditItems'
import HomePage from './components/HomePage'
import LogIn from './components/LogIn'

const Main = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LogIn/>} />
        <Route path='/home' element = {<HomePage/>} />
        <Route path='/addItems' element = {<AddItems/>} />
        <Route path='/editItems' element = {<EditItems/>} />
        <Route path = '/userRegister' element = {<CreateUser/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default Main