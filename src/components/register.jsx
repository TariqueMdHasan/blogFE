import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
    const submitRegistration = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <button onClick={()=> navigate('/')}>Home</button>
            <h1>Registration</h1>
            <form onSubmit={submitRegistration} >
                <input type="text" name="userName" placeholder='User Name' /> <br />
                <input type="email" name="email" placeholder='Email' /> <br />
                <input type="password" name="password" placeholder='Password' /> <br />
                <button>Register</button>
                <button onClick={()=> navigate('/login')} >Login</button>
            </form>
            
        </div>
    )
  
}

export default Register