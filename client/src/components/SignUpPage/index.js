import React, { useEffect,useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
function SignUp() {
  const [formState, setFormState] = useState({ username:'',email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  console.log(formState);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        userName: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
<div className='row'>
        <div className='col-12 col-md-6 col-md-offset-3'>
          <h2>Sign Up Form</h2>
          <form onSubmit={handleFormSubmit} className='signup'>
            <div className='form-group my-4'>
              <label htmlFor='exampleInputEmail1'>Username</label>
              <input
                booktype='text'
                className='form-control'
                id='signup-username'
                placeholder='Username'
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className='form-group my-4'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input
                booktype='email'
                className='form-control'
                id='signup-email'
                placeholder='Email'
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className='form-group my-4'>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <input
                type='password'
                className='form-control'
                id='signup-password'
                placeholder='Password'
                name="password"
                onChange={handleChange}
              />
            </div>
           
            <button booktype='submit' className='btn btn-danger my-4'>Sign Up</button>
          </form>
          <br />
          <p>Or log in <Link to='/login'>here</Link></p>
        </div>
      </div>
</section>
    )
}

export default SignUp;