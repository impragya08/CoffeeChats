import React from 'react';
import SignIn from './SignIn';
import LogOut from './LogOut';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  nav: {
    backgroundColor: 'rgb(20, 23, 26)',
    color: 'white',
    height: '4.75rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: 'text-2xl font-bold',
};

const buttonStyle = {
  marginLeft: 'auto', // Keeps the logout button to the right
  color: 'black',
    border: '3px',
    fontSize: '1rem',
    cursor: 'pointer',
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div style={style.nav}>
      <h1 className={style.heading}>Coffee Chats</h1>
      <div style={buttonStyle}>
        {user ? <LogOut /> : <SignIn />}
      </div>
    </div>
  );
};

export default Navbar;
