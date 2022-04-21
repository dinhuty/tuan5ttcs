import React from 'react'
import "../CSS/login.css"


export default function Register() {
  return (
    <form className='login-container'>
        <h1 className='login-title'>Register:</h1>
      <label>
        <p>Username:</p>
        <input className='input' placeholder='Username' name='fname' type="name" required/>
      </label>
      <label>
        <p>Email:</p>
        <input className='input' placeholder='Email' type="email" required/>
      </label>
      <label>
        <p>Password:</p>
        <input className='input' placeholder='Password' type="password" r />
      </label>
     
      <div>
        <button type="submit" className='sub' onClick={(e) => {
                e.preventDefault();
                window.location.href='/';
                }}>Dang ky</button>
      </div>
    </form>
  )
}
