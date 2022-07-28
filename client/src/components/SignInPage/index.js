import React, { useEffect,useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
function SignIN() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  console.log(formState);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    return(
<section className='p-5'>
  <p class="text-center bg-danger text-white p-2">
    Please login before having access to cart</p>
<div class='row'>
        <div class='col-12 col-md-6 col-md-offset-3'>
          <h2>Login Form</h2>
          <form class='login ' onSubmit={handleFormSubmit}>
            <div className='form-group my-3'>
              <label for='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                class='form-control'
                id='email-input'
                placeholder='Email'
                name='email'
                onChange={handleChange}
              />
            </div>
            <div class='form-group my-3'>
              <label for='exampleInputPassword1'>Password</label>
              <input
                type='password'
                className='form-control'
                id='password-input'
                placeholder='Password'
                name ='password'
                onChange={handleChange}
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