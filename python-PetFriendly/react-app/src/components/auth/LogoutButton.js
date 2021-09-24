import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  const buttonStyle = {
    background: "none",
  
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  }

  return(
  <button className="logout-button" onClick={onLogout} style={buttonStyle}>

  Logout

</button>
  )
};

export default LogoutButton;
