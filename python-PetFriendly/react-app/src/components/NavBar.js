
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
import logo from '../images/petFriendly.png'
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
          <NavLink to='/spots' exact={true} activeClassName='active'>
        <div className="navbar__logo--wrapper">
            <img className="navbar-logo-image" src={logo} alt=""/>
        </div>
          </NavLink>

        {/* <div className="navbar__searchToBe"></div> */}
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

            

          <div className="logout-button"><LogoutButton /></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
