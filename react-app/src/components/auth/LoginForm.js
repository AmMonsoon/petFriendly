import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import loginlogo from '../../images/loginlogo.png'
import './LoginFormModal.css'


const LoginForm = ({onClose, setRenderLogin}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const clickHandler = e => {
    e.preventDefault()
    setRenderLogin(false)
  }
  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };
  const loginDemo = async (e) => {
    e.preventDefault();
    await dispatch(login('demo@aa.io', 'password'));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/spots' />;
  }


  return (
    <div className="login-page-container">
      <div className="logo-wrapper">
          <img className='login-logo' src={loginlogo} alt='' />
          <h2>Log In</h2>
      </div>
      
    <div className="login-section-container">
    <form onSubmit={onLogin}>
      <div className='form-errors'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label  htmlFor='email'>Email:</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        
      </div>
    </form>
    </div>
        <div className='modal-btns'> 
          <button type='submit' onClick={e => onLogin(e)}>Login</button>
          <button className="login-demo-btn" onClick={loginDemo}>Demo</button>
        </div>
      <div className="login__signup">
          Don't have an account? <NavLink onClick={clickHandler} className="login-page-signup-link" to="">Sign Up</NavLink>
      </div>
  </div>
  );
};

export default LoginForm;
