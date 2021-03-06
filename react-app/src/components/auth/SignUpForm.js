import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect , NavLink} from 'react-router-dom';
import { signUp } from '../../store/session';
import loginlogo from '../../images/loginlogo.png'

const SignUpForm = ({setRenderLogin}) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    let error;
      const data = await dispatch(signUp(username,firstName, lastName, email, password));
      if (data) {
        setErrors(data)
      }
    // }else{
    //   setErrors(["Passwords do not match"])
    // }
  
    if(password !== repeatPassword){
      if(data){
       error = [...data]
       error.push(["Passwords do not match"])
      }else{
        error = ["Passwords do not match"]
      }
      setErrors(error)
    }


  }
  const clickHandler = e => {
    e.preventDefault()
    setRenderLogin(true)
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  const updateFirstName= (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName= (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/spots' />;
  }

  return (
    <div className="login-page-container">
      <div className="logo-wrapper">
      <img className='login-logo' src={loginlogo} alt='' />
          <h2>Sign Up!</h2>
    
      </div>
    <div className="login-section-container">
    <form onSubmit={onSignUp}>
      <div className='form-errors'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>User Name:</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>First Name:</label>
        <input
          type='text'
          name='firstname'
          onChange={updateFirstName}
          value={firstName}
        ></input>
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type='text'
          name='firstname'
          onChange={updateLastName}
          value={lastName}
        ></input>
      </div>
      <div>
        <label>Email:</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password:</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password:</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
    </form>
    </div>
      <button className='sign-up-button' type='submit' onClick={e => onSignUp(e)}>Sign Up</button>
    <div className="signup__login">
          Already have an account? <NavLink onClick={clickHandler} className="login-page-signup-link" to="">Log In</NavLink>
        </div>
  </div>

  );
};

export default SignUpForm;
