import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { userLogIn } from '../api/userAPI'
import { useNavigate } from "react-router-dom";

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)
    const navigate = useNavigate();

    const handleLogInSubmit = () => {
        console.log(email, password)
        userLogIn({email, password}, setIsSuccess).then(() => {
            if(JSON.parse(localStorage.getItem("isSuccess")) === true)
                navigate('/home')
        })
    }

  return (
    <div style={{textAlign: 'center'}}>
        <h1>LogIn</h1>

        <span>Email</span>
        <input 
            type='text' onChange={(e) => setEmail(e.target.value)}
        />

        <span>Password</span>
        <input 
            type='text' onChange={(e) => setPassword(e.target.value)}
        />

        <button
            onClick={handleLogInSubmit}
        >
            Submit
        </button>

        <div>
            Or
            <Link to = '/userRegister'>
                Register
            </Link>
        </div>

    </div>
  )
}

export default LogIn