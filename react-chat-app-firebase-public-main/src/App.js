import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  appContainer: 'max-w-[728px] mx-auto text-center',
  sectionContainer: {
   
    flex: 'flex flex-col h-[90vh]',
    backgroundImage: 'url("Brown Simple Lines Minimalist Join Now Chess Tournament Opening Poster.png")', // Set your desired background image URL here
    backgroundSize: 'cover', // Adjust the background size as needed
    backgroundRepeat: 'no-repeat', // Prevent background image from repeating
    marginTop: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ccc',
    position: 'relative',
  },
};








function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className={style.appContainer}>
      <section className='{style.sectionContainer}'>
        {/* Navbar */}
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
