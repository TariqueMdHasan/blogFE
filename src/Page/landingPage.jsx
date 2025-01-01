import React from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Welcome to the Landing Page</h1>
            <button onClick={()=> navigate('/register')} >Register</button>
            <button onClick={()=> navigate('/login')} >login</button>
        </div>
    )
}

export default LandingPage