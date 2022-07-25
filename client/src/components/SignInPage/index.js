import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { NavLink,Link } from 'react-router-dom';
import "../stylesheet.css"
function SignIN({e}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitEvent = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
    return(
<section className='login-form'>
<div class='row'>
        <div class='col-12 col-md-6 col-md-offset-3'>
          <h2>Login Form</h2>
          <form class='login' onSubmit={submitEvent}>
            <div className='form-group my-3'>
              <label for='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                class='form-control'
                id='email-input'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class='form-group my-3'>
              <label for='exampleInputPassword1'>Password</label>
              <input
                type='password'
                className='form-control'
                id='password-input'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='submit' className='btn btn-default btn-danger my-3'>Login</button>
          </form>
          <br />
          <p>Or sign up <Link to='/sign'>here</Link></p>
        </div>
      </div>
</section>
    )
}

export default SignIN;