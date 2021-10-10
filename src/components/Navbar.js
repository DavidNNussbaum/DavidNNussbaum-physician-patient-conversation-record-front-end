import React from 'react';
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0',
  background: 'grey',
  textDecoration: 'none',
  color: 'white',
}
const Navbar = (props) => {
const handleClick = () => {
  props.setLogoutUser()
  
}
 const loggedOut = props.currentUser.user === null
 return (
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'black'
      }}
    >Home</NavLink>
    {loggedOut  &&
      <NavLink
        to="/login"
        exact
        style={link}
        activeStyle={{
          background: 'black'
        }}
      >Login</NavLink>
    }
  {loggedOut &&
      <NavLink
        to="/signup"
        exact
        style={link}
        activeStyle={{
          background: 'black'
        }}
      >Signup</NavLink>
    }
     <NavLink
    to="/medications"
    exact
    style={link}
    activeStyle={{
      background: 'black'
      }}
    >Medications And Complications</NavLink>
    {props.currentUser.user !== null &&
      <NavLink
        to="/logout"
        exact
        style={link}
        activeStyle={{
          background: 'black'
        }} onClick={handleClick}
      >Logout</NavLink>
    }
  </div> )
}

  export default Navbar;