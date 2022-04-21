import React from 'react'
import "../CSS/login.css"


export default function Login() {
  return (
    <form className='login-container'>
        <h1 className='login-title'>Login:</h1>
      <label>
        <p>Username:</p>
        <input className='input' placeholder='Username' name='fname' type="name" required/>
      </label>
      <label>
        <p>Password:</p>
        <input className='input' placeholder='Password' type="password" r />
      </label>
      <div>
        <button type="submit" className='sub' onClick={(e) => {
                e.preventDefault();
                window.location.href='/';
                }}>Dang nhap</button>
      </div>
    </form>
  )
}
