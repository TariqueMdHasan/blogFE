import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();

    const submitLogin = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <button onClick={()=> navigate('/')}>Home</button>
        <h1>Login</h1>
        <form onClick={submitLogin} >
            <input type="email" name="email" placeholder='Email' /> <br />
            <input type="password" name="password" placeholder='Password' /> <br />
            <button >Login</button>
            <button onClick={()=> navigate('/register')} >Register</button>
        </form>
    </div>
  )
}

export default Login