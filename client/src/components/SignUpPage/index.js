import React, { useEffect } from 'react';
import { NavLink,Link } from 'react-router-dom';
import "../stylesheet.css"

// const form = document.getElementById('reg-form')
// form.addEventListener('submit', registerUser)

// async function registerUser(event) {
//   event.preventDefault()
//   const username = document.getElementById('username').value
//   const password = document.getElementById('password').value

//   const result = await fetch('/api/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       username,
//       password
//     })
//   }).then((res) => res.json())

//   if (result.status === 'ok') {
//     alert('Success')
//   } else {
//     alert(result.error)
//   }
// }


function SignUp() {
    return(
<section className='sign-out-form'>
<div class='row'>
        <div class='col-12 col-md-6 col-md-offset-3'>
          <h2>Sign Up Form</h2>
          <form class='signup'>
            <div class='form-group my-4'>
              <label for='exampleInputEmail1'>Username</label>
              <input
                booktype='text'
                class='form-control'
                id='signup-username'
                placeholder='Username'
              />
            </div>
            <div class='form-group my-4'>
              <label for='exampleInputEmail1'>Email address</label>
              <input
                booktype='email'
                class='form-control'
                id='signup-email'
                placeholder='Email'
              />
            </div>
            <div class='form-group my-4'>
              <label for='exampleInputPassword1'>Password</label>
              <input
                booktype='password'
                class='form-control'
                id='signup-password'
                placeholder='Password'
              />
            </div>
           
            <button booktype='submit' class='btn btn-danger my-4'>Sign Up</button>
          </form>
          <br />
          <p>Or log in <Link to='/login'>here</Link></p>
        </div>
      </div>
</section>
    )
}

export default SignUp;