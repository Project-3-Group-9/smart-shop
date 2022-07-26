import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { NEW_USER } from '../../utils/mutations';

function Signup() {
  const [formState, setFormState] = useState({firstName:'',lastName:'', email: '', password: '' });
  const [newUser] = useMutation(NEW_USER);

  const handleFormSubmit = async (event) => {
    debugger;
    event.preventDefault();
     // check if form has everything (as per react-bootstrap docs)
     const form = event.currentTarget;
     if (form.checkValidity() === false) {
       event.preventDefault();
       event.stopPropagation();
     }
    try {
    const {data} = await newUser({
      variables: {
        variables: { ...formState }
      },
    });
    console.log(data);
    Auth.login(data.newUser.token);
  }catch (err) {
    console.error(err);
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
      <>
<section className='p-5'>
<div className='row'>
        <div className='col-12 col-md-6 col-md-offset-3'>
          <h2>Sign Up Form</h2>
          <form className='signup' onSubmit={handleFormSubmit}>
            <div className='form-group my-4'>
              <label htmlFor='firstName'>First name</label>
              <input
                booktype='text'
                className='form-control'
                name='firstName'
                placeholder='First name'
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group my-4'>
              <label htmlFor='lastName'>Last name</label>
              <input
                type='text'
                className='form-control'
                name='lastName'
                placeholder='Last name'
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group my-4'>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group my-4'>
              <label for='password'>Password</label>
              <input
                className='form-control'
                name='password'
                type='password'
                placeholder='Password'
                onChange={handleChange}
                required
              />
            </div>
           
            <button type='submit' className='btn btn-danger my-4'>Sign Up</button>
          </form>
          <br />
          <p>Or log in <Link to='/login'>here</Link></p>
        </div>
      </div>
</section>
  </>
    )
}

export default Signup;