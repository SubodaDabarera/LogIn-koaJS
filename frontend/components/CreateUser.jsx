import React, { useState } from 'react'
import { createUser } from '../api/userAPI'

const CreateUser = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('Customer')
    const [age, setAge] = useState(18)

    const handleRegisterSubmit = () =>{
        console.log(username, email, password, role, age)
        createUser({username, email, password, role, age})
    }

  return (
    <div style={{textAlign: 'center'}}>
        <h1>Register user</h1>

        <span>Username</span>
        <input 
            type='text' onChange={(e) => setUsername(e.target.value)}
        /><br></br>

        <span>Email</span>
        <input 
            type='text' onChange={(e) => setEmail(e.target.value)}
        /><br></br>

        <span>Password</span>
        <input 
            type='text' onChange={(e) => setPassword(e.target.value)}
        /><br></br>

        <span>Role</span>
        <input type="radio" value="Cutomer" name="role" 
            onClick={(e) => setRole(e.target.value)}
        /> Cutomer
        <input type="radio" value="Trader" name="role" 
        onClick={(e) => setRole(e.target.value)}
        /> Trader
        <br></br>

        <span>Age</span>
        <input 
            type='text' onChange={(e) => setAge(e.target.value)}
        />
        <br></br>
        <br></br>

        <button
            onClick={handleRegisterSubmit}
        >
            Submit
        </button>

    </div>
  )
}

export default CreateUser