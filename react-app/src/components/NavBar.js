
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
import logo from '../images/petFriendly.png'
import LoginModal from './auth/LoginModal';
// import SignUpModal from './auth/SignUpModal';
import { useSelector } from 'react-redux';


const NavBar = ({email, password, firstName, lastName, username}) => {
  const user = useSelector(state => state.session.user)

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-logo-wrapper">
          <NavLink to='/spots' exact={true} activeClassName='active'>
            <img className="navbar-logo-image" src={logo} alt=""/>
          </NavLink>
        </div>

        
        <div className="navbar-buttons-wrapper">
            <NavLink to='/spots' exact={true} activeClassName='active'>
              <div className="navbar-buttons-wrapper-button">
                  <i className="fas fa-home fa-2x"></i>
              </div>
            </NavLink>

            <NavLink to={`/spots/add`} exact={true} activeClassName='active'>
              <div className="navbar-buttons-wrapper-button">
                <i className="fas fa-plus fa-2x"></i>
               
              </div>
            </NavLink>

            <NavLink to={`/users`} exact={true} activeClassName='active'>
              <div className="navbar-buttons-wrapper-button">
                <i className="far fa-user fa-2x"></i>
                
              </div>
            </NavLink>

            
          <div className='login-form-btn'>
           {!user &&  <LoginModal login={true} email={email} password={password} /> }
          </div>
          <div className='sign-up-form-btn'>
            {!user &&    <LoginModal login={false} username={username} firstName={firstName} lastName={lastName} email={email} password={password} />}
          </div>
          <div  className="logout-button"><LogoutButton /></div>
        </div>
      </div>
     </div>
  );
}

export default NavBar;
