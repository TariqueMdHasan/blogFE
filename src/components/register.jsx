import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: ''
    })

    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }


    const submitRegistration = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('https://blogbe-zjvf.onrender.com/api/auth/register', formData)
            setMessage(response.data.message || 'Registration successful. Please login.'); 
            alert(response.data.message || 'Registration successful. Please login.'); 
            setFormData({ userName: '', email: '', password: ''})
            navigate('/login')
        }catch(error){
            console.log('Error in frontend registration', error)
            setMessage(error.response?.data?.message || 'Registration failed. Please try again.');
        }
        
    }
    return (
        <div>
            <button onClick={()=> navigate('/')}>Home</button>
            <h1>Registration</h1>
            <form onSubmit={submitRegistration} >
                <input 
                    className='Login-userName login-input'
                    type="text" 
                    name="userName" 
                    placeholder='User Name' 
                    onChange= {handleChange}
                    required 
                /> <br />
                <input 
                    type="email" 
                    className='Login-email login-input'
                    name="email" 
                    placeholder='Email' 
                    onChange= {handleChange}
                    required
                /> <br />
                <input 
                    type="password" 
                    className='Login-password login-input'
                    name="password" 
                    placeholder='Password' 
                    onChange= {handleChange}
                    required
                /> <br />
                <button type='submit' >Register</button>
            </form>
            <button onClick={()=> navigate('/login')} >Login</button>
            {message && <p>{message}</p>}
        </div>
    )
  
}

export default Register