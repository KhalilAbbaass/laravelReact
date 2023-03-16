import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
    }

  return (
    <div className='login-signup-form animated fadeInDown'>
        <div className='form'>
            <form onSubmit={handleLogin}>
                <h1 className='title'>Login Into Your Account</h1>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <button className='btn btn-block'>Login</button>
                <p className='message'>
                    Not Registered? <Link to="/signup">Create An Account</Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Login