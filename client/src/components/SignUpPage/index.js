import React, { useEffect } from 'react';
function SignUp() {
    return(
<section className='p-5'>
<div class='row' style="height:400px;">
        <div class='col-12 col-md-6 col-md-offset-3'>
          <h2>Sign Up Form</h2>
          <form class='signup'>
            <div class='form-group'>
              <label for='exampleInputEmail1'>Username</label>
              <input
                booktype='text'
                class='form-control'
                id='signup-username'
                placeholder='Username'
              />
            </div>
            <div class='form-group'>
              <label for='exampleInputEmail1'>Email address</label>
              <input
                booktype='email'
                class='form-control'
                id='signup-email'
                placeholder='Email'
              />
            </div>
            <div class='form-group'>
              <label for='exampleInputPassword1'>Password</label>
              <input
                booktype='password'
                class='form-control'
                id='signup-password'
                placeholder='Password'
              />
            </div>
            <div
              style='display: none;'
              id='alert'
              class='alert alert-danger'
              role='alert'
            >
              <span
                class='glyphicon glyphicon-exclamation-sign'
                aria-hidden='true'
              ></span>
              <span class='sr-only'>Error:</span> <span class='msg'></span>
            </div>
            <button booktype='submit' class='btn btn-default btn-outline-info'>Sign Up</button>
          </form>
          <br />
          <p>Or log in <a href='/login'>here</a></p>
        </div>
      </div>
</section>
    )
}

export default SignUp;